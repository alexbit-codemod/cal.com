import Link from "next/link";

import { useLocale } from "@calcom/lib/hooks/useLocale";
import { type RouterOutputs } from "@calcom/trpc";
import { TopBanner } from "@calcom/ui/components/top-banner";

export type CalendarCredentialBannerProps = {
  data: RouterOutputs["viewer"]["me"]["getUserTopBanners"]["calendarCredentialBanner"];
};

function CalendarCredentialBanner({ data }: CalendarCredentialBannerProps) {
  const { t } = useLocale();

  if (!data) return null;

  return (
    <>
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
    </>
  );
}

export default CalendarCredentialBanner;
