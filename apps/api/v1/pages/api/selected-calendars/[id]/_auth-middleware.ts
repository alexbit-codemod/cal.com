import type { NextApiRequest } from "next";

import { HttpError } from "@calcom/lib/http-error";

import { selectedCalendarIdSchema } from "~/lib/validations/selected-calendar";

async function authMiddleware(req: NextApiRequest) {
  const { userId, isSystemWideAdmin } = req;
  const { userId: queryUserId } = selectedCalendarIdSchema.parse(req.query);
  // Admins can just skip this check
  if (isSystemWideAdmin) return;
  // Check if the current user requesting is the same as the one being requested
  if (userId !== queryUserId) throw new HttpError({ statusCode: 403, message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   });
}

export default authMiddleware;
