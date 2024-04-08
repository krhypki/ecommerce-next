"use server";

import { createOrder, findOrdersByEmail, removeOrder } from "@/db/order";
import { getUserFromSession } from "@/lib/utils/get-user-from-session";
import auth from "@/middleware";
import { EcommerceUser, Order, Product } from "@prisma/client";
import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

type PaymentItem = {
  quantity: number;
  price: string;
  productId: Product["id"];
};

export async function createCheckoutSession(
  products: PaymentItem[],
  email: EcommerceUser["email"]
) {
  let userEmail;

  if (!email) {
    redirect("/error");
  }

  const isAuth = await auth();

  try {
    const orderId = await createOrder(products, email, !!isAuth);
    let stripeItems: Array<Partial<PaymentItem>> = [...products];
    stripeItems = stripeItems.map((product) => {
      delete product.productId;
      return product;
    });

    const checkoutSession = await stripe.checkout.sessions.create({
      customer_email: email || userEmail,
      line_items: stripeItems,
      mode: "payment",
      success_url: `${process.env.BASE_URL}/checkout/payment?success=true&orderId=${orderId}`,
      cancel_url: `${process.env.BASE_URL}/checkout/payment?success=false&orderId=${orderId}`,
    });

    redirect(checkoutSession.url);
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    redirect("/error");
  }
}

export async function removeTempOrder(id: Order["id"]) {
  try {
    await removeOrder(id);
  } catch {
    redirect("/error");
  }
}

export async function getCurrentUserOrders() {
  const user = await getUserFromSession();

  try {
    const orders = await findOrdersByEmail(user.email);
    return orders;
  } catch (error) {
    redirect("/error");
  }
}
