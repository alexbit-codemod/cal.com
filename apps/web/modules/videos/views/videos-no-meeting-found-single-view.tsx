"use client";

import { useLocale } from "@calcom/lib/hooks/useLocale";
import { Button } from "@calcom/ui/components/button";
import { EmptyScreen } from "@calcom/ui/components/empty-screen";

export default function NoMeetingFound() {
  const { t } = useLocale();

  return (
    <>
      <main className="mx-auto my-24 max-w-3xl">
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </main>
    </>
  );
}
