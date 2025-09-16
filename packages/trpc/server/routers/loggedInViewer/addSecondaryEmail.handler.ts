import type { GetServerSidePropsContext, NextApiResponse } from "next";

import { sendEmailVerification } from "@calcom/features/auth/lib/verifyEmail";
import { checkRateLimitAndThrowError } from "@calcom/lib/checkRateLimitAndThrowError";
import { prisma } from "@calcom/prisma";
import type { TrpcSessionUser } from "@calcom/trpc/server/types";

import { TRPCError } from "@trpc/server";

import type { TAddSecondaryEmailInputSchema } from "./addSecondaryEmail.schema";

type AddSecondaryEmailOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
    res?: NextApiResponse | GetServerSidePropsContext["res"];
  };
  input: TAddSecondaryEmailInputSchema;
};

export const addSecondaryEmailHandler = async ({ ctx, input }: AddSecondaryEmailOptions) => {
  const { user } = ctx;

  await checkRateLimitAndThrowError({
    rateLimitingType: "core",
    identifier: `addSecondaryEmail.${user.id}`,
  });

  const existingPrimaryEmail = await prisma.user.findUnique({
    where: {
      email: input.email,
    },
  });

  if (existingPrimaryEmail) {
    throw new TRPCError({ code: "BAD_REQUEST", message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     });
  }

  const existingSecondaryEmail = await prisma.secondaryEmail.findUnique({
    where: {
      email: input.email,
    },
  });

  if (existingSecondaryEmail) {
    throw new TRPCError({ code: "BAD_REQUEST", message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     });
  }

  const updatedData = await prisma.secondaryEmail.create({
    data: { ...input, userId: user.id },
  });

  await sendEmailVerification({
    email: updatedData.email,
    username: user?.username ?? undefined,
    language: user.locale,
    secondaryEmailId: updatedData.id,
  });

  return {
    data: updatedData,
    message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  };
};
