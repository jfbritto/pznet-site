"use client";

import { useState, useSyncExternalStore } from "react";

// Same key as the previous pznet.com.br, so returning visitors who already
// dismissed the notice there don't see it again.
const STORAGE_KEY = "cookiesAccepted";

function alreadyAccepted(): boolean {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

// Storage is only read, never watched: the notice hides itself on accept.
const subscribe = () => () => {};

/**
 * Analytics cookie notice, shown until the visitor taps "Entendi". Hidden in
 * the static HTML (server snapshot) and revealed on the client if needed.
 */
export function CookieNotice() {
  const accepted = useSyncExternalStore(subscribe, alreadyAccepted, () => true);
  const [dismissed, setDismissed] = useState(false);

  if (accepted || dismissed) return null;

  const accept = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Storage blocked: just hide it for this visit.
    }
    setDismissed(true);
  };

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed inset-x-4 bottom-4 z-50 flex flex-col gap-3 rounded-2xl bg-white p-5 text-sm text-slate-700 shadow-2xl ring-1 ring-slate-200 sm:right-auto sm:left-6 sm:max-w-sm sm:flex-row sm:items-center"
    >
      <p className="text-pretty">
        Utilizamos cookies para melhorar sua experiência e analisar os acessos
        ao site.
      </p>
      <button
        type="button"
        onClick={accept}
        className="shrink-0 rounded-full bg-[#054c77] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-[#043e62] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0077bd]"
      >
        Entendi
      </button>
    </div>
  );
}
