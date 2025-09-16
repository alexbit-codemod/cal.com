import logger from "@calcom/lib/logger";

import type { LazyModule, SWHMap } from "./__handler";

type Data = SWHMap["invoice.paid"]["data"];

type Handlers = Record<`prod_${string}`, () => LazyModule<Data>>;

// We can't crash here if STRIPE_ORG_PRODUCT_ID is not set, because not all self-hosters use Organizations and it might break the build on import of this module.
const STRIPE_ORG_PRODUCT_ID = process.env.STRIPE_ORG_PRODUCT_ID || "";

const log = logger.getSubLogger({ prefix: ["stripe-webhook-invoice-paid"] });

const stripeWebhookProductHandler = (handlers: Handlers) => async (data: Data) => {
  const invoice = data.object;
  // Only handle subscription invoices
  if (!invoice.subscription) {
    log.warn("Not a subscription invoice, skipping");
    return { success: false, message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     };
  }

  // Get the product ID from the first subscription item
  const firstItem = invoice.lines.data[0];
  const productId = firstItem?.price?.product as string; // prod_xxxxx

  if (!productId) {
    log.warn("No product ID found in invoice, skipping");
    return { success: false, message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     };
  }

  const handlerGetter = handlers[productId as keyof typeof handlers];

  /**
   * If no handler is found, we skip the product. A handler could be null if we don't need webhooks to handle the business logic for the product.
   */
  if (!handlerGetter) {
    log.warn(`Skipping product: ${productId} because no handler found`);
    return { success: false, message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     };
  }
  const handler = (await handlerGetter())?.default;
  // auto catch unsupported Stripe products.
  if (!handler) {
    log.warn(`Skipping product: ${productId} because no handler found`);
    return { success: false, message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     };
  }
  return await handler(data);
};

export default stripeWebhookProductHandler({
  [STRIPE_ORG_PRODUCT_ID]: () => import("./_invoice.paid.org"),
});
