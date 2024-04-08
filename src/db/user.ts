import { EcommerceUser, Prisma } from "@prisma/client";
import prisma from "./prisma";

export async function findOneByEmail(email: EcommerceUser["email"]) {
  return await prisma.ecommerceUser.findUnique({
    where: {
      email,
    },
  });
}

export async function createUser(data: Prisma.EcommerceUserCreateInput) {
  await prisma.ecommerceUser.create({
    data,
  });
}

export async function updateUser(
  email: EcommerceUser["email"],
  data: Prisma.EcommerceUserUpdateInput
) {
  try {
    await prisma.ecommerceUser.update({
      where: {
        email,
      },
      data: data,
    });
  } catch (err) {
    console.log(err);
  }
}
