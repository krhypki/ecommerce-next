import { Checkbox } from "@/components/ui/Checkbox";
import { Label } from "@/components/ui/Label";
import { useCategoryProductsContext } from "@/hooks/contexts";
import { useEffect, useState } from "react";

export default function ProductFilterDiscount() {
  const { updateUrlParams, searchParams } = useCategoryProductsContext();
  const [checked, setChecked] = useState(searchParams.has("discount") || false);

  useEffect(() => {
    setChecked(searchParams.has("discount") || false);
  }, [searchParams]);

  const handleCheckedChange = (value: boolean) => {
    setChecked(value);
    updateUrlParams("discount", value ? "true" : "");
  };

  return (
    <div className="flex items-center mt-10 gap-x-4">
      <Checkbox
        id="discounted"
        checked={checked}
        onCheckedChange={handleCheckedChange}
      />
      <Label htmlFor="discounted" className="text-lg cursor-pointer mb-0">
        Discounted
      </Label>
    </div>
  );
}
