import { useState } from "react";

import { useLocale } from "@calcom/lib/hooks/useLocale";
import { trpc } from "@calcom/trpc/react";
import { SettingsToggle } from "@calcom/ui/components/form";
import { showToast } from "@calcom/ui/components/toast";

const DisableTeamImpersonation = ({
  teamId,
  memberId,
  disabled,
}: {
  teamId: number;
  memberId: number;
  disabled: boolean;
}) => {
  const { t } = useLocale();

  const utils = trpc.useUtils();

  const query = trpc.viewer.teams.getMembershipbyUser.useQuery({ teamId, memberId });

  const mutation = trpc.viewer.teams.updateMembership.useMutation({
    onSuccess: async () => {
      showToast(t("your_user_profile_updated_successfully"), "success");
      await utils.viewer.teams.getMembershipbyUser.invalidate();
    },
  });
  const [allowImpersonation, setAllowImpersonation] = useState(
    query.data ? !query.data.disableImpersonation : true
  );
  if (query.isPending) return <></>;

  return (
    <>
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
    </>
  );
};

export default DisableTeamImpersonation;
