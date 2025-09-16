import { defaultResponderForAppDir } from "app/api/defaultResponderForAppDir";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import z from "zod";

import { appStoreMetadata } from "@calcom/app-store/appStoreMetaData";
import { CREDENTIAL_SYNC_SECRET, CREDENTIAL_SYNC_SECRET_HEADER_NAME } from "@calcom/lib/constants";
import { APP_CREDENTIAL_SHARING_ENABLED } from "@calcom/lib/constants";
import { symmetricDecrypt } from "@calcom/lib/crypto";
import prisma from "@calcom/prisma";

const appCredentialWebhookRequestBodySchema = z.object({
  // UserId of the cal.com user
  userId: z.number().int(),
  appSlug: z.string(),
  // Keys should be AES256 encrypted with the CALCOM_APP_CREDENTIAL_ENCRYPTION_KEY
  keys: z.string(),
});

async function postHandler(request: NextRequest) {
  if (!APP_CREDENTIAL_SHARING_ENABLED) {
    return NextResponse.json({ message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     }, { status: 403 });
  }

  const secretHeader = request.headers.get(CREDENTIAL_SYNC_SECRET_HEADER_NAME);
  if (secretHeader !== CREDENTIAL_SYNC_SECRET) {
    return NextResponse.json({ message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     }, { status: 403 });
  }

  try {
    const body = await request.json();
    const reqBodyParsed = appCredentialWebhookRequestBodySchema.safeParse(body);

    if (!reqBodyParsed.success) {
      return NextResponse.json({ error: reqBodyParsed.error.issues }, { status: 400 });
    }

    const reqBody = reqBodyParsed.data;

    const user = await prisma.user.findUnique({ where: { id: reqBody.userId } });

    if (!user) {
      return NextResponse.json({ message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
       }, { status: 404 });
    }

    const app = await prisma.app.findUnique({
      where: { slug: reqBody.appSlug },
      select: { dirName: true },
    });

    if (!app) {
      return NextResponse.json({ message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
       }, { status: 404 });
    }

    const appMetadata = appStoreMetadata[app.dirName as keyof typeof appStoreMetadata];

    if (!appMetadata) {
      return NextResponse.json(
        { message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
         },
        { status: 404 }
      );
    }

    const keys = JSON.parse(
      symmetricDecrypt(reqBody.keys, process.env.CALCOM_APP_CREDENTIAL_ENCRYPTION_KEY || "")
    );

    // INFO: Can't use prisma upsert as we don't know the id of the credential
    const appCredential = await prisma.credential.findFirst({
      where: {
        userId: reqBody.userId,
        appId: appMetadata.slug,
      },
      select: {
        id: true,
      },
    });

    if (appCredential) {
      await prisma.credential.update({
        where: {
          id: appCredential.id,
        },
        data: {
          key: keys,
        },
      });
      return NextResponse.json({ message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
       });
    } else {
      await prisma.credential.create({
        data: {
          key: keys,
          userId: reqBody.userId,
          appId: appMetadata.slug,
          type: appMetadata.type,
        },
      });
      return NextResponse.json({ message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
       });
    }
  } catch (error) {
    console.error("Error processing app credential webhook:", error);
    return NextResponse.json({ message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     }, { status: 500 });
  }
}

export const POST = defaultResponderForAppDir(postHandler);
