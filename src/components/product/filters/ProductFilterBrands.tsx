import { Checkbox } from "@/components/ui/checkbox";
import { useCategoryProductsContext } from "@/hooks/contexts";
import { FormEvent, useEffect, useRef, useState } from "react";

export default function ProductFilterBrands() {
  const { searchParams, updateUrlParams, brands } =
    useCategoryProductsContext();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [checkedBrands, setCheckedBrands] = useState(
    searchParams.get("brand")?.split(",") || []
  );

  useEffect(() => {
    if (!searchParams.get("brand")) {
      formRef.current?.reset();
    }
  }, [searchParams]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const brandList = Array.from(formData.entries())
      .map(([key]) => key)
      .join(",");
    updateUrlParams("brand", brandList);
  };

  const handleCheckedChange = (brand: string) => {
    setCheckedBrands((prev) => {
      if (prev.includes(brand)) {
        return prev.filter((checkedBrand) => checkedBrand !== brand);
      }
      return [...prev, brand];
    });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <ul>
        {brands.map((brand) => (
          <li key={brand} className="mb-2">
            <Checkbox
              type="submit"
              name={brand}
              onCheckedChange={() => handleCheckedChange(brand)}
              checked={checkedBrands.includes(brand)}
            />
            <label className="ml-3 capitalize" htmlFor={`check-${brand}`}>
              {brand}
            </label>
          </li>
        ))}
      </ul>
    </form>
  );
}
