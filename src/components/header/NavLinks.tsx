import { cn } from "@/lib/utils/cn";
import Link from "next/link";

type AppNavLinkProps = {
  href: string;
  label: string;
  isActive?: boolean;
  motionId?: string;
  className?: string;
};

export function AppNavLink({
  href,
  label,
  className,
  isActive,
}: AppNavLinkProps) {
  return (
    <li
      className={cn(
        "hover:scale-110 transition-all relative max-md:pb-2",
        isActive ? "text-primary" : "text-primary/60",
        className
      )}
      key={href}
    >
      <Link className="p-2" href={href}>
        {label}
      </Link>
    </li>
  );
}
