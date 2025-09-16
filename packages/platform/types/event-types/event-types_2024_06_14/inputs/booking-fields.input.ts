import { BadRequestException } from "@nestjs/common";
import { ApiProperty as DocsProperty, ApiPropertyOptional as DocsPropertyOptional } from "@nestjs/swagger";
import { plainToInstance } from "class-transformer";
import { IsString, IsBoolean, IsArray, IsIn, IsOptional } from "class-validator";
import type { ValidationOptions, ValidatorConstraintInterface } from "class-validator";
import { registerDecorator, validate, ValidatorConstraint } from "class-validator";

const inputBookingFieldTypes = [
  "name",
  "email",
  "phone",
  "address",
  "text",
  "number",
  "textarea",
  "select",
  "multiselect",
  "multiemail",
  "checkbox",
  "radio",
  "boolean",
  "url",
] as const;

const inputBookingFieldSlugs = ["title", "location", "notes", "guests", "rescheduleReason"] as const;

export class NameDefaultFieldInput_2024_06_14 {
  @IsIn(inputBookingFieldTypes)
  @DocsProperty({
    example: "name",
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  type!: "name";

  @IsString()
  @IsOptional()
  @DocsProperty()
  label?: string;

  @IsString()
  @IsOptional()
  @DocsProperty()
  placeholder?: string;

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional({
    type: Boolean,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  disableOnPrefill?: boolean;
}

export class SplitNameDefaultFieldInput_2024_06_14 {
  @IsIn(inputBookingFieldTypes)
  @DocsProperty({
    example: "splitName",
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  type!: "splitName";

  @IsString()
  @IsOptional()
  @DocsProperty()
  firstNameLabel?: string;

  @IsString()
  @IsOptional()
  @DocsProperty()
  firstNamePlaceholder?: string;

  @IsString()
  @IsOptional()
  @DocsProperty()
  lastNameLabel?: string;

  @IsString()
  @IsOptional()
  @DocsProperty()
  lastNamePlaceholder?: string;

  @IsBoolean()
  @IsOptional()
  @DocsProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  lastNameRequired?: boolean;

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional({
    type: Boolean,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  disableOnPrefill?: boolean;
}

export class EmailDefaultFieldInput_2024_06_14 {
  @IsIn(inputBookingFieldTypes)
  @DocsProperty({
    example: "email",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  type!: "email";

  @IsString()
  @IsOptional()
  @DocsProperty()
  label?: string;

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  required = true;

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  hidden?: boolean;

  @IsString()
  @IsOptional()
  @DocsProperty()
  placeholder?: string;

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional({
    type: Boolean,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  disableOnPrefill?: boolean;
}

export class TitleDefaultFieldInput_2024_06_14 {
  @IsIn(inputBookingFieldSlugs)
  @DocsProperty({ example: "title", description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  slug!: "title";

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional()
  required?: boolean;

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  hidden?: boolean;

  @IsString()
  @IsOptional()
  @DocsPropertyOptional()
  label?: string;

  @IsString()
  @IsOptional()
  @DocsPropertyOptional()
  placeholder?: string;

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional({
    type: Boolean,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  disableOnPrefill?: boolean;
}

export class LocationDefaultFieldInput_2024_06_14 {
  @IsIn(inputBookingFieldSlugs)
  @DocsProperty({
    example: "location",
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  slug!: "location";

  @IsString()
  @IsOptional()
  @DocsPropertyOptional()
  label?: string;
}

export class NotesDefaultFieldInput_2024_06_14 {
  @IsIn(inputBookingFieldSlugs)
  @DocsProperty({ example: "notes", description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  slug!: "notes";

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional()
  required?: boolean;

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  hidden?: boolean;

  @IsString()
  @IsOptional()
  @DocsPropertyOptional()
  label?: string;

  @IsString()
  @IsOptional()
  @DocsPropertyOptional()
  placeholder?: string;

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional({
    type: Boolean,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  disableOnPrefill?: boolean;
}

export class GuestsDefaultFieldInput_2024_06_14 {
  @IsIn(inputBookingFieldSlugs)
  @DocsProperty({ example: "guests", description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  slug!: "guests";

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional()
  required?: boolean;

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  hidden?: boolean;

  @IsString()
  @IsOptional()
  @DocsPropertyOptional()
  label?: string;

  @IsString()
  @IsOptional()
  @DocsPropertyOptional()
  placeholder?: string;

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional({
    type: Boolean,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  disableOnPrefill?: boolean;
}

export class RescheduleReasonDefaultFieldInput_2024_06_14 {
  @IsIn(inputBookingFieldSlugs)
  @DocsProperty({
    example: "rescheduleReason",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  slug!: "rescheduleReason";

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional()
  required?: boolean;

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  hidden?: boolean;

  @IsString()
  @IsOptional()
  @DocsPropertyOptional()
  label?: string;

  @IsString()
  @IsOptional()
  @DocsPropertyOptional()
  placeholder?: string;

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional({
    type: Boolean,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  disableOnPrefill?: boolean;
}

export class PhoneFieldInput_2024_06_14 {
  @IsIn(inputBookingFieldTypes)
  @DocsProperty({ example: "phone", description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  type!: "phone";

  @IsString()
  @DocsProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "some-slug",
  })
  slug!: string;

  @IsString()
  @DocsProperty()
  label!: string;

  @IsBoolean()
  @DocsProperty()
  required!: boolean;

  @IsString()
  @IsOptional()
  @DocsProperty()
  placeholder?: string;

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional({
    type: Boolean,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  disableOnPrefill?: boolean;

  @IsBoolean()
  @IsOptional()
  @DocsProperty({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  hidden?: boolean;
}

export class AddressFieldInput_2024_06_14 {
  @IsIn(inputBookingFieldTypes)
  @DocsProperty({ example: "address", description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  type!: "address";

  @IsString()
  @DocsProperty({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "some-slug",
  })
  slug!: string;

  @IsString()
  @DocsProperty({ example: "Please enter your address" })
  label!: string;

  @IsBoolean()
  @DocsProperty()
  required!: boolean;

  @IsString()
  @IsOptional()
  @DocsProperty()
  @DocsProperty({ example: "e.g., 1234 Main St" })
  placeholder?: string;

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional({
    type: Boolean,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  disableOnPrefill?: boolean;

  @IsBoolean()
  @IsOptional()
  @DocsProperty({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  hidden?: boolean;
}

export class TextFieldInput_2024_06_14 {
  @IsIn(inputBookingFieldTypes)
  @DocsProperty({ example: "text", description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  type!: "text";

  @IsString()
  @DocsProperty({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "some-slug",
  })
  slug!: string;

  @IsString()
  @DocsProperty({ example: "Please enter your text" })
  label!: string;

  @IsBoolean()
  @DocsProperty()
  required!: boolean;

  @IsString()
  @DocsProperty({ example: "e.g., Enter text here" })
  @IsOptional()
  @DocsProperty()
  placeholder?: string;

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional({
    type: Boolean,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  disableOnPrefill?: boolean;

  @IsBoolean()
  @IsOptional()
  @DocsProperty({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  hidden?: boolean;
}

export class UrlFieldInput_2024_06_14 {
  @IsIn(inputBookingFieldTypes)
  @DocsProperty({ example: "url", description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  type!: "url";

  @IsString()
  @DocsProperty({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "some-slug",
  })
  slug!: string;

  @IsString()
  @DocsProperty({ example: "Please enter your text" })
  label!: string;

  @IsBoolean()
  @DocsProperty()
  required!: boolean;

  @IsString()
  @DocsProperty({ example: "e.g., Enter url here" })
  @IsOptional()
  @DocsProperty()
  placeholder?: string;

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional({
    type: Boolean,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  disableOnPrefill?: boolean;

  @IsBoolean()
  @IsOptional()
  @DocsProperty({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  hidden?: boolean;
}

export class NumberFieldInput_2024_06_14 {
  @IsIn(inputBookingFieldTypes)
  @DocsProperty({ example: "number", description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  type!: "number";

  @IsString()
  @DocsProperty({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "some-slug",
  })
  slug!: string;

  @IsString()
  @DocsProperty({ example: "Please enter a number" })
  label!: string;

  @IsBoolean()
  @DocsProperty()
  required!: boolean;

  @IsString()
  @DocsProperty({ example: "e.g., 100" })
  @IsOptional()
  @DocsProperty()
  placeholder?: string;

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional({
    type: Boolean,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  disableOnPrefill?: boolean;

  @IsBoolean()
  @IsOptional()
  @DocsProperty({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  hidden?: boolean;
}

export class TextAreaFieldInput_2024_06_14 {
  @IsIn(inputBookingFieldTypes)
  @DocsProperty({ example: "textarea", description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  type!: "textarea";

  @IsString()
  @DocsProperty({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "some-slug",
  })
  slug!: string;

  @IsString()
  @DocsProperty({ example: "Please enter detailed information" })
  label!: string;

  @IsBoolean()
  @DocsProperty()
  required!: boolean;

  @IsString()
  @DocsProperty({ example: "e.g., Detailed description here..." })
  @IsOptional()
  @DocsProperty()
  placeholder?: string;

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional({
    type: Boolean,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  disableOnPrefill?: boolean;

  @IsBoolean()
  @IsOptional()
  @DocsProperty({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  hidden?: boolean;
}

export class SelectFieldInput_2024_06_14 {
  @IsIn(inputBookingFieldTypes)
  @DocsProperty({ example: "select", description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  type!: "select";

  @IsString()
  @DocsProperty({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "some-slug",
  })
  slug!: string;

  @IsString()
  @DocsProperty({ example: "Please select an option" })
  label!: string;

  @IsBoolean()
  @DocsProperty()
  required!: boolean;

  @IsString()
  @DocsProperty({ example: "Select..." })
  @IsOptional()
  @DocsProperty()
  placeholder?: string;

  @IsArray()
  @DocsProperty({ type: [String], example: ["Option 1", "Option 2"] })
  options!: string[];

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional({
    type: Boolean,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  disableOnPrefill?: boolean;

  @IsBoolean()
  @IsOptional()
  @DocsProperty({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  hidden?: boolean;
}

export class MultiSelectFieldInput_2024_06_14 {
  @IsIn(inputBookingFieldTypes)
  @DocsProperty({ example: "multiselect", description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  type!: "multiselect";

  @IsString()
  @DocsProperty({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "some-slug",
  })
  slug!: string;

  @IsString()
  @DocsProperty({ example: "Please select multiple options" })
  label!: string;

  @IsBoolean()
  @DocsProperty()
  required!: boolean;

  @IsArray()
  @DocsProperty({ type: [String], example: ["Option 1", "Option 2"] })
  options!: string[];

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional({
    type: Boolean,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  disableOnPrefill?: boolean;

  @IsBoolean()
  @IsOptional()
  @DocsProperty({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  hidden?: boolean;
}

export class MultiEmailFieldInput_2024_06_14 {
  @IsIn(inputBookingFieldTypes)
  @DocsProperty({ example: "multiemail", description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  type!: "multiemail";

  @IsString()
  @DocsProperty({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "some-slug",
  })
  slug!: string;

  @IsString()
  @DocsProperty({ example: "Please enter multiple emails" })
  label!: string;

  @IsBoolean()
  @DocsProperty()
  required!: boolean;

  @IsString()
  @DocsProperty({ example: "e.g., example@example.com" })
  @IsOptional()
  @DocsProperty()
  placeholder?: string;

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional({
    type: Boolean,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  disableOnPrefill?: boolean;

  @IsBoolean()
  @IsOptional()
  @DocsProperty({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  hidden?: boolean;
}

export class CheckboxGroupFieldInput_2024_06_14 {
  @IsIn(inputBookingFieldTypes)
  @DocsProperty({ example: "checkbox", description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  type!: "checkbox";

  @IsString()
  @DocsProperty({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "some-slug",
  })
  slug!: string;

  @IsString()
  @DocsProperty({ example: "Select all that apply" })
  label!: string;

  @IsBoolean()
  @DocsProperty()
  required!: boolean;

  @IsArray()
  @DocsProperty({ type: [String], example: ["Checkbox 1", "Checkbox 2"] })
  options!: string[];

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional({
    type: Boolean,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  disableOnPrefill?: boolean;

  @IsBoolean()
  @IsOptional()
  @DocsProperty({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  hidden?: boolean;
}

export class RadioGroupFieldInput_2024_06_14 {
  @IsIn(inputBookingFieldTypes)
  @DocsProperty({ example: "radio", description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  type!: "radio";

  @IsString()
  @DocsProperty({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "some-slug",
  })
  slug!: string;

  @IsString()
  @DocsProperty({ example: "Select one option" })
  label!: string;

  @IsBoolean()
  @DocsProperty()
  required!: boolean;

  @IsArray()
  @DocsProperty({ type: [String], example: ["Radio 1", "Radio 2"] })
  options!: string[];

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional({
    type: Boolean,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  disableOnPrefill?: boolean;

  @IsBoolean()
  @IsOptional()
  @DocsProperty({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  hidden?: boolean;
}

export class BooleanFieldInput_2024_06_14 {
  @IsIn(inputBookingFieldTypes)
  @DocsProperty({ example: "boolean", description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  type!: "boolean";

  @IsString()
  @DocsProperty({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "some-slug",
  })
  slug!: string;

  @IsString()
  @DocsProperty({ example: "Agree to terms?" })
  label!: string;

  @IsBoolean()
  @DocsProperty()
  required!: boolean;

  @IsBoolean()
  @IsOptional()
  @DocsPropertyOptional({
    type: Boolean,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  disableOnPrefill?: boolean;

  @IsBoolean()
  @IsOptional()
  @DocsProperty({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  hidden?: boolean;
}

type InputDefaultField_2024_06_14 =
  | NameDefaultFieldInput_2024_06_14
  | SplitNameDefaultFieldInput_2024_06_14
  | EmailDefaultFieldInput_2024_06_14
  | TitleDefaultFieldInput_2024_06_14
  | LocationDefaultFieldInput_2024_06_14
  | NotesDefaultFieldInput_2024_06_14
  | GuestsDefaultFieldInput_2024_06_14
  | RescheduleReasonDefaultFieldInput_2024_06_14;

export type InputBookingField_2024_06_14 =
  | InputDefaultField_2024_06_14
  | PhoneFieldInput_2024_06_14
  | AddressFieldInput_2024_06_14
  | TextFieldInput_2024_06_14
  | NumberFieldInput_2024_06_14
  | TextAreaFieldInput_2024_06_14
  | SelectFieldInput_2024_06_14
  | MultiSelectFieldInput_2024_06_14
  | MultiEmailFieldInput_2024_06_14
  | CheckboxGroupFieldInput_2024_06_14
  | RadioGroupFieldInput_2024_06_14
  | BooleanFieldInput_2024_06_14
  | UrlFieldInput_2024_06_14;

@ValidatorConstraint({ async: true })
class InputBookingFieldValidator_2024_06_14 implements ValidatorConstraintInterface {
  private classMap: { [key: string]: new () => InputBookingField_2024_06_14 } = {
    name: NameDefaultFieldInput_2024_06_14,
    splitName: SplitNameDefaultFieldInput_2024_06_14,
    email: EmailDefaultFieldInput_2024_06_14,
    title: TitleDefaultFieldInput_2024_06_14,
    location: LocationDefaultFieldInput_2024_06_14,
    notes: NotesDefaultFieldInput_2024_06_14,
    guests: GuestsDefaultFieldInput_2024_06_14,
    rescheduleReason: RescheduleReasonDefaultFieldInput_2024_06_14,
    phone: PhoneFieldInput_2024_06_14,
    address: AddressFieldInput_2024_06_14,
    text: TextFieldInput_2024_06_14,
    number: NumberFieldInput_2024_06_14,
    textarea: TextAreaFieldInput_2024_06_14,
    select: SelectFieldInput_2024_06_14,
    multiselect: MultiSelectFieldInput_2024_06_14,
    multiemail: MultiEmailFieldInput_2024_06_14,
    checkbox: CheckboxGroupFieldInput_2024_06_14,
    radio: RadioGroupFieldInput_2024_06_14,
    boolean: BooleanFieldInput_2024_06_14,
    url: UrlFieldInput_2024_06_14,
  };

  async validate(bookingFields: { type: string; slug: string }[]) {
    if (!Array.isArray(bookingFields)) {
      throw new BadRequestException(`'bookingFields' must be an array.`);
    }

    if (!bookingFields.length) {
      throw new BadRequestException(`'bookingFields' must contain at least 1 booking field.`);
    }

    const slugs: string[] = [];
    for (const field of bookingFields) {
      const { type, slug } = field;
      const fieldNeedsType =
        slug !== "title" &&
        slug !== "notes" &&
        slug !== "guests" &&
        slug !== "rescheduleReason" &&
        slug !== "location";

      if (fieldNeedsType && !type) {
        throw new BadRequestException(
          `All booking fields except ones with slug equal to title, notes, guests, rescheduleReason and location must have a 'type' property.`
        );
      }

      const fieldNeedsSlug = type !== "name" && type !== "splitName" && type !== "email";
      if (fieldNeedsSlug && !slug) {
        throw new BadRequestException(
          `Each booking field except ones with type equal to name, splitName, email must have a 'slug' property.`
        );
      }

      if (slugs.includes(slug)) {
        throw new BadRequestException(
          `Duplicate bookingFields slug '${slug}' found. All bookingFields slugs must be unique.`
        );
      }
      if (fieldNeedsSlug) {
        slugs.push(slug);
      }

      const ClassType = fieldNeedsType ? this.classMap[type] : this.classMap[slug];
      if (!ClassType) {
        throw new BadRequestException(
          fieldNeedsType
            ? `Unsupported booking field type '${type}'.`
            : `Unsupported booking field slug '${slug}'.`
        );
      }

      const instance = plainToInstance(ClassType, field);
      const errors = await validate(instance);
      if (errors.length > 0) {
        const message = errors.flatMap((error) => Object.values(error.constraints || {})).join(", ");
        throw new BadRequestException(`Validation failed for ${type || slug} booking field: ${message}`);
      }
    }

    return true;
  }

  defaultMessage() {
    return `Validation failed for one or more booking fields.`;
  }
}

export function ValidateInputBookingFields_2024_06_14(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: "ValidateInputBookingFields",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: new InputBookingFieldValidator_2024_06_14(),
    });
  };
}
