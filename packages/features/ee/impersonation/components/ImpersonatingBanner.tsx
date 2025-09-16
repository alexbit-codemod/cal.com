import type { SessionContextValue } from "next-auth/react";
import { signIn } from "next-auth/react";

import { useLocale } from "@calcom/lib/hooks/useLocale";
import { TopBanner } from "@calcom/ui/components/top-banner";

export type ImpersonatingBannerProps = { data: SessionContextValue["data"] };

function ImpersonatingBanner({ data }: ImpersonatingBannerProps) {
  const { t } = useLocale();

  if (!data?.user.impersonatedBy) return null;
  const returnToId = data.user.impersonatedBy.id;

  const canReturnToSelf = data.user.impersonatedBy.role == "ADMIN" || data.user?.org?.id;

  return (
    <>
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
    </>
  );
}

export default ImpersonatingBanner;
