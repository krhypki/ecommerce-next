import { EcommerceUser, Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getData = async (users: EcommerceUser[]) => {
  const data: Prisma.CategoryCreateInput[] = [
    {
      name: "televisions",
      description: "Televisions category",
      imageUrl:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?fm=jpg&h=240&w=400",
      brands: ["philips", "samsung", "xiaomi", "sony", "hisense"],
      products: {
        create: [
          {
            name: "Philips tv 1",
            description: "tv philips 1 description",
            price: 1000,
            discount: 20,
            stock: 10,
            brand: "philips",
            paymentId: "price_1P6V3iEPfZyMOv01Tp0czz02",
            imageUrl:
              "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
            rating: 3,
            reviews: {
              create: [
                {
                  content: "Great tv",
                  rating: 4,
                  authorId: users[0].id,
                },
                {
                  content: "Too little battery life",
                  rating: 2,
                  authorId: users[1].id,
                },
              ],
            },
          },
          {
            name: "Samsung tv 1",
            description: "tv Samsung 1 description",
            price: 5000,
            discount: 10,
            stock: 2,
            brand: "samsung",
            paymentId: "price_1P6V4ZEPfZyMOv016jj9m7P5",
            imageUrl:
              "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
            rating: 1,
            reviews: {
              create: [
                {
                  content: "High price and low quality",
                  rating: 1,
                  authorId: users[12].id,
                },
                {
                  content: "Too high price for such a tv",
                  rating: 1,
                  authorId: users[13].id,
                },
              ],
            },
          },
          {
            name: "Xiaomi tv 1",
            description: "tv Xiaomi 1 description",
            price: 4500,
            stock: 15,
            discount: 30,
            brand: "xiaomi",
            paymentId: "price_1P6V4NEPfZyMOv01CmBknc6g",
            imageUrl:
              "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
            rating: 3.5,
            reviews: {
              create: [
                {
                  content: "Long battery life",
                  rating: 4,
                  authorId: users[2].id,
                },
                {
                  content: "Great tv",
                  rating: 3,
                  authorId: users[5].id,
                },
              ],
            },
          },
          {
            name: "Sony tv 1",
            description: "tv Sony 1 description",
            price: 2500,
            stock: 5,
            brand: "sony",
            paymentId: "price_1P6V4CEPfZyMOv01vaLVmAKs",
            imageUrl:
              "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
            rating: 2.5,
            reviews: {
              create: [
                {
                  content: "High price but good quality",
                  rating: 4,
                  authorId: users[11].id,
                },
                {
                  content: "I'm not satisfied with this tv",
                  rating: 1,
                  authorId: users[2].id,
                },
              ],
            },
          },
          {
            name: "Hisense tv 1",
            description: "tv Hisense 1 description",
            price: 1500,
            stock: 10,
            brand: "hisense",
            paymentId: "price_1P6V3wEPfZyMOv01m9qsFGaM",
            imageUrl:
              "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
            rating: 4,
            reviews: {
              create: [
                {
                  content: "Great tv",
                  rating: 5,
                  authorId: users[13].id,
                },
                {
                  content: "Not the worst tv",
                  rating: 3,
                  authorId: users[9].id,
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

async function createTvs(users: EcommerceUser[]) {
  const data = await getData(users);
  await Promise.all(
    data.map(async (item) => {
      await prisma.category.create({
        data: item,
      });
    })
  );
}

export default createTvs;
