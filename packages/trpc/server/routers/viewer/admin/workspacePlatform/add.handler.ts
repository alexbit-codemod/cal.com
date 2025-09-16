import type { z } from "zod";

import logger from "@calcom/lib/logger";
import { WorkspacePlatformRepository } from "@calcom/lib/server/repository/workspacePlatform";

import { TRPCError } from "@trpc/server";

import type { workspacePlatformCreateSchema } from "./schema";
import { ensureNoServiceAccountKey } from "./utils";

export default async function addHandler({
  input,
}: {
  input: z.infer<typeof workspacePlatformCreateSchema>;
}) {
  try {
    const workspacePlatform = await WorkspacePlatformRepository.create(input);
    return ensureNoServiceAccountKey(workspacePlatform);
  } catch (error) {
    logger.error(error);
    throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     });
  }
}
