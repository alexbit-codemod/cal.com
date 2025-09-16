import { useEffect, useState, useMemo } from "react";

import { Select } from "@calcom/ui/components/form";
import { Button } from "@calcom/ui/components/button";
import { showToast } from "@calcom/ui/components/toast";

export interface IAppConfigurationProps {
  credentialIds: number[];
}

const saveSettings = async ({
  parameter,
  sleepValue,
}: {
  parameter: { label: string; value: string };
  sleepValue: number;
}) => {
  try {
    const response = await fetch("/api/integrations/vital/save", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sleepValue,
        parameter: parameter.value,
      }),
    });
    if (response.ok && response.status === 200) {
      return true;
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

const AppConfiguration = (props: IAppConfigurationProps) => {
  const [credentialId] = props.credentialIds;

  const options = useMemo(
    () => [
      { label: "Total (total = rem + light sleep + deep sleep)", value: "total" },
      { label: "Duration (duration = bedtime end - bedtime start)", value: "duration" },
    ],
    []
  );

  const [selectedParam, setSelectedParam] = useState<{ label: string; value: string }>(options[0]);
  const [touchedForm, setTouchedForm] = useState(false);
  const defaultSleepValue = 0;
  const [sleepValue, setSleepValue] = useState(defaultSleepValue);
  const [connected, setConnected] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  useEffect(() => {
    async function getVitalsConfig() {
      const response = await fetch("/api/integrations/vital/settings", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        const vitalSettings: {
          connected: boolean;
          parameter: string;
          sleepValue: number;
        } = await response.json();

        if (vitalSettings && vitalSettings.connected) {
          setConnected(vitalSettings.connected);
        }
        if (vitalSettings.sleepValue && vitalSettings.parameter) {
          const selectedParam = options.find(
            (item: { value: string }) => item.value === vitalSettings.parameter
          );
          if (selectedParam) {
            setSelectedParam(selectedParam);
          }
          setSleepValue(vitalSettings.sleepValue);
        }
      }
    }
    getVitalsConfig();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!credentialId) {
    return <></>;
  }

  const disabledSaveButton = !touchedForm || sleepValue === 0;
  return (
    <div className="flex-col items-start p-3 text-sm">
      <p>
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </p>
      <br />
      <p>
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </p>
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$

      <div className="w-100 mt-2">
        <div className="block sm:flex">
          <div className="min-w-24 mb-4 mt-5 sm:mb-0">
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
          </div>
          <div className="w-120 mt-2.5">
            <Select
              options={options}
              value={selectedParam}
              onChange={(e) => {
                e && setSelectedParam(e);
                setTouchedForm(true);
              }}
            />
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="min-w-24 mb-4 mt-3">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
        </div>
        <div className="mx-2 mt-0 inline-flex w-24 items-baseline">
          <input
            id="value"
            type="text"
            pattern="\d*"
            maxLength={2}
            value={sleepValue}
            onChange={(e) => {
              setSleepValue(Number(e.currentTarget.value));
              setTouchedForm(true);
            }}
            className="pr-12shadow-sm border-default mt-1 block w-full rounded-sm border py-2 pl-6 focus:border-neutral-500 focus:outline-none focus:ring-neutral-500 sm:text-sm"
          />
          <p className="ml-2">
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
          </p>
        </div>
      </div>

      <div>
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </div>
    </div>
  );
};

export default AppConfiguration;
