import { Activity, Cable, Gauge, Headset, type LucideIcon } from "lucide-react";

import { features, type Feature } from "@/lib/pznet";

const icons: Record<Feature["icon"], LucideIcon> = {
  fiber: Cable,
  stable: Activity,
  speed: Gauge,
  human: Headset,
};

export function PznetFeatures() {
  return (
    <section id="vantagens" className="scroll-mt-16 bg-white py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold tracking-wide text-[#0077bd] uppercase">
              Por que a PZNET
            </p>
            <h2 className="pznet-display mt-3 text-3xl leading-tight font-bold tracking-tight text-balance text-slate-900 sm:text-5xl">
              Quem cuida da sua internet mora na mesma cidade que você.
            </h2>
            <p className="mt-5 text-lg text-pretty text-slate-600">
              Somos um provedor local. Quando você liga, fala com uma equipe que
              conhece a região, conhece a rede e está aqui para resolver.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f) => {
              const Icon = icons[f.icon];
              return (
                <div
                  key={f.title}
                  className="rounded-3xl bg-slate-50 p-7 ring-1 ring-slate-200"
                >
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-[#054c77] text-sky-300">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="pznet-display mt-5 text-lg font-bold text-slate-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-pretty text-slate-600">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
