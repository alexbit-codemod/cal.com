import { useState } from "react";

import { trpc } from "@calcom/trpc/react";
import { Button } from "@calcom/ui/components/button";

import { ConfirmDialog } from "./confirmDialog";

interface IWipeMyCalActionButtonProps {
  bookingsEmpty: boolean;
  bookingStatus: "upcoming" | "recurring" | "past" | "cancelled" | "unconfirmed";
}

const WipeMyCalActionButton = (props: IWipeMyCalActionButtonProps) => {
  const { bookingsEmpty, bookingStatus } = props;
  const [openDialog, setOpenDialog] = useState(false);
  const { isSuccess, isPending, data } = trpc.viewer.apps.integrations.useQuery({
    variant: "other",
    onlyInstalled: undefined,
  });

  if (bookingStatus !== "upcoming" || bookingsEmpty) {
    return <></>;
  }
  const wipeMyCalCredentials = data?.items.find((item: { type: string }) => item.type === "wipemycal_other");

  const [credentialId] = wipeMyCalCredentials?.userCredentialIds || [false];

  return (
    <>
      {data && isSuccess && !isPending && credentialId && (
        <div className="mb-4">
          <ConfirmDialog isOpenDialog={openDialog} setIsOpenDialog={setOpenDialog} />
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
        </div>
      )}
    </>
  );
};

export { WipeMyCalActionButton };
