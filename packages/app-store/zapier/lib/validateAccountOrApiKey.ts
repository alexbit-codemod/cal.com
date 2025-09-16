import type { NextApiRequest } from "next";

import isAuthorized from "@calcom/features/auth/lib/oAuthAuthorization";
import findValidApiKey from "@calcom/features/ee/api-keys/lib/findValidApiKey";
import { HttpError } from "@calcom/lib/http-error";

export async function validateAccountOrApiKey(req: NextApiRequest, requiredScopes: string[] = []) {
  const apiKey = req.query.apiKey as string;

  if (!apiKey) {
    const token = req.headers.authorization?.split(" ")[1] || "";
    const authorizedAccount = await isAuthorized(token, requiredScopes);
    if (!authorizedAccount) throw new HttpError({ statusCode: 401, message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     });
    return { account: authorizedAccount, appApiKey: undefined };
  }

  const validKey = await findValidApiKey(apiKey, "zapier");
  if (!validKey) throw new HttpError({ statusCode: 401, message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   });
  return { account: null, appApiKey: validKey };
}
