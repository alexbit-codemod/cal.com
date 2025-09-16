"use client";

import { useLocale } from "@calcom/lib/hooks/useLocale";
import type { OrganizationRepository } from "@calcom/lib/server/repository/organization";
import { EmptyScreen } from "@calcom/ui/components/empty-screen";

import OtherTeamList from "./OtherTeamList";

type OtherTeamsListingProps = {
  teams: Awaited<ReturnType<typeof OrganizationRepository.findTeamsInOrgIamNotPartOf>>;
};
export function OtherTeamsListing({ teams }: OtherTeamsListingProps) {
  const { t } = useLocale();

  return (
    <>
      {teams && teams.length > 0 ? (
        <OtherTeamList teams={teams} />
      ) : (
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      )}
    </>
  );
}
