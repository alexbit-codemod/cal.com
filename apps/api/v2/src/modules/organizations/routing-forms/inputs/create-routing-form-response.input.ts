import { ApiPropertyOptional } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsBoolean, IsOptional } from "class-validator";

import { GetAvailableSlotsInput_2024_09_04 } from "@calcom/platform-types";

export class CreateRoutingFormResponseInput extends GetAvailableSlotsInput_2024_09_04 {
  @Transform(({ value }: { value: string | boolean }) => {
    if (typeof value === "boolean") return value;
    if (typeof value === "string") {
      return value.toLowerCase() === "true";
    }
    return undefined;
  })
  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({
    type: Boolean,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: true,
  })
  queueResponse?: boolean;
}
