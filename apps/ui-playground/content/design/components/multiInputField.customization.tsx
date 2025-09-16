"use client";

import { RenderComponentWithSnippet } from "@/app/components/render";
import { useForm, FormProvider } from "react-hook-form";

import { MultiOptionInput } from "@calcom/ui/components/form";

type FormValues = {
  customPlaceholders: Array<{ label: string; id: string }>;
  noMoveButtons: Array<{ label: string; id: string }>;
  customLabel: Array<{ label: string; id: string }>;
  keyValuePairs: Array<{ label: string; value: string; id: string }>;
};

export const CustomizationExample: React.FC = () => {
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
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
            </div>

            <div className="flex flex-col space-y-2">
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
              <MultiOptionInput<FormValues>
                fieldArrayName="customPlaceholders"
                optionPlaceholders={["Enter your name", "Enter your email", "Enter your phone"]}
                defaultNumberOfOptions={3}
              />
            </div>

            <div className="flex flex-col space-y-2">
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
              <MultiOptionInput<FormValues>
                fieldArrayName="noMoveButtons"
                optionPlaceholders={["Static option 1", "Static option 2"]}
                defaultNumberOfOptions={2}
                showMoveButtons={false}
              />
            </div>

            <div className="flex flex-col space-y-2">
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
            </div>
          </div>
        </div>
      </FormProvider>
    </RenderComponentWithSnippet>
  );
};
