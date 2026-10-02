"use client";

import { useSyncExternalStore } from "react";

const CONSENT_KEY = "pk_consent";
export const CONSENT_EVENT = "pk-consent-change";

export function getStoredConsent(): "granted" | "denied" | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    // Private browsing / blocked storage — treat as no decision yet, banner
    // will just reappear on the next visit rather than crash the page.
    return null;
  }
}

function setConsent(value: "granted" | "denied") {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Ignore — same fallback as getStoredConsent above.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

// localStorage isn't available during SSR, so the consent decision is read
// via useSyncExternalStore rather than a useState+useEffect pair — the
// React-recommended way to subscribe to state that lives outside React.
export function subscribeToConsent(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  return () => window.removeEventListener(CONSENT_EVENT, callback);
}

const getServerConsentSnapshot = () => null;

export default function ConsentBanner() {
  const consent = useSyncExternalStore(
    subscribeToConsent,
    getStoredConsent,
    getServerConsentSnapshot
  );
  const visible = consent === null;

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface/95 px-6 py-4 backdrop-blur sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/70">
          This site uses cookies for analytics and to measure ad performance.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => setConsent("denied")}
            className="border border-white/30 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.25em] text-white/70 transition-colors hover:border-white hover:text-white"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => setConsent("granted")}
            className="border border-white bg-white px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.25em] text-black transition-colors hover:bg-transparent hover:text-white"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
