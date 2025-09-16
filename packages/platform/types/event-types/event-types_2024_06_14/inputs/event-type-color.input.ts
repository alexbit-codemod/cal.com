import { ApiProperty } from "@nestjs/swagger";
import { IsHexColor, IsString } from "class-validator";

// Class representing the event type colors
export class EventTypeColor_2024_06_14 {
  @IsHexColor()
  @IsString()
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "#292929",
  })
  lightThemeHex!: string;

  @IsHexColor()
  @IsString()
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "#fafafa",
  })
  darkThemeHex!: string;
}

export type EventTypeColorsTransformedSchema = {
  darkEventTypeColor: string;
  lightEventTypeColor: string;
};
