import { ChevronDown } from "lucide-react";

import { faqs } from "@/lib/pznet";

/** Native <details> accordion: keyboard and screen-reader friendly, no JS. */
export function PznetFaq() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div>
          <p className="text-sm font-semibold tracking-wide text-[#0077bd] uppercase">
            Dúvidas
          </p>
          <h2 className="pznet-display mt-3 text-3xl leading-tight font-bold tracking-tight text-balance text-slate-900 sm:text-4xl">
            Perguntas frequentes
          </h2>
        </div>

        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-semibold text-slate-900 marker:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0077bd] [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown
                  className="size-5 shrink-0 text-[#0077bd] transition-transform group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <p className="pb-6 text-pretty text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
