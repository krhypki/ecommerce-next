"use client";

import { CartProduct } from "@/lib/types";
import { useCartStore } from "@/stores/cart";
import { Product } from "@prisma/client";
import { FormEvent, useState } from "react";
import AddToCartButton from "../AddToCartButton";
import OutOfStockButton from "./OutOfStockButton";
import ProductQuantityControls from "./ProductQuantityControls";

type ProductAddToCartProps = {
  product: Omit<CartProduct, "quantity">;
  stock: Product["stock"];
};

export default function ProductAddToCart({
  product,
  stock,
}: ProductAddToCartProps) {
  const addToCart = useCartStore((state) => state.addProduct);
  const productInCart = useCartStore((state) => state.getProduct(product.id));
  const [quantity, setQuantity] = useState(1);
  const maxQuantity = stock - (productInCart?.quantity ?? 0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addToCart({ ...product, quantity });
    setQuantity(1);
  };

  const handleQuantityChange = (quantity: number) => {
    setQuantity(quantity);
  };

  if (maxQuantity <= 0) {
    return <OutOfStockButton />;
  }

  return (
    <form className="space-y-4 max-w-[160px]" onSubmit={handleSubmit}>
      <p className="mb-4">In Stock: {maxQuantity}</p>
      <ProductQuantityControls
        quantity={quantity}
        setQuantity={handleQuantityChange}
        max={maxQuantity}
      />
      <AddToCartButton className="w-full" size="default" />
    </form>
  );
}
