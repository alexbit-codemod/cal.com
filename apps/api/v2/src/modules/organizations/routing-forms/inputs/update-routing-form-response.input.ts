import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class UpdateRoutingFormResponseInput {
  @ApiPropertyOptional({ type: Object, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  @IsOptional()
  response?: Record<string, any>;
}
