"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { EmptyScreen } from "@calcom/ui/components/empty-screen";

export const BorderExample: React.FC = () =>  {
const t = useTranslations("empty-screen-border-demo");

return (
  <RenderComponentWithSnippet>
    <div className="space-y-8">
      {/* Without Border */}
      <div>
        <h4 className="text-emphasis mb-4 text-sm font-medium">{t('sections.without-border')}</h4>
        <EmptyScreen
          Icon="grid-3x3"
          headline="No apps installed"
          description={t('descriptions.browse-apps-marketplace')}
          buttonText={t('buttons.browse-apps')}
          buttonOnClick={() => alert("Browse Apps clicked")}
          border={false}
        />
      </div>

      {/* With Solid Border */}
      <div>
        <h4 className="text-emphasis mb-4 text-sm font-medium">{t('sections.with-solid-border')}</h4>
        <EmptyScreen
          Icon="mail"
          headline="No messages"
          description={t('descriptions.inbox-empty')}
          buttonText={t('buttons.compose')}
          buttonOnClick={() => alert("Compose clicked")}
          dashedBorder={false}
        />
      </div>
    </div>
  </RenderComponentWithSnippet>
)
};
