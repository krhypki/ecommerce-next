import { CartProduct } from "@/lib/types";
import { cn } from "@/lib/utils/cn";
import { useCartStore } from "@/stores/cart";
import { useState } from "react";
import ProductImage from "../product/ProductImage";
import ProductPrice from "../product/ProductPrice";
import ProductQuantityControls from "../product/ProductQuantityControls";

type ProductCardDetailsProps = {
  product: CartProduct;
  className?: string;
};

export default function CartItemDetails({
  product,
  className,
}: ProductCardDetailsProps) {
  const updateProductQuantity = useCartStore(
    (state) => state.updateProductQuantity
  );
  const removeProduct = useCartStore((state) => state.removeProduct);

  const [quantity, setQuantity] = useState(product.quantity);

  const handleQuantityChange = (quantity: number) => {
    if (quantity === 0) {
      removeProduct(product.id);
      return;
    }

    setQuantity(quantity);
    updateProductQuantity(product.id, quantity);
  };

  return (
    <div
      className={cn(
        "flex max-md:flex-col items-center justify-between gap-y-4 max-md:text-center",
        className
      )}
    >
      <ProductImage
        url={product.imageUrl}
        width={200}
        height={150}
        alt={product.name}
      />
      <div>
        <span className="font-bold block mb-4">{product.name}</span>
        <small>Quantity: {product.quantity}</small>
      </div>
      <div className="flex flex-col gap-y-4">
        <ProductPrice
          price={product.price}
          discount={product.discount}
          quantity={product.quantity}
        />
      </div>

      <div>
        <ProductQuantityControls
          includeRemove
          max={product.stock}
          quantity={quantity}
          setQuantity={handleQuantityChange}
        />
      </div>
    </div>
  );
}
