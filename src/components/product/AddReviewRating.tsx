import { MAX_PRODUCT_RATING } from "@/lib/constants";
import { useState } from "react";
import { ImStarEmpty, ImStarFull } from "react-icons/im";

export default function AddReviewRating() {
  const [rating, setRating] = useState(MAX_PRODUCT_RATING);

  return (
    <div className="flex gap-x-1 text-yellow-600 mb-6">
      {Array.from({ length: MAX_PRODUCT_RATING }).map((_, index) => (
        <button
          key={index}
          className="mr-2"
          type="button"
          onClick={() => {
            setRating(index + 1);
          }}
        >
          {rating >= index + 1 ? <ImStarFull /> : <ImStarEmpty />}
        </button>
      ))}
      <input type="hidden" name="rating" value={rating} />
    </div>
  );
}
