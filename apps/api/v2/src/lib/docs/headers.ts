import { ApiHeaderOptions } from "@nestjs/swagger";

import { X_CAL_CLIENT_ID, X_CAL_SECRET_KEY } from "@calcom/platform-constants";

export const OPTIONAL_X_CAL_CLIENT_ID_HEADER: ApiHeaderOptions = {
  name: X_CAL_CLIENT_ID,
  description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  ,
  required: false,
};

export const OPTIONAL_X_CAL_SECRET_KEY_HEADER: ApiHeaderOptions = {
  name: X_CAL_SECRET_KEY,
  description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  ,
  required: false,
};

export const X_CAL_CLIENT_ID_HEADER: ApiHeaderOptions = {
  name: X_CAL_CLIENT_ID,
  description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  ,
  required: false,
};

export const X_CAL_SECRET_KEY_HEADER: ApiHeaderOptions = {
  name: X_CAL_SECRET_KEY,
  description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  ,
  required: false,
};

export const OPTIONAL_API_KEY_HEADER: ApiHeaderOptions = {
  name: "Authorization",
  description:
    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  required: false,
};

export const API_KEY_HEADER: ApiHeaderOptions = {
  name: "Authorization",
  description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  ,
  required: true,
};

export const API_KEY_OR_ACCESS_TOKEN_HEADER: ApiHeaderOptions = {
  name: "Authorization",
  description:
    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  required: true,
};

export const OPTIONAL_API_KEY_OR_ACCESS_TOKEN_HEADER: ApiHeaderOptions = {
  name: "Authorization",
  description:
    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  required: false,
};

export const ACCESS_TOKEN_HEADER: ApiHeaderOptions = {
  name: "Authorization",
  description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  ,
  required: true,
};
