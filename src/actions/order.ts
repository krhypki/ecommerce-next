"use server";

import { findOrdersByEmail, removeOrder } from "@/db/order";
import { getUserFromSession } from "@/lib/utils/get-user-from-session";
import { EcommerceUser, Order } from "@prisma/client";
import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

type PaymentItem = {
  quantity: number;
  price: string;
};

export async function createCheckoutSession(
  products: PaymentItem[],
  email: EcommerceUser["email"]
) {
  if (!email) {
    redirect("/error");
  }

  try {
    const checkoutSession = await stripe.checkout.sessions.create({
      customer_email: email,
      line_items: products,
      mode: "payment",
      success_url: `${process.env.BASE_URL}/checkout/payment?success=true`,
      cancel_url: `${process.env.BASE_URL}/checkout/payment?success=false`,
    });

    redirect(checkoutSession.url);
  } catch (error) {
    console.log(error);
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
