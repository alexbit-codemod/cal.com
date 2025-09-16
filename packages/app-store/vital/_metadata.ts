import type { AppMeta } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "Vital",
  description: _package.description,
  installed: true,
  category: "automation",
  categories: ["automation"],
  logo: "icon-dark.svg",
  label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  ,
  publisher: "Vital",
  slug: "vital-automation",
  title: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  ,
  type: "vital_other",
  url: "https://tryvital.io",
  variant: "other",
  email: "support@tryvital.io",
  dirName: "vital",
  isOAuth: true,
} as AppMeta;

export default metadata;
