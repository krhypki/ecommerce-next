import { EcommerceUser, Order, OrderProduct } from "@prisma/client";
import prisma from "./prisma";

export async function createOrder(
  items: Pick<OrderProduct, "productId" | "quantity">[],
  email: EcommerceUser["email"],
  hasAccount: boolean
) {
  await Promise.all(
    items.map(async (item) => {
      return await prisma.product.update({
        where: {
          id: item.productId,
        },
        data: {
          stock: { decrement: item.quantity },
        },
      });
    })
  );

  const order = await prisma.order.create({
    data: {
      notSignedEmail: email,
      user: hasAccount
        ? {
            connect: {
              email,
            },
          }
        : undefined,
      products: {
        create: [
          ...items.map((item) => ({
            quantity: item.quantity,
            product: {
              connect: {
                id: item.productId,
              },
            },
          })),
        ],
      },
    },
  });

  return order.id;
}

export async function removeOrder(id: Order["id"]) {
  const order = await prisma.order.findUnique({
    where: {
      id,
    },
    include: {
      products: true,
    },
  });

  if (!order) {
    throw new Error("Order not found");
  }

  await Promise.all(
    order.products.map(async (item) => {
      return await prisma.product.update({
        where: {
          id: item.productId,
        },
        data: {
          stock: { increment: item.quantity },
        },
      });
    })
  );

  await prisma.order.delete({
    where: {
      id,
    },
  });
}

export async function findOrdersByEmail(email: EcommerceUser["email"]) {
  return await prisma.order.findMany({
    where: {
      user: {
        email,
      },
    },
    include: {
      products: {
        include: {
          product: true,
        },
      },
    },
  });
}
