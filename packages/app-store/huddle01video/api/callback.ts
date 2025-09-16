import type { NextApiRequest, NextApiResponse } from "next";

import { getServerSession } from "@calcom/features/auth/lib/getServerSession";
import { getSafeRedirectUrl } from "@calcom/lib/getSafeRedirectUrl";

import getInstalledAppPath from "../../_utils/getInstalledAppPath";
import { decodeOAuthState } from "../../_utils/oauth/decodeOAuthState";
import { storeHuddle01Credential } from "../utils/storage";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession({ req });

  const state = decodeOAuthState(req);

  if (!session) {
    return res.status(401).json({ message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     });
  }

  const userId = session.user.id;

  const { identityToken } = req.query;

  const token = Array.isArray(identityToken) ? identityToken[0] : identityToken;
  if (!token) {
    return res.status(401).json({
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    });
  }

  await storeHuddle01Credential(userId, token);

  res.redirect(
    getSafeRedirectUrl(state?.returnTo) ?? getInstalledAppPath({ variant: "conferencing", slug: "huddle01" })
  );
}
