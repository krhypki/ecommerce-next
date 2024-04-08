"use server";

import { findAllCategories, findCategoryByName } from "@/db/category";
import { findCategoryProductsyByParams } from "@/db/product";
import { ProductSearchParams } from "@/lib/types";
import { Category } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";

export async function getAllCategories() {
  return await findAllCategories();
}

export async function getCategoryData(name: Category["name"]) {
  try {
    const category = await findCategoryByName(name);
    if (!category) {
      notFound();
    }

    return category;
  } catch (error) {
    redirect("/error");
  }
}

export async function getCategoryProducts(
  name: Category["name"],
  searchParams: ProductSearchParams
) {
  try {
    const products = await findCategoryProductsyByParams(name, searchParams);

    return products;
  } catch (error) {
    console.log(error);
    redirect("/error");
  }
}

export async function revalidateTest() {
  revalidatePath("/category", "layout");
}
