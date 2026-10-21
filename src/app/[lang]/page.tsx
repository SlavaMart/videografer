import Button from "@/components/Button";
import ContactCta from "@/components/ContactCta";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import ScrollCue from "@/components/ScrollCue";
import SectionLabel from "@/components/SectionLabel";
import VideoEmbed from "@/components/VideoEmbed";
import { isLocale, person, projects, ui, type Locale } from "@/content/portfolio";
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
      {/* First screen: typography-led, like the director site. */}
      <section className="relative flex min-h-svh flex-col items-center justify-center px-6 pb-28 pt-24 text-center sm:px-12">
        <p className="text-xs uppercase tracking-[0.25em] text-muted">{person.title[lang]}</p>
        <h1 className="mt-6 font-display text-5xl italic leading-[0.95] text-ink sm:text-7xl lg:text-8xl">
          {person.name}
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {t.hero.title}
        </p>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Button href="#showreel">{t.hero.primary}</Button>
          <Button href={`/${lang}/contact`} variant="ghost">
            {t.hero.secondary}
          </Button>
        </div>
        <ScrollCue href="#showreel" label={t.scrollCue} />
      </section>

      {showreel && (
        <section id="showreel" className="px-6 pb-24 pt-10 sm:px-12 lg:px-20">
          <Reveal className="mx-auto max-w-5xl">
            <SectionLabel as="h2" className="mb-10 text-center sm:mb-14">
              {t.showreel}
            </SectionLabel>
            <VideoEmbed
              youtubeId={showreel.youtubeId}
              title={showreel.title}
              playLabel={t.play}
              note={t.consent}
            />
            <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-ink/80">
              {t.hero.lead}
            </p>
          </Reveal>
        </section>
      )}

      <section id="work" className="border-t border-line px-6 py-24 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <SectionLabel as="h2" className="mb-12 text-center sm:mb-16">
            {t.selected}
          </SectionLabel>
          <div className="work-grid grid gap-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {live.map((p, i) => (
              <Reveal key={p.slug} delay={i * 120}>
                <ProjectCard project={p} lang={lang} t={t} />
              </Reveal>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button href={`/${lang}/work`} variant="ghost">
              {t.allWork}
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-line px-6 py-24 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <SectionLabel as="h2" className="mb-12 text-center sm:mb-16">
            {t.whatIDo}
          </SectionLabel>
          <div className="grid gap-px border border-line bg-line md:grid-cols-3">
            {t.services.map((s, i) => (
              <div key={s.title} className="bg-canvas p-8 lg:p-10">
                <Reveal delay={i * 120}>
                  <h3 className="font-display text-2xl italic text-ink">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.text}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta lang={lang} t={t} />
    </>
  );
}
