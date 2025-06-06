import { useEffect } from "react";
import { shallow } from "zustand/shallow";

import dayjs from "@calcom/dayjs";
import { useBookerStore } from "@calcom/features/bookings/Booker/store";
import { useSlotReservationId } from "@calcom/features/bookings/Booker/useSlotReservationId";
import type { BookerEvent } from "@calcom/features/bookings/types";
import { MINUTES_TO_BOOK } from "@calcom/lib/constants";
import type {
  ApiErrorResponse,
  ApiSuccessResponse,
  ApiSuccessResponseWithoutData,
} from "@calcom/platform-types";

import { useDeleteSelectedSlot } from "./useDeleteSelectedSlot";
import { useReserveSlot } from "./useReserveSlot";

type UseSlotsCallbacks = {
  onReserveSlotSuccess?: (data: ApiSuccessResponse<string>) => void;
  onReserveSlotError?: (err: ApiErrorResponse) => void;
  onDeleteSlotSuccess?: (data: ApiSuccessResponseWithoutData) => void;
  onDeleteSlotError?: (err: ApiErrorResponse) => void;
  handleSlotReservation?: (timeslot: string) => void;
};

export type UseSlotsReturnType = ReturnType<typeof useSlots>;

export const useSlots = (
  event: { data?: Pick<BookerEvent, "id" | "length"> | null },
  {
    onReserveSlotSuccess,
    onReserveSlotError,
    onDeleteSlotSuccess,
    onDeleteSlotError,
    isBookingDryRun,
    handleSlotReservation,
  }: UseSlotsCallbacks & { isBookingDryRun?: boolean } = {}
) => {
  const selectedDuration = useBookerStore((state) => state.selectedDuration);
  const [selectedTimeslot, setSelectedTimeslot] = useBookerStore(
    (state) => [state.selectedTimeslot, state.setSelectedTimeslot],
    shallow
  );

  const [slotReservationId, setSlotReservationId] = useSlotReservationId();

  const reserveSlotMutation = useReserveSlot({
    onSuccess: (res) => {
      setSlotReservationId(res.data);
      onReserveSlotSuccess?.(res);
    },
    onError: onReserveSlotError,
  });

  const removeSelectedSlot = useDeleteSelectedSlot({
    onSuccess: onDeleteSlotSuccess,
    onError: onDeleteSlotError,
  });

  const handleRemoveSlot = () => {
    if (event?.data) {
      removeSelectedSlot.mutate({ uid: slotReservationId ?? undefined });
    }
  };

  const handleReserveSlot = () => {
    if (event?.data?.id && selectedTimeslot && (selectedDuration || event?.data?.length)) {
      if (handleSlotReservation) {
        handleSlotReservation(selectedTimeslot);
        return;
      }

      reserveSlotMutation.mutate({
        slotUtcStartDate: dayjs(selectedTimeslot).utc().format(),
        eventTypeId: event.data.id,
        slotUtcEndDate: dayjs(selectedTimeslot)
          .utc()
          .add(selectedDuration || event.data.length, "minutes")
          .format(),
        _isDryRun: isBookingDryRun,
      });
    }
  };

  const timeslot = useBookerStore((state) => state.selectedTimeslot);

  useEffect(() => {
    handleReserveSlot();

    const interval = setInterval(() => {
      handleReserveSlot();
    }, parseInt(MINUTES_TO_BOOK) * 60 * 1000 - 2000);

    return () => {
      handleRemoveSlot();
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event?.data?.id, timeslot]);

  return {
    selectedTimeslot,
    setSelectedTimeslot,
    setSlotReservationId,
    slotReservationId,
    handleReserveSlot,
    handleRemoveSlot,
    // TODO: implement slot no longer available feature
    allSelectedTimeslots: [],
  };
};
