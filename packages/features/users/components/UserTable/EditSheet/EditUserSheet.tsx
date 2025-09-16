import type { Dispatch } from "react";
import { shallow } from "zustand/shallow";

import { useOrgBranding } from "@calcom/ee/organizations/context/provider";
import { WEBAPP_URL } from "@calcom/lib/constants";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import { trpc } from "@calcom/trpc/react";
import { Avatar } from "@calcom/ui/components/avatar";
import { Sheet, SheetContent, SheetBody, SheetHeader, SheetFooter } from "@calcom/ui/components/sheet";
import { Loader } from "@calcom/ui/components/skeleton";

import type { UserTableAction, UserTableState } from "../types";
import { DisplayInfo } from "./DisplayInfo";
import { EditForm } from "./EditUserForm";
import { OrganizationBanner } from "./OrganizationBanner";
import { SheetFooterControls } from "./SheetFooterControls";
import { useEditMode } from "./store";

function removeProtocol(url: string) {
  return url.replace(/^(https?:\/\/)/, "");
}

export function EditUserSheet({
  state,
  dispatch,
}: {
  state: UserTableState;
  dispatch: Dispatch<UserTableAction>;
}) {
  const { t } = useLocale();
  const { user: selectedUser } = state.editSheet;
  const orgBranding = useOrgBranding();
  const [editMode, setEditMode] = useEditMode((state) => [state.editMode, state.setEditMode], shallow);
  const { data: loadedUser, isPending } = trpc.viewer.organizations.getUser.useQuery(
    {
      userId: selectedUser?.id,
    },
    {
      enabled: !!selectedUser?.id,
    }
  );

  const { data: usersAttributes, isPending: usersAttributesPending } =
    trpc.viewer.attributes.getByUserId.useQuery(
      {
        // @ts-expect-error We know it exists as it is only called when selectedUser is defined
        userId: selectedUser?.id,
      },
      {
        enabled: !!selectedUser?.id,
      }
    );

  const avatarURL = `${orgBranding?.fullDomain ?? WEBAPP_URL}/${loadedUser?.username}/avatar.png`;

  const schedulesNames = loadedUser?.schedules && loadedUser?.schedules.map((s) => s.name);
  const teamNames =
    loadedUser?.teams && loadedUser?.teams.map((t) => `${t.name} ${!t.accepted ? "(pending)" : ""}`);

  return (
    <Sheet
      open={true}
      onOpenChange={() => {
        setEditMode(false);
        dispatch({ type: "CLOSE_MODAL" });
      }}>
      <SheetContent className="bg-default">
        {!isPending && loadedUser ? (
          <>
            {!editMode ? (
              <>
                <SheetHeader showCloseButton={false} className="w-full">
                  <div className="border-sublte bg-default w-full rounded-xl border p-4">
                    <OrganizationBanner />
                    <div className="bg-default ml-3 w-fit translate-y-[-50%] rounded-full p-1 ring-1 ring-[#0000000F]">
                      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                      $$$
                    </div>
                    <h2 className="text-emphasis font-sans text-2xl font-semibold">
                      {loadedUser?.name || "Nameless User"}
                    </h2>
                    <p className="text-subtle max-h-[3em] overflow-hidden text-ellipsis text-sm font-normal">
                      {loadedUser?.bio || "This user does not have a bio..."}
                    </p>
                  </div>
                </SheetHeader>
                <SheetBody className="flex flex-col space-y-4 p-4">
                  <div className="mb-4 flex flex-col space-y-4">
                    <h3 className="text-emphasis mb-1 text-base font-semibold">{t("profile")}</h3>
                    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                    $$$
                    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                    $$$
                    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                    $$$
                    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                    $$$
                    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                    $$$
                    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                    $$$
                  </div>
                  {usersAttributes && usersAttributes?.length > 0 && (
                    <div className="mt-4 flex flex-col">
                      <h3 className="text-emphasis mb-5 text-base font-semibold">{t("attributes")}</h3>
                      <div className="flex flex-col space-y-4">
                        {usersAttributes.map((attribute, index) => (
                          <>
                            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                            $$$
                          </>
                        ))}
                      </div>
                    </div>
                  )}
                </SheetBody>
                <SheetFooter>
                  <SheetFooterControls />
                </SheetFooter>
              </>
            ) : (
              <>
                <EditForm
                  selectedUser={loadedUser}
                  avatarUrl={loadedUser.avatarUrl ?? avatarURL}
                  domainUrl={orgBranding?.fullDomain ?? WEBAPP_URL}
                  dispatch={dispatch}
                />
              </>
            )}
          </>
        ) : (
          <Loader />
        )}
      </SheetContent>
    </Sheet>
  );
}
