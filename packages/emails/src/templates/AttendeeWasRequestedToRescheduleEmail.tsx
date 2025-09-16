import { CallToAction, CallToActionTable } from "../components";
import { OrganizerScheduledEmail } from "./OrganizerScheduledEmail";

export const AttendeeWasRequestedToRescheduleEmail = (
  props: { metadata: { rescheduleLink: string } } & React.ComponentProps<typeof OrganizerScheduledEmail>
) => {
  const t = props.attendee.language.translate;
  return (
    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$// To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
        </CallToActionTable>
      }
      {...props}
    />
  );
};
