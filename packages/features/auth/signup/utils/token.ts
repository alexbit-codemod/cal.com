import dayjs from "@calcom/dayjs";
import { HttpError } from "@calcom/lib/http-error";
import { validateAndGetCorrectedUsernameInTeam } from "@calcom/lib/validateUsername";
import { prisma } from "@calcom/prisma";

export async function findTokenByToken({ token }: { token: string }) {
  const foundToken = await prisma.verificationToken.findUnique({
    where: {
      token,
    },
    select: {
      id: true,
      expires: true,
      teamId: true,
    },
  });

  if (!foundToken) {
    throw new HttpError({
      statusCode: 401,
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    });
  }

  return foundToken;
}

export function throwIfTokenExpired(expires?: Date) {
  if (!expires) return;
  if (dayjs(expires).isBefore(dayjs())) {
    throw new HttpError({
      statusCode: 401,
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    });
  }
}

export async function validateAndGetCorrectedUsernameForTeam({
  username,
  email,
  teamId,
  isSignup,
}: {
  username: string;
  email: string;
  teamId: number | null;
  isSignup: boolean;
}) {
  if (!teamId) return username;

  const teamUserValidation = await validateAndGetCorrectedUsernameInTeam(username, email, teamId, isSignup);
  if (!teamUserValidation.isValid) {
    throw new HttpError({
      statusCode: 409,
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    });
  }
  if (!teamUserValidation.username) {
    throw new HttpError({
      statusCode: 422,
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    });
  }
  return teamUserValidation.username;
}
