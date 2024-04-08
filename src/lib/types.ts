import { Category, Prisma, Product } from "@prisma/client";
import { z } from "zod";
import {
  checkoutOrderSchema,
  userOrderInfoSchema,
} from "./validators/order-schema";

export type AuthActionType = "login" | "signup";
export type SortBy = "price" | "rating";
export type SortDirection = "asc" | "desc";
export type categoryWithBrands = Category & { brands: string[] };
export type ProductFilterOption =
  | "brand"
  | "rating"
  | "pricefrom"
  | "priceto"
  | "discount";
export type ProductSearchParams = { [key in ProductFilterOption]?: string };

export type UrlPageParams = {
  params: {
    category: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

const review = Prisma.validator<Prisma.ReviewDefaultArgs>()({
  include: { author: true },
});

const order = Prisma.validator<Prisma.OrderDefaultArgs>()({
  include: { products: { include: { product: true } } },
});

export type ReviewWithRelations = Prisma.ReviewGetPayload<typeof review>;
export type OrderWithRelations = Prisma.OrderGetPayload<typeof order>;
export type CartProduct = Omit<
  Product,
  "categoryId" | "rating" | "brand" | "description"
> & {
  quantity: number;
};

export type CheckoutSchema = z.infer<typeof checkoutOrderSchema>;
export type OrderInfoSchema = z.infer<typeof userOrderInfoSchema>;
export type OrderProducts = {
  id: Product["id"];
  quantity: number;
};
