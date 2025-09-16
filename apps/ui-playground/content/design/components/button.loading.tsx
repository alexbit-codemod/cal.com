"use client";

import { RenderComponentWithSnippet } from "@/app/components/render";
import { Row } from "@/app/components/row";

import { Button } from "@calcom/ui/components/button";

const colors = ["primary", "secondary", "minimal", "destructive"] as const;

export const LoadingExample: React.FC = () => {
  return (
    <RenderComponentWithSnippet>
      <div className="space-y-8">
        <div>
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          <Row>
            {colors.map((color) => (
              <div key={color} className="flex flex-col items-center gap-2">
                <Button color={color} loading>
                  {color}
                </Button>
                // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
              </div>
            ))}
          </Row>
        </div>

        <div>
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          <Row>
            {colors.map((color) => (
              <div key={color} className="flex flex-col items-center gap-2">
                <Button color={color} loading StartIcon="calendar">
                  {color}
                </Button>
                // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
              </div>
            ))}
          </Row>
        </div>
      </div>
    </RenderComponentWithSnippet>
  );
};
