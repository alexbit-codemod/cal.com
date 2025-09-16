import { createOrganizationFromOnboarding } from "@calcom/features/ee/organizations/lib/server/createOrganizationFromOnboarding";
import { IS_SELF_HOSTED } from "@calcom/lib/constants";
import { OrganizationOnboardingRepository } from "@calcom/lib/server/repository/organizationOnboarding";

import { TRPCError } from "@trpc/server";

import type { TrpcSessionUser } from "../../../types";
import type { TCreateSelfHostedInputSchema } from "./createSelfHosted.schema";

type CreateSelfHostedOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: TCreateSelfHostedInputSchema;
};

export const createSelfHostedHandler = async ({ input, ctx }: CreateSelfHostedOptions) => {
  if (!IS_SELF_HOSTED) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    });
  }

  if (!input.onboardingId) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    });
  }

  const organizationOnboarding = await OrganizationOnboardingRepository.findById(input.onboardingId);

  if (!organizationOnboarding) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    });
  }

  if (!organizationOnboarding.orgOwnerEmail) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    });
  }

  const { organization } = await createOrganizationFromOnboarding({
    organizationOnboarding: {
      id: input.onboardingId,
      logo: input.logo ?? null,
      bio: input.bio ?? null,
      invitedMembers: input.invitedMembers ?? [],
      teams: input.teams ?? [],
      orgOwnerEmail: organizationOnboarding.orgOwnerEmail,
      slug: organizationOnboarding.slug,
      name: organizationOnboarding.name,
      billingPeriod: organizationOnboarding.billingPeriod,
      seats: organizationOnboarding.seats,
      pricePerSeat: organizationOnboarding.pricePerSeat,
      stripeCustomerId: organizationOnboarding.stripeCustomerId,
      isPlatform: organizationOnboarding.isPlatform,
      isDomainConfigured: organizationOnboarding.isDomainConfigured,
      organizationId: organizationOnboarding.organizationId,
    },
  });

  await OrganizationOnboardingRepository.markAsComplete(organizationOnboarding.id);

  return {
    organization,
  };
};

export default createSelfHostedHandler;
