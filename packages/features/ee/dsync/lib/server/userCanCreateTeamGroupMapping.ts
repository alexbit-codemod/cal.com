import { canAccess } from "@calcom/features/ee/sso/lib/saml";
import prisma from "@calcom/prisma";
import type { TrpcSessionUser } from "@calcom/trpc/server/types";

import { TRPCError } from "@trpc/server";

const userCanCreateTeamGroupMapping = async (
  user: NonNullable<TrpcSessionUser>,
  organizationId: number | null,
  teamId?: number
) => {
  if (!organizationId) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    });
  }

  const { message, access } = await canAccess(user, organizationId);
  if (!access) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message,
    });
  }

  if (teamId) {
    const orgTeam = await prisma.team.findFirst({
      where: {
        id: teamId,
        parentId: organizationId,
      },
      select: {
        id: true,
      },
    });

    if (!orgTeam) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ,
      });
    }
  }

  return { organizationId };
};

export default userCanCreateTeamGroupMapping;
