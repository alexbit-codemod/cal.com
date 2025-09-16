"use client";

import { RenderComponentWithSnippet } from "@/app/components/render";

import { CheckboxField } from "@calcom/ui/components/form";

export const LabelPositionExample: React.FC = () => (
  <RenderComponentWithSnippet>
    <div className="space-y-4">
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      <div className="sm:min-w-[400px]">
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </div>
    </div>
  </RenderComponentWithSnippet>
);
