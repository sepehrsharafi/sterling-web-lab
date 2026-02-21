import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Sterling Web Lab | Digital Agency",
    template: `%s | Sterling Web Lab`,
  },
  description:
    "Sterling Web Lab is a digital agency that specializes in web design, development, and branding.",
  openGraph: {
    title: "Sterling Web Lab | Digital Agency",
    description:
      "Sterling Web Lab is a digital agency that specializes in web design, development, and branding.",
    url: site.url,
    siteName: "Sterling Web Lab",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sterling Web Lab | Digital Agency",
    description:
      "Sterling Web Lab is a digital agency that specializes in web design, development, and branding.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <Analytics />
      <body className="font-sans bg-brand-black min-h-screen text-white selection:bg-brand-accent selection:text-white">
        <Navbar />
        <main className="fade-in">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
