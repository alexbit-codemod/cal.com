import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type, Transform } from "class-transformer";
import {
  ValidateNested,
  IsNumber,
  Min,
  Max,
  IsOptional,
  IsArray,
  IsEnum,
  IsBoolean,
  IsString,
} from "class-validator";

export enum Status_2024_04_15 {
  upcoming = "upcoming",
  recurring = "recurring",
  past = "past",
  cancelled = "cancelled",
  unconfirmed = "unconfirmed",
}

type BookingStatus = `${Status_2024_04_15}`;

class Filters {
  @IsOptional()
  @IsArray()
  @Type(() => Number)
  @ApiPropertyOptional({ type: [Number] })
  teamsIds?: number[];

  @IsOptional()
  @IsArray()
  @Type(() => Number)
  @ApiPropertyOptional({ type: [Number] })
  userIds?: number[];

  @IsEnum(Status_2024_04_15)
  @ApiProperty({ enum: Status_2024_04_15 })
  status!: BookingStatus;

  @IsOptional()
  @IsArray()
  @Type(() => Number)
  @ApiPropertyOptional({ type: [Number] })
  eventTypeIds?: number[];
}

export class GetBookingsInput_2024_04_15 {
  @ValidateNested({ each: true })
  @Type(() => Filters)
  @ApiProperty({ type: Filters })
  filters!: Filters;

  @Transform(({ value }: { value: string }) => value && parseInt(value))
  @IsNumber()
  @Min(1)
  @Max(100)
  @IsOptional()
  @ApiPropertyOptional({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: 50 })
  limit?: number;

  @Transform(({ value }: { value: string }) => value && parseInt(value))
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: 10, nullable: true })
  cursor?: number | null;
}

export class CancelBookingInput_2024_04_15 {
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: 123 })
  id?: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  uid?: string;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({
    example: true,
  })
  allRemainingBookings?: boolean;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: String,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "Scheduling conflict",
  })
  cancellationReason?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  seatReferenceUid?: string;
}
