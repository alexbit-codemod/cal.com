"use client";

import { useState } from "react";

import { trpc } from "@calcom/trpc";
import { TextField } from "@calcom/ui/components/form";
import { Button } from "@calcom/ui/components/button";
import { showToast } from "@calcom/ui/components/toast";

import UsersTable from "./components/UsersTable";

export default function LockedSMSView() {
  const [username, setUsername] = useState("");
  const [teamSlug, setTeamSlug] = useState("");

  const utils = trpc.useContext();

  const mutation = trpc.viewer.admin.setSMSLockState.useMutation({
    onSuccess: (data) => {
      if (data) {
        showToast(`${data.name} successfully ${data.locked ? "locked" : "unlocked"}`, "success");
      }
      utils.viewer.admin.getSMSLockStateTeamsUsers.invalidate();
    },
    onError: (error) => {
      showToast(`${error}`, "error");
      utils.viewer.admin.getSMSLockStateTeamsUsers.invalidate();
    },
  });

  function setSMSLockState({ userId, teamId, lock }: { userId?: number; teamId?: number; lock: boolean }) {
    mutation.mutate({
      userId,
      teamId,
      lock,
    });
  }

  return (
    <div>
      <div className="mb-4 flex w-full items-center justify-between space-x-2 rtl:space-x-reverse">
        <div className="flex">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
        </div>
        <div className="flex">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
        </div>
      </div>
      <UsersTable setSMSLockState={setSMSLockState} />
    </div>
  );
}
