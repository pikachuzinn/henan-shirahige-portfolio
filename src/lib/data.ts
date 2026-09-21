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
    items: ["N8N", "Agentes de IA", "Claude / LLMs", "Tool use", "Webhooks"],
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
    items: ["Java", "Python", "TypeScript", "JavaScript", "SQL"],
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
    slug: "ecommerce-api",
    title: "E-commerce Orders API",
    description:
      "API REST de catálogo e pedidos em Java 21 + Spring Boot 4, construída em torno das regras que um e-commerce precisa acertar e não em torno do CRUD: reserva de estoque sob concorrência com lock pessimista, preço congelado no momento da compra, máquina de estados do pedido e autorização por papel e por dono do recurso. Flyway, JWT stateless, OpenAPI, testes de integração contra PostgreSQL real e CI no GitHub Actions.",
    stack: ["Java 21", "Spring Boot 4", "PostgreSQL", "Flyway", "Testcontainers"],
    repo: "https://github.com/pikachuzinn/ecommerce-api",
    featured: true,
  },
  {
    slug: "notaflow",
    title: "NotaFlow — Extração de Notas Fiscais com IA",
    description:
      "Pipeline que lê nota fiscal em PDF e devolve dado estruturado no banco. Extração com LLM e tool use, validação antes de gravar e retentativa corretiva que devolve o erro ao modelo. Documento que não passa na validação vai para revisão manual com aviso por e-mail, em vez de entrar sujo no banco. Idempotência, migrations versionadas, testes e CI.",
    stack: ["Python", "Claude", "PostgreSQL", "Docker", "Google Drive"],
    repo: "https://github.com/pikachuzinn/notaflow",
    featured: true,
  },
  {
    slug: "radar-provedores",
    title: "Radar de Provedores",
    description:
      "Ferramenta de análise de viabilidade que mapeia provedores de internet numa região via Google Places API, com interface gráfica e linha de comando. Mede a sobreposição entre os termos de busca e recomenda o menor conjunto que reproduz o mesmo resultado, calibrado em várias cidades. Cache local, deduplicação, exportação CSV/Excel e 231 testes.",
    stack: ["Python", "Google Places API", "tkinter", "pytest"],
    repo: "https://github.com/pikachuzinn/radar-provedores",
    featured: true,
  },
  {
    slug: "dragon-ball-z-api",
    title: "Dragon Ball Z API",
    description:
      "API REST completa com autenticação JWT, CRUD de três entidades relacionadas, filtros, paginação e ordenação. Suíte de testes automatizados, tratamento global de erros e collection Postman pronta para consumo.",
    stack: ["Node.js", "Express", "SQLite", "JWT", "Jest"],
    repo: "https://github.com/pikachuzinn/trabalho-api-full",
    featured: true,
  },
  {
    slug: "mini-blog-node",
    title: "Mini-Blog em Node.js",
    description:
      "Aplicação full stack com autenticação e CRUD completo — base sólida de back-end por trás de qualquer canal digital (site, blog, área logada).",
    stack: ["Node.js", "Express", "PostgreSQL", "JWT"],
    repo: "https://github.com/pikachuzinn/mini-blog",
    featured: false,
  },
  {
    slug: "crm-n8n-api",
    title: "API de CRM com N8N",
    description:
      "API de CRM integrada a fluxos N8N pra eliminar trabalho manual de time comercial — sincronização de leads, notificações e follow-up automático entre sistemas.",
    stack: ["Node.js", "N8N", "PostgreSQL", "REST"],
    featured: false,
    status: "em-desenvolvimento",
  },
  {
    slug: "agente-ia-suporte",
    title: "Agente de IA para Suporte",
    description:
      "Agente de IA pra atendimento ao cliente, com memória de contexto e respostas geradas a partir de base de conhecimento própria — reduz volume de ticket repetitivo pra time humano.",
    stack: ["Python", "LLM", "PostgreSQL"],
    featured: false,
    status: "em-desenvolvimento",
  },
];
