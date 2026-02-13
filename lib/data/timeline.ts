// Middletown Reviving Plan - Revitalization Timeline

import type { Language } from "@/lib/i18n/language-context";

export type TimelineCategory =
  | "infrastructure"
  | "education"
  | "healthcare"
  | "business"
  | "government";

export interface LocalizedTimelineEvent {
  year: number;
  title: Record<Language, string>;
  description: Record<Language, string>;
  category: TimelineCategory;
}

/** Flat event for components that expect plain strings */
export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  category: string;
}

/** Resolve localized events to the given language (falls back to English) */
export function resolveEvents(lang: Language): TimelineEvent[] {
  return timelineEvents.map((e) => ({
    year: e.year,
    title: e.title[lang] ?? e.title.en,
    description: e.description[lang] ?? e.description.en,
    category: e.category,
  }));
}

/** Translated category labels */
export const categoryLabels: Record<TimelineCategory, Record<Language, string>> = {
  infrastructure: { en: "Infrastructure", "zh-TW": "基礎建設", es: "Infraestructura" },
  education: { en: "Education", "zh-TW": "教育", es: "Educación" },
  healthcare: { en: "Healthcare", "zh-TW": "醫療", es: "Salud" },
  business: { en: "Business", "zh-TW": "商業", es: "Negocios" },
  government: { en: "Government", "zh-TW": "政府", es: "Gobierno" },
};

export const timelineEvents: LocalizedTimelineEvent[] = [
  {
    year: 1992,
    title: {
      en: "Business Improvement District Established",
      "zh-TW": "商業改善區成立",
      es: "Establecimiento del Distrito de Mejora Comercial",
    },
    description: {
      en: "The Middletown Business Improvement District (BID) was established to manage and promote the downtown area, laying the groundwork for future revitalization efforts.",
      "zh-TW": "Middletown 商業改善區 (BID) 成立，負責管理和推廣市中心區域，為未來的振興工作奠定基礎。",
      es: "Se estableció el Distrito de Mejora Comercial (BID) de Middletown para gestionar y promover el área del centro, sentando las bases para futuros esfuerzos de revitalización.",
    },
    category: "government",
  },
  {
    year: 2008,
    title: {
      en: "Heritage Trail Opens",
      "zh-TW": "Heritage Trail 步道啟用",
      es: "Apertura del Heritage Trail",
    },
    description: {
      en: "The Heritage Trail, a multi-use recreational path, opened to the public, providing a key infrastructure asset connecting communities and encouraging outdoor activity.",
      "zh-TW": "Heritage Trail 多功能休閒步道正式對外開放，成為連結社區並鼓勵戶外活動的關鍵基礎設施。",
      es: "El Heritage Trail, un sendero recreativo multiuso, se abrió al público, proporcionando una infraestructura clave que conecta comunidades y fomenta la actividad al aire libre.",
    },
    category: "infrastructure",
  },
  {
    year: 2016,
    title: {
      en: "DRI $10M Award from NY State",
      "zh-TW": "獲得紐約州 DRI 一千萬美元獎助",
      es: "Premio DRI de $10M del Estado de Nueva York",
    },
    description: {
      en: "Middletown was selected as a recipient of New York State's Downtown Revitalization Initiative, receiving $10 million to fund transformative downtown projects.",
      "zh-TW": "Middletown 獲選為紐約州市中心振興計畫 (DRI) 的受益城市，獲得一千萬美元資助用於市中心轉型專案。",
      es: "Middletown fue seleccionada como beneficiaria de la Iniciativa de Revitalización del Centro del Estado de Nueva York, recibiendo $10 millones para financiar proyectos transformadores.",
    },
    category: "government",
  },
  {
    year: 2017,
    title: {
      en: "Touro COM Opens Middletown Campus",
      "zh-TW": "Touro COM 開設 Middletown 校區",
      es: "Touro COM abre campus en Middletown",
    },
    description: {
      en: "Touro College of Osteopathic Medicine opened its Middletown campus, bringing medical education and hundreds of students to the downtown area.",
      "zh-TW": "Touro 骨科醫學院在 Middletown 開設校區，為市中心帶來醫學教育和數百名學生。",
      es: "Touro College of Osteopathic Medicine abrió su campus en Middletown, trayendo educación médica y cientos de estudiantes al área del centro.",
    },
    category: "education",
  },
  {
    year: 2018,
    title: {
      en: "Fei Tian College NECHE Accreditation",
      "zh-TW": "飛天大學獲得 NECHE 認證",
      es: "Acreditación NECHE de Fei Tian College",
    },
    description: {
      en: "Fei Tian College achieved accreditation from the New England Commission of Higher Education (NECHE), establishing its academic credibility and expanding program offerings.",
      "zh-TW": "飛天大學獲得新英格蘭高等教育委員會 (NECHE) 認證，確立其學術公信力並擴大課程範圍。",
      es: "Fei Tian College obtuvo la acreditación de la Comisión de Educación Superior de Nueva Inglaterra (NECHE), estableciendo su credibilidad académica y ampliando su oferta de programas.",
    },
    category: "education",
  },
  {
    year: 2019,
    title: {
      en: "DRI Projects Begin Construction",
      "zh-TW": "DRI 專案開始動工",
      es: "Comienzan las obras de los proyectos DRI",
    },
    description: {
      en: "Construction commenced on the five DRI-funded projects including Erie Way Park, Rail Trail Commons, streetscape improvements, parking infrastructure, and the facade improvement program.",
      "zh-TW": "五項 DRI 資助專案開始動工，包括 Erie Way Park、Rail Trail Commons、街景改善、停車基礎設施及建築立面改善計畫。",
      es: "Comenzó la construcción de los cinco proyectos financiados por DRI, incluyendo Erie Way Park, Rail Trail Commons, mejoras del paisaje urbano, infraestructura de estacionamiento y el programa de mejora de fachadas.",
    },
    category: "infrastructure",
  },
  {
    year: 2020,
    title: {
      en: "Race 4 Space Program Launches",
      "zh-TW": "Race 4 Space 計畫啟動",
      es: "Lanzamiento del programa Race 4 Space",
    },
    description: {
      en: "The Race 4 Space program launched to help fill vacant downtown storefronts with new businesses, providing support and incentives for entrepreneurs.",
      "zh-TW": "Race 4 Space 計畫啟動，協助創業者進駐市中心空置店面，提供支持與獎勵措施。",
      es: "Se lanzó el programa Race 4 Space para ayudar a llenar los locales vacantes del centro con nuevos negocios, brindando apoyo e incentivos a emprendedores.",
    },
    category: "business",
  },
  {
    year: 2021,
    title: {
      en: "DRI Projects Completion Begins",
      "zh-TW": "DRI 專案陸續完工",
      es: "Comienzan a completarse los proyectos DRI",
    },
    description: {
      en: "The first DRI-funded projects reached completion, visibly transforming downtown Middletown's streetscape and public spaces.",
      "zh-TW": "首批 DRI 資助專案完工，顯著改變了 Middletown 市中心的街景和公共空間面貌。",
      es: "Los primeros proyectos financiados por DRI se completaron, transformando visiblemente el paisaje urbano y los espacios públicos del centro de Middletown.",
    },
    category: "infrastructure",
  },
  {
    year: 2022,
    title: {
      en: "Gan Jing World HQ Established",
      "zh-TW": "乾淨世界總部設立",
      es: "Establecimiento de la sede de Gan Jing World",
    },
    description: {
      en: "Gan Jing World, a technology and video platform company, established its headquarters in Middletown, bringing tech-sector jobs and investment to the community.",
      "zh-TW": "科技與影音平台公司乾淨世界在 Middletown 設立總部，為社區帶來科技產業工作機會與投資。",
      es: "Gan Jing World, una empresa de tecnología y plataforma de video, estableció su sede en Middletown, trayendo empleos del sector tecnológico e inversión a la comunidad.",
    },
    category: "business",
  },
  {
    year: 2023,
    title: {
      en: "New Middletown Department Store Opens",
      "zh-TW": "Middletown 新百貨商場開幕",
      es: "Apertura de la nueva tienda departamental de Middletown",
    },
    description: {
      en: "A $2.1M investment by Shen Yun brought a new department store to downtown Middletown, filling a major retail gap and attracting foot traffic.",
      "zh-TW": "神韻投資 210 萬美元在 Middletown 市中心開設新百貨商場，填補重要的零售空缺並吸引人潮。",
      es: "Una inversión de $2.1M de Shen Yun trajo una nueva tienda departamental al centro de Middletown, llenando un vacío comercial importante y atrayendo tráfico peatonal.",
    },
    category: "business",
  },
  {
    year: 2024,
    title: {
      en: "State Transfers 33 Acres & BOA Grant Awarded",
      "zh-TW": "州政府移轉 33 英畝土地 & BOA 獎助金核准",
      es: "El Estado transfiere 33 acres y se otorga subvención BOA",
    },
    description: {
      en: "New York State transferred 33 acres of land to the City of Middletown for $1, and a Brownfield Opportunity Area (BOA) grant of $250,772 was awarded for redevelopment planning.",
      "zh-TW": "紐約州以 1 美元象徵性價格將 33 英畝土地移轉給 Middletown 市，並核准 $250,772 的棕地機會區域 (BOA) 獎助金用於再開發規劃。",
      es: "El Estado de Nueva York transfirió 33 acres de terreno a la Ciudad de Middletown por $1, y se otorgó una subvención de Área de Oportunidad de Terrenos Baldíos (BOA) de $250,772 para planificación de redesarrollo.",
    },
    category: "government",
  },
  {
    year: 2025,
    title: {
      en: "Northern Medical Center Expands & BOA Planning Begins",
      "zh-TW": "Northern Medical Center 擴展 & BOA 規劃啟動",
      es: "Expansión de Northern Medical Center e inicio de planificación BOA",
    },
    description: {
      en: "Northern Medical Center expanded its integrative health services, and BOA planning activities commenced to guide the redevelopment of the transferred state land.",
      "zh-TW": "Northern Medical Center 擴大其整合醫療服務，BOA 規劃活動也正式啟動，引導移轉土地的再開發方向。",
      es: "Northern Medical Center expandió sus servicios de salud integrativa, y comenzaron las actividades de planificación BOA para guiar el redesarrollo del terreno estatal transferido.",
    },
    category: "healthcare",
  },
  {
    year: 2026,
    title: {
      en: "Community Campus Master Planning",
      "zh-TW": "社區園區總體規劃",
      es: "Planificación maestra del Campus Comunitario",
    },
    description: {
      en: "Master planning begins for the Community Campus on the 33-acre state-transferred land, envisioning a mixed-use development integrating education, healthcare, and community spaces.",
      "zh-TW": "在州政府移轉的 33 英畝土地上啟動社區園區總體規劃，構想融合教育、醫療與社區空間的複合式開發。",
      es: "Comienza la planificación maestra del Campus Comunitario en el terreno de 33 acres transferido por el estado, concibiendo un desarrollo de uso mixto que integra educación, salud y espacios comunitarios.",
    },
    category: "infrastructure",
  },
  {
    year: 2029,
    title: {
      en: "BOA Plan Completion Target",
      "zh-TW": "BOA 計畫完成目標年",
      es: "Objetivo de finalización del plan BOA",
    },
    description: {
      en: "Target year for the completion of the Brownfield Opportunity Area plan, setting the stage for full-scale development of the community campus and surrounding areas.",
      "zh-TW": "棕地機會區域計畫預定完成年份，為社區園區及周邊地區的全面開發奠定基礎。",
      es: "Año objetivo para la finalización del plan de Área de Oportunidad de Terrenos Baldíos, sentando las bases para el desarrollo a gran escala del campus comunitario y áreas circundantes.",
    },
    category: "government",
  },
];
