import ContactCta from "@/components/ContactCta";
import { experience, isLocale, languages, software, ui, type Locale } from "@/content/portfolio";
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
      <section className="hero">
        <div className="container">
          <p className="eyebrow">{t.nav.about}</p>
          <h1>Viacheslav Martynovskyi</h1>
          <p className="lead">{t.aboutLead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <div className="prose">
              {t.bio.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>

            <h2 className="section-title" style={{ margin: "72px 0 32px" }}>
              {t.experience}
            </h2>
            <ol className="timeline">
              {experience.map((job) => (
                <li key={job.company}>
                  <p className="eyebrow">{job.period[lang]}</p>
                  <h3>
                    {job.role[lang]}, {job.company}
                  </h3>
                  <p className="card-meta">{job.place[lang]}</p>
                  <ul>
                    {job.points[lang].map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <aside>
            <div className="side-block">
              <h2>{t.skills}</h2>
              <ul className="plain-list">
                {t.skillList.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="side-block">
              <h2>{t.software}</h2>
              <ul className="tags">
                {software.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="side-block">
              <h2>{t.languages}</h2>
              <ul className="plain-list">
                {languages.map((l) => (
                  <li key={l.name.en}>
                    {l.name[lang]} <span>· {l.level[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="side-block">
              <h2>{t.education}</h2>
              <p className="card-text">{t.educationText}</p>
            </div>
          </aside>
        </div>
      </section>

      <ContactCta lang={lang} t={t} />
    </>
  );
}
