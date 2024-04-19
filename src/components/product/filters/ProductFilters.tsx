"use client";

import Heading from "../../ui/Heading";
import ProductFilterBrands from "./ProductFilterBrands";
import ProductFilterPrice from "./ProductFilterPrice";

import ClearFiltersButton from "./ClearFiltersButton";
import ProductFilterDiscount from "./ProductFilterDiscount";
import ProductFilterRating from "./ProductFilterRating";

export default function ProductFilters() {
  return (
    <div className="flex flex-col">
      <ClearFiltersButton />
      <Heading tag="h5" className="mb-3 mt-6">
        Brands
      </Heading>
      <ProductFilterBrands />
      <Heading tag="h5" className="mt-10 mb-3">
        Price
      </Heading>
      <ProductFilterPrice />
      <Heading tag="h5" className="mt-10 mb-3">
        Min Rating
      </Heading>
      <ProductFilterRating />
      <ProductFilterDiscount />
    </div>
  );
}
