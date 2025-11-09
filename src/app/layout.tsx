import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neon Next Generation - Hosting & Development Solutions",
  description: "Australian-based company specializing in software development, hosting, game development, VPN solutions, and merchandise. Empowering businesses with high-performance solutions.",
  keywords: ["hosting", "software development", "game development", "VPN", "merchandise", "Australian tech company", "cloud solutions"],
  authors: [{ name: "Neon Next Generation" }],
  creator: "Neon Next Generation",
  publisher: "Neon Next Generation",
  robots: "index, follow",
  openGraph: {
    title: "Neon Next Generation - Hosting & Development Solutions",
    description: "Australian-based company specializing in software development, hosting, game development, VPN solutions, and merchandise.",
    url: "https://neonnextgeneration.com",
    siteName: "Neon Next Generation",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neon Next Generation - Hosting & Development Solutions",
    description: "Australian-based company specializing in software development, hosting, game development, VPN solutions, and merchandise.",
    creator: "@neonnextgen",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  icons: {
    icon: "/favico.png",
    shortcut: "/favico.png",
    apple: "/favico.png",
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
         <Navbar />
       <div className="flex-grow">
       {children}
       </div>
       <Footer />
      </body>
    </html>
  );
}
