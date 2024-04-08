import ProductFilters from "../product/filters/ProductFilters";
import { Card, CardContent, CardHeader } from "../ui/card";
import Heading from "../ui/heading";

export default function ProductFiltersDesktop() {
  return (
    <div className="md:col-span-4 lg:col-span-3">
      <Card className="sticky top-[100px] left-0">
        <CardHeader>
          <Heading tag="h4" className="text-center mb-4">
            filter by
          </Heading>
        </CardHeader>
        <CardContent>
          <ProductFilters />
        </CardContent>
      </Card>
    </div>
  );
}
