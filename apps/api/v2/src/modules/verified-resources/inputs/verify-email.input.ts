import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsEmail, IsString } from "class-validator";

export class VerifyEmailInput {
  @ApiProperty({
    type: String,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "example@acme.com",
  })
  @IsEmail()
  @Expose()
  email!: string;

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
