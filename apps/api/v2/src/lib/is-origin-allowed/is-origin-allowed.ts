import { regex } from "arkregex";
export function isOriginAllowed(origin: string, allowedOrigins: string[]): boolean {
  return allowedOrigins.some((allowedOrigin) => {
    if (allowedOrigin.includes("*")) {
      return wildcardToRegex(allowedOrigin).test(origin);
    }
    return origin === allowedOrigin;
  });
}

function wildcardToRegex(pattern: string): RegExp {
  const escaped = escapeRegex(pattern);
  const regexPattern = "^" + escaped.replace(/\\\*/g, ".*") + "$";
// TODO(arkregex): pattern/flags not statically known; typing may degrade. Consider regex.as<...>(...)
  return regex(regexPattern as Parameters<typeof regex>[0]) as RegExp;
}

function escapeRegex(str: string): string {
  return str.replace(/[.+*?^${}()|[\]\\]/g, "\\$&");
}
