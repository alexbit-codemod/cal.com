import { useRouter } from "next/navigation";
import React from "react";

import type { PERMISSION_MAP } from "@calcom/platform-constants";
import { PERMISSIONS_GROUPED_MAP } from "@calcom/platform-constants";
import type { Avatar } from "@calcom/prisma/client";
import classNames from "@calcom/ui/classNames";
import { Button } from "@calcom/ui/components/button";
import { Icon } from "@calcom/ui/components/icon";
import { showToast } from "@calcom/ui/components/toast";

type OAuthClientCardProps = {
  name: string;
  logo?: Avatar;
  redirectUris: string[];
  bookingRedirectUri: string | null | undefined;
  bookingCancelRedirectUri: string | null | undefined;
  bookingRescheduleRedirectUri: string | null | undefined;
  areEmailsEnabled: boolean | undefined;
  areDefaultEventTypesEnabled: boolean;
  areCalendarEventsEnabled: boolean;
  permissions: Array<keyof typeof PERMISSION_MAP>;
  lastItem: boolean;
  id: string;
  secret: string;
  onDelete: (id: string) => Promise<void>;
  isLoading: boolean;
  organizationId: number;
};

export const OAuthClientCard = ({
  name,
  logo,
  redirectUris,
  bookingRedirectUri,
  bookingCancelRedirectUri,
  bookingRescheduleRedirectUri,
  permissions,
  id,
  secret,
  lastItem,
  onDelete,
  isLoading,
  areEmailsEnabled,
  areDefaultEventTypesEnabled,
  areCalendarEventsEnabled,
  organizationId,
}: OAuthClientCardProps) => {
  const router = useRouter();

  const groupedPermissions = permissions.reduce<Record<string, { read: boolean; write: boolean }>>(
    (acc, permission) => {
      const [resource] = permission.split("_READ") as [string] | [string, string];
      const isRead = permission.endsWith("_READ");
      const isWrite = permission.endsWith("_WRITE");
      const key = resource.replace("_WRITE", "");

      if (!acc[key]) acc[key] = { read: false, write: false };
      if (isRead) acc[key].read = true;
      if (isWrite) acc[key].write = true;

      return acc;
    },
    {}
  );

  const clientPermissions = Object.entries(groupedPermissions).map(([resource, { read, write }], index) => {
    const permissionTypes = [];
    if (read) permissionTypes.push("read");
    if (write) permissionTypes.push("write");

    const permissionsMessage = permissionTypes.join("/");
    const groupedPermission = PERMISSIONS_GROUPED_MAP[resource as keyof typeof PERMISSIONS_GROUPED_MAP];
    const isLastItem = index === Object.keys(groupedPermissions).length - 1;

    return (
      <div key={resource} className="relative text-sm">
        &nbsp;{permissionsMessage} {groupedPermission?.label.toLowerCase()}
        {!isLastItem && ", "}
      </div>
    );
  });

  return (
    <div
      className={classNames(
        "flex w-full justify-between px-4 py-4 sm:px-6",
        lastItem ? "" : "border-subtle border-b"
      )}>
      <div className="flex flex-col gap-2">
        <div className="flex gap-1">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
        </div>
        {!!logo && (
          <div>
            <>{logo}</>
          </div>
        )}
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-2">
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
            <div>{id}</div>
            <Icon
              name="clipboard"
              type="button"
              className="h-4 w-4 cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(id);
                showToast("Client id copied to clipboard.", "success");
              }}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          <div className="flex items-center justify-center rounded-md">
            {[...new Array(20)].map((_, index) => (
              <Icon name="asterisk" key={`${index}asterisk`} className="h-2 w-2" />
            ))}
            <Icon
              name="clipboard"
              type="button"
              className="ml-2 h-4 w-4 cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(secret);
                showToast("Client secret copied to clipboard.", "success");
              }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-2">
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
            <div>{organizationId}</div>
            <Icon
              name="clipboard"
              type="button"
              className="h-4 w-4 cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(organizationId.toString());
                showToast("Organization id copied to clipboard.", "success");
              }}
            />
          </div>
        </div>
        <div className="border-subtle flex text-sm">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          {permissions ? <div className="flex">{clientPermissions}</div> : // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$}
        </div>
        <div className="flex gap-1 text-sm">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          {redirectUris.map((item, index) => (redirectUris.length === index + 1 ? `${item}` : `${item}, `))}
        </div>
        {bookingRedirectUri && (
          <div className="flex gap-1 text-sm">
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$ {bookingRedirectUri}
          </div>
        )}
        {bookingRescheduleRedirectUri && (
          <div className="flex gap-1 text-sm">
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$ {bookingRescheduleRedirectUri}
          </div>
        )}
        {bookingCancelRedirectUri && (
          <div className="flex gap-1 text-sm">
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$ {bookingCancelRedirectUri}
          </div>
        )}
        <div className="flex gap-1 text-sm">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$ {areEmailsEnabled ? "Yes" : "No"}
        </div>
        <div className="flex gap-1 text-sm">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$${" "}
          {areDefaultEventTypesEnabled ? "Yes" : "No"}
        </div>
        <div className="flex gap-1 text-sm">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$${" "}
          {areCalendarEventsEnabled ? "Yes" : "No"}
        </div>
      </div>
      <div className="flex items-start gap-4">
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </div>
    </div>
  );
};
