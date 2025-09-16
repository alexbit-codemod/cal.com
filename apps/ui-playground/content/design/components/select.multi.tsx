"use client";

import { RenderComponentWithSnippet } from "@/app/components/render";
import { useState } from "react";

import { Select } from "@calcom/ui/components/form";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "mint", label: "Mint" },
  { value: "coffee", label: "Coffee" },
];

export const MultiExample: React.FC = () => {
  const [multiValue, setMultiValue] = useState<{ value: string; label: string }[]>([]);

  return (
    <RenderComponentWithSnippet>
      <div className="space-y-4 md:w-80">
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </div>
    </RenderComponentWithSnippet>
  );
};
