import { getCategoryData, getCategoryProducts } from "@/actions/category";
import CategoryProductsSection from "@/components/category/CategoryProductsSection";
import Heading from "@/components/ui/Heading";
import CategoryProductsContextProvider from "@/contexts/CategoryProductsContextProvider";
import { Metadata } from "next";
import Image from "next/image";

type CategoryPageProps = {
  params: {
    category: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const category = await getCategoryData(params.category);

  return {
    title: category.description,
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const category = await getCategoryData(params.category);
  const products = await getCategoryProducts(params.category, searchParams);

  return (
    <main>
      <Heading tag="h1" className="text-center mb-12">
        {category.name}
      </Heading>
      <Image
        src={category.imageUrl}
        alt={category.name}
        width={400}
        height={240}
        priority
        className="mx-auto rounded-md w-[400px] h-auto"
      />

      <CategoryProductsContextProvider
        initialProducts={products}
        brands={category.brands}
        category={category.name}
      >
        <CategoryProductsSection />
      </CategoryProductsContextProvider>
    </main>
  );
}
