import { ApiProperty, ApiPropertyOptional, getSchemaPath } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsInt, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";

import {
  ApiResponseWithoutData,
  SlotsOutput_2024_09_04,
  RangeSlotsOutput_2024_09_04,
} from "@calcom/platform-types";

class Routing {
  @ApiProperty({
    type: String,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "123",
  })
  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  queuedResponseId?: string | null;

  @ApiProperty({
    type: Number,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: 123,
  })
  @IsInt()
  @IsOptional()
  @ApiPropertyOptional()
  responseId?: number | null;

  @ApiProperty({
    type: [Number],
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: [101, 102],
  })
  @IsArray()
  @IsInt({ each: true })
  teamMemberIds!: number[];

  @ApiPropertyOptional({
    type: String,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "john.doe@example.com",
  })
  @IsString()
  @IsOptional()
  teamMemberEmail?: string;

  @ApiPropertyOptional({
    type: Boolean,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: true,
  })
  @IsBoolean()
  @IsOptional()
  skipContactOwner?: boolean;

  @ApiPropertyOptional({
    type: String,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "salesforce",
  })
  @IsString()
  @IsOptional()
  crmAppSlug?: string;

  @ApiPropertyOptional({
    type: String,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "Account",
  })
  @IsString()
  @IsOptional()
  crmOwnerRecordType?: string;
}

export class CreateRoutingFormResponseOutputData {
  @ApiPropertyOptional({
    type: Number,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: 123,
  })
  @IsNumber()
  @IsOptional()
  eventTypeId?: number;

  @ValidateNested()
  @Type(() => Routing)
  @ApiPropertyOptional({
    type: Routing,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: {
      eventTypeId: 123,
      routing: {
        teamMemberIds: [101, 102],
        teamMemberEmail: "john.doe@example.com",
        skipContactOwner: true,
      },
    },
  })
  routing?: Routing;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "This is a custom message.",
  })
  routingCustomMessage?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "https://example.com/",
  })
  routingExternalRedirectUrl?: string;

  @ValidateNested()
  @ApiProperty({
    oneOf: [
      { $ref: getSchemaPath(SlotsOutput_2024_09_04) },
      { $ref: getSchemaPath(RangeSlotsOutput_2024_09_04) },
    ],
  })
  @Type(() => Object)
  slots?: SlotsOutput_2024_09_04 | RangeSlotsOutput_2024_09_04;
}

export class CreateRoutingFormResponseOutput extends ApiResponseWithoutData {
  @ValidateNested()
  @ApiProperty({ type: CreateRoutingFormResponseOutputData })
  @Type(() => CreateRoutingFormResponseOutputData)
  data!: CreateRoutingFormResponseOutputData;
}
