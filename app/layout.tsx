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
  const navigationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SiteNavigationElement",
        name: "Home",
        url: site.url,
      },
      {
        "@type": "SiteNavigationElement",
        name: "About",
        url: `${site.url}/about`,
      },
      {
        "@type": "SiteNavigationElement",
        name: "Services",
        url: `${site.url}/services`,
      },
      {
        "@type": "SiteNavigationElement",
        name: "Agency",
        url: `${site.url}/agency`,
      },
      {
        "@type": "SiteNavigationElement",
        name: "Blog",
        url: `${site.url}/blog`,
      },
      {
        "@type": "SiteNavigationElement",
        name: "Contact",
        url: `${site.url}/contact`,
      },
      {
        "@type": "SiteNavigationElement",
        name: "Sitemap",
        url: `${site.url}/sitemap`,
      },
    ],
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationSchema) }}
        />
      </head>
      <Analytics />
      <body className="font-sans bg-brand-black min-h-screen text-white selection:bg-brand-accent selection:text-white">
        <Navbar />
        <main className="fade-in">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
