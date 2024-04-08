import { cn } from "@/lib/utils/cn";
import { ImStarEmpty, ImStarFull, ImStarHalf } from "react-icons/im";

type ProductRatingProps = {
  rating: number;
  className?: string;
};

export default function ProductRating({
  rating,
  className,
}: ProductRatingProps) {
  const ratingStars = Array.from({ length: 5 }).map((_, index) => {
    let Comp = ImStarEmpty;

    if (index + 1 <= rating) {
      Comp = ImStarFull;
    } else if (Math.round(rating) === index + 1 && index + 1 > rating) {
      Comp = ImStarHalf;
    }

    return <Comp className="h-4 w-4" key={index} />;
  });

  return (
    <div className={cn("flex gap-x-1 text-yellow-600", className)}>
      {ratingStars}
    </div>
  );
}
