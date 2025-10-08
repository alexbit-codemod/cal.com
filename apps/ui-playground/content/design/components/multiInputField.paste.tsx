"use client";
import { useTranslations } from "next-intl";


import { RenderComponentWithSnippet } from "@/app/components/render";
import { useForm, FormProvider } from "react-hook-form";

import { MultiOptionInput } from "@calcom/ui/components/form";

type FormValues = {
  newlineOptions: Array<{ label: string; id: string }>;
  commaOptions: Array<{ label: string; id: string }>;
  customOptions: Array<{ label: string; id: string }>;
  keyValueOptions: Array<{ label: string; value: string; id: string }>;
};

export const PasteExample: React.FC = () => {
const t = useTranslations("multi-input-field-playground");

  const methods = useForm<FormValues>();

  return (
    <RenderComponentWithSnippet>
      <FormProvider {...methods}>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <h3 className="text-emphasis text-sm">{t('sections.default-delimiters.heading')}</h3>
              <p className="text-subtle text-xs">{t('sections.default-delimiters.instruction')}</p>
              <MultiOptionInput<FormValues>
                fieldArrayName="newlineOptions"
                optionPlaceholders={["Paste here..."]}
                defaultNumberOfOptions={1}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="text-emphasis text-sm">{t('sections.comma-only.heading')}</h3>
              <p className="text-subtle text-xs">{t('sections.comma-only.instruction')}</p>
              <MultiOptionInput<FormValues>
                fieldArrayName="commaOptions"
                optionPlaceholders={["Paste here..."]}
                defaultNumberOfOptions={1}
                pasteDelimiters={[","]}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="text-emphasis text-sm">{t('sections.key-value-pairs.heading')}</h3>
              <p className="text-subtle text-xs">{t('sections.key-value-pairs.instruction')}
              </p>
              <MultiOptionInput<FormValues>
                fieldArrayName="keyValueOptions"
                keyValueMode
                optionPlaceholders={["Key..."]}
                valuePlaceholders={["Value..."]}
                defaultNumberOfOptions={1}
                keyValueDelimiters={[":", "="]}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="text-emphasis text-sm">{t('sections.custom-delimiters.heading')}</h3>
              <p className="text-subtle text-xs">{t('sections.custom-delimiters.instruction')}</p>
              <MultiOptionInput<FormValues>
                fieldArrayName="customOptions"
                optionPlaceholders={["Paste here..."]}
                defaultNumberOfOptions={1}
                pasteDelimiters={[";", "|"]}
              />
            </div>
          </div>
        </div>
      </FormProvider>
    </RenderComponentWithSnippet>
  );
};
