import { Input } from "@/components/ui/input";
import { useCategoryProductsContext } from "@/hooks/contexts";
import { ProductFilterOption } from "@/lib/types";
import { Label } from "@radix-ui/react-label";
import { useEffect, useMemo, useState } from "react";

type PriceInputId = "pricefrom" | "priceto";

const inputs: { id: PriceInputId; placeholder: string }[] = [
  { id: "pricefrom", placeholder: "from" },
  { id: "priceto", placeholder: "to" },
];

export default function ProductFilterPrice() {
  const { updateUrlParams, searchParams } = useCategoryProductsContext();
  const getValuesFromParams = useMemo(
    () => ({
      pricefrom: searchParams.get("pricefrom") || "",
      priceto: searchParams.get("priceto") || "",
    }),
    [searchParams]
  );

  const [inputValues, setInputValues] =
    useState<Record<PriceInputId, string>>(getValuesFromParams);

  useEffect(() => {
    setInputValues(getValuesFromParams);
  }, [getValuesFromParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    if (+value > 0 && !isNaN(+value)) {
      setInputValues((prev) => ({ ...prev, [id]: value }));
    }

    updateUrlParams(id as ProductFilterOption, value);
  };

  return (
    <div className="flex gap-x-4">
      {inputs.map(({ id, placeholder }) => (
        <Label key={id}>
          <Input
            id={id}
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            placeholder={placeholder}
            value={inputValues[id]}
            onChange={handleInputChange}
          />
        </Label>
      ))}
    </div>
  );
}
