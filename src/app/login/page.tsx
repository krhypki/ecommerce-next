import AuthForm from "@/components/auth/AuthForm";
import SectionBlock from "@/components/ui/SectionBlock";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup",
};

export default function LoginPage() {
  return (
    <SectionBlock className="flex flex-col items-center">
      <AuthForm actionType={"login"} />
    </SectionBlock>
  );
}
