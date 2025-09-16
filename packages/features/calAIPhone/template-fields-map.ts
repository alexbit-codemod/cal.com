import type { TemplateType, Fields } from "./zod-utils";
import { fieldNameEnum } from "./zod-utils";

export const templateFieldsMap: Record<TemplateType, Fields> = {
  CHECK_IN_APPOINTMENT: [
    {
      type: "text",
      name: fieldNameEnum.enum.schedulerName,
      required: true,
      defaultLabel: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      placeholder: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
  ],
  CUSTOM_TEMPLATE: [
    {
      type: "textarea",
      name: fieldNameEnum.enum.generalPrompt,
      required: true,
      defaultLabel: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      placeholder: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    {
      type: "text",
      name: fieldNameEnum.enum.beginMessage,
      required: true,
      defaultLabel: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      placeholder: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
    {
      type: "text",
      name: fieldNameEnum.enum.guestName,
      required: false,
      defaultLabel: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      placeholder: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      variableName: "name",
    },
    {
      type: "email",
      name: fieldNameEnum.enum.guestEmail,
      required: false,
      defaultLabel: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      placeholder: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      variableName: "email",
    },
    {
      type: "text",
      name: fieldNameEnum.enum.guestCompany,
      required: false,
      defaultLabel: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      placeholder: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      variableName: "company",
    },
  ],
};
