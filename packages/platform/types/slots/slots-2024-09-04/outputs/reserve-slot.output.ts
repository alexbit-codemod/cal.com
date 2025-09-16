import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsDateString, IsInt, IsString } from "class-validator";

export class ReserveSlotOutput_2024_09_04 {
  @IsInt()
  @ApiProperty({ example: 1, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  @Expose()
  eventTypeId!: number;

  @IsDateString()
  @ApiProperty({
    example: "2024-09-04T09:00:00Z",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  @Expose()
  slotStart!: string;

  @IsDateString()
  @ApiProperty({
    example: "2024-09-04T10:00:00Z",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  @Expose()
  slotEnd!: string;

  @IsInt()
  @ApiProperty({
    example: "30",
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  @Expose()
  slotDuration!: number;

  @IsString()
  @ApiProperty({
    example: "e84be5a3-4696-49e3-acc7-b2f3999c3b94",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  @Expose()
  reservationUid!: string;

  @IsInt()
  @ApiProperty({
    example: 5,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  @Expose()
  reservationDuration!: number;

  @IsDateString()
  @ApiProperty({
    example: "2023-09-04T10:00:00Z",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  @Expose()
  reservationUntil!: string;
}
