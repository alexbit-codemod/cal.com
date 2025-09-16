import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsInt, IsDateString, IsOptional } from "class-validator";

export class ReserveSlotInput_2024_09_04 {
  @IsInt()
  @ApiProperty({ example: 1, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  eventTypeId!: number;

  @IsDateString()
  @ApiProperty({
    example: "2024-09-04T09:00:00Z",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  slotStart!: string;

  @IsInt()
  @IsOptional()
  @ApiPropertyOptional({
    example: "30",
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  slotDuration?: number;

  @IsInt()
  @IsOptional()
  @ApiPropertyOptional({
    example: 5,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  reservationDuration?: number;
}
