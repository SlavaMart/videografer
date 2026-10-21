import Image from "next/image";
import ContactCta from "@/components/ContactCta";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import {
  experience,
  isLocale,
  languages,
  person,
  software,
  ui,
  type Locale,
} from "@/content/portfolio";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return pageMetadata(lang as Locale, "about");
}

export default async function About({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const t = ui[lang];

  return (
    <>
      {/* Portrait + bio, laid out like the director site's About page. */}
      <section className="px-6 pb-20 pt-32 sm:px-12 sm:pt-40 lg:px-20">
        <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-[minmax(0,280px)_1fr] sm:gap-16">
          <div className="relative aspect-[3/4] w-full max-w-xs overflow-hidden border border-line bg-surface sm:sticky sm:top-28 sm:max-w-none sm:self-start">
            <Image
              src={person.portrait}
              alt={person.name}
              fill
              priority
              sizes="(min-width: 640px) 280px, 80vw"
              className="object-cover"
            />
          </div>

          <div>
            <SectionLabel>{t.nav.about}</SectionLabel>
            <h1 className="mt-3 font-display text-3xl italic text-ink sm:text-4xl">{person.name}</h1>
            <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted">{person.title[lang]}</p>

            <div className="mt-8 flex max-w-xl flex-col gap-4 text-base leading-relaxed text-ink/90">
              {t.bio.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>

            <h2 className="mt-16 text-xs font-normal uppercase tracking-[0.25em] text-muted">
              {t.experience}
            </h2>
            <ol className="mt-8 flex flex-col gap-12">
              {experience.map((job) => (
                <li key={job.company}>
                  <Reveal>
                    <p className="text-xs uppercase tracking-[0.15em] text-accent">{job.period[lang]}</p>
                    <h3 className="mt-2 font-display text-2xl italic text-ink">
                      {job.role[lang]}, {job.company}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted">{job.place[lang]}</p>
                    <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-ink/80">
                      {job.points[lang].map((pt) => (
                        <li key={pt} className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-accent">
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </li>
              ))}
            </ol>

            <div className="mt-16 grid gap-12 border-t border-line pt-12 sm:grid-cols-2">
              <div>
                <h2 className="text-xs font-normal uppercase tracking-[0.25em] text-muted">{t.skills}</h2>
                <ul className="mt-5 flex flex-col gap-2 text-sm text-ink/85">
                  {t.skillList.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xs font-normal uppercase tracking-[0.25em] text-muted">{t.languages}</h2>
                <ul className="mt-5 flex flex-col gap-2 text-sm text-ink/85">
                  {languages.map((l) => (
                    <li key={l.name.en}>
                      {l.name[lang]} <span className="text-muted">· {l.level[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xs font-normal uppercase tracking-[0.25em] text-muted">{t.software}</h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {software.map((s) => (
                    <li key={s} className="border border-line px-3 py-1 text-xs text-ink/80">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xs font-normal uppercase tracking-[0.25em] text-muted">{t.education}</h2>
                <p className="mt-5 text-sm leading-relaxed text-ink/85">{t.educationText}</p>
                <a
                  href={person.directorSite}
                  className="nav-focus mt-8 inline-block rounded-sm text-xs uppercase tracking-[0.2em] text-accent transition-colors hover:text-ink"
                >
                  {t.directorSite} →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCta lang={lang} t={t} />
    </>
  );
}
