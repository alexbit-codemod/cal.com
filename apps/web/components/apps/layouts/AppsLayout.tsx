import { useRouter } from "next/navigation";
import type { ComponentProps } from "react";
import React from "react";

import Shell from "@calcom/features/shell/Shell";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import { EmptyScreen } from "@calcom/ui/components/empty-screen";

type AppsLayoutProps = {
  children: React.ReactNode;
  isAdmin: boolean;
  actions?: (className?: string) => JSX.Element;
  emptyStore?: boolean;
} & Omit<ComponentProps<typeof Shell>, "actions">;

export default function AppsLayout({ children, actions, emptyStore, isAdmin, ...rest }: AppsLayoutProps) {
  const { t } = useLocale();
  const router = useRouter();

  return (
    <Shell {...rest} actions={actions?.("block")}>
      <div className="flex flex-col xl:flex-row">
        <main className="w-full">
          {emptyStore ? (
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
          ) : (
            <>{children}</>
          )}
        </main>
      </div>
    </Shell>
  );
}
