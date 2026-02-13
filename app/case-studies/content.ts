import type { Language } from "@/lib/i18n/language-context";

const en = {
  header: {
    badge: "Case Studies",
    title: "Lessons from Comparable Cities",
    desc: "How other Hudson Valley cities have successfully revitalized, and what Middletown can learn from their experiences.",
  },
  card: {
    populationLabel: "Population:",
    badge: "Case Study",
    keyStrategyLabel: "Key Strategy",
    outcomesLabel: "Outcomes",
    lessonsTitle: "Lessons for Middletown",
    visitPrefix: "Visit",
    visitSuffix: "official site",
  },
  comparison: {
    title: "How Middletown Compares",
    tableHeaders: {
      city: "City",
      population: "Population",
      keyStrategy: "Key Strategy",
    },
    middletown: {
      name: "Middletown, NY",
      population: "30,345",
      strategy: "Education + Arts + Healthcare + DRI infrastructure",
    },
  },
  advantages: {
    title: "Middletown\u2019s Unique Advantages",
    items: [
      "Multiple educational anchors (Fei Tian College, Touro COM, SUNY Orange) -- more than any comparable city",
      "270-acre campus for expansion -- the largest redevelopment opportunity in the region",
      "Unique cultural identity through Chinese arts, integrative medicine, and media organizations",
      "Strong public investment ($10M DRI + $250K BOA + $1 land transfer) already in place",
      "Technology sector presence (Gan Jing World) complementing traditional economic base",
    ],
  },
};

export type CaseStudiesContent = typeof en;

const zhTW: CaseStudiesContent = {
  header: {
    badge: "案例研究",
    title: "借鏡相近城市的經驗",
    desc: "其他 Hudson Valley 城市如何成功實現振興，以及 Middletown 可以從中汲取的經驗。",
  },
  card: {
    populationLabel: "人口：",
    badge: "案例研究",
    keyStrategyLabel: "核心策略",
    outcomesLabel: "成果",
    lessonsTitle: "對 Middletown 的啟示",
    visitPrefix: "造訪",
    visitSuffix: "官方網站",
  },
  comparison: {
    title: "Middletown 的比較",
    tableHeaders: {
      city: "城市",
      population: "人口",
      keyStrategy: "核心策略",
    },
    middletown: {
      name: "Middletown, NY",
      population: "30,345",
      strategy: "教育 + 藝術 + 醫療 + DRI 基礎設施",
    },
  },
  advantages: {
    title: "Middletown 的獨特優勢",
    items: [
      "多所教育機構（Fei Tian College、Touro COM、SUNY Orange）——超越所有同類城市",
      "270 英畝校園可供擴展——區域內最大的再開發機會",
      "透過中國傳統藝術、整合醫學及媒體機構建立獨特文化認同",
      "已到位的強大公共投資（$10M DRI + $250K BOA + $1 土地轉讓）",
      "科技產業（Gan Jing World）補充傳統經濟基礎",
    ],
  },
};

const es: CaseStudiesContent = {
  header: {
    badge: "Casos de Estudio",
    title: "Lecciones de Ciudades Comparables",
    desc: "Cómo otras ciudades del Hudson Valley se han revitalizado con éxito y qué puede aprender Middletown de sus experiencias.",
  },
  card: {
    populationLabel: "Población:",
    badge: "Caso de Estudio",
    keyStrategyLabel: "Estrategia Clave",
    outcomesLabel: "Resultados",
    lessonsTitle: "Lecciones para Middletown",
    visitPrefix: "Visitar",
    visitSuffix: "sitio oficial",
  },
  comparison: {
    title: "Cómo se Compara Middletown",
    tableHeaders: {
      city: "Ciudad",
      population: "Población",
      keyStrategy: "Estrategia Clave",
    },
    middletown: {
      name: "Middletown, NY",
      population: "30,345",
      strategy: "Educación + Artes + Salud + Infraestructura DRI",
    },
  },
  advantages: {
    title: "Ventajas Únicas de Middletown",
    items: [
      "Múltiples anclas educativas (Fei Tian College, Touro COM, SUNY Orange) -- más que cualquier ciudad comparable",
      "Campus de 270 acres para expansión -- la mayor oportunidad de reurbanización en la región",
      "Identidad cultural única a través de artes chinas, medicina integrativa y organizaciones de medios",
      "Fuerte inversión pública ($10M DRI + $250K BOA + transferencia de terreno por $1) ya implementada",
      "Presencia del sector tecnológico (Gan Jing World) complementando la base económica tradicional",
    ],
  },
};

export const content: Record<Language, CaseStudiesContent> = {
  en,
  "zh-TW": zhTW,
  es,
};
