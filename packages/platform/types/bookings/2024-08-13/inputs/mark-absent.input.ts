import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, IsBoolean, IsEmail, IsArray, ArrayMinSize, ValidateNested } from "class-validator";

class MarkAbsentAttendee {
  @IsEmail()
  @ApiProperty()
  email!: string;

  @IsBoolean()
  @ApiProperty()
  absent!: boolean;
}

export class MarkAbsentBookingInput_2024_08_13 {
  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({ example: false, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  host?: boolean;

  @ArrayMinSize(1)
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MarkAbsentAttendee)
  @IsOptional()
  @ApiPropertyOptional({ type: [MarkAbsentAttendee] })
  attendees?: MarkAbsentAttendee[];
}
