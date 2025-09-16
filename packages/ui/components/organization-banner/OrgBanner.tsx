import Image from "next/image";

import classNames from "@calcom/ui/classNames";

type Maybe<T> = T | null | undefined;

export type OrgBannerProps = {
  alt: string;
  width?: number;
  height?: number;
  imageSrc?: Maybe<string>;
  fallback?: React.ReactNode;
  className?: string;
  "data-testid"?: string;
};

export function OrgBanner(props: OrgBannerProps) {
  const { imageSrc, alt, width = 1500, height = 500 } = props;

  if (!imageSrc) {
    return <div className={classNames("bg-muted", props.className)}>{props.fallback}</div>;
  }
  return (
    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
  );
}
