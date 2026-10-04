"use client";

import Link from "next/link";
import LocalClock from "./LocalClock";

// Some in-app browsers (Instagram, TikTok, Facebook) don't reliably honor
// native #hash anchor scrolling on same-page navigations, so we scroll
// manually instead of depending on default browser/WebView behavior.
export function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  if (window.location.pathname !== "/") return;
  const target = document.getElementById(id);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth" });
  window.history.pushState(null, "", `/#${id}`);
}

const links = [
  { id: "featured", label: "Work" },
  { id: "about", label: "Info" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 grid grid-cols-[1fr_auto] items-center border-b border-border bg-background/70 px-6 py-5 backdrop-blur sm:grid-cols-3 sm:px-10">
      <Link href="/" className="font-serif text-xl leading-none">
        Paweł Krauch
      </Link>
      <LocalClock className="hidden justify-self-center font-mono text-xs text-white/50 sm:block" />
      <nav className="flex items-center justify-self-end gap-3 font-mono text-xs uppercase text-white/60 sm:gap-5">
        {links.map(({ id, label }) => (
          <Link
            key={id}
            href={`/#${id}`}
            onClick={(e) => scrollToSection(e, id)}
            className={`transition-colors hover:text-white ${id === "contact" ? "text-white" : ""}`}
          >
            [{label}]
          </Link>
        ))}
      </nav>
    </header>
  );
}
