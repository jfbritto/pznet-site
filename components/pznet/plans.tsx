import { Check } from "lucide-react";

import { WhatsAppIcon } from "@/components/icons";
import {
  brand,
  planMessage,
  plans,
  pznetWa,
  telHref,
  type Plan,
} from "@/lib/pznet";
import { cn } from "@/lib/utils";

export function PznetPlans() {
  return (
    <section id="planos" className="scroll-mt-16 bg-white py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-[#0077bd] uppercase">
            Planos fibra óptica
          </p>
          <h2 className="pznet-display mt-3 text-3xl leading-tight font-bold tracking-tight text-balance text-slate-900 sm:text-5xl">
            Escolha a velocidade da sua casa
          </h2>
          <p className="mt-4 text-lg text-pretty text-slate-600">
            Todos os planos são em fibra óptica, com o mesmo atendimento
            próximo. Fale com a gente para saber os valores e a disponibilidade
            no seu endereço.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const featured = Boolean(plan.highlight);

  return (
    <article
      className={cn(
        "relative flex flex-col rounded-3xl p-7 sm:p-8",
        featured
          ? "bg-[#04243b] text-white shadow-2xl ring-1 shadow-[#054c77]/30 ring-[#0a6aa8] lg:-my-4 lg:py-12"
          : "bg-slate-50 text-slate-900 ring-1 ring-slate-200",
      )}
    >
      {featured ? (
        <span className="absolute -top-3.5 left-7 rounded-full bg-sky-400 px-3.5 py-1 text-xs font-bold tracking-wide text-[#021422] uppercase sm:left-8">
          {plan.highlight}
        </span>
      ) : null}

      <h3
        className={cn(
          "text-sm font-bold tracking-[0.18em] uppercase",
          featured ? "text-sky-300" : "text-[#0077bd]",
        )}
      >
        {plan.name}
      </h3>
      <p className="pznet-display mt-4 flex items-baseline gap-2">
        <span className="text-6xl font-extrabold tracking-tight">
          {plan.speed}
        </span>
        <span
          className={cn(
            "text-xl font-semibold",
            featured ? "text-sky-300" : "text-[#0077bd]",
          )}
        >
          Mega
        </span>
      </p>
      <p
        className={cn(
          "mt-4 text-pretty",
          featured ? "text-sky-50/80" : "text-slate-600",
        )}
      >
        {plan.tagline}
      </p>

      <p
        className={cn(
          "mt-7 text-xs font-semibold tracking-wide uppercase",
          featured ? "text-sky-100/60" : "text-slate-500",
        )}
      >
        Ideal para
      </p>
      <ul className="mt-3 flex-1 space-y-2.5">
        {plan.idealFor.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm">
            <Check
              className={cn(
                "mt-0.5 size-4 shrink-0",
                featured ? "text-sky-300" : "text-[#0077bd]",
              )}
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>

      <a
        href={pznetWa(planMessage(plan))}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors",
          featured
            ? "bg-sky-400 text-[#021422] hover:bg-sky-300"
            : "bg-[#054c77] text-white hover:bg-[#043e62]",
        )}
      >
        <WhatsAppIcon className="size-4" />
        Quero o {plan.name}
      </a>
      <a
        href={telHref}
        className={cn(
          "mt-3 text-center text-sm font-medium underline-offset-4 hover:underline",
          featured ? "text-sky-100/70" : "text-slate-500",
        )}
      >
        ou ligue {brand.phoneLabel}
      </a>
    </article>
  );
}
