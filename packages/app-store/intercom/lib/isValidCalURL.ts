import { CAL_URL } from "@calcom/lib/constants";

import type { TextComponent } from "../lib";
import { regex as arkregex } from "arkregex";

/**
 * Check if the url is a valid cal.com url
 * @param url
 * @returns IsValid
 */
export async function isValidCalURL(url: string) {
// TODO(arkregex): pattern/flags not statically known; typing may degrade. Consider regex.as<...>(...)
  const regex = arkregex(`^https://(?:[a-zA-Z0-9-]+\\.)?${CAL_URL.replace("https://", "")}/` as Parameters<typeof arkregex>[0], "i") as RegExp;

  const error: TextComponent = {
    type: "text",
    text: `This is not a valid ${CAL_URL.replace("https://", "")} link`,
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
