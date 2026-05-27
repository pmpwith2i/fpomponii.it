import fs from "node:fs";
import path from "node:path";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  draft: boolean;
};

export type BlogPostWithContent = BlogPost & {
  content: string;
};

type BlogFrontmatter = {
  title?: string;
  date?: string;
  draft?: boolean;
};

const blogDirectory = path.join(process.cwd(), "content", "blog");

function getPostFilePath(slug: string) {
  return path.join(blogDirectory, slug, "index.mdx");
}

function stripQuotes(value: string) {
  const trimmed = value.trim();

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }

  return trimmed;
}

function parseFrontmatter(source: string): BlogFrontmatter {
  const match = source.match(/^---\s*\n([\s\S]*?)\n---/);

  if (!match) {
    return {};
  }

  return match[1].split("\n").reduce<BlogFrontmatter>((metadata, line) => {
    const separatorIndex = line.indexOf(":");

    if (separatorIndex === -1) {
      return metadata;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = stripQuotes(line.slice(separatorIndex + 1));

    if (key === "title") {
      metadata.title = value;
    }

    if (key === "date") {
      metadata.date = value;
    }

    if (key === "draft") {
      metadata.draft = value === "true";
    }

    return metadata;
  }, {});
}

function stripFrontmatter(source: string) {
  return source.replace(/^---\s*\n[\s\S]*?\n---\s*/, "").trim();
}

function readBlogPost(slug: string): BlogPostWithContent {
  const filePath = getPostFilePath(slug);
  const source = fs.readFileSync(filePath, "utf8");
  const metadata = parseFrontmatter(source);

  if (!metadata.title || !metadata.date) {
    throw new Error(`Blog post "${slug}" needs title and date frontmatter.`);
  }

  return {
    slug,
    title: metadata.title,
    date: metadata.date,
    draft: metadata.draft ?? false,
    content: stripFrontmatter(source),
  };
}

export function getBlogPostSlugs() {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  return fs
    .readdirSync(blogDirectory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("_"))
    .map((entry) => entry.name);
}

export function getBlogPosts() {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  return getBlogPostSlugs()
    .map(readBlogPost)
    .filter((post) => !post.draft)
    .sort((first, second) => second.date.localeCompare(first.date));
}

export function getBlogPost(slug: string) {
  const filePath = getPostFilePath(slug);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const post = readBlogPost(slug);

  if (post.draft) {
    return null;
  }

  return post;
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}
