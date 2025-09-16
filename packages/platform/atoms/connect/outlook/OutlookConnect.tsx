"use client";

import type { FC } from "react";

import { useLocale } from "@calcom/lib/hooks/useLocale";
import { OFFICE_365_CALENDAR } from "@calcom/platform-constants";

import type { OAuthConnectProps } from "../OAuthConnect";
import { OAuthConnect } from "../OAuthConnect";

export const OutlookConnect: FC<Partial<OAuthConnectProps>> = ({
  label,
  alreadyConnectedLabel,
  loadingLabel,
  className,
  onCheckError,
  redir,
  initialData,
  isMultiCalendar = false,
  tooltipSide,
  tooltip,
  isClickable,
  isDryRun,
}) => {
  const { t } = useLocale();
  return (
    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
  );
};
