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
      <Link href="/" className="font-serif text-xl leading-none">
        Paweł Krauch
      </Link>
      <nav className="flex items-center gap-5 text-[11px] font-medium uppercase tracking-[0.25em] text-white/60 sm:gap-8">
        <Link
          href="/#featured"
          onClick={(e) => scrollToSection(e, "featured")}
          className="transition-colors hover:text-white"
        >
          Work
        </Link>
        <Link
          href="/#about"
          onClick={(e) => scrollToSection(e, "about")}
          className="transition-colors hover:text-white"
        >
          Info
        </Link>
        <Link
          href="/#contact"
          onClick={(e) => scrollToSection(e, "contact")}
          className="text-white underline decoration-white/40 underline-offset-[6px] transition-colors hover:decoration-white"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
