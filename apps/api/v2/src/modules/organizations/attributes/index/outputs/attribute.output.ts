import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsInt, IsEnum, IsBoolean } from "class-validator";

export const AttributeType = {
  TEXT: "TEXT",
  NUMBER: "NUMBER",
  SINGLE_SELECT: "SINGLE_SELECT",
  MULTI_SELECT: "MULTI_SELECT",
} as const;

export type AttributeType = (typeof AttributeType)[keyof typeof AttributeType];

export class Attribute {
  @IsString()
  @ApiProperty({ type: String, required: true, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: "attr_123" })
  id!: string;

  @IsInt()
  @ApiProperty({
    type: Number,
    required: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: 1,
  })
  teamId!: number;

  @ApiProperty({
    type: String,
    required: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    enum: AttributeType,
  })
  @IsEnum(AttributeType)
  type!: AttributeType;

  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "Attribute Name",
  })
  name!: string;

  @IsString()
  @ApiProperty({
    type: String,
    required: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "attribute-name",
  })
  slug!: string;

  @IsBoolean()
  @ApiProperty({
    type: Boolean,
    required: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: true,
  })
  enabled!: boolean;

  @IsBoolean()
  @ApiProperty({
    type: Boolean,
    required: false,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: true,
  })
  usersCanEditRelation!: boolean;
}
