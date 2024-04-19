"use client";

import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "./ui/Button";
import Spinner from "./ui/Spinner";

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
