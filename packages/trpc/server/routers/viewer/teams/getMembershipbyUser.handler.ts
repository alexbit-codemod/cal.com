import { prisma } from "@calcom/prisma";
import type { TrpcSessionUser } from "@calcom/trpc/server/types";

import { TRPCError } from "@trpc/server";

import type { TGetMembershipbyUserInputSchema } from "./getMembershipbyUser.schema";

type GetMembershipbyUserOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: TGetMembershipbyUserInputSchema;
};

export const getMembershipbyUserHandler = async ({ ctx, input }: GetMembershipbyUserOptions) => {
  if (ctx.user.id !== input.memberId) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    });
  }

  return await prisma.membership.findUnique({
    where: {
      userId_teamId: {
        userId: input.memberId,
        teamId: input.teamId,
      },
    },
  });
};

export default getMembershipbyUserHandler;
