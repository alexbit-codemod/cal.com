import React from "react";

import classNames from "@calcom/ui/classNames";

type Props = {
  steps: number;
  currentStep: number;
};

// It might be worth passing this label string from outside the component so we can translate it?
function FormStep({ currentStep, steps }: Props) {
  return (
    <div className="w-full">
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      <div className="flex flex-nowrap space-x-1">
        {[...Array(steps)].map((_, j) => {
          console.log({ j, currentStep });
          return (
            <div
              className={classNames(
                "h-1 w-full rounded-sm",
                currentStep - 1 >= j ? "bg-black" : "bg-gray-400"
              )}
              key={j}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FormStep;
