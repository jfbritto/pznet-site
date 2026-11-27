"use client";

import { Sparkles } from "lucide-react";
import { useState } from "react";

import { WhatsAppIcon } from "@/components/icons";
import { planMessage, plans, pznetWa, type PlanId } from "@/lib/pznet";
import { cn } from "@/lib/utils";

/**
 * Two quick questions that point the visitor to a plan. The weights are a
 * rule of thumb (more people and heavier uses push the speed up), not a
 * technical sizing: the final word is always a conversation with PZNET.
 */

const households = [
  { label: "1 ou 2", weight: 0 },
  { label: "3 ou 4", weight: 1 },
  { label: "5 ou mais", weight: 2 },
];

const uses = [
  { label: "Redes sociais e mensagens", weight: 0 },
  { label: "Filmes e séries", weight: 1 },
  { label: "Aulas e reuniões online", weight: 1 },
  { label: "Câmeras de segurança", weight: 1 },
  { label: "Home office", weight: 2 },
  { label: "Games online", weight: 3 },
];

function recommend(household: number, picked: number[]): PlanId {
  const heaviest = Math.max(0, ...picked.map((i) => uses[i].weight));
  const busy = picked.length >= 3 ? 1 : 0;
  const score = households[household].weight + heaviest + busy;
  if (score >= 3) return "avancado";
  if (score === 2) return "intermediario";
  return "basico";
}

export function PznetPlanFinder() {
  const [household, setHousehold] = useState<number | null>(null);
  const [picked, setPicked] = useState<number[]>([]);

  const toggle = (i: number) =>
    setPicked((cur) =>
      cur.includes(i) ? cur.filter((x) => x !== i) : [...cur, i],
    );

  const planId = household === null ? null : recommend(household, picked);
  const plan = plans.find((p) => p.id === planId);

  return (
    <section className="bg-[#eef6fc] py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#0077bd] uppercase">
            <Sparkles className="size-4" aria-hidden />
            Em dúvida?
          </p>
          <h2 className="pznet-display mt-3 text-3xl leading-tight font-bold tracking-tight text-balance text-slate-900 sm:text-4xl">
            Descubra o plano ideal em 10 segundos
          </h2>

          <fieldset className="mt-9">
            <legend className="font-semibold text-slate-900">
              Quantas pessoas usam a internet na sua casa?
            </legend>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {households.map((h, i) => (
                <Chip
                  key={h.label}
                  type="radio"
                  name="pznet-household"
                  checked={household === i}
                  onChange={() => setHousehold(i)}
                  label={h.label}
                />
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-8">
            <legend className="font-semibold text-slate-900">
              O que vocês mais fazem online?{" "}
              <span className="font-normal text-slate-500">
                (marque quantos quiser)
              </span>
            </legend>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {uses.map((u, i) => (
                <Chip
                  key={u.label}
                  type="checkbox"
                  checked={picked.includes(i)}
                  onChange={() => toggle(i)}
                  label={u.label}
                />
              ))}
            </div>
          </fieldset>
        </div>

        <div
          aria-live="polite"
          className="rounded-3xl bg-white p-7 shadow-xl ring-1 shadow-sky-900/5 ring-slate-200 sm:p-8 lg:sticky lg:top-24"
        >
          {plan ? (
            <>
              <p className="text-sm font-medium text-slate-500">
                O plano para a sua casa é o
              </p>
              <p className="pznet-display mt-2 text-3xl font-bold text-slate-900">
                {plan.name}
              </p>
              <p className="pznet-display mt-1 flex items-baseline gap-2 text-[#0077bd]">
                <span className="text-6xl font-extrabold tracking-tight">
                  {plan.speed}
                </span>
                <span className="text-xl font-semibold">Mega</span>
              </p>
              <p className="mt-4 text-pretty text-slate-600">{plan.tagline}</p>
              <a
                href={pznetWa(planMessage(plan))}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#054c77] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#043e62]"
              >
                <WhatsAppIcon className="size-4" />
                Quero o {plan.name}
              </a>
            </>
          ) : (
            <div className="py-6 text-center">
              <p className="pznet-display text-5xl font-extrabold text-sky-200">
                ?
              </p>
              <p className="mt-3 text-pretty text-slate-500">
                Responda ao lado e a gente indica a velocidade certa para a sua
                rotina.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Chip({
  label,
  ...input
}: { label: string } & React.ComponentProps<"input">) {
  return (
    <label
      className={cn(
        "cursor-pointer rounded-full px-4 py-2.5 text-sm font-medium ring-1 transition-colors select-none",
        "has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[#0077bd]",
        input.checked
          ? "bg-[#054c77] text-white ring-[#054c77]"
          : "bg-white text-slate-700 ring-slate-200 hover:ring-[#0077bd]",
      )}
    >
      <input className="sr-only" {...input} />
      {label}
    </label>
  );
}
