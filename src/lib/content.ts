/**
 * Conteúdo e dados clínicos do site.
 * Fonte: Esposito et al. (2023), "Seletividade Alimentar em Crianças com
 * Autismo: Diretrizes para Avaliação e Intervenções Clínicas" (IJERPH, 20(5), 5092).
 */

export const INSTAGRAM_URL = "https://instagram.com/pequenospassos.ces/";

/**
 * Informações institucionais. Preencha `email`, `address` e `phone`
 * com os dados oficiais do CES — o rodapé só exibe o que estiver definido.
 */
export const DRIVE_URL =
  "https://drive.google.com/drive/u/1/folders/1d9K9aHtgnOdNhF0qkqale9xfp4Jschui";

export const INSTITUTION = {
  name: "Centro de Educação e Saúde (CES/UFCG)",
  program: "PROBEX-UFCG · Projeto de Extensão em Nutrição",
  project: "Pequenos Passos",
  instagramHandle: "@pequenospassos.ces",
  email: undefined as string | undefined,
  phone: undefined as string | undefined,
  address: undefined as string | undefined,
};

/** Arquivos em public/estudos. `canRead`: abre direto no navegador (PDF). */
export const STUDIES = [
  {
    title: "Diretrizes para Avaliação e Intervenções Clínicas",
    description:
      "Esposito et al. (2023). Versão em PDF do artigo sobre seletividade alimentar em crianças com TEA.",
    file: "/estudos/diretrizes-seletividade-alimentar-tea.pdf",
    format: "PDF",
    size: "510 KB",
    canRead: true,
  },
  {
    title: "Diretrizes 2023, versão em português",
    description:
      "Tradução do mesmo estudo em documento editável, para leitura e consulta pelas famílias e equipes.",
    file: "/estudos/seletividade-alimentar-tea-diretrizes-2023-pt.docx",
    format: "DOCX",
    size: "236 KB",
    canRead: false,
  },
] as const;

export const NAV_LINKS = [
  { href: "#seletividade", label: "Seletividade" },
  { href: "#abordagens", label: "Abordagens" },
  { href: "#estudos", label: "Estudos" },
  { href: "#contato", label: "Contato" },
];

export const DIMENSIONS = [
  {
    key: "organica",
    title: "Orgânica",
    text: "Refluxo, desconforto gastrointestinal e outras condições médicas podem causar recusa e vômitos — por isso são a primeira coisa a investigar.",
  },
  {
    key: "sensorial",
    title: "Sensorial",
    text: "Textura, cor, temperatura, cheiro e sabor podem ser vividos com intensidade. A seletividade se relaciona de forma estável com a hiperresponsividade sensorial.",
  },
  {
    key: "comportamental",
    title: "Comportamental",
    text: "Rigidez, rituais e padrões aprendidos nas refeições — inclusive a rotina da família — podem manter a recusa sem que ninguém perceba.",
  },
] as const;

export const STATS = [
  {
    value: "58%",
    label: "variedade alimentar restrita em crianças de 3 a 5 anos com TEA",
    compare: "contra 16% no desenvolvimento típico",
  },
  {
    value: "95%",
    label: "relutância em experimentar novos alimentos",
    compare: "contra 47% no desenvolvimento típico",
  },
  {
    value: "20 meses",
    label: "sem mudança no nível de seletividade em acompanhamento",
    compare: "reforça a necessidade de intervenção precoce",
  },
];

export const BEHAVIOR_PATTERNS = [
  "Recusa alimentar",
  "Variedade restrita",
  "Ingestão de um único alimento",
  "Preferência por textura, cor ou temperatura",
];

/** Cada abordagem usa uma cor das argolas do logo. */
export const APPROACHES = [
  {
    id: "avaliacao",
    tint: "lilac",
    title: "Avaliação Multidisciplinar",
    summary:
      "Antes de intervir, entendemos por que a criança recusa. A avaliação separa causas médicas de causas sensoriais e comportamentais.",
    items: [
      "Triagem de problemas gastrointestinais",
      "Histórico alimentar e avaliação nutricional",
      "Perfil sensorial da criança",
    ],
  },
  {
    id: "sensorial",
    tint: "gold",
    title: "Intervenções Sensoriais",
    summary:
      "Integração sensorial por meio de atividades lúdicas, em que a criança explora o alimento sem pressão e no seu ritmo.",
    items: [
      "Integração sensorial (modelo Ayres)",
      "Brincadeiras com textura, temperatura e sabor",
      "Exploração gradual com tato, olfato e paladar",
    ],
  },
  {
    id: "comportamental",
    tint: "coral",
    title: "Intervenções Comportamentais",
    summary:
      "Estratégias baseadas na Análise do Comportamento Aplicada (ABA) para ampliar o repertório alimentar com respeito e segurança.",
    items: [
      "Modelagem e exposição gradual",
      "Reforço positivo e diferencial",
      "Apresentação sequencial e fading de textura",
    ],
  },
  {
    id: "pais",
    tint: "sky",
    title: "Treinamento de Pais",
    summary:
      "A família é parte da intervenção. Capacitamos pais e cuidadores para aplicar as estratégias na rotina de casa.",
    items: [
      "Orientação prática para as refeições",
      "Análise das práticas alimentares em família",
      "Acompanhamento da aplicação em casa",
    ],
  },
] as const;

export const FOOTER_LINKS = [
  { label: "Instagram do projeto", href: INSTAGRAM_URL, external: true },
  { label: "Materiais e palestras", href: DRIVE_URL, external: true },
  {
    label: "Diretrizes (Esposito et al., 2023)",
    href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10048794/",
    external: true,
  },
  { label: "Início", href: "#inicio", external: false },
];
