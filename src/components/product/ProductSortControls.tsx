import { SortBy, SortDirection } from "@/lib/types";
import ProductSortButton from "./ProductSortButton";

type ProductSortControlsProps = {
  onSortClick: (sortBy: SortBy) => void;
  sortBy: SortBy;
  sortDirection: SortDirection;
};

export default function ProductSortControls({
  onSortClick,
  sortBy,
  sortDirection,
}: ProductSortControlsProps) {
  const buttons = ["price", "rating"] satisfies SortBy[];

  return (
    <div className="space-x-4">
      {buttons.map((button) => (
        <ProductSortButton
          key={button}
          sortBy={button}
          isActive={sortBy === button}
          sortDirection={sortDirection}
          onClick={() => onSortClick(button)}
        />
      ))}
    </div>
  );
}
