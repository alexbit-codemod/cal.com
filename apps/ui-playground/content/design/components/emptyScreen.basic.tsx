"use client";

import { RenderComponentWithSnippet } from "@/app/components/render";

import { EmptyScreen } from "@calcom/ui/components/empty-screen";

export const BasicExample: React.FC = () => (
  <RenderComponentWithSnippet>
    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
  </RenderComponentWithSnippet>
);
