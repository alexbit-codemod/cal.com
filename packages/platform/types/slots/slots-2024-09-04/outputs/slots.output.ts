import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsInt, IsString } from "class-validator";

export class Slot_2024_09_04 {
  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  @IsDateString()
  start!: string;
}

export class SeatedSlot_2024_09_04 extends Slot_2024_09_04 {
  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  @IsInt()
  seatsBooked!: number;

  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  @IsInt()
  seatsRemaining!: number;

  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  @IsInt()
  seatsTotal!: number;

  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  @IsString()
  bookingUid?: string;
}

export class SlotsOutput_2024_09_04 {
  [key: string]: (Slot_2024_09_04 | SeatedSlot_2024_09_04)[];
}

export class RangeSlot_2024_09_04 extends Slot_2024_09_04 {
  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  @IsDateString()
  end!: string;
}

export class SeatedRangeSlot_2024_09_04 extends RangeSlot_2024_09_04 {
  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  @IsInt()
  seatsBooked!: number;

  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  @IsInt()
  seatsRemaining!: number;

  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  @IsInt()
  seatsTotal!: number;

  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  @IsString()
  bookingUid?: string;
}
export class RangeSlotsOutput_2024_09_04 {
  [key: string]: (RangeSlot_2024_09_04 | SeatedRangeSlot_2024_09_04)[];
}
