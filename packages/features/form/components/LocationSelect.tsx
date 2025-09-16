import type { GroupBase, Props, SingleValue } from "react-select";
import { components } from "react-select";

import type { EventLocationType } from "@calcom/app-store/locations";
import { useIsPlatform } from "@calcom/atoms/hooks/useIsPlatform";
import invertLogoOnDark from "@calcom/lib/invertLogoOnDark";
import { Select } from "@calcom/ui/components/form";
import { Icon } from "@calcom/ui/components/icon";
import classNames from "@calcom/ui/classNames";

export type LocationSelectCustomClassNames = {
  optionIcon?: string;
  optionLabel?: string;
  optionWrapper?: string;
  groupLabel?: string;
  selectWrapper?: string;
};

export type LocationOption = {
  label: string;
  value: EventLocationType["type"];
  icon?: string;
  disabled?: boolean;
  address?: string;
  credentialId?: number;
  teamName?: string;
  customClassNames?: LocationSelectCustomClassNames;
};

export type SingleValueLocationOption = SingleValue<LocationOption>;

export type GroupOptionType = GroupBase<LocationOption>;

const OptionWithIcon = ({
  icon,
  label,
  value,
  customClassNames,
}: {
  icon?: string;
  label: string;
  value: string;
  customClassNames?: LocationSelectCustomClassNames;
}) => {
  const isPlatform = useIsPlatform();

  const getIconFromValue = (value: string) => {
    switch (value) {
      case "phone":
        return <Icon name="phone" className={classNames("h-3.5 w-3.5", customClassNames?.optionIcon)} />;
      case "userPhone":
        return <Icon name="phone" className={classNames("h-3.5 w-3.5", customClassNames?.optionIcon)} />;
      case "inPerson":
        return <Icon name="map-pin" className={classNames("h-3.5 w-3.5", customClassNames?.optionIcon)} />;
      case "attendeeInPerson":
        return <Icon name="map-pin" className={classNames("h-3.5 w-3.5", customClassNames?.optionIcon)} />;
      case "link":
        return <Icon name="link" className={classNames("h-3.5 w-3.5", customClassNames?.optionIcon)} />;
      case "somewhereElse":
        return <Icon name="map" className={classNames("h-3.5 w-3.5", customClassNames?.optionIcon)} />;
      default:
        return <Icon name="video" className={classNames("h-3.5 w-3.5", customClassNames?.optionIcon)} />;
    }
  };

  if (isPlatform) {
    return (
      <div className={classNames("flex items-center gap-3", customClassNames?.optionWrapper)}>
        {getIconFromValue(value)}
        <span className={classNames("text-sm font-medium", customClassNames?.optionLabel)}>{label}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {icon && // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$}
      <span className={classNames(" text-sm font-medium")}>{label}</span>
    </div>
  );
};

export default function LocationSelect({
  customClassNames,
  ...props
}: Props<LocationOption, false, GroupOptionType> & { customClassNames?: LocationSelectCustomClassNames }) {
  const isPlatform = useIsPlatform();
  return (
    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$// To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
              </div>
            </components.Option>
          );
        },
        SingleValue: (props) => {
          return (
            <components.SingleValue {...props}>
              <div data-testid={`location-select-item-${props.data.value}`}>
                // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
              </div>
            </components.SingleValue>
          );
        },
      }}
      formatOptionLabel={(e, d) => (
        <div className="flex items-center gap-3">
          {e.icon && !isPlatform && (
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
          )}
          <span>{e.label}</span>
        </div>
      )}
      formatGroupLabel={(e) => (
        <p className={classNames("text-default text-xs font-medium", customClassNames?.groupLabel)}>
          {e.label}
        </p>
      )}
      {...props}
    />
  );
}
