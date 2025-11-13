import type { NewsArticle } from "./news";

export function getFallbackNews(): NewsArticle[] {
  const now = new Date();
  const isoDate = now.toISOString();

  return [
    {
      id: "fallback-1",
      title: "Atualizações recentes no cenário jurídico brasileiro",
      description:
        "Confira um panorama das principais mudanças legislativas e decisões judiciais que impactam empresas e cidadãos.",
      content:
        "Mantemos nossos clientes informados sobre as novidades relevantes do universo jurídico. Nesta semana, destacamos decisões em tribunais superiores e alterações regulatórias que exigem atenção imediata.",
      url: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=960&q=80",
      source: "Equipe B&E P Advocacia",
      publishedAt: isoDate,
    },
    {
      id: "fallback-2",
      title: "Como preparar sua empresa para auditorias trabalhistas",
      description:
        "Boas práticas para organizações que desejam evitar passivos trabalhistas e garantir conformidade com a legislação.",
      content:
        "Uma preparação adequada para auditorias trabalhistas envolve revisão de contratos, treinamentos constantes e acompanhamento de jurisprudência. Nossa equipe separou orientações essenciais.",
      url: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=960&q=80",
      source: "Equipe B&E P Advocacia",
      publishedAt: isoDate,
    },
    {
      id: "fallback-3",
      title: "Planejamento sucessório: por onde começar",
      description:
        "Entenda os primeiros passos para organizar um plano sucessório eficiente e evitar conflitos futuros entre herdeiros.",
      content:
        "O planejamento sucessório é uma ferramenta estratégica que evita litígios e protege o patrimônio familiar. Abordamos instrumentos como testamentos, holdings e doações.",
      url: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&w=960&q=80",
      source: "Equipe B&E P Advocacia",
      publishedAt: isoDate,
    },
  ];
}


