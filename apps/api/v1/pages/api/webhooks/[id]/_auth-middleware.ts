import type { NextApiRequest } from "next";

import { HttpError } from "@calcom/lib/http-error";
import prisma from "@calcom/prisma";

import { schemaQueryIdAsString } from "~/lib/validations/shared/queryIdString";

async function authMiddleware(req: NextApiRequest) {
  const { userId, isSystemWideAdmin } = req;
  const { id } = schemaQueryIdAsString.parse(req.query);
  // Admins can just skip this check
  if (isSystemWideAdmin) return;
  // Check if the current user can access the webhook
  const webhook = await prisma.webhook.findFirst({
    where: { id, appId: null, OR: [{ userId }, { eventType: { team: { members: { some: { userId } } } } }] },
  });
  if (!webhook) throw new HttpError({ statusCode: 403, message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   });
}

export default authMiddleware;
