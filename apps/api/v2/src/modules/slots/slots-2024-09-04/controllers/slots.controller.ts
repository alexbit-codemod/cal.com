import { VERSION_2024_09_04 } from "@/lib/api-versions";
import { OPTIONAL_API_KEY_OR_ACCESS_TOKEN_HEADER, OPTIONAL_X_CAL_CLIENT_ID_HEADER } from "@/lib/docs/headers";
import { GetOptionalUser } from "@/modules/auth/decorators/get-optional-user/get-optional-user.decorator";
import { OptionalApiAuthGuard } from "@/modules/auth/guards/optional-api-auth/optional-api-auth.guard";
import { GetReservedSlotOutput_2024_09_04 } from "@/modules/slots/slots-2024-09-04/outputs/get-reserved-slot.output";
import { GetSlotsOutput_2024_09_04 } from "@/modules/slots/slots-2024-09-04/outputs/get-slots.output";
import { ReserveSlotOutputResponse_2024_09_04 } from "@/modules/slots/slots-2024-09-04/outputs/reserve-slot.output";
import { SlotsService_2024_09_04 } from "@/modules/slots/slots-2024-09-04/services/slots.service";
import {
  Query,
  Body,
  Controller,
  Get,
  Delete,
  Post,
  Param,
  HttpCode,
  HttpStatus,
  Patch,
  UseGuards,
} from "@nestjs/common";
import {
  ApiOperation,
  ApiTags as DocsTags,
  ApiHeader,
  ApiResponse as DocsResponse,
  ApiQuery,
} from "@nestjs/swagger";
import { User } from "@prisma/client";
import { plainToClass } from "class-transformer";

import { SUCCESS_STATUS } from "@calcom/platform-constants";
import {
  GetSlotsInput_2024_09_04,
  GetSlotsInputPipe,
  ReserveSlotInput_2024_09_04,
  ReserveSlotOutput_2024_09_04 as ReserveSlotOutputType_2024_09_04,
  GetReservedSlotOutput_2024_09_04 as GetReservedSlotOutputType_2024_09_04,
} from "@calcom/platform-types";
import { ApiResponse } from "@calcom/platform-types";

@Controller({
  path: "/v2/slots",
  version: VERSION_2024_09_04,
})
@DocsTags("Slots")
@ApiHeader({
  name: "cal-api-version",
  description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  ,
  example: VERSION_2024_09_04,
  required: true,
  schema: {
    default: VERSION_2024_09_04,
  },
})
export class SlotsController_2024_09_04 {
  constructor(private readonly slotsService: SlotsService_2024_09_04) {}

  @Get("/")
  @ApiOperation({
    summary: "Get available time slots for an event type",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  @ApiQuery({
    name: "timeZone",
    required: false,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "Europe/Rome",
  })
  @ApiQuery({
    name: "duration",
    required: false,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "60",
  })
  @ApiQuery({
    name: "format",
    required: false,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "range",
  })
  @ApiQuery({
    name: "usernames",
    required: false,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "alice,bob",
  })
  @ApiQuery({
    name: "eventTypeId",
    required: false,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "100",
  })
  @ApiQuery({
    name: "eventTypeSlug",
    required: false,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "event-type-slug",
  })
  @ApiQuery({
    name: "username",
    required: false,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "bob",
  })
  @ApiQuery({
    name: "teamSlug",
    required: false,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "team-slug",
  })
  @ApiQuery({
    name: "organizationSlug",
    required: false,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "org-slug",
  })
  @ApiQuery({
    name: "end",
    required: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "2050-09-06",
  })
  @ApiQuery({
    name: "start",
    required: true,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    example: "2050-09-05",
  })
  @ApiQuery({
    name: "bookingUidToReschedule",
    required: false,
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    example: "abc123def456",
  })
  @DocsResponse({
    status: 200,
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
    schema: {
      oneOf: [
        {
          type: "object",
          title: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          ,
          additionalProperties: {
            type: "array",
            items: { type: "string" },
          },
          example: {
            status: "success",
            data: {
              "2050-09-05": [
                { start: "2050-09-05T09:00:00.000+02:00" },
                { start: "2050-09-05T10:00:00.000+02:00" },
              ],
              "2050-09-06": [
                { start: "2050-09-06T09:00:00.000+02:00" },
                { start: "2050-09-06T10:00:00.000+02:00" },
              ],
            },
          },
        },
        {
          type: "object",
          title: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          ,
          additionalProperties: {
            type: "array",
            items: {
              type: "object",
              properties: {
                start: { type: "string" },
                end: { type: "string" },
              },
            },
          },
          example: {
            status: "success",
            data: {
              "2050-09-05": [
                { start: "2050-09-05T09:00:00.000+02:00", end: "2050-09-05T10:00:00.000+02:00" },
                { start: "2050-09-05T10:00:00.000+02:00", end: "2050-09-05T11:00:00.000+02:00" },
              ],
              "2050-09-06": [
                { start: "2050-09-06T09:00:00.000+02:00", end: "2050-09-06T10:00:00.000+02:00" },
                { start: "2050-09-06T10:00:00.000+02:00", end: "2050-09-06T11:00:00.000+02:00" },
              ],
            },
          },
        },
      ],
    },
  })
  async getAvailableSlots(
    @Query(new GetSlotsInputPipe()) query: GetSlotsInput_2024_09_04
  ): Promise<GetSlotsOutput_2024_09_04> {
    const slots = await this.slotsService.getAvailableSlots(query);

    return {
      data: slots,
      status: SUCCESS_STATUS,
    };
  }

  @Post("/reservations")
  @UseGuards(OptionalApiAuthGuard)
  @ApiOperation({
    summary: "Reserve a slot",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  @ApiHeader(OPTIONAL_X_CAL_CLIENT_ID_HEADER)
  @ApiHeader(OPTIONAL_X_CAL_CLIENT_ID_HEADER)
  @ApiHeader(OPTIONAL_API_KEY_OR_ACCESS_TOKEN_HEADER)
  async reserveSlot(
    @Body() body: ReserveSlotInput_2024_09_04,
    @GetOptionalUser() user: User
  ): Promise<ReserveSlotOutputResponse_2024_09_04> {
    const reservedSlot = await this.slotsService.reserveSlot(body, user?.id);

    return {
      status: SUCCESS_STATUS,
      data: plainToClass(ReserveSlotOutputType_2024_09_04, reservedSlot, {
        strategy: "excludeAll",
      }),
    };
  }

  @Get("/reservations/:uid")
  @ApiOperation({
    summary: "Get reserved slot",
  })
  async getReservedSlot(@Param("uid") uid: string): Promise<GetReservedSlotOutput_2024_09_04> {
    const reservedSlot = await this.slotsService.getReservedSlot(uid);

    return {
      status: SUCCESS_STATUS,
      data: plainToClass(GetReservedSlotOutputType_2024_09_04, reservedSlot, {
        strategy: "excludeAll",
      }),
    };
  }

  @Patch("/reservations/:uid")
  @ApiOperation({
    summary: "Update a reserved slot",
  })
  @HttpCode(HttpStatus.OK)
  async updateReservedSlot(
    @Body() body: ReserveSlotInput_2024_09_04,
    @Param("uid") uid: string
  ): Promise<ReserveSlotOutputResponse_2024_09_04> {
    const reservedSlot = await this.slotsService.updateReservedSlot(body, uid);

    return {
      status: SUCCESS_STATUS,
      data: plainToClass(ReserveSlotOutputType_2024_09_04, reservedSlot, {
        strategy: "excludeAll",
      }),
    };
  }

  @Delete("/reservations/:uid")
  @ApiOperation({
    summary: "Delete a reserved slot",
  })
  @HttpCode(HttpStatus.OK)
  @DocsResponse({
    status: 200,
    schema: {
      type: "object",
      example: {
        status: "success",
      },
    },
  })
  async deleteReservedSlot(@Param("uid") uid: string): Promise<ApiResponse> {
    await this.slotsService.deleteReservedSlot(uid);

    return {
      status: SUCCESS_STATUS,
    };
  }
}
