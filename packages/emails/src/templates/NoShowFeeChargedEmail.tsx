import type { CalendarEvent, Person } from "@calcom/types/Calendar";

import { BaseScheduledEmail } from "./BaseScheduledEmail";

export const NoShowFeeChargedEmail = (
  props: {
    calEvent: CalendarEvent;
    attendee: Person;
  } & Partial<React.ComponentProps<typeof BaseScheduledEmail>>
) => {
  const { calEvent } = props;
  const t = props.attendee.language.translate;
  const locale = props.attendee.language.locale;
  const timeFormat = props.attendee?.timeFormat;

  if (!calEvent.paymentInfo?.amount) throw new Error("No payment info");

  return (
    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
  );
};
