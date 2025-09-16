import { ApiProperty as DocsProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class RefreshTokenInput {
  @IsString()
  @DocsProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  refreshToken!: string;
}
