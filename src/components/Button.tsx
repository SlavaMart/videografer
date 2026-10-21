import Link from "next/link";
import type { ReactNode } from "react";

type Props = { href: string; children: ReactNode; variant?: "primary" | "ghost" };

const BASE =
  "nav-focus inline-flex min-h-12 items-center justify-center rounded-sm border px-7 text-xs uppercase tracking-[0.2em] outline-none transition-colors duration-300 ease-out";

const VARIANTS = {
  primary: "border-accent text-accent hover:bg-accent hover:text-canvas focus-visible:bg-accent focus-visible:text-canvas",
  ghost: "border-line-strong text-ink/80 hover:border-accent hover:text-accent focus-visible:text-accent",
};

export default function Button({ href, children, variant = "primary" }: Props) {
  const className = `${BASE} ${VARIANTS[variant]}`;
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
