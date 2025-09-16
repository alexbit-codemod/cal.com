import type { AppMeta } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "Giphy",
  description: _package.description,
  installed: true,
  categories: ["other"],
  logo: "icon.svg",
  publisher: "Cal.com",
  slug: "giphy",
  title: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  ,
  type: "giphy_other",
  url: "https://cal.com/apps/giphy",
  variant: "other",
  extendsFeature: "EventType",
  email: "help@cal.com",
  dirName: "giphy",
  isOAuth: false,
} as AppMeta;

export default metadata;
