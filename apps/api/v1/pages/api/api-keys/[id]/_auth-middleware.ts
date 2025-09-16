import type { NextApiRequest } from "next";

import { HttpError } from "@calcom/lib/http-error";
import prisma from "@calcom/prisma";

import { schemaQueryIdAsString } from "~/lib/validations/shared/queryIdString";

export async function authMiddleware(req: NextApiRequest) {
  const { userId, isSystemWideAdmin } = req;
  const { id } = schemaQueryIdAsString.parse(req.query);
  // Admin can check any api key
  if (isSystemWideAdmin) return;
  // Check if user can access the api key
  const apiKey = await prisma.apiKey.findFirst({
    where: { id, userId },
  });
  if (!apiKey) throw new HttpError({ statusCode: 404, message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   });
}
