"use client";

import { RenderComponentWithSnippet } from "@/app/components/render";
import { useForm } from "react-hook-form";

import { Button } from "@calcom/ui/components/button";
import { InputField } from "@calcom/ui/components/form";
import { Icon } from "@calcom/ui/components/icon";

type FormValues = {
  website: string;
  githubUsername: string;
  customDomain: string;
};

export const AddOnsExample: React.FC = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      website: "",
      githubUsername: "",
      customDomain: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
  };

  return (
    <RenderComponentWithSnippet>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        <div className="flex justify-end space-x-2">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
        </div>
      </form>
    </RenderComponentWithSnippet>
  );
};
