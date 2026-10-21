"use client";

import { useState } from "react";

type Props = {
  youtubeId: string;
  title: string;
  playLabel: string;
  note: string;
};

// Shows only a thumbnail until the visitor presses play. The YouTube player
// (heavy, and it sets cookies) loads only after that click. No autoplay on load.
export default function VideoEmbed({ youtubeId, title, playLabel, note }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <div>
      <div className="relative aspect-video w-full overflow-hidden border border-line bg-surface">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`${playLabel}: ${title}`}
            className="nav-focus group/play absolute inset-0 h-full w-full cursor-pointer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
              alt=""
              width={480}
              height={360}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover brightness-[0.7] saturate-[0.85] transition-[transform,filter] duration-[800ms] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover/play:scale-[1.05] group-hover/play:brightness-[0.9] motion-reduce:transition-none"
            />
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ink/50 bg-canvas/40 text-ink transition-colors duration-300 group-hover/play:border-accent group-hover/play:text-accent"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5">
                <path d="M6 3.5v17l15-8.5z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      {!playing && <p className="mt-2 text-[11px] leading-snug text-faint">{note}</p>}
    </div>
  );
}
