import { EcommerceUser, Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getData = async (users: EcommerceUser[]) => {
  const data: Prisma.CategoryCreateInput[] = [
    {
      name: "laptops",
      description: "Laptops category",
      imageUrl:
        "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?fm=jpg&h=240&w=400",
      brands: ["lenovo", "hp", "apple", "asus", "dell"],
      products: {
        create: [
          {
            name: "Lenovo 1",
            description: "Laptop lenovo 1 description",
            price: 1000,
            discount: 20,
            stock: 10,
            brand: "lenovo",
            paymentId: "price_1P4g0NEPfZyMOv01l8DOBqt4",
            imageUrl:
              "https://images.unsplash.com/photo-1511385348-a52b4a160dc2",
            rating: 3,
            reviews: {
              create: [
                {
                  content: "Great laptop",
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
            name: "Lenovo 2",
            description: "Laptop lenovo 2 description",
            price: 2000,
            stock: 5,
            brand: "lenovo",
            paymentId: "price_1P4g0iEPfZyMOv01U4EqSf8j",
            imageUrl:
              "https://images.unsplash.com/photo-1511385348-a52b4a160dc2",
            rating: 5,
            reviews: {
              create: [
                {
                  content: "Great laptop",
                  rating: 5,
                  authorId: users[5].id,
                },
                {
                  content: "Best laptop I've ever had",
                  rating: 5,
                  authorId: users[3].id,
                },
              ],
            },
          },
          {
            name: "Dell 1",
            description: "Laptop Dell 1 description",
            price: 5000,
            discount: 10,
            stock: 2,
            brand: "dell",
            paymentId: "price_1P5lpFEPfZyMOv01Ouu7YcVJ",
            imageUrl:
              "https://images.unsplash.com/photo-1511385348-a52b4a160dc2",
            rating: 1,
            reviews: {
              create: [
                {
                  content: "High price and low quality",
                  rating: 1,
                  authorId: users[12].id,
                },
                {
                  content: "Too high price for such a laptop",
                  rating: 1,
                  authorId: users[13].id,
                },
              ],
            },
          },
          {
            name: "Dell 2",
            description: "Laptop Dell 2 description",
            price: 2500,
            stock: 8,
            brand: "dell",
            paymentId: "price_1P5lbqEPfZyMOv01jRaDa9LW",
            imageUrl:
              "https://images.unsplash.com/photo-1511385348-a52b4a160dc2",
            rating: 4.5,
            reviews: {
              create: [
                {
                  content: "Long battery life",
                  rating: 4,
                  authorId: users[6].id,
                },
                {
                  content: "Great laptop",
                  rating: 5,
                  authorId: users[8].id,
                },
              ],
            },
          },
          {
            name: "HP 1",
            description: "Laptop HP 1 description",
            price: 3500,
            stock: 15,
            brand: "hp",
            paymentId: "price_1P5lcNEPfZyMOv01z0QIebbM",
            imageUrl:
              "https://images.unsplash.com/photo-1511385348-a52b4a160dc2",
            rating: 3.5,
            reviews: {
              create: [
                {
                  content: "Long battery life",
                  rating: 4,
                  authorId: users[2].id,
                },
                {
                  content: "Great laptop",
                  rating: 3,
                  authorId: users[5].id,
                },
              ],
            },
          },
          {
            name: "HP 2",
            description: "Laptop HP 2 description",
            price: 1500,
            stock: 2,
            brand: "hp",
            paymentId: "price_1P5lXMEPfZyMOv01XXO7BMRE",
            imageUrl:
              "https://images.unsplash.com/photo-1511385348-a52b4a160dc2",
            rating: 3.5,
            reviews: {
              create: [
                {
                  content: "Long battery life",
                  rating: 4,
                  authorId: users[6].id,
                },
                {
                  content: "Great laptop",
                  rating: 3,
                  authorId: users[7].id,
                },
              ],
            },
          },
          {
            name: "Apple 1",
            description: "Laptop Apple 1 description",
            price: 6500,
            stock: 5,
            brand: "apple",
            paymentId: "price_1P5lpWEPfZyMOv01YIunHkZ6",
            imageUrl:
              "https://images.unsplash.com/photo-1511385348-a52b4a160dc2",
            rating: 2.5,
            reviews: {
              create: [
                {
                  content: "High price but good quality",
                  rating: 4,
                  authorId: users[11].id,
                },
                {
                  content: "I'm not satisfied with this laptop",
                  rating: 1,
                  authorId: users[2].id,
                },
              ],
            },
          },
          {
            name: "Apple 2",
            description: "Laptop Apple 2 description",
            price: 6500,
            stock: 12,
            brand: "apple",
            paymentId: "price_1P5lplEPfZyMOv01zxmkU9eD",
            imageUrl:
              "https://images.unsplash.com/photo-1511385348-a52b4a160dc2",
            rating: 1.5,
            reviews: {
              create: [
                {
                  content: "The worst laptop I've ever had",
                  rating: 1,
                  authorId: users[3].id,
                },
                {
                  content: "I'm not satisfied with this laptop",
                  rating: 2,
                  authorId: users[12].id,
                },
              ],
            },
          },
          {
            name: "Asus 1",
            description: "Laptop Asus 1 description",
            price: 2500,
            stock: 10,
            brand: "asus",
            paymentId: "price_1P5lc5EPfZyMOv01RE4dk1K3",
            imageUrl:
              "https://images.unsplash.com/photo-1511385348-a52b4a160dc2",
            rating: 4,
            reviews: {
              create: [
                {
                  content: "Great laptop",
                  rating: 5,
                  authorId: users[13].id,
                },
                {
                  content: "Not the worst laptop",
                  rating: 3,
                  authorId: users[9].id,
                },
              ],
            },
          },
          {
            name: "Asus 2",
            brand: "asus",
            description: "Laptop Asus 2 description",
            price: 3500,
            stock: 20,
            discount: 25,
            paymentId: "price_1P5lp3EPfZyMOv010DndNwXl",
            imageUrl:
              "https://images.unsplash.com/photo-1511385348-a52b4a160dc2",
            rating: 5,
            reviews: {
              create: [
                {
                  content: "Great laptop",
                  rating: 5,
                  authorId: users[7].id,
                },
                {
                  content: "Really good laptop",
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

async function createLaptops(users: EcommerceUser[]) {
  const data = await getData(users);
  await Promise.all(
    data.map(async (item) => {
      await prisma.category.create({
        data: item,
      });
    })
  );
}

export default createLaptops;
