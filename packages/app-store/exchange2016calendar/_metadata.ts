import type { AppMeta } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "Microsoft Exchange 2016 Calendar",
  description: _package.description,
  installed: true,
  type: "exchange2016_calendar",
  title: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  ,
  variant: "calendar",
  category: "calendar",
  categories: ["calendar"],
  label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  ,
  logo: "icon.svg",
  publisher: "Cal.com",
  slug: "exchange2016-calendar",
  url: "https://cal.com/",
  email: "help@cal.com",
  dirName: "exchange2016calendar",
  isOAuth: false,
} as AppMeta;

export default metadata;
