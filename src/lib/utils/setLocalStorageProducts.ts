import { CartProduct } from "../types";

export function setLocalStorageProducts(products: CartProduct[]) {
  const localStorageProducts = products.map((product) => ({
    id: product.id,
    quantity: product.quantity,
  }));
  localStorage.setItem("products", JSON.stringify(localStorageProducts));
}
