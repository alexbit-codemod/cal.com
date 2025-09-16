import { ApiExtraModels, ApiProperty, ApiPropertyOptional, getSchemaPath } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  IsBoolean,
  ArrayMinSize,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
  ValidateIf,
} from "class-validator";

import {
  BaseWorkflowStepDto,
  EMAIL_ADDRESS,
  EMAIL_ATTENDEE,
  EMAIL_HOST,
  SMS_ATTENDEE,
  SMS_NUMBER,
  WHATSAPP_ATTENDEE,
  WHATSAPP_NUMBER,
  WorkflowEmailAddressStepDto,
  WorkflowEmailAttendeeStepDto,
  WorkflowEmailHostStepDto,
  WorkflowPhoneAttendeeStepDto,
  WorkflowPhoneNumberStepDto,
  WorkflowPhoneWhatsAppAttendeeStepDto,
  WorkflowPhoneWhatsAppNumberStepDto,
} from "./workflow-step.input";
import {
  AFTER_EVENT,
  AFTER_GUESTS_CAL_VIDEO_NO_SHOW,
  AFTER_HOSTS_CAL_VIDEO_NO_SHOW,
  BaseWorkflowTriggerDto,
  BEFORE_EVENT,
  EVENT_CANCELLED,
  NEW_EVENT,
  OnAfterCalVideoGuestsNoShowTriggerDto,
  OnAfterCalVideoHostsNoShowTriggerDto,
  OnAfterEventTriggerDto,
  OnBeforeEventTriggerDto,
  OnCancelTriggerDto,
  OnCreationTriggerDto,
  OnRescheduleTriggerDto,
  RESCHEDULE_EVENT,
} from "./workflow-trigger.input";

export class WorkflowActivationDto {
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: false,
    type: Boolean,
  })
  @IsBoolean()
  isActiveOnAllEventTypes = false;

  @ApiPropertyOptional({
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: [698191],
    type: [Number],
  })
  @ValidateIf((o) => !Boolean(o.isActiveOnAllEventTypes))
  @IsOptional()
  @IsNumber({}, { each: true })
  activeOnEventTypeIds: number[] = [];
}

export type TriggerDtoType =
  | OnAfterEventTriggerDto
  | OnBeforeEventTriggerDto
  | OnCreationTriggerDto
  | OnRescheduleTriggerDto
  | OnCancelTriggerDto
  | OnAfterCalVideoGuestsNoShowTriggerDto
  | OnAfterCalVideoHostsNoShowTriggerDto;

@ApiExtraModels(
  OnBeforeEventTriggerDto,
  OnAfterEventTriggerDto,
  OnCancelTriggerDto,
  OnCreationTriggerDto,
  OnRescheduleTriggerDto,
  OnAfterCalVideoGuestsNoShowTriggerDto,
  OnAfterCalVideoHostsNoShowTriggerDto,
  WorkflowEmailAddressStepDto,
  WorkflowEmailAttendeeStepDto,
  WorkflowEmailHostStepDto,
  WorkflowPhoneWhatsAppAttendeeStepDto,
  WorkflowPhoneWhatsAppNumberStepDto,
  WorkflowPhoneNumberStepDto,
  WorkflowPhoneAttendeeStepDto,
  BaseWorkflowTriggerDto
)
export class CreateWorkflowDto {
  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: "Platform Test Workflow" })
  @IsString()
  name!: string;

  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , type: WorkflowActivationDto })
  @ValidateNested()
  @Type(() => WorkflowActivationDto)
  activation!: WorkflowActivationDto;

  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    oneOf: [
      { $ref: getSchemaPath(OnBeforeEventTriggerDto) },
      { $ref: getSchemaPath(OnAfterEventTriggerDto) },
      { $ref: getSchemaPath(OnCancelTriggerDto) },
      { $ref: getSchemaPath(OnCreationTriggerDto) },
      { $ref: getSchemaPath(OnRescheduleTriggerDto) },
      { $ref: getSchemaPath(OnAfterCalVideoGuestsNoShowTriggerDto) },
      { $ref: getSchemaPath(OnAfterCalVideoHostsNoShowTriggerDto) },
    ],
  })
  @ValidateNested()
  @Type(() => BaseWorkflowTriggerDto, {
    discriminator: {
      property: "type",
      subTypes: [
        { value: OnBeforeEventTriggerDto, name: BEFORE_EVENT },
        { value: OnAfterEventTriggerDto, name: AFTER_EVENT },
        { value: OnCancelTriggerDto, name: EVENT_CANCELLED },
        { value: OnCreationTriggerDto, name: NEW_EVENT },
        { value: OnRescheduleTriggerDto, name: RESCHEDULE_EVENT },
        { value: OnAfterCalVideoGuestsNoShowTriggerDto, name: AFTER_GUESTS_CAL_VIDEO_NO_SHOW },
        { value: OnAfterCalVideoHostsNoShowTriggerDto, name: AFTER_HOSTS_CAL_VIDEO_NO_SHOW },
      ],
    },
  })
  trigger!:
    | OnAfterEventTriggerDto
    | OnBeforeEventTriggerDto
    | OnCreationTriggerDto
    | OnRescheduleTriggerDto
    | OnCancelTriggerDto
    | OnAfterCalVideoGuestsNoShowTriggerDto
    | OnAfterCalVideoHostsNoShowTriggerDto;

  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    oneOf: [
      { $ref: getSchemaPath(WorkflowEmailAddressStepDto) },
      { $ref: getSchemaPath(WorkflowEmailAttendeeStepDto) },
      { $ref: getSchemaPath(WorkflowEmailHostStepDto) },
      { $ref: getSchemaPath(WorkflowPhoneWhatsAppAttendeeStepDto) },
      { $ref: getSchemaPath(WorkflowPhoneWhatsAppNumberStepDto) },
      { $ref: getSchemaPath(WorkflowPhoneNumberStepDto) },
      { $ref: getSchemaPath(WorkflowPhoneAttendeeStepDto) },
    ],
    type: "array",
  })
  @ValidateNested({ each: true })
  @ArrayMinSize(1, { message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   })
  @Type(() => BaseWorkflowStepDto, {
    discriminator: {
      property: "action",
      subTypes: [
        { value: WorkflowEmailAddressStepDto, name: EMAIL_ADDRESS },
        { value: WorkflowEmailAttendeeStepDto, name: EMAIL_ATTENDEE },
        { value: WorkflowEmailHostStepDto, name: EMAIL_HOST },
        { value: WorkflowPhoneWhatsAppAttendeeStepDto, name: WHATSAPP_ATTENDEE },
        { value: WorkflowPhoneWhatsAppNumberStepDto, name: WHATSAPP_NUMBER },
        { value: WorkflowPhoneNumberStepDto, name: SMS_NUMBER },
        { value: WorkflowPhoneAttendeeStepDto, name: SMS_ATTENDEE },
      ],
    },
  })
  steps!: (
    | WorkflowEmailAddressStepDto
    | WorkflowEmailAttendeeStepDto
    | WorkflowEmailHostStepDto
    | WorkflowPhoneWhatsAppAttendeeStepDto
    | WorkflowPhoneWhatsAppNumberStepDto
    | WorkflowPhoneNumberStepDto
    | WorkflowPhoneAttendeeStepDto
  )[];
}
