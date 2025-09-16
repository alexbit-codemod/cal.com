import { ApiExtraModels, ApiProperty, getSchemaPath } from "@nestjs/swagger";

// Base class with common properties
abstract class BasePrivateLinkOutput {
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    type: String,
    example: "abc123def456",
  })
  linkId!: string;

  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    type: Number,
    example: 123,
  })
  eventTypeId!: number;

  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    type: Boolean,
    example: false,
  })
  isExpired!: boolean;

  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    type: String,
    format: "uri",
    example: "https://cal.com/d/abc123def456/30min",
  })
  bookingUrl!: string;
}

// Time-based private link (expires at a specific date)
export class TimeBasedPrivateLinkOutput extends BasePrivateLinkOutput {
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    type: String,
    format: "date-time",
    example: "2025-12-31T23:59:59.000Z",
  })
  expiresAt!: Date;
}

// Usage-based private link (expires after N uses)
export class UsageBasedPrivateLinkOutput extends BasePrivateLinkOutput {
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    type: Number,
    example: 10,
  })
  maxUsageCount!: number;

  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    type: Number,
    example: 3,
  })
  usageCount!: number;
}

// Union type for either time-based or usage-based links
export type PrivateLinkOutput = TimeBasedPrivateLinkOutput | UsageBasedPrivateLinkOutput;

@ApiExtraModels(TimeBasedPrivateLinkOutput, UsageBasedPrivateLinkOutput)
export class CreatePrivateLinkOutput {
  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: "success" })
  status!: string;

  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    oneOf: [
      { $ref: getSchemaPath(TimeBasedPrivateLinkOutput) },
      { $ref: getSchemaPath(UsageBasedPrivateLinkOutput) },
    ],
  })
  data!: PrivateLinkOutput;
}

@ApiExtraModels(TimeBasedPrivateLinkOutput, UsageBasedPrivateLinkOutput)
export class GetPrivateLinksOutput {
  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: "success" })
  status!: string;

  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    type: "array",
    items: {
      oneOf: [
        { $ref: getSchemaPath(TimeBasedPrivateLinkOutput) },
        { $ref: getSchemaPath(UsageBasedPrivateLinkOutput) },
      ],
    },
  })
  data!: PrivateLinkOutput[];
}

@ApiExtraModels(TimeBasedPrivateLinkOutput, UsageBasedPrivateLinkOutput)
export class UpdatePrivateLinkOutput {
  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: "success" })
  status!: string;

  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    oneOf: [
      { $ref: getSchemaPath(TimeBasedPrivateLinkOutput) },
      { $ref: getSchemaPath(UsageBasedPrivateLinkOutput) },
    ],
  })
  data!: PrivateLinkOutput;
}

export class DeletePrivateLinkOutput {
  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: "success" })
  status!: string;

  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    type: "object",
    properties: {
      linkId: { type: "string", example: "abc123def456" },
      message: { type: "string", example: "Private link deleted successfully" },
    },
  })
  data!: {
    linkId: string;
    message: string;
  };
}
