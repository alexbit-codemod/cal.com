import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Expose, Type } from "class-transformer";
import { IsArray, IsEnum, ValidateNested } from "class-validator";

import { SUCCESS_STATUS, ERROR_STATUS } from "@calcom/platform-constants";

import {
  EMAIL_HOST,
  HOST,
  RECIPIENT_TYPES,
  RecipientType,
  REMINDER,
  STEP_ACTIONS,
  StepAction,
  TEMPLATES,
  TemplateType,
} from "../inputs/workflow-step.input";
import {
  BEFORE_EVENT,
  HOUR,
  TIME_UNITS,
  TimeUnitType,
  WORKFLOW_TRIGGER_TYPES,
  WorkflowTriggerType,
} from "../inputs/workflow-trigger.input";

export class WorkflowMessageOutputDto {
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "Reminder: Your Meeting {EVENT_NAME} - {EVENT_DATE_ddd, MMM D, YYYY h:mma} with Cal.com",
  })
  @Expose()
  subject!: string;

  @ApiPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "<p>Reminder for {EVENT_NAME}.</p>",
  })
  @Expose()
  html?: string;

  @ApiPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "Reminder for {EVENT_NAME}.",
  })
  @Expose()
  text?: string;
}

export class WorkflowStepOutputDto {
  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: 67244 })
  @Expose()
  id!: number;

  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: 1 })
  @Expose()
  stepNumber!: number;

  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: EMAIL_HOST, enum: STEP_ACTIONS })
  @Expose()
  action!: StepAction;

  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: HOST, enum: RECIPIENT_TYPES })
  @Expose()
  recipient!: RecipientType;

  @ApiPropertyOptional({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: 31214 })
  @Expose()
  email?: string;

  @ApiPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  @Expose()
  phone?: string;

  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: REMINDER, enum: TEMPLATES })
  @Expose()
  template!: TemplateType;

  @ApiPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: true,
  })
  @Expose()
  includeCalendarEvent = false;

  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: "Cal.com Notifications" })
  @Expose()
  sender!: string;

  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , type: WorkflowMessageOutputDto })
  @Expose()
  @ValidateNested()
  @Type(() => WorkflowMessageOutputDto)
  message!: WorkflowMessageOutputDto;
}

export class WorkflowTriggerOffsetOutputDto {
  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: 24 })
  @Expose()
  value!: number;

  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: HOUR,
    enum: TIME_UNITS,
  })
  @Expose()
  unit!: TimeUnitType;
}

export class WorkflowTriggerOutputDto {
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: BEFORE_EVENT,
    enum: WORKFLOW_TRIGGER_TYPES,
  })
  @Expose()
  type!: WorkflowTriggerType;

  @ApiPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    type: WorkflowTriggerOffsetOutputDto,
  })
  @Expose()
  @ValidateNested()
  @Type(() => WorkflowTriggerOffsetOutputDto)
  offset?: WorkflowTriggerOffsetOutputDto;
}

export class WorkflowActivationOutputDto {
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: false,
  })
  @Expose()
  isActiveOnAllEventTypes?: boolean = false;

  @ApiPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: [698191, 698192],
  })
  @Expose()
  @IsArray()
  activeOnEventTypeIds?: number[];
}

// --- Main Workflow Output DTO ---

export class WorkflowOutput {
  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: 101 })
  @Expose()
  id!: number;

  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: "Platform Test Workflow" })
  @Expose()
  name!: string;

  @ApiPropertyOptional({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: 2313,
  })
  @Expose()
  userId?: number;

  @ApiPropertyOptional({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: 4214321 })
  @Expose()
  teamId?: number;

  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , type: WorkflowActivationOutputDto })
  @Expose()
  @ValidateNested()
  @Type(() => WorkflowActivationOutputDto)
  activation!: WorkflowActivationOutputDto;

  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , type: WorkflowTriggerOutputDto })
  @Expose()
  @ValidateNested()
  @Type(() => WorkflowTriggerOutputDto)
  trigger!: WorkflowTriggerOutputDto;

  @ApiProperty({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , type: [WorkflowStepOutputDto] })
  @Expose()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => WorkflowStepOutputDto)
  steps!: WorkflowStepOutputDto[];

  @ApiPropertyOptional({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: "2024-05-12T10:00:00.000Z" })
  @Expose()
  createdAt?: Date | string;

  @ApiPropertyOptional({ description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , example: "2024-05-12T11:30:00.000Z" })
  @Expose()
  updatedAt?: Date | string;
}

// --- List Response Output DTO ---

export class GetWorkflowsOutput {
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: SUCCESS_STATUS,
    enum: [SUCCESS_STATUS, ERROR_STATUS],
  })
  @Expose()
  @IsEnum([SUCCESS_STATUS, ERROR_STATUS])
  status!: typeof SUCCESS_STATUS | typeof ERROR_STATUS;

  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    type: [WorkflowOutput],
  })
  @Expose()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => WorkflowOutput)
  data!: WorkflowOutput[];
}

export class GetWorkflowOutput {
  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: SUCCESS_STATUS,
    enum: [SUCCESS_STATUS, ERROR_STATUS],
  })
  @Expose()
  @IsEnum([SUCCESS_STATUS, ERROR_STATUS])
  status!: typeof SUCCESS_STATUS | typeof ERROR_STATUS;

  @ApiProperty({
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    type: [WorkflowOutput],
  })
  @Expose()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => WorkflowOutput)
  data!: WorkflowOutput;
}
