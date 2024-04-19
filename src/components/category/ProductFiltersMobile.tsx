import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import ProductFilters from "../product/filters/ProductFilters";
import { Button } from "../ui/Button";

export default function ProductFiltersMobile() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mb-8 max-w-[200px] w-full mx-auto">
          Show filters
        </Button>
      </DialogTrigger>
      <DialogContent>
        <ProductFilters />
      </DialogContent>
    </Dialog>
  );
}
