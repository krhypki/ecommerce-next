import Link from "next/link";
import { Button } from "../ui/Button";

type CheckoutBtnProps = {
  isAuth: boolean;
};

export default function CheckoutBtn({ isAuth }: CheckoutBtnProps) {
  const href = isAuth ? "/checkout" : "/checkout/unauthorized";
  return (
    <Button asChild>
      <Link href={href}>Checkout</Link>
    </Button>
  );
}
