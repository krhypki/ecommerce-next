"use client";

import { getInitialCartProducts } from "@/actions/product";
import { useCartStore } from "@/stores/cart";
import { PopoverClose } from "@radix-ui/react-popover";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import CartItem from "../cart/CartItem";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export default function CartPopover() {
  const products = useCartStore((state) => state.products);
  const setStoreProducts = useCartStore((state) => state.setProducts);
  const clearCart = useCartStore((state) => state.clearCart);
  const totalNumberOfProducts = useCartStore((state) =>
    state.totalNumberOfProducts()
  );

  const pathname = usePathname();
  const isCartPage = pathname === "/cart";

  useEffect(() => {
    const setInitialProducts = async () => {
      const localStorageState = localStorage.getItem("products");
      if (localStorageState) {
        const localStorageProducts = JSON.parse(localStorageState);

        if (localStorageProducts) {
          const cartProducts = await getInitialCartProducts(
            localStorageProducts
          );
          setStoreProducts(cartProducts);
        }
      }
    };

    setInitialProducts();
  }, [setStoreProducts]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button disabled={isCartPage} size="sm">
          <FaShoppingCart />
          {totalNumberOfProducts > 0 && (
            <span className="font-bold block ml-2">
              {totalNumberOfProducts}
            </span>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        {!products.length && (
          <p className="text-center">Nothing is here yet.</p>
        )}
        {!!products.length && (
          <>
            <ul>
              {products.map((product) => (
                <li
                  key={product.id}
                  className="py-4 px-3 border-b last-of-type:border-b-0"
                >
                  <CartItem product={product} />
                </li>
              ))}
            </ul>

            <PopoverClose asChild>
              <Button
                onClick={clearCart}
                className="w-full mt-6"
                variant="destructive"
              >
                Clear
              </Button>
            </PopoverClose>

            <Button asChild className="mt-4 w-full">
              <PopoverClose asChild>
                <Link href="/cart">Summary</Link>
              </PopoverClose>
            </Button>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
}
