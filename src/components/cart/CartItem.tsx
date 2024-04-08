import { CartProduct } from "@/lib/types";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";

type CartItemProps = {
  product: CartProduct;
  children?: React.ReactNode;
  className?: string;
};

export default function CartItem({
  product,
  children,
  className,
}: CartItemProps) {
  return (
    <div className={cn("flex gap-x-4", className)}>
      <Image
        src={`${product.imageUrl}?fm=jpg&h=120&w=180`}
        alt={product.name}
        width={120}
        height={80}
        className="w-auto"
      />

      <div className="flex flex-col">
        <span className="font-bold">{product.name}</span>
        <small>Quantity: {product.quantity}</small>
      </div>
      {children}
    </div>
  );
}
