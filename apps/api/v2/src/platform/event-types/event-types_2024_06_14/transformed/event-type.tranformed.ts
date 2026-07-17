import type { transformEventColorsApiToInternal } from "@/platform/event-types/event-types_2024_06_14/transformers/api-to-internal/event-colors";
import type { transformFutureBookingLimitsApiToInternal } from "@/platform/event-types/event-types_2024_06_14/transformers/api-to-internal/future-booking-limits";
import type { transformIntervalLimitsApiToInternal } from "@/platform/event-types/event-types_2024_06_14/transformers/api-to-internal/interval-limits";
import type { transformRecurrenceApiToInternal } from "@/platform/event-types/event-types_2024_06_14/transformers/api-to-internal/recurrence";
import type { transformSeatsApiToInternal } from "@/platform/event-types/event-types_2024_06_14/transformers/api-to-internal/seats";
import type { transformBookingFieldsApiToInternal } from "@/platform/event-types/event-types_2024_06_14/transformers/api-to-internal/booking-fields";
import type { InternalLocationsSchema } from "@/platform/event-types/event-types_2024_06_14/transformers/internal/locations";
import type { z } from "zod";

import type {
  CreateEventTypeInput_2024_06_14,
  ConfirmationPolicyTransformedSchema,
} from "@calcom/platform-types";

export type InputEventTransformed_2024_06_14 = Omit<
  CreateEventTypeInput_2024_06_14,
  | "lengthInMinutes"
  | "locations"
  | "bookingFields"
  | "bookingLimitsCount"
  | "bookingLimitsDuration"
  | "bookingWindow"
  | "bookerLayouts"
  | "confirmationPolicy"
  | "recurrence"
  | "color"
  | "seats"
  | "customName"
  | "useDestinationCalendarEmail"
  | "disableRescheduling"
  | "disableCancelling"
  | "calVideoSettings"
  | "bookerActiveBookingsLimit"
> & {
  length: number;
  slug: string;
  eventName?: string;
  bookingLimits?: ReturnType<typeof transformIntervalLimitsApiToInternal>;
  locations?: z.infer<typeof InternalLocationsSchema>;
  bookingFields?: ReturnType<typeof transformBookingFieldsApiToInternal>;
  durationLimits?: ReturnType<typeof transformIntervalLimitsApiToInternal>;
  recurringEvent?: ReturnType<typeof transformRecurrenceApiToInternal>;
  maxActiveBookingsPerBooker?: number | null;
  maxActiveBookingPerBookerOfferReschedule?: boolean;
  eventTypeColor?: ReturnType<typeof transformEventColorsApiToInternal>;
  useEventTypeDestinationCalendarEmail?: boolean;
  disableRescheduling?: boolean;
  disableCancelling?: boolean;
  minimumRescheduleNotice?: number | null;
  canSendCalVideoTranscriptionEmails?: boolean;
  calVideoSettings?: {
    disableRecordingForOrganizer?: boolean;
    disableRecordingForGuests?: boolean;
    redirectUrlOnExit?: string | null;
    enableAutomaticRecordingForOrganizer?: boolean;
    enableAutomaticTranscription?: boolean;
    disableTranscriptionForGuests?: boolean;
    disableTranscriptionForOrganizer?: boolean;
  };
} & Partial<
    Pick<ConfirmationPolicyTransformedSchema, "requiresConfirmation" | "requiresConfirmationWillBlockSlot">
  > &
  Partial<ReturnType<typeof transformSeatsApiToInternal>> &
  Partial<ReturnType<typeof transformFutureBookingLimitsApiToInternal>>;

export type InputTeamEventTransformed_2024_06_14 = InputEventTransformed_2024_06_14 & {
  hosts: {
    userId: number;
    isFixed: boolean;
    priority: number;
  }[];
  children: {
    id: number;
    name: string;
    email: string;
    eventTypeSlugs: string[];
  }[];
};
