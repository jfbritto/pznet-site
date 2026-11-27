"use client";

import { useEffect, useState } from "react";

import { WhatsAppIcon } from "@/components/icons";
import { brand, pznetWa } from "@/lib/pznet";
import { cn } from "@/lib/utils";

/** Appears once the hero (which has its own calls to action) is scrolled past. */
export function PznetFloat() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={pznetWa(`Olá, ${brand.name}! Vim pelo site e quero saber mais.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a PZNET no WhatsApp"
      tabIndex={show ? 0 : -1}
      className={cn(
        "fixed right-5 bottom-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25d366] px-5 py-3.5 font-semibold text-white shadow-xl shadow-[#25d366]/30 transition-all duration-300 hover:brightness-105 sm:right-8 sm:bottom-8",
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <WhatsAppIcon className="size-5" />
      <span className="hidden sm:inline">Fale com a gente</span>
    </a>
  );
}
