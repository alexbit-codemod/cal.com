import { useState } from "react";

import { useLocale } from "@calcom/lib/hooks/useLocale";
import { trpc } from "@calcom/trpc/react";
import { SettingsToggle } from "@calcom/ui/components/form";
import { showToast } from "@calcom/ui/components/toast";

const MakeTeamPrivateSwitch = ({
  teamId,
  isPrivate,
  disabled,
  isOrg,
}: {
  teamId: number;
  isPrivate: boolean;
  disabled: boolean;
  isOrg: boolean;
}) => {
  const { t } = useLocale();

  const utils = trpc.useUtils();

  const mutation = trpc.viewer.teams.update.useMutation({
    onError: (err) => {
      showToast(err.message, "error");
    },
    async onSuccess() {
      await utils.viewer.teams.get.invalidate();
      showToast(t(isOrg ? "your_org_updated_successfully" : "your_team_updated_successfully"), "success");
    },
  });

  const [isTeamPrivate, setTeamPrivate] = useState(isPrivate);

  return (
    <>
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
    </>
  );
};

export default MakeTeamPrivateSwitch;
