"use client";

import { useCategoryProductsContext } from "@/hooks/contexts";
import ProductList from "../product/ProductList";
import ProductSortControls from "../product/ProductSortControls";
import Heading from "../ui/Heading";
import LoadingOverlay from "../ui/LoadingOverlay";
import CategoryProductsEmpty from "./CategoryProductsEmpty";

export default function CategoryProductList() {
  const { products, sortBy, sortDirection, handleSorting, isPending } =
    useCategoryProductsContext();

  return (
    <div className="relative min-h-[2000px]">
      <div className="flex max-md:flex-col items-center gap-x-10 gap-y-4 mb-10 md:ml-20">
        <Heading tag="h4" className="mb-0">
          sort by
        </Heading>
        <ProductSortControls
          sortBy={sortBy}
          sortDirection={sortDirection}
          onSortClick={handleSorting}
        />
      </div>
      {products.length > 0 && <ProductList products={products} />}

      {!products.length && <CategoryProductsEmpty />}
      {isPending && <LoadingOverlay />}
    </div>
  );
}
