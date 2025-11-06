export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Federico Pomponii",
    "givenName": "Federico",
    "familyName": "Pomponii",
    "jobTitle": "Full Stack Engineer - Web3 & Smart Contracts",
    "url": "https://fpomponii.it",
    "image": "https://fpomponii.it/me.JPG",
    "sameAs": [
      "https://github.com/pmpwith2i",
      "https://www.linkedin.com/in/federico-pomponii"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of Bologna",
      "url": "https://www.unibo.it"
    },
    "knowsAbout": [
      {
        "@type": "Thing",
        "name": "Solidity",
        "description": "Smart contract programming language"
      },
      {
        "@type": "Thing",
        "name": "Smart Contracts",
        "description": "Blockchain-based self-executing contracts"
      },
      {
        "@type": "Thing",
        "name": "DeFi",
        "description": "Decentralized Finance"
      },
      {
        "@type": "Thing",
        "name": "Blockchain"
      },
      {
        "@type": "Thing",
        "name": "Web3"
      },
      {
        "@type": "Thing",
        "name": "TypeScript"
      },
      {
        "@type": "Thing",
        "name": "React"
      },
      {
        "@type": "Thing",
        "name": "Next.js"
      },
      {
        "@type": "Thing",
        "name": "Node.js"
      },
      {
        "@type": "Thing",
        "name": "AWS"
      },
      {
        "@type": "Thing",
        "name": "Docker"
      }
    ],
    "description": "Full Stack Engineer with experience in Web3, DeFi, and smart contract development. From Silicon Valley tech lead to blockchain engineer, building clean architecture for backend systems and smart contracts.",
    "email": "federico.pomponii@gmail.com",
    "nationality": "Italian",
    "knowsLanguage": ["English", "Italian"],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Engineer",
      "occupationLocation": {
        "@type": "Country",
        "name": "Italy"
      },
      "skills": [
        "Solidity",
        "Smart Contracts",
        "DeFi",
        "Web3",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "AWS",
        "Docker"
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative z-10 min-h-screen flex flex-col w-screen">

        {/* Main Content */}
        <main className="mx-auto mb-12 w-full px-6 flex-1 flex flex-col w-full">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mt-12 mb-6 underline">Federico Pomponii.</h1>
            <p className="text-lg">
              Full Stack Engineer with experience in Web3, DeFi, and smart contract development. From Silicon Valley tech lead to blockchain engineer, building clean architecture for backend systems and smart contracts.
            </p>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div>
              {/* Technologies Section */}
              <section className="border-y-1 border-black py-8 text-center w-full">
                <p className="text-base leading-relaxed">
                  Solidity, Smart Contracts, DeFi, Web3, TypeScript, React, Next.js, Node.js, AWS, Docker
                </p>
              </section>

              {/* Links Section */}
              <section className="mt-16 text-center flex-1">
                <div className="flex items-center justify-center gap-3 text-sm font-mono">
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
              </section>
            </div>
          </div>

        </main>
      </div>
    </>
  );
}
