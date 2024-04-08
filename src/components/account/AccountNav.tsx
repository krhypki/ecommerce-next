"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiSettings } from "react-icons/ci";
import { GoHistory } from "react-icons/go";

const navLinks = [
  { href: "/account/settings", label: "Settings", Icon: CiSettings },
  { href: "/account/orders", label: "Orders", Icon: GoHistory },
];

const icons = [CiSettings, GoHistory];

export default function AccountNav() {
  const pathname = usePathname();
  return (
    <ul className="max-md:border-b md:border-r max-md:flex gap-x-6 border-primary/70 px-4">
      {navLinks.map(({ href, label, Icon }) => (
        <li className="py-2 my-3" key={href}>
          <Link
            href={href}
            className={`flex items-center gap-x-2 hover:underline hover:text-primary ${
              pathname === href ? "text-primary" : "text-primary/50"
            }`}
          >
            <Icon />
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
