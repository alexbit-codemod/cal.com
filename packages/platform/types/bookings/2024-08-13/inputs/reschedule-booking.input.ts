import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsDateString, IsOptional, IsString, Validate, isEmail } from "class-validator";

export const RESCHEDULED_BY_DOCS = `Email of the person who is rescheduling the booking - only needed when rescheduling a booking that requires a confirmation.
If event type owner email is provided then rescheduled booking will be automatically confirmed. If attendee email or no email is passed then the event type
owner will have to confirm the rescheduled booking.`;

export class RescheduleBookingInput_2024_08_13 {
  @IsDateString()
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "2024-08-13T10:00:00Z",
  })
  start!: string;

  @IsOptional()
  @ApiPropertyOptional({ description: RESCHEDULED_BY_DOCS })
  @Validate((value: string) => !value || isEmail(value), {
    message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  rescheduledBy?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: "User requested reschedule",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  reschedulingReason?: string;
}

export class RescheduleSeatedBookingInput_2024_08_13 {
  @IsDateString()
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "2024-08-13T10:00:00Z",
  })
  start!: string;

  @IsOptional()
  @ApiPropertyOptional({ description: RESCHEDULED_BY_DOCS })
  @Validate((value: string) => !value || isEmail(value), {
    message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  rescheduledBy?: string;

  @ApiProperty({
    type: String,
    example: "3be561a9-31f1-4b8e-aefc-9d9a085f0dd1",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  @IsString()
  seatUid!: string;
}
