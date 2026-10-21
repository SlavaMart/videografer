import { person, type Dictionary, type Locale } from "@/content/portfolio";

export default function Footer({ lang, t }: { lang: Locale; t: Dictionary }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {person.name} · {t.footer}
        </p>
        <p>
          <a href={`mailto:${person.email}`}>{person.email}</a> · {person.city[lang]}
        </p>
      </div>
    </footer>
  );
}
