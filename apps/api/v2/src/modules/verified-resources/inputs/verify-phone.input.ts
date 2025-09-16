import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsEmail, IsPhoneNumber, IsString } from "class-validator";

export class VerifyPhoneInput {
  @ApiProperty({
    type: String,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "+37255556666",
  })
  @IsPhoneNumber()
  @Expose()
  phone!: string;

  @ApiProperty({
    type: String,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "1ABG2C",
  })
  @Expose()
  @IsString()
  code!: string;
}
