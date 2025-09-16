import jsforce from "@jsforce/jsforce-node";
import type { NextApiRequest, NextApiResponse } from "next";

import { WEBAPP_URL_FOR_OAUTH } from "@calcom/lib/constants";
import { getSafeRedirectUrl } from "@calcom/lib/getSafeRedirectUrl";

import getAppKeysFromSlug from "../../_utils/getAppKeysFromSlug";
import getInstalledAppPath from "../../_utils/getInstalledAppPath";
import createOAuthAppCredential from "../../_utils/oauth/createOAuthAppCredential";
import { decodeOAuthState } from "../../_utils/oauth/decodeOAuthState";
import appConfig from "../config.json";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;
  const state = decodeOAuthState(req);

  if (code === undefined && typeof code !== "string") {
    res.status(400).json({ message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     });
    return;
  }

  if (!req.session?.user?.id) {
    return res.status(401).json({ message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     });
  }

  let consumerKey = "";
  let consumerSecret = "";
  const appKeys = await getAppKeysFromSlug("salesforce");
  if (typeof appKeys.consumer_key === "string") consumerKey = appKeys.consumer_key;
  if (typeof appKeys.consumer_secret === "string") consumerSecret = appKeys.consumer_secret;
  if (!consumerKey) return res.status(400).json({ message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   });
  if (!consumerSecret) return res.status(400).json({ message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   });

  const conn = new jsforce.Connection({
    oauth2: {
      clientId: consumerKey,
      clientSecret: consumerSecret,
      redirectUri: `${WEBAPP_URL_FOR_OAUTH}/api/integrations/salesforce/callback`,
    },
  });

  const salesforceTokenInfo = await conn.oauth2.requestToken(code as string);

  await createOAuthAppCredential({ appId: appConfig.slug, type: appConfig.type }, salesforceTokenInfo, req);

  res.redirect(
    getSafeRedirectUrl(state?.returnTo) ?? getInstalledAppPath({ variant: "other", slug: "salesforce" })
  );
}
