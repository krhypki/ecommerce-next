import Container from "@/components/ui/container";
import Link from "next/link";
import Logo from "../Logo";
import CartPopover from "../cart/CartPopover";
import HeaderControls from "./HeaderControls";
import HeaderNav from "./HeaderNav";

export default function AppHeader() {
  return (
    <header className="sticky top-0 left-0 z-50 bg-inherit border-b border-secondary shadow-sm py-4 lg:px-4">
      <Container className="flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <HeaderNav>
          <HeaderControls />
        </HeaderNav>
        <HeaderControls className="order-10 max-md:hidden" />

        <CartPopover />
      </Container>
    </header>
  );
}
