"use client";

import Link from "next/link";

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

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-border bg-background/70 px-6 py-5 backdrop-blur sm:px-10">
      <Link href="/" className="text-sm">
        Paweł Krauch
      </Link>
      <nav className="flex items-center gap-4 text-sm text-white/70 sm:gap-5">
        <Link
          href="/#featured"
          onClick={(e) => scrollToSection(e, "featured")}
          className="transition-colors hover:text-accent"
        >
          Work
        </Link>
        <Link
          href="/#about"
          onClick={(e) => scrollToSection(e, "about")}
          className="transition-colors hover:text-accent"
        >
          Info
        </Link>
        <Link
          href="/#contact"
          onClick={(e) => scrollToSection(e, "contact")}
          className="whitespace-nowrap rounded-full bg-accent px-3.5 py-1.5 font-medium text-white transition-opacity hover:opacity-90 sm:px-4 sm:py-2"
        >
          Start a project
        </Link>
      </nav>
    </header>
  );
}
