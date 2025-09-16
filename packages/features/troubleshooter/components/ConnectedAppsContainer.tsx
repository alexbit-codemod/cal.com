import { useLocale } from "@calcom/lib/hooks/useLocale";
import { Badge } from "@calcom/ui/components/badge";

import { TroubleshooterListItemHeader } from "./TroubleshooterListItemContainer";

function ConnectedAppsItem() {
  return (
    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$// To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
        </div>
      }
    />
  );
}

export function ConnectedAppsContainer() {
  const { t } = useLocale();
  return (
    <div className="flex flex-col space-y-3">
      <p className="text-sm font-medium leading-none">{t("other_apps")}</p>
      <div className="[&>*:first-child]:rounded-t-md  [&>*:last-child]:rounded-b-md [&>*:last-child]:border-b">
        <ConnectedAppsItem />
        <ConnectedAppsItem />
      </div>
    </div>
  );
}
