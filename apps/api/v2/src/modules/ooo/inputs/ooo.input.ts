import { BadRequestException } from "@nestjs/common";
import { ApiProperty, ApiPropertyOptional, PartialType } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsDate, IsInt, IsOptional, IsString, IsEnum, isDate } from "class-validator";

import { SkipTakePagination } from "@calcom/platform-types";

export enum OutOfOfficeReason {
  UNSPECIFIED = "unspecified",
  VACATION = "vacation",
  TRAVEL = "travel",
  SICK_LEAVE = "sick",
  PUBLIC_HOLIDAY = "public_holiday",
}

export type OutOfOfficeReasonType = `${OutOfOfficeReason}`;

const isDateString = (dateString: string) => {
  try {
    const isoDateRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.\d{3})?Z$/;
    return isoDateRegex.test(dateString);
  } catch {
    throw new BadRequestException("Invalid Date.");
  }
};

export class CreateOutOfOfficeEntryDto {
  @Transform(({ value }: { value: string }) => {
    if (isDateString(value)) {
      const date = new Date(value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
    throw new BadRequestException("Invalid Date.");
  })
  @IsDate()
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "2023-05-01T00:00:00.000Z",
  })
  start!: Date;

  @Transform(({ value }: { value: string }) => {
    if (isDateString(value)) {
      const date = new Date(value);
      date.setUTCHours(23, 59, 59, 999);
      return date;
    }
    throw new BadRequestException("Invalid Date.");
  })
  @IsDate()
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "2023-05-10T23:59:59.999Z",
  })
  end!: Date;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "Vacation in Hawaii",
  })
  notes?: string;

  @IsInt()
  @IsOptional()
  @ApiPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: 2,
  })
  toUserId?: number;

  @IsEnum(OutOfOfficeReason)
  @IsOptional()
  @ApiPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "vacation",
    enum: OutOfOfficeReason,
  })
  reason?: OutOfOfficeReasonType;
}

export class UpdateOutOfOfficeEntryDto extends PartialType(CreateOutOfOfficeEntryDto) {}

export enum SortOrder {
  asc = "asc",
  desc = "desc",
}
type SortOrderType = keyof typeof SortOrder;

export class GetOutOfOfficeEntryFiltersDTO extends SkipTakePagination {
  @IsOptional()
  @IsEnum(SortOrder, {
    message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  @ApiProperty({
    required: false,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "?sortStart=asc OR ?sortStart=desc",
    enum: SortOrder,
  })
  sortStart?: SortOrderType;

  @IsOptional()
  @IsEnum(SortOrder, {
    message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  @ApiProperty({
    required: false,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "?sortEnd=asc OR ?sortEnd=desc",
    enum: SortOrder,
  })
  sortEnd?: SortOrderType;
}

export class GetOrgUsersOutOfOfficeEntryFiltersDTO extends GetOutOfOfficeEntryFiltersDTO {
  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    required: false,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "example@domain.com",
  })
  email?: string;
}
