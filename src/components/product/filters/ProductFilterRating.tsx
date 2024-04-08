import { Slider } from "@/components/ui/slider";
import { useCategoryProductsContext } from "@/hooks/contexts";
import { MAX_PRODUCT_RATING, MIN_PRODUCT_RATING } from "@/lib/constants";
import { useEffect, useMemo, useState } from "react";

export default function ProductFilterRating() {
  const { searchParams, updateUrlParams } = useCategoryProductsContext();
  const valueFromParams = useMemo(
    () => [Number(searchParams.get("rating")) || MIN_PRODUCT_RATING],
    [searchParams]
  );
  const [value, setValue] = useState(valueFromParams);

  useEffect(() => {
    setValue(valueFromParams);
  }, [valueFromParams]);

  const handleRatingChange = (newValue: number[]) => {
    updateUrlParams("rating", newValue.join(""));
  };

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span>{MIN_PRODUCT_RATING}</span>
        <span>{MAX_PRODUCT_RATING}</span>
      </div>
      <Slider
        min={MIN_PRODUCT_RATING}
        max={MAX_PRODUCT_RATING}
        step={0.5}
        className="cursor-pointer"
        value={value}
        onValueChange={(value) => setValue(value)}
        onValueCommit={(value) => handleRatingChange(value)}
      />
      <span className="text-center block mt-2">{value}</span>
    </div>
  );
}
