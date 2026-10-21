import type { MetadataRoute } from "next";
import { SITE_URL, locales } from "@/content/portfolio";

const pages = ["", "/work", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((path) =>
    locales.map((lang) => ({
      url: `${SITE_URL}/${lang}${path}`,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${path}`])),
      },
    })),
  );
}
