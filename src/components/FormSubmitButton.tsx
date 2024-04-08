"use client";

import { useFormStatus } from "react-dom";
import Spinner from "./ui/Spinner";
import { Button, ButtonProps } from "./ui/button";

type FormSubmitButtonProps = ButtonProps & {
  children: React.ReactNode;
};

export default function FormSubmitButton({
  children,
  ...props
}: FormSubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} {...props}>
      {children}
      {pending && (
        <Spinner className="border-primary-foreground h-6 w-6 ml-4" />
      )}
    </Button>
  );
}
