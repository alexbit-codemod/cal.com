import type { TFunction } from "i18next";

import type { CalendarEvent } from "@calcom/types/Calendar";

import { Info } from "./Info";

export const AppsStatus = (props: { calEvent: CalendarEvent; t: TFunction }) => {
  const { t } = props;
  if (!props.calEvent.appsStatus) return null;
  return (
    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
  );
};
