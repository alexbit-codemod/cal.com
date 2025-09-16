import prisma from "@calcom/prisma";
import type { TrpcSessionUser } from "@calcom/trpc/server/types";

import type { TRemoveNotificationsSubscriptionInputSchema } from "./removeNotificationsSubscription.schema";

type AddSecondaryEmailOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: TRemoveNotificationsSubscriptionInputSchema;
};

export const removeNotificationsSubscriptionHandler = async ({ ctx }: AddSecondaryEmailOptions) => {
  const { user } = ctx;

  // We just use findFirst because there will only be single unique subscription for a user
  const subscriptionToDelete = await prisma.notificationsSubscriptions.findFirst({
    where: {
      userId: user.id,
    },
  });

  if (subscriptionToDelete) {
    await prisma.notificationsSubscriptions.delete({
      where: {
        id: subscriptionToDelete.id,
      },
    });
  }

  return {
    message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  };
};
