"use client";

import { RenderComponentWithSnippet } from "@/app/components/render";
import { useState } from "react";

import { Switch } from "@calcom/ui/components/form";
import { Section } from "@calcom/ui/components/section";

export const BasicExample = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <RenderComponentWithSnippet>
      <Section>
        <Section.Header
          title="Basic Section"
          description="This is a basic section with a title and description">
          <Switch size="sm" checked={isOpen} onCheckedChange={setIsOpen} />
        </Section.Header>
        {isOpen && (
          <Section.Content>
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
          </Section.Content>
        )}
      </Section>
    </RenderComponentWithSnippet>
  );
};

export const BasicExampleSnippet = `
"use client";

import { useState } from "react";
import { Section } from "@calcom/ui/components/section";
import { Switch } from "@calcom/ui/components/form";

const BasicSection = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <Section>
      <Section.Header
        title="Basic Section"
        description="This is a basic section with a title and description"
      >
        <Section.HeaderRight>
          <Switch size="sm" checked={isOpen} onCheckedChange={setIsOpen} />
        </Section.HeaderRight>
      </Section.Header>
      {isOpen && (
        <Section.Content>
          <p>This is the main content of the section.</p>
        </Section.Content>
      )}
    </Section>
  );
};
`;
