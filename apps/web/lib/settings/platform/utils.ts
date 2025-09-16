import type { IconName } from "@calcom/ui/components/icon";

type IndividualPlatformPlan = {
  plan: string;
  description: string;
  pricing?: number;
  includes: string[];
};

type HelpCardInfo = {
  icon: IconName;
  variant: "basic" | "ProfileCard" | "SidebarCard" | null;
  title: string;
  description: string;
  actionButton: {
    href: string;
    child: string;
  };
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
      "Admin APIs",
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
      "Up to 500 bookings a month. $0,60 overage beyond",
      "Everything in Starter",
      "Cal Atoms (React Library)",
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
      "Up to 5000 bookings a month. $0.50 overage beyond",
      "Everything in Essentials",
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
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    includes: ["Beyond 50,000 bookings a month", "Everything in Scale", "Up to 50% discount on overages"],
  },
];

export const helpCards: HelpCardInfo[] = [
  {
    icon: "rocket",
    title: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    variant: "basic",
    actionButton: {
      href: "https://experts.cal.com",
      child: "Try the Demo",
    },
  },
  {
    icon: "github",
    title: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    variant: "basic",
    actionButton: {
      href: "https://github.com/calcom/examples",
      child: "GitHub",
    },
  },
  {
    icon: "calendar-check-2",
    title: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    variant: "basic",
    actionButton: {
      href: "https://i.cal.com/platform",
      child: "Schedule a call",
    },
  },
  {
    icon: "triangle-alert",
    title: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    variant: "basic",
    actionButton: {
      href: "https://github.com/calcom/cal.com/issues/new?template=platform.md",
      child: "Open Issue",
    },
  },
];
