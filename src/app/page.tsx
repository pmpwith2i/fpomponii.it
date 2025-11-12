export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Federico Pomponii",
    givenName: "Federico",
    familyName: "Pomponii",
    jobTitle: "Full Stack Engineer - Web3 & Smart Contracts",
    url: "https://fpomponii.it",
    image: "https://fpomponii.it/me.JPG",
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
      {
        "@type": "Thing",
        name: "Solidity",
        description: "Smart contract programming language",
      },
      {
        "@type": "Thing",
        name: "Smart Contracts",
        description: "Blockchain-based self-executing contracts",
      },
      {
        "@type": "Thing",
        name: "DeFi",
        description: "Decentralized Finance",
      },
      {
        "@type": "Thing",
        name: "Blockchain",
      },
      {
        "@type": "Thing",
        name: "Web3",
      },
      {
        "@type": "Thing",
        name: "TypeScript",
      },
      {
        "@type": "Thing",
        name: "React",
      },
      {
        "@type": "Thing",
        name: "Next.js",
      },
      {
        "@type": "Thing",
        name: "Node.js",
      },
      {
        "@type": "Thing",
        name: "AWS",
      },
      {
        "@type": "Thing",
        name: "Docker",
      },
    ],
    description:
      "Full Stack Engineer with experience in Web3, DeFi, and smart contract development. From Silicon Valley tech lead to blockchain engineer, building clean architecture for backend systems and smart contracts.",
    email: "federico.pomponii@gmail.com",
    nationality: "Italian",
    knowsLanguage: ["English", "Italian"],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Engineer",
      occupationLocation: {
        "@type": "Country",
        name: "Italy",
      },
      skills: [
        "Solidity",
        "Smart Contracts",
        "DeFi",
        "Web3",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "AWS",
        "Docker",
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="h-screen flex flex-col w-screen justify-center max-w-7xl mx-auto space-y-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mt-12 mb-6 underline">
            Federico Pomponii.
          </h1>
          <h2 className="text-2xl font-semibold mb-4">
            Full Stack Engineer - React, Node.Js, Solidity, Web3 & DeFi.
          </h2>
          <div className="space-y-2 text-gray-600">
          <p className="text-lg">
            I started coding when I was 16 and never stopped since then. For most of my years, I worked as a full stack engineer and tech lead in Silicon Valley startups, building scalable backend systems and web applications. In recent years, I shifted my focus to blockchain technology, specializing in smart contract development and decentralized finance (DeFi) applications.
          </p>
          <p className="text-lg">
            The journey through the web3 world is fascinating for me. Math, cryptography, and finance are what I'm studying now, taking a step back from the fancy world of frameworks and libraries to focus on the core principles that make decentralized applications possible.
          </p>
          </div>
        </div>

        <div>
          {/* Links Section */}
          <div className="flex items-center justify-start gap-3 text-sm font-mono">
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
          </div>
        </div>
      </div>
    </>
  );
}
