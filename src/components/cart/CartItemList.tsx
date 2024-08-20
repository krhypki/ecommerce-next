"use client";

import { formatCurrency } from "@/lib/utils/formatCurrency";
import { useCartStore } from "@/stores/cart";
import CartEmptyState from "./CartEmptyState";
import CartItemDetails from "./CartItemDetails";

type CartItemListProps = {
  children?: React.ReactNode;
};

export default function CartItemList({ children }: CartItemListProps) {
  const products = useCartStore((state) => state.products);
  const totalPrice = useCartStore((state) => state.totalPrice());

  if (!products.length) {
    return <CartEmptyState />;
  }

  return (
    <>
      <div>
        {products.map((product) => (
          <CartItemDetails
            key={product.id}
            product={product}
            className="py-6 border-b"
          />
        ))}
      </div>
      <div className="flex items-center justify-between mt-10">
        <p>
          Total price:
          <span className="font-bold">{formatCurrency(totalPrice)}</span>
        </p>
        {children}
      </div>
    </>
  );
}
