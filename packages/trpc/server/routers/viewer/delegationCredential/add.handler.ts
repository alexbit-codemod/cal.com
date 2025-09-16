import type { z } from "zod";

import { DelegationCredentialRepository } from "@calcom/lib/server/repository/delegationCredential";
import { WorkspacePlatformRepository } from "@calcom/lib/server/repository/workspacePlatform";

import { TRPCError } from "@trpc/server";

import type { DelegationCredentialCreateSchema } from "./schema";
import {
  ensureDelegationCredentialNotAlreadyConfigured,
  ensureNoServiceAccountKey,
  handleDelegationCredentialError,
} from "./utils";

export default async function handler({
  input,
  ctx,
}: {
  input: z.infer<typeof DelegationCredentialCreateSchema>;
  ctx: { user: { id: number; organizationId: number | null } };
}) {
  const { workspacePlatformSlug, domain, serviceAccountKey } = input;
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

  try {
    const workspacePlatform = await WorkspacePlatformRepository.findBySlug({
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

    await ensureDelegationCredentialNotAlreadyConfigured({
      domain,
      currentOrganizationId: organizationId,
      delegationCredentialBeingUpdatedId: null,
    });

    const createdDelegation = await DelegationCredentialRepository.create({
      workspacePlatformId: workspacePlatform.id,
      domain,
      // We don't want to enable by default because enabling requires some checks to be completed and it has a separate flow.
      enabled: false,
      organizationId,
      serviceAccountKey,
    });

    return ensureNoServiceAccountKey(createdDelegation);
  } catch (error) {
    handleDelegationCredentialError(error);
  }
}
