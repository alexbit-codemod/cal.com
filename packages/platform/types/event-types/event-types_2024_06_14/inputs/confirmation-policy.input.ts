import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEnum, IsOptional, IsInt, ValidateNested, IsBoolean } from "class-validator";
import type { ValidatorConstraintInterface, ValidationOptions } from "class-validator";
import { ValidatorConstraint, registerDecorator } from "class-validator";

import { ConfirmationPolicyEnum, NoticeThresholdUnitEnum } from "@calcom/platform-enums";

import type { Disabled_2024_06_14 } from "./disabled.input";

// Class representing the notice threshold
export class NoticeThreshold_2024_06_14 {
  @IsEnum(NoticeThresholdUnitEnum)
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: NoticeThresholdUnitEnum.MINUTES,
  })
  unit!: NoticeThresholdUnitEnum;

  @IsInt()
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: 30,
  })
  count!: number;
}

// Class representing the confirmation requirements
export class BaseConfirmationPolicy_2024_06_14 {
  @IsEnum(ConfirmationPolicyEnum)
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    enum: [ConfirmationPolicyEnum.ALWAYS, ConfirmationPolicyEnum.TIME],
    example: ConfirmationPolicyEnum.ALWAYS,
  })
  type!: ConfirmationPolicyEnum;

  @IsOptional()
  @ValidateNested()
  @Type(() => NoticeThreshold_2024_06_14)
  @ApiPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    type: NoticeThreshold_2024_06_14,
  })
  noticeThreshold?: NoticeThreshold_2024_06_14;

  @IsBoolean()
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    type: Boolean,
  })
  blockUnconfirmedBookingsInBooker!: boolean;

  @IsOptional()
  @IsBoolean()
  disabled?: boolean = false;
}

export type ConfirmationPolicy_2024_06_14 = BaseConfirmationPolicy_2024_06_14 | Disabled_2024_06_14;

// Validator for confirmation settings
@ValidatorConstraint({ name: "ConfirmationPolicyValidator", async: false })
export class ConfirmationPolicyValidator implements ValidatorConstraintInterface {
  validate(value: ConfirmationPolicy_2024_06_14): boolean {
    if (value.disabled) {
      return true;
    }
    const { type, noticeThreshold } = value;

    if (!type) return false;

    if (type === ConfirmationPolicyEnum.ALWAYS) {
      return true;
    }

    if (type === ConfirmationPolicyEnum.TIME) {
      return !!(
        noticeThreshold &&
        typeof noticeThreshold.count === "number" &&
        typeof noticeThreshold.unit === "string"
      );
    }
    return false;
  }

  defaultMessage(): string {
    return `Invalid requiresConfirmation structure. Use "type": "always" or provide a valid time and unit in "noticeThreshold" for "type": "time".`;
  }
}

// Custom decorator for confirmation validation
export function ValidateConfirmationPolicy(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: "ValidateConfirmationPolicy",
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: ConfirmationPolicyValidator,
    });
  };
}

export type NoticeThresholdTransformedSchema = {
  unit: NoticeThresholdUnitEnum;
  time: number;
};

export type ConfirmationPolicyTransformedSchema = {
  requiresConfirmation: boolean;
  requiresConfirmationThreshold?: NoticeThresholdTransformedSchema;
  requiresConfirmationWillBlockSlot: boolean;
};
