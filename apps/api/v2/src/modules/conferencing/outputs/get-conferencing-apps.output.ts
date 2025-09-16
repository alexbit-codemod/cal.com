import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { IsString, ValidateNested, IsEnum, IsNumber, IsOptional, IsBoolean } from "class-validator";

import { ERROR_STATUS, GOOGLE_MEET_TYPE, SUCCESS_STATUS } from "@calcom/platform-constants";

export class ConferencingAppsOutputDto {
  @Expose()
  @IsNumber()
  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  id!: number;

  @ApiProperty({ example: GOOGLE_MEET_TYPE, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  @Expose()
  @IsString()
  type!: string;

  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  @Expose()
  @IsNumber()
  userId!: number;

  @ApiPropertyOptional({
    example: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    nullable: true,
  })
  @Expose()
  @IsBoolean()
  @IsOptional()
  invalid?: boolean | null;
}

export class ConferencingAppsOutputResponseDto {
  @ApiProperty({ type: String, enum: [SUCCESS_STATUS, ERROR_STATUS] })
  @IsEnum([SUCCESS_STATUS, ERROR_STATUS])
  status!: typeof SUCCESS_STATUS | typeof ERROR_STATUS;

  @Expose()
  @ValidateNested({ each: true })
  @Type(() => ConferencingAppsOutputDto)
  @ApiProperty({ type: [ConferencingAppsOutputDto] })
  data!: ConferencingAppsOutputDto[];
}

export class ConferencingAppOutputResponseDto {
  @ApiProperty({ type: String, enum: [SUCCESS_STATUS, ERROR_STATUS] })
  @IsEnum([SUCCESS_STATUS, ERROR_STATUS])
  status!: typeof SUCCESS_STATUS | typeof ERROR_STATUS;

  @Expose()
  @ValidateNested()
  @Type(() => ConferencingAppsOutputDto)
  @ApiProperty({ type: ConferencingAppsOutputDto })
  data!: ConferencingAppsOutputDto;
}

export class DisconnectConferencingAppOutputResponseDto {
  @ApiProperty({ example: SUCCESS_STATUS, enum: [SUCCESS_STATUS, ERROR_STATUS] })
  @IsEnum([SUCCESS_STATUS, ERROR_STATUS])
  status!: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
}
