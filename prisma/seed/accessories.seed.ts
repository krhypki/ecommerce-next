import { EcommerceUser, Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getData = async (users: EcommerceUser[]) => {
  const data: Prisma.CategoryCreateInput[] = [
    {
      name: "accessories",
      description: "Accessories category",
      imageUrl:
        "https://images.unsplash.com/photo-1520609930-0fe8db30fd0b?fm=jpg&h=240&w=400",
      brands: ["logitech", "steelseries", "razer", "corsair", "dell"],
      products: {
        create: [
          {
            name: "Logitech mouse",
            description: "Logitech mouse description",
            price: 500,
            discount: 10,
            stock: 30,
            brand: "logitech",
            paymentId: "price_1P6UQCEPfZyMOv01grjA6wc1",
            imageUrl:
              "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46",
            rating: 4,
            reviews: {
              create: [
                {
                  content: "Great mouse",
                  rating: 5,
                  authorId: users[1].id,
                },
                {
                  content: "Too little battery life",
                  rating: 3,
                  authorId: users[3].id,
                },
              ],
            },
          },
          {
            name: "SteelSeries mouse",
            description: "SeelSeries mouse description",
            price: 200,
            stock: 5,
            brand: "steelseries",
            paymentId: "price_1P6UQMEPfZyMOv01iUCJKllh",
            imageUrl:
              "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46",
            rating: 5,
            reviews: {
              create: [
                {
                  content: "Great mouse",
                  rating: 5,
                  authorId: users[7].id,
                },
                {
                  content: "Best mouse I've ever had",
                  rating: 5,
                  authorId: users[9].id,
                },
              ],
            },
          },
          {
            name: "Razer mouse",
            description: "Razer mouse description",
            price: 600,
            discount: 10,
            stock: 2,
            brand: "razer",
            paymentId: "price_1P6UQeEPfZyMOv01ZnKrR7Ud",
            imageUrl:
              "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46",
            rating: 1,
            reviews: {
              create: [
                {
                  content: "High price and low quality",
                  rating: 1,
                  authorId: users[10].id,
                },
                {
                  content: "Too high price for such a mouse",
                  rating: 1,
                  authorId: users[9].id,
                },
              ],
            },
          },
          {
            name: "Corsair mouse",
            description: "Corsair mouse description",
            price: 350,
            stock: 12,
            brand: "corsair",
            paymentId: "price_1P6UR1EPfZyMOv01OyWphpfU",
            imageUrl:
              "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46",
            rating: 3.5,
            reviews: {
              create: [
                {
                  content: "Long battery life",
                  rating: 3,
                  authorId: users[12].id,
                },
                {
                  content: "Great mouse",
                  rating: 4,
                  authorId: users[3].id,
                },
              ],
            },
          },
          {
            name: "Dell mouse",
            description: "Dell mouse description",
            price: 350,
            stock: 15,
            brand: "dell",
            paymentId: "price_1P6URHEPfZyMOv01prG1MTob",
            imageUrl:
              "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46",
            rating: 3.5,
            reviews: {
              create: [
                {
                  content: "Long battery life",
                  rating: 4,
                  authorId: users[2].id,
                },
                {
                  content: "Great mouse",
                  rating: 3,
                  authorId: users[5].id,
                },
              ],
            },
          },
          {
            name: "Logitech keyboard",
            description: "Logitech keyboard description",
            price: 500,
            stock: 20,
            brand: "logitech",
            paymentId: "price_1P6UxIEPfZyMOv01xbBpHrMm",
            imageUrl:
              "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
            rating: 3.5,
            reviews: {
              create: [
                {
                  content: "Long battery life",
                  rating: 4,
                  authorId: users[6].id,
                },
                {
                  content: "Great keyboard",
                  rating: 3,
                  authorId: users[7].id,
                },
              ],
            },
          },
          {
            name: "Steelseries keyboard",
            description: "Steelseries keyboard description",
            price: 600,
            stock: 8,
            brand: "steelseries",
            paymentId: "price_1P6UxUEPfZyMOv01wM95Afur",
            imageUrl:
              "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
            rating: 2.5,
            reviews: {
              create: [
                {
                  content: "High price but good quality",
                  rating: 4,
                  authorId: users[11].id,
                },
                {
                  content: "I'm not satisfied with this keyboard",
                  rating: 1,
                  authorId: users[2].id,
                },
              ],
            },
          },
          {
            name: "Razer keyboard",
            description: "Razer keyboard description",
            price: 400,
            stock: 12,
            brand: "razer",
            paymentId: "price_1P6UwaEPfZyMOv01z8hpslWT",
            imageUrl:
              "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
            rating: 1.5,
            reviews: {
              create: [
                {
                  content: "The worst keyboard I've ever had",
                  rating: 1,
                  authorId: users[3].id,
                },
                {
                  content: "I'm not satisfied with this keyboard",
                  rating: 2,
                  authorId: users[12].id,
                },
              ],
            },
          },
          {
            name: "Corsair keyboard",
            description: "Corsair keyboard description",
            price: 250,
            stock: 10,
            brand: "corsair",
            paymentId: "price_1P6UT6EPfZyMOv01czRX7ycv",
            imageUrl:
              "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
            rating: 4,
            reviews: {
              create: [
                {
                  content: "Great keyboard",
                  rating: 5,
                  authorId: users[11].id,
                },
                {
                  content: "Not the worst keyboard",
                  rating: 3,
                  authorId: users[12].id,
                },
              ],
            },
          },
          {
            name: "Dell keyboard",
            brand: "dell",
            description: "Dell keyboard description",
            price: 350,
            stock: 20,
            discount: 25,
            paymentId: "price_1P6Uw4EPfZyMOv017yc6XNLr",
            imageUrl:
              "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
            rating: 5,
            reviews: {
              create: [
                {
                  content: "Great keyboard",
                  rating: 5,
                  authorId: users[7].id,
                },
                {
                  content: "Really good keyboard",
                  rating: 5,
                  authorId: users[8].id,
                },
              ],
            },
          },
          {
            name: "Logitech headphones",
            description: "Logitech headphones description",
            price: 600,
            stock: 20,
            discount: 10,
            brand: "logitech",
            paymentId: "price_1P6UxuEPfZyMOv01S3VwdlMQ",
            imageUrl:
              "https://images.unsplash.com/photo-1484704849700-f032a568e944",
            rating: 3.5,
            reviews: {
              create: [
                {
                  content: "Long battery life",
                  rating: 4,
                  authorId: users[6].id,
                },
                {
                  content: "Great hedphones",
                  rating: 3,
                  authorId: users[7].id,
                },
              ],
            },
          },
          {
            name: "Steelseries headphones",
            description: "Steelseries headphones description",
            price: 600,
            stock: 8,
            discount: 30,
            brand: "steelseries",
            paymentId: "price_1P6UyEEPfZyMOv01ekaLVQ0b",
            imageUrl:
              "https://images.unsplash.com/photo-1484704849700-f032a568e944",
            rating: 2.5,
            reviews: {
              create: [
                {
                  content: "High price but good quality",
                  rating: 4,
                  authorId: users[11].id,
                },
                {
                  content: "I'm not satisfied with this headphones",
                  rating: 1,
                  authorId: users[2].id,
                },
              ],
            },
          },
          {
            name: "Razer headphones",
            description: "Razer headphones description",
            price: 250,
            stock: 12,
            brand: "razer",
            paymentId: "price_1P6Ux2EPfZyMOv01l12tzLvm",
            imageUrl:
              "https://images.unsplash.com/photo-1484704849700-f032a568e944",
            rating: 1.5,
            reviews: {
              create: [
                {
                  content: "The worst headphones I've ever had",
                  rating: 1,
                  authorId: users[3].id,
                },
                {
                  content: "I'm not satisfied with this headphones",
                  rating: 2,
                  authorId: users[12].id,
                },
              ],
            },
          },
          {
            name: "Corsair headphones",
            description: "Corsair headphones description",
            price: 250,
            stock: 10,
            discount: 25,
            brand: "corsair",
            paymentId: "price_1P6UTKEPfZyMOv01oFObbiZc",
            imageUrl:
              "https://images.unsplash.com/photo-1484704849700-f032a568e944",
            rating: 4,
            reviews: {
              create: [
                {
                  content: "Great headphones",
                  rating: 5,
                  authorId: users[11].id,
                },
                {
                  content: "Not the worst headphones",
                  rating: 3,
                  authorId: users[12].id,
                },
              ],
            },
          },
          {
            name: "Dell headphones",
            brand: "dell",
            description: "Dell headphones description",
            price: 350,
            stock: 20,
            discount: 25,
            paymentId: "price_1P6UwNEPfZyMOv019a7MANWh",
            imageUrl:
              "https://images.unsplash.com/photo-1484704849700-f032a568e944",
            rating: 5,
            reviews: {
              create: [
                {
                  content: "Great headphones",
                  rating: 5,
                  authorId: users[7].id,
                },
                {
                  content: "Really good headphones",
                  rating: 5,
                  authorId: users[8].id,
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

async function createAccesories(users: EcommerceUser[]) {
  const data = await getData(users);
  await Promise.all(
    data.map(async (item) => {
      await prisma.category.create({
        data: item,
      });
    })
  );
}

export default createAccesories;
