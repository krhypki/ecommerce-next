import { cn } from "@/lib/utils/cn";
import auth from "@/middleware";
import Link from "next/link";
import LogoutButton from "../LogoutButton";
import { Button } from "../ui/Button";

type HeaderControlsProps = {
  className?: string;
};

export default async function HeaderControls({
  className,
}: HeaderControlsProps) {
  const user = await auth();

  return (
    <div className={cn("flex items-center gap-x-4", className)}>
      {!user && (
        <Button asChild variant="secondary" size="sm">
          <Link href="/login">Login</Link>
        </Button>
      )}

      {user && (
        <>
          <Link href="/account/settings">Account</Link>
          <LogoutButton />
        </>
      )}
    </div>
  );
}
