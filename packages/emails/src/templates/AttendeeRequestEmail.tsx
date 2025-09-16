import AttendeeScheduledEmailClass from "../../templates/attendee-rescheduled-email";
import { AttendeeScheduledEmail } from "./AttendeeScheduledEmail";

export const AttendeeRequestEmail = (props: React.ComponentProps<typeof AttendeeScheduledEmail>) => {
  const date = new AttendeeScheduledEmailClass(props.calEvent, props.attendee).getFormattedDate();

  return (
    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
  );
};
