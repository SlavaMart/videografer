import { person, type Dictionary, type Locale } from "@/content/portfolio";

export default function Footer({ lang, t }: { lang: Locale; t: Dictionary }) {
  return (
    <footer className="border-t border-line px-6 py-10 text-xs uppercase tracking-[0.15em] text-faint sm:px-12 lg:px-20">
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {person.name} · {t.footer}
        </p>
        <p>
          <a
            href={`mailto:${person.email}`}
            className="nav-focus rounded-sm normal-case tracking-normal text-muted transition-colors hover:text-accent"
          >
            {person.email}
          </a>{" "}
          · {person.city[lang]}
        </p>
      </div>
    </footer>
  );
}
