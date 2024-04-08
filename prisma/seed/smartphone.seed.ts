import { EcommerceUser, Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getData = async (users: EcommerceUser[]) => {
  const data: Prisma.CategoryCreateInput[] = [
    {
      name: "smartphones",
      description: "Smartphones category",
      imageUrl:
        "https://images.unsplash.com/photo-1583573636246-18cb2246697f?fm=jpg&h=240&w=400",
      brands: ["samsung", "motorola", "xiaomi", "oneplus", "iphone"],
      products: {
        create: [
          {
            name: "Samsung 1",
            description: "Smartphone Samsung 1 description",
            price: 2000,
            discount: 10,
            stock: 5,
            brand: "samsung",
            paymentId: "price_1P6UJ0EPfZyMOv01gvlV1jJQ",
            imageUrl:
              "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
            rating: 4,
            reviews: {
              create: [
                {
                  content: "Great Smartphone",
                  rating: 5,
                  authorId: users[2].id,
                },
                {
                  content: "Too little battery life",
                  rating: 3,
                  authorId: users[5].id,
                },
              ],
            },
          },
          {
            name: "Samsung 2",
            description: "Smartphone Samsung 2 description",
            price: 3000,
            stock: 3,
            brand: "samsung",
            paymentId: "price_1P6UK2EPfZyMOv01O9GJtWPa",
            imageUrl:
              "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
            rating: 5,
            reviews: {
              create: [
                {
                  content: "Great Smartphone",
                  rating: 5,
                  authorId: users[3].id,
                },
                {
                  content: "Best Smartphone I've ever had",
                  rating: 5,
                  authorId: users[1].id,
                },
              ],
            },
          },
          {
            name: "Xiaomi 1",
            description: "Smartphone Xiaomi 1 description",
            price: 4000,
            discount: 20,
            stock: 2,
            brand: "xiaomi",
            paymentId: "price_1P6UKkEPfZyMOv01tfBnrsC2",
            imageUrl:
              "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
            rating: 2.5,
            reviews: {
              create: [
                {
                  content: "High price and low quality",
                  rating: 2,
                  authorId: users[9].id,
                },
                {
                  content: "Too high price for such a Smartphone",
                  rating: 3,
                  authorId: users[12].id,
                },
              ],
            },
          },
          {
            name: "Xiaomi 2",
            description: "Smartphone Xiaomi 2 description",
            price: 3500,
            stock: 12,
            brand: "xiaomi",
            paymentId: "price_1P6UKIEPfZyMOv01cuGJWjrF",
            imageUrl:
              "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
            rating: 3.5,
            reviews: {
              create: [
                {
                  content: "Long battery life",
                  rating: 3,
                  authorId: users[12].id,
                },
                {
                  content: "Great Smartphone",
                  rating: 4,
                  authorId: users[9].id,
                },
              ],
            },
          },
          {
            name: "Motorola 1",
            description: "Smartphone Motorola 1 description",
            price: 5500,
            stock: 5,
            brand: "motorola",
            paymentId: "price_1P6ULFEPfZyMOv01pLfyWa80",
            imageUrl:
              "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
            rating: 3.5,
            reviews: {
              create: [
                {
                  content: "Long battery life",
                  rating: 4,
                  authorId: users[15].id,
                },
                {
                  content: "Great Smartphone",
                  rating: 3,
                  authorId: users[4].id,
                },
              ],
            },
          },
          {
            name: "Motorola 2",
            description: "Smartphone Motorola 2 description",
            price: 3500,
            stock: 4,
            brand: "motorola",
            paymentId: "price_1P6UKZEPfZyMOv01sginu4g6",
            imageUrl:
              "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
            rating: 3.5,
            reviews: {
              create: [
                {
                  content: "Long battery life",
                  rating: 4,
                  authorId: users[3].id,
                },
                {
                  content: "Great Smartphone",
                  rating: 3,
                  authorId: users[6].id,
                },
              ],
            },
          },
          {
            name: "OnePlus 1",
            description: "Smartphone OnePlus 1 description",
            price: 2500,
            stock: 5,
            brand: "oneplus",
            paymentId: "price_1P6UJSEPfZyMOv01x6PITRXF",
            imageUrl:
              "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
            rating: 2.5,
            reviews: {
              create: [
                {
                  content: "High price but good quality",
                  rating: 4,
                  authorId: users[8].id,
                },
                {
                  content: "I'm not satisfied with this Smartphone",
                  rating: 1,
                  authorId: users[11].id,
                },
              ],
            },
          },
          {
            name: "OnePlus 2",
            description: "Smartphone OnePlus 2 description",
            price: 2500,
            stock: 12,
            brand: "oneplus",
            paymentId: "price_1P6UJlEPfZyMOv01sUJMna19",
            imageUrl:
              "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
            rating: 1.5,
            reviews: {
              create: [
                {
                  content: "The worst Smartphone I've ever had",
                  rating: 1,
                  authorId: users[3].id,
                },
                {
                  content: "I'm not satisfied with this Smartphone",
                  rating: 2,
                  authorId: users[12].id,
                },
              ],
            },
          },
          {
            name: "iPhone 1",
            description: "Smartphone iPhone 1 description",
            price: 1500,
            stock: 10,
            brand: "iphone",
            paymentId: "price_1P6UIoEPfZyMOv01k1t6IeO3",
            imageUrl:
              "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
            rating: 4,
            reviews: {
              create: [
                {
                  content: "Great Smartphone",
                  rating: 5,
                  authorId: users[4].id,
                },
                {
                  content: "Not the worst Smartphone",
                  rating: 3,
                  authorId: users[7].id,
                },
              ],
            },
          },
          {
            name: "iPhone 2",
            brand: "iphone",
            description: "Smartphone iPhone 2 description",
            price: 4500,
            stock: 20,
            discount: 25,
            paymentId: "price_1P6UKxEPfZyMOv01dhClk6JQ",
            imageUrl:
              "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
            rating: 5,
            reviews: {
              create: [
                {
                  content: "Great Smartphone",
                  rating: 5,
                  authorId: users[12].id,
                },
                {
                  content: "Really good Smartphone",
                  rating: 5,
                  authorId: users[10].id,
                },
              ],
            },
          },
        ],
      },
    },
  ];

  return data;
};

async function createSmartphones(users: EcommerceUser[]) {
  const data = await getData(users);
  await Promise.all(
    data.map(async (item) => {
      await prisma.category.create({
        data: item,
      });
    })
  );
}

export default createSmartphones;
