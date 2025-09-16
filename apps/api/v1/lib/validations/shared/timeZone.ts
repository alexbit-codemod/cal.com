import tzdata from "tzdata";
import { z } from "zod";

// @note: This is a custom validation that checks if the timezone is valid and exists in the tzdb library
export const timeZone = z.string().refine((tz: string) => Object.keys(tzdata.zones).includes(tz), {
  message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  ,
});
