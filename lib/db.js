import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => new PrismaClient({
  log: ["query", "info", "warn", "error"], // Enable Prisma logs
});

// Ensure Prisma Client is only initialized once in development
const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

export default prisma;
