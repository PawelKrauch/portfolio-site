"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";
import { getStoredConsent, subscribeToConsent } from "./ConsentBanner";

const getConsentedSnapshot = () => getStoredConsent() === "granted";
const getServerConsentedSnapshot = () => false;

// Renders nothing — and loads nothing — until both NEXT_PUBLIC_META_PIXEL_ID
// is set and the visitor has granted cookie consent. Safe to ship ahead of
// having a real Pixel ID: it stays fully inert until that env var exists.
export default function MetaPixel() {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const consented = useSyncExternalStore(
    subscribeToConsent,
    getConsentedSnapshot,
    getServerConsentedSnapshot
  );

  if (!pixelId || !consented) return null;

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
        document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${pixelId}');
        fbq('track', 'PageView');
      `}
    </Script>
  );
}
