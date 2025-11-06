import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#ffffff" }
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fpomponii.it"),
  title: {
    default: "Federico Pomponii | Full Stack Engineer - Web3 & Smart Contracts",
    template: "%s | Federico Pomponii"
  },
  description: "Full Stack Engineer with experience in Web3, DeFi, and smart contract development. From Silicon Valley tech lead to blockchain engineer, building clean architecture for backend systems and smart contracts.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
  },
  keywords: [
    "Federico Pomponii",
    "Full Stack Engineer",
    "Backend Engineer",
    "Solidity Engineer",
    "Smart Contracts Developer",
    "DeFi Developer",
    "Blockchain Developer",
    "Web3 Engineer",
    "EVM Development",
    "TypeScript Developer",
    "Node.js Developer",
    "React Developer",
    "Next.js Developer",
    "Tech Lead",
    "Ethereum Developer",
    "AWS Cloud Engineer",
    "Docker",
    "University of Bologna",
    "Italy Software Engineer",
    "Crypto Engineer"
  ],
  authors: [{ name: "Federico Pomponii", url: "https://fpomponii.it" }],
  creator: "Federico Pomponii",
  publisher: "Federico Pomponii",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fpomponii.it",
    title: "Federico Pomponii | Full Stack Engineer - Web3 & Smart Contracts",
    description: "Full Stack Engineer specializing in Web3, DeFi, and smart contract development. Building clean architecture for backend systems and blockchain applications.",
    siteName: "Federico Pomponii",
    images: [
      {
        url: "/me.JPG",
        width: 1200,
        height: 630,
        alt: "Federico Pomponii - Full Stack Engineer specializing in Web3 and Smart Contracts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Federico Pomponii | Full Stack Engineer - Web3 & Smart Contracts",
    description: "Full Stack Engineer specializing in Web3, DeFi, and smart contract development. Building clean architecture for backend systems and blockchain applications.",
    images: ["/me.JPG"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://fpomponii.it",
  },
  category: "technology",
  classification: "Portfolio Website",
  verification: {
    // Add your verification codes when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  other: {
    "geo.region": "IT",
    "geo.placename": "Italy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
