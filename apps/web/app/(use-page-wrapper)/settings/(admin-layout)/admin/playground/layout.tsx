"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PlaygroundLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isPlaygroundRoot = pathname === "/settings/admin/playground";

  return isPlaygroundRoot ? (
    children
  ) : (
    <div>
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      <div className="h-8" />
      <div>{children}</div>
    </div>
  );
}
