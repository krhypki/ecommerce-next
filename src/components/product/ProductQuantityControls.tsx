"use client";

import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

type ProductQuantityControlsProps = {
  max: number;
  quantity: number;
  includeRemove?: boolean;
  setQuantity: (quantity: number) => void;
};

export default function ProductQuantityControls({
  max,
  quantity,
  setQuantity,
  includeRemove = false,
}: ProductQuantityControlsProps) {
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = +event.target.value;

    if (value < 1) {
      setQuantity(1);
      return;
    }

    if (value > max) {
      setQuantity(max);
      return;
    }
    setQuantity(value);
  };

  return (
    <div className="flex">
      <Button
        type="button"
        variant="secondary"
        disabled={quantity === 1}
        onClick={() => setQuantity(quantity - 1)}
      >
        -
      </Button>
      <Input
        name="quantity"
        value={quantity}
        onInput={handleInput}
        className="focus-visible:ring-0 focus-visible:border-primary text-center max-w-[80px]"
        type="number"
        max={10}
        maxLength={10}
      />
      <Button
        type="button"
        variant="secondary"
        disabled={quantity === max}
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </Button>
      {includeRemove && (
        <Button
          onClick={() => setQuantity(0)}
          className="ml-2"
          variant="destructive"
        >
          Remove
        </Button>
      )}
    </div>
  );
}
