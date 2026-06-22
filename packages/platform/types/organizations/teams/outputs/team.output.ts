import { ApiProperty as DocsProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

import { TeamOutputDto } from "../../../teams/outputs/team.output";

export class OrgTeamOutputDto extends TeamOutputDto {
  @IsInt()
  @IsOptional()
  @Expose()
  @ApiPropertyOptional()
  readonly parentId?: number;
}
