import { Resource } from "@calcom/features/pbac/domain/types/permission-registry";
import { getResourcePermissions } from "@calcom/features/pbac/lib/resource-permissions";
import prisma from "@calcom/prisma";
import { MembershipRole } from "@calcom/prisma/client";

import { TRPCError } from "@trpc/server";

import type { TrpcSessionUser } from "../../../types";
import type { ZToggleActiveSchema } from "./toggleActive.schema";

type GetOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: ZToggleActiveSchema;
};

const toggleActiveHandler = async ({ input, ctx }: GetOptions) => {
  const org = ctx.user.organization;

  if (!org.id) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    });
  }

  const membership = await prisma.membership.findFirst({
    where: {
      userId: ctx.user.id,
      teamId: org.id,
    },
    select: {
      role: true,
    },
  });

  if (!membership) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    });
  }

  const { canEdit } = await getResourcePermissions({
    userId: ctx.user.id,
    teamId: org.id,
    resource: Resource.Attributes,
    userRole: membership.role,
    fallbackRoles: {
      update: {
        roles: [MembershipRole.ADMIN, MembershipRole.OWNER],
      },
    },
  });

  if (!canEdit) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    });
  }

  // Ensure that this users org owns the attribute
  const attribute = await prisma.attribute.findUnique({
    where: {
      id: input.attributeId,
      teamId: org.id,
    },
    select: {
      id: true,
      enabled: true,
    },
  });

  if (!attribute) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    });
  }

  // Toggle the attribute
  await prisma.attribute.update({
    where: {
      id: input.attributeId,
    },
    data: {
      enabled: !attribute.enabled,
    },
  });

  // Save us refetching the attribute to get the correct value
  return {
    ...attribute,
    enabled: !attribute.enabled,
  };
};

export default toggleActiveHandler;
