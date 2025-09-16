import { getTranslate } from "app/_utils";

import { CTA_CONTAINER_CLASS_NAME } from "@calcom/features/data-table/lib/utils";
import Shell from "@calcom/features/shell/Shell";
import { Button } from "@calcom/ui/components/button";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const t = await getTranslate();

  return (
    <Shell
      heading={
        <div className="flex">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          <Button
            tooltip="Only teammates invited as admins can create OAuth clients while teammates invited as members have read only access"
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
