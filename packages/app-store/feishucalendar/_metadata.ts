import type { AppMeta } from "@calcom/types/App";

import _package from "./package.json";

export const metadata = {
  name: "Feishu Calendar",
  description: _package.description,
  installed: true,
  type: "feishu_calendar",
  title: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  ,
  variant: "calendar",
  categories: ["calendar"],
  logo: "icon.svg",
  publisher: "Feishu",
  slug: "feishu-calendar",
  url: "https://feishu.cn/",
  email: "alan@larksuite.com",
  dirName: "feishucalendar",
} as AppMeta;

export default metadata;
