import { MapPin } from "lucide-react";

import { WhatsAppIcon } from "@/components/icons";
import { FiberLines } from "@/components/pznet/fiber-lines";
import { brand, pznetWa } from "@/lib/pznet";

export function PznetCoverage() {
  return (
    <section
      id="cobertura"
      className="relative scroll-mt-16 overflow-hidden bg-[#04243b] py-20 text-white sm:py-28"
    >
      <FiberLines
        id="pznet-fiber-coverage"
        className="pointer-events-none absolute inset-0 size-full opacity-60"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold tracking-wide text-sky-300 uppercase">
            Cobertura
          </p>
          <h2 className="pznet-display mt-3 text-3xl leading-tight font-bold tracking-tight text-balance sm:text-5xl">
            Atendemos Jerônimo Monteiro e proximidades
          </h2>
          <p className="mt-5 max-w-lg text-lg text-pretty text-sky-50/80">
            Mande o seu endereço e a gente confirma se a fibra da PZNET já chega
            até você.
          </p>
          <a
            href={pznetWa(
              `Olá, ${brand.name}! Quero saber se vocês atendem no meu endereço: `,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-7 py-3.5 text-base font-semibold text-[#021422] transition-colors hover:bg-sky-300"
          >
            <WhatsAppIcon className="size-5" />
            Consultar meu endereço
          </a>
        </div>

        {/* Signal radiating from the city: a calm stand-in for a map. */}
        <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center">
          {[100, 75, 50].map((s) => (
            <span
              key={s}
              className="absolute rounded-full border border-sky-300/20 bg-sky-300/[0.04]"
              style={{ width: `${s}%`, height: `${s}%` }}
            />
          ))}
          <span className="pznet-ping absolute size-24 rounded-full bg-sky-400/30" />
          <div className="relative flex flex-col items-center gap-3">
            <span className="flex size-16 items-center justify-center rounded-full bg-sky-400 text-[#021422] shadow-xl shadow-sky-500/40">
              <MapPin className="size-7" aria-hidden />
            </span>
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold ring-1 ring-white/15 backdrop-blur-sm">
              {brand.city}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
