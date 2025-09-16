"use client";

import { RenderComponentWithSnippet } from "@/app/components/render";
import { useState } from "react";

import { Switch } from "@calcom/ui/components/form";

export const BasicExample = () => {
  const [checked, setChecked] = useState(false);

  return (
    <RenderComponentWithSnippet>
      <div className="flex flex-col space-y-4">
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </div>
    </RenderComponentWithSnippet>
  );
};

export const LabelPositionExample = () => {
  const [checked, setChecked] = useState(false);
  return (
    <RenderComponentWithSnippet>
      <div className="flex flex-col space-y-4">
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </div>
    </RenderComponentWithSnippet>
  );
};

export const StatesExample = () => {
  return (
    <RenderComponentWithSnippet>
      <div className="flex flex-col space-y-4">
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </div>
    </RenderComponentWithSnippet>
  );
};

export const ControlledExample = () => {
  const [checked, setChecked] = useState(false);

  return (
    <RenderComponentWithSnippet>
      <div className="flex flex-col space-y-4">
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </div>
    </RenderComponentWithSnippet>
  );
};

export const WithPadding = () => {
  const [checked, setChecked] = useState(false);
  return (
    <RenderComponentWithSnippet>
      <div className="flex flex-col space-y-4">
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </div>
    </RenderComponentWithSnippet>
  );
};

export const SwitchSizes = () => {
  const [checked, setChecked] = useState(false);

  return (
    <RenderComponentWithSnippet>
      <div className="flex flex-col space-y-4">
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </div>
    </RenderComponentWithSnippet>
  );
};
