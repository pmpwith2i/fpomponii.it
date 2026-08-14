import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { formatPostDate, getBlogPosts } from "@/lib/blog";

const siteUrl = "https://fpomponii.it";
const portraitPath = "/federico-pomponii.jpg";
const illustrationPath =
  "/federico-pomponii-illustration-geometric-transparent.png";
const portraitUrl = `${siteUrl}${portraitPath}`;
const pageTitle = "Federico Pomponii - Senior Full Stack AI Engineer";
const pageDescription =
  "Senior Full Stack AI Engineer and Senior Software Engineer architecting AI-native products and distributed systems from ambiguity to production.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Federico Pomponii - Senior Full Stack AI Engineer & Software Architect",
    description:
      "Hands-on software architecture for AI-native products: React and TypeScript, backend APIs, distributed systems, RAG, agents and cloud infrastructure.",
    url: siteUrl,
    siteName: "Federico Pomponii",
    images: [
      {
        url: portraitUrl,
        width: 1600,
        height: 1549,
        alt: "Federico Pomponii, Senior Full Stack AI Engineer and Software Architect",
      },
    ],
    locale: "en_US",
    countryName: "Italy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title:
      "Federico Pomponii - Senior Full Stack AI Engineer & Software Architect",
    description:
      "Hands-on software architecture for AI-native products: React and TypeScript, backend APIs, distributed systems, RAG, agents and cloud infrastructure.",
    images: [
      {
        url: portraitUrl,
        alt: "Federico Pomponii, Senior Full Stack AI Engineer and Software Architect",
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
    "Senior Full Stack AI Engineer",
    "Senior Software Engineer",
    "Software Architect",
    "Full Stack AI Engineering",
    "AI-Native Product Architecture",
    "End-to-End Product Engineering",
    "Applied AI",
    "Production AI",
    "Complex Systems",
    "Backend API Development",
    "Distributed Systems",
    "Cloud Architecture",
    "System Design",
    "RAG",
    "Embeddings",
    "Vector Databases",
    "AI Agents",
    "LLM Evaluation",
    "MCP",
    "TypeScript",
    "Python",
    "Rust",
    "Node.js",
    "Next.js",
    "React",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Italy",
    "Teramo",
    "CI/CD",
    "Observability",
  ],
  authors: [{ name: "Federico Pomponii", url: siteUrl }],
  creator: "Federico Pomponii",
  category: "Full Stack AI Engineering",
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
        dateModified: "2026-08-14",
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
        jobTitle: [
          "Senior Full Stack AI Engineer",
          "Senior Software Engineer",
          "Software Architect",
        ],
        description: pageDescription,
        url: siteUrl,
        image: {
          "@type": "ImageObject",
          url: portraitUrl,
          width: 1600,
          height: 1549,
          caption:
            "Federico Pomponii, Senior Full Stack AI Engineer and Software Architect",
        },
        email: "mailto:federico.pomponii@gmail.com",
        nationality: {
          "@type": "Country",
          name: "Italy",
        },
        homeLocation: {
          "@type": "Place",
          name: "Teramo, Italy",
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
        worksFor: {
          "@id": "https://negenai.it/#organization",
        },
        knowsAbout: [
          "Full Stack AI engineering",
          "AI-native product architecture",
          "Applied AI",
          "Production AI systems",
          "Retrieval-Augmented Generation (RAG)",
          "Embeddings and vector search",
          "AI agents",
          "Tool calling and large language model workflows",
          "LLM evaluation",
          "Model Context Protocol (MCP)",
          "Frontend engineering",
          "Backend API design",
          "Distributed systems",
          "Software architecture",
          "Cloud architecture",
          "System design",
          "Reliability, security and observability",
          "TypeScript",
          "JavaScript",
          "Node.js",
          "Python",
          "Rust",
          "AWS",
          "SQL",
          "PostgreSQL",
          "Docker",
          "CI/CD",
          "React",
          "Next.js",
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "Senior Full Stack AI Engineer",
          alternateName: ["Senior Software Engineer", "Software Architect"],
          description:
            "Hands-on architecture and end-to-end engineering for AI-native products, complex backend services, distributed systems and cloud infrastructure.",
          occupationalCategory: "Software Engineering",
          occupationLocation: {
            "@type": "Country",
            name: "Italy",
          },
          skills: [
            "Full Stack AI engineering",
            "Software architecture",
            "React and TypeScript",
            "Python",
            "Rust",
            "Backend API design",
            "Distributed systems",
            "AWS and cloud architecture",
            "SQL and PostgreSQL",
            "RAG",
            "Embeddings and vector databases",
            "AI agents",
            "LLM evaluation",
            "Automated testing and CI/CD",
            "Reliability, security and observability",
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
      {
        "@type": "Organization",
        "@id": "https://negenai.it/#organization",
        name: "Negen",
        url: "https://negenai.it",
        description:
          "A software engineering and digital product company for selected product and consulting engagements.",
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
        <section className="relative flex min-h-[calc(100svh-4rem)] w-full max-w-6xl flex-col justify-center gap-12 pb-[19rem] pt-10 lg:py-10 lg:pr-[19rem]">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl font-bold underline font-sans">
              Federico Pomponii.
            </h1>
            <h2 className="text-2xl font-semibold font-sans text-balance">
              Senior Full Stack AI Engineer & Software Architect.
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg leading-8 text-pretty">
                I build AI-native products end to end as a Senior Full Stack AI
                Engineer and hands-on software architect.
              </p>
              <p className="text-lg leading-8 text-pretty">
                I like the problems that do not come with a clean brief: I turn
                ambiguity into reliable interfaces, backend systems, AI
                workflows and cloud infrastructure.
              </p>
              <p className="text-lg leading-8 text-pretty">
                If you need someone who can shape the architecture, write the
                code and own what happens in production, {" "}
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

          <figure className="portrait-illustration absolute right-0 bottom-0">
            <Image
              src={illustrationPath}
              alt="Geometric illustration of Federico Pomponii"
              fill
              priority
              sizes="(min-width: 1024px) 288px, 72vw"
              className="portrait-illustration__image"
            />
          </figure>
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
