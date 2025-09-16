import Image from "next/image";
import Link from "next/link";

import { useLocale } from "@calcom/lib/hooks/useLocale";
import { Icon } from "@calcom/ui/components/icon";
import { SkeletonText } from "@calcom/ui/components/skeleton";

import { Slider } from "./Slider";

export function AppStoreCategories({
  categories,
}: {
  categories: {
    name: string;
    count: number;
  }[];
}) {
  const { t, isLocaleReady } = useLocale();
  return (
    <div>
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$// To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
              {isLocaleReady ? (
                <h3 className="text-emphasis text-sm font-semibold capitalize">{category.name}</h3>
              ) : (
                <SkeletonText invisible />
              )}
              <p className="text-subtle pt-2 text-sm font-medium">
                {isLocaleReady ? t("number_apps", { count: category.count }) : <SkeletonText invisible />}{" "}
                <Icon name="arrow-right" className="inline-block h-4 w-4" />
              </p>
            </div>
          </Link>
        )}
      />
    </div>
  );
}
