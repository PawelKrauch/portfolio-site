"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { scrollToSection } from "./Nav";

// Persistent "Start a project" button that follows the visitor once they've
// scrolled past the first screen, and steps aside while the contact form
// itself is on screen (no point pointing at what they're already looking at).
export default function FloatingCta() {
  const [pastFold, setPastFold] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastFold(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const contact = document.getElementById("contact");
    const observer = contact
      ? new IntersectionObserver(([entry]) => setContactVisible(entry.isIntersecting), {
          threshold: 0.15,
        })
      : null;
    if (contact) observer?.observe(contact);

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  const visible = pastFold && !contactVisible;

  return (
    <Link
      href="/#contact"
      onClick={(e) => scrollToSection(e, "contact")}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed right-5 bottom-5 z-40 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-black/50 transition-all duration-300 hover:scale-105 sm:right-8 sm:bottom-8 sm:px-7 [body:has([data-consent-banner])_&]:bottom-36 sm:[body:has([data-consent-banner])_&]:bottom-28 sm:py-4 sm:text-base ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      Start a project →
    </Link>
  );
}
