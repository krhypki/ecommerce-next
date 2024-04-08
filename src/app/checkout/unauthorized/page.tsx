import AuthForm from "@/components/auth/AuthForm";
import SectionBlock from "@/components/ui/SectionBlock";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout - Unauthorized",
};

export default function CheckoutUnauthorizedPage() {
  return (
    <main>
      <SectionBlock>
        <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-10 max-sm:max-w-[400px] max-w-[700px] mx-auto">
          <AuthForm actionType="login" redirectUrl="/checkout" />
          <div className="flex flex-col items-center justify-center gap-10">
            <Button asChild variant="secondary">
              <Link href="/checkout">Continue as a guest</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Create an account</Link>
            </Button>
          </div>
        </div>
      </SectionBlock>
    </main>
  );
}
