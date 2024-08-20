"use client";

import { OrderInfoSchema } from "@/lib/types";
import {
  checkoutOrderSchema,
  userOrderInfoSchema,
} from "@/lib/validators/orderSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { EcommerceUser } from "@prisma/client";
import { useMask } from "@react-input/mask";
import { useForm } from "react-hook-form";
import FormSubmitButton from "./FormSubmitButton";
import InputWLabel from "./ui/InputWLabel";

type OrderInfoFormProps = {
  user: EcommerceUser | null;
  includeEmail?: boolean;
  submitButtonText: string;
  handleAfterSubmission: (formData: OrderInfoSchema) => Promise<void>;
};

export default function OrderInformationForm({
  user,
  includeEmail = false,
  submitButtonText,
  handleAfterSubmission,
}: OrderInfoFormProps) {
  const {
    register,
    trigger,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(
      includeEmail ? checkoutOrderSchema : userOrderInfoSchema
    ),
    defaultValues: user
      ? {
          street: user.street || "",
          houseNumber: user.houseNumber || null,
          zip: user.zip || "",
          city: user.city || "",
          email: user.email || "",
          phone: user.phone || "",
        }
      : undefined,
  });

  const { ref: zipInputRef, ...zipInputProps } = register("zip");
  const zipMaskRef = useMask({
    mask: "__-___",
    replacement: { _: /\d/ },
  });

  const handleSubmit = async () => {
    const result = await trigger();

    if (!result) {
      return;
    }

    const formData = getValues();
    await handleAfterSubmission(formData);
  };

  return (
    <form action={handleSubmit}>
      <div className="flex gap-x-3">
        <InputWLabel
          label="Street"
          placeholder="Street"
          {...register("street")}
          error={errors.street?.message}
        />

        <InputWLabel
          label="Number"
          placeholder="Number"
          {...register("houseNumber")}
          type="number"
          className="max-w-[100px]"
          error={errors.houseNumber?.message}
        />
      </div>

      <InputWLabel
        placeholder="Zip Code"
        label="Zip Code"
        type="text"
        error={errors.zip?.message}
        {...zipInputProps}
        ref={(e) => {
          zipInputRef(e);
          zipMaskRef.current = e;
        }}
      />

      <InputWLabel
        placeholder="City"
        label="City"
        error={errors.city?.message}
        {...register("city")}
      />

      {includeEmail && (
        <InputWLabel
          placeholder="Email"
          label="Email"
          type="email"
          error={errors.email?.message}
          {...register("email")}
        />
      )}

      <InputWLabel
        placeholder="Phone"
        label="Phone"
        type="number"
        error={errors.phone?.message}
        {...register("phone")}
      />

      <FormSubmitButton>{submitButtonText}</FormSubmitButton>
    </form>
  );
}
