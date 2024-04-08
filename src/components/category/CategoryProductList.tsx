"use client";

import { useCategoryProductsContext } from "@/hooks/contexts";
import ProductList from "../product/ProductList";
import ProductSortControls from "../product/ProductSortControls";
import LoadingOverlay from "../ui/LoadingOverlay";
import Heading from "../ui/heading";
import CategoryProductsEmpty from "./CategoryProductsEmpty";

export default function CategoryProductList() {
  const { products, sortBy, sortDirection, handleSorting, isPending } =
    useCategoryProductsContext();

  return (
    <div className="relative">
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
