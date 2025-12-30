import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const dynamic = "force-dynamic";

export default async function Home() {
  let posts = [];
  try { posts = await prisma.post.findMany({ orderBy: { createdAt: "desc" } }); } 
  catch (e) { console.log("DB not ready"); }

  return (
    <div className="min-h-screen bg-[#f9f7f1] text-zinc-900 font-serif p-8">
      <header className="max-w-4xl mx-auto border-b-8 double border-zinc-800 pb-4 mb-12 text-center">
        <h1 className="text-8xl font-black uppercase tracking-tighter mb-2">The Vercel Times</h1>
        <div className="flex justify-between border-y border-zinc-800 py-1 uppercase text-sm font-bold">
          <span>Vol. I — No. 001</span>
          <span>Tuesday, December 30, 2025</span>
          <span>Price: Free</span>
        </div>
      </header>
      <main className="max-w-4xl mx-auto">
        {posts.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed border-zinc-400 rounded">
            <h2 className="text-2xl italic">Waiting for the morning edition...</h2>
            <p className="mt-2 uppercase text-xs font-bold">Connect Vercel Storage to start printing.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {posts.map((post) => (
              <article key={post.id} className="border-b border-zinc-300 pb-8">
                <h2 className="text-3xl font-bold leading-tight mb-3 underline decoration-1 underline-offset-4">{post.title}</h2>
                <p className="text-zinc-700 leading-relaxed text-lg">{post.content}</p>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
