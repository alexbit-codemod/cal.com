import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsOptional, Min } from "class-validator";

export class RefreshApiKeyInput {
  @IsOptional()
  @IsInt()
  @Min(1)
  @ApiPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: 60,
    default: 30,
    minimum: 1,
  })
  readonly apiKeyDaysValid?: number;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: true })
  readonly apiKeyNeverExpires?: boolean;
}
