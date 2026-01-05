import { Transform } from "class-transformer";
import { regex as arkregex } from "arkregex";

export function CapitalizeTimeZone(): PropertyDecorator {
  return Transform(({ value }) => {
    if (typeof value === "string") {
      const parts = value.split("/");
      const normalizedParts = parts.map((part) =>
        part
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join("_")
      );
      let normalizedTimeZone = normalizedParts.join("/");

      // note(Lauris): regex matching GMT, EST, UTC at the start, end, or surrounded by non-letters and capitalizing them
      const specialCases = ["GMT", "EST", "UTC"];
      specialCases.forEach((specialCase) => {
// TODO(arkregex): pattern/flags not statically known; typing may degrade. Consider regex.as<...>(...)
        const regex = arkregex(`(^|[^a-zA-Z])(${specialCase})([^a-zA-Z]|$)` as Parameters<typeof arkregex>[0], "gi") as RegExp;
        normalizedTimeZone = normalizedTimeZone.replace(regex, (match, p1, p2, p3) => {
          return `${p1}${specialCase}${p3}`;
        });
      });

      return normalizedTimeZone;
    }
    return value;
  });
}
