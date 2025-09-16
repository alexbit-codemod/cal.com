import type { SessionContextValue } from "next-auth/react";
import Link from "next/link";

import { useLocale } from "@calcom/lib/hooks/useLocale";
import { TopBanner } from "@calcom/ui/components/top-banner";

export type AdminPasswordBannerProps = { data: SessionContextValue["data"] };

function AdminPasswordBanner({ data }: AdminPasswordBannerProps) {
  const { t } = useLocale();

  if (data?.user.role !== "INACTIVE_ADMIN") return null;

  return (
    <>
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
    </>
  );
}

export default AdminPasswordBanner;
