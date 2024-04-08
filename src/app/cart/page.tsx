import CartItemList from "@/components/cart/CartItemList";
import CheckoutBtn from "@/components/cart/CheckoutBtn";
import SectionBlock from "@/components/ui/SectionBlock";
import Heading from "@/components/ui/heading";
import auth from "@/middleware";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart",
};

export default async function CartPage() {
  const session = await auth();

  return (
    <main>
      <SectionBlock>
        <Heading tag="h1" className="text-center">
          your cart
        </Heading>

        <div className="max-w-[800px] mx-auto">
          <CartItemList>
            <CheckoutBtn isAuth={!!session?.user} />
          </CartItemList>
        </div>
      </SectionBlock>
    </main>
  );
}
