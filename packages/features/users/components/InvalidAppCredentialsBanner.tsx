import { useRouter } from "next/navigation";

import { useLocale } from "@calcom/lib/hooks/useLocale";
import { type RouterOutputs } from "@calcom/trpc";
import { TopBanner } from "@calcom/ui/components/top-banner";

export type InvalidAppCredentialBannersProps = {
  data: RouterOutputs["viewer"]["me"]["getUserTopBanners"]["invalidAppCredentialBanners"];
};

export function InvalidAppCredentialBanners({ data }: InvalidAppCredentialBannersProps) {
  if (data.length === 0) {
    return null; // No need to show banner if the array is empty
  }

  return (
    <div>
      {data.map((app) => (
        <InvalidAppCredentialBanner key={app.slug} name={app.name} slug={app.slug} />
      ))}
    </div>
  );
}

export type InvalidAppCredentialBannerProps = {
  name: string;
  slug: string;
};

export function InvalidAppCredentialBanner({ name, slug }: InvalidAppCredentialBannerProps) {
  const { t } = useLocale();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/apps/${slug}`);
  };

  return (
    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
  );
}
