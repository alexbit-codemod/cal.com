"use client";

import { useEffect, useState } from "react";
import z from "zod";

import type { PaymentPageProps } from "@calcom/features/ee/payments/pages/payment";
import { useBookingSuccessRedirect } from "@calcom/lib/bookingSuccessRedirect";
import { useCompatSearchParams } from "@calcom/lib/hooks/useCompatSearchParams";
import { useCopy } from "@calcom/lib/hooks/useCopy";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import { trpc } from "@calcom/trpc";
import { Button } from "@calcom/ui/components/button";
import { Spinner } from "@calcom/ui/components/icon";
import { showToast } from "@calcom/ui/components/toast";

interface IPaymentComponentProps {
  payment: {
    // Will be parsed on render
    data: unknown;
  };
  paymentPageProps: PaymentPageProps;
}

// Create zod schema for data
const PaymentBTCPayDataSchema = z.object({
  invoice: z.object({ checkoutLink: z.string() }).required(),
});

export const BtcpayPaymentComponent = (props: IPaymentComponentProps) => {
  const { payment } = props;
  const { data } = payment;
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const { copyToClipboard, isCopied } = useCopy();
  const wrongUrl = (
    <>
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
    </>
  );

  const parsedData = PaymentBTCPayDataSchema.safeParse(data);
  if (!parsedData.success || !parsedData.data?.invoice?.checkoutLink) return wrongUrl;
  const checkoutUrl = parsedData.data.invoice.checkoutLink;
  const handleOpenInNewTab = () => {
    window.open(checkoutUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mb-4 mt-8 flex h-full w-full flex-col items-center justify-center gap-4">
      <PaymentChecker {...props.paymentPageProps} />

      {!iframeLoaded && (
        <div className="flex items-center justify-center">
          <Spinner className="mr-2 h-5 w-5" />
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
        </div>
      )}

      <div className={`w-full ${iframeLoaded ? "block" : "hidden"}`}>
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$

        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </div>
    </div>
  );
};

type PaymentCheckerProps = PaymentPageProps;

function PaymentChecker(props: PaymentCheckerProps) {
  // TODO: move booking success code to a common lib function
  // TODO: subscribe rather than polling
  const searchParams = useCompatSearchParams();
  const bookingSuccessRedirect = useBookingSuccessRedirect();
  const utils = trpc.useUtils();
  const { t } = useLocale();

  useEffect(() => {
    if (searchParams === null) {
      return;
    }

    // use closure to ensure non-nullability
    const sp = searchParams;
    const interval = setInterval(() => {
      (async () => {
        try {
          if (props.booking.status === "ACCEPTED") {
            return;
          }
          const { booking: bookingResult } = await utils.viewer.bookings.find.fetch({
            bookingUid: props.booking.uid,
          });

          if (bookingResult?.paid) {
            showToast("Payment successful", "success");

            const params: {
              uid: string;
              email: string | null;
              location: string;
            } = {
              uid: props.booking.uid,
              email: sp.get("email"),
              location: t("web_conferencing_details_to_follow"),
            };

            bookingSuccessRedirect({
              successRedirectUrl: props.eventType.successRedirectUrl,
              query: params,
              booking: props.booking,
              forwardParamsSuccessRedirect: props.eventType.forwardParamsSuccessRedirect,
            });
          }
        } catch (e) {}
      })();
    }, 2000);

    return () => clearInterval(interval);
  }, [
    bookingSuccessRedirect,
    props.booking,
    props.booking.id,
    props.booking.status,
    props.eventType.id,
    props.eventType.successRedirectUrl,
    props.eventType.forwardParamsSuccessRedirect,
    props.payment.success,
    searchParams,
    t,
    utils.viewer.bookings,
  ]);

  return null;
}
