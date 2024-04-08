import { CartProduct } from "@/lib/types";
import { setLocalStorageProducts } from "@/lib/utils/setLocalStorageProducts";
import { create } from "zustand";

type CartStore = {
  products: CartProduct[];
  updateProductQuantity: (
    productId: CartProduct["id"],
    quantity: number
  ) => void;
  clearCart: () => void;
  setProducts: (products: CartProduct[]) => void;
  totalPrice: () => number;
  removeProduct: (productId: CartProduct["id"]) => void;
  totalNumberOfProducts: () => number;
  addProduct: (product: CartProduct) => void;
  getProduct: (productId: CartProduct["id"]) => CartProduct | undefined;
};

export const useCartStore = create<CartStore>((set, get) => ({
  products: [],
  setProducts: (products) => set({ products }),
  clearCart: () => {
    set({ products: [] });
    setLocalStorageProducts([]);
  },
  addProduct: (newProduct) => {
    set((state) => {
      const isInCart = state.products.some(
        (product) => product.id === newProduct.id
      );

      if (!isInCart) {
        return {
          products: [
            ...state.products,
            { ...newProduct, quantity: newProduct.quantity },
          ],
        };
      }
      return {
        products: state.products.map((product) =>
          product.id === newProduct.id
            ? {
                ...product,
                quantity: product.quantity + newProduct.quantity,
              }
            : product
        ),
      };
    });

    setLocalStorageProducts(get().products);
  },
  totalPrice: () => {
    return get().products.reduce(
      (total, product) => {
        const discount = product.discount || 0;
        const discountedPrice = product.price * (1 - discount / 100);
        return total + discountedPrice * product.quantity;
      },

      0
    );
  },
  totalNumberOfProducts: () =>
    get().products.reduce((total, product) => total + product.quantity, 0),
  updateProductQuantity: (id, quantity) => {
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, quantity } : product
      ),
    }));

    setLocalStorageProducts(get().products);
  },
  getProduct: (productId: CartProduct["id"]) => {
    return get().products.find((product) => product.id === productId);
  },
  removeProduct: (productId) => {
    set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    }));

    setLocalStorageProducts(get().products);
  },
}));
