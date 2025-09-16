"use client";

import { useMemo, useState } from "react";
import type { ITimezoneOption, ITimezone, Props as SelectProps } from "react-timezone-select";
import BaseSelect from "react-timezone-select";

import { CALCOM_VERSION } from "@calcom/lib/constants";
import { filterBySearchText, addTimezonesToDropdown, handleOptionLabel } from "@calcom/lib/timezone";
import type { Timezones } from "@calcom/lib/timezone";
import { trpc } from "@calcom/trpc/react";
import classNames from "@calcom/ui/classNames";
import { getReactSelectProps, inputStyles } from "@calcom/ui/components/form";

const SELECT_SEARCH_DATA: Timezones = [
  { label: "San Francisco", timezone: "America/Los_Angeles" },
  { label: "Sao Francisco do Sul", timezone: "America/Sao_Paulo" },
  { label: "San Francisco de Macoris", timezone: "America/Santo_Domingo" },
  { label: "San Francisco Gotera", timezone: "America/El_Salvador" },
  { label: "Eastern Time - US & Canada", timezone: "America/New_York" },
  { label: "Pacific Time - US & Canada", timezone: "America/Los_Angeles" },
  { label: "Central Time - US & Canada", timezone: "America/Chicago" },
  { label: "Mountain Time - US & Canada", timezone: "America/Denver" },
  { label: "Atlantic Time - Canada", timezone: "America/Halifax" },
  { label: "Eastern European Time", timezone: "Europe/Bucharest" },
  { label: "Central European Time", timezone: "Europe/Berlin" },
  { label: "Western European Time", timezone: "Europe/London" },
  { label: "Australian Eastern Time", timezone: "Australia/Sydney" },
  { label: "Japan Standard Time", timezone: "Asia/Tokyo" },
  { label: "India Standard Time", timezone: "Asia/Kolkata" },
  { label: "Gulf Standard Time", timezone: "Asia/Dubai" },
  { label: "South Africa Standard Time", timezone: "Africa/Johannesburg" },
  { label: "Brazil Time", timezone: "America/Sao_Paulo" },
  { label: "Hawaii-Aleutian Standard Time", timezone: "Pacific/Honolulu" },
];

export type TimezoneSelectProps = SelectProps & {
  variant?: "default" | "minimal";
  timezoneSelectCustomClassname?: string;
  size?: "sm" | "md";
  grow?: boolean;
};
export function TimezoneSelect(props: TimezoneSelectProps) {
  const { data = [], isPending } = trpc.viewer.timezones.cityTimezones.useQuery(
    {
      CalComVersion: CALCOM_VERSION,
    },
    {
      trpc: { context: { skipBatch: true } },
    }
  );
  const cityTimezonesFormatted = data.map(({ city, timezone }) => ({ label: city, timezone }));

  return (
    <TimezoneSelectComponent
      data={[...cityTimezonesFormatted, ...SELECT_SEARCH_DATA]}
      isPending={isPending}
      {...props}
    />
  );
}

export type TimezoneSelectComponentProps = SelectProps & {
  variant?: "default" | "minimal";
  isPending: boolean;
  data?: Timezones;
  timezoneSelectCustomClassname?: string;
  size?: "sm" | "md";
  grow?: boolean;
  isWebTimezoneSelect?: boolean;
};

// TODO: I wonder if we move this to ui package, and keep the TRPC version in features
export function TimezoneSelectComponent({
  className,
  classNames: timezoneClassNames,
  timezoneSelectCustomClassname,
  components,
  variant = "default",
  isPending,
  value,
  size = "md",
  grow = false,
  isWebTimezoneSelect = true,
  ...props
}: TimezoneSelectComponentProps) {
  const data = [...(props.data || [])];
  /*
   * we support multiple timezones for the different labels
   * e.g. 'Sao Paulo' and 'Brazil Time' both being 'America/Sao_Paulo'
   * but react-timezone-select does not.
   *
   * We make sure to be able to search through both options, and flip the key/value on final display.
   */
  const [additionalTimezones, setAdditionalTimezones] = useState<Timezones>([]);
  const handleInputChange = (searchText: string) => {
    if (data) setAdditionalTimezones(filterBySearchText(searchText, data));
  };

  const reactSelectProps = useMemo(() => {
    return getReactSelectProps({
      components: components || {},
    });
  }, [components]);

  return (
    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
  );
}

export type { ITimezone, ITimezoneOption };
