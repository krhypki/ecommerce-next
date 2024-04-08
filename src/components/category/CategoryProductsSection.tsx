"use client";

import {
  useCategoryProductsContext,
  useMediaQueryContext,
} from "@/hooks/contexts";
import SectionBlock from "../ui/SectionBlock";
import CategoryProductList from "./CategoryProductList";
import ProductFiltersDesktop from "./ProductFiltersDesktop";
import ProductFiltersMobile from "./ProductFiltersMobile";

export default function CategoryProductsSection() {
  const { wrapperRef } = useCategoryProductsContext();
  const { isMobile } = useMediaQueryContext();

  return (
    <SectionBlock ref={wrapperRef} className="grid md:grid-cols-12">
      {isMobile ? <ProductFiltersMobile /> : <ProductFiltersDesktop />}

      <div className="md:col-span-8 lg:col-span-9">
        <CategoryProductList />
      </div>
    </SectionBlock>
  );
}
