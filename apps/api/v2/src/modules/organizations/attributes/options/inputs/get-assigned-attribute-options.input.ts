import { ApiPropertyOptional } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsOptional, IsArray, ArrayMinSize, IsString, IsNumber } from "class-validator";

export class GetAssignedAttributeOptions {
  @ApiPropertyOptional({ type: Number, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  @Transform(({ value }) => value && parseInt(value))
  @IsOptional()
  skip?: number;

  @ApiPropertyOptional({ type: Number, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  @Transform(({ value }) => value && parseInt(value))
  @IsOptional()
  take?: number;

  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value === "string") {
      return value.split(",").map((optId: string) => optId);
    }
    return value;
  })
  @ApiPropertyOptional({
    type: [String],
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "?assignedOptionIds=aaaaaaaa-bbbb-cccc-dddd-eeeeee1eee,aaaaaaaa-bbbb-cccc-dddd-eeeeee2eee",
  })
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1, { message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  assignedOptionIds?: string[];

  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value === "string") {
      return value.split(",").map((teamId: string) => parseInt(teamId));
    }
    return value;
  })
  @ApiPropertyOptional({
    type: [Number],
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "?teamIds=100,200",
  })
  @IsArray()
  @IsNumber({}, { each: true })
  @ArrayMinSize(1, { message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  teamIds?: number[];
}
