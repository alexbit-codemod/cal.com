"use client";

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
  const methods = useForm<FormValues>();

  return (
    <RenderComponentWithSnippet>
      <FormProvider {...methods}>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
              <MultiOptionInput<FormValues>
                fieldArrayName="newlineOptions"
                optionPlaceholders={["Paste here..."]}
                defaultNumberOfOptions={1}
              />
            </div>

            <div className="flex flex-col space-y-2">
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
              <MultiOptionInput<FormValues>
                fieldArrayName="commaOptions"
                optionPlaceholders={["Paste here..."]}
                defaultNumberOfOptions={1}
                pasteDelimiters={[","]}
              />
            </div>

            <div className="flex flex-col space-y-2">
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
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
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
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
