import { getProductById } from "@/actions/product";
import ProductAddToCart from "@/components/product/ProductAddToCart";
import ProductRating from "@/components/product/ProductRating";
import ProductReviewSection from "@/components/product/ProductReviewSection";
import SectionBlock from "@/components/ui/SectionBlock";
import Heading from "@/components/ui/heading";
import { createCartProduct } from "@/lib/utils/get-card-product";
import auth from "@/middleware";
import { Metadata } from "next";
import Image from "next/image";

type ProductPageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = await getProductById(params.id);

  return {
    title: product.name,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(params.id);
  const session = await auth();
  const reviews = product.reviews.filter(
    (review) => review.authorId !== session?.user.id
  );
  const currentUserReview = product.reviews.find(
    (review) => review.authorId === session?.user.id
  );

  const cartProduct = createCartProduct(product);

  return (
    <main>
      <SectionBlock className="max-w-[1100px] mx-auto">
        <div className="flex max-md:flex-col items-center gap-x-20 gap-y-10">
          <Image
            src={`${product.imageUrl}?fm=jpg&h=320&w=600`}
            alt={product.name}
            height={320}
            width={600}
            className="h-auto rounded-md max-md:order-1"
          />
          <div>
            <Heading tag="h1">{product.name}</Heading>
            <p className="mb-10">{product.description}</p>
            <Heading tag="h5" className="mb-2">
              Rating:
            </Heading>
            <ProductRating rating={product.rating} className="mb-6" />
            <ProductAddToCart product={cartProduct} stock={product.stock} />
          </div>
        </div>

        <ProductReviewSection
          isAuthenticated={!!session?.user.id}
          reviews={reviews}
          productId={product.id}
          currentUserReview={currentUserReview}
        />
      </SectionBlock>
    </main>
  );
}
