import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

import { SkipTakePagination } from "@calcom/platform-types";

export class GetManagedOrganizationsInput_2024_08_13 extends SkipTakePagination {
  @IsOptional()
  @IsString()
  @ApiProperty({ example: "organization-slug", description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  slug?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: "metadata-key",
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  metadataKey?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: "metadata-value",
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  metadataValue?: string;
}
