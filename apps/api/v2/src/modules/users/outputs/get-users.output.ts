import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { Expose } from "class-transformer";
import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsString,
  ValidateNested,
  IsArray,
  IsObject,
  IsOptional,
} from "class-validator";

export class GetUserOutput {
  @IsInt()
  @Expose()
  @ApiProperty({ type: Number, required: true, description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: 1 })
  id!: number;

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
  username!: string | null;

  @IsString()
  @Expose()
  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "John Doe",
  })
  name!: string | null;

  @IsString()
  @Expose()
  @ApiProperty({
    type: String,
    required: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "john@example.com",
  })
  email!: string;

  @IsDateString()
  @Expose()
  @ApiProperty({
    type: Date,
    nullable: true,
    required: false,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "2022-01-01T00:00:00Z",
  })
  emailVerified!: Date | null;

  @IsString()
  @Expose()
  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "I am a software developer",
  })
  bio!: string | null;

  @IsString()
  @Expose()
  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "https://example.com/avatar.jpg",
  })
  avatarUrl!: string | null;

  @IsString()
  @Expose()
  @ApiProperty({
    type: String,
    required: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "America/New_York",
  })
  timeZone!: string;

  @IsString()
  @Expose()
  @ApiProperty({
    type: String,
    required: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "Monday",
  })
  weekStart!: string;

  @IsString()
  @Expose()
  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "light",
  })
  appTheme!: string | null;

  @IsString()
  @Expose()
  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "default",
  })
  theme!: string | null;

  @IsInt()
  @Expose()
  @ApiProperty({
    type: Number,
    nullable: true,
    required: false,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: 1,
  })
  defaultScheduleId!: number | null;

  @IsString()
  @Expose()
  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "en-US",
  })
  locale!: string | null;

  @IsInt()
  @Expose()
  @ApiProperty({
    type: Number,
    nullable: true,
    required: false,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: 12,
  })
  timeFormat!: number | null;

  @IsBoolean()
  @Expose()
  @ApiProperty({
    type: Boolean,
    required: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: false,
  })
  hideBranding!: boolean;

  @IsString()
  @Expose()
  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "#ffffff",
  })
  brandColor!: string | null;

  @IsString()
  @Expose()
  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "#000000",
  })
  darkBrandColor!: string | null;

  @IsBoolean()
  @Expose()
  @ApiProperty({
    type: Boolean,
    nullable: true,
    required: false,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: true,
  })
  allowDynamicBooking!: boolean | null;

  @IsDateString()
  @Expose()
  @ApiProperty({
    type: Date,
    required: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "2022-01-01T00:00:00Z",
  })
  createdDate!: Date;

  @IsBoolean()
  @Expose()
  @ApiProperty({
    type: Boolean,
    nullable: true,
    required: false,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: true,
  })
  verified!: boolean | null;

  @IsInt()
  @Expose()
  @ApiProperty({
    type: Number,
    nullable: true,
    required: false,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: 1,
  })
  invitedTo!: number | null;

  @ApiPropertyOptional({
    type: Object,
    example: { key: "value" },
  })
  @IsObject()
  @IsOptional()
  @Expose()
  @Transform(
    // note(Lauris): added this transform because without it metadata is removed for some reason
    ({ obj }: { obj: { metadata: Record<string, unknown> | null | undefined } }) => {
      return obj.metadata || undefined;
    }
  )
  metadata?: Record<string, string | boolean | number>;
}

export class GetUsersOutput {
  @ValidateNested()
  @Type(() => GetUserOutput)
  @IsArray()
  @ApiProperty({
    type: [GetUserOutput],
    required: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: [{ id: 1, username: "john_doe", name: "John Doe", email: "john@example.com" }],
  })
  users!: GetUserOutput[];
}
