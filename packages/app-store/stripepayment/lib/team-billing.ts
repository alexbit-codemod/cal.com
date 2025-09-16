import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export function getRequestedSlugError(error: unknown, requestedSlug: string) {
  let message = // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  ;
  let statusCode = 500;
  // This covers the edge case if an unpublished team takes too long to publish
  // and another team gets the requestedSlug first.
  // https://www.prisma.io/docs/reference/api-reference/error-reference#p2002
  if (error instanceof PrismaClientKnownRequestError && error.code === "P2002") {
    statusCode = 400;
    message = // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ;
  } else if (error instanceof Error) {
    message = error.message;
  }
  return { message, statusCode };
}
