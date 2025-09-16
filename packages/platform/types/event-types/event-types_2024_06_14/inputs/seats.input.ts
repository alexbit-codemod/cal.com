import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsOptional, Min, Max } from "class-validator";

import { MAX_SEATS_PER_TIME_SLOT } from "@calcom/platform-constants";

// Class representing the seat options
export class Seats_2024_06_14 {
  @IsInt()
  @Min(1)
  @Max(MAX_SEATS_PER_TIME_SLOT)
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: 4,
  })
  seatsPerTimeSlot!: number;

  @IsBoolean()
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: true,
  })
  showAttendeeInfo!: boolean;

  @IsBoolean()
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: true,
  })
  showAvailabilityCount!: boolean;

  @IsOptional()
  @IsBoolean()
  disabled?: boolean = false;
}

export type SeatOptionsTransformedSchema = {
  seatsPerTimeSlot: number;
  seatsShowAttendees: boolean;
  seatsShowAvailabilityCount: boolean;
};

export type SeatOptionsDisabledSchema = {
  seatsPerTimeSlot: null;
};
