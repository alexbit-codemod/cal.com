"use client";

import Link from "next/link";

import { IS_PRODUCTION } from "@calcom/lib/constants";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import { markdownToSafeHTML } from "@calcom/lib/markdownToSafeHTML";
import { showToast } from "@calcom/ui/components/toast";

import type { AppDataProps } from "@lib/apps/[slug]/getStaticProps";
import useRouterQuery from "@lib/hooks/useRouterQuery";

import App from "@components/apps/App";

function SingleAppPage(props: AppDataProps) {
  const { error, setQuery: setError } = useRouterQuery("error");
  const { t } = useLocale();
  if (error === "account_already_linked") {
    showToast(t(error), "error", { id: error });
    setError(undefined);
  }
  // If it's not production environment, it would be a better idea to inform that the App is disabled.
  if (props.isAppDisabled) {
    if (!IS_PRODUCTION) {
      // TODO: Improve disabled App UI. This is just a placeholder.
      return (
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$// To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
        </div>
      );
    }

    // Disabled App should give 404 any ways in production.
    return null;
  }

  const { source, data } = props;
  return (
    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
  );
}

export default SingleAppPage;
