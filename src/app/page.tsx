import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <div className="min-h-screen p-10 font-sans">
      <h1 className="text-6xl font-bold mb-4">SYSTEM REBOOT</h1>
      <p className="text-xl">The encoding error has been purged.</p>
    </div>
  );
}