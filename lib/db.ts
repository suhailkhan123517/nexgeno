import { PrismaClient } from "@prisma/client";

// Development

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

// Production
// export const db = new PrismaClient();
