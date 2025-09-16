import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, IsDate, IsInt, Min, IsString } from "class-validator";

export class CreatePrivateLinkInput {
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  @ApiPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    type: String,
    format: "date-time",
    example: "2024-12-31T23:59:59.000Z",
  })
  expiresAt?: Date;

  @IsOptional()
  @IsInt()
  @Min(1)
  @ApiPropertyOptional({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    type: Number,
    example: 10,
    minimum: 1,
    default: 1,
  })
  maxUsageCount?: number;
}

export class UpdatePrivateLinkInput {
  @IsString()
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    type: String,
    example: "abc123def456",
  })
  linkId!: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  @ApiPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    type: Date,
    example: "2024-12-31T23:59:59.000Z",
  })
  expiresAt?: Date;

  @IsOptional()
  @IsInt()
  @Min(1)
  @ApiPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    type: Number,
    example: 10,
    minimum: 1,
  })
  maxUsageCount?: number;
}

export class UpdatePrivateLinkBody {
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  @ApiPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    type: Date,
    example: "2024-12-31T23:59:59.000Z",
  })
  expiresAt?: Date;

  @IsOptional()
  @IsInt()
  @Min(1)
  @ApiPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    type: Number,
    example: 10,
    minimum: 1,
  })
  maxUsageCount?: number;
}
