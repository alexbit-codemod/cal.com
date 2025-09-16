import { BookingUidGuard } from "@/ee/bookings/2024-08-13/guards/booking-uid.guard";
import { BookingReferencesFilterInput_2024_08_13 } from "@/ee/bookings/2024-08-13/inputs/booking-references-filter.input";
import { BookingReferencesOutput_2024_08_13 } from "@/ee/bookings/2024-08-13/outputs/booking-references.output";
import { CalendarLinksOutput_2024_08_13 } from "@/ee/bookings/2024-08-13/outputs/calendar-links.output";
import { CancelBookingOutput_2024_08_13 } from "@/ee/bookings/2024-08-13/outputs/cancel-booking.output";
import { CreateBookingOutput_2024_08_13 } from "@/ee/bookings/2024-08-13/outputs/create-booking.output";
import { MarkAbsentBookingOutput_2024_08_13 } from "@/ee/bookings/2024-08-13/outputs/mark-absent.output";
import { ReassignBookingOutput_2024_08_13 } from "@/ee/bookings/2024-08-13/outputs/reassign-booking.output";
import { RescheduleBookingOutput_2024_08_13 } from "@/ee/bookings/2024-08-13/outputs/reschedule-booking.output";
import { BookingReferencesService_2024_08_13 } from "@/ee/bookings/2024-08-13/services/booking-references.service";
import { BookingsService_2024_08_13 } from "@/ee/bookings/2024-08-13/services/bookings.service";
import { CalVideoService } from "@/ee/bookings/2024-08-13/services/cal-video.service";
import { VERSION_2024_08_13_VALUE, VERSION_2024_08_13 } from "@/lib/api-versions";
import { API_KEY_OR_ACCESS_TOKEN_HEADER } from "@/lib/docs/headers";
import { PlatformPlan } from "@/modules/auth/decorators/billing/platform-plan.decorator";
import { GetUser } from "@/modules/auth/decorators/get-user/get-user.decorator";
import { Permissions } from "@/modules/auth/decorators/permissions/permissions.decorator";
import { Roles } from "@/modules/auth/decorators/roles/roles.decorator";
import { ApiAuthGuard } from "@/modules/auth/guards/api-auth/api-auth.guard";
import { PermissionsGuard } from "@/modules/auth/guards/permissions/permissions.guard";
import { UsersService } from "@/modules/users/services/users.service";
import { UserWithProfile } from "@/modules/users/users.repository";
import {
  Controller,
  Post,
  Logger,
  Body,
  UseGuards,
  Req,
  Get,
  Param,
  Query,
  HttpCode,
  HttpStatus,
} from "@nestjs/common";
import {
  ApiOperation,
  ApiTags as DocsTags,
  ApiHeader,
  getSchemaPath,
  ApiBody,
  ApiExtraModels,
} from "@nestjs/swagger";
import { Request } from "express";

import { BOOKING_READ, BOOKING_WRITE, SUCCESS_STATUS } from "@calcom/platform-constants";
import {
  CancelBookingInput,
  CancelBookingInput_2024_08_13,
  CancelBookingInputPipe,
  CancelSeatedBookingInput_2024_08_13,
  GetBookingOutput_2024_08_13,
  GetBookingsOutput_2024_08_13,
  RescheduleBookingInput,
  RescheduleBookingInput_2024_08_13,
  RescheduleBookingInputPipe,
  RescheduleSeatedBookingInput_2024_08_13,
  GetBookingRecordingsOutput,
  GetBookingTranscriptsOutput,
} from "@calcom/platform-types";
import {
  CreateBookingInputPipe,
  CreateBookingInput,
  GetBookingsInput_2024_08_13,
  ReassignToUserBookingInput_2024_08_13,
  MarkAbsentBookingInput_2024_08_13,
  CreateBookingInput_2024_08_13,
  CreateInstantBookingInput_2024_08_13,
  CreateRecurringBookingInput_2024_08_13,
  DeclineBookingInput_2024_08_13,
} from "@calcom/platform-types";

@Controller({
  path: "/v2/bookings",
  version: VERSION_2024_08_13_VALUE,
})
@UseGuards(PermissionsGuard)
@DocsTags("Bookings")
@ApiHeader({
  name: "cal-api-version",
  description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  ,
  example: VERSION_2024_08_13,
  required: true,
  schema: {
    default: VERSION_2024_08_13,
  },
})
export class BookingsController_2024_08_13 {
  private readonly logger = new Logger("BookingsController_2024_08_13");

  constructor(
    private readonly bookingsService: BookingsService_2024_08_13,
    private readonly usersService: UsersService,
    private readonly bookingReferencesService: BookingReferencesService_2024_08_13,
    private readonly calVideoService: CalVideoService
  ) {}

  @Post("/")
  @ApiOperation({
    summary: "Create a booking",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  @ApiBody({
    schema: {
      oneOf: [
        { $ref: getSchemaPath(CreateBookingInput_2024_08_13) },
        { $ref: getSchemaPath(CreateInstantBookingInput_2024_08_13) },
        { $ref: getSchemaPath(CreateRecurringBookingInput_2024_08_13) },
      ],
    },
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  @ApiExtraModels(
    CreateBookingInput_2024_08_13,
    CreateInstantBookingInput_2024_08_13,
    CreateRecurringBookingInput_2024_08_13
  )
  async createBooking(
    @Body(new CreateBookingInputPipe())
    body: CreateBookingInput,
    @Req() request: Request
  ): Promise<CreateBookingOutput_2024_08_13> {
    const booking = await this.bookingsService.createBooking(request, body);

    if (Array.isArray(booking)) {
      await this.bookingsService.billBookings(booking);
    } else {
      await this.bookingsService.billBooking(booking);
    }

    return {
      status: SUCCESS_STATUS,
      data: booking,
    };
  }

  @Get("/:bookingUid")
  @UseGuards(BookingUidGuard)
  @ApiOperation({
    summary: "Get a booking",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  async getBooking(@Param("bookingUid") bookingUid: string): Promise<GetBookingOutput_2024_08_13> {
    const booking = await this.bookingsService.getBooking(bookingUid);

    return {
      status: SUCCESS_STATUS,
      data: booking,
    };
  }

  @Get("/:bookingUid/recordings")
  @UseGuards(BookingUidGuard)
  @ApiOperation({
    summary: "Get all the recordings for the booking",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  async getBookingRecordings(@Param("bookingUid") bookingUid: string): Promise<GetBookingRecordingsOutput> {
    const recordings = await this.calVideoService.getRecordings(bookingUid);

    return {
      status: SUCCESS_STATUS,
      data: recordings,
    };
  }

  @Get("/:bookingUid/transcripts")
  @UseGuards(BookingUidGuard)
  @ApiOperation({
    summary: "Get all the transcripts download links for the booking",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  async getBookingTranscripts(@Param("bookingUid") bookingUid: string): Promise<GetBookingTranscriptsOutput> {
    const transcripts = await this.calVideoService.getTranscripts(bookingUid);

    return {
      status: SUCCESS_STATUS,
      data: transcripts ?? [],
    };
  }

  @Get("/")
  @UseGuards(ApiAuthGuard)
  @ApiHeader(API_KEY_OR_ACCESS_TOKEN_HEADER)
  @Permissions([BOOKING_READ])
  @ApiOperation({ summary: "Get all bookings" })
  async getBookings(
    @Query() queryParams: GetBookingsInput_2024_08_13,
    @GetUser() user: UserWithProfile
  ): Promise<GetBookingsOutput_2024_08_13> {
    const profile = this.usersService.getUserMainProfile(user);

    const { bookings, pagination } = await this.bookingsService.getBookings(queryParams, {
      email: user.email,
      id: user.id,
      orgId: profile?.organizationId,
    });

    return {
      status: SUCCESS_STATUS,
      data: bookings,
      pagination,
    };
  }

  @Post("/:bookingUid/reschedule")
  @UseGuards(BookingUidGuard)
  @ApiOperation({
    summary: "Reschedule a booking",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  @ApiBody({
    schema: {
      oneOf: [
        { $ref: getSchemaPath(RescheduleBookingInput_2024_08_13) },
        { $ref: getSchemaPath(RescheduleSeatedBookingInput_2024_08_13) },
      ],
    },
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  @ApiExtraModels(RescheduleBookingInput_2024_08_13, RescheduleSeatedBookingInput_2024_08_13)
  async rescheduleBooking(
    @Param("bookingUid") bookingUid: string,
    @Body(new RescheduleBookingInputPipe())
    body: RescheduleBookingInput,
    @Req() request: Request
  ): Promise<RescheduleBookingOutput_2024_08_13> {
    const newBooking = await this.bookingsService.rescheduleBooking(request, bookingUid, body);
    await this.bookingsService.billRescheduledBooking(newBooking, bookingUid);

    return {
      status: SUCCESS_STATUS,
      data: newBooking,
    };
  }

  @Post("/:bookingUid/cancel")
  @UseGuards(BookingUidGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: "Cancel a booking",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  @ApiBody({
    schema: {
      oneOf: [
        { $ref: getSchemaPath(CancelBookingInput_2024_08_13) },
        { $ref: getSchemaPath(CancelSeatedBookingInput_2024_08_13) },
      ],
    },
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  @ApiExtraModels(CancelBookingInput_2024_08_13, CancelSeatedBookingInput_2024_08_13)
  async cancelBooking(
    @Req() request: Request,
    @Param("bookingUid") bookingUid: string,
    @Body(new CancelBookingInputPipe())
    body: CancelBookingInput
  ): Promise<CancelBookingOutput_2024_08_13> {
    const cancelledBooking = await this.bookingsService.cancelBooking(request, bookingUid, body);

    return {
      status: SUCCESS_STATUS,
      data: cancelledBooking,
    };
  }

  @Post("/:bookingUid/mark-absent")
  @HttpCode(HttpStatus.OK)
  @Permissions([BOOKING_WRITE])
  @UseGuards(ApiAuthGuard, BookingUidGuard)
  @ApiHeader(API_KEY_OR_ACCESS_TOKEN_HEADER)
  @ApiOperation({
    summary: "Mark a booking absence",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  async markNoShow(
    @Param("bookingUid") bookingUid: string,
    @Body() body: MarkAbsentBookingInput_2024_08_13,
    @GetUser("id") ownerId: number
  ): Promise<MarkAbsentBookingOutput_2024_08_13> {
    const booking = await this.bookingsService.markAbsent(bookingUid, ownerId, body);

    return {
      status: SUCCESS_STATUS,
      data: booking,
    };
  }

  @Post("/:bookingUid/reassign")
  @HttpCode(HttpStatus.OK)
  @Permissions([BOOKING_WRITE])
  @UseGuards(ApiAuthGuard, BookingUidGuard)
  @ApiHeader(API_KEY_OR_ACCESS_TOKEN_HEADER)
  @ApiOperation({
    summary: "Reassign a booking to auto-selected host",
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  async reassignBooking(
    @Param("bookingUid") bookingUid: string,
    @GetUser() user: UserWithProfile
  ): Promise<ReassignBookingOutput_2024_08_13> {
    const booking = await this.bookingsService.reassignBooking(bookingUid, user);

    return {
      status: SUCCESS_STATUS,
      data: booking,
    };
  }

  @Post("/:bookingUid/reassign/:userId")
  @HttpCode(HttpStatus.OK)
  @Permissions([BOOKING_WRITE])
  @UseGuards(ApiAuthGuard, BookingUidGuard)
  @ApiHeader(API_KEY_OR_ACCESS_TOKEN_HEADER)
  @ApiOperation({
    summary: "Reassign a booking to a specific host",
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  async reassignBookingToUser(
    @Param("bookingUid") bookingUid: string,
    @Param("userId") userId: number,
    @GetUser("id") reassignedById: number,
    @Body() body: ReassignToUserBookingInput_2024_08_13
  ): Promise<ReassignBookingOutput_2024_08_13> {
    const booking = await this.bookingsService.reassignBookingToUser(
      bookingUid,
      userId,
      reassignedById,
      body
    );

    return {
      status: SUCCESS_STATUS,
      data: booking,
    };
  }

  @Post("/:bookingUid/confirm")
  @HttpCode(HttpStatus.OK)
  @Permissions([BOOKING_WRITE])
  @UseGuards(ApiAuthGuard, BookingUidGuard)
  @ApiHeader(API_KEY_OR_ACCESS_TOKEN_HEADER)
  @ApiOperation({
    summary: "Confirm a booking",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  async confirmBooking(
    @Param("bookingUid") bookingUid: string,
    @GetUser() user: UserWithProfile
  ): Promise<GetBookingOutput_2024_08_13> {
    const booking = await this.bookingsService.confirmBooking(bookingUid, user);

    return {
      status: SUCCESS_STATUS,
      data: booking,
    };
  }

  @Post("/:bookingUid/decline")
  @HttpCode(HttpStatus.OK)
  @Permissions([BOOKING_WRITE])
  @UseGuards(ApiAuthGuard, BookingUidGuard)
  @ApiHeader(API_KEY_OR_ACCESS_TOKEN_HEADER)
  @ApiOperation({
    summary: "Decline a booking",
    description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  })
  async declineBooking(
    @Param("bookingUid") bookingUid: string,
    @Body() body: DeclineBookingInput_2024_08_13,
    @GetUser() user: UserWithProfile
  ): Promise<GetBookingOutput_2024_08_13> {
    const booking = await this.bookingsService.declineBooking(bookingUid, user, body.reason);

    return {
      status: SUCCESS_STATUS,
      data: booking,
    };
  }

  @Get("/:bookingUid/calendar-links")
  @UseGuards(ApiAuthGuard, BookingUidGuard)
  @Permissions([BOOKING_READ])
  @ApiHeader(API_KEY_OR_ACCESS_TOKEN_HEADER)
  @ApiOperation({
    summary: "Get 'Add to Calendar' links for a booking",
    description:
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
  })
  @HttpCode(HttpStatus.OK)
  async getCalendarLinks(@Param("bookingUid") bookingUid: string): Promise<CalendarLinksOutput_2024_08_13> {
    const calendarLinks = await this.bookingsService.getCalendarLinks(bookingUid);

    return {
      status: SUCCESS_STATUS,
      data: calendarLinks,
    };
  }

  @Get("/:bookingUid/references")
  @PlatformPlan("SCALE")
  @UseGuards(ApiAuthGuard, BookingUidGuard)
  @Permissions([BOOKING_READ])
  @ApiHeader(API_KEY_OR_ACCESS_TOKEN_HEADER)
  @ApiOperation({
    summary: "Get booking references",
  })
  @HttpCode(HttpStatus.OK)
  async getBookingReferences(
    @Param("bookingUid") bookingUid: string,
    @GetUser("id") userId: number,
    @Query() filter: BookingReferencesFilterInput_2024_08_13
  ): Promise<BookingReferencesOutput_2024_08_13> {
    const bookingReferences = await this.bookingReferencesService.getBookingReferences(
      bookingUid,
      userId,
      filter
    );

    return {
      status: SUCCESS_STATUS,
      data: bookingReferences,
    };
  }
}
