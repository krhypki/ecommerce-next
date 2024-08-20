import { z } from "zod";

export const orderSchema = {
  zip: z.string().regex(/^\d{2}-\d{3}$/, { message: "Invalid zip code" }),
  street: z.string(),
  houseNumber: z.coerce.number(),
  city: z.string(),
  email: z.string().email(),
  phone: z.string().regex(/^\d{9}$/, { message: "Invalid phone number" }),
};

export const userOrderInfoSchema = z.object({
  zip: orderSchema.zip.or(z.literal("")),
  street: orderSchema.street,
  houseNumber: orderSchema.houseNumber.nullable(),
  city: orderSchema.city,
  email: orderSchema.email.or(z.literal("")),
  phone: orderSchema.phone.or(z.literal("")),
});

export const checkoutOrderSchema = z.object({
  ...orderSchema,
  street: orderSchema.street.min(1, { message: "Street is required" }),
  city: orderSchema.city.min(1, { message: "City is required" }),
  houseNumber: orderSchema.houseNumber.min(1, {
    message: "House number is required",
  }),
});
