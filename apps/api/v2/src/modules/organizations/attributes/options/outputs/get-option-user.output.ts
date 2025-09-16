import { BaseOutputDTO } from "@/modules/organizations/attributes/index/outputs/base.output";
import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { IsString, ValidateNested } from "class-validator";

class GetOptionUserOutputData {
  @IsString()
  @ApiProperty({ type: String, required: true, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  id!: string;

  @IsString()
  @ApiProperty({ type: String, required: true, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  attributeId!: string;

  @IsString()
  @ApiProperty({ type: String, required: true, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  value!: string;

  @IsString()
  @ApiProperty({ type: String, required: true, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  slug!: string;
}

export class GetOptionUserOutput extends BaseOutputDTO {
  @Expose()
  @ValidateNested()
  @Type(() => GetOptionUserOutputData)
  data!: GetOptionUserOutputData[];
}
