import { FiInstagram } from "react-icons/fi";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import { isLocale, person, ui, type Locale } from "@/content/portfolio";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return pageMetadata(lang as Locale, "contact");
}

const LINK =
  "nav-focus rounded-sm text-ink outline-none transition-colors duration-200 ease-out hover:text-accent focus-visible:text-accent";

// Centered, like the director site's Contact page, plus phone and a clear
// email button.
export default async function Contact({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const t = ui[lang];

  return (
    <section className="flex min-h-svh flex-col items-center justify-center px-6 py-32 text-center sm:px-12">
      <SectionLabel>{t.contactTitle}</SectionLabel>
      <h1 className="mt-4 font-display text-4xl italic text-ink sm:text-5xl">{person.name}</h1>
      <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted">{person.title[lang]}</p>

      <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink/80">{t.contactLead}</p>

      <div className="mt-10">
        <Button href={`mailto:${person.email}`}>
          <span className="text-sm normal-case tracking-[0.04em]">{person.email}</span>
        </Button>
      </div>

      <dl className="mt-12 grid gap-6 text-sm sm:grid-cols-3 sm:gap-12">
        <div>
          <dt className="text-[11px] uppercase tracking-[0.2em] text-muted">{t.phone}</dt>
          <dd className="mt-2">
            <a href={`tel:${person.phoneHref}`} className={LINK}>
              {person.phoneDisplay}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-[11px] uppercase tracking-[0.2em] text-muted">{t.location}</dt>
          <dd className="mt-2 text-ink">{person.city[lang]}</dd>
        </div>
        <div>
          <dt className="text-[11px] uppercase tracking-[0.2em] text-muted">Instagram</dt>
          <dd className="mt-2">
            <a
              href={person.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`${LINK} inline-flex items-center gap-2`}
            >
              <FiInstagram aria-hidden="true" size={16} />
              slavamart_ov
            </a>
          </dd>
        </div>
      </dl>
    </section>
  );
}
