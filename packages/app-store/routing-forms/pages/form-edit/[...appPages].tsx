"use client";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import type { UseFormReturn } from "react-hook-form";
import { Controller, useFieldArray, useWatch } from "react-hook-form";
import { Toaster } from "sonner";
import { v4 as uuidv4 } from "uuid";

import { useLocale } from "@calcom/lib/hooks/useLocale";
import classNames from "@calcom/ui/classNames";
import { Button } from "@calcom/ui/components/button";
import { FormCard } from "@calcom/ui/components/card";
import {
  BooleanToggleGroupField,
  Label,
  SelectField,
  TextField,
  MultiOptionInput,
} from "@calcom/ui/components/form";
import { Icon } from "@calcom/ui/components/icon";
import { Tooltip } from "@calcom/ui/components/tooltip";

import type { inferSSRProps } from "@lib/types/inferSSRProps";

import SingleForm from "../../components/SingleForm";
import type { getServerSidePropsForSingleFormView as getServerSideProps } from "../../components/getServerSidePropsSingleForm";
import { FieldTypes } from "../../lib/FieldTypes";
import type { RoutingFormWithResponseCount } from "../../types/types";

type HookForm = UseFormReturn<RoutingFormWithResponseCount>;

function Field({
  fieldIndex,
  hookForm,
  hookFieldNamespace,
  deleteField,
  moveUp,
  moveDown,
  appUrl,
  disableTypeChange,
}: {
  fieldIndex: number;
  hookForm: HookForm;
  hookFieldNamespace: `fields.${number}`;
  deleteField: {
    check: () => boolean;
    fn: () => void;
  };
  moveUp: {
    check: () => boolean;
    fn: () => void;
  };
  moveDown: {
    check: () => boolean;
    fn: () => void;
  };
  appUrl: string;
  disableTypeChange: boolean;
}) {
  const { t } = useLocale();

  const router = hookForm.getValues(`${hookFieldNamespace}.router`);
  const routerField = hookForm.getValues(`${hookFieldNamespace}.routerField`);

  const label = useWatch({
    control: hookForm.control,
    name: `${hookFieldNamespace}.label`,
  });

  const identifier = useWatch({
    control: hookForm.control,
    name: `${hookFieldNamespace}.identifier`,
  });

  const fieldType = useWatch({
    control: hookForm.control,
    name: `${hookFieldNamespace}.type`,
  });

  const preCountFieldLabel = label || routerField?.label || "Field";
  const fieldLabel = `${fieldIndex + 1}. ${preCountFieldLabel}`;

  return (
    <div data-testid="field">
      <FormCard
        label={fieldLabel}
        moveUp={moveUp}
        moveDown={moveDown}
        badge={
          router ? { text: router.name, variant: "gray", href: `${appUrl}/form-edit/${router.id}` } : null
        }
        deleteField={router ? null : deleteField}>
        <div className="bg-default border-default w-full gap-3 rounded-2xl border p-3">
          <div className="mb-3 w-full">
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
          </div>
          <div className="mb-3 w-full">
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
          </div>
          <div className="mb-3 w-full">
            <Controller
              name={`${hookFieldNamespace}.type`}
              control={hookForm.control}
              defaultValue={routerField?.type}
              render={({ field: { value, onChange } }) => {
                const defaultValue = FieldTypes.find((fieldType) => fieldType.value === value);
                if (disableTypeChange) {
                  return (
                    <div className="data-testid-field-type">
                      <Label htmlFor="field-type-button">{t("type")}</Label>
                      <Tooltip content={t("field_type_change_suggestion")}>
                        <Button
                          type="button"
                          disabled
                          color="secondary"
                          className={classNames(
                            "h-8 w-full justify-between text-left text-sm",
                            !!router && "bg-subtle cursor-not-allowed"
                          )}>
                          <span className="text-default">{defaultValue?.label || "Select field type"}</span>
                          <Icon name="chevron-down" className="text-default h-4 w-4" />
                        </Button>
                      </Tooltip>
                    </div>
                  );
                } else {
                  return (
                    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                    $$$
                  );
                }
              }}
            />
          </div>
          {["select", "multiselect"].includes(fieldType) ? (
            <div className="bg-muted w-full rounded-[10px] p-2">
              <Label className="text-subtle">{t("options")}</Label>
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
            </div>
          ) : null}

          <div className="w-[106px]">
            <Controller
              name={`${hookFieldNamespace}.required`}
              control={hookForm.control}
              defaultValue={routerField?.required}
              render={({ field: { value, onChange } }) => {
                return (
                  // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                  $$$
                );
              }}
            />
          </div>
        </div>
      </FormCard>
    </div>
  );
}

const FormEdit = ({
  hookForm,
  form,
  appUrl,
}: {
  hookForm: HookForm;
  form: inferSSRProps<typeof getServerSideProps>["form"];
  appUrl: string;
}) => {
  const fieldsNamespace = "fields";
  const {
    fields: hookFormFields,
    append: appendHookFormField,
    remove: removeHookFormField,
    swap: swapHookFormField,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore https://github.com/react-hook-form/react-hook-form/issues/6679
  } = useFieldArray({
    control: hookForm.control,
    name: fieldsNamespace,
    keyName: "_id",
  });

  const [animationRef] = useAutoAnimate<HTMLDivElement>();

  const addField = () => {
    appendHookFormField({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      id: uuidv4(),
      // This is same type from react-awesome-query-builder
      type: "text",
      label: "",
    });
  };

  // hookForm.reset(form);
  if (!form.fields) {
    form.fields = [];
  }
  return hookFormFields.length ? (
    <div className="w-full py-4 lg:py-8">
      <div ref={animationRef} className="flex w-full flex-col rounded-md">
        {hookFormFields.map((field, key) => {
          const existingField = Boolean((form.fields || []).find((f) => f.id === field.id));
          const hasFormResponses = (form._count?.responses ?? 0) > 0;
          return (
            <Field
              appUrl={appUrl}
              fieldIndex={key}
              hookForm={hookForm}
              hookFieldNamespace={`${fieldsNamespace}.${key}`}
              disableTypeChange={existingField && hasFormResponses}
              deleteField={{
                check: () => hookFormFields.length > 1,
                fn: () => {
                  removeHookFormField(key);
                },
              }}
              moveUp={{
                check: () => key !== 0,
                fn: () => {
                  swapHookFormField(key, key - 1);
                },
              }}
              moveDown={{
                check: () => key !== hookFormFields.length - 1,
                fn: () => {
                  if (key === hookFormFields.length - 1) {
                    return;
                  }
                  swapHookFormField(key, key + 1);
                },
              }}
              key={field.id}
            />
          );
        })}
      </div>
      {hookFormFields.length ? (
        <div className={classNames("flex")}>
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
        </div>
      ) : null}
    </div>
  ) : (
    <div className="w-full py-4 lg:py-8">
      {/* TODO: remake empty screen for V3 */}
      <div className="border-sublte bg-muted flex flex-col items-center gap-6 rounded-xl border p-11">
        <div className="mb-3 grid">
          {/* Icon card - Top */}
          <div className="bg-default border-subtle z-30 col-start-1 col-end-1 row-start-1 row-end-1 h-10 w-10 transform rounded-md border shadow-sm">
            <div className="text-emphasis flex h-full items-center justify-center">
              <Icon name="menu" className="text-emphasis h-4 w-4" />
            </div>
          </div>
          {/* Left fanned card */}
          <div
            className="bg-default border-subtle z-20 col-start-1 col-end-1 row-start-1 row-end-1 h-10 w-10 rounded-md border shadow-sm"
            style={{
              transform: "translate(-12px, 2px) rotate(-6deg)",
            }}
          />
          {/* Right fanned card */}
          <div
            className="bg-default border-subtle z-10 col-start-1 col-end-1 row-start-1 row-end-1 h-10 w-10 rounded-md border shadow-sm"
            style={{
              transform: "translate(12px, 2px) rotate(6deg)",
            }}
          />
        </div>
        <div>
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
        </div>
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </div>
    </div>
  );
};

export default function FormEditPage({
  appUrl,
  permissions,
  ...props
}: inferSSRProps<typeof getServerSideProps> & { appUrl: string }) {
  return (
    <>
      <Toaster position="bottom-right" />
      <SingleForm
        {...props}
        appUrl={appUrl}
        permissions={permissions}
        Page={({ hookForm, form }) => <FormEdit appUrl={appUrl} hookForm={hookForm} form={form} />}
      />
    </>
  );
}
