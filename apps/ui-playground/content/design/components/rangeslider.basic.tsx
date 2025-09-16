"use client";

import { RenderComponentWithSnippet } from "@/app/components/render";
import { useState } from "react";

import { RangeSlider } from "@calcom/ui/components/form";

export const BasicExample: React.FC = () => {
  const [singleValue, setSingleValue] = useState([50]);
  const [rangeValue, setRangeValue] = useState([20, 80]);
  const [steppedValue, setSteppedValue] = useState([25]);

  return (
    <RenderComponentWithSnippet>
      <div className="space-y-6 md:w-80">
        <div className="w-full max-w-[300px] space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
            </div>
            <RangeSlider
              value={singleValue}
              onValueChange={setSingleValue}
              max={100}
              step={1}
              aria-label="Single value"
            />
          </div>
        </div>
        <div className="w-full max-w-[300px] space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
            </div>
            <RangeSlider
              value={rangeValue}
              onValueChange={setRangeValue}
              max={100}
              step={1}
              aria-label="Range"
            />
          </div>
        </div>

        <div className="w-full max-w-[300px] space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
            </div>
            <RangeSlider
              value={steppedValue}
              onValueChange={setSteppedValue}
              max={100}
              step={25}
              aria-label="Stepped"
            />
          </div>
        </div>
        <div className="w-full max-w-[300px] space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
            </div>
            <RangeSlider value={[50]} max={100} step={1} disabled aria-label="Disabled" />
          </div>
        </div>
      </div>
    </RenderComponentWithSnippet>
  );
};
