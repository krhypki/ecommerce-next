"use server";

import prisma from "@/db/prisma";
import {
  createReview,
  findDiscounted,
  findOneById,
  findTopRated,
  removeReview,
} from "@/db/product";
import { INVALID_FORM_DATA_RESPONSE } from "@/lib/constants";
import { createCartProduct } from "@/lib/utils/get-card-product";
import { getUserFromSession } from "@/lib/utils/get-user-from-session";
import { productReviewSchema } from "@/lib/validators/product-schema";
import { Product, Review } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";

export async function getProductById(id: Product["id"]) {
  try {
    const product = await findOneById(id);

    if (!product) {
      notFound();
    }
    return product;
  } catch (err) {
    redirect("/error");
  }
}

export async function addProductReview(
  id: Product["id"],
  formData: unknown
): Promise<{ message?: string; error?: string }> {
  if (!(formData instanceof FormData)) {
    return INVALID_FORM_DATA_RESPONSE;
  }

  const formDataObj = Object.fromEntries(formData.entries());
  const validatedFormData = productReviewSchema.safeParse(formDataObj);

  if (!validatedFormData.success) {
    return INVALID_FORM_DATA_RESPONSE;
  }

  try {
    const author = await getUserFromSession();
    const { content, rating } = validatedFormData.data;

    await createReview(id, author.id, content, rating);
    revalidatePath("/product");

    return {
      message: "Review added successfully",
    };
  } catch (error) {
    redirect("/error");
  }
}

export async function removeProductReview(
  reviewId: Review["id"],
  productId: Product["id"]
) {
  const review = await removeReview(reviewId, productId);

  if (!review) {
    redirect("/error");
  }

  revalidatePath("/product");

  return {
    message: "Review removed successfully",
  };
}

export async function getTop10Products() {
  try {
    const products = await findTopRated(10);
    return products;
  } catch (error) {
    redirect("/error");
  }
}

export async function getDiscountedProduts() {
  try {
    const products = await findDiscounted();
    return products;
  } catch (error) {
    redirect("/error");
  }
}

export async function getInitialCartProducts(
  localStorageProducts: { id: Product["id"]; quantity: number }[]
) {
  const productIds = localStorageProducts.map((product) => product.id);
  const products = await prisma.product.findMany({
    where: {
      id: {
        in: productIds,
      },
    },
  });

  return products.map((product, index) => ({
    ...createCartProduct(product),
    quantity: localStorageProducts[index].quantity,
  }));
}
