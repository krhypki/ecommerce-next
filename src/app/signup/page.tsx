import AuthForm from "@/components/auth/AuthForm";
import SectionBlock from "@/components/ui/SectionBlock";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup",
  description: "Ecommerce Demo App Signup",
};

export default function SignupPage() {
  return (
    <SectionBlock className="flex flex-col items-center">
      <AuthForm actionType="signup" />
    </SectionBlock>
  );
}
