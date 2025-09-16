import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsPhoneNumber } from "class-validator";

export class RequestPhoneVerificationInput {
  @ApiProperty({
    type: String,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "+372 5555 6666",
  })
  @IsPhoneNumber()
  @Expose()
  phone!: string;
}
