"use client";

import { updatePassword } from "@/actions/user";
import { useRef } from "react";
import { toast } from "sonner";
import FormSubmitButton from "../FormSubmitButton";
import InputWLabel from "../ui/InputWLabel";

export default function UpdatePasswordForm() {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={formRef}
      action={async (formData: FormData) => {
        const response = await updatePassword(formData);

        if (!response?.error) {
          toast.success("Password updated!");
        } else {
          toast.error(response.error);
        }

        formRef.current?.reset();
      }}
    >
      <InputWLabel
        name="currentPassword"
        label="Current Password"
        type="password"
      />
      <InputWLabel name="newPassword" label="New Password" type="password" />

      <FormSubmitButton>Update Password</FormSubmitButton>
    </form>
  );
}
