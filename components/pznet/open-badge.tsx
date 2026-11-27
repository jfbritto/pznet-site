"use client";

import { useEffect, useState } from "react";

import { openingWindows } from "@/lib/pznet";
import { cn } from "@/lib/utils";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/** Weekday (0 = Sunday) and decimal hour right now in São Paulo. */
function nowInSaoPaulo(): { day: number; hour: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  return {
    day: weekdays.indexOf(get("weekday")),
    hour: Number(get("hour")) + Number(get("minute")) / 60,
  };
}

/**
 * "Aberto agora" / "Fechado agora", computed on the client only (the server
 * render would freeze the time at build), so it appears after hydration.
 */
export function OpenBadge() {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const update = () => {
      const { day, hour } = nowInSaoPaulo();
      const w = openingWindows[day];
      setOpen(Boolean(w && hour >= w[0] && hour < w[1]));
    };
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  if (open === null) return null;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold",
        open ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600",
      )}
    >
      <span
        className={cn(
          "size-2 rounded-full",
          open ? "bg-emerald-500" : "bg-slate-400",
        )}
      />
      {open ? "Aberto agora" : "Fechado agora"}
    </span>
  );
}
