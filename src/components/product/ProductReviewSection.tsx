"use client";

import { addProductReview, removeProductReview } from "@/actions/product";
import { ReviewWithRelations } from "@/lib/types";
import { Product } from "@prisma/client";
import Link from "next/link";
import { toast } from "sonner";
import FormSubmitButton from "../FormSubmitButton";
import SectionBlock from "../ui/SectionBlock";
import { Button } from "../ui/button";
import Heading from "../ui/heading";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import AddReviewRating from "./AddReviewRating";
import ProductReview from "./ProductReview";

type ProductReviewSectionProps = {
  isAuthenticated: boolean;
  reviews: ReviewWithRelations[];
  productId: Product["id"];
  currentUserReview: ReviewWithRelations | undefined;
};

export default function ProductReviewSection({
  reviews,
  productId,
  currentUserReview,
  isAuthenticated,
}: ProductReviewSectionProps) {
  const handleSubmit = async (formData: FormData) => {
    const response = await addProductReview(productId, formData);
    if (response.error) {
      toast.error(response.error);
    }

    if (response.message) {
      toast.success(response.message);
    }
  };

  const handleRemoveReview = async () => {
    if (!currentUserReview) {
      return;
    }

    await removeProductReview(currentUserReview.id, productId);
  };

  return (
    <SectionBlock className="pb-0">
      <Heading tag="h2">Reviews</Heading>

      <div className="space-y-8">
        {reviews.map((review) => (
          <ProductReview key={review.id} review={review} />
        ))}
      </div>

      {isAuthenticated && (
        <div className="mt-16">
          {!currentUserReview && (
            <form action={handleSubmit}>
              <Label className="text-xl" htmlFor="content">
                Add your review
              </Label>
              <AddReviewRating />
              <Textarea name="content" placeholder="Add your review" />
              <FormSubmitButton className="mt-6">Send</FormSubmitButton>
            </form>
          )}

          {currentUserReview && (
            <form action={handleRemoveReview}>
              <Heading tag="h3">Your review</Heading>
              <ProductReview review={currentUserReview} />
              <FormSubmitButton className="mt-6" variant="destructive">
                Remove
              </FormSubmitButton>
            </form>
          )}
        </div>
      )}

      {!isAuthenticated && (
        <p className="mt-8">
          <Button asChild variant="secondary" className="mr-6">
            <Link href="/login">Login</Link>
          </Button>
          to add a review
        </p>
      )}
    </SectionBlock>
  );
}
