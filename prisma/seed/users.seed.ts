import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

let userData: Prisma.EcommerceUserCreateInput[] = [
  {
    email: "adam@adamski.pl",
    password: "adamadam",
    firstName: "Adam",
    lastName: "Adamski",
  },
  {
    email: "bogdan@bogdanowski.pl",
    password: "bogdanbogdan",
    firstName: "Bogdan",
    lastName: "Bogdanowski",
  },
  {
    email: "damian@damianowski.pl",
    password: "damian",
    firstName: "damian",
    lastName: "damianowski",
  },
  {
    email: "franek@franekowski.pl",
    password: "franek",
    firstName: "franek",
    lastName: "frankowski",
  },
  {
    email: "henryk@henrykowski.pl",
    password: "henryk",
    firstName: "henryk",
    lastName: "henrykowski",
  },
  {
    email: "grzegorz@grzegorzowski.pl",
    password: "grzegorz",
    firstName: "grzegorz",
    lastName: "grzegorzowski",
  },
  {
    email: "kamil@kamilowski.pl",
    password: "kamil",
    firstName: "kamil",
    lastName: "kamilowski",
  },
  {
    email: "stefan@stefanowski.pl",
    password: "stefan",
    firstName: "stefan",
    lastName: "stefanowski",
  },
  {
    email: "maciej@maciejowski.pl",
    password: "maciej",
    firstName: "maciej",
    lastName: "maciejowski",
  },
  {
    email: "norbert@norbertowski.pl",
    password: "norbert",
    firstName: "norbert",
    lastName: "norbertowski",
  },
  {
    email: "karol@karolowski.pl",
    password: "karol",
    firstName: "karol",
    lastName: "karolowski",
  },
  {
    email: "piotr@piotrowski.pl",
    password: "piotr",
    firstName: "piotr",
    lastName: "piotrowski",
  },
  {
    email: "aleksander@pawełowski.pl",
    password: "paweł",
    firstName: "paweł",
    lastName: "pawełowski",
  },
  {
    email: "aleksander@aleksanderowski.pl",
    password: "aleksander",
    firstName: "aleksander",
    lastName: "aleksanderowski",
  },
  {
    email: "jan@janowski.pl",
    password: "jan",
    firstName: "jan",
    lastName: "janowski",
  },
  {
    email: "janusz@januszowski.pl",
    password: "janusz",
    firstName: "janusz",
    lastName: "januszowski",
  },
  {
    email: "filip@filipowski.pl",
    password: "filip",
    firstName: "filip",
    lastName: "filipowski",
  },
  {
    email: "zbigniew@zbigniewowski.pl",
    password: "zbigniew",
    firstName: "zbigniew",
    lastName: "zbigniewowski",
  },
  {
    email: "andrzej@andrzejowski.pl",
    password: "andrzej",
    firstName: "andrzej",
    lastName: "andrzejowski",
  },
  {
    email: "roman@romanowski.pl",
    password: "roman",
    firstName: "roman",
    lastName: "romanowski",
  },

  {
    email: "bartek@bartekowski.pl",
    password: "bartek",
    firstName: "bartek",
    lastName: "bartekowski",
  },
  {
    email: "jakub@jakubowski.pl",
    password: "jakub",
    firstName: "jakub",
    lastName: "jakubowski",
  },
];

async function createUsers() {
  const users = await Promise.all(
    userData.map(async (user) => {
      user.password = await bcrypt.hash(user.password, 10);
      return await prisma.ecommerceUser.create({
        data: user,
      });
    })
  );

  return users;
}

export default createUsers;
