import { GetUserOutput } from "@/modules/users/outputs/get-users.output";
import { ApiProperty } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { IsEnum, IsInt, IsString, ValidateNested, IsArray } from "class-validator";

import { ERROR_STATUS } from "@calcom/platform-constants";
import { SUCCESS_STATUS } from "@calcom/platform-constants";

export class ProfileOutput {
  @IsInt()
  @Expose()
  @ApiProperty({ type: Number, required: true, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: 1 })
  id!: number;

  @IsInt()
  @Expose()
  @ApiProperty({
    type: Number,
    required: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: 1,
  })
  organizationId!: number;

  @IsInt()
  @Expose()
  @ApiProperty({ type: Number, required: true, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: 1 })
  userId!: number;

  @IsString()
  @Expose()
  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "john_doe",
  })
  username!: string;
}
export class GetOrgUsersWithProfileOutput extends GetUserOutput {
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  @Expose()
  @ValidateNested()
  @IsArray()
  @Type(() => ProfileOutput)
  profile!: ProfileOutput;
}

export class GetOrganizationUsersResponseDTO {
  @ApiProperty({ example: SUCCESS_STATUS, enum: [SUCCESS_STATUS, ERROR_STATUS] })
  @IsEnum([SUCCESS_STATUS, ERROR_STATUS])
  status!: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data!: GetOrgUsersWithProfileOutput[];
}

export class GetOrganizationUserOutput {
  @ApiProperty({ example: SUCCESS_STATUS, enum: [SUCCESS_STATUS, ERROR_STATUS] })
  @IsEnum([SUCCESS_STATUS, ERROR_STATUS])
  status!: typeof SUCCESS_STATUS | typeof ERROR_STATUS;
  data!: GetOrgUsersWithProfileOutput;
}
