import bcrypt from "bcrypt";
import { users } from "./users";
import prisma from "../lib/db";
async function main() {
  for (const user of users) {
    await prisma.users.upsert({
      where: { email: user.email },
      update: {},
      create: {
        ...user,
        password: await bcrypt.hash(user.password, 10),
      },
    });
  }

  console.log("Seeding completed with password hashing!");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
