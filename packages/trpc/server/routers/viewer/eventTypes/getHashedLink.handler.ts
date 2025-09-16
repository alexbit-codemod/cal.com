import { HashedLinkRepository } from "@calcom/lib/server/repository/hashedLinkRepository";
import { HashedLinkService } from "@calcom/lib/server/service/hashedLinkService";
import type { PrismaClient } from "@calcom/prisma";
import type { TrpcSessionUser } from "@calcom/trpc/server/types";

import { TRPCError } from "@trpc/server";

type GetHashedLinkOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
    prisma: PrismaClient;
  };
  input: {
    linkId: string;
  };
};

export const getHashedLinkHandler = async ({ ctx, input }: GetHashedLinkOptions) => {
  const { linkId } = input;

  if (!linkId) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    });
  }

  const hashedLinkRepository = HashedLinkRepository.create();
  // Get the hashed link with usage data
  const hashedLink = await hashedLinkRepository.findLinkWithEventTypeDetails(linkId);

  if (!hashedLink) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    });
  }

  // Check if the user has permission to access this hashed link
  const hashedLinkService = new HashedLinkService();
  const hasPermission = await hashedLinkService.checkUserPermissionForLink(hashedLink, ctx.user.id);

  if (!hasPermission) {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    });
  }

  return {
    id: hashedLink.id,
    link: hashedLink.link,
    expiresAt: hashedLink.expiresAt,
    maxUsageCount: hashedLink.maxUsageCount,
    usageCount: hashedLink.usageCount,
  };
};
