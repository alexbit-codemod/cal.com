"use client";

import { RenderComponentWithSnippet } from "@/app/components/render";
import { useState } from "react";

import { RangeSliderPopover } from "@calcom/ui/components/form";

export const PopoverExample: React.FC = () => {
  const [defaultRange, setDefaultRange] = useState([15, 30]);
  const [customRange, setCustomRange] = useState([5, 20]);
  const [largeRange, setLargeRange] = useState([0, 100]);

  return (
    <RenderComponentWithSnippet>
      <div className="space-y-6 md:w-80">
        <div className="space-y-2">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
        </div>

        <div className="space-y-2">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
        </div>

        <div className="space-y-2">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
        </div>

        <div className="mt-4">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          <pre className="text-emphasis bg-subtle mt-2 rounded-md p-4 text-sm">
            {JSON.stringify(
              {
                defaultRange,
                customRange,
                largeRange,
              },
              null,
              2
            )}
          </pre>
        </div>
      </div>
    </RenderComponentWithSnippet>
  );
};
