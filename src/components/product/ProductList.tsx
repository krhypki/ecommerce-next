import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Product } from "@prisma/client";
import ProductCard from "./ProductCard";

type ProductListProps = {
  products: Product[];
};

export default function ProductList({ products }: ProductListProps) {
  const [animateParent] = useAutoAnimate();
  return (
    <div
      ref={animateParent}
      className="grid grid-cols-[repeat(auto-fit,300px)] justify-center gap-x-10 gap-y-20 relative"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
