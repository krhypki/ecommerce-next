import {
  Category,
  EcommerceUser,
  Prisma,
  Product,
  Review,
} from "@prisma/client";
import { ProductSearchParams } from "../lib/types";
import prisma from "./prisma";

export async function findCategoryProductsyByParams(
  category: Category["name"],
  searchParams: ProductSearchParams
) {
  type Query = {
    name: keyof ProductSearchParams | (keyof ProductSearchParams)[];
    query: Prisma.ProductWhereInput;
  };

  const queries: Query[] = [
    {
      name: "brand",
      query: {
        brand: {
          in: searchParams.brand?.split(",") || [],
        },
      },
    },
    {
      name: "rating",
      query: {
        rating: {
          gte: Number(searchParams.rating) || 1,
        },
      },
    },
    {
      name: "discount",
      query: {
        discount: {
          gt: 0,
        },
      },
    },
  ];

  const filteredQueries = queries
    .filter((query) => {
      if (Array.isArray(query.name)) {
        return query.name.some((name) => searchParams[name]);
      }
      return searchParams[query.name];
    })
    .reduce((obj, el) => {
      return { ...obj, ...el.query };
    }, {} as Record<keyof ProductSearchParams, any>);

  let products = await prisma.product.findMany({
    where: {
      category: {
        name: category,
      },
      ...filteredQueries,
    },
  });

  if (searchParams.pricefrom || searchParams.priceto) {
    const priceFrom = Number(searchParams.pricefrom) || 0;
    const priceTo = Number(searchParams.priceto);

    products = products.filter((product) => {
      const finalPrice = product.discount
        ? product.price * (1 - product.discount / 100)
        : product.price;
      return (!priceTo || finalPrice <= priceTo) && finalPrice >= priceFrom;
    });
  }
  return products;
}

export async function findOneById(id: Product["id"]) {
  return await prisma.product.findUnique({
    where: {
      id: id,
    },
    include: {
      reviews: {
        include: {
          author: true,
        },
      },
    },
  });
}

export async function createReview(
  productId: Product["id"],
  authorId: EcommerceUser["id"],
  content: Review["content"],
  rating: Review["rating"]
) {
  const userReview = await prisma.review.findFirst({
    where: {
      authorId,
      productId,
    },
  });

  if (userReview) {
    throw new Error("User already reviewed this product");
  }

  const newReview = await prisma.review.create({
    data: {
      content,
      rating,
      product: {
        connect: {
          id: productId,
        },
      },
      author: {
        connect: {
          id: authorId,
        },
      },
    },
  });

  await updateProductRating(productId);
  return newReview;
}

export async function removeReview(
  reviewId: Review["id"],
  productId: Product["id"]
) {
  const review = await prisma.review.findUnique({
    where: {
      id: reviewId,
    },
  });

  if (!review) {
    throw new Error("Review with provided id not found");
  }
  const removedReview = await prisma.review.delete({
    where: {
      id: reviewId,
    },
  });

  await updateProductRating(productId);
  return removedReview;
}

export async function findTopRated(count: number) {
  return await prisma.product.findMany({
    take: count,
    orderBy: {
      rating: "desc",
    },
  });
}

export async function findDiscounted() {
  return await prisma.product.findMany({
    where: {
      discount: {
        gt: 0,
      },
    },
  });
}

export async function updateProductRating(id: Product["id"]) {
  const reviews = await prisma.review.findMany({
    where: {
      product: {
        id,
      },
    },
  });

  const updatedRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  await prisma.product.update({
    where: {
      id,
    },
    data: {
      rating: updatedRating,
    },
  });
}
