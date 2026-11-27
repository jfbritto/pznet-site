import { ArrowRight, FileText, Phone, UserRound } from "lucide-react";

import { FiberLines } from "@/components/pznet/fiber-lines";
import { brand, plans, telHref } from "@/lib/pznet";

export function PznetHero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage:
          "radial-gradient(70% 90% at 85% 10%, #0a6aa8 0%, transparent 60%), radial-gradient(60% 70% at 0% 100%, #054c77 0%, transparent 65%), linear-gradient(165deg, #04243b 0%, #021422 100%)",
      }}
    >
      <FiberLines
        id="pznet-fiber-hero"
        className="pointer-events-none absolute inset-0 size-full"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 pt-32 pb-20 sm:px-8 sm:pt-40 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:pb-28">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-sky-100 ring-1 ring-white/15 backdrop-blur-sm sm:text-sm sm:tracking-wide">
            <span className="relative flex size-2">
              <span className="pznet-ping absolute inline-flex size-full rounded-full bg-sky-300" />
              <span className="relative inline-flex size-2 rounded-full bg-sky-300" />
            </span>
            {brand.claim}
          </p>

          <h1 className="pznet-display mt-6 text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl">
            Internet fibra óptica feita aqui,{" "}
            <span className="text-sky-300">para quem é daqui.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-sky-50/80">
            Conexão estável, alta velocidade e atendimento de gente que você
            conhece. Planos de até {brand.maxSpeed} Mega em Jerônimo Monteiro e
            região.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#planos"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-7 py-3.5 text-base font-semibold text-[#021422] shadow-lg shadow-sky-500/25 transition-colors hover:bg-sky-300"
            >
              Ver planos
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
            <a
              href={telHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 px-7 py-3.5 text-base font-semibold text-white ring-1 ring-white/25 backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              <Phone className="size-4" aria-hidden />
              Ligar {brand.phoneLabel}
            </a>
          </div>
        </div>

        <SpeedCard />
      </div>
    </section>
  );
}

/** Glass panel: the speed range, then the two customer shortcuts. */
function SpeedCard() {
  const top = Math.max(...plans.map((p) => p.speed));

  return (
    <div className="rounded-3xl bg-white/[0.07] p-6 ring-1 ring-white/15 backdrop-blur-md sm:p-8">
      <p className="text-sm font-medium text-sky-100/70">Velocidades de até</p>
      <p className="pznet-display mt-1 flex items-baseline gap-2">
        <span className="text-7xl font-extrabold tracking-tight sm:text-8xl">
          {top}
        </span>
        <span className="text-2xl font-semibold text-sky-300">Mega</span>
      </p>

      <ul className="mt-6 space-y-3" aria-label="Planos disponíveis">
        {plans.map((p) => (
          <li key={p.id} className="flex items-center gap-3 text-sm">
            <span className="w-24 shrink-0 text-sky-50/75">{p.name}</span>
            <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
              <span
                className="block h-full rounded-full bg-gradient-to-r from-sky-500 to-sky-300"
                style={{ width: `${(p.speed / top) * 100}%` }}
              />
            </span>
            <span className="w-20 shrink-0 text-right font-semibold whitespace-nowrap tabular-nums">
              {p.speed} Mega
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8 border-t border-white/10 pt-6">
        <p className="text-sm font-semibold text-white">Já é cliente?</p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <a
            href={brand.secondCopyUrl}
            className="group flex flex-col gap-3 rounded-2xl bg-white p-4 text-[#054c77] transition-transform hover:-translate-y-0.5"
          >
            <FileText className="size-5" aria-hidden />
            <span className="text-sm leading-tight font-semibold">
              2ª via da fatura
            </span>
          </a>
          <a
            href={brand.customerAreaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 rounded-2xl bg-white/10 p-4 text-white ring-1 ring-white/15 transition-transform hover:-translate-y-0.5"
          >
            <UserRound className="size-5 text-sky-300" aria-hidden />
            <span className="text-sm leading-tight font-semibold">
              Central do Assinante
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
