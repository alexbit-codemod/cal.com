"use client";

import { getUserAvatarUrl } from "@calcom/lib/getAvatarUrl";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import type { RouterOutputs } from "@calcom/trpc/react";
import { Avatar } from "@calcom/ui/components/avatar";
import { Button } from "@calcom/ui/components/button";
import { EmptyScreen } from "@calcom/ui/components/empty-screen";
import { Tooltip } from "@calcom/ui/components/tooltip";

type FeedbackData = RouterOutputs["viewer"]["insights"]["recentRatings"];

export const RecentFeedbackTableContent = ({ data }: { data: FeedbackData }) => {
  const { t } = useLocale();
  return (
    <div className="overflow-hidden rounded-md">
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.userId}
            className="border-subtle flex items-center justify-between border-b px-4 py-3 last:border-b-0">
            <div className="flex items-center">
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
              <div className="text-default text-sm font-medium">{item.user.name}</div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-default text-sm font-medium">{item.rating}</div>
              <Tooltip content={item.feedback}>
                <div className="text-default max-w-32 md:max-w-52 truncate text-sm font-medium">
                  {item.feedback}
                </div>
              </Tooltip>
            </div>
          </div>
        ))
      ) : (
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      )}
    </div>
  );
};
