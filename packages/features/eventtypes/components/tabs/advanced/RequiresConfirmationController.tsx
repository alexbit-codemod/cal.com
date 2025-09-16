import * as RadioGroup from "@radix-ui/react-radio-group";
import type { UnitTypeLongPlural } from "dayjs";
import type { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import type z from "zod";

import useLockedFieldsManager from "@calcom/features/ee/managed-event-types/hooks/useLockedFieldsManager";
import type { EventTypeSetup, SettingsToggleClassNames } from "@calcom/features/eventtypes/lib/types";
import type { FormValues } from "@calcom/features/eventtypes/lib/types";
import ServerTrans from "@calcom/lib/components/ServerTrans";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import type { EventTypeMetaDataSchema } from "@calcom/prisma/zod-utils";
import classNames from "@calcom/ui/classNames";
import { Select } from "@calcom/ui/components/form";
import { CheckboxField } from "@calcom/ui/components/form";
import { Input } from "@calcom/ui/components/form";
import { SettingsToggle } from "@calcom/ui/components/form";
import { RadioField } from "@calcom/ui/components/radio";

export type RequiresConfirmationCustomClassNames = SettingsToggleClassNames & {
  radioGroupContainer?: string;
  alwaysConfirmationRadio?: string;
  conditionalConfirmationRadio?: {
    container?: string;
    timeInput?: string;
    timeUnitSelect?: string;
    checkbox?: string;
    checkboxDescription?: string;
  };
};

type RequiresConfirmationControllerProps = {
  metadata: z.infer<typeof EventTypeMetaDataSchema>;
  requiresConfirmation: boolean;
  requiresConfirmationWillBlockSlot: boolean;
  onRequiresConfirmation: Dispatch<SetStateAction<boolean>>;
  seatsEnabled: boolean;
  eventType: EventTypeSetup;
  customClassNames?: RequiresConfirmationCustomClassNames;
};

export default function RequiresConfirmationController({
  metadata,
  eventType,
  requiresConfirmation,
  onRequiresConfirmation,
  seatsEnabled,
  customClassNames,
}: RequiresConfirmationControllerProps) {
  const { t } = useLocale();
  const [requiresConfirmationSetup, setRequiresConfirmationSetup] = useState(
    metadata?.requiresConfirmationThreshold
  );
  const defaultRequiresConfirmationSetup = { time: 30, unit: "minutes" as UnitTypeLongPlural };
  const formMethods = useFormContext<FormValues>();

  useEffect(() => {
    if (!requiresConfirmation) {
      formMethods.setValue("metadata.requiresConfirmationThreshold", undefined, { shouldDirty: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requiresConfirmation]);

  const { shouldLockDisableProps } = useLockedFieldsManager({ eventType, translate: t, formMethods });
  const requiresConfirmationLockedProps = shouldLockDisableProps("requiresConfirmation");

  const options = [
    { label: t("minute_timeUnit"), value: "minutes" },
    { label: t("hour_timeUnit"), value: "hours" },
  ];

  const defaultValue = options.find(
    (opt) =>
      opt.value === (metadata?.requiresConfirmationThreshold?.unit ?? defaultRequiresConfirmationSetup.unit)
  );

  const requiresConfirmationWillBlockSlot = formMethods.getValues("requiresConfirmationWillBlockSlot");
  const requiresConfirmationForFreeEmail = formMethods.getValues("requiresConfirmationForFreeEmail");

  return (
    <div className="block items-start sm:flex">
      <div className="w-full">
        <Controller
          name="requiresConfirmation"
          control={formMethods.control}
          render={() => (
            <SettingsToggle
              labelClassName={classNames("text-sm", customClassNames?.label)}
              toggleSwitchAtTheEnd={true}
              switchContainerClassName={classNames(
                "border-subtle rounded-lg border py-6 px-4 sm:px-6",
                requiresConfirmation && "rounded-b-none",
                customClassNames?.container
              )}
              childrenClassName={classNames("lg:ml-0", customClassNames?.children)}
              descriptionClassName={customClassNames?.description}
              title={t("requires_confirmation")}
              data-testid="requires-confirmation"
              disabled={seatsEnabled || requiresConfirmationLockedProps.disabled}
              tooltip={seatsEnabled ? t("seat_options_doesnt_support_confirmation") : undefined}
              description={t("requires_confirmation_description")}
              checked={requiresConfirmation}
              LockedIcon={requiresConfirmationLockedProps.LockedIcon}
              onCheckedChange={(val) => {
                formMethods.setValue("requiresConfirmation", val, { shouldDirty: true });
                // If we uncheck requires confirmation, we also uncheck these checkboxes
                if (!val) {
                  formMethods.setValue("requiresConfirmationWillBlockSlot", false, { shouldDirty: true });
                  formMethods.setValue("requiresConfirmationForFreeEmail", false, { shouldDirty: true });
                }
                onRequiresConfirmation(val);
              }}>
              <div className="border-subtle rounded-b-lg border border-t-0 p-6">
                <RadioGroup.Root
                  defaultValue={
                    requiresConfirmation
                      ? requiresConfirmationSetup === undefined
                        ? "always"
                        : "notice"
                      : undefined
                  }
                  onValueChange={(val) => {
                    if (val === "always") {
                      formMethods.setValue("requiresConfirmation", true, { shouldDirty: true });
                      onRequiresConfirmation(true);
                      formMethods.setValue("metadata.requiresConfirmationThreshold", undefined, {
                        shouldDirty: true,
                      });
                      setRequiresConfirmationSetup(undefined);
                    } else if (val === "notice") {
                      formMethods.setValue("requiresConfirmation", true, { shouldDirty: true });
                      onRequiresConfirmation(true);
                      formMethods.setValue(
                        "metadata.requiresConfirmationThreshold",
                        requiresConfirmationSetup || defaultRequiresConfirmationSetup,
                        { shouldDirty: true }
                      );
                    }
                  }}>
                  <div
                    className={classNames(
                      "flex flex-col flex-wrap justify-start gap-y-2",
                      customClassNames?.radioGroupContainer
                    )}>
                    {(requiresConfirmationSetup === undefined ||
                      !requiresConfirmationLockedProps.disabled) && (
                      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                      $$$
                    )}
                    {(requiresConfirmationSetup !== undefined ||
                      !requiresConfirmationLockedProps.disabled) && (
                      <>
                        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                        $$$
                        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                        $$$
                        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                        $$$
                      </>
                    )}
                  </div>
                </RadioGroup.Root>
              </div>
            </SettingsToggle>
          )}
        />
      </div>
    </div>
  );
}
