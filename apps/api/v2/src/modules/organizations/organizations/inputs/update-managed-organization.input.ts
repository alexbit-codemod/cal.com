import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsObject, IsOptional, IsString, Length } from "class-validator";

import { Metadata, METADATA_DOCS, ValidateMetadata } from "@calcom/platform-types";

export class UpdateOrganizationInput {
  @IsString()
  @IsOptional()
  @Length(1)
  @ApiPropertyOptional({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: "CalTeam" })
  readonly name?: string;

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
