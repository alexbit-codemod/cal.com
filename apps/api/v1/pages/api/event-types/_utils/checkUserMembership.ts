import type { NextApiRequest } from "next";

import { HttpError } from "@calcom/lib/http-error";
import prisma from "@calcom/prisma";

/**
 * Checks if a user, identified by the provided userId, is a member of the team associated
 * with the event type identified by the parentId.
 *
 * @param req - The current request
 *
 * @throws {HttpError} If the event type is not found,
 *                     if the event type doesn't belong to any team,
 *                     or if the user isn't a member of the associated team.
 */
export default async function checkUserMembership(req: NextApiRequest) {
  const { body } = req;
  /** These are already parsed upstream, we can assume they're good here. */
  const parentId = Number(body.parentId);
  const userId = Number(body.userId);
  const parentEventType = await prisma.eventType.findUnique({
    where: {
      id: parentId,
    },
    select: {
      teamId: true,
    },
  });

  if (!parentEventType) {
    throw new HttpError({
      statusCode: 404,
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    });
  }

  if (!parentEventType.teamId) {
    throw new HttpError({
      statusCode: 400,
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    });
  }

  const teamMember = await prisma.membership.findFirst({
    where: {
      teamId: parentEventType.teamId,
      userId: userId,
      accepted: true,
    },
  });

  if (!teamMember) {
    throw new HttpError({
      statusCode: 400,
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    });
  }
}
