import { getTranslations } from "next-intl/server";
import { getTranslate } from "app/_utils";

import { CTA_CONTAINER_CLASS_NAME } from "@calcom/features/data-table/lib/utils";
import Shell from "@calcom/features/shell/Shell";
import { Button } from "@calcom/ui/components/button";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const tPlatform = await getTranslations("platform-members-layout");
  const t = await getTranslate();

  return (
    <Shell
      heading={
        <div className="flex">
          <h1>{tPlatform('headings.member-management')}</h1>
          <Button
            tooltip={tPlatform('tooltips.admin-member-access')}
            tooltipSide="right"
            className="mx-2 hover:bg-transparent"
            color="minimal"
            variant="icon"
            StartIcon="info"
          />
        </div>
      }
      title={t("platform_members")}
      subtitle={t("platform_members_description")}
      withoutMain={false}
      isPlatformUser={true}
      actions={<div className={CTA_CONTAINER_CLASS_NAME} />}>
      {children}
    </Shell>
  );
}
