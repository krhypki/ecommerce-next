import { findOneByEmail } from "@/db/user";
import { getUserFromSession } from "@/lib/utils/get-user-from-session";
import { notFound } from "next/navigation";
import AccountInfoForm from "./AccountInfoForm";

export default async function AccountInfoFormWrapper() {
  const user = await getUserFromSession();
  const userData = await findOneByEmail(user.email);

  if (!userData) {
    notFound();
  }

  return <AccountInfoForm user={userData} />;
}
