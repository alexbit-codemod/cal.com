import type { NextApiRequest, NextApiResponse } from "next";
import z from "zod";

import { HttpError } from "@calcom/lib/http-error";
import { defaultHandler } from "@calcom/lib/server/defaultHandler";
import { defaultResponder } from "@calcom/lib/server/defaultResponder";
import prisma from "@calcom/prisma";

const querySchema = z.object({
  org: z.string({ required_error: "org slug is required" }),
});

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const parsedQuery = querySchema.safeParse(req.query);

  if (!parsedQuery.success) throw new HttpError({ statusCode: 400, message: parsedQuery.error.message });

  const {
    data: { org: slug },
  } = parsedQuery;
  if (!slug) return res.status(400).json({ message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   });

  const org = await prisma.team.findFirst({
    where: { slug },
    select: { children: true, isOrganization: true },
  });

  if (!org) return res.status(400).json({ message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   });

  const isOrganization = org.isOrganization;

  if (!isOrganization) return res.status(400).json({ message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   });

  return res.status(200).json({ slugs: org.children.map((ch) => ch.slug) });
}

export default defaultHandler({
  GET: Promise.resolve({ default: defaultResponder(handler) }),
});
