"use client";

import dayjs from "@calcom/dayjs";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import { detectBrowserTimeFormat } from "@calcom/lib/timeFormat";
import type { inferSSRProps } from "@calcom/types/inferSSRProps";
import { Icon } from "@calcom/ui/components/icon";
import { Button } from "@calcom/ui/components/button";
import { EmptyScreen } from "@calcom/ui/components/empty-screen";

import type { getServerSideProps } from "@lib/video/meeting-not-started/[uid]/getServerSideProps";

export type PageProps = inferSSRProps<typeof getServerSideProps>;

export default function MeetingNotStarted(props: PageProps) {
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
