"use client";

import { login, signup } from "@/actions/user";
import { AuthActionType } from "@/lib/types";
import { toast } from "sonner";
import FormSubmitButton from "../FormSubmitButton";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
import AuthFormQuestion from "./AuthFormQuestion";

type AuthFormProps = {
  actionType: AuthActionType;
  redirectUrl?: string;
};

export default function AuthForm({ actionType, redirectUrl }: AuthFormProps) {
  const onSubmit = async (formData: FormData) => {
    let response;

    if (actionType === "login") {
      response = await login(formData, redirectUrl);
    } else {
      response = await signup(formData);
    }

    if (response?.error) {
      toast.error(response.error);
    }
  };

  return (
    <form action={onSubmit} className="flex flex-col">
      <Label htmlFor="email">Email</Label>
      <Input type="email" name="email" placeholder="Email" className="mb-10" />

      <Label htmlFor="email">Password</Label>
      <Input
        type="password"
        name="password"
        placeholder="Password"
        className="mb-10"
      />
      <FormSubmitButton size="lg" className="mb-10">
        {actionType === "login" ? "Login" : "Signup"}
      </FormSubmitButton>

      <AuthFormQuestion actionType={actionType} />
    </form>
  );
}
