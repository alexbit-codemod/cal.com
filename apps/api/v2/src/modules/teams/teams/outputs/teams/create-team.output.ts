import { ApiProperty, getSchemaPath } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsEnum, ValidateNested, IsString, IsUrl } from "class-validator";

import { ERROR_STATUS, SUCCESS_STATUS } from "@calcom/platform-constants";
import { TeamOutputDto } from "@calcom/platform-types";

class Output {
  @Expose()
  @IsString()
  message!: string;

  @Expose()
  @IsUrl()
  paymentLink!: string;

  @Expose()
  @ValidateNested()
  pendingTeam!: TeamOutputDto;
}

export class CreateTeamOutput {
  @ApiProperty({ example: SUCCESS_STATUS, enum: [SUCCESS_STATUS, ERROR_STATUS] })
  @IsEnum([SUCCESS_STATUS, ERROR_STATUS])
  status!: typeof SUCCESS_STATUS | typeof ERROR_STATUS;

  @ApiProperty({
    oneOf: [{ $ref: getSchemaPath(Output) }, { $ref: getSchemaPath(TeamOutputDto) }],
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  @Expose()
  @ValidateNested()
  data!: Output | TeamOutputDto;
}
