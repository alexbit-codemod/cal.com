"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";

import { Input } from "@calcom/ui/components/form";

const sizes = ["sm", "md"] as const;

export const ValuesExample: React.FC = () => {
  const t = useTranslations("input-values-demo");
  
  return (
    <RenderComponentWithSnippet>
      <div className="space-y-6">
        <div className="space-y-4">
          {sizes.map((size) => (
            <div key={size} className="flex flex-col space-y-2">
              <h3 className="text-emphasis text-sm">{t('headings.size-label', { size: size })}</h3>
              <div className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <h4 className="text-subtle text-xs">{t('sections.default-value')}</h4>
                  <Input type="text" defaultValue={t('examples.default-text-value')} size={size} />
                </div>
                <div className="flex flex-col space-y-2">
                  <h4 className="text-subtle text-xs">{t('sections.placeholder')}</h4>
                  <Input type="text" placeholder={t('examples.placeholder-text')} size={size} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RenderComponentWithSnippet>
  );
};
