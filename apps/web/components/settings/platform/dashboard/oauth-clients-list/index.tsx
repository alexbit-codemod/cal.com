import { useRouter } from "next/navigation";

import type { PlatformOAuthClientDto } from "@calcom/platform-types";
import { Button } from "@calcom/ui/components/button";
import { EmptyScreen } from "@calcom/ui/components/empty-screen";

import { OAuthClientCard } from "@components/settings/platform/oauth-clients/OAuthClientCard";

type OAuthClientsListProps = {
  oauthClients: PlatformOAuthClientDto[];
  isDeleting: boolean;
  handleDelete: (id: string) => Promise<void>;
};

export const OAuthClientsList = ({ oauthClients, isDeleting, handleDelete }: OAuthClientsListProps) => {
  return (
    <div className="mb-10">
      <div className="border-subtle mx-auto block justify-between rounded-t-lg border px-4 py-6 sm:flex sm:px-6">
        <div className="flex w-full flex-col">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
        </div>
        <div>
          <NewOAuthClientButton redirectLink="/settings/platform/oauth-clients/create" />
        </div>
      </div>
      {Array.isArray(oauthClients) && oauthClients.length ? (
        <>
          <div className="border-subtle rounded-b-lg border border-t-0">
            {oauthClients.map((client, index) => {
              return (
                <OAuthClientCard
                  name={client.name}
                  redirectUris={client.redirectUris}
                  bookingRedirectUri={client.bookingRedirectUri}
                  bookingRescheduleRedirectUri={client.bookingRescheduleRedirectUri}
                  bookingCancelRedirectUri={client.bookingCancelRedirectUri}
                  permissions={client.permissions}
                  key={index}
                  lastItem={oauthClients.length === index + 1}
                  id={client.id}
                  secret={client.secret}
                  isLoading={isDeleting}
                  onDelete={handleDelete}
                  areEmailsEnabled={client.areEmailsEnabled}
                  areDefaultEventTypesEnabled={client.areDefaultEventTypesEnabled}
                  areCalendarEventsEnabled={client.areCalendarEventsEnabled}
                  organizationId={client.organizationId}
                />
              );
            })}
          </div>
        </>
      ) : (
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      )}
    </div>
  );
};

const NewOAuthClientButton = ({ redirectLink, label }: { redirectLink: string; label?: string }) => {
  const router = useRouter();

  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        router.push(redirectLink);
      }}
      color="secondary"
      StartIcon="plus">
      {!!label ? label : "Add"}
    </Button>
  );
};
