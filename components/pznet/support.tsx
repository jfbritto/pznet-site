import { Clock, FileText, Phone, UserRound } from "lucide-react";

import { WhatsAppIcon } from "@/components/icons";
import { OpenBadge } from "@/components/pznet/open-badge";
import { brand, hours, pznetWa, telHref } from "@/lib/pznet";

export function PznetSupport() {
  return (
    <section
      id="atendimento"
      className="scroll-mt-16 bg-[#eef6fc] py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-[#0077bd] uppercase">
            Atendimento
          </p>
          <h2 className="pznet-display mt-3 text-3xl leading-tight font-bold tracking-tight text-balance text-slate-900 sm:text-5xl">
            Fale com a gente do jeito que preferir
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {/* Hours */}
          <div className="rounded-3xl bg-white p-7 ring-1 ring-slate-200 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <Clock className="size-6 text-[#0077bd]" aria-hidden />
              <OpenBadge />
            </div>
            <h3 className="pznet-display mt-5 text-lg font-bold text-slate-900">
              Horário de atendimento
            </h3>
            <dl className="mt-4 space-y-3">
              {hours.map((h) => (
                <div
                  key={h.days}
                  className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0 last:pb-0"
                >
                  <dt className="text-slate-600">{h.days}</dt>
                  <dd className="font-semibold text-slate-900 tabular-nums">
                    {h.time}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Talk */}
          <div className="flex flex-col rounded-3xl bg-[#054c77] p-7 text-white sm:p-8">
            <Phone className="size-6 text-sky-300" aria-hidden />
            <h3 className="pznet-display mt-5 text-lg font-bold">
              Ligue ou chame no WhatsApp
            </h3>
            <p className="pznet-display mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              {brand.phoneLabel}
            </p>
            <div className="mt-auto grid gap-3 pt-7 sm:grid-cols-2 lg:grid-cols-1">
              <a
                href={telHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#054c77] transition-colors hover:bg-sky-50"
              >
                <Phone className="size-4" aria-hidden />
                Ligar agora
              </a>
              <a
                href={pznetWa(`Olá, ${brand.name}! Vim pelo site.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/25 transition-colors hover:bg-white/20"
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Self-service */}
          <div className="flex flex-col rounded-3xl bg-white p-7 ring-1 ring-slate-200 sm:p-8">
            <UserRound className="size-6 text-[#0077bd]" aria-hidden />
            <h3 className="pznet-display mt-5 text-lg font-bold text-slate-900">
              Resolva pela internet
            </h3>
            <p className="mt-2 text-pretty text-slate-600">
              Fatura e dados da sua assinatura a qualquer hora, sem precisar
              ligar.
            </p>
            <div className="mt-auto grid gap-3 pt-7">
              <a
                href={brand.secondCopyUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#054c77] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#043e62]"
              >
                <FileText className="size-4" aria-hidden />
                2ª via da fatura
              </a>
              <a
                href={brand.customerAreaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-[#054c77] ring-1 ring-slate-300 transition-colors hover:bg-slate-50"
              >
                <UserRound className="size-4" aria-hidden />
                Central do Assinante
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
