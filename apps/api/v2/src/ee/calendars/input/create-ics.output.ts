import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { IsString, ValidateNested, IsEnum, IsInt, IsBoolean } from "class-validator";

import { ERROR_STATUS, SUCCESS_STATUS } from "@calcom/platform-constants";

export class CreateIcsFeedOutput {
  @IsInt()
  @Expose()
  @ApiProperty({ example: 1234567890, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  readonly id!: number;

  @IsString()
  @Expose()
  @ApiProperty({ example: "ics-feed_calendar", description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  readonly type!: string;

  @IsInt()
  @Expose()
  @ApiProperty({
    example: 1234567890,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    type: "integer",
  })
  readonly userId!: number | null;

  @IsInt()
  @Expose()
  @ApiProperty({
    example: 1234567890,
    nullable: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    type: "integer",
  })
  readonly teamId!: number | null;

  @IsString()
  @Expose()
  @ApiProperty({ example: "ics-feed", description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  readonly appId!: string | null;

  @IsBoolean()
  @Expose()
  @ApiProperty({ example: false, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  readonly invalid!: boolean | null;
}

export class CreateIcsFeedOutputResponseDto {
  @ApiProperty({ example: SUCCESS_STATUS, enum: [SUCCESS_STATUS, ERROR_STATUS] })
  @IsEnum([SUCCESS_STATUS, ERROR_STATUS])
  status!: typeof SUCCESS_STATUS | typeof ERROR_STATUS;

  @Expose()
  @ValidateNested()
  @Type(() => CreateIcsFeedOutput)
  data!: CreateIcsFeedOutput;
}
