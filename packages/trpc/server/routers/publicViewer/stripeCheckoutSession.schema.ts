import { z } from "zod";

export const ZStripeCheckoutSessionInputSchema = z
  .object({
    stripeCustomerId: z.string().optional(),
    checkoutSessionId: z.string().optional(),
  })
  .superRefine((arg, ctx) => {
    if (!arg.checkoutSessionId && !arg.stripeCustomerId) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ,
      });
    }
    if (arg.checkoutSessionId && arg.stripeCustomerId) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ,
      });
    }
  });

export type TStripeCheckoutSessionInputSchema = z.infer<typeof ZStripeCheckoutSessionInputSchema>;
