import type { AppMeta } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "HubSpot CRM",
  installed: !!process.env.HUBSPOT_CLIENT_ID,
  description: _package.description,
  type: "hubspot_crm",
  variant: "crm",
  logo: "icon.svg",
  publisher: "Cal.com",
  url: "https://hubspot.com/",
  categories: ["crm"],
  label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  ,
  slug: "hubspot",
  extendsFeature: "EventType",
  title: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  ,
  email: "help@cal.com",
  dirName: "hubspot",
  isOAuth: true,
} as AppMeta;

export default metadata;
