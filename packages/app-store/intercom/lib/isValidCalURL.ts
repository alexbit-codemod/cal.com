import { CAL_URL } from "@calcom/lib/constants";

import type { TextComponent } from "../lib";

/**
 * Check if the url is a valid cal.com url
 * @param url
 * @returns IsValid
 */
export async function isValidCalURL(url: string) {
  const regex = new RegExp(
    `^https://(?:[a-zA-Z0-9-]+\\.)?${CAL_URL.replace("https://", "")}/(team/)?(org/)?`,
    "i"
  );

  const error: TextComponent = {
    type: "text",
    text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    style: "error",
    align: "left",
  };

  if (!regex.test(url))
    return {
      isValid: false,
      error,
    };

  const response = await fetch(url);

  if (response.status !== 200)
    return {
      isValid: false,
      error,
    };

  return {
    isValid: true,
  };
}
