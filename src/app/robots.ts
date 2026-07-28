import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://fpomponii.it/sitemap.xml",
    host: "https://fpomponii.it",
  };
}
