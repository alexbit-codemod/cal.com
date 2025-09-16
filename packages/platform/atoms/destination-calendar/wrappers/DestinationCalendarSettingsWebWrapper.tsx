import { trpc } from "@calcom/trpc/react";

import { AtomsWrapper } from "../../src/components/atoms-wrapper";
import { DestinationCalendarSettings } from "../DestinationCalendar";

export const DestinationCalendarSettingsWebWrapper = () => {
  const calendars = trpc.viewer.calendars.connectedCalendars.useQuery();
  const utils = trpc.useUtils();
  const mutation = trpc.viewer.calendars.setDestinationCalendar.useMutation({
    onSuccess: () => {
      utils.viewer.calendars.connectedCalendars.invalidate();
    },
  });

  if (!calendars.data?.connectedCalendars || calendars.data.connectedCalendars.length < 1) {
    return null;
  }

  return (
    <AtomsWrapper>
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
    </AtomsWrapper>
  );
};
