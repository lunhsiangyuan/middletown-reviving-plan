// Middletown Reviving Plan - DRI (Downtown Revitalization Initiative) Projects

import type { Language } from "@/lib/i18n/language-context";

export type ProjectStatus = "completed" | "in-progress" | "planned";

export interface LocalizedDRIProject {
  id: string;
  name: string;
  cost: number;
  status: ProjectStatus;
  description: Record<Language, string>;
  imageAlt: string;
  sourceUrl: string;
}

/** Flat project for components that expect plain strings */
export interface DRIProject {
  id: string;
  name: string;
  cost: number;
  status: ProjectStatus;
  description: string;
  imageAlt: string;
  sourceUrl: string;
}

export const DRI_TOTAL_INVESTMENT = 10_000_000 as const;

const localizedDriProjects: LocalizedDRIProject[] = [
  {
    id: "erie-way-park",
    name: "Erie Way Park",
    cost: 1_640_000,
    status: "completed",
    description: {
      en: "New urban park transforming an underutilized area into a vibrant community green space with seating, landscaping, and pedestrian pathways connecting downtown to the Heritage Trail.",
      "zh-TW":
        "全新都市公園，將閒置空間轉化為充滿活力的社區綠地，設有座椅、景觀和步道，連接市中心與 Heritage Trail。",
      es: "Nuevo parque urbano que transforma un área subutilizada en un vibrante espacio verde comunitario con asientos, paisajismo y senderos peatonales que conectan el centro con el Heritage Trail.",
    },
    imageAlt:
      "Erie Way Park with landscaped walkways and seating areas in downtown Middletown",
    sourceUrl: "https://www.ny.gov/programs/downtown-revitalization-initiative",
  },
  {
    id: "rail-trail-commons",
    name: "Rail Trail Commons",
    cost: 2_500_000,
    status: "completed",
    description: {
      en: "Trail connection and public space project linking the Heritage Trail to downtown Middletown, creating a seamless pedestrian corridor with gathering spaces and improved accessibility.",
      "zh-TW":
        "步道連接與公共空間專案，將 Heritage Trail 與 Middletown 市中心相連，打造無縫的步行走廊，設有聚會空間並改善無障礙設施。",
      es: "Proyecto de conexión de senderos y espacio público que une el Heritage Trail con el centro de Middletown, creando un corredor peatonal continuo con espacios de reunión y accesibilidad mejorada.",
    },
    imageAlt:
      "Rail Trail Commons public space connecting Heritage Trail to downtown",
    sourceUrl: "https://www.ny.gov/programs/downtown-revitalization-initiative",
  },
  {
    id: "parking-green-infrastructure",
    name: "Parking & Green Infrastructure",
    cost: 2_000_000,
    status: "completed",
    description: {
      en: "Parking improvements combined with green infrastructure elements including bioswales, permeable paving, and stormwater management to enhance downtown functionality and sustainability.",
      "zh-TW":
        "停車場改善結合綠色基礎設施，包括生態滯洪帶、透水鋪面和雨水管理系統，提升市中心功能性和永續性。",
      es: "Mejoras de estacionamiento combinadas con infraestructura verde incluyendo bioswales, pavimento permeable y gestión de aguas pluviales para mejorar la funcionalidad y sostenibilidad del centro.",
    },
    imageAlt:
      "Improved downtown parking area with green infrastructure and bioswales",
    sourceUrl: "https://www.ny.gov/programs/downtown-revitalization-initiative",
  },
  {
    id: "streetscape-improvements",
    name: "Streetscape Improvements",
    cost: 2_560_000,
    status: "completed",
    description: {
      en: "Comprehensive street beautification including new sidewalks, lighting, street furniture, plantings, and wayfinding signage to improve the downtown pedestrian experience.",
      "zh-TW":
        "全面街景美化工程，包括新建人行道、照明、街道設施、植栽和路標系統，改善市中心步行體驗。",
      es: "Embellecimiento integral de calles incluyendo nuevas aceras, iluminación, mobiliario urbano, plantaciones y señalización para mejorar la experiencia peatonal del centro.",
    },
    imageAlt:
      "Renovated downtown streetscape with new sidewalks, lighting, and plantings",
    sourceUrl: "https://www.ny.gov/programs/downtown-revitalization-initiative",
  },
  {
    id: "facade-improvement",
    name: "Facade Improvement Program",
    cost: 1_000_000,
    status: "completed",
    description: {
      en: "Facade restoration program that renovated 17 buildings in the downtown core, preserving historic character while modernizing storefronts to attract new businesses and customers.",
      "zh-TW":
        "建築立面修復計畫，翻新市中心核心區 17 棟建築，保留歷史風貌同時現代化店面，吸引新商家和顧客。",
      es: "Programa de restauración de fachadas que renovó 17 edificios en el núcleo del centro, preservando el carácter histórico mientras moderniza los escaparates para atraer nuevos negocios y clientes.",
    },
    imageAlt:
      "Restored building facades along North Street in downtown Middletown",
    sourceUrl: "https://www.ny.gov/programs/downtown-revitalization-initiative",
  },
];

/** Resolve localized DRI projects to the given language (falls back to English) */
export function resolveDRIProjects(lang: Language): DRIProject[] {
  return localizedDriProjects.map((p) => ({
    id: p.id,
    name: p.name,
    cost: p.cost,
    status: p.status,
    description: p.description[lang] ?? p.description.en,
    imageAlt: p.imageAlt,
    sourceUrl: p.sourceUrl,
  }));
}

/** Default English export for backward compatibility */
export const driProjects: DRIProject[] = resolveDRIProjects("en");
