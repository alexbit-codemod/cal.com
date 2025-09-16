import type { AppMeta } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "Microsoft 365/Teams (Requires work/school account)",
  description: _package.description,
  appData: {
    location: {
      linkType: "dynamic",
      type: "integrations:office365_video",
      label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
  },
  type: "office365_video",
  title: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  ,
  variant: "conferencing",
  category: "conferencing",
  categories: ["conferencing"],
  logo: "icon.svg",
  publisher: "Cal.com",
  slug: "msteams",
  dirName: "office365video",
  dependencies: ["office365-calendar"],
  url: "https://www.microsoft.com/en-ca/microsoft-teams/group-chat-software",
  email: "help@cal.com",
  isOAuth: true,
} as AppMeta;

export default metadata;
