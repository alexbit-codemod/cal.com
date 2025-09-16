import { HttpError } from "@calcom/lib/http-error";
import logger from "@calcom/lib/logger";
import { PhoneNumberSubscriptionStatus } from "@calcom/prisma/enums";

import type {
  AIPhoneServiceCreatePhoneNumberParams,
  AIPhoneServiceImportPhoneNumberParamsExtended,
  AIPhoneServiceProviderType,
  AIPhoneServicePhoneNumber,
} from "../../../interfaces/AIPhoneService.interface";
import type { AgentRepositoryInterface } from "../../interfaces/AgentRepositoryInterface";
import type { PhoneNumberRepositoryInterface } from "../../interfaces/PhoneNumberRepositoryInterface";
import type { TransactionInterface } from "../../interfaces/TransactionInterface";
import { RetellAIServiceMapper } from "../RetellAIServiceMapper";
import type { RetellAIRepository } from "../types";

export class PhoneNumberService {
  private logger = logger.getSubLogger({ prefix: ["PhoneNumberService"] });

  constructor(
    private retellRepository: RetellAIRepository,
    private agentRepository: AgentRepositoryInterface,
    private phoneNumberRepository: PhoneNumberRepositoryInterface,
    private transactionManager: TransactionInterface
  ) {}

  async importPhoneNumber(
    data: AIPhoneServiceImportPhoneNumberParamsExtended
  ): Promise<AIPhoneServicePhoneNumber<AIPhoneServiceProviderType.RETELL_AI>> {
    if (!data || !data.phone_number?.trim()) {
      throw new HttpError({
        statusCode: 400,
        message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ,
      });
    }

    const { userId, agentId, teamId, ...rest } = data;

    await this.validateTeamPermissions(userId, teamId);
    const agent = await this.validateAgentPermissions(userId, agentId);

    let transactionState = {
      retellPhoneNumber: null as AIPhoneServicePhoneNumber<AIPhoneServiceProviderType.RETELL_AI> | null,
      databaseRecordCreated: false,
      agentAssigned: false,
    };

    try {
      return await this.transactionManager.executeInTransaction(async (txContext) => {
        transactionState.retellPhoneNumber = await this.retellRepository.importPhoneNumber({
          phone_number: rest.phone_number,
          termination_uri: rest.termination_uri,
          sip_trunk_auth_username: rest.sip_trunk_auth_username,
          sip_trunk_auth_password: rest.sip_trunk_auth_password,
          nickname: rest.nickname,
        });

        await txContext.phoneNumberRepository.createPhoneNumber({
          phoneNumber: transactionState.retellPhoneNumber.phone_number,
          userId,
          provider: "custom-telephony",
          teamId,
          outboundAgentId: agent?.id || null,
        });
        transactionState.databaseRecordCreated = true;

        if (agent) {
          await this.retellRepository.updatePhoneNumber(transactionState.retellPhoneNumber.phone_number, {
            outbound_agent_id: agent.providerAgentId,
          });
          transactionState.agentAssigned = true;
        }

        return transactionState.retellPhoneNumber;
      });
    } catch (error) {
      await this.handleCompensatingTransaction(transactionState, error, { userId, teamId, agentId });
      throw error;
    }
  }

  async createPhoneNumber(
    data: AIPhoneServiceCreatePhoneNumberParams
  ): Promise<AIPhoneServicePhoneNumber<AIPhoneServiceProviderType.RETELL_AI>> {
    try {
      return await this.retellRepository.createPhoneNumber(data);
    } catch (error) {
      this.logger.error("Failed to create phone number in external AI service", {
        data,
        error,
      });
      throw new HttpError({
        statusCode: 500,
        message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ,
      });
    }
  }

  async deletePhoneNumber({
    phoneNumber,
    userId,
    teamId,
    deleteFromDB = false,
  }: {
    phoneNumber: string;
    userId: number;
    teamId?: number;
    deleteFromDB: boolean;
  }): Promise<void> {
    if (!phoneNumber?.trim()) {
      throw new HttpError({
        statusCode: 400,
        message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ,
      });
    }

    const phoneNumberToDelete = teamId
      ? await this.phoneNumberRepository.findByPhoneNumberAndTeamId({
          phoneNumber,
          teamId,
          userId,
        })
      : await this.phoneNumberRepository.findByPhoneNumberAndUserId({
          phoneNumber,
          userId,
        });

    if (!phoneNumberToDelete) {
      throw new HttpError({
        statusCode: 404,
        message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ,
      });
    }

    if (phoneNumberToDelete.subscriptionStatus === PhoneNumberSubscriptionStatus.ACTIVE) {
      throw new HttpError({
        statusCode: 400,
        message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ,
      });
    }
    if (phoneNumberToDelete.subscriptionStatus === PhoneNumberSubscriptionStatus.CANCELLED) {
      throw new HttpError({
        statusCode: 400,
        message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ,
      });
    }

    try {
      await this.retellRepository.updatePhoneNumber(phoneNumber, {
        inbound_agent_id: null,
        outbound_agent_id: null,
      });
    } catch (error) {
      this.logger.error("Failed to remove agents from phone number in Retell", {
        phoneNumber,
        error,
      });
    }

    await this.retellRepository.deletePhoneNumber(phoneNumber);

    if (deleteFromDB) {
      await this.phoneNumberRepository.deletePhoneNumber({ phoneNumber });
    }
  }

  async getPhoneNumber(
    phoneNumber: string
  ): Promise<AIPhoneServicePhoneNumber<AIPhoneServiceProviderType.RETELL_AI>> {
    if (!phoneNumber?.trim()) {
      throw new HttpError({
        statusCode: 400,
        message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ,
      });
    }

    try {
      return await this.retellRepository.getPhoneNumber(phoneNumber);
    } catch (error) {
      this.logger.error("Failed to get phone number from external AI service", {
        phoneNumber,
        error,
      });
      throw new HttpError({
        statusCode: 500,
        message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ,
      });
    }
  }

  async updatePhoneNumber(
    phoneNumber: string,
    data: { inbound_agent_id?: string | null; outbound_agent_id?: string | null }
  ): Promise<AIPhoneServicePhoneNumber<AIPhoneServiceProviderType.RETELL_AI>> {
    if (!phoneNumber?.trim()) {
      throw new HttpError({
        statusCode: 400,
        message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ,
      });
    }

    if (!data || Object.keys(data).length === 0) {
      throw new HttpError({
        statusCode: 400,
        message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ,
      });
    }

    try {
      return await this.retellRepository.updatePhoneNumber(phoneNumber, data);
    } catch (error) {
      this.logger.error("Failed to update phone number in external AI service", {
        phoneNumber,
        data,
        error,
      });
      throw new HttpError({
        statusCode: 500,
        message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ,
      });
    }
  }

  async updatePhoneNumberWithAgents({
    phoneNumber,
    userId,
    teamId,
    inboundAgentId,
    outboundAgentId,
  }: {
    phoneNumber: string;
    userId: number;
    teamId?: number;
    inboundAgentId?: string | null;
    outboundAgentId?: string | null;
  }) {
    if (!phoneNumber?.trim()) {
      throw new HttpError({
        statusCode: 400,
        message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ,
      });
    }

    const phoneNumberRecord = teamId
      ? await this.phoneNumberRepository.findByPhoneNumberAndTeamId({
          phoneNumber,
          teamId,
          userId,
        })
      : await this.phoneNumberRepository.findByPhoneNumberAndUserId({
          phoneNumber,
          userId,
        });

    if (!phoneNumberRecord) {
      throw new HttpError({
        statusCode: 404,
        message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ,
      });
    }

    await this.validateAgentAccess(userId, teamId, inboundAgentId, "inbound");
    await this.validateAgentAccess(userId, teamId, outboundAgentId, "outbound");

    try {
      await this.getPhoneNumber(phoneNumber);

      const retellUpdateData = RetellAIServiceMapper.mapPhoneNumberUpdateData(
        inboundAgentId,
        outboundAgentId
      );

      if (Object.keys(retellUpdateData).length > 0) {
        await this.updatePhoneNumber(phoneNumber, retellUpdateData);
      }
    } catch (error: unknown) {
      this.logger.error("Failed to update phone number in external AI service", {
        phoneNumber,
        error,
        note: "Continuing with local database update only",
      });
    }

    await this.phoneNumberRepository.updateAgents({
      id: phoneNumberRecord.id,
      inboundProviderAgentId: inboundAgentId,
      outboundProviderAgentId: outboundAgentId,
    });

    return { message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     };
  }

  private async validateTeamPermissions(userId: number, teamId?: number) {
    if (teamId) {
      const canManage = await this.agentRepository.canManageTeamResources({
        userId,
        teamId,
      });
      if (!canManage) {
        throw new HttpError({
          statusCode: 403,
          message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          ,
        });
      }
    }
  }

  private async validateAgentPermissions(userId: number, agentId?: string) {
    let agent = null;
    if (agentId) {
      agent = await this.agentRepository.findByIdWithUserAccess({
        agentId,
        userId,
      });

      if (!agent) {
        throw new HttpError({
          statusCode: 403,
          message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          ,
        });
      }
    }
    return agent;
  }

  private async validateAgentAccess(
    userId: number,
    teamId: number | undefined,
    agentId: string | null | undefined,
    type: "inbound" | "outbound"
  ) {
    if (agentId) {
      const agent = await this.agentRepository.findByProviderAgentIdWithUserAccess({
        providerAgentId: agentId,
        userId,
      });

      if (!agent) {
        throw new HttpError({
          statusCode: 403,
          message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          ,
        });
      }

      if (teamId && agent.teamId !== teamId) {
        throw new HttpError({
          statusCode: 403,
          message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          ,
        });
      }
    }
  }

  private async handleCompensatingTransaction(
    transactionState: {
      retellPhoneNumber: AIPhoneServicePhoneNumber<AIPhoneServiceProviderType.RETELL_AI> | null;
      databaseRecordCreated: boolean;
      agentAssigned: boolean;
    },
    error: unknown,
    context: { userId: number; teamId?: number; agentId?: string }
  ) {
    if (transactionState.retellPhoneNumber?.phone_number) {
      try {
        this.logger.warn("Attempting cleanup of Retell phone number due to transaction failure", {
          phoneNumber: transactionState.retellPhoneNumber.phone_number,
        });
        await this.retellRepository.deletePhoneNumber(transactionState.retellPhoneNumber.phone_number);
        this.logger.info("Successfully cleaned up Retell phone number", {
          phoneNumber: transactionState.retellPhoneNumber.phone_number,
        });
      } catch (cleanupError) {
        const compensationFailureMessage = // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ;

        this.logger.error(compensationFailureMessage, {
          phoneNumber: transactionState.retellPhoneNumber.phone_number,
          userId: context.userId,
          teamId: context.teamId,
          agentId: context.agentId,
          originalError: error,
          cleanupError: cleanupError,
          transactionState: {
            retellCreated: !!transactionState.retellPhoneNumber,
            databaseCreated: transactionState.databaseRecordCreated,
            agentAssigned: transactionState.agentAssigned,
          },
          requiresManualCleanup: true,
        });

        throw new HttpError({
          statusCode: 500,
          message: compensationFailureMessage,
        });
      }
    }
  }
}
