"use client";

import { RenderComponentWithSnippet } from "@/app/components/render";
import { useForm, FormProvider } from "react-hook-form";

import { MultiOptionInput } from "@calcom/ui/components/form";

type FormValues = {
  defaultOptions: Array<{ label: string; id: string }>;
  disabledOptions: Array<{ label: string; id: string }>;
  minOptions: Array<{ label: string; id: string }>;
};

export const StatesExample: React.FC = () => {
  const methods = useForm<FormValues>();

  return (
    <RenderComponentWithSnippet>
      <FormProvider {...methods}>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
              <MultiOptionInput<FormValues>
                fieldArrayName="defaultOptions"
                optionPlaceholders={["First option", "Second option", "Third option"]}
                defaultNumberOfOptions={3}
              />
            </div>

            <div className="flex flex-col space-y-2">
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
              <MultiOptionInput<FormValues>
                fieldArrayName="disabledOptions"
                optionPlaceholders={["Disabled option 1", "Disabled option 2"]}
                defaultNumberOfOptions={2}
                disabled
              />
            </div>

            <div className="flex flex-col space-y-2">
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
              <MultiOptionInput<FormValues>
                fieldArrayName="minOptions"
                optionPlaceholders={["Required option 1", "Required option 2", "Optional option"]}
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
