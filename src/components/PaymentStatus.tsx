"use client";

import { useCartStore } from "@/stores/cart";
import { useEffect } from "react";
import Heading from "./ui/Heading";

type PaymentStatusProps = {
  heading: string;
  children: React.ReactNode;
};

export default function PaymentStatus({
  heading,
  children,
}: PaymentStatusProps) {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);
  return (
    <div className="flex flex-col items-center">
      <Heading tag="h1" className="mb-10">
        {heading}
      </Heading>
      {children}
    </div>
  );
}
