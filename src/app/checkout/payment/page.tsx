import PaymentStatus from "@/components/PaymentStatus";
import SectionBlock from "@/components/ui/SectionBlock";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Payment",
};

type PaymentPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function PaymentPage({ searchParams }: PaymentPageProps) {
  if (typeof searchParams.success === "undefined") {
    notFound();
  }

  const paymentSuccess = searchParams.success === "true";
  return (
    <main>
      <SectionBlock>
        {!paymentSuccess && (
          <PaymentStatus heading="Payment cancelled">
            <Button asChild>
              <Link href="/checkout">Checkout</Link>
            </Button>
          </PaymentStatus>
        )}
        {paymentSuccess && (
          <PaymentStatus heading="Payment successful">
            <p className="text-xl">Your order is in process</p>
          </PaymentStatus>
        )}
      </SectionBlock>
    </main>
  );
}
