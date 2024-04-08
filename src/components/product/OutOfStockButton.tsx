import { MouseEvent } from "react";
import { Button } from "../ui/button";

export default function OutOfStockButton() {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Button
      className="cursor-default"
      variant="secondary"
      onClick={handleClick}
    >
      Out of stock
    </Button>
  );
}
