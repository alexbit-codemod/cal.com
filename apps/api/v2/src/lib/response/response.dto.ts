import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class BaseApiResponseDto<T> {
  @ApiProperty({ example: "success" })
  @IsString()
  @IsNotEmpty()
  status: string;

  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  data: T;

  constructor(status: string, data: T) {
    this.status = status;
    this.data = data;
  }
}

export class OAuthClientDto {
  @ApiProperty({ example: "abc123" })
  @IsString()
  clientId!: string;

  @ApiProperty({ example: "secretKey123" })
  @IsString()
  clientSecret!: string;
}
