"use client";

import { getCategoryProducts } from "@/actions/category";
import { ProductFilterOption, SortBy, SortDirection } from "@/lib/types";
import { Product } from "@prisma/client";
import { debounce } from "lodash";
import { usePathname, useSearchParams } from "next/navigation";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";

type CategoryProductsContextProviderProps = {
  children: React.ReactNode;
  category: string;
  brands: string[];
  initialProducts: Product[];
};

type CategoryProductsContextType = {
  brands: string[];
  searchParams: URLSearchParams;
  isPending: boolean;
  products: Product[];
  sortBy: SortBy;
  sortDirection: SortDirection;
  wrapperRef: React.RefObject<HTMLElement>;
  clearFilters: () => void;
  handleSorting: (newSortBy: SortBy) => void;
  updateUrlParams: (
    updatedValueName: ProductFilterOption,
    updatedValue: string
  ) => void;
};

export const CategoryProductsContext =
  createContext<CategoryProductsContextType | null>(null);

const filterOptions: ProductFilterOption[] = [
  "brand",
  "rating",
  "pricefrom",
  "priceto",
  "discount",
];

export default function CategoryProductsContextProvider({
  children,
  brands,
  category,
  initialProducts,
}: CategoryProductsContextProviderProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [products, setProducts] = useState(initialProducts || []);
  const [sortBy, setSortBy] = useState<SortBy>("price");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const wrapperRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setProducts(initialProducts);
  }, [initialProducts]);

  const sortedProducts = useMemo(
    () =>
      [...products].sort((a, b) => {
        if (sortDirection === "asc") {
          return a[sortBy] - b[sortBy];
        }
        return b[sortBy] - a[sortBy];
      }),
    [sortBy, sortDirection, products]
  );

  const handleSorting = useCallback(
    (newSortBy: SortBy) => {
      if (newSortBy === sortBy) {
        setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
      } else {
        setSortDirection("asc");
      }

      setSortBy(newSortBy);
    },
    [sortBy]
  );

  const updateUrlParams = debounce(
    (updatedValueName: ProductFilterOption, updatedValue: string) => {
      const params = filterOptions
        .map((option) => {
          if (option === updatedValueName) {
            return `${option}=${updatedValue}`;
          }

          return searchParams.get(option)
            ? `${option}=${searchParams.get(option)}`
            : "";
        })
        .filter((option) => {
          const [_, value] = option.split("=");
          return value;
        });

      const url = params.reduce((str, param, index) => {
        if (index === 0) {
          return `${str}?${param}`;
        }

        return `${str}&${param}`;
      }, pathname);

      history.replaceState(null, "", url);
      updateProductList(url);
    },
    500
  );

  const updateProductList = (url: string) => {
    startTransition(async () => {
      const newParams = new URLSearchParams(url.slice(url.indexOf("?")));
      const paramsObj = Object.fromEntries(newParams.entries());
      const categories = await getCategoryProducts(category, paramsObj);
      setProducts(categories);
      wrapperRef.current?.scrollIntoView();
    });
  };

  const clearFilters = () => {
    history.replaceState(null, "", pathname);
    updateProductList(pathname);
  };

  return (
    <CategoryProductsContext.Provider
      value={{
        searchParams,
        brands,
        products: sortedProducts,
        isPending,
        sortBy,
        sortDirection,
        wrapperRef,
        handleSorting,
        clearFilters,
        updateUrlParams,
      }}
    >
      {children}
    </CategoryProductsContext.Provider>
  );
}
