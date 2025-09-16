import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsInt } from "class-validator";

export class DeleteCalendarCredentialsInputBodyDto {
  @IsInt()
  @Expose()
  @ApiProperty({
    example: 10,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    type: "integer",
    required: true,
  })
  readonly id!: number;
}
