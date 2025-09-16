import type { AppMeta } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "Zapier",
  description: _package.description,
  installed: true,
  category: "automation",
  categories: ["automation"],
  logo: "icon.svg",
  publisher: "Cal.com",
  slug: "zapier",
  title: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  ,
  type: "zapier_automation",
  url: "https://cal.com/apps/zapier",
  variant: "automation",
  email: "help@cal.com",
  dirName: "zapier",
  isOAuth: false,
} as AppMeta;

export default metadata;
