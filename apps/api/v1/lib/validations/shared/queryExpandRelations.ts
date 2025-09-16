import { z } from "zod";

const expandEnum = z.enum(["team"]);

export const schemaQuerySingleOrMultipleExpand = z
  .union([
    expandEnum, // Allow a single value from the enum
    z.array(expandEnum).refine((arr) => new Set(arr).size === arr.length, {
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    }), // Allow an array of enum values, with uniqueness constraint
  ])
  .optional();
