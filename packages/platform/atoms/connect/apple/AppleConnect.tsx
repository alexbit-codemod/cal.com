"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { FC } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { useLocale } from "@calcom/lib/hooks/useLocale";
import { Button } from "@calcom/ui/components/button";
import { Form } from "@calcom/ui/components/form";
import { PasswordField } from "@calcom/ui/components/form";
import { TextField } from "@calcom/ui/components/form";

import { SUCCESS_STATUS } from "../../../constants/api";
import { useCheck } from "../../hooks/connect/useCheck";
import { useSaveCalendarCredentials } from "../../hooks/connect/useConnect";
import { AtomsWrapper } from "../../src/components/atoms-wrapper";
import { useToast } from "../../src/components/ui/use-toast";
import { cn } from "../../src/lib/utils";
import { ConnectedCalendarsTooltip } from "../OAuthConnect";
import type { OAuthConnectProps } from "../OAuthConnect";

export const AppleConnect: FC<Partial<Omit<OAuthConnectProps, "redir">>> = ({
  label,
  alreadyConnectedLabel,
  loadingLabel,
  className,
  initialData,
  isMultiCalendar = false,
  tooltip,
  tooltipSide = "bottom",
  isClickable,
  onSuccess,
  isDryRun = false,
}) => {
  const { t } = useLocale();
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const { toast } = useToast();
  const { allowConnect, checked, refetch } = useCheck({
    calendar: "apple",
    initialData,
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  let displayedLabel = label || t("apple_connect_atom_label");

  const { mutate: saveCredentials, isPending: isSaving } = useSaveCalendarCredentials({
    onSuccess: (res) => {
      if (res.status === SUCCESS_STATUS) {
        form.reset();
        setIsDialogOpen(false);
        refetch();
        toast({
          description: "Calendar credentials added successfully",
        });
        onSuccess?.();
      }
    },
    onError: (err) => {
      toast({
        description: `Error: ${err}`,
      });
    },
  });

  const isChecking = !checked;
  const isDisabled = isChecking || !allowConnect;

  if (isChecking) {
    displayedLabel = loadingLabel || t("apple_connect_atom_loading_label");
  } else if (!allowConnect) {
    displayedLabel = alreadyConnectedLabel || t("apple_connect_atom_already_connected_label");
  }

  return (
    <AtomsWrapper>
      <Dialog open={isDialogOpen}>
        <DialogTrigger asChild>
          <>
            {isMultiCalendar && (
              <Button
                StartIcon="calendar-days"
                color="primary"
                disabled={isClickable ? false : isChecking}
                tooltip={tooltip ? tooltip : <ConnectedCalendarsTooltip calendarInstance="apple" />}
                tooltipSide={tooltipSide}
                tooltipOffset={10}
                tooltipClassName="p-0 text-inherit bg-inherit"
                className={cn("", !isDisabled && "cursor-pointer", "border-none md:rounded-md", className)}
                onClick={() => setIsDialogOpen(true)}>
                {displayedLabel}
              </Button>
            )}
            {!isMultiCalendar && (
              <Button
                StartIcon="calendar-days"
                color="primary"
                disabled={isDisabled}
                className={cn(
                  "",
                  isDisabled && "cursor-not-allowed",
                  !isDisabled && "cursor-pointer",
                  "border-none md:rounded-md",
                  className
                )}
                onClick={() => setIsDialogOpen(true)}>
                {displayedLabel}
              </Button>
            )}
          </>
        </DialogTrigger>
        <DialogContent className="bg-default text-default">
          <DialogHeader>
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$// To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$. Your credentials
              will be stored and encrypted.
            </DialogDescription>
          </DialogHeader>
          <Form
            form={form}
            handleSubmit={async (values) => {
              const { username, password } = values;

              if (isDryRun) {
                form.reset();
                setIsDialogOpen(false);
                toast({
                  description: "Calendar credentials added successfully",
                });
                onSuccess?.();
              } else {
                await saveCredentials({ calendar: "apple", username, password });
              }
            }}>
            <fieldset
              className="space-y-4"
              disabled={form.formState.isSubmitting}
              data-testid="apple-calendar-form">
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
            </fieldset>
            <div className="mt-5 justify-end space-x-2 rtl:space-x-reverse sm:mt-4 sm:flex">
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
            </div>
          </Form>
        </DialogContent>
      </Dialog>
    </AtomsWrapper>
  );
};
