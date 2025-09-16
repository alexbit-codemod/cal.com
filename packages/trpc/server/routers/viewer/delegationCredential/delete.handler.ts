import type z from "zod";

import { DelegationCredentialRepository } from "@calcom/lib/server/repository/delegationCredential";

import { TRPCError } from "@trpc/server";

import type { DelegationCredentialDeleteSchema } from "./schema";

export default async function handler({
  input,
}: {
  input: z.infer<typeof DelegationCredentialDeleteSchema>;
}) {
  const { id } = input;

  // We might want to consider allowing this in the future. Right now, toggling off DelegationCredential achieves similar but non-destructive effect
  throw new TRPCError({ code: "BAD_REQUEST", message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   });
  await DelegationCredentialRepository.deleteById({ id });

  return { id };
}
