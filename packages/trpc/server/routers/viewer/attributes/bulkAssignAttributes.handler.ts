import prisma from "@calcom/prisma";

import { TRPCError } from "@trpc/server";

import type { TrpcSessionUser } from "../../../types";
import { processUserAttributes } from "./attributeUtils";
import type { ZBulkAssignAttributes } from "./bulkAssignAttributes.schema";

type GetOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: ZBulkAssignAttributes;
};

const bulkAssignAttributesHandler = async ({ input, ctx }: GetOptions) => {
  const org = ctx.user.organization;

  if (!org.id) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    });
  }

  // Create a map of attribute types for quick lookup
  const attributeTypes = new Map<string, string>();

  // Ensure this organization can access these attributes and attribute options
  const attributes = await prisma.attribute.findMany({
    where: {
      id: {
        in: input.attributes.map((attribute) => attribute.id),
      },
      teamId: org.id,
    },
    select: {
      id: true,
      type: true,
      options: true,
    },
  });

  if (attributes.length !== input.attributes.length) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    });
  }

  // Store attribute types in the map
  attributes.forEach((attr) => {
    attributeTypes.set(attr.id, attr.type);
  });

  const results = await Promise.all(
    input.userIds.map(async (userId) => {
      return prisma.$transaction(async (tx) => {
        // Add type information to the input attributes
        const attributesWithType = input.attributes.map((attr) => ({
          ...attr,
          type: attributeTypes.get(attr.id),
        }));

        // @ts-expect-error - org.id is being checked above for nullish
        return processUserAttributes(tx, userId, org.id, attributesWithType);
      });
    })
  );

  const successCount = results.filter((result) => result.success).length;
  const failureCount = results.length - successCount;

  return {
    success: true,
    message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    results,
  };
};

export default bulkAssignAttributesHandler;
