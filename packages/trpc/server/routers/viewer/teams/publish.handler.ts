import type { Prisma } from "@prisma/client";

import { purchaseTeamOrOrgSubscription } from "@calcom/features/ee/teams/lib/payments";
import { IS_TEAM_BILLING_ENABLED, WEBAPP_URL } from "@calcom/lib/constants";
import { Redirect } from "@calcom/lib/redirect";
import { isOrganisationAdmin } from "@calcom/lib/server/queries/organisations";
import { isTeamAdmin } from "@calcom/lib/server/queries/teams";
import { TeamService } from "@calcom/lib/server/service/teamService";
import { teamMetadataSchema } from "@calcom/prisma/zod-utils";

import { TRPCError } from "@trpc/server";

import type { TrpcSessionUser } from "../../../types";
import type { TPublishInputSchema } from "./publish.schema";

type PublishOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: TPublishInputSchema;
};

const parseMetadataOrThrow = (metadata: Prisma.JsonValue) => {
  const parsedMetadata = teamMetadataSchema.safeParse(metadata);

  if (!parsedMetadata.success || !parsedMetadata.data)
    throw new TRPCError({ code: "BAD_REQUEST", message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     });
  return parsedMetadata.data;
};

const generateCheckoutSession = async ({
  teamId,
  seats,
  userId,
}: {
  teamId: number;
  seats: number;
  userId: number;
}) => {
  if (!IS_TEAM_BILLING_ENABLED) return;

  const checkoutSession = await purchaseTeamOrOrgSubscription({
    teamId,
    seatsUsed: seats,
    userId,
    pricePerSeat: null,
  });
  if (!checkoutSession.url)
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    });
  return { url: checkoutSession.url, message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   };
};

async function checkPermissions({ ctx, input }: PublishOptions) {
  const { profile } = ctx.user;
  if (profile?.organizationId && !isOrganisationAdmin(ctx.user.id, profile.organizationId))
    throw new TRPCError({ code: "UNAUTHORIZED" });
  if (!profile?.organizationId && !(await isTeamAdmin(ctx.user.id, input.teamId)))
    throw new TRPCError({ code: "UNAUTHORIZED" });
}

export const publishHandler = async ({ ctx, input }: PublishOptions) => {
  const { teamId } = input;
  await checkPermissions({ ctx, input });

  try {
    const { redirectUrl, status } = await TeamService.publish(teamId);
    if (redirectUrl) return { url: redirectUrl, status };
  } catch (error) {
    /** We return the url for client redirect if needed */
    if (error instanceof Redirect) return { url: error.url };
    let message = // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ;
    if (error instanceof Error) message = error.message;
    throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message });
  }

  return {
    url: `${WEBAPP_URL}/settings/teams/${teamId}/profile`,
    message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  };
};

export default publishHandler;
