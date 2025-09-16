import { useLocale } from "@calcom/lib/hooks/useLocale";
import { Badge } from "@calcom/ui/components/badge";
import { Button } from "@calcom/ui/components/button";
import { Switch } from "@calcom/ui/components/form";

import { TroubleshooterListItemContainer } from "./TroubleshooterListItemContainer";

function AvailabiltyItem() {
  const { t } = useLocale();
  return (
    <TroubleshooterListItemContainer
      title="Office Hours"
      subtitle="Mon-Fri; 9:00 AM - 5:00 PM"
      suffixSlot={
        <div>
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
        </div>
      }>
      <div className="flex flex-col gap-3">
        <p className="text-subtle text-sm font-medium leading-none">{t("date_overrides")}</p>
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </div>
    </TroubleshooterListItemContainer>
  );
}

export function AvailabiltySchedulesContainer() {
  const { t } = useLocale();
  return (
    <div className="flex flex-col space-y-3">
      <p className="text-sm font-medium leading-none">{t("availabilty_schedules")}</p>
      <AvailabiltyItem />
      <Button color="secondary" className="justify-center gap-2">
        {t("manage_availabilty_schedules")}
      </Button>
    </div>
  );
}
