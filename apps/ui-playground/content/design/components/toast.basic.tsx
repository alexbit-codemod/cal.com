"use client";

import { RenderComponentWithSnippet } from "@/app/components/render";
import { useState } from "react";

import { Button } from "@calcom/ui/components/button";
import { ErrorToast, showToast, SuccessToast, WarningToast } from "@calcom/ui/components/toast";

export const BasicExample: React.FC = () => (
  <RenderComponentWithSnippet>
    <div className="space-x-2">
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$

      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$

      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
    </div>
  </RenderComponentWithSnippet>
);

export const RawToastComponents = () => {
  const [toastVisible, setToastVisible] = useState(true);
  const toastId = "123";
  const onClose = () => {
    setToastVisible(false);
  };

  const handleReplay = () => {
    setToastVisible(true);
  };

  return (
    <RenderComponentWithSnippet>
      <div className="space-y-4">
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        <div className="flex flex-col gap-2">
          <SuccessToast
            message="This is a basic toast message"
            toastVisible={toastVisible}
            toastId={toastId}
            onClose={onClose}
          />
          <ErrorToast
            message="This is an error toast message"
            toastVisible={toastVisible}
            toastId={toastId}
            onClose={onClose}
          />
          <WarningToast
            message="This is a warning toast message"
            toastVisible={toastVisible}
            toastId={toastId}
            onClose={onClose}
          />
        </div>
      </div>
    </RenderComponentWithSnippet>
  );
};
