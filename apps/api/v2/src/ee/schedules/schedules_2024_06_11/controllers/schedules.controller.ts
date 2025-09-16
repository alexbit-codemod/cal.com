import { SchedulesService_2024_06_11 } from "@/ee/schedules/schedules_2024_06_11/services/schedules.service";
import { VERSION_2024_06_14, VERSION_2024_06_11 } from "@/lib/api-versions";
import { API_KEY_OR_ACCESS_TOKEN_HEADER } from "@/lib/docs/headers";
import { GetUser } from "@/modules/auth/decorators/get-user/get-user.decorator";
import { Permissions } from "@/modules/auth/decorators/permissions/permissions.decorator";
import { ApiAuthGuard } from "@/modules/auth/guards/api-auth/api-auth.guard";
import { PermissionsGuard } from "@/modules/auth/guards/permissions/permissions.guard";
import { UserWithProfile } from "@/modules/users/users.repository";
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Patch,
  UseGuards,
} from "@nestjs/common";
import { ApiHeader, ApiOperation, ApiResponse, ApiTags as DocsTags } from "@nestjs/swagger";

import { SCHEDULE_READ, SCHEDULE_WRITE, SUCCESS_STATUS } from "@calcom/platform-constants";
import {
  CreateScheduleOutput_2024_06_11,
  CreateScheduleInput_2024_06_11,
  UpdateScheduleInput_2024_06_11,
  GetScheduleOutput_2024_06_11,
  UpdateScheduleOutput_2024_06_11,
  GetDefaultScheduleOutput_2024_06_11,
  DeleteScheduleOutput_2024_06_11,
  GetSchedulesOutput_2024_06_11,
} from "@calcom/platform-types";

@Controller({
  path: "/v2/schedules",
  version: [VERSION_2024_06_14, VERSION_2024_06_11],
})
@UseGuards(ApiAuthGuard, PermissionsGuard)
@DocsTags("Schedules")
@ApiHeader({
  name: "cal-api-version",
  description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  ,
  example: VERSION_2024_06_11,
  required: true,
  schema: {
    default: VERSION_2024_06_11,
  },
})
@ApiHeader(API_KEY_OR_ACCESS_TOKEN_HEADER)
export class SchedulesController_2024_06_11 {
  constructor(private readonly schedulesService: SchedulesService_2024_06_11) {}

  @Post("/")
  @Permissions([SCHEDULE_WRITE])
  @ApiOperation({
    summary: "Create a schedule",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  async createSchedule(
    @GetUser() user: UserWithProfile,
    @Body() bodySchedule: CreateScheduleInput_2024_06_11
  ): Promise<CreateScheduleOutput_2024_06_11> {
    const schedule = await this.schedulesService.createUserSchedule(user.id, bodySchedule);

    return {
      status: SUCCESS_STATUS,
      data: schedule,
    };
  }

  @Get("/default")
  @Permissions([SCHEDULE_READ])
  @ApiResponse({
    status: 200,
    type: GetDefaultScheduleOutput_2024_06_11,
  })
  @ApiOperation({
    summary: "Get default schedule",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  async getDefaultSchedule(@GetUser() user: UserWithProfile): Promise<GetScheduleOutput_2024_06_11> {
    const schedule = await this.schedulesService.getUserScheduleDefault(user.id);

    return {
      status: SUCCESS_STATUS,
      data: schedule,
    };
  }

  @Get("/:scheduleId")
  @Permissions([SCHEDULE_READ])
  @ApiOperation({ summary: "Get a schedule" })
  async getSchedule(
    @GetUser() user: UserWithProfile,
    @Param("scheduleId") scheduleId: number
  ): Promise<GetScheduleOutput_2024_06_11> {
    const schedule = await this.schedulesService.getUserSchedule(user.id, scheduleId);

    return {
      status: SUCCESS_STATUS,
      data: schedule,
    };
  }

  @Get("/")
  @Permissions([SCHEDULE_READ])
  @ApiOperation({
    summary: "Get all schedules",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  async getSchedules(@GetUser() user: UserWithProfile): Promise<GetSchedulesOutput_2024_06_11> {
    const schedules = await this.schedulesService.getUserSchedules(user.id);

    return {
      status: SUCCESS_STATUS,
      data: schedules,
    };
  }

  @Patch("/:scheduleId")
  @Permissions([SCHEDULE_WRITE])
  @ApiOperation({ summary: "Update a schedule" })
  async updateSchedule(
    @GetUser() user: UserWithProfile,
    @Body() bodySchedule: UpdateScheduleInput_2024_06_11,
    @Param("scheduleId") scheduleId: string
  ): Promise<UpdateScheduleOutput_2024_06_11> {
    const updatedSchedule = await this.schedulesService.updateUserSchedule(
      user.id,
      Number(scheduleId),
      bodySchedule
    );

    return {
      status: SUCCESS_STATUS,
      data: updatedSchedule,
    };
  }

  @Delete("/:scheduleId")
  @HttpCode(HttpStatus.OK)
  @Permissions([SCHEDULE_WRITE])
  @ApiOperation({ summary: "Delete a schedule" })
  async deleteSchedule(
    @GetUser("id") userId: number,
    @Param("scheduleId") scheduleId: number
  ): Promise<DeleteScheduleOutput_2024_06_11> {
    await this.schedulesService.deleteUserSchedule(userId, scheduleId);

    return {
      status: SUCCESS_STATUS,
    };
  }
}
