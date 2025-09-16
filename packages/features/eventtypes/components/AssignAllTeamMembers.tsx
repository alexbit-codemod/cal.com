import type { Dispatch, SetStateAction } from "react";
import { Controller, useFormContext } from "react-hook-form";

import type { FormValues, SettingsToggleClassNames } from "@calcom/features/eventtypes/lib/types";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import { SettingsToggle } from "@calcom/ui/components/form";
import classNames from "@calcom/ui/classNames";

const AssignAllTeamMembers = ({
  assignAllTeamMembers,
  setAssignAllTeamMembers,
  onActive,
  onInactive,
  customClassNames,
}: {
  assignAllTeamMembers: boolean;
  setAssignAllTeamMembers: Dispatch<SetStateAction<boolean>>;
  onActive: () => void;
  onInactive?: () => void;
  customClassNames?: SettingsToggleClassNames;
}) => {
  const { t } = useLocale();
  const { setValue } = useFormContext<FormValues>();

  return (
    <Controller<FormValues>
      name="assignAllTeamMembers"
      render={() => (
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      )}
    />
  );
};

export default AssignAllTeamMembers;
