import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsOptional } from "class-validator";

export const BookingReferences = [
  "google_calendar",
  "office365_calendar",
  "daily_video",
  "google_video",
  "office365_video",
  "zoom_video",
] as const;

export class BookingReferencesFilterInput_2024_08_13 {
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    required: false,
    enum: BookingReferences,
    example: "google_calendar",
  })
  @IsOptional()
  @IsIn(BookingReferences)
  type?: (typeof BookingReferences)[number];
}
