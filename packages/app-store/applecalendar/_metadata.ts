import type { AppMeta } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "Apple Calendar",
  description: _package.description,
  installed: true,
  type: "apple_calendar",
  title: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  ,
  variant: "calendar",
  categories: ["calendar"],
  category: "calendar",
  logo: "icon.svg",
  publisher: "Cal.com",
  slug: "apple-calendar",
  url: "https://cal.com/",
  email: "help@cal.com",
  dirName: "applecalendar",
  isOAuth: false,
} as AppMeta;

export default metadata;
