import { MembershipRepository } from "@calcom/lib/server/repository/membership";
import { getAttributesForTeam } from "@calcom/lib/service/attribute/server/getAttributes";
import type { TrpcSessionUser } from "@calcom/trpc/server/types";

import { TRPCError } from "@trpc/server";

import type { TGetAttributesForTeamInputSchema } from "./getAttributesForTeam.schema";

type GetAttributesForTeamHandlerOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: TGetAttributesForTeamInputSchema;
};

export default async function getAttributesForTeamHandler({
  ctx,
  input,
}: GetAttributesForTeamHandlerOptions) {
  const { teamId } = input;
  const { user } = ctx;
  const isMemberOfTeam = await MembershipRepository.findUniqueByUserIdAndTeamId({ userId: user.id, teamId });

  if (!isMemberOfTeam) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    });
  }

  return getAttributesForTeam({ teamId });
}
