import type { TFunction } from "i18next";
import Link from "next/link";

import ServerTrans from "@calcom/lib/components/ServerTrans";

export default function WeightDescription({ t }: { t: TFunction }) {
  return (
    <ServerTrans
      t={t}
      i18nKey="weights_description"
      components={[
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$,
      ]}
    />
  );
}
