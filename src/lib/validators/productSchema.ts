import { z } from "zod";

export const productReviewSchema = z.object({
  content: z.string().min(1).max(500),
  rating: z.coerce.number().int().min(1).max(5),
});
