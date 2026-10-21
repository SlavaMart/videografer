import Button from "./Button";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import type { Dictionary, Locale } from "@/content/portfolio";

export default function ContactCta({ lang, t }: { lang: Locale; t: Dictionary }) {
  return (
    <section className="border-t border-line px-6 py-24 text-center sm:px-12 sm:py-32">
      <Reveal>
        <SectionLabel>{t.nav.contact}</SectionLabel>
        <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl italic leading-tight text-ink sm:text-5xl">
          {t.ctaTitle}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">{t.ctaText}</p>
        <div className="mt-10">
          <Button href={`/${lang}/contact`}>{t.ctaButton}</Button>
        </div>
      </Reveal>
    </section>
  );
}
