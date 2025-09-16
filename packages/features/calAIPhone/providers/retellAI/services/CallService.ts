import { checkRateLimitAndThrowError } from "@calcom/lib/checkRateLimitAndThrowError";
import { HttpError } from "@calcom/lib/http-error";
import logger from "@calcom/lib/logger";

import type {
  AIPhoneServiceProviderType,
  AIPhoneServiceCall,
} from "../../interfaces/AIPhoneService.interface";
import type { AgentRepositoryInterface } from "../../interfaces/AgentRepositoryInterface";
import type { RetellAIRepository, RetellDynamicVariables } from "../types";

const MIN_CREDIT_REQUIRED_FOR_TEST_CALL = 5;

export class CallService {
  private logger = logger.getSubLogger({ prefix: ["CallService"] });

  constructor(
    private retellRepository: RetellAIRepository,
    private agentRepository: AgentRepositoryInterface
  ) {}

  async createPhoneCall(data: {
    from_number: string;
    to_number: string;
    retell_llm_dynamic_variables?: RetellDynamicVariables;
  }): Promise<AIPhoneServiceCall<AIPhoneServiceProviderType.RETELL_AI>> {
    if (!data.from_number?.trim()) {
      throw new HttpError({
        statusCode: 400,
        message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ,
      });
    }

    if (!data.to_number?.trim()) {
      throw new HttpError({
        statusCode: 400,
        message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ,
      });
    }

    try {
      return await this.retellRepository.createPhoneCall({
        from_number: data.from_number,
        to_number: data.to_number,
        retell_llm_dynamic_variables: data.retell_llm_dynamic_variables,
      });
    } catch (error) {
      this.logger.error("Failed to create phone call in external AI service", {
        fromNumber: data.from_number,
        toNumber: data.to_number,
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

  async createTestCall({
    agentId,
    phoneNumber,
    userId,
    teamId,
  }: {
    agentId: string;
    phoneNumber?: string;
    userId: number;
    teamId?: number;
  }) {
    if (!agentId?.trim()) {
      throw new HttpError({
        statusCode: 400,
        message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ,
      });
    }

    await this.validateCreditsForTestCall({ userId, teamId });

    await checkRateLimitAndThrowError({
      rateLimitingType: "core",
      identifier: `test-call:${userId}`,
    });

    const toNumber = phoneNumber?.trim();
    if (!toNumber) {
      throw new HttpError({
        statusCode: 400,
        message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ,
      });
    }

    const agent = await this.agentRepository.findByIdWithCallAccess({
      id: agentId,
      userId,
    });

    if (!agent) {
      throw new HttpError({
        statusCode: 404,
        message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ,
      });
    }

    const agentPhoneNumber = agent.outboundPhoneNumbers?.[0]?.phoneNumber;

    if (!agentPhoneNumber) {
      throw new HttpError({
        statusCode: 400,
        message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ,
      });
    }

    const call = await this.createPhoneCall({
      from_number: agentPhoneNumber,
      to_number: toNumber,
    });

    return {
      callId: call.call_id,
      status: call.call_status,
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    };
  }

  private async validateCreditsForTestCall({ userId, teamId }: { userId: number; teamId?: number }) {
    try {
      const { CreditService } = await import("@calcom/features/ee/billing/credit-service");
      const creditService = new CreditService();
      const credits = await creditService.getAllCredits({
        userId,
        teamId,
      });

      const availableCredits =
        (credits?.totalRemainingMonthlyCredits || 0) + (credits?.additionalCredits || 0);

      if (availableCredits < MIN_CREDIT_REQUIRED_FOR_TEST_CALL) {
        throw new HttpError({
          statusCode: 403,
          message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          ,
        });
      }
    } catch (error) {
      // Re-throw HTTP errors (like insufficient credits) as-is
      if (error instanceof HttpError) {
        throw error;
      }

      this.logger.error("Failed to validate credits for test call", {
        userId,
        teamId,
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
}
