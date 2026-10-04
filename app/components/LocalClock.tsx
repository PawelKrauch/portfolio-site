"use client";

import { useSyncExternalStore } from "react";

// Live Warsaw time for the header ("14:32 (WARSAW)") — a quiet signal that a
// real person is on the other end, wherever the visitor is.
const format = () =>
  new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Warsaw",
  }).format(new Date());

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 15_000);
  return () => window.clearInterval(id);
}

export default function LocalClock({ className }: { className?: string }) {
  // Server render has no reliable clock for the visitor, so it renders empty
  // and fills in on the client.
  const time = useSyncExternalStore(subscribe, format, () => "");
  return <span className={className}>{time && `${time} (WARSAW)`}</span>;
}
