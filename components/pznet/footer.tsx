import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";

import { brand, hours, nav, telHref } from "@/lib/pznet";

/** Closing call to action followed by the site footer. */
export function PznetFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#021422] text-white">
      <div
        className="border-b border-white/10"
        style={{
          backgroundImage:
            "radial-gradient(60% 120% at 50% 0%, #0a6aa8 0%, transparent 70%)",
        }}
      >
        <div className="mx-auto w-full max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-24">
          <h2 className="pznet-display text-3xl leading-tight font-bold tracking-tight text-balance sm:text-5xl">
            Pronto para navegar em fibra?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-pretty text-sky-50/80">
            Ligue e saiba mais. A gente está pronto para atender você.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={telHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-7 py-3.5 text-base font-semibold text-[#021422] transition-colors hover:bg-sky-300"
            >
              <Phone className="size-4" aria-hidden />
              Ligar {brand.phoneLabel}
            </a>
            <a
              href="#planos"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white ring-1 ring-white/25 transition-colors hover:bg-white/10"
            >
              Ver planos
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        <div>
          <Image
            src={brand.logo}
            alt={brand.name}
            width={2350}
            height={395}
            className="h-7 w-auto brightness-0 invert"
          />
          <p className="mt-4 text-sm text-pretty text-sky-50/60">
            {brand.kind} em {brand.city}.
          </p>
        </div>

        <FooterColumn title="Navegue">
          {nav.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Para clientes">
          <li>
            <a href={brand.secondCopyUrl} className="hover:text-white">
              2ª via da fatura
            </a>
          </li>
          <li>
            <a
              href={brand.customerAreaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Central do Assinante
            </a>
          </li>
          <li>
            <a href={telHref} className="hover:text-white">
              {brand.phoneLabel}
            </a>
          </li>
        </FooterColumn>

        <FooterColumn title="Atendimento">
          {hours.map((h) => (
            <li key={h.days}>
              {h.days}: {h.time}
            </li>
          ))}
        </FooterColumn>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-5 py-6 text-xs text-sky-50/50 sm:flex-row sm:justify-between sm:px-8">
          <p>
            © {year} {brand.name}. Todos os direitos reservados.
          </p>
          <a
            href="https://joaobritto.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Site por João Filipi
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-white">{title}</p>
      <ul className="mt-4 space-y-2.5 text-sm text-sky-50/60">{children}</ul>
    </div>
  );
}
