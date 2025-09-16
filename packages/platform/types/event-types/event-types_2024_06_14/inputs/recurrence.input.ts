import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsEnum, IsOptional, IsBoolean } from "class-validator";

import { FrequencyInput } from "@calcom/platform-enums";

export type TransformRecurringEventSchema_2024_06_14 = {
  interval: number;
  count: number;
  freq: number;
};

export class Recurrence_2024_06_14 {
  @IsInt()
  @ApiProperty({ example: 10, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  interval!: number;

  @IsInt()
  @ApiProperty({ example: 10, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  occurrences!: number;

  @IsEnum(FrequencyInput)
  @ApiProperty({ enum: FrequencyInput })
  frequency!: FrequencyInput;

  @IsOptional()
  @IsBoolean()
  disabled?: boolean = false;
}
