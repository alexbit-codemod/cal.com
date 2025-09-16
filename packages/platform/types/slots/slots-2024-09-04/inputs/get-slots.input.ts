import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import {
  IsDateString,
  IsTimeZone,
  IsOptional,
  IsNumber,
  IsString,
  IsArray,
  ArrayMinSize,
  IsEnum,
} from "class-validator";

import { SlotFormat } from "@calcom/platform-enums";

export class GetAvailableSlotsInput_2024_09_04 {
  @IsDateString({ strict: true })
  @ApiProperty({
    type: String,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "2050-09-05",
  })
  start!: string;

  @IsDateString({ strict: true })
  @ApiProperty({
    type: String,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "2050-09-06",
  })
  end!: string;

  @IsTimeZone()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "Europe/Rome",
  })
  timeZone?: string;

  @Transform(({ value }: { value: string }) => value && parseInt(value))
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({
    type: Number,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "60",
  })
  duration?: number;

  @IsString()
  @IsEnum(SlotFormat, {
    message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  @Transform(({ value }) => {
    if (!value) return undefined;
    return value.toLowerCase();
  })
  @IsOptional()
  @ApiPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "range",
    enum: SlotFormat,
  })
  format?: SlotFormat;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "abc123def456",
  })
  bookingUidToReschedule?: string;
}

export const ById_2024_09_04_type = "byEventTypeId";
export class ById_2024_09_04 extends GetAvailableSlotsInput_2024_09_04 {
  @IsString()
  type: typeof ById_2024_09_04_type = ById_2024_09_04_type;

  @Transform(({ value }: { value: string }) => value && parseInt(value))
  @IsNumber()
  @ApiProperty({
    type: Number,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "100",
  })
  eventTypeId!: number;
}

export const ByUsernameAndEventTypeSlug_2024_09_04_type = "byUsernameAndEventTypeSlug";
export class ByUsernameAndEventTypeSlug_2024_09_04 extends GetAvailableSlotsInput_2024_09_04 {
  @IsString()
  type: typeof ByUsernameAndEventTypeSlug_2024_09_04_type = ByUsernameAndEventTypeSlug_2024_09_04_type;

  @IsString()
  @ApiProperty({
    type: String,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "event-type-slug",
  })
  eventTypeSlug!: string;

  @IsString()
  @ApiProperty({
    type: String,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "bob",
  })
  username!: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "org-slug",
  })
  organizationSlug?: string;
}

export const ByTeamSlugAndEventTypeSlug_2024_09_04_type = "byTeamSlugAndEventTypeSlug";
export class ByTeamSlugAndEventTypeSlug_2024_09_04 extends GetAvailableSlotsInput_2024_09_04 {
  @IsString()
  type: typeof ByTeamSlugAndEventTypeSlug_2024_09_04_type = ByTeamSlugAndEventTypeSlug_2024_09_04_type;

  @IsString()
  @ApiProperty({
    type: String,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "event-type-slug",
  })
  eventTypeSlug!: string;

  @IsString()
  @ApiProperty({
    type: String,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "bob",
  })
  teamSlug!: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "org-slug",
  })
  organizationSlug?: string;
}

export const ByUsernames_2024_09_04_type = "byUsernames";
export class ByUsernames_2024_09_04 extends GetAvailableSlotsInput_2024_09_04 {
  @IsString()
  type: typeof ByUsernames_2024_09_04_type = ByUsernames_2024_09_04_type;

  @Transform(({ value }) => {
    if (typeof value === "string") {
      return value.split(",").map((username: string) => username.trim());
    }
    return value;
  })
  @IsArray()
  @ArrayMinSize(2, { message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  @IsString({ each: true })
  @ApiProperty({
    type: [String],
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: ["username1", "username2"],
  })
  usernames!: string[];

  @IsString()
  @ApiProperty({
    type: String,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "org-slug",
  })
  organizationSlug!: string;
}
