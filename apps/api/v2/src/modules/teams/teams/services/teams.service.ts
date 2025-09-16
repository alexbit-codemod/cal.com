import { StripeService } from "@/modules/stripe/stripe.service";
import { TeamsMembershipsRepository } from "@/modules/teams/memberships/teams-memberships.repository";
import { CreateTeamInput } from "@/modules/teams/teams/inputs/create-team.input";
import { UpdateTeamDto } from "@/modules/teams/teams/inputs/update-team.input";
import { TeamsRepository } from "@/modules/teams/teams/teams.repository";
import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { slugify } from "@calcom/platform-libraries";

@Injectable()
export class TeamsService {
  private isTeamBillingEnabled = this.configService.get("stripe.isTeamBillingEnabled");

  constructor(
    private readonly teamsRepository: TeamsRepository,
    private readonly teamsMembershipsRepository: TeamsMembershipsRepository,
    private readonly stripeService: StripeService,
    private readonly configService: ConfigService
  ) {}

  async createTeam(input: CreateTeamInput, ownerId: number) {
    const { autoAcceptCreator, ...teamData } = input;
    if (!teamData.slug) {
      teamData.slug = slugify(teamData.name);
    }

    const existingTeam = await this.teamsMembershipsRepository.findTeamMembershipsByNameAndUser(
      input.name,
      ownerId
    );
    if (existingTeam) {
      throw new BadRequestException({
        message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ,
      });
    }

    if (!this.isTeamBillingEnabled) {
      const team = await this.teamsRepository.create(teamData);
      await this.teamsMembershipsRepository.createTeamMembership(team.id, {
        userId: ownerId,
        role: "OWNER",
        accepted: !!autoAcceptCreator,
      });
      return team;
    }

    const pendingTeam = await this.teamsRepository.create({ ...teamData, pendingPayment: true });

    const checkoutSession = await this.stripeService.generateTeamCheckoutSession(pendingTeam.id, ownerId);

    if (!checkoutSession.url) {
      await this.teamsRepository.delete(pendingTeam.id);
      throw new InternalServerErrorException({
        message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ,
      });
    }

    return {
      message:
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ,
      paymentLink: checkoutSession.url,
      pendingTeam,
    };
  }

  async getUserTeams(userId: number) {
    const teams = await this.teamsRepository.getTeamsUserIsMemberOf(userId);
    return teams;
  }

  async updateTeam(teamId: number, data: UpdateTeamDto) {
    const team = await this.teamsRepository.update(teamId, data);
    return team;
  }
}
