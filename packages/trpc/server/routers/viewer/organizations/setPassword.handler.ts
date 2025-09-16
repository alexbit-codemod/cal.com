import { createHash } from "crypto";

import { hashPassword } from "@calcom/features/auth/lib/hashPassword";
import { verifyPassword } from "@calcom/features/auth/lib/verifyPassword";
import { prisma } from "@calcom/prisma";

import { TRPCError } from "@trpc/server";

import type { TrpcSessionUser } from "../../../types";
import type { TSetPasswordSchema } from "./setPassword.schema";

type UpdateOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: TSetPasswordSchema;
};

export const setPasswordHandler = async ({ ctx, input }: UpdateOptions) => {
  const { newPassword } = input;

  const user = await prisma.user.findUnique({
    where: {
      id: ctx.user.id,
    },
    select: {
      password: true,
      email: true,
    },
  });

  if (!user) throw new TRPCError({ code: "BAD_REQUEST", message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   });
  if (!user.password?.hash)
    throw new TRPCError({ code: "BAD_REQUEST", message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     });

  const generatedPassword = createHash("md5")
    .update(`${user?.email ?? ""}${process.env.CALENDSO_ENCRYPTION_KEY}`)
    .digest("hex");
  const isCorrectPassword = await verifyPassword(generatedPassword, user.password.hash);

  if (!isCorrectPassword)
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    });

  const hashedPassword = await hashPassword(newPassword);
  await prisma.userPassword.upsert({
    where: {
      userId: ctx.user.id,
    },
    create: {
      hash: hashedPassword,
      userId: ctx.user.id,
    },
    update: {
      hash: hashedPassword,
    },
  });

  return { update: true };
};

export default setPasswordHandler;
