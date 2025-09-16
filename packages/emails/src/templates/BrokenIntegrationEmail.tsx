import type { TFunction } from "i18next";

import { AppStoreLocationType } from "@calcom/app-store/locations";
import ServerTrans from "@calcom/lib/components/ServerTrans";
import { WEBAPP_URL } from "@calcom/lib/constants";
import type { CalendarEvent, Person } from "@calcom/types/Calendar";

import { BaseScheduledEmail } from "./BaseScheduledEmail";

// https://stackoverflow.com/questions/56263980/get-key-of-an-enum-from-its-value-in-typescript
export function getEnumKeyByEnumValue(myEnum: any, enumValue: number | string): string {
  const keys = Object.keys(myEnum).filter((x) => myEnum[x] == enumValue);
  return keys.length > 0 ? keys[0] : "";
}

const BrokenVideoIntegration = (props: { location: string; eventTypeId?: number | null; t: TFunction }) => {
  return (
    <ServerTrans
      i18nKey="broken_video_action"
      t={props.t}
      values={{ location: props.location }}
      components={[
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$,
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$,
      ]}
    />
  );
};

const BrokenCalendarIntegration = (props: {
  calendar: string;
  eventTypeId?: number | null;
  t: TFunction;
}) => {
  const { t } = props;

  return (
    <div>
      {t("broken_calendar_action", {
        calendar: props.calendar,
        calendarSettingsLink: `${WEBAPP_URL}/apps/installed`,
        interpolation: { escapeValue: false },
      })}
    </div>
  );
};

export const BrokenIntegrationEmail = (
  props: {
    calEvent: CalendarEvent;
    attendee: Person;
    type: "video" | "calendar";
  } & Partial<React.ComponentProps<typeof BaseScheduledEmail>>
) => {
  const { calEvent, type } = props;
  const t = calEvent.organizer.language.translate;
  const locale = calEvent.organizer.language.locale;
  const timeFormat = calEvent.organizer?.timeFormat;

  if (type === "video") {
    let location = calEvent.location ? getEnumKeyByEnumValue(AppStoreLocationType, calEvent.location) : " ";
    if (location === "Daily") {
      location = "Cal Video";
    }
    if (location === "GoogleMeet") {
      location = `${location.slice(0, 5)} ${location.slice(5)}`;
    }

    return (
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
    );
  }

  if (type === "calendar") {
    // The calendar name is stored as name_calendar
    const [mainHostDestinationCalendar] = calEvent.destinationCalendar ?? [];
    let calendar = mainHostDestinationCalendar
      ? mainHostDestinationCalendar?.integration.split("_")
      : "calendar";

    if (Array.isArray(calendar)) {
      const calendarCap = calendar.map((name) => name.charAt(0).toUpperCase() + name.slice(1));
      calendar = `${calendarCap[0]} ${calendarCap[1]}`;
    }

    return (
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
    );
  }

  return (
    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
  );
};
