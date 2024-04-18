import { Product } from "@prisma/client";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

type ProductListProps = {
  products: Product[];
};

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,300px)] justify-center gap-x-10 gap-y-20 relative">
      {products.map((product) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          layout
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </div>
  );
}
