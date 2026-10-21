import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Newsreader, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, isLocale, locales, person, ui } from "@/content/portfolio";
import "../globals.css";

// Same fonts as the director site.
const newsreader = Newsreader({
  subsets: ["latin", "latin-ext"],
  variable: "--font-newsreader",
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export const viewport: Viewport = {
  themeColor: "#0b0b0a",
};

// Pre-build both language versions: /en and /is
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = ui[lang];

  // Structured data so search engines understand who the site is about.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.title[lang],
    email: `mailto:${person.email}`,
    telephone: person.phoneHref,
    address: { "@type": "PostalAddress", addressLocality: "Reykjavík", addressCountry: "IS" },
    url: `${SITE_URL}/${lang}`,
    image: `${SITE_URL}${person.portrait}`,
    sameAs: [person.instagram, person.directorSite],
  };

  return (
    <html lang={lang} className={`${newsreader.variable} ${inter.variable}`}>
      <body className="bg-canvas font-sans text-ink antialiased">
        <a
          href="#main"
          className="fixed left-3 top-3 z-50 -translate-y-20 bg-accent px-4 py-2 text-sm text-canvas focus:translate-y-0"
        >
          {t.skip}
        </a>
        <Header lang={lang} t={t} />
        <main id="main">{children}</main>
        <Footer lang={lang} t={t} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
