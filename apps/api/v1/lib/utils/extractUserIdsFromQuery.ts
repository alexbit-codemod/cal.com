import type { NextApiRequest } from "next";

import { HttpError } from "@calcom/lib/http-error";

import { schemaQuerySingleOrMultipleUserIds } from "~/lib/validations/shared/queryUserId";

export function extractUserIdsFromQuery({ isSystemWideAdmin, query }: NextApiRequest) {
  /** Guard: Only admins can query other users */
  if (!isSystemWideAdmin) {
    throw new HttpError({ statusCode: 401, message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     });
  }
  const { userId: userIdOrUserIds } = schemaQuerySingleOrMultipleUserIds.parse(query);
  return Array.isArray(userIdOrUserIds) ? userIdOrUserIds : [userIdOrUserIds];
}
