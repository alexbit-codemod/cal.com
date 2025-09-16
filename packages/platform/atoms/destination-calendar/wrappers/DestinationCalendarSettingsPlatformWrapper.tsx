import { useUpdateDestinationCalendars } from "../../hooks/calendars/useUpdateDestinationCalendars";
import { useConnectedCalendars } from "../../hooks/useConnectedCalendars";
import { AtomsWrapper } from "../../src/components/atoms-wrapper";
import type { DestinationCalendarClassNames } from "../DestinationCalendar";
import { DestinationCalendarSettings } from "../DestinationCalendar";

export const DestinationCalendarSettingsPlatformWrapper = ({
  statusLoader,
  classNames = "mx-5",
  classNamesObject,
  isDryRun = false,
}: {
  statusLoader?: JSX.Element;
  classNames?: string;
  classNamesObject?: DestinationCalendarClassNames;
  isDryRun?: boolean;
}) => {
  const calendars = useConnectedCalendars({});
  const { mutate: updateDestinationCalendars, isPending: isUpdatingCalendar } =
    useUpdateDestinationCalendars();

  if (calendars.isLoading) {
    return (
      <AtomsWrapper>
        <>
          {statusLoader}
          {!statusLoader && // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$}
        </>
      </AtomsWrapper>
    );
  }

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
