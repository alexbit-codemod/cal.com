import { useRouter } from "next/navigation";

import { useIsPlatform } from "@calcom/atoms/hooks/useIsPlatform";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import type { RouterOutputs } from "@calcom/trpc/react";
import { trpc } from "@calcom/trpc/react";
import { showToast } from "@calcom/ui/components/toast";
import { TopBanner } from "@calcom/ui/components/top-banner";

export type OrgUpgradeBannerProps = {
  data: RouterOutputs["viewer"]["me"]["getUserTopBanners"]["orgUpgradeBanner"];
};

export function OrgUpgradeBanner({ data }: OrgUpgradeBannerProps) {
  const { t } = useLocale();
  const router = useRouter();
  const isPlatform = useIsPlatform();

  const publishOrgMutation = trpc.viewer.organizations.publish.useMutation({
    onSuccess(data) {
      router.push(data.url);
    },
    onError: (error) => {
      showToast(error.message, "error");
    },
  });

  if (!data) return null;
  const [membership] = data;
  if (!membership) return null;

  // TODO: later figure out how to not show this banner on platform since platform is different to orgs (it just uses the same code)
  if (isPlatform) return null;

  return (
    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
  );
}
