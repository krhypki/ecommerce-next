import { createOrder } from "@/db/order";
import { findOneByEmail } from "@/db/user";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

type StripeProduct = {
  price: {
    id: string;
  };
  quantity: number;
};

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    console.log("Webhook verification failed", error);
    return Response.json(null, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const productsData = await stripe.checkout.sessions.listLineItems(
      event.data.object.id
    );

    const user = await findOneByEmail(event.data.object.customer_email);

    const products = productsData.data.map((product: StripeProduct) => ({
      productId: product.price.id,
      quantity: product.quantity,
    }));

    await createOrder(products, event.data.object.customer_email, !!user);
  }

  return Response.json(null, { status: 200 });
}
