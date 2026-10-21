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
      <div className="video">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="video-play"
            onClick={() => setPlaying(true)}
            aria-label={`${playLabel}: ${title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
              alt=""
              width={480}
              height={360}
              loading="lazy"
              decoding="async"
            />
            <span className="play-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 4.5v15l13-7.5z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      {!playing && <p className="video-note">{note}</p>}
    </div>
  );
}
