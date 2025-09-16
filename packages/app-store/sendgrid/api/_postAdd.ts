import type { NextApiRequest } from "next";

import { symmetricEncrypt } from "@calcom/lib/crypto";
import { HttpError } from "@calcom/lib/http-error";
import logger from "@calcom/lib/logger";
import { defaultResponder } from "@calcom/lib/server/defaultResponder";
import prisma from "@calcom/prisma";

import checkSession from "../../_utils/auth";
import getInstalledAppPath from "../../_utils/getInstalledAppPath";

export async function getHandler(req: NextApiRequest) {
  const session = checkSession(req);

  const { api_key } = req.body;
  if (!api_key) throw new HttpError({ statusCode: 400, message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   });

  let encrypted;
  try {
    encrypted = symmetricEncrypt(JSON.stringify({ api_key }), process.env.CALENDSO_ENCRYPTION_KEY || "");
  } catch (reason) {
    logger.error("Could not add Sendgrid app", reason);
    throw new HttpError({ statusCode: 500, message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     });
  }

  const data = {
    type: "sendgrid_other_calendar",
    key: { encrypted },
    userId: session.user?.id,
    appId: "sendgrid",
  };

  try {
    await prisma.credential.create({
      data,
    });
  } catch (reason) {
    logger.error("Could not add Sendgrid app", reason);
    throw new HttpError({ statusCode: 500, message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     });
  }

  return { url: getInstalledAppPath({ variant: "other", slug: "sendgrid" }) };
}

export default defaultResponder(getHandler);
