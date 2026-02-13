// Middletown Reviving Plan - Master Reference List

import type { Language } from "@/lib/i18n/language-context";

export type ReferenceType = "government" | "news" | "academic" | "organization";

export interface LocalizedReference {
  id: string;
  title: string;
  url: string;
  type: ReferenceType;
  description: Record<Language, string>;
  dateAccessed: string;
}

/** Flat reference for components that expect plain strings */
export interface Reference {
  id: string;
  title: string;
  url: string;
  type: ReferenceType;
  description: string;
  dateAccessed: string;
}

const localizedReferences: LocalizedReference[] = [
  {
    id: "ny-dri-middletown",
    title: "New York State Downtown Revitalization Initiative - Middletown",
    url: "https://www.ny.gov/programs/downtown-revitalization-initiative",
    type: "government",
    description: {
      en: "Official NY State page for the Downtown Revitalization Initiative, documenting Middletown's $10M award and funded projects.",
      "zh-TW":
        "紐約州市中心振興倡議 (DRI) 的官方頁面，記錄 Middletown 獲得的一千萬美元獎助和資助專案。",
      es: "Página oficial del Estado de Nueva York para la Iniciativa de Revitalización del Centro, documentando el premio de $10M de Middletown y los proyectos financiados.",
    },
    dateAccessed: "2026-02-01",
  },
  {
    id: "ny-boa-program",
    title: "New York State Brownfield Opportunity Areas Program",
    url: "https://dos.ny.gov/brownfield-opportunity-areas-program",
    type: "government",
    description: {
      en: "Official program page for the BOA initiative, under which Middletown received a $250,772 planning grant.",
      "zh-TW":
        "BOA 倡議的官方計畫頁面，Middletown 在此計畫下獲得 $250,772 的規劃獎助金。",
      es: "Página oficial del programa de la iniciativa BOA, bajo la cual Middletown recibió una subvención de planificación de $250,772.",
    },
    dateAccessed: "2026-02-01",
  },
  {
    id: "census-middletown",
    title: "U.S. Census Bureau - Middletown City, New York",
    url: "https://www.census.gov/quickfacts/middletowncitynewyork",
    type: "government",
    description: {
      en: "Census QuickFacts page providing population, demographics, and economic data for the City of Middletown.",
      "zh-TW":
        "人口普查 QuickFacts 頁面，提供 Middletown 市的人口、人口統計和經濟數據。",
      es: "Página QuickFacts del censo que proporciona datos de población, demografía y economía de la Ciudad de Middletown.",
    },
    dateAccessed: "2026-02-01",
  },
  {
    id: "northern-medical-center",
    title: "Northern Medical Center - Official Website",
    url: "https://www.northernmedical.org",
    type: "organization",
    description: {
      en: "Official website for Northern Medical Center, detailing services, physicians, and integrative medicine programs.",
      "zh-TW":
        "Northern Medical Center 官方網站，詳述其服務、醫師團隊和整合醫學計畫。",
      es: "Sitio web oficial del Northern Medical Center, con detalles sobre servicios, médicos y programas de medicina integrativa.",
    },
    dateAccessed: "2026-02-14",
  },
  {
    id: "fei-tian-college",
    title: "Fei Tian College - Official Website",
    url: "https://feitian.edu",
    type: "organization",
    description: {
      en: "Official website for Fei Tian College, including accreditation details, academic programs, and campus information.",
      "zh-TW":
        "飛天大學官方網站，包含認證細節、學術課程和校園資訊。",
      es: "Sitio web oficial de Fei Tian College, incluyendo detalles de acreditación, programas académicos e información del campus.",
    },
    dateAccessed: "2026-02-01",
  },
  {
    id: "fei-tian-academy",
    title: "Fei Tian Academy of the Arts - Official Website",
    url: "https://feitianacademy.org",
    type: "organization",
    description: {
      en: "Official website for Fei Tian Academy of the Arts, a K-12 performing arts school.",
      "zh-TW":
        "飛天藝術學院官方網站，為一所 K-12 表演藝術學校。",
      es: "Sitio web oficial de Fei Tian Academy of the Arts, una escuela de artes escénicas K-12.",
    },
    dateAccessed: "2026-02-01",
  },
  {
    id: "northern-academy",
    title: "Northern Academy of the Arts - Official Website",
    url: "https://northernacademy.org",
    type: "organization",
    description: {
      en: "Official website for Northern Academy of the Arts, a college-preparatory boarding and day school for grades 5–12.",
      "zh-TW":
        "Northern Academy of the Arts 官方網站，為一所 5-12 年級的大學預備制寄宿及走讀學校。",
      es: "Sitio web oficial de Northern Academy of the Arts, una escuela preparatoria de internado y día para grados 5 a 12.",
    },
    dateAccessed: "2026-02-14",
  },
  {
    id: "touro-com",
    title: "Touro College of Osteopathic Medicine - Middletown Campus",
    url: "https://tourocom.touro.edu",
    type: "academic",
    description: {
      en: "Official page for Touro COM's Middletown campus, with program details and campus information.",
      "zh-TW":
        "Touro COM Middletown 校區的官方頁面，提供課程詳情和校園資訊。",
      es: "Página oficial del campus de Middletown de Touro COM, con detalles del programa e información del campus.",
    },
    dateAccessed: "2026-02-01",
  },
  {
    id: "suny-orange",
    title: "SUNY Orange - Official Website",
    url: "https://sunyorange.edu",
    type: "academic",
    description: {
      en: "Official website for SUNY Orange, a community college serving Orange County, NY.",
      "zh-TW":
        "SUNY Orange 官方網站，為服務紐約州 Orange County 的社區學院。",
      es: "Sitio web oficial de SUNY Orange, un colegio comunitario que sirve al Condado de Orange, NY.",
    },
    dateAccessed: "2026-02-01",
  },
  {
    id: "gan-jing-world",
    title: "Gan Jing World - Official Website",
    url: "https://ganjingworld.com",
    type: "organization",
    description: {
      en: "Official website for Gan Jing World, a technology and video platform headquartered in Middletown.",
      "zh-TW":
        "乾淨世界官方網站，為一家總部位於 Middletown 的科技與影音平台公司。",
      es: "Sitio web oficial de Gan Jing World, una plataforma de tecnología y video con sede en Middletown.",
    },
    dateAccessed: "2026-02-01",
  },
  {
    id: "garnet-health",
    title: "Garnet Health Medical Center - Official Website",
    url: "https://garnethealth.org",
    type: "organization",
    description: {
      en: "Official website for Garnet Health Medical Center, a full-service community hospital in Middletown.",
      "zh-TW":
        "Garnet Health Medical Center 官方網站，為 Middletown 的一所全方位社區醫院。",
      es: "Sitio web oficial de Garnet Health Medical Center, un hospital comunitario de servicio completo en Middletown.",
    },
    dateAccessed: "2026-02-01",
  },
  {
    id: "middletown-bid",
    title: "Middletown Business Improvement District",
    url: "https://middletownbid.com",
    type: "organization",
    description: {
      en: "Official website for the Middletown BID, managing downtown revitalization and business promotion since 1992.",
      "zh-TW":
        "Middletown 商業改善區 (BID) 官方網站，自 1992 年起負責管理市中心振興與商業推廣。",
      es: "Sitio web oficial del BID de Middletown, gestionando la revitalización del centro y la promoción comercial desde 1992.",
    },
    dateAccessed: "2026-02-01",
  },
  {
    id: "record-online-revitalization",
    title: "Times Herald-Record - Middletown Revitalization Coverage",
    url: "https://www.recordonline.com",
    type: "news",
    description: {
      en: "Local news coverage of Middletown's downtown revitalization progress, DRI projects, and community development.",
      "zh-TW":
        "當地新聞對 Middletown 市中心振興進展、DRI 專案和社區發展的報導。",
      es: "Cobertura de noticias locales sobre el progreso de revitalización del centro de Middletown, proyectos DRI y desarrollo comunitario.",
    },
    dateAccessed: "2026-02-01",
  },
  {
    id: "middletown-ny-gov",
    title: "City of Middletown, NY - Official Website",
    url: "https://middletown-ny.com",
    type: "government",
    description: {
      en: "Official municipal website for the City of Middletown, New York.",
      "zh-TW":
        "紐約州 Middletown 市的官方市政網站。",
      es: "Sitio web municipal oficial de la Ciudad de Middletown, Nueva York.",
    },
    dateAccessed: "2026-02-01",
  },
];

/** Resolve localized references to the given language (falls back to English) */
export function resolveReferences(lang: Language): Reference[] {
  return localizedReferences.map((r) => ({
    id: r.id,
    title: r.title,
    url: r.url,
    type: r.type,
    description: r.description[lang] ?? r.description.en,
    dateAccessed: r.dateAccessed,
  }));
}

/** Default English export for backward compatibility */
export const references: Reference[] = resolveReferences("en");
