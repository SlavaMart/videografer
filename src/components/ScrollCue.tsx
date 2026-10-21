"use client";

import { useEffect, useState } from "react";

// The hero's scroll cue (same as on the director site): a small chevron over a
// label. It fades out as soon as the page starts scrolling.
export default function ScrollCue({ href, label }: { href: string; label: string }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`absolute inset-x-0 bottom-8 flex justify-center transition-opacity duration-300 ease-out sm:bottom-12 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <a
        href={href}
        tabIndex={visible ? 0 : -1}
        className="nav-focus flex flex-col items-center gap-4 rounded-sm px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted outline-none transition-colors duration-200 ease-out hover:text-accent focus-visible:text-accent"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 12"
          className="scroll-cue-chevron h-3 w-6 fill-none stroke-current"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 2l10 8 10-8" />
        </svg>
        {label}
      </a>
    </div>
  );
}
