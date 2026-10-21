import type { Dictionary, Locale, Project } from "@/content/portfolio";
import VideoEmbed from "./VideoEmbed";

type Props = { project: Project; lang: Locale; t: Dictionary; headingLevel?: 2 | 3 };

export default function ProjectCard({ project, lang, t, headingLevel = 3 }: Props) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <article id={project.slug}>
      <VideoEmbed
        youtubeId={project.youtubeId}
        title={project.title}
        playLabel={t.play}
        note={t.consent}
      />
      <Heading className="card-title">{project.title}</Heading>
      <p className="card-meta">{project.event[lang]}</p>
      <p className="card-role">
        <b>{t.role}</b>
        {project.role[lang]}
      </p>
      <p className="card-text">{project.description[lang]}</p>
    </article>
  );
}
