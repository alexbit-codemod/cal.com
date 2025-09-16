import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { ErrorCode } from "@calcom/lib/errorCodes";
import { showToast } from "@calcom/ui/components/toast";

import { useSubscribeTeamToStripe } from "@lib/hooks/settings/platform/billing/useSubscribeTeamToStripe";
import { useUpgradeTeamSubscriptionInStripe } from "@lib/hooks/settings/platform/billing/useUpgradeTeamSubscriptionInStripe";

import { platformPlans } from "@components/settings/platform/platformUtils";
import { PlatformBillingCard } from "@components/settings/platform/pricing/billing-card";

type PlatformPricingProps = { teamId?: number | null; teamPlan?: string; heading?: ReactNode };

export const PlatformPricing = ({ teamId, teamPlan, heading }: PlatformPricingProps) => {
  const pathname = usePathname();
  const currentPage = pathname?.split("/").pop();
  const router = useRouter();
  const { mutateAsync: createTeamSubscription, isPending: isCreateTeamSubscriptionLoading } =
    useSubscribeTeamToStripe({
      onSuccess: (redirectUrl: string) => {
        router.push(redirectUrl);
      },
      onError: () => {
        showToast(ErrorCode.UnableToSubscribeToThePlatform, "error");
      },
      teamId,
    });

  const { mutateAsync: upgradeTeamSubscription, isPending: isUpgradeTeamSubscriptionLoading } =
    useUpgradeTeamSubscriptionInStripe({
      onSuccess: (redirectUrl: string) => {
        router.push(redirectUrl);
      },
      onError: () => {
        showToast(ErrorCode.UnableToSubscribeToThePlatform, "error");
      },
      teamId,
    });

  const handleStripeSubscription = async (plan: string) => {
    if (plan === "Enterprise") {
      return router.push("https://go.cal.com/quote");
    }

    if (currentPage === "platform") {
      createTeamSubscription({ plan: plan.toLocaleUpperCase() });
    } else {
      upgradeTeamSubscription({ plan: plan.toLocaleUpperCase() });
    }
  };

  if (!teamId) {
    return // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$;
  }

  return (
    <div className="flex h-auto flex-col items-center justify-center px-5 py-10 md:px-10 lg:h-[100%]">
      {heading}
      <div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {platformPlans.map((plan) => {
            return (
              <div key={plan.plan} className="mx-10 my-4 md:mx-0 md:my-0">
                // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
