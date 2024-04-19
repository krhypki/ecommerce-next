import { Product } from "@prisma/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/Carousel";
import ProductCard from "./ProductCard";

type ProductCarouselProps = {
  products: Product[];
};

export default function ProductCarousel({ products }: ProductCarouselProps) {
  return (
    <Carousel className="max-w-[320px] mx-auto md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px]">
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id} className="md:basis-1/2 xl:basis-1/3 ">
            <ProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="max-sm:top-full max-sm:left-0 max-sm:translate-y-1/2" />
      <CarouselNext className="max-sm:top-full max-sm:right-0 max-sm:translate-y-1/2" />
    </Carousel>
  );
}
