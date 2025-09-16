import type { AppCategories } from "@calcom/prisma/enums";

/**
 * Handles if the app category should be full capitalized ex. CRM
 *
 * @param {App["variant"]} variant - The variant of the app.
 * @param {boolean} [returnLowerCase] - Optional flag to return the title in lowercase.
 */
const getAppCategoryTitle = (variant: AppCategories, returnLowerCase?: boolean) => {
  let title: string;

  if (variant === "crm") {
    title = // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ;
    return title;
  } else {
    title = variant;
  }

  return returnLowerCase ? title.toLowerCase() : title;
};

export default getAppCategoryTitle;
