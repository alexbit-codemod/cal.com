import { FeaturesRepository } from "@calcom/features/flags/features.repository";
import { OrganizationRepository } from "@calcom/lib/server/repository/organization";
import prisma from "@calcom/prisma";
import type { TrpcSessionUser } from "@calcom/trpc/server/types";

import { TRPCError } from "@trpc/server";

type ListHandlerInput = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
};

// This functionality is essentially the same as the teams/list.handler.ts but it's easier for SOC to have it in a separate file.
export const listHandler = async ({ ctx }: ListHandlerInput) => {
  const organizationId = ctx.user.organization?.id ?? ctx.user.profiles[0]?.organizationId;
  if (!organizationId) {
    throw new TRPCError({ code: "BAD_REQUEST", message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     });
  }

  const currentOrg = await OrganizationRepository.findCurrentOrg({
    userId: ctx.user.id,
    orgId: organizationId,
  });

  if (!currentOrg) {
    return currentOrg;
  }

  const featureRepo = new FeaturesRepository(prisma);
  const hasDelegationCredential = await featureRepo.checkIfTeamHasFeature(
    organizationId,
    "delegation-credential"
  );

  return {
    ...currentOrg,
    features: {
      delegationCredential: hasDelegationCredential,
    },
  };
};

export default listHandler;
