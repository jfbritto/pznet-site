"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { brand, nav, telHref } from "@/lib/pznet";
import { cn } from "@/lib/utils";

/**
 * Transparent over the dark hero, white once the page scrolls. The customer
 * shortcuts (2ª via, Central) stay one tap away on every screen size.
 */
export function PznetNav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = solid || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        light
          ? "border-b border-slate-200/80 bg-white/90 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <a
          href="#top"
          aria-label={`${brand.name}, início`}
          className="shrink-0"
        >
          <Image
            src={brand.logo}
            alt={brand.name}
            width={2350}
            height={395}
            priority
            className={cn(
              "h-6 w-auto transition-[filter] duration-300 sm:h-7",
              !light && "brightness-0 invert",
            )}
          />
        </a>

        <nav aria-label="Seções" className="hidden items-center gap-7 md:flex">
          {nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm font-medium transition-colors",
                light
                  ? "text-slate-600 hover:text-[#054c77]"
                  : "text-white/75 hover:text-white",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={brand.secondCopyUrl}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              light
                ? "text-[#054c77] hover:bg-sky-50"
                : "text-white hover:bg-white/10",
            )}
          >
            2ª via
          </a>
          <a
            href={brand.customerAreaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              light
                ? "bg-[#054c77] text-white hover:bg-[#043e62]"
                : "bg-white text-[#054c77] hover:bg-sky-50",
            )}
          >
            Central do Assinante
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="pznet-mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className={cn(
            "inline-flex size-10 items-center justify-center rounded-full md:hidden",
            light ? "text-slate-800" : "text-white",
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div
          id="pznet-mobile-menu"
          className="border-t border-slate-200 bg-white px-5 pt-3 pb-6 md:hidden"
        >
          <nav aria-label="Seções" className="flex flex-col">
            {nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-slate-100 py-3.5 text-base font-medium text-slate-800"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <a
              href={brand.secondCopyUrl}
              className="rounded-xl bg-sky-50 px-4 py-3 text-center text-sm font-semibold text-[#054c77]"
            >
              2ª via da fatura
            </a>
            <a
              href={brand.customerAreaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#054c77] px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Central do Assinante
            </a>
          </div>
          <a
            href={telHref}
            className="mt-3 block rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-800"
          >
            Ligar {brand.phoneLabel}
          </a>
        </div>
      ) : null}
    </header>
  );
}
