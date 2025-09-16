import { StripeBillingService } from "@calcom/features/ee/billing/stripe-billling-service";
import { prisma } from "@calcom/prisma";
import { userMetadata } from "@calcom/prisma/zod-utils";
import type { TrpcSessionUser } from "@calcom/trpc/server/types";

import { TRPCError } from "@trpc/server";

type StripeCustomerOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
};

export const stripeCustomerHandler = async ({ ctx }: StripeCustomerOptions) => {
  const {
    user: { id: userId },
  } = ctx;

  const billingService = new StripeBillingService();

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      email: true,
      metadata: true,
    },
  });

  if (!user) {
    throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     });
  }

  const metadata = userMetadata.parse(user.metadata);
  let stripeCustomerId = metadata?.stripeCustomerId;
  if (!stripeCustomerId) {
    // Create stripe customer
    const customer = await billingService.createCustomer({
      email: user.email,
      metadata: {
        userId: userId.toString(),
      },
    });
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        metadata: {
          ...metadata,
          stripeCustomerId: customer.stripeCustomerId,
        },
      },
    });
    stripeCustomerId = customer.stripeCustomerId;
  }

  // Fetch stripe customer
  const customer = await billingService.getCustomer(stripeCustomerId);
  if (customer.deleted) {
    throw new TRPCError({ code: "BAD_REQUEST", message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     });
  }

  const username = customer?.metadata?.username || null;

  return {
    isPremium: !!metadata?.isPremium,
    username,
  };
};
