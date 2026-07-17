"use client";

import { WizardLayout } from "@calcom/ui/components/layout/WizardLayout";
import { AdminOnboardingHandover } from "~/ee/organizations/components/AdminOnboardingHandover";

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <WizardLayout currentStep={2} maxSteps={2}>
      {children}
    </WizardLayout>
  );
};

export default AdminOnboardingHandover;
