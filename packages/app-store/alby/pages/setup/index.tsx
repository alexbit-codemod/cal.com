import { auth, Client, webln } from "@getalby/sdk";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useCallback, useEffect } from "react";
import { Toaster } from "sonner";

import AppNotInstalledMessage from "@calcom/app-store/_components/AppNotInstalledMessage";
import { useCompatSearchParams } from "@calcom/lib/hooks/useCompatSearchParams";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import { trpc } from "@calcom/trpc";
import { showToast } from "@calcom/ui/components/toast";
import { Badge } from "@calcom/ui/components/badge";
import { Button } from "@calcom/ui/components/button";
import { Icon } from "@calcom/ui/components/icon";

import { albyCredentialKeysSchema } from "../../lib/albyCredentialKeysSchema";

export interface IAlbySetupProps {
  email: string | null;
  lightningAddress: string | null;
  clientId: string;
  clientSecret: string;
}

export default function AlbySetup(props: IAlbySetupProps) {
  const params = useCompatSearchParams();
  if (params?.get("callback") === "true") {
    return <AlbySetupCallback />;
  }

  return <AlbySetupPage {...props} />;
}

function AlbySetupCallback() {
  const [error, setError] = useState<string | null>(null);
  const searchParams = useCompatSearchParams();

  useEffect(() => {
    if (!searchParams) {
      return;
    }

    if (!window.opener) {
      setError("Something went wrong. Opener not available. Please contact support@getalby.com");
      return;
    }

    const code = searchParams?.get("code");
    const error = searchParams?.get("error");

    if (!code) {
      setError("declined");
    }
    if (error) {
      setError(error);
      alert(error);
      return;
    }

    window.opener.postMessage({
      type: "alby:oauth:success",
      payload: { code },
    });
    window.close();
  }, [searchParams]);

  return (
    <div>
      {error && // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$}
      {!error && // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$}
    </div>
  );
}

function AlbySetupPage(props: IAlbySetupProps) {
  const router = useRouter();
  const { t } = useLocale();
  const integrations = trpc.viewer.apps.integrations.useQuery({ variant: "payment", appId: "alby" });
  const [albyPaymentAppCredentials] = integrations.data?.items || [];
  const [credentialId] = albyPaymentAppCredentials?.userCredentialIds || [-1];
  const showContent = !!integrations.data && integrations.isSuccess && !!credentialId;
  const saveKeysMutation = trpc.viewer.apps.updateAppCredentials.useMutation({
    onSuccess: () => {
      showToast(t("keys_have_been_saved"), "success");
      router.push("/event-types");
    },
    onError: (error) => {
      showToast(error.message, "error");
    },
  });

  const connectWithAlby = useCallback(async () => {
    const authClient = new auth.OAuth2User({
      client_id: props.clientId,
      client_secret: props.clientSecret,
      callback: `${process.env.NEXT_PUBLIC_WEBAPP_URL}/apps/alby/setup?callback=true`,
      scopes: ["invoices:read", "account:read"],
      user_agent: "cal.com",
    });

    const weblnOAuthProvider = new webln.OauthWeblnProvider({
      auth: authClient,
    });
    await weblnOAuthProvider.enable();

    const client = new Client(authClient);
    const accountInfo = await client.accountInformation({});
    // TODO: add a way to delete the endpoint when the app is uninstalled
    const webhookEndpoint = await client.createWebhookEndpoint({
      filter_types: ["invoice.incoming.settled"],
      url: `${process.env.NEXT_PUBLIC_WEBAPP_URL}/api/integrations/alby/webhook`,
      description: "Cal.com",
    });

    saveKeysMutation.mutate({
      credentialId,
      key: albyCredentialKeysSchema.parse({
        account_id: accountInfo.identifier,
        account_email: accountInfo.email,
        account_lightning_address: accountInfo.lightning_address,
        webhook_endpoint_id: webhookEndpoint.id,
        webhook_endpoint_secret: webhookEndpoint.endpoint_secret,
      }),
    });
  }, [credentialId, props.clientId, props.clientSecret, saveKeysMutation]);

  if (integrations.isPending) {
    return <div className="absolute z-50 flex h-screen w-full items-center bg-gray-200" />;
  }

  const albyIcon = (
    <>
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
    </>
  );

  return (
    <div className="bg-default flex h-screen">
      {showContent ? (
        <div className="flex w-full items-center justify-center p-4">
          <div className="bg-default border-subtle m-auto flex max-w-[43em] flex-col items-center justify-center gap-4 overflow-auto rounded border p-4 md:p-10">
            {!props.lightningAddress ? (
              <>
                // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                <button
                  className="font-body flex h-10 w-56 items-center justify-center gap-2 rounded-md font-bold text-black shadow transition-all hover:brightness-90 active:scale-95"
                  style={{
                    background: "linear-gradient(180deg, #FFDE6E 63.72%, #F8C455 95.24%)",
                  }}
                  type="button"
                  onClick={connectWithAlby}>
                  {albyIcon}
                  // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                  $$$
                </button>
              </>
            ) : (
              <>
                {albyIcon}
                // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
              </>
            )}

            {/* TODO: remove when invoices are generated using user identifier */}
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
            <Link href="/apps/alby">
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
            </Link>
          </div>
        </div>
      ) : (
        <AppNotInstalledMessage appName="alby" />
      )}
      <Toaster position="bottom-right" />
    </div>
  );
}
