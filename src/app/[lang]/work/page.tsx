import ContactCta from "@/components/ContactCta";
import ProjectCard from "@/components/ProjectCard";
import { isLocale, projects, ui, type Locale } from "@/content/portfolio";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return pageMetadata(lang as Locale, "work");
}

export default async function Work({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const t = ui[lang];

  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">{t.nav.work}</p>
          <h1>{t.workTitle}</h1>
          <p className="lead">{t.workLead}</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} lang={lang} t={t} headingLevel={2} />
          ))}
        </div>
      </section>
      <ContactCta lang={lang} t={t} />
    </>
  );
}
