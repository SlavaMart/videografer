import ContactCta from "@/components/ContactCta";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
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
      <section className="px-6 pb-16 pt-36 text-center sm:px-12 sm:pt-44">
        <SectionLabel>{t.nav.work}</SectionLabel>
        <h1 className="mt-4 font-display text-4xl italic text-ink sm:text-6xl">{t.workTitle}</h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted">{t.workLead}</p>
      </section>
      <section className="px-6 pb-28 sm:px-12 lg:px-20">
        <div className="work-grid mx-auto grid max-w-6xl gap-14 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 120}>
              <ProjectCard project={p} lang={lang} t={t} headingLevel={2} />
            </Reveal>
          ))}
        </div>
      </section>
      <ContactCta lang={lang} t={t} />
    </>
  );
}
