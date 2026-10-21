"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { locales, person, type Locale, type Dictionary } from "@/content/portfolio";

type Props = { lang: Locale; t: Dictionary };

// Same look as the director site's header: fixed, hairline border, name on
// the left, small uppercase links on the right, two-line menu on phones.
const NAV_ITEM =
  "nav-focus rounded-sm outline-none transition-colors duration-200 ease-out hover:text-accent focus-visible:text-accent";

export default function Header({ lang, t }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu after navigating.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape closes the menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const links = [
    { href: `/${lang}/work`, label: t.nav.work },
    { href: `/${lang}/about`, label: t.nav.about },
    { href: `/${lang}/contact`, label: t.nav.contact },
  ];

  // The same page in the other language: /en/work -> /is/work
  const rest = pathname.split("/").slice(2).join("/");
  const pathFor = (l: Locale) => `/${l}${rest ? `/${rest}` : ""}`;

  const langSwitch = (
    <div className="flex items-center gap-1" role="group" aria-label={t.langLabel}>
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && (
            <span aria-hidden="true" className="text-faint">
              /
            </span>
          )}
          <Link
            href={pathFor(l)}
            hrefLang={l}
            lang={l}
            aria-current={l === lang ? "true" : undefined}
            className={`${NAV_ITEM} px-1 py-2 ${l === lang ? "text-accent" : "text-ink/50"}`}
          >
            {l.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4 sm:px-12 lg:px-20">
        <Link
          href={`/${lang}`}
          className={`${NAV_ITEM} shrink-0 text-xs uppercase tracking-[0.15em] text-ink/80`}
        >
          {person.name}
        </Link>

        <nav
          aria-label="Main"
          className="hidden items-center gap-8 text-xs uppercase tracking-[0.15em] text-ink/70 md:flex"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`${NAV_ITEM} ${pathname === link.href ? "text-accent" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
          {langSwitch}
        </nav>

        <button
          type="button"
          className="burger nav-focus -mr-3 flex h-12 w-12 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t.close : t.menu}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="block h-px w-5 bg-ink" />
          <span className="block h-px w-5 bg-ink" />
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Main"
        className={`menu-panel border-b border-line bg-canvas px-6 pb-8 pt-2 md:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible absolute inset-x-0 -translate-y-1 opacity-0"
        }`}
      >
        <ul className="flex flex-col">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`${NAV_ITEM} block py-3 font-display text-2xl italic ${
                  pathname === link.href ? "text-accent" : "text-ink/90"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-xs uppercase tracking-[0.15em]">{langSwitch}</div>
      </nav>
    </header>
  );
}
