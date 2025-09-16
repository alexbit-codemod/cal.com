import { ApiExtraModels, ApiProperty, ApiPropertyOptional, getSchemaPath } from "@nestjs/swagger";
import { Type } from "class-transformer";
import type { ValidationArguments, ValidationOptions } from "class-validator";
import {
  IsInt,
  IsDateString,
  IsTimeZone,
  IsEnum,
  ValidateNested,
  IsArray,
  IsString,
  isEmail,
  IsOptional,
  IsUrl,
  IsObject,
  IsBoolean,
  Min,
  registerDecorator,
  Validate,
  IsDefined,
} from "class-validator";
import { isValidPhoneNumber } from "libphonenumber-js";

import type { BookingLanguageType } from "./language";
import { BookingLanguage } from "./language";
import type { BookingInputLocation_2024_08_13 } from "./location.input";
import {
  BookingInputAddressLocation_2024_08_13,
  BookingInputAttendeeAddressLocation_2024_08_13,
  BookingInputAttendeeDefinedLocation_2024_08_13,
  BookingInputAttendeePhoneLocation_2024_08_13,
  BookingInputIntegrationLocation_2024_08_13,
  BookingInputLinkLocation_2024_08_13,
  BookingInputPhoneLocation_2024_08_13,
  BookingInputOrganizersDefaultAppLocation_2024_08_13,
  ValidateBookingLocation_2024_08_13,
} from "./location.input";
import { ValidateMetadata } from "./validators/validate-metadata";

export const FAILED_EVENT_TYPE_IDENTIFICATION_ERROR_MESSAGE =
  "Either eventTypeId or eventTypeSlug + username or eventTypeSlug + teamSlug must be provided";

function RequireEventTypeIdentification(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (object: any) {
    registerDecorator({
      name: "requireEventTypeIdentification",
      target: object,
      propertyName: "eventTypeId or eventTypeSlug + username",
      options: validationOptions,
      constraints: [],
      validator: {
        validate(_: unknown, args: ValidationArguments) {
          const obj = args.object as CreateBookingInput_2024_08_13;

          const hasEventTypeId = !!obj?.eventTypeId;

          const hasSlugAndUsername = !!obj?.eventTypeSlug && !!obj?.username;

          const hasSlugAndTeamSlug = !!obj?.eventTypeSlug && !!obj?.teamSlug;

          return hasEventTypeId || hasSlugAndUsername || hasSlugAndTeamSlug;
        },
        defaultMessage(): string {
          return FAILED_EVENT_TYPE_IDENTIFICATION_ERROR_MESSAGE;
        },
      },
    });
  };
}

function RequireEmailOrPhone(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (object: any) {
    registerDecorator({
      name: "requireEmailOrPhone",
      target: object,
      propertyName: "attendee email or phone",
      options: validationOptions,
      constraints: [],
      validator: {
        validate(_: unknown, args: ValidationArguments) {
          const obj = args.object as CreateBookingAttendee;

          const hasPhoneNumber = !!obj.phoneNumber;
          const hasEmail = !!obj.email;
          return hasPhoneNumber || hasEmail;
        },
        defaultMessage(): string {
          return "Attendee must have at least one contact method (email or phone number)";
        },
      },
    });
  };
}

@RequireEmailOrPhone()
class CreateBookingAttendee {
  @ApiProperty({
    type: String,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "John Doe",
  })
  @IsString()
  name!: string;

  @ApiPropertyOptional({
    type: String,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "john.doe@example.com",
  })
  @IsOptional()
  @Validate((value: string) => !value || isEmail(value), {
    message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  email?: string;

  @ApiProperty({
    type: String,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "America/New_York",
  })
  @IsTimeZone()
  timeZone!: string;

  @ApiPropertyOptional({
    type: String,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "+919876543210",
  })
  @IsOptional()
  @Validate((value: string) => !value || isValidPhoneNumber(value), {
    message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  phoneNumber?: string;

  @ApiPropertyOptional({
    enum: BookingLanguage,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: BookingLanguage.it,
    default: BookingLanguage.en,
  })
  @IsEnum(BookingLanguage)
  @IsOptional()
  language?: BookingLanguageType;
}

class Routing {
  @ApiProperty({
    type: Number,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: 123,
  })
  @IsInt()
  responseId!: number;

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

@ApiExtraModels(
  BookingInputAddressLocation_2024_08_13,
  BookingInputAttendeeAddressLocation_2024_08_13,
  BookingInputAttendeeDefinedLocation_2024_08_13,
  BookingInputAttendeePhoneLocation_2024_08_13,
  BookingInputIntegrationLocation_2024_08_13,
  BookingInputLinkLocation_2024_08_13,
  BookingInputPhoneLocation_2024_08_13,
  BookingInputOrganizersDefaultAppLocation_2024_08_13,
  ValidateBookingLocation_2024_08_13
)
@RequireEventTypeIdentification()
export class CreateBookingInput_2024_08_13 {
  @ApiProperty({
    type: String,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "2024-08-13T09:00:00Z",
  })
  @IsDateString()
  start!: string;

  @ApiProperty({
    type: CreateBookingAttendee,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  @IsDefined()
  @ValidateNested()
  @Type(() => CreateBookingAttendee)
  attendee!: CreateBookingAttendee;

  @ApiPropertyOptional({
    type: Object,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: { customField: "customValue" },
    required: false,
  })
  @IsObject()
  @IsOptional()
  bookingFieldsResponses?: Record<string, unknown>;

  @ApiPropertyOptional({
    type: Number,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: 123,
  })
  @IsOptional()
  @IsInt()
  eventTypeId?: number;

  @ApiPropertyOptional({
    type: String,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "my-event-type",
  })
  @IsOptional()
  @IsString()
  eventTypeSlug?: string;

  @ApiPropertyOptional({
    type: String,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "john-doe",
  })
  @IsOptional()
  @IsString()
  username?: string;

  @ApiPropertyOptional({
    type: String,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "john-doe",
  })
  @IsOptional()
  @IsString()
  teamSlug?: string;

  @ApiPropertyOptional({
    type: String,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "acme-corp",
  })
  @IsOptional()
  @IsString()
  organizationSlug?: string;

  @ApiPropertyOptional({
    type: [String],
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: ["guest1@example.com", "guest2@example.com"],
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  guests?: string[];

  @ApiProperty({
    type: String,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "https://example.com/meeting",
    required: false,
    deprecated: true,
  })
  @IsUrl()
  @IsOptional()
  meetingUrl?: string;

  @IsOptional()
  @ValidateBookingLocation_2024_08_13()
  @ApiPropertyOptional({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    oneOf: [
      { $ref: getSchemaPath(BookingInputAddressLocation_2024_08_13) },
      { $ref: getSchemaPath(BookingInputAttendeeAddressLocation_2024_08_13) },
      { $ref: getSchemaPath(BookingInputAttendeeDefinedLocation_2024_08_13) },
      { $ref: getSchemaPath(BookingInputAttendeePhoneLocation_2024_08_13) },
      { $ref: getSchemaPath(BookingInputIntegrationLocation_2024_08_13) },
      { $ref: getSchemaPath(BookingInputLinkLocation_2024_08_13) },
      { $ref: getSchemaPath(BookingInputPhoneLocation_2024_08_13) },
      { $ref: getSchemaPath(BookingInputOrganizersDefaultAppLocation_2024_08_13) },
    ],
  })
  @Type(() => Object)
  // note(Lauris): string is for backwards compatability
  location?: BookingInputLocation_2024_08_13 | string;

  @ApiProperty({
    type: Object,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: { key: "value" },
    required: false,
  })
  @IsObject()
  @IsOptional()
  @ValidateMetadata({
    message:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  metadata?: Record<string, string>;

  @IsOptional()
  @IsInt()
  @Min(1)
  @ApiPropertyOptional({
    example: 30,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  lengthInMinutes?: number;

  @ApiPropertyOptional({
    type: Routing,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: {
      responseId: 123,
      teamMemberIds: [101, 102],
    },
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => Routing)
  routing?: Routing;
}

export class CreateInstantBookingInput_2024_08_13 extends CreateBookingInput_2024_08_13 {
  @ApiProperty({
    type: Boolean,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: true,
  })
  @IsBoolean()
  instant!: boolean;
}

export class CreateRecurringBookingInput_2024_08_13 extends CreateBookingInput_2024_08_13 {
  @ApiPropertyOptional({
    type: Number,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: 5,
    required: false,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  recurrenceCount?: number;
}
