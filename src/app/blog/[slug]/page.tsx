import type { ComponentPropsWithoutRef } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import {
  formatPostDate,
  getBlogPost,
  getBlogPostSlugs,
} from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const mdxComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="mt-14 text-2xl font-semibold leading-tight font-sans"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="mt-10 text-xl font-semibold leading-tight font-sans"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="mt-5 text-lg leading-8 text-gray-700" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      className="underline underline-offset-4 transition-colors hover:bg-black hover:text-white"
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="mt-5 list-disc space-y-2 pl-6 text-lg text-gray-700" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="mt-5 list-decimal space-y-2 pl-6 text-lg text-gray-700"
      {...props}
    />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="leading-8" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="mt-6 border-l border-black/20 pl-5 text-gray-600"
      {...props}
    />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code className="bg-black/[0.04] px-1 py-0.5 text-base" {...props} />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="mt-6 overflow-x-auto border border-black/10 p-4 text-sm leading-7"
      {...props}
    />
  ),
  hr: (props: ComponentPropsWithoutRef<"hr">) => (
    <hr className="my-12 border-black/10" {...props} />
  ),
};

export function generateStaticParams() {
  return getBlogPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post not found - Federico Pomponii",
    };
  }

  return {
    title: `${post.title} - Federico Pomponii`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    authors: [{ name: "Federico Pomponii", url: "https://fpomponii.it" }],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["https://fpomponii.it"],
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en",
    url: `https://fpomponii.it/blog/${post.slug}`,
    mainEntityOfPage: `https://fpomponii.it/blog/${post.slug}`,
    author: {
      "@type": "Person",
      "@id": "https://fpomponii.it/#person",
      name: "Federico Pomponii",
      url: "https://fpomponii.it",
    },
    publisher: {
      "@type": "Person",
      "@id": "https://fpomponii.it/#person",
      name: "Federico Pomponii",
    },
  };
  const articleJsonLdString = JSON.stringify(articleJsonLd).replace(
    /</g,
    "\\u003c",
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: articleJsonLdString }}
      />
      <main className="min-h-screen w-full px-8 py-12 font-mono">
        <article className="mx-auto max-w-3xl">
          <header className="mb-14 space-y-8">
            <Link
              href="/blog"
              className="text-sm underline transition-colors hover:bg-black hover:text-white"
            >
              Blog
            </Link>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight underline font-sans">
                {post.title}
              </h1>
              <time
                className="block text-sm tabular-nums text-gray-500"
                dateTime={post.date}
              >
                {formatPostDate(post.date)}
              </time>
            </div>
          </header>

          <div>
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkMath],
                  rehypePlugins: [rehypeKatex],
                },
              }}
            />
          </div>
        </article>
      </main>
    </>
  );
}
