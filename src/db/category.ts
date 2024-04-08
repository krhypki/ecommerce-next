import { Category } from "@prisma/client";
import prisma from "./prisma";

export async function findAllCategories() {
  return await prisma.category.findMany();
}

export async function findCategoryByName(name: Category["name"]) {
  return await prisma.category.findUnique({
    where: {
      name,
    },
  });
}
