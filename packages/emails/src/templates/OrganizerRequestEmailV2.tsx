import { WEBAPP_URL } from "@calcom/lib/constants";

import { CallToAction, Separator, CallToActionTable, BookingConfirmationForm } from "../components";
import { OrganizerScheduledEmail } from "./OrganizerScheduledEmail";

export const OrganizerRequestEmailV2 = (props: React.ComponentProps<typeof OrganizerScheduledEmail>) => {
  const { uid } = props.calEvent;
  const userId = props.calEvent.organizer.id;
  const token = props.calEvent.oneTimePassword;
  //TODO: We should switch to using org domain if available
  const actionHref = `${WEBAPP_URL}/api/verify-booking-token/?token=${token}&userId=${userId}&bookingUid=${uid}`;
  return (
    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$// To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
            <Separator />
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
          </CallToActionTable>
        </BookingConfirmationForm>
      }
      {...props}
    />
  );
};
