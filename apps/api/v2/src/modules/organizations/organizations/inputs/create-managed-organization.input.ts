import { RefreshApiKeyInput } from "@/modules/api-keys/inputs/refresh-api-key.input";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsObject, IsOptional, IsString, Length } from "class-validator";

import { Metadata, METADATA_DOCS, ValidateMetadata } from "@calcom/platform-types";

export class CreateOrganizationInput extends RefreshApiKeyInput {
  @IsString()
  @Length(1)
  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: "CalTeam" })
  readonly name!: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    type: String,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "cal-tel",
  })
  readonly slug?: string;

  @ApiPropertyOptional({
    type: Object,
    description: METADATA_DOCS,
    example: { key: "value" },
  })
  @IsObject()
  @IsOptional()
  @ValidateMetadata()
  metadata?: Metadata;
}
