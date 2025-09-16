import { ApiPropertyOptional } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsOptional, IsString, IsEnum, IsISO8601, IsNumber, IsArray, ArrayMinSize } from "class-validator";

enum SortOrder {
  ASC = "asc",
  DESC = "desc",
}

export class GetRoutingFormResponsesParams {
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

  @ApiPropertyOptional({ enum: SortOrder, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  @IsOptional()
  @IsEnum(SortOrder)
  sortCreatedAt?: "asc" | "desc";

  @ApiPropertyOptional({ enum: SortOrder, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  @IsOptional()
  @IsEnum(SortOrder)
  sortUpdatedAt?: "asc" | "desc";

  @ApiPropertyOptional({
    type: String,
    format: "date-time",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  @IsOptional()
  @IsISO8601()
  afterCreatedAt?: string;

  @ApiPropertyOptional({
    type: String,
    format: "date-time",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  @IsOptional()
  @IsISO8601()
  beforeCreatedAt?: string;

  @ApiPropertyOptional({
    type: String,
    format: "date-time",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  @IsOptional()
  @IsISO8601()
  afterUpdatedAt?: string;

  @ApiPropertyOptional({
    type: String,
    format: "date-time",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  @IsOptional()
  @IsISO8601()
  beforeUpdatedAt?: string;

  @ApiPropertyOptional({ type: String, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  @IsOptional()
  @IsString()
  routedToBookingUid?: string;
}

export class GetRoutingFormsParams extends GetRoutingFormResponsesParams {
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
