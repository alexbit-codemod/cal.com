"use client";

import { getUserAvatarUrl } from "@calcom/lib/getAvatarUrl";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import { Avatar } from "@calcom/ui/components/avatar";

import { ChartCardItem } from "./ChartCard";

type UserStatsData = {
  userId: number;
  user: {
    id: number;
    username: string | null;
    name: string | null;
    email: string;
    avatarUrl: string;
  };
  emailMd5: string;
  count: number;
}[];

export const UserStatsTable = ({ data }: { data: UserStatsData }) => {
  const { t } = useLocale();

  // Filter out items without user data
  const filteredData = data && data?.length > 0 ? data?.filter((item) => !!item.user) : [];

  return (
    <div className="overflow-hidden rounded-md">
      {filteredData.length > 0 ? (
        filteredData.map((item) => (
          <ChartCardItem
            key={item.userId || `user-${Math.random()}`}
            count={Number.isInteger(item.count) ? item.count : item.count.toFixed(1)}
            className="py-3">
            <div className="flex items-center">
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
              <div className="text-default text-sm font-medium">{item.user.name}</div>
            </div>
          </ChartCardItem>
        ))
      ) : (
        <div className="flex h-60 text-center">
          <p className="m-auto text-sm font-light">{t("no_data_yet")}</p>
        </div>
      )}
    </div>
  );
};
