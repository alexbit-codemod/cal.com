import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsString } from "class-validator";

export class OptionOutput {
  @Expose()
  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "attr_option_id",
  })
  id!: string;

  @Expose()
  @IsString()
  @ApiProperty({ type: String, required: true, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: "attr_id" })
  attributeId!: string;

  @Expose()
  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "option_value",
  })
  value!: string;

  @Expose()
  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "option-slug",
  })
  slug!: string;
}
