import { Product } from "@prisma/client";
import { CartProduct } from "../types";

export function createCartProduct(
  product: Product
): Omit<CartProduct, "quantity"> {
  return {
    name: product.name,
    price: product.price,
    imageUrl: product.imageUrl,
    id: product.id,
    stock: product.stock,
    paymentId: product.paymentId,
    discount: product.discount,
  };
}
