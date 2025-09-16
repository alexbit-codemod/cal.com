import { ErrorMessage } from "@hookform/error-message";
import { useFormContext, Controller } from "react-hook-form";

import { useIsPlatform } from "@calcom/atoms/hooks/useIsPlatform";
import type { FormValues } from "@calcom/features/eventtypes/lib/types";
import type { CalVideoSettings as CalVideoSettingsType } from "@calcom/features/eventtypes/lib/types";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import classNames from "@calcom/ui/classNames";
import { UpgradeTeamsBadge } from "@calcom/ui/components/badge";
import { TextField } from "@calcom/ui/components/form";
import { SettingsToggle } from "@calcom/ui/components/form";

import LocationSettingsContainer from "./LocationSettingsContainer";

const CalVideoSettings = ({ calVideoSettings }: { calVideoSettings?: CalVideoSettingsType }) => {
  const { t } = useLocale();
  const formMethods = useFormContext<FormValues>();
  const isPlatform = useIsPlatform();
  return (
    <LocationSettingsContainer>
      <Controller
        name="calVideoSettings.disableRecordingForGuests"
        defaultValue={!!calVideoSettings?.disableRecordingForGuests}
        render={({ field: { onChange, value } }) => {
          return (
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
          );
        }}
      />

      <Controller
        name="calVideoSettings.disableRecordingForOrganizer"
        defaultValue={!!calVideoSettings?.disableRecordingForOrganizer}
        render={({ field: { onChange, value } }) => {
          return (
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
          );
        }}
      />

      {!isPlatform && (
        <Controller
          name="calVideoSettings.enableAutomaticRecordingForOrganizer"
          defaultValue={!!calVideoSettings?.enableAutomaticRecordingForOrganizer}
          render={({ field: { onChange, value } }) => {
            return (
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
            );
          }}
        />
      )}

      <Controller
        name="calVideoSettings.enableAutomaticTranscription"
        defaultValue={!!calVideoSettings?.enableAutomaticTranscription}
        render={({ field: { onChange, value } }) => {
          return (
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
          );
        }}
      />

      {!isPlatform && (
        <Controller
          name="calVideoSettings.disableTranscriptionForGuests"
          defaultValue={!!calVideoSettings?.disableTranscriptionForGuests}
          render={({ field: { onChange, value } }) => {
            return (
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
            );
          }}
        />
      )}
      {!isPlatform && (
        <Controller
          name="calVideoSettings.disableTranscriptionForOrganizer"
          defaultValue={!!calVideoSettings?.disableTranscriptionForOrganizer}
          render={({ field: { onChange, value } }) => {
            return (
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
            );
          }}
        />
      )}

      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      <ErrorMessage
        errors={formMethods.formState.errors?.calVideoSettings}
        name="redirectUrlOnExit"
        className={classNames("text-error text-sm")}
        as="div"
        id="calVideoSettings.redirectUrlOnExit-error"
      />
    </LocationSettingsContainer>
  );
};

export default CalVideoSettings;
