"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { locales, type Locale, type Dictionary } from "@/content/portfolio";

type Props = { lang: Locale; t: Dictionary };

export default function Header({ lang, t }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu after navigating.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close the menu with the Escape key and lock page scroll while it is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: `/${lang}`, label: t.nav.home },
    { href: `/${lang}/work`, label: t.nav.work },
    { href: `/${lang}/about`, label: t.nav.about },
    { href: `/${lang}/contact`, label: t.nav.contact },
  ];

  // The same page in the other language: /en/work -> /is/work
  const rest = pathname.split("/").slice(2).join("/");
  const pathFor = (l: Locale) => `/${l}${rest ? `/${rest}` : ""}`;

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href={`/${lang}`} className="brand">
          V. Martynovskyi<span>.</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? t.close : t.menu}
        </button>

        <nav id="site-nav" className="nav" data-open={open} aria-label="Main">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="nav-link"
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="lang-switch" role="group" aria-label={t.langLabel}>
            {locales.map((l) => (
              <Link
                key={l}
                href={pathFor(l)}
                hrefLang={l}
                lang={l}
                aria-current={l === lang ? "true" : undefined}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
