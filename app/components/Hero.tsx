"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const BASE = "https://kbikrdsbxqgu2gwf.public.blob.vercel-storage.com";
const LOOP_URL = `${BASE}/krauch-showreel-2025-loop.mp4`;
const FULL_URL = `${BASE}/krauch-showreel-2025.mp4`;
const POSTER_URL = `${BASE}/krauch-showreel-poster.jpg`;

// The reel opens on a baked-in "SHOWREEL / KRAUCH MEDIA 2025" title card
// (~0–5s). We let that play first, then fade in the headline once it's done so
// the two never overlap. After the first pass the loop restarts *after* the
// title card so it never replays behind the headline. The click-to-play modal
// plays the whole reel (title card + sound) from the start.
const INTRO_END = 5;

export default function Hero() {
  const bgRef = useRef<HTMLVideoElement>(null);
  const [open, setOpen] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const video = bgRef.current;
    if (!video) return;

    // Reveal the headline once the title card has finished playing.
    const onTime = () => {
      if (video.currentTime >= INTRO_END) setRevealed(true);
    };
    // On loop, restart after the title card so it doesn't replay behind text.
    const loopAfterIntro = () => {
      video.currentTime = INTRO_END;
      void video.play();
    };

    video.addEventListener("timeupdate", onTime);
    video.addEventListener("ended", loopAfterIntro);
    // Fallback in case timeupdate is throttled before reaching INTRO_END.
    const fallback = window.setTimeout(() => setRevealed(true), INTRO_END * 1000 + 500);

    // Mobile autoplay hardening. The markup is already muted + playsInline, but
    // some phones (notably iOS Low Power Mode / data-saver) block even muted
    // autoplay, leaving the reel frozen on its poster. Force the properties on,
    // attempt playback, and — if it was blocked — start the reel on the first
    // user interaction so it never stays a still frame.
    video.muted = true;
    video.playsInline = true;
    const tryPlay = () => void video.play().catch(() => {});
    tryPlay();
    const onFirstInteract = () => tryPlay();
    const gestureOpts = { once: true, passive: true } as const;
    window.addEventListener("touchstart", onFirstInteract, gestureOpts);
    window.addEventListener("pointerdown", onFirstInteract, gestureOpts);

    return () => {
      video.removeEventListener("timeupdate", onTime);
      video.removeEventListener("ended", loopAfterIntro);
      window.clearTimeout(fallback);
      window.removeEventListener("touchstart", onFirstInteract);
      window.removeEventListener("pointerdown", onFirstInteract);
    };
  }, []);

  // Pause the background while the full reel modal is open; close on Escape.
  useEffect(() => {
    const bg = bgRef.current;
    if (open) {
      bg?.pause();
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }
    void bg?.play();
  }, [open]);

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
      <video
        ref={bgRef}
        src={LOOP_URL}
        poster={POSTER_URL}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        preload="metadata"
      />
      {/* Darkening layer for headline legibility over the footage */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

      <div
        className={`relative z-10 flex max-w-3xl flex-col items-center gap-5 px-6 text-center transition-all duration-1000 ease-out ${
          revealed
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/60">
          Filmmaker &amp; Director
        </p>
        <h1 className="text-balance text-5xl font-medium drop-shadow-lg sm:text-7xl">
          Paweł Krauch
        </h1>
        <p className="max-w-md text-balance text-base text-white/80 drop-shadow sm:text-lg">
          Cinematic brand films, delivered lean.
        </p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Play showreel with sound"
          className="mt-2 flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-accent"
        >
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M0 1.3v13.4a1 1 0 0 0 1.5.87l11.2-6.7a1 1 0 0 0 0-1.74L1.5.43A1 1 0 0 0 0 1.3Z" />
          </svg>
          Watch Showreel (2025)
        </button>
      </div>

      <Link
        href="#work"
        className={`absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-widest text-white/50 transition-opacity duration-1000 hover:text-white ${
          revealed ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        Selected Work
        <span aria-hidden="true">↓</span>
      </Link>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            aria-label="Close showreel"
            className="absolute top-5 right-5 text-sm text-white/60 hover:text-white"
          >
            Close ✕
          </button>
          <video
            src={FULL_URL}
            poster={POSTER_URL}
            className="max-h-full w-full max-w-6xl rounded-lg"
            controls
            autoPlay
            playsInline
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
