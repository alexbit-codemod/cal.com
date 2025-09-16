import React from "react";
import { useFormContext } from "react-hook-form";

import { useLocale } from "@calcom/lib/hooks/useLocale";
import { Label, TextField } from "@calcom/ui/components/form";

export default function TwoFactor({ center = true }) {
  const { t } = useLocale();
  const methods = useFormContext();

  return (
    <div className={center ? "mx-auto !mt-0 max-w-sm" : "!mt-0 max-w-sm"}>
      <Label className="mt-4">{t("backup_code")}</Label>

      <p className="text-subtle mb-4 text-sm">{t("backup_code_instructions")}</p>

      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
    </div>
  );
}
