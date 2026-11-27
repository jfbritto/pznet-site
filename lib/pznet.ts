/**
 * All editable content of the PZNET site: a local fibre-optic internet provider in
 * Jerônimo Monteiro (ES). Facts (plans, phone, hours, customer links) come from
 * the provider's current site, pznet.com.br; the copy is rewritten.
 *
 * TODO(confirm): prices are not published on the current site, so the plans
 * show "consulte" instead of a value. Confirm with the client whether the phone
 * below also answers on WhatsApp (the site links to it as both).
 */

export const brand = {
  name: "PZNET",
  kind: "Internet fibra óptica",
  city: "Jerônimo Monteiro, ES",
  claim: "Provedor local · Fibra óptica · Atendimento humano",
  phone: "5528998868054",
  phoneLabel: "(28) 99886-8054",
  whatsapp: "5528998868054",
  logo: "/logo.png",
  /** Customer self-service, hosted by the provider's billing system. */
  secondCopyUrl: "https://www.pznet.com.br/segundavia/",
  customerAreaUrl: "https://www.pznet.com.br/central/login.php",
  maxSpeed: 900,
} as const;

export const telHref = `tel:+${brand.phone}`;

export function pznetWa(message: string): string {
  return `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** In-page sections linked from the nav. */
export const nav = [
  { href: "#planos", label: "Planos" },
  { href: "#vantagens", label: "Vantagens" },
  { href: "#cobertura", label: "Cobertura" },
  { href: "#atendimento", label: "Atendimento" },
] as const;

export type PlanId = "basico" | "intermediario" | "avancado";

export type Plan = {
  id: PlanId;
  name: string;
  speed: number;
  tagline: string;
  idealFor: string[];
  highlight?: string;
};

/** Ascending order; the top plan is the highlighted one. */
export const plans: Plan[] = [
  {
    id: "basico",
    name: "Básico",
    speed: 600,
    tagline: "Para o uso do dia a dia, sem complicação.",
    idealFor: [
      "Redes sociais e mensagens",
      "Vídeos e séries em HD",
      "Casas com poucas pessoas",
    ],
  },
  {
    id: "intermediario",
    name: "Intermediário",
    speed: 800,
    tagline: "Alta performance para a família toda conectada ao mesmo tempo.",
    idealFor: [
      "Vários aparelhos ligados juntos",
      "Streaming em 4K",
      "Aulas e reuniões online",
    ],
  },
  {
    id: "avancado",
    name: "Avançado",
    speed: 900,
    tagline:
      "Velocidade máxima para quem usa a internet com intensidade e exige o melhor desempenho.",
    idealFor: [
      "Games online",
      "Home office e envio de arquivos pesados",
      "Casas cheias e muitos aparelhos",
    ],
    highlight: "Mais completo",
  },
];

/** Pre-filled WhatsApp text when a visitor picks a plan. */
export function planMessage(plan: Plan): string {
  return `Olá, ${brand.name}! Vim pelo site e quero contratar o plano ${plan.name} (${plan.speed} Mega).`;
}

export type Feature = {
  icon: "fiber" | "stable" | "speed" | "human";
  title: string;
  text: string;
};

export const features: Feature[] = [
  {
    icon: "fiber",
    title: "Fibra óptica até você",
    text: "Sinal transmitido por luz, com mais velocidade e menos interferência do que as conexões antigas.",
  },
  {
    icon: "stable",
    title: "Conexão estável",
    text: "Infraestrutura monitorada continuamente para a sua internet ficar de pé quando você mais precisa.",
  },
  {
    icon: "speed",
    title: "Velocidade de sobra",
    text: "Ideal para streaming, games, trabalho e estudos, com toda a casa conectada ao mesmo tempo.",
  },
  {
    icon: "human",
    title: "Atendimento humano",
    text: "Equipe próxima, conhecida e confiável, focada em resolver. Aqui você fala com gente.",
  },
];

export const hours = [
  { days: "Segunda a sexta", time: "8h às 18h" },
  { days: "Sábado", time: "8h às 12h" },
] as const;

/**
 * Opening windows used by the "open now" badge, in São Paulo time.
 * Day 0 is Sunday. Hours are [open, close) in decimal hours.
 */
export const openingWindows: Record<number, [number, number] | undefined> = {
  1: [8, 18],
  2: [8, 18],
  3: [8, 18],
  4: [8, 18],
  5: [8, 18],
  6: [8, 12],
};

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Como tiro a 2ª via da minha fatura?",
    a: "Clique em “2ª via da fatura”, no topo ou no fim desta página. Se preferir, fale com a gente pelo telefone ou WhatsApp que enviamos para você.",
  },
  {
    q: "O que é a Central do Assinante?",
    a: "É a sua área de cliente PZNET. Lá você acessa as informações da sua assinatura e das suas faturas, quando quiser.",
  },
  {
    q: "A PZNET atende no meu endereço?",
    a: "Atendemos Jerônimo Monteiro e proximidades. Mande o seu endereço pelo WhatsApp ou ligue, e a gente confirma a disponibilidade na hora.",
  },
  {
    q: "Qual a diferença entre os planos?",
    a: "A velocidade. O Básico (600 Mega) atende bem o dia a dia, o Intermediário (800 Mega) segura a família toda conectada e o Avançado (900 Mega) é para quem usa a internet com intensidade, como games e home office.",
  },
  {
    q: "Minha internet parou. O que eu faço?",
    a: "Confira se o roteador está ligado e tente reiniciá-lo, tirando da tomada por alguns segundos. Se não voltar, ligue para a gente no horário de atendimento.",
  },
];
