import { TRPCClientError } from "@trpc/client";

import { HttpError } from "./http-error";

export function getClientErrorFromUnknown(cause: unknown): Error {
  if (cause instanceof HttpError) {
    const message = // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ;
    return new Error(message);
  }
  if (cause instanceof TRPCClientError) {
    return new Error(cause.message);
  }
  if (cause instanceof Error) {
    return new Error(cause.message);
  }
  if (typeof cause === "string") {
    return new Error(cause);
  }

  return new Error(`Unhandled error of type '${typeof cause}'. Please reach out for our customer support.`);
}

export const withErrorFromUnknown = (a: (b: Error) => void) => (b: unknown) =>
  a(getClientErrorFromUnknown(b));
