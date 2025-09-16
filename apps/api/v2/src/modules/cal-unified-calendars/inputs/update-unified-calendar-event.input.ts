import { ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsISO8601, IsOptional, IsString, ValidateNested, IsEnum, IsArray } from "class-validator";

import { CalendarEventStatus, CalendarEventResponseStatus } from "../outputs/get-unified-calendar-event.output";

export class UpdateCalendarEventAttendee {
  @IsString()
  @ApiPropertyOptional({
    type: String,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  email!: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  name?: string;

  @IsEnum(CalendarEventResponseStatus)
  @IsOptional()
  @ApiPropertyOptional({
    enum: CalendarEventResponseStatus,
    enumName: "CalendarEventResponseStatus",
    nullable: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  responseStatus?: CalendarEventResponseStatus | null;

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

export class UpdateDateTimeWithZone {
  @IsISO8601()
  @IsOptional()
  @ApiPropertyOptional({ type: "string", format: "date-time" })
  time?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  timeZone?: string;
}

export class UpdateUnifiedCalendarEventInput {
  @ValidateNested()
  @Type(() => UpdateDateTimeWithZone)
  @IsOptional()
  @ApiPropertyOptional({
    type: "object",
    properties: {
      time: { type: "string", format: "date-time" },
      timeZone: { type: "string" },
    },
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  start?: UpdateDateTimeWithZone;

  @ValidateNested()
  @Type(() => UpdateDateTimeWithZone)
  @IsOptional()
  @ApiPropertyOptional({
    type: "object",
    properties: {
      time: { type: "string", format: "date-time" },
      timeZone: { type: "string" },
    },
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  end?: UpdateDateTimeWithZone;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  title?: string;

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
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateCalendarEventAttendee)
  @ApiPropertyOptional({
    type: [UpdateCalendarEventAttendee],
    nullable: true,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  attendees?: UpdateCalendarEventAttendee[];

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
}
