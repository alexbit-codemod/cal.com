"use client";

import { RenderComponentWithSnippet } from "@/app/components/render";

import { Checkbox } from "@calcom/ui/components/form";

export const BasicExample: React.FC = () => (
  <RenderComponentWithSnippet>
    <div className="flex flex-wrap gap-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <Checkbox id="basic-unchecked" />
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <Checkbox id="basic-checked" defaultChecked />
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <Checkbox id="basic-disabled" disabled />
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <Checkbox id="basic-disabled-checked" disabled defaultChecked />
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </div>
    </div>
  </RenderComponentWithSnippet>
);
