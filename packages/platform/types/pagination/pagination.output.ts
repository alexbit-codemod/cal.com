import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, Min } from "class-validator";

export class PaginationMetaDto {
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: 123,
    minimum: 0,
  })
  @IsInt()
  @Min(0)
  totalItems!: number;

  @ApiProperty({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: 103, // e.g., if totalItems=123, skip=10, itemsPerPage=10 -> 123 - (10 + 10) = 103
    minimum: 0,
  })
  @IsInt()
  @Min(0)
  remainingItems!: number;

  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: 10,
  })
  @IsInt()
  @Min(0)
  returnedItems!: number;

  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: 10,
    minimum: 1,
  })
  @IsInt()
  @Min(1) // Typically, you request at least 1 item per page
  itemsPerPage!: number;

  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: 2, // e.g., if skip=10, itemsPerPage=10 -> page 2
    minimum: 1,
  })
  @IsInt()
  @Min(1) // Page numbers usually start from 1
  currentPage!: number;

  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: 13, // e.g., if totalItems=123, itemsPerPage=10 -> 13 pages
    minimum: 0, // Can be 0 if totalItems is 0
  })
  @IsInt()
  @Min(0)
  totalPages!: number;

  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: true,
  })
  @IsBoolean()
  hasNextPage!: boolean;

  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: true,
  })
  @IsBoolean()
  hasPreviousPage!: boolean;
}
