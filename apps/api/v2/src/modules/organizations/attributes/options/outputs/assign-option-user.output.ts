import { BaseOutputDTO } from "@/modules/organizations/attributes/index/outputs/base.output";
import { OptionOutput } from "@/modules/organizations/attributes/options/outputs/option.output";
import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { IsString, ValidateNested } from "class-validator";

class AssignOptionUserOutputData {
  @IsString()
  @ApiProperty({ type: String, required: true, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  id!: string;

  @IsString()
  @ApiProperty({ type: Number, required: true, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  memberId!: number;

  @IsString()
  @ApiProperty({ type: String, required: true, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  attributeOptionId!: string;
}

export class AssignOptionUserOutput extends BaseOutputDTO {
  @Expose()
  @ValidateNested()
  @Type(() => AssignOptionUserOutputData)
  data!: AssignOptionUserOutputData;
}

export class UnassignOptionUserOutput extends BaseOutputDTO {
  @Expose()
  @ValidateNested()
  @Type(() => AssignOptionUserOutputData)
  data!: AssignOptionUserOutputData;
}
