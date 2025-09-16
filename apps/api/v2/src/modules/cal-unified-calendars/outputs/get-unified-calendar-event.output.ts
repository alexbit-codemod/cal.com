import { ApiProperty, ApiPropertyOptional, getSchemaPath } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEnum, IsISO8601, IsOptional, IsString, ValidateNested } from "class-validator";

import { CALENDARS, SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

export enum CalendarEventStatus {
  ACCEPTED = "accepted",
  PENDING = "pending",
  DECLINED = "declined",
  CANCELLED = "cancelled",
}

export enum CalendarEventResponseStatus {
  ACCEPTED = "accepted",
  PENDING = "pending",
  DECLINED = "declined",
  NEEDS_ACTION = "needsAction",
}

/**
 * Base interface for all calendar event locations
 */
export interface ICalendarEventLocation {
  type: string;
  url: string;
  label?: string;
}

export class CalendarEventVideoLocation implements ICalendarEventLocation {
  @IsString()
  @ApiProperty({
    enum: ["video"],
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  type = "video";

  @IsString()
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  url!: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    nullable: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  label?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    nullable: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  password?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    nullable: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  meetingCode?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    nullable: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  accessCode?: string;
}

export class CalendarEventPhoneLocation implements ICalendarEventLocation {
  @IsString()
  @ApiProperty({
    enum: ["phone"],
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  type = "phone";

  @IsString()
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  url!: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    nullable: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  label?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    nullable: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  pin?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    nullable: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  password?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    nullable: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  accessCode?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    nullable: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  regionCode?: string;
}

export class CalendarEventSipLocation implements ICalendarEventLocation {
  @IsString()
  @ApiProperty({
    enum: ["sip"],
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  type = "sip";

  @IsString()
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  url!: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    nullable: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  label?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    nullable: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  pin?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    nullable: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  password?: string;
}

export class CalendarEventMoreLocation implements ICalendarEventLocation {
  @IsString()
  @ApiProperty({
    enum: ["more"],
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  type = "more";

  @IsString()
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  url!: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    nullable: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  label?: string;
}

export type CalendarEventLocation =
  | CalendarEventVideoLocation
  | CalendarEventPhoneLocation
  | CalendarEventSipLocation
  | CalendarEventMoreLocation;

export class CalendarEventHost {
  @IsString()
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  email!: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    nullable: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  name?: string;

  @IsString()
  @IsOptional()
  @IsEnum(CalendarEventResponseStatus)
  @ApiPropertyOptional({
    enum: CalendarEventResponseStatus,
    nullable: true,
    enumName: "CalendarEventResponseStatus",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: CalendarEventResponseStatus.ACCEPTED,
  })
  responseStatus!: CalendarEventResponseStatus | null;
}

export class calendarEventOwner {
  @IsString()
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  email!: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    nullable: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  name?: string;
}

export class CalendarEventAttendee {
  @IsString()
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  email!: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  name?: string;

  @IsString()
  @IsOptional()
  @IsEnum(CalendarEventResponseStatus)
  @ApiPropertyOptional({
    enum: CalendarEventResponseStatus,
    nullable: true,
    enumName: "CalendarEventResponseStatus",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: CalendarEventResponseStatus.ACCEPTED,
  })
  responseStatus!: CalendarEventResponseStatus | null;

  @IsOptional()
  @ApiPropertyOptional({
    nullable: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  self?: boolean;

  @IsOptional()
  @ApiPropertyOptional({
    nullable: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  optional?: boolean;


  @IsOptional()
  @ApiPropertyOptional({
    nullable: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  host?: boolean;
}

export class DateTimeWithZone {
  @IsISO8601()
  time!: string;

  @IsString()
  timeZone!: string;
}

export class UnifiedCalendarEventOutput {
  @ValidateNested()
  @Type(() => DateTimeWithZone)
  @ApiProperty({
    type: "object",
    properties: {
      time: { type: "string", format: "date-time" },
      timeZone: { type: "string" },
    },
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  start!: DateTimeWithZone;

  @ValidateNested()
  @Type(() => DateTimeWithZone)
  @ApiProperty({
    type: "object",
    properties: {
      time: { type: "string", format: "date-time" },
      timeZone: { type: "string" },
    },
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  end!: DateTimeWithZone;

  @IsString()
  @ApiProperty({
    type: String,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  id!: string;

  @IsString()
  @ApiProperty({
    type: String,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  title!: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    nullable: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  description?: string | null;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Object, {
    discriminator: {
      property: "type",
      subTypes: [
        { value: CalendarEventVideoLocation, name: "video" },
        { value: CalendarEventPhoneLocation, name: "phone" },
        { value: CalendarEventSipLocation, name: "sip" },
        { value: CalendarEventMoreLocation, name: "more" },
      ],
    },
  })
  @ApiPropertyOptional({
    type: "array",
    items: {
      oneOf: [
        { $ref: getSchemaPath(CalendarEventVideoLocation) },
        { $ref: getSchemaPath(CalendarEventPhoneLocation) },
        { $ref: getSchemaPath(CalendarEventSipLocation) },
        { $ref: getSchemaPath(CalendarEventMoreLocation) },
      ],
      discriminator: {
        propertyName: "type",
      },
    },
    nullable: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  locations?: CalendarEventLocation[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CalendarEventAttendee)
  @ApiPropertyOptional({
    type: [CalendarEventAttendee],
    nullable: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  attendees?: CalendarEventAttendee[];

  @IsEnum(CalendarEventStatus)
  @IsOptional()
  @ApiPropertyOptional({
    enum: CalendarEventStatus,
    enumName: "CalendarEventStatus",
    nullable: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: CalendarEventStatus.ACCEPTED,
  })
  status?: CalendarEventStatus | null;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CalendarEventHost)
  @ApiPropertyOptional({
    type: [CalendarEventHost],
    nullable: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  hosts?: CalendarEventHost[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => calendarEventOwner)
  @ApiPropertyOptional({
    type: calendarEventOwner,
    nullable: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  calendarEventOwner?: calendarEventOwner;

  @IsEnum(CALENDARS)
  @ApiProperty({
    enum: CALENDARS,
    enumName: "CalendarSource",
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "google",
  })
  source!: (typeof CALENDARS)[number];
}

export class GetUnifiedCalendarEventOutput {
  @ApiProperty({ example: SUCCESS_STATUS, enum: [SUCCESS_STATUS, ERROR_STATUS] })
  @IsEnum([SUCCESS_STATUS, ERROR_STATUS])
  status!: typeof SUCCESS_STATUS | typeof ERROR_STATUS;

  @ValidateNested()
  @Type(() => UnifiedCalendarEventOutput)
  @ApiProperty({ type: UnifiedCalendarEventOutput })
  data!: UnifiedCalendarEventOutput;
}
