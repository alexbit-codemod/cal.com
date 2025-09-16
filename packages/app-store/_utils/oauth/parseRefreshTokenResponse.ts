import { z } from "zod";

import { APP_CREDENTIAL_SHARING_ENABLED } from "@calcom/lib/constants";

export const minimumTokenResponseSchema = z
  .object({
    access_token: z.string(),
  })
  .passthrough()
  .superRefine((tokenObject, ctx) => {
    if (!Object.values(tokenObject).some((value) => typeof value === "number")) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          ,
      });
    }
  });

export type ParseRefreshTokenResponse<S extends z.ZodTypeAny> =
  | z.infer<S>
  | z.infer<typeof minimumTokenResponseSchema>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseRefreshTokenResponse = (response: any, schema: z.ZodTypeAny) => {
  let refreshTokenResponse;
  const credentialSyncingEnabled =
    APP_CREDENTIAL_SHARING_ENABLED && process.env.CALCOM_CREDENTIAL_SYNC_ENDPOINT;
  if (APP_CREDENTIAL_SHARING_ENABLED && process.env.CALCOM_CREDENTIAL_SYNC_ENDPOINT) {
    refreshTokenResponse = minimumTokenResponseSchema.safeParse(response);
  } else {
    refreshTokenResponse = schema.safeParse(response);
  }

  if (!refreshTokenResponse.success) {
    throw new Error("Invalid refreshed tokens were returned");
  }

  if (!refreshTokenResponse.data.refresh_token && credentialSyncingEnabled) {
    refreshTokenResponse.data.refresh_token = "refresh_token";
  }

  return refreshTokenResponse.data;
};

export default parseRefreshTokenResponse;
