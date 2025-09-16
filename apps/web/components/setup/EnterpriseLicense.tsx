import { zodResolver } from "@hookform/resolvers/zod";
// eslint-disable-next-line no-restricted-imports
import { noop } from "lodash";
import { useCallback, useState } from "react";
import { Controller, FormProvider, useForm, useFormState } from "react-hook-form";
import { z } from "zod";

import { CONSOLE_URL } from "@calcom/lib/constants";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import type { RouterInputs, RouterOutputs } from "@calcom/trpc/react";
import { trpc } from "@calcom/trpc/react";
import classNames from "@calcom/ui/classNames";
import { Button } from "@calcom/ui/components/button";
import { TextField } from "@calcom/ui/components/form";
import { Icon } from "@calcom/ui/components/icon";

type EnterpriseLicenseFormValues = {
  licenseKey: string;
};

const makeSchemaLicenseKey = (args: { callback: (valid: boolean) => void; onSuccessValidate: () => void }) =>
  z.object({
    licenseKey: z
      .string()
      .uuid({
        message: "License key must follow UUID format: 8-4-4-4-12",
      })
      .superRefine(async (data, ctx) => {
        const parse = z.string().uuid().safeParse(data);
        if (parse.success) {
          args.callback(true);
          const response = await fetch(`${CONSOLE_URL}/api/license?key=${data}`);
          args.callback(false);
          const json = await response.json();
          if (!json.valid) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: `License key ${json.message.toLowerCase()}`,
            });
          } else {
            args.onSuccessValidate();
          }
        }
      }),
  });

const EnterpriseLicense = (
  props: {
    licenseKey?: string;
    initialValue?: Partial<EnterpriseLicenseFormValues>;
    onSuccessValidate: () => void;
    onSubmit: (value: EnterpriseLicenseFormValues) => void;
    onSuccess?: (
      data: RouterOutputs["viewer"]["deploymentSetup"]["update"],
      variables: RouterInputs["viewer"]["deploymentSetup"]["update"]
    ) => void;
  } & Omit<JSX.IntrinsicElements["form"], "onSubmit">
) => {
  const { onSubmit, onSuccess = noop, onSuccessValidate = noop, ...rest } = props;
  const { t } = useLocale();
  const [checkLicenseLoading, setCheckLicenseLoading] = useState(false);
  const mutation = trpc.viewer.deploymentSetup.update.useMutation({
    onSuccess,
  });

  const schemaLicenseKey = useCallback(
    () =>
      makeSchemaLicenseKey({
        callback: setCheckLicenseLoading,
        onSuccessValidate,
      }),
    [setCheckLicenseLoading, onSuccessValidate]
  );

  const formMethods = useForm<EnterpriseLicenseFormValues>({
    defaultValues: {
      licenseKey: props.licenseKey || "",
    },
    resolver: zodResolver(schemaLicenseKey()),
  });

  const handleSubmit = formMethods.handleSubmit((values) => {
    onSubmit(values);
    setCheckLicenseLoading(false);
    mutation.mutate(values);
  });

  const { isDirty, errors } = useFormState(formMethods);

  return (
    <FormProvider {...formMethods}>
      <form {...rest} className="bg-default space-y-4 rounded-md px-8 py-10" onSubmit={handleSubmit}>
        <div>
          <Button
            className="w-full justify-center text-lg"
            EndIcon="external-link"
            href="https://go.cal.com/get-license"
            target="_blank">
            {t("purchase_license")}
          </Button>
          <div className="relative flex justify-center">
            <hr className="border-subtle my-8 w-full border-[1.5px]" />
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
          </div>
          {t("already_have_key")}
          <Controller
            name="licenseKey"
            control={formMethods.control}
            render={({ field: { onBlur, onChange, value } }) => (
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
            )}
          />
        </div>
      </form>
    </FormProvider>
  );
};

export default EnterpriseLicense;
