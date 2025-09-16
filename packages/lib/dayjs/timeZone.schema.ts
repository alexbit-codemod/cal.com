import { z } from "zod";

import { isSupportedTimeZone } from "./index";

// Schema for validating IANA timezone strings compatible with Intl.DateTimeFormat
export const timeZoneSchema = z.string().refine((timeZone) => isSupportedTimeZone(timeZone), {
  message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  ,
});
