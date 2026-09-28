import type { Metadata } from "next";
import "./globals.css";
import { company } from "../lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: "التيسير للسياحة بطهطا",
  description: "سياحة خارجية وحج وعمرة وحجوزات فنادق وتذاكر طيران وتأشيرات من التيسير للسياحة بطهطا في سوهاج.",
  keywords: ["التيسير للسياحة", "السياحة في طهطا", "حج وعمرة", "تذاكر طيران", "حجز فنادق", "تأشيرات"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "التيسير للسياحة بطهطا",
    description: "حج وعمرة، تذاكر طيران، حجوزات فنادق وتأشيرات من طهطا.",
    url: company.siteUrl,
    siteName: "التيسير للسياحة بطهطا",
    locale: "ar_EG",
    type: "website",
    images: [{ url: "/hero-slider-flight.png", width: 1536, height: 864, alt: "التيسير للسياحة بطهطا" }],
  },
  twitter: { card: "summary_large_image", title: "التيسير للسياحة بطهطا", description: "خدمات السفر والحج والعمرة من طهطا.", images: ["/hero-slider-flight.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: company.name,
  url: company.siteUrl,
  telephone: "+201147714364",
  address: { "@type": "PostalAddress", addressLocality: "طهطا", addressRegion: "سوهاج", addressCountry: "EG" },
  sameAs: [company.facebookUrl],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body>
    </html>
  );
}
