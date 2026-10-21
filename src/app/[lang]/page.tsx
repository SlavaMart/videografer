import Link from "next/link";
import ContactCta from "@/components/ContactCta";
import ProjectCard from "@/components/ProjectCard";
import VideoEmbed from "@/components/VideoEmbed";
import { isLocale, projects, ui, type Locale } from "@/content/portfolio";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return pageMetadata(lang as Locale, "home");
}

export default async function Home({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const t = ui[lang];
  const showreel = projects.find((p) => p.kind === "showreel");
  const live = projects.filter((p) => p.kind === "live");

  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p className="lead">{t.hero.lead}</p>
          <div className="actions">
            <Link href={`/${lang}/work#showreel`} className="btn btn-primary">
              {t.hero.primary}
            </Link>
            <Link href={`/${lang}/contact`} className="btn btn-ghost">
              {t.hero.secondary}
            </Link>
          </div>
        </div>
      </section>

      {showreel && (
        <section className="section" aria-labelledby="showreel-title">
          <div className="container">
            <div className="section-head">
              <h2 id="showreel-title" className="section-title">
                {showreel.title}
              </h2>
            </div>
            <VideoEmbed
              youtubeId={showreel.youtubeId}
              title={showreel.title}
              playLabel={t.play}
              note={t.consent}
            />
          </div>
        </section>
      )}

      <section className="section" aria-labelledby="live-title">
        <div className="container">
          <div className="section-head">
            <h2 id="live-title" className="section-title">
              {t.selected}
            </h2>
            <Link href={`/${lang}/work`} className="text-link">
              {t.allWork} →
            </Link>
          </div>
          <div className="grid">
            {live.map((p) => (
              <ProjectCard key={p.slug} project={p} lang={lang} t={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="services-title">
        <div className="container">
          <div className="section-head">
            <h2 id="services-title" className="section-title">
              {t.whatIDo}
            </h2>
          </div>
          <div className="services">
            {t.services.map((s) => (
              <div key={s.title} className="service">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta lang={lang} t={t} />
    </>
  );
}
