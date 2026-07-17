"use client";

import { checkAdminOrOwner } from "@calcom/features/auth/lib/checkAdminOrOwner";
import { useCompatSearchParams } from "@calcom/lib/hooks/useCompatSearchParams";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import useMeQuery from "@calcom/trpc/react/hooks/useMeQuery";
import { trpc } from "@calcom/trpc/react/trpc";
import type { ButtonProps } from "@calcom/ui/components/button/Button";
import { Button } from "@calcom/ui/components/button/Button";
import { OutOfOfficeTab } from "./OutOfOfficeToggleGroup";

const CreateNewOutOfOfficeEntryButton = ({
  size,
  onClick,
  ...rest
}: {
  size?: ButtonProps["size"];
  onClick: () => void;
  "data-testid"?: string;
}) => {
  const { t } = useLocale();
  const me = useMeQuery();
  const { data: orgData } = trpc.viewer.organizations.listCurrent.useQuery();
  const isOrgAdminOrOwner = orgData && checkAdminOrOwner(orgData.user.role);
  const hasTeamOOOAdminAccess = isOrgAdminOrOwner || me?.data?.canUpdateTeams;

  const params = useCompatSearchParams();
  const selectedTab = params?.get("type") ?? OutOfOfficeTab.MINE;

  return (
    <Button
      color="primary"
      size={size ?? "base"}
      className="flex items-center justify-between px-2 md:px-4"
      StartIcon="plus"
      onClick={onClick}
      data-testid={rest["data-testid"]}
      disabled={selectedTab === OutOfOfficeTab.TEAM && !hasTeamOOOAdminAccess}>
      <span className="sr-only md:not-sr-only md:inline">{t("add")}</span>
    </Button>
  );
};

export default CreateNewOutOfOfficeEntryButton;
