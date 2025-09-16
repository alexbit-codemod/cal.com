"use client";

import { ChartCard } from "@calcom/features/insights/components/ChartCard";
import {
  RoutingFunnelContent,
  legend,
} from "@calcom/features/insights/components/routing/RoutingFunnelContent";
import { useLocale } from "@calcom/lib/hooks/useLocale";

// Random sample data for playground testing
const sampleRoutingFunnelData = [
  {
    name: "Week 1",
    formattedDateFull: "Week 1",
    totalSubmissions: 150,
    successfulRoutings: 120,
    acceptedBookings: 95,
  },
  {
    name: "Week 2",
    formattedDateFull: "Week 2",
    totalSubmissions: 180,
    successfulRoutings: 145,
    acceptedBookings: 110,
  },
  {
    name: "Week 3",
    formattedDateFull: "Week 3",
    totalSubmissions: 200,
    successfulRoutings: 160,
    acceptedBookings: 125,
  },
  {
    name: "Week 4",
    formattedDateFull: "Week 4",
    totalSubmissions: 170,
    successfulRoutings: 135,
    acceptedBookings: 105,
  },
  {
    name: "Week 5",
    formattedDateFull: "Week 5",
    totalSubmissions: 220,
    successfulRoutings: 175,
    acceptedBookings: 140,
  },
  {
    name: "Week 6",
    formattedDateFull: "Week 6",
    totalSubmissions: 190,
    successfulRoutings: 155,
    acceptedBookings: 120,
  },
];

export default function RoutingFunnelPlayground() {
  const { t } = useLocale();
  return (
    <div className="space-y-6 p-6">
      <div className="mb-6">
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </div>

      <div className="max-w-4xl">
        <ChartCard
          title={t("routing_funnel")}
          subtitle="Hello world!"
          legend={legend}
          legendSize="sm"
          cta={{
            label: "Show all",
            onClick: () => {
              alert("hello!");
            },
          }}>
          <RoutingFunnelContent data={sampleRoutingFunnelData} />
        </ChartCard>
      </div>

      <div className="mt-8 rounded-lg bg-gray-50 p-4">
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        <pre className="overflow-auto text-sm text-gray-700">
          {JSON.stringify(sampleRoutingFunnelData, null, 2)}
        </pre>
      </div>
    </div>
  );
}
