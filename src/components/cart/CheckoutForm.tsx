"use client";

import { createCheckoutSession } from "@/actions/order";
import { OrderInfoSchema } from "@/lib/types";
import { useCartStore } from "@/stores/cart";
import { EcommerceUser } from "@prisma/client";
import OrderInformationForm from "../OrderInformationForm";
import Heading from "../ui/heading";

type CheckoutFormProps = {
  user: EcommerceUser | null;
};

export default function CheckoutForm({ user }: CheckoutFormProps) {
  const products = useCartStore((state) =>
    state.products.map((product) => ({
      price: product.paymentId,
      quantity: product.quantity,
    }))
  );

  const handleAfterSubmission = async (formData: OrderInfoSchema) => {
    await createCheckoutSession(products, formData.email);
  };

  return (
    <>
      <Heading tag="h1" className="mb-16">
        Order information
      </Heading>
      <OrderInformationForm
        submitButtonText="Proceed to payment"
        handleAfterSubmission={handleAfterSubmission}
        user={user}
        includeEmail
      />
    </>
  );
}
