import LicenseKeyService from "@calcom/features/ee/common/server/LicenseKeyService";

import type { TrpcSessionUser } from "../../../types";
import type { TValidateLicenseInputSchema } from "./validateLicense.schema";

type ValidateLicenseOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: TValidateLicenseInputSchema;
};

export const validateLicenseHandler = async ({ input }: ValidateLicenseOptions) => {
  const { licenseKey } = input;

  // Skip validation for E2E testing
  if (process.env.NEXT_PUBLIC_IS_E2E === "1") {
    return {
      valid: true,
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    };
  }

  try {
    const isValid = await LicenseKeyService.validateLicenseKey(licenseKey);

    return {
      valid: isValid,
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    };
  } catch (error) {
    console.error("License validation failed:", error);
    return {
      valid: false,
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    };
  }
};
