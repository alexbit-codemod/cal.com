"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { CheckboxField } from "@calcom/ui/components/form";

export const DescriptionExample: React.FC = () =>  {
const t = useTranslations("checkbox-description-demo");

return (
  <RenderComponentWithSnippet>
    <div className="space-y-4">
      <CheckboxField description={t('examples.regular-description')} id="desc-normal" />
      <CheckboxField description={t('examples.description-as-label')} descriptionAsLabel id="desc-as-label" />
      <CheckboxField id="desc-long" label={t('examples.with-label')} description={t('examples.with-description')} />
    </div>
  </RenderComponentWithSnippet>
)
};
