import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class DestinationCalendar_2024_06_14 {
  @ApiProperty({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  @IsString()
  integration!: string;

  @ApiProperty({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  @IsString()
  externalId!: string;
}
