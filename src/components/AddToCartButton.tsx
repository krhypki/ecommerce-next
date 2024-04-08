"use client";

import { cn } from "@/lib/utils/cn";
import { MouseEvent } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Button, ButtonProps } from "./ui/button";

type AddToCartButtonProps = ButtonProps & {
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export default function AddToCartButton({
  onClick,
  className,
  ...props
}: AddToCartButtonProps) {
  return (
    <Button
      className={cn("gap-x-2", className)}
      size="sm"
      {...props}
      onClick={onClick}
    >
      Add to cart
      <FaShoppingCart />
    </Button>
  );
}
