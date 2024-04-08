"use client";

import { cn } from "@/lib/utils/cn";
import { createCartProduct } from "@/lib/utils/get-card-product";
import { useCartStore } from "@/stores/cart";
import { Product } from "@prisma/client";
import Link from "next/link";
import { MouseEvent } from "react";
import AddToCartButton from "../AddToCartButton";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Heading from "../ui/heading";
import OutOfStockButton from "./OutOfStockButton";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import ProductRating from "./ProductRating";

type ProductCardProps = {
  product: Product;
  className?: string;
};

export default function ProductCard({ className, product }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addProduct);
  const productInCart = useCartStore((state) => state.getProduct(product.id));
  const isOutOfStock = productInCart?.quantity === product.stock;

  const handleAddToCart = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const cartProduct = createCartProduct(product);
    addToCart({ ...cartProduct, quantity: 1 });
  };

  return (
    <Link href={`/product/${product.id}`}>
      <Card
        className={cn(
          "flex flex-col hover:scale-95 transition-transform h-full max-w-[320px] mx-auto",
          className
        )}
      >
        <CardHeader className="text-center">
          <Heading tag="h4">{product.name}</Heading>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-y-6 text-center">
          <ProductImage
            url={product.imageUrl}
            alt={product.name}
            width={300}
            height={160}
          />
          <ProductRating rating={product.rating} />
          <p>{product.description}</p>
        </CardContent>
        <CardFooter className="justify-between mt-auto">
          <ProductPrice price={product.price} discount={product.discount} />

          {!isOutOfStock && <AddToCartButton onClick={handleAddToCart} />}
          {isOutOfStock && <OutOfStockButton />}
        </CardFooter>
      </Card>
    </Link>
  );
}
