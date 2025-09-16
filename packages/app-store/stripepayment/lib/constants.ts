export const PREMIUM_MONTHLY_PLAN_PRICE = process.env.NEXT_PUBLIC_STRIPE_PREMIUM_PLAN_PRICE_MONTHLY || "";
export const PREMIUM_PLAN_PRODUCT_ID = process.env.NEXT_PUBLIC_STRIPE_PREMIUM_PLAN_PRODUCT_ID || "";
export const STRIPE_TEAM_MONTHLY_PRICE_ID = process.env.NEXT_PUBLIC_STRIPE_TEAM_MONTHLY_PRICE_ID || "";
export const STRIPE_PHONE_NUMBER_MONTHLY_PRICE_ID = process.env.STRIPE_PHONE_NUMBER_MONTHLY_PRICE_ID || "";

export const paymentOptions = [
  {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    value: "ON_BOOKING",
  },
  {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    value: "HOLD",
  },
];
