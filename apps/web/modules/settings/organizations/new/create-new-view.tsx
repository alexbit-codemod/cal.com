"use client";

import { CreateANewOrganizationForm } from "@calcom/features/ee/organizations/components";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import { Alert } from "@calcom/ui/components/alert";
import { WizardLayout } from "@calcom/ui/components/layout";
import { useGetUserAttributes } from "@calcom/web/components/settings/platform/hooks/useGetUserAttributes";

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const { t } = useLocale();
  const { isPlatformUser } = useGetUserAttributes();

  if (isPlatformUser) {
    return (
      <div className="flex h-full min-h-screen items-center justify-center">
        <div className="max-w-lg">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
        </div>
      </div>
    );
  }

  return (
    <WizardLayout currentStep={1} maxSteps={5}>
      {children}
    </WizardLayout>
  );
};

export default CreateANewOrganizationForm;
