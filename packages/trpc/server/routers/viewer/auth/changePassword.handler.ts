import { hashPassword } from "@calcom/features/auth/lib/hashPassword";
import { validPassword } from "@calcom/features/auth/lib/validPassword";
import { verifyPassword } from "@calcom/features/auth/lib/verifyPassword";
import { prisma } from "@calcom/prisma";
import { IdentityProvider } from "@calcom/prisma/enums";

import { TRPCError } from "@trpc/server";

import type { TrpcSessionUser } from "../../../types";
import type { TChangePasswordInputSchema } from "./changePassword.schema";

type ChangePasswordOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: TChangePasswordInputSchema;
};

export const changePasswordHandler = async ({ input, ctx }: ChangePasswordOptions) => {
  const { oldPassword, newPassword } = input;

  const { user } = ctx;

  if (user.identityProvider !== IdentityProvider.CAL) {
    const userWithPassword = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
      select: {
        password: true,
      },
    });
    if (!userWithPassword?.password?.hash) {
      throw new TRPCError({ code: "FORBIDDEN", message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
       });
    }
  }

  const currentPasswordQuery = await prisma.userPassword.findUnique({
    where: { userId: user.id },
  });

  const currentPassword = currentPasswordQuery?.hash;

  if (!currentPassword) {
    throw new TRPCError({ code: "NOT_FOUND", message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     });
  }

  const passwordsMatch = await verifyPassword(oldPassword, currentPassword);
  if (!passwordsMatch) {
    throw new TRPCError({ code: "BAD_REQUEST", message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     });
  }

  if (oldPassword === newPassword) {
    throw new TRPCError({ code: "BAD_REQUEST", message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     });
  }

  if (!validPassword(newPassword)) {
    throw new TRPCError({ code: "BAD_REQUEST", message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     });
  }

  const hashedPassword = await hashPassword(newPassword);
  await prisma.userPassword.upsert({
    where: {
      userId: user.id,
    },
    create: {
      hash: hashedPassword,
      userId: user.id,
    },
    update: {
      hash: hashedPassword,
    },
  });
};
