import { useState, useCallback } from "react";
import { useForm, useFieldArray } from "react-hook-form";

import { useLocale } from "@calcom/lib/hooks/useLocale";
import { PERMISSIONS_GROUPED_MAP } from "@calcom/platform-constants/permissions";
import { Button } from "@calcom/ui/components/button";
import { Label, TextField } from "@calcom/ui/components/form";
import { Icon } from "@calcom/ui/components/icon";
import { Tooltip } from "@calcom/ui/components/tooltip";

type OAuthClientFormProps = {
  defaultValues?: Partial<FormValues>;
  isPending?: boolean;
  isFormDisabled?: boolean;
  onSubmit: (data: FormValues) => void;
};

export type FormValues = {
  name: string;
  logo?: string;
  permissions: number;
  eventTypeRead: boolean;
  eventTypeWrite: boolean;
  bookingRead: boolean;
  bookingWrite: boolean;
  scheduleRead: boolean;
  scheduleWrite: boolean;
  appsRead: boolean;
  appsWrite: boolean;
  profileRead: boolean;
  profileWrite: boolean;
  redirectUris: {
    uri: string;
  }[];
  bookingRedirectUri?: string;
  bookingCancelRedirectUri?: string;
  bookingRescheduleRedirectUri?: string;
  areEmailsEnabled?: boolean;
  areDefaultEventTypesEnabled?: boolean;
  areCalendarEventsEnabled?: boolean;
};

export const OAuthClientForm = ({
  defaultValues,
  isPending,
  isFormDisabled,
  onSubmit,
}: OAuthClientFormProps) => {
  const { t } = useLocale();
  const { register, control, handleSubmit, setValue } = useForm<FormValues>({
    defaultValues: { redirectUris: [{ uri: "" }], ...defaultValues },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "redirectUris",
  });

  const [isSelectAllPermissionsChecked, setIsSelectAllPermissionsChecked] = useState(false);

  const selectAllPermissions = useCallback(() => {
    Object.keys(PERMISSIONS_GROUPED_MAP).forEach((key) => {
      const entity = key as keyof typeof PERMISSIONS_GROUPED_MAP;
      const permissionKey = PERMISSIONS_GROUPED_MAP[entity].key;

      setValue(`${permissionKey}Read`, !isSelectAllPermissionsChecked);
      setValue(`${permissionKey}Write`, !isSelectAllPermissionsChecked);
    });

    setIsSelectAllPermissionsChecked((preValue) => !preValue);
  }, [isSelectAllPermissionsChecked, setValue]);

  const permissionsCheckboxes = Object.keys(PERMISSIONS_GROUPED_MAP).map((key) => {
    const entity = key as keyof typeof PERMISSIONS_GROUPED_MAP;
    const permissionKey = PERMISSIONS_GROUPED_MAP[entity].key;
    const permissionLabel = PERMISSIONS_GROUPED_MAP[entity].label;

    return (
      <div className="my-3" key={key}>
        <p className="text-sm font-semibold">{permissionLabel}</p>
        <div className="mt-1 flex gap-x-5">
          <div className="flex items-center gap-x-2">
            <input
              {...register(`${permissionKey}Read`)}
              id={`${permissionKey}Read`}
              className="bg-default border-default h-4 w-4 shrink-0 cursor-pointer rounded-[4px] border ring-offset-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed"
              type="checkbox"
              disabled={!!defaultValues}
            />
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
          </div>
          <div className="flex items-center gap-x-2">
            <input
              {...register(`${permissionKey}Write`)}
              id={`${permissionKey}Write`}
              className="bg-default border-default h-4 w-4 shrink-0 cursor-pointer rounded-[4px] border ring-offset-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed"
              type="checkbox"
              disabled={!!defaultValues}
            />
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <form
        className="border-subtle rounded-b-lg border border-t-0 px-4 pb-8 pt-2"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-6">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
        </div>
        <div className="mt-6">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          {fields.map((field, index) => {
            return (
              <div className="flex items-end" key={field.id}>
                <div className="w-[80vw]">
                  // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                  $$$
                </div>
                <div className="flex">
                  <Button
                    tooltip="Add url"
                    type="button"
                    color="minimal"
                    variant="icon"
                    StartIcon="plus"
                    className="text-default mx-2 mb-2"
                    disabled={isFormDisabled}
                    onClick={() => {
                      append({ uri: "" });
                    }}
                  />
                  {index > 0 && (
                    <Button
                      tooltip="Remove url"
                      type="button"
                      color="destructive"
                      variant="icon"
                      StartIcon="trash"
                      className="text-default mx-2 mb-2"
                      disabled={isFormDisabled}
                      onClick={() => {
                        remove(index);
                      }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {/** <div className="mt-6">
          <Controller
            control={control}
            name="logo"
            render={({ field: { value } }) => (
              <>
                <Label>Client logo</Label>
                <div className="flex items-center">
                  <Avatar
                    alt=""
                    imageSrc={value}
                    fallback={<Icon name="plus" className="text-subtle h-4 w-4" />}
                    size="sm"
                  />
                  <div className="ms-4">
                    <ImageUploader
                      target="avatar"
                      id="vatar-upload"
                      buttonMsg="Upload"
                      imageSrc={value}
                      handleAvatarChange={(newAvatar: string) => {
                        setValue("logo", newAvatar);
                      }}
                    />
                  </div>
                </div>
              </>
            )}
          />
        </div> */}
        <div className="mt-6">
          <Tooltip content={t("booking_redirect_uri")}>
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
          </Tooltip>
        </div>
        <div className="mt-6">
          <Tooltip content={t("booking_cancel_redirect_uri")}>
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
          </Tooltip>
        </div>
        <div className="mt-6">
          <Tooltip content={t("booking_reschedule_redirect_uri")}>
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
          </Tooltip>
        </div>
        <div className="mt-6">
          <input
            {...register("areEmailsEnabled")}
            id="areEmailsEnabled"
            className="bg-default border-default h-4 w-4 shrink-0 cursor-pointer rounded-[4px] border ring-offset-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed"
            type="checkbox"
            disabled={isFormDisabled}
          />
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
        </div>
        <div className="mt-6">
          <div className="flex items-center">
            <input
              {...register("areCalendarEventsEnabled")}
              id="areCalendarEventsEnabled"
              className="bg-default border-default h-4 w-4 shrink-0 cursor-pointer rounded-[4px] border ring-offset-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed"
              type="checkbox"
              disabled={isFormDisabled}
            />
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
            <Tooltip
              className="max-w-[400px] whitespace-normal"
              content="If enabled and the managed user has calendar connected, an event in the calendar will be created. By default true. Disable it if you want to create events in the calendar manually.">
              <div className="ml-1">
                <Icon name="info" className="h-4 w-4 text-gray-500" aria-hidden="true" />
              </div>
            </Tooltip>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-center">
            <input
              {...register("areDefaultEventTypesEnabled")}
              id="areDefaultEventTypesEnabled"
              className="bg-default border-default h-4 w-4 shrink-0 cursor-pointer rounded-[4px] border ring-offset-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed"
              type="checkbox"
              disabled={isFormDisabled}
            />
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
            <Tooltip
              className="max-w-[400px] whitespace-normal"
              content="If enabled, when creating a managed user the managed user will have 4 default event types: 30 and 60 minutes without Cal video, 30 and 60 minutes with Cal video. Leave this disabled if you want to create a managed user and then manually create event types for the user.">
              <div className="ml-1">
                <Icon name="info" className="h-4 w-4 text-gray-500" aria-hidden="true" />
              </div>
            </Tooltip>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between">
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
            <Button type="button" onClick={selectAllPermissions} disabled={!!defaultValues || isFormDisabled}>
              {!isSelectAllPermissionsChecked ? "Select all" : "Discard all"}
            </Button>
          </div>
          <div>{permissionsCheckboxes}</div>
        </div>
        <Button className="mt-6" type="submit" loading={isPending}>
          {defaultValues ? t("update") : t("submit")}
        </Button>
      </form>
    </div>
  );
};
