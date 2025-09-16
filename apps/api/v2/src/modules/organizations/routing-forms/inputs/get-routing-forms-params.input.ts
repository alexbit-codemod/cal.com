import { ApiPropertyOptional } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsOptional, IsBoolean, IsString, IsEnum, IsDate, IsISO8601 } from "class-validator";

enum SortOrder {
  ASC = "asc",
  DESC = "desc",
}

export class GetRoutingFormsParams {
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

  @ApiPropertyOptional({ type: Boolean, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  @IsOptional()
  @Transform(({ value }) => {
    if (value === "true") return true;
    if (value === "false") return false;
    return value;
  })
  @IsBoolean()
  disabled?: boolean;

  @ApiPropertyOptional({ type: String, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    type: String,
    format: "date-time",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  @IsOptional()
  @IsISO8601()
  @Transform(({ value }) => value && new Date(value))
  @IsDate()
  afterCreatedAt?: Date;

  @ApiPropertyOptional({
    type: String,
    format: "date-time",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  @IsOptional()
  @IsISO8601()
  @Transform(({ value }) => value && new Date(value))
  @IsDate()
  beforeCreatedAt?: Date;

  @ApiPropertyOptional({
    type: String,
    format: "date-time",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  @IsOptional()
  @IsISO8601()
  @Transform(({ value }) => value && new Date(value))
  @IsDate()
  afterUpdatedAt?: Date;

  @ApiPropertyOptional({
    type: String,
    format: "date-time",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  @IsOptional()
  @IsISO8601()
  @Transform(({ value }) => value && new Date(value))
  @IsDate()
  beforeUpdatedAt?: Date;
}
