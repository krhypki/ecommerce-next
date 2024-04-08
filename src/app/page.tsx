import { getDiscountedProduts, getTop10Products } from "@/actions/product";
import AllCategoriesList from "@/components/category/AllCategoriesList";
import ProductCarousel from "@/components/product/ProductCarousel";
import SectionBlock from "@/components/ui/SectionBlock";
import Heading from "@/components/ui/heading";

export default async function Home() {
  const topRatedProducts = await getTop10Products();
  const discountedProducts = await getDiscountedProduts();

  return (
    <main>
      <AllCategoriesList />
      <SectionBlock>
        <Heading className="text-center" tag="h2">
          Top rated
        </Heading>
        <ProductCarousel products={topRatedProducts} />
      </SectionBlock>

      <SectionBlock>
        <Heading className="text-center" tag="h2">
          Discounted
        </Heading>
        <ProductCarousel products={discountedProducts} />
      </SectionBlock>
    </main>
  );
}
