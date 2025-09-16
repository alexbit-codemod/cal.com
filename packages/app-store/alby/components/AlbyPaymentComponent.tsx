"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
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

interface IAlbyPaymentComponentProps {
  payment: {
    // Will be parsed on render
    data: unknown;
  };
  paymentPageProps: PaymentPageProps;
}

// Create zod schema for data
const PaymentAlbyDataSchema = z.object({
  invoice: z
    .object({
      paymentRequest: z.string(),
    })
    .required(),
});

export const AlbyPaymentComponent = (props: IAlbyPaymentComponentProps) => {
  const { payment } = props;
  const { data } = payment;
  const [showQRCode, setShowQRCode] = useState(window.webln === undefined);
  const [isPaying, setPaying] = useState(false);
  const { copyToClipboard, isCopied } = useCopy();
  const wrongUrl = (
    <>
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
    </>
  );

  const parsedData = PaymentAlbyDataSchema.safeParse(data);
  if (!parsedData.success || !parsedData.data?.invoice?.paymentRequest) {
    return wrongUrl;
  }
  const paymentRequest = parsedData.data.invoice.paymentRequest;

  return (
    <div className="mb-4 mt-8 flex h-full w-full flex-col items-center justify-center gap-4">
      <PaymentChecker {...props.paymentPageProps} />
      {isPaying && <Spinner className="mt-12 h-8 w-8" />}
      {!isPaying && (
        <>
          {!showQRCode && (
            <div className="flex gap-4">
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
              {window.webln && (
                // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
              )}
            </div>
          )}
          {showQRCode && (
            <>
              <div className="flex items-center justify-center gap-2">
                <Spinner className="h-4 w-4" />
                // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
              </div>
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
              <Link
                href={`lightning:${paymentRequest}`}
                className="inline-flex items-center justify-center rounded-2xl rounded-md border border-transparent bg-white p-2 font-medium text-black shadow-sm hover:brightness-95 focus:outline-none focus:ring-offset-2">
                <QRCode size={192} value={paymentRequest} />
              </Link>

              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
            </>
          )}
        </>
      )}
      <Link target="_blank" href="https://getalby.com">
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$// To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
        </div>
      </Link>
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
      })();
    }, 1000);

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
