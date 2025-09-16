import { BaseOutputDTO } from "@/modules/organizations/attributes/index/outputs/base.output";
import { OptionOutput } from "@/modules/organizations/attributes/options/outputs/option.output";
import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { IsArray, ValidateNested } from "class-validator";

export class AssignedOptionOutput extends OptionOutput {
  @Expose()
  @IsArray()
  @ApiProperty({
    type: Array,
    required: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: [124, 224],
  })
  assignedUserIds!: number[];
}

export class GetAllAttributeAssignedOptionOutput extends BaseOutputDTO {
  @Expose()
  @ValidateNested()
  @Type(() => OptionOutput)
  data!: AssignedOptionOutput[];
}
