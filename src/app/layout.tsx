import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Federico Pomponii | Backend & Solidity Engineer",
  description: "Backend & Solidity Engineer with experience in Web3, DeFi, and smart contract development. From Silicon Valley tech lead to blockchain engineer, building clean architecture for backend systems and smart contracts.",
  keywords: [
    "Federico Pomponii",
    "Backend Engineer",
    "Solidity Engineer",
    "Smart Contracts",
    "DeFi Developer",
    "Blockchain Developer",
    "Web3 Engineer",
    "EVM Development",
    "TypeScript Developer",
    "Node.js Developer",
    "React Developer",
    "Tech Lead",
    "Full Stack Developer",
    "Ethereum Developer"
  ],
  authors: [{ name: "Federico Pomponii" }],
  creator: "Federico Pomponii",
  publisher: "Federico Pomponii",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fpomponii.it",
    title: "Federico Pomponii | Backend & Solidity Engineer",
    description: "Backend & Solidity Engineer specializing in Web3, DeFi, and smart contract development.",
    siteName: "Federico Pomponii Portfolio",
    images: [
      {
        url: "/me.JPG",
        width: 1200,
        height: 630,
        alt: "Federico Pomponii",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Federico Pomponii | Backend & Solidity Engineer",
    description: "Backend & Solidity Engineer specializing in Web3, DeFi, and smart contract development.",
    images: ["/me.JPG"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://fpomponii.it",
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
