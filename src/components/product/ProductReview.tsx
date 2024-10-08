import { ReviewWithRelations } from "@/lib/types";
import { formatDate } from "@/lib/utils/formatDate";
import Avatar from "../ui/Avatar";
import { Card, CardContent, CardHeader } from "../ui/Card";
import ProductRating from "./ProductRating";

type ProductReviewProps = {
  review: ReviewWithRelations;
};

export default function ProductReview({ review }: ProductReviewProps) {
  return (
    <Card>
      <CardHeader className="md:flex-row justify-between">
        <div className="flex max-sm:flex-col max-sm:items-center max-sm:gap-y-4 gap-x-5 max-md:order-1">
          <Avatar />
          <div className="space-y-3 max-sm:flex flex-col items-center">
            <strong>{review.author.email}</strong>
            <ProductRating rating={review.rating} />
          </div>
        </div>
        <time className="max-md:text-right max-md:pb-4">
          {formatDate(review.date)}
        </time>
      </CardHeader>
      <CardContent>
        <p className="mt-4">{review.content}</p>
      </CardContent>
    </Card>
  );
}
