"use client";

import type { ChangeEventHandler } from "react";
import { useState } from "react";

import { AllApps } from "@calcom/features/apps/components/AllApps";
import { AppStoreCategories } from "@calcom/features/apps/components/Categories";
import { PopularAppsSlider } from "@calcom/features/apps/components/PopularAppsSlider";
import { RecentAppsSlider } from "@calcom/features/apps/components/RecentAppsSlider";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import type { AppCategories } from "@calcom/prisma/enums";
import type { AppFrontendPayload } from "@calcom/types/App";
import classNames from "@calcom/ui/classNames";
import { TextField } from "@calcom/ui/components/form";
import { Icon } from "@calcom/ui/components/icon";
import type { HorizontalTabItemProps } from "@calcom/ui/components/navigation";
import { HorizontalTabs } from "@calcom/ui/components/navigation";

import AppsLayout from "@components/apps/layouts/AppsLayout";

const tabs: HorizontalTabItemProps[] = [
  {
    name: "app_store",
    href: "/apps",
  },
  {
    name: "installed_apps",
    href: "/apps/installed",
  },
];

function AppsSearch({
  onChange,
  className,
}: {
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
}) {
  const { t } = useLocale();
  return (
    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
  );
}

export type PageProps = {
  categories: {
    name: AppCategories;
    count: number;
  }[];
  appStore: AppFrontendPayload[];
  userAdminTeams: number[];
  isAdmin: boolean;
};

export default function Apps({ isAdmin, categories, appStore, userAdminTeams }: PageProps) {
  const { t } = useLocale();
  const [searchText, setSearchText] = useState<string | undefined>(undefined);

  return (
    <AppsLayout
      isPublic
      isAdmin={isAdmin}
      heading={t("app_store")}
      subtitle={t("app_store_description")}
      actions={(className) => (
        <div className="flex w-full flex-col pt-4 md:flex-row md:justify-between md:pt-0 lg:w-auto">
          <div className="ltr:mr-2 rtl:ml-2 lg:hidden">
            <HorizontalTabs tabs={tabs} />
          </div>
          <div>
            <AppsSearch className={className} onChange={(e) => setSearchText(e.target.value)} />
          </div>
        </div>
      )}
      headerClassName="sm:hidden lg:block hidden"
      emptyStore={!appStore.length}>
      <div className="flex flex-col gap-y-8">
        {!searchText && (
          <>
            <AppStoreCategories categories={categories} />
            <PopularAppsSlider items={appStore} />
            <RecentAppsSlider items={appStore} />
          </>
        )}
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </div>
    </AppsLayout>
  );
}
