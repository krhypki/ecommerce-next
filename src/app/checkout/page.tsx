import CheckoutForm from "@/components/cart/CheckoutForm";
import SectionBlock from "@/components/ui/SectionBlock";
import { findOneByEmail } from "@/db/user";
import auth from "@/middleware";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout",
};

export default async function CheckoutPage() {
  const session = await auth();
  let user = null;
  if (session?.user) {
    user = await findOneByEmail(session.user.email);
  }

  return (
    <main className="max-w-[600px] mx-auto">
      <SectionBlock className="placeholder-sky-200">
        <CheckoutForm user={user} />
      </SectionBlock>
    </main>
  );
}
