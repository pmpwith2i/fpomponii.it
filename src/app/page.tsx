import type { Metadata } from "next";
import Link from "next/link";
import { formatPostDate, getBlogPosts } from "@/lib/blog";

const siteUrl = "https://fpomponii.it";
const pageTitle =
  "Federico Pomponii - Senior Software Engineer | Applied AI & Complex Systems";
const pageDescription =
  "Senior Software Engineer building production AI, backend and distributed systems. 10+ years solving complex product and cloud problems across the US and Europe.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Federico Pomponii - Senior Software Engineer for Applied AI and Complex Systems",
    description:
      "Production AI, complex backend systems and cloud architecture - from ambiguous problem to reliable production outcome.",
    url: siteUrl,
    siteName: "Federico Pomponii",
    images: [
      {
        url: `${siteUrl}/me.JPG`,
        width: 3024,
        height: 4032,
        alt: "Federico Pomponii, Senior Software Engineer",
      },
    ],
    locale: "en_US",
    countryName: "Italy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title:
      "Federico Pomponii - Senior Software Engineer for Applied AI and Complex Systems",
    description:
      "Production AI, complex backend systems and cloud architecture - from ambiguous problem to reliable production outcome.",
    images: [
      {
        url: `${siteUrl}/me.JPG`,
        alt: "Federico Pomponii, Senior Software Engineer",
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
    "Senior Software Engineer",
    "Applied AI",
    "Production AI",
    "Complex Systems",
    "Backend Engineering",
    "Distributed Systems",
    "Cloud Architecture",
    "System Design",
    "RAG",
    "AI Agents",
    "LLM Workflows",
    "MCP",
    "TypeScript",
    "Node.js",
    "Next.js",
    "React",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Italy",
    "Teramo",
    "Technical Lead",
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
        dateModified: "2026-07-28",
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
        jobTitle: "Senior Software Engineer",
        description: pageDescription,
        url: siteUrl,
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}/me.JPG`,
          width: 3024,
          height: 4032,
          caption: "Federico Pomponii, Senior Software Engineer",
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
          "Applied AI",
          "Production AI systems",
          "Retrieval-Augmented Generation (RAG)",
          "AI agents",
          "Large language model workflows",
          "Model Context Protocol (MCP)",
          "Backend engineering",
          "Distributed systems",
          "Cloud architecture",
          "System design",
          "TypeScript",
          "Node.js",
          "AWS",
          "PostgreSQL",
          "Docker",
          "React",
          "Next.js",
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "Senior Software Engineer",
          description:
            "Hands-on software engineering across applied AI, complex backend systems, distributed systems and cloud architecture.",
          occupationLocation: {
            "@type": "Country",
            name: "Italy",
          },
          skills: [
            "Applied AI",
            "RAG",
            "AI agents",
            "Backend engineering",
            "Distributed systems",
            "Cloud architecture",
            "System design",
            "TypeScript",
            "Node.js",
            "AWS",
            "PostgreSQL",
            "Docker",
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
      <main className="min-h-screen flex w-full px-8 py-8 flex-col justify-center max-w-7xl mx-auto space-y-16 font-mono">
        <section className="max-w-4xl space-y-6">
          <h1 className="text-4xl font-bold mt-12 mb-6 underline font-sans">
            Federico Pomponii.
          </h1>
          <h2 className="text-2xl font-semibold mb-4 font-sans">
            Senior Software Engineer - Applied AI & Complex Systems.
          </h2>
          <div className="space-y-2 text-gray-600">
            <p className="text-lg">
              I turn ambiguous, cross-domain problems into reliable production
              systems, combining applied AI, backend engineering, cloud
              architecture and end-to-end ownership.
            </p>
            <p className="text-lg">
              I started working professionally as a software engineer at 17,
              before completing high school. Since then, I have built software
              across fintech, public-sector products, national-scale media,
              Silicon Valley SaaS, digital-asset infrastructure and applied AI.
              The titles changed, but the common thread did not: I tend to
              become the person trusted with problems that cross team or domain
              boundaries.
            </p>
            <p className="text-lg">
              My strongest work happens when the problem is ambiguous. I connect
              product and business constraints to architecture, hands-on
              implementation, integrations, deployment and production
              operations. I am comfortable moving between AI workflows,
              distributed backend services, cloud infrastructure and technical
              leadership without losing depth.
            </p>
            <p className="text-lg">
              Today, I focus on production AI and complex systems: RAG, AI
              agents, LLM workflows, evaluation, security, guardrails and
              observability, together with the backend, data and cloud
              foundations that make those systems reliable.
            </p>
            <p className="text-lg">
              I am based in Teramo, Italy, and have worked with teams across
              Europe and the United States. Through Negen, I lead selected
              product and consulting engagements while remaining hands-on
              across architecture, code and production delivery.
            </p>
          </div>

          <nav
            aria-label="Federico Pomponii online"
            className="flex items-center justify-start gap-3 text-sm font-mono"
          >
            <a
              href="https://github.com/pmpwith2i"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:bg-black hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/federico-pomponii"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:bg-black hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href="mailto:federico.pomponii@gmail.com"
              className="underline hover:bg-black hover:text-white transition-colors"
            >
              Email
            </a>
          </nav>
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
