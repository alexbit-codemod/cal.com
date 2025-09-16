import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class DeclineBookingInput_2024_08_13 {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: "Host has to take another call",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  reason?: string;
}
