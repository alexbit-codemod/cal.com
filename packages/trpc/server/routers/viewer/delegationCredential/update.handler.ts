import type { z } from "zod";

import { DelegationCredentialRepository } from "@calcom/lib/server/repository/delegationCredential";
import { WorkspacePlatformRepository } from "@calcom/lib/server/repository/workspacePlatform";

import { TRPCError } from "@trpc/server";

import type { DelegationCredentialUpdateSchema } from "./schema";
import {
  ensureDelegationCredentialNotAlreadyConfigured,
  ensureNoServiceAccountKey,
  handleDelegationCredentialError,
} from "./utils";

export default async function handler({
  input,
  ctx,
}: {
  input: z.infer<typeof DelegationCredentialUpdateSchema>;
  ctx: { user: { id: number; organizationId: number | null } };
}) {
  const { id, workspacePlatformSlug, domain } = input;
  const { user } = ctx;
  const { organizationId } = user;

  if (!organizationId) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    });
  }

  await ensureDelegationCredentialNotAlreadyConfigured({
    domain,
    currentOrganizationId: organizationId,
    delegationCredentialBeingUpdatedId: id,
  });

  try {
    const workspacePlatform = await WorkspacePlatformRepository.findBySlugIncludeSensitiveServiceAccountKey({
      slug: workspacePlatformSlug,
    });

    if (!workspacePlatform) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ,
      });
    }

    const updatedDelegation = await DelegationCredentialRepository.updateById({
      id,
      data: {
        workspacePlatformId: workspacePlatform.id,
        domain,
        organizationId,
      },
    });

    return ensureNoServiceAccountKey(updatedDelegation);
  } catch (error) {
    handleDelegationCredentialError(error);
  }
}
