import Link from "next/link";
import type { Dictionary, Locale } from "@/content/portfolio";

export default function ContactCta({ lang, t }: { lang: Locale; t: Dictionary }) {
  return (
    <section className="section cta">
      <div className="container">
        <p className="eyebrow">{t.nav.contact}</p>
        <h2>{t.ctaTitle}</h2>
        <p>{t.ctaText}</p>
        <Link href={`/${lang}/contact`} className="btn btn-primary">
          {t.ctaButton}
        </Link>
      </div>
    </section>
  );
}
