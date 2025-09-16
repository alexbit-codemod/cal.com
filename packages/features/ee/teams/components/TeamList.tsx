import { useState } from "react";

import {
  ORG_SELF_SERVE_ENABLED,
  ORG_MINIMUM_PUBLISHED_TEAMS_SELF_SERVE_HELPER_DIALOGUE,
} from "@calcom/lib/constants";
import { trackFormbricksAction } from "@calcom/lib/formbricks-client";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import type { RouterOutputs } from "@calcom/trpc/react";
import { trpc } from "@calcom/trpc/react";
import { Card } from "@calcom/ui/components/card";
import { Icon } from "@calcom/ui/components/icon";
import { showToast } from "@calcom/ui/components/toast";
import { revalidateTeamsList } from "@calcom/web/app/(use-page-wrapper)/(main-nav)/teams/actions";

import TeamListItem from "./TeamListItem";

interface Props {
  teams: RouterOutputs["viewer"]["teams"]["list"];
  orgId: number | null;
  /**
   * True for teams that are pending invite acceptance
   */
  pending?: boolean;
}

export default function TeamList(props: Props) {
  const utils = trpc.useUtils();

  const { t } = useLocale();
  const { orgId } = props;

  const [hideDropdown, setHideDropdown] = useState(false);

  function selectAction(action: string, teamId: number) {
    switch (action) {
      case "disband":
        deleteTeam(teamId);
        break;
    }
  }

  const deleteTeamMutation = trpc.viewer.teams.delete.useMutation({
    async onSuccess() {
      await utils.viewer.teams.list.invalidate();
      revalidateTeamsList();
      await utils.viewer.teams.hasTeamPlan.invalidate();
      trackFormbricksAction("team_disbanded");
    },
    async onError(err) {
      showToast(err.message, "error");
    },
  });

  function deleteTeam(teamId: number) {
    deleteTeamMutation.mutate({ teamId });
  }

  return (
    <ul className="bg-default divide-subtle border-subtle mb-2 divide-y overflow-hidden rounded-md border">
      {ORG_SELF_SERVE_ENABLED &&
        !props.pending &&
        !orgId &&
        props.teams.length >= ORG_MINIMUM_PUBLISHED_TEAMS_SELF_SERVE_HELPER_DIALOGUE &&
        props.teams.map(
          (team, i) =>
            team.role !== "MEMBER" &&
            i === 0 && (
              <div className="bg-subtle p-4" key={team.id}>
                <div className="grid-col-1 grid gap-2 md:grid-cols-3">
                  // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                  $$$
                  // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                  $$$
                  // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                  $$$
                </div>
              </div>
            )
        )}

      {props.teams.map((team) => (
        <TeamListItem
          key={team?.id as number}
          team={team}
          orgId={orgId}
          onActionSelect={(action: string) => selectAction(action, team?.id as number)}
          isPending={deleteTeamMutation.isPending}
          hideDropdown={hideDropdown}
          setHideDropdown={setHideDropdown}
        />
      ))}
      {/* only show recommended steps when there is only one team */}
      {!props.pending && props.teams.length === 1 && (
        <>
          {props.teams.map(
            (team, i) =>
              team.role !== "MEMBER" &&
              i === 0 && (
                <div className="bg-subtle p-6" key={`listing${team.id}`}>
                  <h3 className="text-emphasis mb-4 text-sm font-semibold">{t("recommended_next_steps")}</h3>
                  <div className="grid-col-1 grid gap-2 md:grid-cols-3">
                    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                    $$$
                    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                    $$$
                    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                    $$$
                  </div>
                </div>
              )
          )}
        </>
      )}
    </ul>
  );
}
