import type { GroupBase, Props, ValueContainerProps } from "react-select";
import { components } from "react-select";

import { Icon } from "@calcom/ui/components/icon";
import { Select } from "@calcom/ui/components/form";

const LimitedChipsContainer = <Option, IsMulti extends boolean, Group extends GroupBase<Option>>({
  children,
  ...props
}: ValueContainerProps<Option, IsMulti, Group>) => {
  if (!props.hasValue) {
    return <components.ValueContainer {...props}>{children as React.ReactNode[]}</components.ValueContainer>;
  }
  const CHIPS_LIMIT = 2;
  // TODO:: fix the following ts error
  // @ts-expect-error: @see children is an array but identified as object resulting in the error
  const [chips, other] = children;
  const overflowCounter = chips.slice(CHIPS_LIMIT).length;
  const displayChips = chips.slice(overflowCounter, overflowCounter + CHIPS_LIMIT);

  return (
    <components.ValueContainer {...props}>
      {displayChips}
      {overflowCounter > 0 && (
        <span className="bg-subtle text-default flex items-center justify-center rounded-md px-2 py-[5px] text-[14px] font-medium leading-4">
          <>
            <Icon name="plus" className="mr-1 inline h-3 w-3 stroke-[3px]" />{" "}
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
          </>
        </span>
      )}
      {other}
    </components.ValueContainer>
  );
};

export const MultiDropdownSelect = ({ options = [], value = [], ...props }: Props) => {
  // const { t } = useLocale();

  return (
    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
  );
};

export default MultiDropdownSelect;
