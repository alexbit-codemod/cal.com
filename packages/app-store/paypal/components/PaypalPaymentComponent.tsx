import Link from "next/link";
import z from "zod";

interface IPaypalPaymentComponentProps {
  payment: {
    // Will be parsed on render
    data: unknown;
  };
}

// Create zod schema for data
const PaymentPaypalDataSchema = z.object({
  order: z
    .object({
      id: z.string(),
      status: z.string(),
      links: z.array(
        z.object({
          href: z.string(),
          rel: z.string(),
          method: z.string(),
        })
      ),
    })
    .optional(),
  capture: z.object({}).optional(),
});

export const PaypalPaymentComponent = (props: IPaypalPaymentComponentProps) => {
  const { payment } = props;
  const { data } = payment;
  const wrongUrl = (
    <>
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
    </>
  );

  const parsedData = PaymentPaypalDataSchema.safeParse(data);
  if (!parsedData.success || !parsedData.data?.order?.links) {
    return wrongUrl;
  }
  const paymentUrl = parsedData.data.order.links.find(
    (link) => link.rel === "approve" || link.rel === "payer-action"
  )?.href;
  if (!paymentUrl) {
    return wrongUrl;
  }
  return (
    <div className="mt-4 flex h-full w-full flex-col items-center justify-center">
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$// To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        <span />
      </Link>
    </div>
  );
};
