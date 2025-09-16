import type { NextApiRequest } from "next";

import { HttpError } from "@calcom/lib/http-error";
import prisma from "@calcom/prisma";

import { membershipIdSchema } from "~/lib/validations/membership";

async function authMiddleware(req: NextApiRequest) {
  const { userId, isSystemWideAdmin } = req;
  const { teamId } = membershipIdSchema.parse(req.query);
  // Admins can just skip this check
  if (isSystemWideAdmin) return;
  // Only team members can modify a membership
  const membership = await prisma.membership.findFirst({ where: { userId, teamId } });
  if (!membership) throw new HttpError({ statusCode: 403, message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   });
}

export default authMiddleware;
