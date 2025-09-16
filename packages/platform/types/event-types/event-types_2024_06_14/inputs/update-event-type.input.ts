import {
  ApiProperty as DocsProperty,
  ApiPropertyOptional as DocsPropertyOptional,
  getSchemaPath,
  ApiExtraModels,
} from "@nestjs/swagger";
import { Type, Transform } from "class-transformer";
import {
  IsString,
  IsInt,
  IsBoolean,
  IsOptional,
  Min,
  ValidateNested,
  IsArray,
  ArrayNotEmpty,
  ArrayUnique,
  IsUrl,
} from "class-validator";

import { BookerLayouts_2024_06_14 } from "./booker-layouts.input";
import type { InputBookingField_2024_06_14 } from "./booking-fields.input";
import {
  AddressFieldInput_2024_06_14,
  BooleanFieldInput_2024_06_14,
  CheckboxGroupFieldInput_2024_06_14,
  EmailDefaultFieldInput_2024_06_14,
  GuestsDefaultFieldInput_2024_06_14,
  MultiEmailFieldInput_2024_06_14,
  MultiSelectFieldInput_2024_06_14,
  NameDefaultFieldInput_2024_06_14,
  NotesDefaultFieldInput_2024_06_14,
  NumberFieldInput_2024_06_14,
  PhoneFieldInput_2024_06_14,
  RadioGroupFieldInput_2024_06_14,
  RescheduleReasonDefaultFieldInput_2024_06_14,
  SelectFieldInput_2024_06_14,
  TextAreaFieldInput_2024_06_14,
  TextFieldInput_2024_06_14,
  TitleDefaultFieldInput_2024_06_14,
  LocationDefaultFieldInput_2024_06_14,
  ValidateInputBookingFields_2024_06_14,
} from "./booking-fields.input";
import type { BookingLimitsCount_2024_06_14 } from "./booking-limits-count.input";
import { BaseBookingLimitsCount_2024_06_14, ValidateBookingLimitsCount } from "./booking-limits-count.input";
import type { BookingLimitsDuration_2024_06_14 } from "./booking-limits-duration.input";
import {
  BaseBookingLimitsDuration_2024_06_14,
  ValidateBookingLimistsDuration,
} from "./booking-limits-duration.input";
import {
  BusinessDaysWindow_2024_06_14,
  CalendarDaysWindow_2024_06_14,
  RangeWindow_2024_06_14,
  ValidateBookingWindow,
  type BookingWindow_2024_06_14,
} from "./booking-window.input";
import type { ConfirmationPolicy_2024_06_14 } from "./confirmation-policy.input";
import { BaseConfirmationPolicy_2024_06_14, ValidateConfirmationPolicy } from "./confirmation-policy.input";
import {
  CREATE_EVENT_DESCRIPTION_EXAMPLE,
  CREATE_EVENT_LENGTH_EXAMPLE,
  CREATE_EVENT_SLUG_EXAMPLE,
  CREATE_EVENT_TITLE_EXAMPLE,
  Host,
  CalVideoSettings,
} from "./create-event-type.input";
import { DestinationCalendar_2024_06_14 } from "./destination-calendar.input";
import { Disabled_2024_06_14 } from "./disabled.input";
import { EventTypeColor_2024_06_14 } from "./event-type-color.input";
import {
  InputAddressLocation_2024_06_14,
  InputAttendeeAddressLocation_2024_06_14,
  InputAttendeeDefinedLocation_2024_06_14,
  InputAttendeePhoneLocation_2024_06_14,
  InputIntegrationLocation_2024_06_14,
  InputLinkLocation_2024_06_14,
  InputOrganizersDefaultApp_2024_06_14,
  InputPhoneLocation_2024_06_14,
  ValidateLocations_2024_06_14,
  ValidateTeamLocations_2024_06_14,
} from "./locations.input";
import type { InputLocation_2024_06_14, InputTeamLocation_2024_06_14 } from "./locations.input";
import { Recurrence_2024_06_14 } from "./recurrence.input";
import { Seats_2024_06_14 } from "./seats.input";

@ApiExtraModels(
  InputAddressLocation_2024_06_14,
  InputLinkLocation_2024_06_14,
  InputIntegrationLocation_2024_06_14,
  InputPhoneLocation_2024_06_14,
  PhoneFieldInput_2024_06_14,
  AddressFieldInput_2024_06_14,
  TextFieldInput_2024_06_14,
  NumberFieldInput_2024_06_14,
  TextAreaFieldInput_2024_06_14,
  SelectFieldInput_2024_06_14,
  MultiSelectFieldInput_2024_06_14,
  MultiEmailFieldInput_2024_06_14,
  CheckboxGroupFieldInput_2024_06_14,
  RadioGroupFieldInput_2024_06_14,
  BooleanFieldInput_2024_06_14,
  BusinessDaysWindow_2024_06_14,
  CalendarDaysWindow_2024_06_14,
  RangeWindow_2024_06_14,
  BaseBookingLimitsCount_2024_06_14,
  Disabled_2024_06_14,
  BaseBookingLimitsDuration_2024_06_14,
  Recurrence_2024_06_14,
  BaseConfirmationPolicy_2024_06_14,
  Seats_2024_06_14,
  InputAttendeeAddressLocation_2024_06_14,
  InputAttendeePhoneLocation_2024_06_14,
  InputAttendeeDefinedLocation_2024_06_14,
  NameDefaultFieldInput_2024_06_14,
  EmailDefaultFieldInput_2024_06_14,
  TitleDefaultFieldInput_2024_06_14,
  LocationDefaultFieldInput_2024_06_14,
  NotesDefaultFieldInput_2024_06_14,
  GuestsDefaultFieldInput_2024_06_14,
  RescheduleReasonDefaultFieldInput_2024_06_14
)
class BaseUpdateEventTypeInput {
  @IsOptional()
  @IsInt()
  @Min(1)
  @DocsPropertyOptional({ example: CREATE_EVENT_LENGTH_EXAMPLE })
  lengthInMinutes?: number;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @IsInt({ each: true })
  @Min(1, { each: true })
  @DocsPropertyOptional({
    example: [15, 30, 60],
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  lengthInMinutesOptions?: number[];

  @IsOptional()
  @IsString()
  @DocsPropertyOptional({ example: CREATE_EVENT_TITLE_EXAMPLE })
  title?: string;

  @IsOptional()
  @IsString()
  @DocsPropertyOptional({ example: CREATE_EVENT_SLUG_EXAMPLE })
  slug?: string;

  @IsOptional()
  @IsString()
  @DocsPropertyOptional({ example: CREATE_EVENT_DESCRIPTION_EXAMPLE })
  description?: string;

  @IsOptional()
  @ValidateInputBookingFields_2024_06_14()
  @DocsPropertyOptional({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    oneOf: [
      { $ref: getSchemaPath(NameDefaultFieldInput_2024_06_14) },
      { $ref: getSchemaPath(EmailDefaultFieldInput_2024_06_14) },
      { $ref: getSchemaPath(TitleDefaultFieldInput_2024_06_14) },
      { $ref: getSchemaPath(LocationDefaultFieldInput_2024_06_14) },
      { $ref: getSchemaPath(NotesDefaultFieldInput_2024_06_14) },
      { $ref: getSchemaPath(GuestsDefaultFieldInput_2024_06_14) },
      { $ref: getSchemaPath(RescheduleReasonDefaultFieldInput_2024_06_14) },
      { $ref: getSchemaPath(PhoneFieldInput_2024_06_14) },
      { $ref: getSchemaPath(AddressFieldInput_2024_06_14) },
      { $ref: getSchemaPath(TextFieldInput_2024_06_14) },
      { $ref: getSchemaPath(NumberFieldInput_2024_06_14) },
      { $ref: getSchemaPath(TextAreaFieldInput_2024_06_14) },
      { $ref: getSchemaPath(SelectFieldInput_2024_06_14) },
      { $ref: getSchemaPath(MultiSelectFieldInput_2024_06_14) },
      { $ref: getSchemaPath(MultiEmailFieldInput_2024_06_14) },
      { $ref: getSchemaPath(CheckboxGroupFieldInput_2024_06_14) },
      { $ref: getSchemaPath(RadioGroupFieldInput_2024_06_14) },
      { $ref: getSchemaPath(BooleanFieldInput_2024_06_14) },
    ],
    type: "array",
  })
  @Type(() => Object)
  bookingFields?: InputBookingField_2024_06_14[];

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  disableGuests?: boolean;

  @IsInt()
  @IsOptional()
  @DocsPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  slotInterval?: number;

  @IsInt()
  @Min(0)
  @IsOptional()
  @DocsPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  minimumBookingNotice?: number;

  @IsInt()
  @IsOptional()
  @DocsPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  beforeEventBuffer?: number;

  @IsInt()
  @IsOptional()
  @DocsPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  afterEventBuffer?: number;

  @IsInt()
  @IsOptional()
  @DocsPropertyOptional({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  scheduleId?: number;

  @IsOptional()
  @ValidateBookingLimitsCount()
  @DocsPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    oneOf: [
      { $ref: getSchemaPath(BaseBookingLimitsCount_2024_06_14) },
      { $ref: getSchemaPath(Disabled_2024_06_14) },
    ],
  })
  @Type(() => Object)
  bookingLimitsCount?: BookingLimitsCount_2024_06_14;

  @IsOptional()
  @IsBoolean()
  @DocsPropertyOptional({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  onlyShowFirstAvailableSlot?: boolean;

  @IsOptional()
  @ValidateBookingLimistsDuration()
  @DocsPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    oneOf: [
      { $ref: getSchemaPath(BaseBookingLimitsDuration_2024_06_14) },
      { $ref: getSchemaPath(Disabled_2024_06_14) },
    ],
  })
  @Type(() => Object)
  bookingLimitsDuration?: BookingLimitsDuration_2024_06_14;

  @IsOptional()
  @ValidateBookingWindow()
  @DocsPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    oneOf: [
      { $ref: getSchemaPath(BusinessDaysWindow_2024_06_14) },
      { $ref: getSchemaPath(CalendarDaysWindow_2024_06_14) },
      { $ref: getSchemaPath(RangeWindow_2024_06_14) },
      { $ref: getSchemaPath(Disabled_2024_06_14) },
    ],
  })
  @Type(() => Object)
  bookingWindow?: BookingWindow_2024_06_14;

  @IsOptional()
  @IsInt()
  @Min(0)
  @DocsPropertyOptional({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  offsetStart?: number;

  @IsOptional()
  @DocsPropertyOptional({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  @Type(() => BookerLayouts_2024_06_14)
  @ValidateNested()
  bookerLayouts?: BookerLayouts_2024_06_14;

  @IsOptional()
  @ValidateConfirmationPolicy()
  @DocsPropertyOptional({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    oneOf: [
      { $ref: getSchemaPath(BaseConfirmationPolicy_2024_06_14) },
      { $ref: getSchemaPath(Disabled_2024_06_14) },
    ],
  })
  @Type(() => Object)
  confirmationPolicy?: ConfirmationPolicy_2024_06_14;

  @ValidateNested()
  @IsOptional()
  @Transform(({ value }) => {
    if (value && typeof value === "object") {
      if ("interval" in value) {
        return Object.assign(new Recurrence_2024_06_14(), value);
      } else if ("disabled" in value) {
        return Object.assign(new Disabled_2024_06_14(), value);
      }
    }
    return value;
  })
  @ValidateNested()
  @DocsPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    oneOf: [{ $ref: getSchemaPath(Recurrence_2024_06_14) }, { $ref: getSchemaPath(Disabled_2024_06_14) }],
  })
  @Type(() => Object)
  recurrence?: Recurrence_2024_06_14 | Disabled_2024_06_14;

  @IsOptional()
  @IsBoolean()
  @DocsPropertyOptional()
  requiresBookerEmailVerification?: boolean;

  @IsOptional()
  @IsBoolean()
  @DocsPropertyOptional()
  hideCalendarNotes?: boolean;

  @IsOptional()
  @IsBoolean()
  @DocsPropertyOptional()
  lockTimeZoneToggleOnBookingPage?: boolean;

  @IsOptional()
  @DocsPropertyOptional()
  @Type(() => EventTypeColor_2024_06_14)
  color?: EventTypeColor_2024_06_14;

  @IsOptional()
  @Transform(({ value }) => {
    if (value && typeof value === "object") {
      if ("seatsPerTimeSlot" in value) {
        return Object.assign(new Seats_2024_06_14(), value);
      } else if ("disabled" in value) {
        return Object.assign(new Disabled_2024_06_14(), value);
      }
    }
    return value;
  })
  @ValidateNested()
  @DocsPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    oneOf: [{ $ref: getSchemaPath(Seats_2024_06_14) }, { $ref: getSchemaPath(Disabled_2024_06_14) }],
  })
  @Type(() => Object)
  seats?: Seats_2024_06_14 | Disabled_2024_06_14;

  @IsOptional()
  @IsString()
  @DocsPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "{Event type title} between {Organiser} and {Scheduler}",
  })
  customName?: string;

  @IsOptional()
  @DocsPropertyOptional()
  @Type(() => DestinationCalendar_2024_06_14)
  destinationCalendar?: DestinationCalendar_2024_06_14;

  @IsOptional()
  @IsBoolean()
  @DocsPropertyOptional()
  useDestinationCalendarEmail?: boolean;

  @IsOptional()
  @IsBoolean()
  @DocsPropertyOptional()
  hideCalendarEventDetails?: boolean;

  @IsOptional()
  @IsUrl()
  @DocsPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "https://masterchief.com/argentina/flan/video/9129412",
  })
  successRedirectUrl?: string;

  @IsOptional()
  @IsBoolean()
  @DocsPropertyOptional({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  hideOrganizerEmail?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => CalVideoSettings)
  @DocsPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    type: CalVideoSettings,
  })
  calVideoSettings?: CalVideoSettings;

  @IsOptional()
  @IsBoolean()
  @DocsPropertyOptional()
  hidden?: boolean;
}
export class UpdateEventTypeInput_2024_06_14 extends BaseUpdateEventTypeInput {
  @IsOptional()
  @ValidateLocations_2024_06_14()
  @DocsPropertyOptional({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    oneOf: [
      { $ref: getSchemaPath(InputAddressLocation_2024_06_14) },
      { $ref: getSchemaPath(InputLinkLocation_2024_06_14) },
      { $ref: getSchemaPath(InputIntegrationLocation_2024_06_14) },
      { $ref: getSchemaPath(InputPhoneLocation_2024_06_14) },
      { $ref: getSchemaPath(InputAttendeeAddressLocation_2024_06_14) },
      { $ref: getSchemaPath(InputAttendeePhoneLocation_2024_06_14) },
      { $ref: getSchemaPath(InputAttendeeDefinedLocation_2024_06_14) },
    ],
    type: "array",
  })
  @Type(() => Object)
  locations?: InputLocation_2024_06_14[];
}

export class UpdateTeamEventTypeInput_2024_06_14 extends BaseUpdateEventTypeInput {
  @ValidateNested({ each: true })
  @Type(() => Host)
  @IsArray()
  @IsOptional()
  @DocsPropertyOptional({ type: [Host] })
  hosts?: Host[];

  @IsOptional()
  @IsBoolean()
  @DocsProperty()
  @DocsPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  assignAllTeamMembers?: boolean;

  @IsOptional()
  @ValidateTeamLocations_2024_06_14()
  @DocsPropertyOptional({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    oneOf: [
      { $ref: getSchemaPath(InputAddressLocation_2024_06_14) },
      { $ref: getSchemaPath(InputLinkLocation_2024_06_14) },
      { $ref: getSchemaPath(InputIntegrationLocation_2024_06_14) },
      { $ref: getSchemaPath(InputPhoneLocation_2024_06_14) },
      { $ref: getSchemaPath(InputAttendeeAddressLocation_2024_06_14) },
      { $ref: getSchemaPath(InputAttendeePhoneLocation_2024_06_14) },
      { $ref: getSchemaPath(InputAttendeeDefinedLocation_2024_06_14) },
      { $ref: getSchemaPath(InputOrganizersDefaultApp_2024_06_14) },
    ],
    type: "array",
  })
  @Type(() => Object)
  locations?: InputTeamLocation_2024_06_14[];
}
