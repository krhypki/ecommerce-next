"use client";

import { useMediaQueryContext } from "@/hooks/contexts";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Collapse from "../ui/Collapse";
import { AppNavHamburger } from "./NavHamburger";
import { AppNavLink } from "./NavLinks";

type HeaderNavProps = {
  children?: React.ReactNode;
};

const links = [
  {
    href: "/category/laptops",
    label: "Laptops",
  },
  {
    href: "/category/smartphones",
    label: "Smartphones",
  },
  {
    href: "/category/televisions",
    label: "Televisions",
  },
  {
    href: "/category/accessories",
    label: "Accesories",
  },
];

export default function HeaderNav({ children }: HeaderNavProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const activePathname = usePathname();
  const { isMobile } = useMediaQueryContext();

  useEffect(() => {
    setShowMobileMenu(false);
  }, [activePathname]);

  const linkElements = links.map((link) => (
    <AppNavLink
      key={link.href}
      {...link}
      isActive={activePathname === link.href}
    />
  ));

  return (
    <nav className="max-md:order-2">
      {isMobile && (
        <AppNavHamburger
          isOpen={showMobileMenu}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />
      )}

      {!isMobile && <ul className="flex gap-x-5">{linkElements}</ul>}

      {isMobile && (
        <div className="absolute w-full top-full left-0 z-30 bg-background">
          {isMobile && (
            <Collapse isOpen={showMobileMenu}>
              <ul className="flex flex-col items-center justify-center border-t border-t-primary/30 py-5 gap-y-5">
                {linkElements}
                {children}
              </ul>
            </Collapse>
          )}
        </div>
      )}
    </nav>
  );
}
