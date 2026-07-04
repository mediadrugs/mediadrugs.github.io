import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import type { Metadata } from "next";
import { Exo_2, Orbitron, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-share-tech-mono",
  display: "swap",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mediadrugs — Digital Marketing Agency",
  description:
    "Mediadrugs is an innovative advertising and social media agency. We blend creativity, technology, and data-driven strategies to craft impactful campaigns.",
  keywords: [
    "digital marketing",
    "advertising",
    "social media",
    "branding",
    "Estonia",
  ],
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    other: [
      { rel: "manifest", url: "/favicon/site.webmanifest" },
      {
        rel: "mask-icon",
        url: "/favicon/safari-pinned-tab.svg",
        color: "#00ffff",
      },
    ],
  },
  openGraph: {
    title: "Mediadrugs — Digital Marketing Agency",
    description: "Innovative advertising for modern businesses.",
    url: "https://mediadrugs.com",
    siteName: "Mediadrugs",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${shareTechMono.variable} ${exo2.variable}`}
    >
      <body className="font-body bg-cyber-black text-gray-200 antialiased">
        {/* CRT scan-lines overlay */}
        <div className="scan-lines" aria-hidden="true" />

        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
