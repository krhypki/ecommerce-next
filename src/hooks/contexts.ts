import { CategoryProductsContext } from "@/contexts/CategoryProductsContextProvider";
import { MediaQueryContext } from "@/contexts/MediaQueryContextProvider";
import { Context, useContext } from "react";

const useContextWithErrorHandle = <T>(context: Context<T>, name: string) => {
  const contextData = useContext(context);

  if (!contextData) {
    throw new Error(`${name} must be used within ContextProvider`);
  }

  return contextData;
};

export function useMediaQueryContext() {
  return useContextWithErrorHandle(MediaQueryContext, "useMediaQueryContext");
}

export function useCategoryProductsContext() {
  return useContextWithErrorHandle(
    CategoryProductsContext,
    "useCategoryProductsContext"
  );
}
