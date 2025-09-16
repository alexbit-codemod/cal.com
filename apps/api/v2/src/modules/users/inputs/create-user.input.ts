import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Expose, Transform } from "class-transformer";
import {
  IsBoolean,
  IsEmail,
  IsHexColor,
  IsNumber,
  IsOptional,
  IsString,
  Validate,
  Min,
  IsObject,
} from "class-validator";

import { ValidateMetadata } from "@calcom/platform-types";

import { AvatarValidator } from "../validators/avatarValidator";
import { LocaleValidator } from "../validators/localeValidator";
import { ThemeValidator } from "../validators/themeValidator";
import { TimeFormatValidator } from "../validators/timeFormatValidator";
import { TimeZoneValidator } from "../validators/timeZoneValidator";
import { WeekdayValidator } from "../validators/weekdayValidator";

export class CreateUserInput {
  @ApiProperty({ type: String, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: "user@example.com" })
  @IsEmail()
  @Transform(({ value }) => {
    if (typeof value === "string") {
      return value.toLowerCase();
    }
  })
  @Expose()
  email!: string;

  @ApiProperty({ type: String, required: false, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: "user123" })
  @IsOptional()
  @IsString()
  @Transform(({ value }) => {
    if (typeof value === "string") {
      return value.toLowerCase();
    }
  })
  @Expose()
  username?: string;

  @ApiProperty({ type: String, required: false, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: "Monday" })
  @IsOptional()
  @IsString()
  @Validate(WeekdayValidator)
  @Expose()
  weekday?: string;

  @ApiProperty({
    type: String,
    required: false,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "#FFFFFF",
  })
  @IsOptional()
  @IsHexColor()
  @Expose()
  brandColor?: string;

  @ApiPropertyOptional({
    type: String,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "I am a bio",
  })
  @IsOptional()
  @IsString()
  @Expose()
  bio?: string;

  @ApiPropertyOptional({
    type: Object,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: { key: "value" },
  })
  @IsObject()
  @IsOptional()
  @ValidateMetadata({
    message:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  @Expose()
  @Transform(
    // note(Lauris): added this transform because without it metadata is removed for some reason
    ({ obj }: { obj: { metadata: Record<string, unknown> | null | undefined } }) => {
      return obj.metadata || undefined;
    }
  )
  metadata?: Record<string, string | boolean | number>;

  @ApiProperty({
    type: String,
    required: false,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "#000000",
  })
  @IsOptional()
  @IsHexColor()
  @Expose()
  darkBrandColor?: string;

  @ApiProperty({ type: Boolean, required: false, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: false })
  @IsOptional()
  @IsBoolean()
  @Expose()
  hideBranding?: boolean;

  @ApiProperty({ type: String, required: false, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: "America/New_York" })
  @IsOptional()
  @IsString()
  @Validate(TimeZoneValidator)
  @Expose()
  timeZone?: string;

  @ApiProperty({ type: String, required: false, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: "dark" })
  @IsOptional()
  @IsString()
  @Validate(ThemeValidator)
  @Expose()
  theme?: string | null;

  @ApiProperty({ type: String, required: false, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: "light" })
  @IsOptional()
  @IsString()
  @Validate(ThemeValidator)
  @Expose()
  appTheme?: string | null;

  @ApiProperty({ type: Number, required: false, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: 24 })
  @IsOptional()
  @IsNumber()
  @Validate(TimeFormatValidator)
  @Expose()
  timeFormat?: number;

  @ApiProperty({ type: Number, required: false, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: 1, minimum: 0 })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Expose()
  defaultScheduleId?: number;

  @ApiProperty({ type: String, required: false, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: "en", default: "en" })
  @IsOptional()
  @IsString()
  @Validate(LocaleValidator)
  @Expose()
  locale?: string | null = "en";

  @ApiProperty({
    type: String,
    required: false,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "https://example.com/avatar.jpg",
  })
  @IsOptional()
  @IsString()
  @Validate(AvatarValidator)
  @Expose()
  avatarUrl?: string;
}
