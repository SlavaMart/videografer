import { isLocale, person, ui, type Locale } from "@/content/portfolio";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return pageMetadata(lang as Locale, "contact");
}

export default async function Contact({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const t = ui[lang];

  return (
    <section className="hero">
      <div className="container">
        <p className="eyebrow">{t.nav.contact}</p>
        <h1>{t.contactTitle}</h1>
        <p className="lead">{t.contactLead}</p>

        <div className="contact-list">
          <a className="contact-item" href={`mailto:${person.email}`}>
            <span className="label">{t.email}</span>
            <span className="value">{person.email}</span>
          </a>
          <a className="contact-item" href={`tel:${person.phoneHref}`}>
            <span className="label">{t.phone}</span>
            <span className="value">{person.phoneDisplay}</span>
          </a>
          <div className="contact-item">
            <span className="label">{t.location}</span>
            <span className="value">{person.city[lang]}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
