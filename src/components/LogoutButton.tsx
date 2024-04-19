"use client";

import { logout } from "@/actions/user";
import { Button } from "./ui/Button";

export default function LogoutButton() {
  return (
    <Button variant="secondary" onClick={async () => await logout()}>
      Logout
    </Button>
  );
}
