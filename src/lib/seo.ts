import type { Metadata } from "next";
import { SITE_URL, locales, meta, person, type Locale } from "@/content/portfolio";

type PageKey = keyof (typeof meta)["en"];

const paths: Record<PageKey, string> = {
  home: "",
  work: "/work",
  about: "/about",
  contact: "/contact",
};

// Builds title, description, canonical URL and hreflang links for one page.
export function pageMetadata(lang: Locale, page: PageKey): Metadata {
  const { title, description } = meta[lang][page];
  const path = paths[page];
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `${SITE_URL}/${l}${path}`;
  languages["x-default"] = `${SITE_URL}/en${path}`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/${lang}${path}`, languages },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${lang}${path}`,
      siteName: person.name,
      locale: lang === "is" ? "is_IS" : "en_GB",
      type: "website",
    },
  };
}
