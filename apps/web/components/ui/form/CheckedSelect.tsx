import React from "react";
import type { Props } from "react-select";

import Select from "@calcom/features/form/components/Select";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import { Avatar } from "@calcom/ui/components/avatar";
import { Icon } from "@calcom/ui/components/icon";

type CheckedSelectOption = {
  avatar: string;
  label: string;
  value: string;
  disabled?: boolean;
};

export const CheckedSelect = ({
  options = [],
  value = [],
  ...props
}: Omit<Props<CheckedSelectOption, true>, "value" | "onChange"> & {
  value?: readonly CheckedSelectOption[];
  onChange: (value: readonly CheckedSelectOption[]) => void;
}) => {
  const { t } = useLocale();
  return (
    <>
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      {value.map((option) => (
        <div key={option.value} className="border p-2 font-medium">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          {option.label}
          <Icon
            name="x"
            onClick={() => props.onChange(value.filter((item) => item.value !== option.value))}
            className="text-subtle float-right mt-0.5 h-5 w-5 cursor-pointer"
          />
        </div>
      ))}
    </>
  );
};

export default CheckedSelect;
