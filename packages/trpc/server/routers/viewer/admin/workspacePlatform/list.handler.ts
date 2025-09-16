import { WorkspacePlatformRepository } from "@calcom/lib/server/repository/workspacePlatform";

import { TRPCError } from "@trpc/server";

import { ensureNoServiceAccountKey } from "./utils";

export default async function listHandler() {
  try {
    const workspacePlatforms = await WorkspacePlatformRepository.findAll();
    return workspacePlatforms.map(ensureNoServiceAccountKey);
  } catch (error) {
    console.error(error);
    throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     });
  }
}
