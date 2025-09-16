export function generateJsonResponse({
  json,
  status = 200,
  statusText = "OK",
}: {
  json: unknown;
  status?: number;
  statusText?: string;
}) {
  return new Response(JSON.stringify(json), {
    status,
    statusText,
  });
}

export function internalServerErrorResponse({
  json,
}: {
  json: unknown;
  status?: number;
  statusText?: string;
}) {
  return generateJsonResponse({ json, status: 500, statusText: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   });
}

export function generateTextResponse({
  text,
  status = 200,
  statusText = "OK",
}: {
  text: string;
  status?: number;
  statusText?: string;
}) {
  return new Response(text, {
    status: status,
    statusText: statusText,
  });
}

export function successResponse({ json }: { json: unknown }) {
  return generateJsonResponse({ json });
}
