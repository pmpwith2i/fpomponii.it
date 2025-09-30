export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Federico Pomponii",
    "jobTitle": "Backend & Solidity Engineer",
    "url": "https://fpomponii.it",
    "sameAs": [
      "https://github.com/pmpwith2i",
      "https://www.linkedin.com/in/federico-pomponii"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of Bologna"
    },
    "knowsAbout": [
      "Solidity",
      "Smart Contracts",
      "DeFi",
      "Blockchain",
      "Web3",
      "TypeScript",
      "React",
      "Node.js",
      "AWS",
      "Docker"
    ],
    "description": "Backend & Solidity Engineer with experience in Web3, DeFi, and smart contract development. From Silicon Valley tech lead to blockchain engineer.",
    "email": "federico.pomponii@gmail.com"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative z-10 min-h-screen">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#f5ebe0]/80 border-b-3 border-gray-800 game-card">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-sm uppercase tracking-wide">Federico Pomponii</div>
            <div className="flex gap-6 text-xs font-mono">
              <a href="#about" className="hover:text-orange-600 transition-colors">ABOUT</a>
              <a href="#experience" className="hover:text-orange-600 transition-colors">EXPERIENCE</a>
              <a href="#skills" className="hover:text-orange-600 transition-colors">SKILLS</a>
              <a href="#projects" className="hover:text-orange-600 transition-colors">PROJECTS</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="text-center py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Profile Picture */}
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-800 shadow-lg">
              <img
                src="/me.JPG"
                alt="Federico Pomponii"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-2 text-pixel-shadow">
            FEDERICO POMPONII
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-orange-600">
            Backend & Solidity Engineer
          </h2>

          <div className="game-card p-6 max-w-3xl mx-auto mb-6">
            <p className="text-sm md:text-base text-gray-700 font-mono leading-relaxed">
              Writing code since 17. From early-stage crypto startups to Silicon Valley tech lead to blockchain engineer—driven by curiosity and a constant need to build. Passionate about clean architecture, whether it{"'"}s backend systems or smart contracts. Open to new challenges.
            </p>
          </div>

          <div className="flex gap-4 justify-center text-xs font-mono mb-4">
            <a href="mailto:federico.pomponii@gmail.com" className="retro-btn text-xs px-4 py-2">
              📧 EMAIL
            </a>
            <a href="https://github.com/pmpwith2i" target="_blank" rel="noopener noreferrer" className="retro-btn text-xs px-4 py-2 bg-teal-500">
              💻 GITHUB
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto mb-12 w-full px-6">
        {/* Work Experience */}
        <section id="experience" className="mb-16 scroll-mt-20">
          <h3 className="text-2xl font-bold mb-6 text-center uppercase tracking-wider">
            Experience
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Web3 Column */}
            <div>
              <div className="game-card p-4 mb-4 bg-orange-100/50">
                <h4 className="font-bold text-sm uppercase text-orange-600 mb-2">Blockchain & Web3</h4>
              </div>

              <div className="space-y-4">
                <div className="game-card p-5">
                  <div className="mb-2">
                    <h4 className="font-bold text-sm uppercase mb-3">Smart Contract & DeFi Engineering</h4>
                  </div>
                  <ul className="text-xs text-gray-700 font-mono space-y-1 list-disc list-inside">
                    <li>Building and deploying smart contracts on EVM-compatible chains</li>
                    <li>DeFi protocol development and integration</li>
                    <li>Solidity development with emphasis on security and gas optimization</li>
                    <li>Blockchain infrastructure integration (Infura, Fireblocks, RPC providers)</li>
                    <li>Cross-chain bridge implementations and multi-chain architectures</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Web2 Column */}
            <div>
              <div className="game-card p-4 mb-4 bg-teal-100/50">
                <h4 className="font-bold text-sm uppercase text-teal-600 mb-2">Backend & Architecture</h4>
              </div>

              <div className="space-y-4">
                <div className="game-card p-5">
                  <div className="mb-2">
                    <div>
                      <h4 className="font-bold text-sm uppercase">Full Stack Developer → Tech Lead</h4>
                      <p className="text-xs text-gray-600 font-mono">Confidence Systems, Palo Alto</p>
                    </div>
                  </div>
                  <ul className="text-xs text-gray-700 font-mono space-y-1 list-disc list-inside">
                    <li>Promoted to Tech Lead & Head of Architecture</li>
                    <li>Led DevOps team, reduced AWS costs by 50%</li>
                    <li>Built public SDK generating $10M+ revenue</li>
                    <li>Rebuilt legacy frontend with React & Next.js</li>
                    <li>Implemented QA automation, testing infrastructure, and LLM features</li>
                  </ul>
                </div>

                <div className="game-card p-5">
                  <div className="mb-2">
                    <div>
                      <h4 className="font-bold text-sm uppercase">Tech Lead & Head of Architecture</h4>
                      <p className="text-xs text-gray-600 font-mono">Kleecks</p>
                    </div>
                  </div>
                  <ul className="text-xs text-gray-700 font-mono space-y-1 list-disc list-inside">
                    <li>Led architecture and development of core platform</li>
                    <li>Built application using Vue.js, Node.js, and GraphQL</li>
                    <li>Designed scalable backend infrastructure</li>
                  </ul>
                </div>

                <div className="game-card p-5">
                  <div className="mb-2">
                    <div>
                      <h4 className="font-bold text-sm uppercase">Cloud Developer</h4>
                      <p className="text-xs text-gray-600 font-mono">Sky Italia / UK</p>
                    </div>
                  </div>
                  <ul className="text-xs text-gray-700 font-mono space-y-1 list-disc list-inside">
                    <li>Built scalable streaming API on AWS</li>
                    <li>Developed EU-Portability authentication service (400ms latency)</li>
                    <li>Led development of social platform using React and GraphQL</li>
                  </ul>
                </div>

                <div className="game-card p-5">
                  <div className="mb-2">
                    <div>
                      <h4 className="font-bold text-sm uppercase">Frontend Developer</h4>
                      <p className="text-xs text-gray-600 font-mono">Conio</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-mono">
                    Frontend development for cryptocurrency wallet application
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section - Arcade Style */}
        <section id="skills" className="mb-16 scroll-mt-20">
          <h3 className="text-2xl font-bold mb-6 text-center uppercase tracking-wider">
            Technical Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Web3 Skills */}
            <div className="game-card p-6">
              <h4 className="font-bold text-sm uppercase mb-4 text-orange-600">Blockchain & Smart Contracts</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="w-20">Solidity</span>
                  <div className="flex-1 h-2 bg-gray-300 border border-gray-800">
                    <div className="h-full bg-orange-500" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="w-20">Rust</span>
                  <div className="flex-1 h-2 bg-gray-300 border border-gray-800">
                    <div className="h-full bg-orange-500" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="w-20">EVM</span>
                  <div className="flex-1 h-2 bg-gray-300 border border-gray-800">
                    <div className="h-full bg-orange-500" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="w-20">DeFi</span>
                  <div className="flex-1 h-2 bg-gray-300 border border-gray-800">
                    <div className="h-full bg-orange-500" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-600 font-mono mt-4">
                Wormhole • Infura • Fireblocks • zkRollup
              </p>
            </div>

            {/* Web2 Frontend/Backend */}
            <div className="game-card p-6">
              <h4 className="font-bold text-sm uppercase mb-4 text-teal-600">Backend & Frontend</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="w-20">TypeScript</span>
                  <div className="flex-1 h-2 bg-gray-300 border border-gray-800">
                    <div className="h-full bg-teal-500" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="w-20">React</span>
                  <div className="flex-1 h-2 bg-gray-300 border border-gray-800">
                    <div className="h-full bg-teal-500" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="w-20">Node.js</span>
                  <div className="flex-1 h-2 bg-gray-300 border border-gray-800">
                    <div className="h-full bg-teal-500" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="w-20">Vue</span>
                  <div className="flex-1 h-2 bg-gray-300 border border-gray-800">
                    <div className="h-full bg-teal-500" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-600 font-mono mt-4">
                Next.js • tRPC • GraphQL • Tailwind
              </p>
            </div>

            {/* DevOps & AI */}
            <div className="game-card p-6">
              <h4 className="font-bold text-sm uppercase mb-4 text-yellow-600">Infrastructure & AI</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="w-20">AWS</span>
                  <div className="flex-1 h-2 bg-gray-300 border border-gray-800">
                    <div className="h-full bg-yellow-500" style={{width: '88%'}}></div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="w-20">Docker</span>
                  <div className="flex-1 h-2 bg-gray-300 border border-gray-800">
                    <div className="h-full bg-yellow-500" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="w-20">Postgres</span>
                  <div className="flex-1 h-2 bg-gray-300 border border-gray-800">
                    <div className="h-full bg-yellow-500" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="w-20">AI/ML</span>
                  <div className="flex-1 h-2 bg-gray-300 border border-gray-800">
                    <div className="h-full bg-yellow-500" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-600 font-mono mt-4">
                Kafka • RabbitMQ • Langchain • RAG
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16 scroll-mt-20">
          <h3 className="text-2xl font-bold mb-6 text-center uppercase tracking-wider">
            Featured Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="game-card p-6">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-bold text-sm uppercase">Emissions Trading System</h4>
                <span className="text-xs font-mono bg-orange-200 px-2 py-1 border-2 border-gray-800">SOLANA</span>
              </div>
              <p className="text-xs text-gray-700 font-mono mb-3">
                Master{"'"}s thesis project: Built an ETS on Solana blockchain using Rust and web3.js
              </p>
              <a
                href="https://amslaurea.unibo.it/id/eprint/29253/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-orange-600 hover:underline"
              >
                → View Thesis
              </a>
            </div>

            <div className="game-card p-6">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-bold text-sm uppercase">Wormhole NFT Bridge</h4>
                <span className="text-xs font-mono bg-teal-200 px-2 py-1 border-2 border-gray-800">BRIDGE</span>
              </div>
              <p className="text-xs text-gray-700 font-mono mb-3">
                Cross-chain NFT bridge implementation using Wormhole protocol
              </p>
              <a
                href="https://github.com/pmpwith2i/wormhole-nft-bridge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-teal-600 hover:underline"
              >
                → View on GitHub
              </a>
            </div>

            <div className="game-card p-6">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-bold text-sm uppercase">Negen AI</h4>
                <span className="text-xs font-mono bg-yellow-200 px-2 py-1 border-2 border-gray-800">AI</span>
              </div>
              <p className="text-xs text-gray-700 font-mono mb-3">
                Modular AI tool for document analysis, chat, and summarization using RAG
              </p>
              <a
                href="https://negenai.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-yellow-600 hover:underline"
              >
                → Visit Website
              </a>
            </div>

            <div className="game-card p-6">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-bold text-sm uppercase">More Projects</h4>
                <span className="text-xs font-mono bg-pink-200 px-2 py-1 border-2 border-gray-800">GITHUB</span>
              </div>
              <p className="text-xs text-gray-700 font-mono mb-3">
                Check out more of my open source work and contributions
              </p>
              <a
                href="https://github.com/pmpwith2i"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-pink-600 hover:underline"
              >
                → View GitHub Profile
              </a>
            </div>
          </div>
        </section>

        {/* Education & Languages */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="game-card p-6">
              <h4 className="font-bold text-sm uppercase mb-4 text-orange-600">Education</h4>
              <div className="space-y-2">
                <div>
                  <p className="font-bold text-sm">Master{"'"}s in Computer Science</p>
                  <p className="text-xs text-gray-600 font-mono">University of Bologna • 2022</p>
                  <p className="text-xs text-gray-700 font-mono mt-1">
                    Thesis: Emissions Trading System on Solana
                  </p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="game-card p-6">
              <h4 className="font-bold text-sm uppercase mb-4 text-teal-600">Languages</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono">🇮🇹 Italian</span>
                  <span className="text-xs font-mono text-gray-600">NATIVE</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono">🇬🇧 English</span>
                  <span className="text-xs font-mono text-gray-600">FLUENT</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 px-6 border-t-3 border-gray-800 game-card">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-6 justify-center mb-4">
            <a href="https://github.com/pmpwith2i" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors underline text-xs font-mono">GITHUB</a>
            <a href="mailto:federico.pomponii@gmail.com" className="hover:text-orange-600 transition-colors underline text-xs font-mono">EMAIL</a>
            <a href="#about" className="hover:text-orange-600 transition-colors underline text-xs font-mono">TOP</a>
          </div>
          <p className="text-xs text-gray-500 font-mono">
            © 2025 Federico Pomponii
          </p>
        </div>
      </footer>
      </div>
    </>
  );
}
