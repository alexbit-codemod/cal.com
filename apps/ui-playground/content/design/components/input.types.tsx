"use client";

import { RenderComponentWithSnippet } from "@/app/components/render";

import { Input } from "@calcom/ui/components/form";

const types = ["text", "email", "password", "number", "tel", "url", "search"] as const;
const sizes = ["sm", "md"] as const;

export const TypesExample: React.FC = () => (
  <RenderComponentWithSnippet>
    <div className="space-y-6">
      <div className="space-y-4">
        {types.map((type) => (
          <div key={type} className="flex flex-col space-y-2">
            <h3 className="text-emphasis text-sm capitalize">{type}</h3>
            <div className="flex flex-wrap items-center gap-4">
              {sizes.map((size) => (
                <div key={size} className="flex flex-col items-center gap-2">
                  // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                  $$$
                  <span className="text-subtle text-xs">{size}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </RenderComponentWithSnippet>
);
