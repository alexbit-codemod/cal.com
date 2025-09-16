import type { NextApiRequest } from "next";

import { HttpError } from "@calcom/lib/http-error";

export default function checkSession(req: NextApiRequest) {
  if (!req.session?.user?.id) {
    throw new HttpError({ statusCode: 401, message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     });
  }
  return req.session;
}
