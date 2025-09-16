import { ApiPropertyOptional } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNumber, Min, Max, IsOptional } from "class-validator";

export class Pagination {
  @ApiPropertyOptional({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: 10 })
  @Transform(({ value }: { value: string }) => value && parseInt(value))
  @IsNumber()
  @Min(1)
  @Max(250)
  @IsOptional()
  limit?: number;

  @ApiPropertyOptional({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: 0 })
  @Transform(({ value }: { value: string }) => value && parseInt(value))
  @IsNumber()
  @Min(0)
  @Max(250)
  @IsOptional()
  offset?: number;
}

const DEFAULT_TAKE = 250;
const DEFAULT_SKIP = 0;

export class SkipTakePagination {
  @ApiPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: 25,
    default: DEFAULT_TAKE,
    minimum: 1,
    maximum: DEFAULT_TAKE,
  })
  @Transform(({ value }: { value: string }) => (value ? parseInt(value) : DEFAULT_TAKE))
  @IsNumber()
  @Min(1)
  @Max(DEFAULT_TAKE)
  @IsOptional()
  take: number = DEFAULT_TAKE;

  @ApiPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: 0,
    default: DEFAULT_SKIP,
    minimum: 0,
  })
  @Transform(({ value }: { value: string }) => (value ? parseInt(value) : DEFAULT_SKIP))
  @IsNumber()
  @Min(0)
  @IsOptional()
  skip: number = DEFAULT_SKIP;
}
