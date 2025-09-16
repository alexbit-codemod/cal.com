import type { NextApiRequest } from "next";
import type { z } from "zod";

import { HttpError } from "@calcom/lib/http-error";
import prisma from "@calcom/prisma";

import type { schemaEventTypeCreateBodyParams } from "~/lib/validations/event-type";

export default async function checkTeamEventEditPermission(
  req: NextApiRequest,
  body: Pick<z.infer<typeof schemaEventTypeCreateBodyParams>, "teamId" | "userId">
) {
  if (body.teamId) {
    const membership = await prisma.membership.findFirst({
      where: {
        userId: req.userId,
        teamId: body.teamId,
        accepted: true,
        role: { in: ["ADMIN", "OWNER"] },
      },
    });

    if (!membership) {
      throw new HttpError({
        statusCode: 403,
        message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ,
      });
    }
  }
}
