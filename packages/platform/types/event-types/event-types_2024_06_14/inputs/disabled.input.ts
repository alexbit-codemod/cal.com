import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsOptional } from "class-validator";

export class Disabled_2024_06_14 {
  @IsOptional()
  @IsBoolean()
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: true,
    default: false,
  })
  disabled!: true;
}
