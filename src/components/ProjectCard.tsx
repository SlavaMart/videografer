import type { Dictionary, Locale, Project } from "@/content/portfolio";
import VideoEmbed from "./VideoEmbed";

type Props = { project: Project; lang: Locale; t: Dictionary; headingLevel?: 2 | 3 };

export default function ProjectCard({ project, lang, t, headingLevel = 3 }: Props) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <article
      id={project.slug}
      className="work-card group/card transition-[transform,opacity] duration-[550ms] ease-[cubic-bezier(0.33,1,0.68,1)]"
    >
      <VideoEmbed
        youtubeId={project.youtubeId}
        title={project.title}
        playLabel={t.play}
        note={t.consent}
      />
      <Heading className="mt-5 font-display text-2xl italic leading-tight text-ink transition-colors duration-300 group-hover/card:text-accent">
        {project.title}
      </Heading>
      <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted">{project.event[lang]}</p>
      <p className="mt-4 text-sm text-ink/90">
        <span className="mr-2 text-[11px] uppercase tracking-[0.2em] text-accent">{t.role}</span>
        {project.role[lang]}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{project.description[lang]}</p>
    </article>
  );
}
