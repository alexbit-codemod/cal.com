import type { LocalRoute } from "../types/types";
import { RouteActionType } from "../zod";

export const RoutingPages: { label: string; value: NonNullable<LocalRoute["action"]>["type"] }[] = [
  {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    value: RouteActionType.CustomPageMessage,
  },
  {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    value: RouteActionType.ExternalRedirectUrl,
  },
  {
    label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    value: RouteActionType.EventTypeRedirectUrl,
  },
];
