import type { Metadata } from "next";
import Link from "next/link";
import { formatPostDate, getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog - Federico Pomponii",
  description: "Notes and essays by Federico Pomponii.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main className="min-h-screen w-full px-8 py-12 font-mono">
      <div className="mx-auto flex max-w-4xl flex-col gap-16">
        <header className="space-y-6">
          <Link
            href="/"
            className="text-sm underline transition-colors hover:bg-black hover:text-white"
          >
            Federico Pomponii
          </Link>
          <h1 className="text-4xl font-bold underline font-sans">Blog.</h1>
        </header>

        {posts.length > 0 ? (
          <ol className="divide-y divide-black/10 border-t border-black/10">
            {posts.map((post, index) => (
              <li
                key={post.slug}
                className="grid gap-3 py-6 sm:grid-cols-[4.5rem_1fr_auto] sm:items-baseline"
              >
                <span className="text-sm tabular-nums text-gray-400">
                  {String(index + 1).padStart(2, "0")} -
                </span>
                <h2 className="text-xl font-normal leading-snug text-black">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="underline-offset-4 transition-colors hover:underline"
                  >
                    {post.title}
                  </Link>
                </h2>
                <time
                  className="text-sm tabular-nums text-gray-500"
                  dateTime={post.date}
                >
                  {formatPostDate(post.date)}
                </time>
              </li>
            ))}
          </ol>
        ) : (
          <p className="max-w-xl text-lg leading-relaxed text-gray-500">
            No published notes yet.
          </p>
        )}
      </div>
    </main>
  );
}
