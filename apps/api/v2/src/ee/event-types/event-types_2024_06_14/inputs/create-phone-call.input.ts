import { ApiProperty as DocsProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsString, IsBoolean, IsOptional, IsEnum, Matches } from "class-validator";

export enum TemplateType {
  CHECK_IN_APPOINTMENT = "CHECK_IN_APPOINTMENT",
  CUSTOM_TEMPLATE = "CUSTOM_TEMPLATE",
}

export class CreatePhoneCallInput {
  @IsString()
  @Matches(/^\+[1-9]\d{1,14}$/, {
    message:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  @DocsProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  yourPhoneNumber!: string;

  @IsString()
  @Matches(/^\+[1-9]\d{1,14}$/, {
    message:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  @DocsProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  numberToCall!: string;

  @IsString()
  @DocsProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  calApiKey!: string;

  @IsBoolean()
  @DocsProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , default: true })
  enabled = true;

  @IsEnum(TemplateType)
  @DocsProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , enum: TemplateType })
  templateType: TemplateType = TemplateType.CUSTOM_TEMPLATE;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  schedulerName?: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => (value ? value : undefined))
  @ApiPropertyOptional({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  guestName?: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => (value ? value : undefined))
  @ApiPropertyOptional({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  guestEmail?: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => (value ? value : undefined))
  @ApiPropertyOptional({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  guestCompany?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  beginMessage?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  generalPrompt?: string;
}
