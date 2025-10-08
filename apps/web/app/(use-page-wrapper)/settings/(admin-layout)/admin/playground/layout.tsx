"use client";
import { useTranslations } from "next-intl";


import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PlaygroundLayout({ children }: { children: React.ReactNode }) {
const t = useTranslations("admin-playground-layout");

  const pathname = usePathname();

  const isPlaygroundRoot = pathname === "/settings/admin/playground";

  return isPlaygroundRoot ? (
    children
  ) : (
    <div>
      <Link href="/settings/admin/playground" className="text-sm underline">{t('navigation.back-to-playground')}</Link>
      <div className="h-8" />
      <div>{children}</div>
    </div>
  );
}
