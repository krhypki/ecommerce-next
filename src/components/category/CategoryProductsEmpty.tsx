import ClearFiltersButton from "../product/filters/ClearFiltersButton";
import Heading from "../ui/heading";

export default function CategoryProductsEmpty() {
  return (
    <div className="flex flex-col items-center mt-20">
      <Heading tag="h3">No products found</Heading>
      <ClearFiltersButton />
    </div>
  );
}
