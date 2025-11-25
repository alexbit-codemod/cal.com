"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";
import { useForm, FormProvider } from "react-hook-form";

import { MultiOptionInput } from "@calcom/ui/components/form";

type FormValues = {
  defaultOptions: Array<{ label: string; id: string }>;
  disabledOptions: Array<{ label: string; id: string }>;
  minOptions: Array<{ label: string; id: string }>;
};

export const StatesExample: React.FC = () => {
const t = useTranslations("multi-input-field-states");

  const methods = useForm<FormValues>();

  return (
    <RenderComponentWithSnippet>
      <FormProvider {...methods}>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <h3 className="text-emphasis text-sm">{t('states.default')}</h3>
              <MultiOptionInput<FormValues>
                fieldArrayName="defaultOptions"
                optionPlaceholders={[t('placeholders.first-option'), t('placeholders.second-option'), t('placeholders.third-option')]}
                defaultNumberOfOptions={3}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="text-emphasis text-sm">{t('states.disabled')}</h3>
              <MultiOptionInput<FormValues>
                fieldArrayName="disabledOptions"
                optionPlaceholders={[t('placeholders.disabled-option-1'), t('placeholders.disabled-option-2')]}
                defaultNumberOfOptions={2}
                disabled
              />
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="text-emphasis text-sm">{t('states.minimum-options')}</h3>
              <MultiOptionInput<FormValues>
                fieldArrayName="minOptions"
                optionPlaceholders={[t('placeholders.required-option-1'), t('placeholders.required-option-2'), t('placeholders.optional-option')]}
                defaultNumberOfOptions={3}
                minOptions={2}
              />
            </div>
          </div>
        </div>
      </FormProvider>
    </RenderComponentWithSnippet>
  );
};
