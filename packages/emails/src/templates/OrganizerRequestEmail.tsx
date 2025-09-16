import { WEBAPP_URL } from "@calcom/lib/constants";
import { symmetricEncrypt } from "@calcom/lib/crypto";

import { CallToAction, Separator, CallToActionTable } from "../components";
import { OrganizerScheduledEmail } from "./OrganizerScheduledEmail";

export const OrganizerRequestEmail = (props: React.ComponentProps<typeof OrganizerScheduledEmail>) => {
  const seedData = { bookingUid: props.calEvent.uid, userId: props.calEvent.organizer.id };
  const token = symmetricEncrypt(JSON.stringify(seedData), process.env.CALENDSO_ENCRYPTION_KEY || "");
  //TODO: We should switch to using org domain if available
  const actionHref = `${WEBAPP_URL}/api/link/?token=${encodeURIComponent(token)}`;
  return (
    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$// To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          <Separator />
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
        </CallToActionTable>
      }
      {...props}
    />
  );
};
