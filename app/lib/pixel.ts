// Thin wrapper around window.fbq so callers don't need to know whether the
// Meta Pixel has actually loaded (it won't, until NEXT_PUBLIC_META_PIXEL_ID is
// set and the visitor has granted cookie consent — see MetaPixel.tsx).

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackLead() {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "Lead");
}
