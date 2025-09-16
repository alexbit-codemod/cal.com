import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  IsBoolean,
  IsOptional,
  IsString,
  ValidateNested,
  IsArray,
  Matches,
  IsISO8601,
  IsTimeZone,
  IsIn,
} from "class-validator";

import type { WeekDay } from "../constants";
import { TIME_FORMAT_HH_MM, WEEK_DAYS } from "../constants";

export class ScheduleAvailabilityInput_2024_06_11 {
  @IsArray()
  @IsIn(WEEK_DAYS, { each: true })
  @ApiProperty({
    type: [String],
    example: ["Monday", "Tuesday"],
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    enum: WEEK_DAYS,
  })
  days!: WeekDay[];

  @IsString()
  @Matches(TIME_FORMAT_HH_MM, { message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  @ApiProperty({
    example: "08:00",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  startTime!: string;

  @IsString()
  @Matches(TIME_FORMAT_HH_MM, { message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  @ApiProperty({
    example: "15:00",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  endTime!: string;
}

export class ScheduleOverrideInput_2024_06_11 {
  @IsISO8601({ strict: true })
  @ApiProperty({
    example: "2024-05-20",
  })
  date!: string;

  @IsString()
  @Matches(TIME_FORMAT_HH_MM, { message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  @ApiProperty({
    example: "12:00",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  startTime!: string;

  @IsString()
  @Matches(TIME_FORMAT_HH_MM, { message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  @ApiProperty({
    example: "13:00",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  endTime!: string;
}

export class CreateScheduleInput_2024_06_11 {
  @IsString()
  @ApiProperty({
    type: String,
    example: "Catch up hours",
  })
  name!: string;

  @IsTimeZone()
  @ApiProperty({
    type: String,
    example: "Europe/Rome",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  timeZone!: string;

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => ScheduleAvailabilityInput_2024_06_11)
  @ApiPropertyOptional({
    type: [ScheduleAvailabilityInput_2024_06_11],
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: [
      {
        days: ["Monday", "Tuesday"],
        startTime: "17:00",
        endTime: "19:00",
      },
      {
        days: ["Wednesday", "Thursday"],
        startTime: "16:00",
        endTime: "20:00",
      },
    ],
  })
  availability?: ScheduleAvailabilityInput_2024_06_11[];

  @IsBoolean()
  @ApiProperty({
    type: Boolean,
    example: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  isDefault!: boolean;

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => ScheduleOverrideInput_2024_06_11)
  @ApiPropertyOptional({
    type: [ScheduleOverrideInput_2024_06_11],
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: [
      {
        date: "2024-05-20",
        startTime: "18:00",
        endTime: "21:00",
      },
    ],
  })
  overrides?: ScheduleOverrideInput_2024_06_11[];
}
