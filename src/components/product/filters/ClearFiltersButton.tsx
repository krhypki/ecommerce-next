import { Button } from "@/components/ui/Button";
import { useCategoryProductsContext } from "@/hooks/contexts";

export default function ClearFiltersButton() {
  const { clearFilters, searchParams } = useCategoryProductsContext();
  return (
    <Button
      disabled={Array.from(searchParams.keys()).length === 0}
      onClick={clearFilters}
      className="w-full max-w-[200px] mx-auto"
    >
      Clear filters
    </Button>
  );
}
