import type { Metadata } from "next";
import Link from "next/link";
import { formatPostDate, getBlogPosts } from "@/lib/blog";

const siteUrl = "https://fpomponii.it";
const portraitPath = "/federico-pomponii.jpg";
const portraitUrl = `${siteUrl}${portraitPath}`;
const pageTitle = "Federico Pomponii - Senior Full-Stack AI Engineer";
const pageDescription =
  "Senior Full-Stack AI Engineer building AI-native products end to end: LLM agent systems, React and TypeScript interfaces, distributed backends and AWS infrastructure.";
const socialTitle = pageTitle;
const socialDescription =
  "Production AI and full-stack product engineering: agent runtimes with human-confirmed actions, multi-agent pipelines, evaluation harnesses, React and TypeScript, distributed systems on AWS.";
const portraitAlt = "Federico Pomponii, Senior Full-Stack AI Engineer";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: socialTitle,
    description: socialDescription,
    url: siteUrl,
    siteName: "Federico Pomponii",
    images: [
      {
        url: portraitUrl,
        width: 1600,
        height: 1549,
        alt: portraitAlt,
      },
    ],
    locale: "en_US",
    countryName: "Italy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: socialTitle,
    description: socialDescription,
    images: [
      {
        url: portraitUrl,
        alt: portraitAlt,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  keywords: [
    "Senior Full-Stack AI Engineer",
    "Senior Software Engineer",
    "Full-Stack Engineer",
    "AI Agents",
    "LLM Systems",
    "Tool Calling",
    "LLM Evaluation",
    "MCP",
    "Distributed Systems",
    "System Design",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "AWS",
    "Rome",
    "Italy",
  ],
  authors: [{ name: "Federico Pomponii", url: siteUrl }],
  creator: "Federico Pomponii",
  category: "Software Engineering",
};

export default function Home() {
  const posts = getBlogPosts();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Federico Pomponii",
        description: pageDescription,
        inLanguage: "en",
        creator: {
          "@id": `${siteUrl}/#person`,
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile`,
        url: siteUrl,
        name: pageTitle,
        description: pageDescription,
        dateModified: "2026-10-07",
        inLanguage: "en",
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        mainEntity: {
          "@id": `${siteUrl}/#person`,
        },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Federico Pomponii",
        givenName: "Federico",
        familyName: "Pomponii",
        jobTitle: ["Senior Full-Stack AI Engineer", "Senior Software Engineer"],
        description: pageDescription,
        url: siteUrl,
        image: {
          "@type": "ImageObject",
          url: portraitUrl,
          width: 1600,
          height: 1549,
          caption: portraitAlt,
        },
        email: "mailto:federico.pomponii@gmail.com",
        nationality: {
          "@type": "Country",
          name: "Italy",
        },
        homeLocation: {
          "@type": "Place",
          name: "Rome, Italy",
        },
        knowsLanguage: ["English", "Italian"],
        sameAs: [
          "https://github.com/pmpwith2i",
          "https://www.linkedin.com/in/federico-pomponii",
        ],
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "University of Bologna",
          url: "https://www.unibo.it",
        },
        knowsAbout: [
          "LLM application engineering",
          "AI agents and tool calling",
          "Multi-agent pipelines",
          "LLM evaluation",
          "Model routing",
          "Model Context Protocol (MCP)",
          "LLM observability",
          "PII pseudonymization for AI data flows",
          "Full-stack product engineering",
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Python",
          "Backend API design",
          "Distributed systems",
          "System design",
          "PostgreSQL",
          "AWS",
          "Infrastructure as code",
          "CI/CD",
          "Observability",
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "Senior Full-Stack AI Engineer",
          alternateName: ["Senior Software Engineer"],
          description:
            "End-to-end engineering for AI-native products: LLM agent systems, React and TypeScript interfaces, distributed backends and AWS infrastructure.",
          occupationalCategory: "Software Engineering",
          occupationLocation: {
            "@type": "Country",
            name: "Italy",
          },
          skills: [
            "AI agents and tool calling",
            "LLM evaluation",
            "React and TypeScript",
            "Node.js and Python",
            "Distributed systems",
            "System design",
            "AWS and infrastructure as code",
            "PostgreSQL",
            "Observability",
          ],
        },
        subjectOf: {
          "@type": "TechArticle",
          headline:
            "MCP Security for Engineers: Threat Model, Attack Surface, and Hardening",
          url: `${siteUrl}/blog/mcp-security-for-engineers`,
          about: [
            "Model Context Protocol",
            "AI security",
            "Production AI architecture",
          ],
        },
      },
    ],
  };
  const jsonLdString = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString }}
      />
      <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col space-y-16 px-8 py-8 font-mono">
        <section className="flex min-h-[calc(100svh-4rem)] w-full max-w-6xl flex-col justify-center py-10">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl font-bold underline font-sans">
              Federico Pomponii.
            </h1>
            <h2 className="text-2xl font-semibold font-sans text-balance">
              Senior Full-Stack AI Engineer.
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg leading-8 text-pretty">
                I build AI-native products end to end, from React interfaces to
                backend services, LLM systems and cloud infrastructure.
              </p>
              <p className="text-lg leading-8 text-pretty">
                Recently: agent runtimes where state-changing actions wait for
                explicit user confirmation, multi-agent pipelines that cite
                their evidence, and eval harnesses that choose models on
                behavior and cost.
              </p>
              <p className="text-lg leading-8 text-pretty">
                I like the problems that do not come with a clean brief, and
                turning that ambiguity into systems that hold up in
                production.
              </p>
              <p className="text-lg leading-8 text-pretty">
                If you need someone who can shape the architecture, write the
                code and own what happens in production,{" "}
                <a
                  href="mailto:federico.pomponii@gmail.com"
                  className="underline underline-offset-4 transition-colors hover:bg-black hover:text-white"
                >
                  let&apos;s talk.
                </a>
              </p>
            </div>

            <nav
              aria-label="Federico Pomponii online"
              className="flex items-center justify-start gap-3 text-sm font-mono"
            >
              <a
                href="https://github.com/pmpwith2i"
                target="_blank"
                rel="me noopener noreferrer"
                className="underline transition-colors hover:bg-black hover:text-white"
              >
                GitHub
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/federico-pomponii"
                target="_blank"
                rel="me noopener noreferrer"
                className="underline transition-colors hover:bg-black hover:text-white"
              >
                LinkedIn
              </a>
            </nav>
          </div>
        </section>

        <section
          aria-labelledby="blog-heading"
          className="grid w-full max-w-4xl gap-8 border-t border-black/10 pt-12 md:grid-cols-[9rem_1fr]"
        >
          <h2
            id="blog-heading"
            className="text-sm font-normal uppercase tracking-[0.22em] text-gray-500"
          >
            <Link
              href="/blog"
              className="transition-colors hover:text-black hover:underline"
            >
              Blog
            </Link>
          </h2>

          {posts.length > 0 ? (
            <ol className="divide-y divide-black/10">
              {posts.map((post, index) => (
                <li
                  key={post.slug}
                  className="grid gap-3 py-5 first:pt-0 sm:grid-cols-[4.5rem_1fr_auto] sm:items-baseline"
                >
                  <span className="text-sm tabular-nums text-gray-400">
                    {String(index + 1).padStart(2, "0")} -
                  </span>
                  <h3 className="text-lg font-normal leading-snug text-black">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block underline-offset-4 transition-colors hover:underline"
                    >
                      {post.title}
                    </Link>
                  </h3>
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
        </section>
      </main>
    </>
  );
}
