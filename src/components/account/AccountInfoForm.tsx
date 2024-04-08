"use client";

import { updateOrderInfo } from "@/actions/user";
import { OrderInfoSchema } from "@/lib/types";
import { EcommerceUser } from "@prisma/client";
import { toast } from "sonner";
import OrderInformationForm from "../OrderInformationForm";

type AccountInfoFormProps = {
  user: EcommerceUser | null;
};

export default function AccountInfoForm({ user }: AccountInfoFormProps) {
  const handleAfterSubmission = async (formData: OrderInfoSchema) => {
    const response = await updateOrderInfo(formData);

    if (response?.error) {
      toast.error(response.error);
    } else {
      toast.success("Order information updated!");
    }
  };
  return (
    <OrderInformationForm
      user={user}
      submitButtonText="Update"
      handleAfterSubmission={handleAfterSubmission}
    />
  );
}
