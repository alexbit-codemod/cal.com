"use client";

import { RenderComponentWithSnippet } from "@/app/components/render";
import { Row } from "@/app/components/row";

import { Button } from "@calcom/ui/components/button";

export const OnClickExample: React.FC = () => (
  <RenderComponentWithSnippet>
    <Row>
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
    </Row>
  </RenderComponentWithSnippet>
);
