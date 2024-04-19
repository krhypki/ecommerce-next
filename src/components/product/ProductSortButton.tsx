import { SortBy, SortDirection } from "@/lib/types";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Button } from "../ui/Button";

type ProductSortButtonProps = {
  sortBy: SortBy;
  sortDirection: SortDirection;
  isActive: boolean;
  onClick: () => void;
};

export default function ProductSortButton({
  sortBy,
  onClick,
  isActive,
  sortDirection,
}: ProductSortButtonProps) {
  const IconComponent =
    sortDirection === "desc" ? <FaChevronDown /> : <FaChevronUp />;

  return (
    <Button
      className="capitalize gap-x-2 min-w-[100px]"
      onClick={onClick}
      variant={isActive ? "default" : "secondary"}
    >
      {sortBy}
      {isActive && IconComponent}
    </Button>
  );
}
