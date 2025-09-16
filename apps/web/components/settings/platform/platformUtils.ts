type IndividualPlatformPlan = {
  plan: string;
  description: string;
  pricing?: number;
  includes: string[];
};

// if pricing or plans change in future modify this
export const platformPlans: IndividualPlatformPlan[] = [
  {
    plan: "Free",
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    pricing: 0,
    includes: [
      "Up to 25 bookings a month",
      "$0.99 overage beyond",
      "Community Support",
      "Cal Atoms (React Library)",
      "Platform APIs",
    ],
  },
  {
    plan: "Essentials",
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    pricing: 299,
    includes: [
      "Everything in Starter",
      "Up to 500 bookings a month",
      "$0.60 overage beyond",
      "User Management and Analytics",
      "Technical Account Manager and Onboarding Support",
    ],
  },
  {
    plan: "Scale",
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    pricing: 2499,
    includes: [
      "Everything in Essentials",
      "Up to 5000 bookings a month",
      "$0.50 overage beyond",
      "Credential import from other platforms",
      "Compliance Check SOC2, HIPAA",
      "One-on-one developer calls",
      "Help with Credentials Verification (Zoom, Google App Store)",
      "Expedited features and integrations",
      "SLA (99.999% uptime)",
    ],
  },
  {
    plan: "Enterprise",
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    includes: [
      "Everything in Scale",
      "No overages",
      "Credential import from other platforms",
      "Compliance Check SOC2, HIPAA",
      "One-on-one developer calls",
      "Help with Credentials Verification (Zoom, Google App Store)",
      "Expedited features and integrations",
      "SLA (99.999% uptime)",
      "Volume Discount",
    ],
  },
];
