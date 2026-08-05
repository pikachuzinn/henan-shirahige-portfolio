export const profile = {
  name: "Henan Heiiji Shirahige",
  role: "Full Stack | IA, Automação e Produto Digital",
  tagline:
    "Construo sites que convertem e sistemas de agentes de IA que tiram trabalho manual da operação.",
  location: "Brasil (remoto)",
  email: "henanshirahige@gmail.com",
  github: "https://github.com/pikachuzinn",
  linkedin: "https://linkedin.com/in/henan-heiiji-shirahige-745467350",
  resumeUrl: "/resume.pdf",
  bio: [
    "Atuo com desenvolvimento back-end e automação inteligente, conectando APIs, bancos de dados, ferramentas e agentes de IA para otimizar processos e reduzir tarefas manuais.",
    "Tenho interesse em criar soluções eficientes para operações, CRM e workflows, sempre buscando transformar necessidades de negócio em sistemas funcionais e escaláveis.",
  ],
} as const;

export const skills = [
  {
    category: "Automação & IA",
    items: ["N8N", "Agentes de IA", "OpenAI", "Integração com LLMs", "Webhooks"],
  },
  {
    category: "Produto & Web",
    items: ["Next.js", "React", "UX", "Performance", "Jornada do cliente"],
  },
  {
    category: "Back-end",
    items: ["Node.js", "REST", "GraphQL", "Autenticação", "Filas", "Workers"],
  },
  {
    category: "Dados & Integrações",
    items: ["PostgreSQL", "Modelagem relacional", "APIs", "ERPs"],
  },
  {
    category: "Linguagens",
    items: ["JavaScript", "TypeScript", "Python", "SQL", "Lua"],
  },
  {
    category: "Infra & Práticas",
    items: ["Docker", "Clean Code", "SOLID", "Revisão de arquitetura"],
  },
] as const;

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  link?: string;
  repo?: string;
  featured?: boolean;
  status?: "em-desenvolvimento";
};

export const projects: Project[] = [
  {
    slug: "crm-n8n-api",
    title: "API de CRM com N8N",
    description:
      "API de CRM integrada a fluxos N8N pra eliminar trabalho manual de time comercial — sincronização de leads, notificações e follow-up automático entre sistemas.",
    stack: ["Node.js", "N8N", "PostgreSQL", "REST"],
    featured: true,
    status: "em-desenvolvimento",
  },
  {
    slug: "agente-ia-suporte",
    title: "Agente de IA para Suporte",
    description:
      "Agente de IA pra atendimento ao cliente, com memória de contexto e respostas geradas a partir de base de conhecimento própria — reduz volume de ticket repetitivo pra time humano.",
    stack: ["Python", "OpenAI", "PostgreSQL"],
    featured: true,
    status: "em-desenvolvimento",
  },
  {
    slug: "mini-blog-node",
    title: "Mini-Blog em Node.js",
    description:
      "Aplicação full stack com autenticação e CRUD completo — base sólida de back-end por trás de qualquer canal digital (site, blog, área logada).",
    stack: ["Node.js", "Express", "PostgreSQL", "JWT"],
    featured: false,
    status: "em-desenvolvimento",
  },
];
