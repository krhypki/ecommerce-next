import { PrismaClient } from "@prisma/client";
import createAccesories from "./accessories.seed";
import createLaptops from "./laptop.seed";
import createSmartphones from "./smartphone.seed";
import createTvs from "./tv";
import createUsers from "./users.seed";

const prisma = new PrismaClient();

async function seed() {
  const users = await createUsers();
  await createLaptops(users);
  await createSmartphones(users);
  await createTvs(users);
  await createAccesories(users);
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
