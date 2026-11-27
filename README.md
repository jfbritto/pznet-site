# PZNET · Internet fibra óptica em Jerônimo Monteiro

Site da **PZNET**, provedor de internet fibra óptica de Jerônimo Monteiro (ES).
Mostra os planos (600, 800 e 900 Mega), ajuda o visitante a escolher o plano
certo, confirma a cobertura pelo WhatsApp e deixa a **2ª via da fatura** e a
**Central do Assinante** a um toque, em qualquer tela.

Projeto em **Next.js 16 + React 19 + Tailwind CSS v4**, exportado como site
estático (HTML, CSS e JS puros).

## Rodar localmente

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

Outros comandos: `pnpm build`, `pnpm lint`, `pnpm typecheck`, `pnpm format`.

## Onde editar o conteúdo

Todo o texto fica em **`lib/pznet.ts`**:

- **Contato e links** (`brand`): telefone, WhatsApp, links da 2ª via e da
  Central do Assinante.
- **Planos** (`plans`): nome, velocidade, descrição e "ideal para".
- **Vantagens** (`features`), **horários** (`hours` e `openingWindows`, que
  controla o selo "Aberto agora") e **perguntas frequentes** (`faqs`).

Título, descrição, domínio e o ID do Google Analytics ficam em `lib/site.ts`.
A logo está em `public/logo.png` e o ícone da aba em `app/icon.png`.

## Publicar

`pnpm build` gera a pasta **`out/`** com o site pronto. Duas opções:

- **Vercel:** importe este repositório em vercel.com (Add New → Project). A
  Vercel detecta o Next.js e publica a cada push na `main`. Depois, adicione o
  domínio em Settings → Domains.
- **Servidor atual:** copie o conteúdo de `out/` para a raiz do site, sem
  apagar as pastas do sistema de cobrança (`/segundavia` e `/central`), que
  continuam funcionando ao lado.

---

Site feito por [João Filipi](https://joaobritto.com.br).
