"use client";

import { RenderComponentWithSnippet } from "@/app/components/render";

import { Avatar } from "@calcom/ui/components/avatar";

const sizes = ["xs", "xsm", "sm", "md", "mdLg", "lg", "xl"] as const;
const sampleImage = "https://cal.com/stakeholder/peer.jpg";

export const SizesExample: React.FC = () => (
  <RenderComponentWithSnippet>
    <div className="flex items-center gap-4">
      {sizes.map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          <span className="text-subtle text-xs">{size}</span>
        </div>
      ))}
    </div>
    <div className="mt-2 flex items-center gap-4">
      {sizes.map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          <span className="text-subtle text-xs">{size}</span>
        </div>
      ))}
    </div>
  </RenderComponentWithSnippet>
);
