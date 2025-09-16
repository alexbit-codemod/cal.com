import stripe from "./server";

interface IRetrieveSubscriptionIdResponse {
  message?: string;
  subscriptionId?: string;
}

export async function retrieveSubscriptionIdFromStripeCustomerId(
  stripeCustomerId: string
): Promise<IRetrieveSubscriptionIdResponse> {
  const customer = await stripe.customers.retrieve(stripeCustomerId, {
    expand: ["subscriptions.data.plan"],
  });
  if (!customer || customer.deleted) {
    return {
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    };
  }

  const subscription = customer.subscriptions?.data[0];
  if (!subscription) {
    return {
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    };
  }
  return {
    subscriptionId: subscription.id,
  };
}
