"use client";

import { useState } from "react";

import { TestForm } from "@calcom/app-store/routing-forms/components/_components/TestForm";
import type { RoutingForm } from "@calcom/app-store/routing-forms/types/types";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import { trpc } from "@calcom/trpc";
import { Label } from "@calcom/ui/components/form";
import { Select } from "@calcom/ui/components/form";

export default function InsightsVirtualQueuesPage() {
  const { t } = useLocale();
  const { data: routingForms, isLoading: isRoutingFormsLoading } =
    trpc.viewer.insights.getUserRelevantTeamRoutingForms.useQuery();

  const [selectedForm, setSelectedForm] = useState<RoutingForm | undefined>(
    routingForms && routingForms.length > 0 ? routingForms[0] : undefined
  );

  if (routingForms && !selectedForm && routingForms.length > 0) {
    setSelectedForm(routingForms[0]);
  }

  return (
    <>
      <Label>{t("routing_form")}</Label>
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      <div className="mt-10">
        {selectedForm ? (
          <TestForm form={selectedForm} supportsTeamMembersMatchingLogic={true} showRRData={true} />
        ) : (
          <></>
        )}
      </div>
    </>
  );

  return <></>;
}
