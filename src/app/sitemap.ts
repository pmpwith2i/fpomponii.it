import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";

const siteUrl = "https://fpomponii.it";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogPosts();
  const latestPostDate = posts.at(0)?.date ?? "2026-08-12";

  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-08-12"),
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteUrl}/me.JPG`],
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(latestPostDate),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
