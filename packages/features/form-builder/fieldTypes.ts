import type z from "zod";

import { propsTypes } from "./propsTypes";
import type { FieldType, fieldTypeConfigSchema } from "./schema";

const configMap: Record<FieldType, Omit<z.infer<typeof fieldTypeConfigSchema>, "propsType">> = {
  // This won't be stored in DB. It allows UI to be configured from the codebase for all existing booking fields stored in DB as well
  // Candidates for this are:
  // - Anything that you want to show in App UI only.
  // - Default values that are shown in UI that are supposed to be changed for existing bookingFields as well if user is using default values
  name: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    value: "name",
    isTextType: true,
    systemOnly: true,
    variantsConfig: {
      toggleLabel: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      defaultVariant: "fullName",
      variants: {
        firstAndLastName: {
          label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          ,
          fieldsMap: {
            firstName: {
              defaultLabel: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
              ,
              canChangeRequirability: false,
            },
            lastName: {
              defaultLabel: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
              ,
              canChangeRequirability: true,
            },
          },
        },
        fullName: {
          label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          ,
          fieldsMap: {
            fullName: {
              defaultLabel: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
              ,
              defaultPlaceholder: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
              ,
              canChangeRequirability: false,
            },
          },
        },
      },
      defaultValue: {
        variants: {
          firstAndLastName: {
            // Configures variant fields
            // This array form(in comparison to a generic component form) has the benefit that we can allow configuring placeholder, label, required etc. for each variant
            // Doing this in a generic component form would require a lot of work in terms of supporting variables maybe that would be read by the component.
            fields: [
              {
                // This name won't be configurable by user. User can always configure the main field name
                name: "firstName",
                type: "text",
                required: true,
              },
              {
                name: "lastName",
                type: "text",
                required: false,
              },
            ],
          },
          fullName: {
            fields: [
              {
                name: "fullName",
                type: "text",
                label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
                required: true,
              },
            ],
          },
        },
      },
    },
  },
  email: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    value: "email",
    isTextType: true,
  },
  phone: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    value: "phone",
    isTextType: true,
  },
  address: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    value: "address",
    isTextType: true,
  },
  text: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    value: "text",
    isTextType: true,
  },
  number: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    value: "number",
    isTextType: true,
  },
  textarea: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    value: "textarea",
    isTextType: true,
    supportsLengthCheck: {
      // Keep it as small as possible. It is easier to change to a higher value but coming back to a lower value(due to any reason) would be problematic for users who have saved higher value.
      maxLength: 1000,
    },
  },
  select: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    value: "select",
    needsOptions: true,
    isTextType: true,
  },
  multiselect: {
    label: "MultiSelect",
    value: "multiselect",
    needsOptions: true,
    isTextType: false,
  },
  multiemail: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    value: "multiemail",
    isTextType: true,
  },
  radioInput: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    value: "radioInput",
    isTextType: false,
    systemOnly: true,

    // This is false currently because we don't want to show the options for Location field right now. It is the only field with type radioInput.
    // needsOptions: true,
  },
  checkbox: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    value: "checkbox",
    needsOptions: true,
    isTextType: false,
  },
  radio: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    value: "radio",
    needsOptions: true,
    isTextType: false,
  },
  boolean: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    value: "boolean",
    isTextType: false,
  },
  url: {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    value: "url",
    isTextType: true,
  },
};

export const fieldTypesConfigMap = configMap as Record<FieldType, z.infer<typeof fieldTypeConfigSchema>>;

Object.entries(fieldTypesConfigMap).forEach(([fieldType, config]) => {
  config.propsType = propsTypes[fieldType as keyof typeof fieldTypesConfigMap];
});
