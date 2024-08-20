import { Product } from ".prisma/client";
import { CartProduct } from "@/lib/types";
import { formatCurrency } from "@/lib/utils/formatCurrency";

type ProductPriceProps = {
  price: Product["price"];
  discount: Product["discount"];
  quantity?: CartProduct["quantity"];
};

export default function ProductPrice({
  price,
  discount,
  quantity,
}: ProductPriceProps) {
  const discountedPrice = discount ? price - (price * discount) / 100 : price;
  const totalPrice = quantity ? (
    <span>Total: {formatCurrency(discountedPrice * quantity)}</span>
  ) : null;

  if (!discount) {
    return (
      <>
        <span>{formatCurrency(price)}</span>
        {totalPrice}
      </>
    );
  }

  return (
    <>
      <div>
        <span className={discount ? "line-through text-destructive" : ""}>
          {formatCurrency(price)}
        </span>
        <span className="block">
          {formatCurrency(price - (price * discount) / 100)}
        </span>
      </div>
      {totalPrice}
    </>
  );
}
