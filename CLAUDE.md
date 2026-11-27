# PZNET (site do provedor de internet)

> Mapa criado em 27/11/2026, junto com o projeto. Confirme detalhes antes de agir.

## O que é

Site do provedor de internet fibra óptica PZNET, de Jerônimo Monteiro (ES), do primo do João. Presente do João: uma versão moderna do pznet.com.br atual.

- Página única: hero (com atalhos de 2ª via e Central do Assinante), planos, "descubra o plano ideal", vantagens, cobertura, atendimento (com selo "aberto agora"), perguntas frequentes e rodapé.
- A mesma página existe como vitrine no repositório `joaobritto` (`/loja/pznet`, `lib/pznet.ts` e `components/pznet/` de lá). Este repo é a versão independente.
- Situação: criado em 27/11/2026, ainda não publicado em domínio próprio.

## Stack

- Next.js 16.2.10 (App Router) com `output: "export"` (gera `out/` estático), React 19.2.4, TypeScript 5.
- Tailwind CSS 4, `lucide-react`, `clsx` + `tailwind-merge` (`lib/utils.ts`).
- Fontes Inter e Sora via `next/font/google`. pnpm, Prettier com plugin do Tailwind.
- Sem banco, sem API, sem variáveis de ambiente.

## Estrutura

- `lib/pznet.ts`: todo o conteúdo (contato, planos, vantagens, horários, perguntas). Fatos vindos do site atual; preços não são publicados lá, por isso os planos dizem "consulte".
- `lib/site.ts`: título, descrição, URL (`https://www.pznet.com.br`) e ID do Google Analytics que o site atual já usa.
- `app/`: `layout.tsx` (fontes, SEO, Google Analytics), `page.tsx`, `opengraph-image.png` (cartão de compartilhamento; para mudar, gere um PNG 1200x630 novo), `icon.png`.
- `components/pznet/`: uma seção por arquivo; `cookie-notice.tsx` usa a mesma chave de localStorage do site antigo (`cookiesAccepted`).

## Cuidados

- 2ª via (`/segundavia/`) e Central do Assinante (`/central/login.php`) são do sistema de cobrança no servidor atual do pznet.com.br. Se o site for para o mesmo servidor, não apagar essas pastas.
- A confirmar com o cliente: se o (28) 99886-8054 atende no WhatsApp (o site usa como telefone e WhatsApp) e se ele quer os preços no site.

## Como rodar

- `pnpm install`, `pnpm dev`, `pnpm build` (gera `out/`), `pnpm lint`, `pnpm typecheck`.
