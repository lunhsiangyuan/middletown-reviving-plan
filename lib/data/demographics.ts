// Middletown Reviving Plan - Demographics & Key Statistics

import type { Language } from "@/lib/i18n/language-context";

export interface LocalizedDemographicStat {
  id: string;
  label: Record<Language, string>;
  value: string | number;
  unit?: string;
  description: Record<Language, string>;
  sourceUrl: string;
}

/** Flat stat for components that expect plain strings */
export interface DemographicStat {
  id: string;
  label: string;
  value: string | number;
  unit?: string;
  description?: string;
  sourceUrl: string;
}

export interface LocalizedDemographicProfile {
  city: string;
  county: string;
  state: string;
  zip: string;
  area: string;
  stats: LocalizedDemographicStat[];
}

export interface DemographicProfile {
  city: string;
  county: string;
  state: string;
  zip: string;
  area: string;
  stats: DemographicStat[];
}

const localizedDemographics: LocalizedDemographicProfile = {
  city: "Middletown",
  county: "Orange County",
  state: "New York",
  zip: "10940",
  area: "5.2 sq mi",
  stats: [
    {
      id: "population",
      label: {
        en: "Population",
        "zh-TW": "人口",
        es: "Población",
      },
      value: 30345,
      description: {
        en: "Total population as of the 2020 U.S. Census.",
        "zh-TW": "根據 2020 年美國人口普查的總人口數。",
        es: "Población total según el censo de EE.UU. de 2020.",
      },
      sourceUrl: "https://www.census.gov/quickfacts/middletowncitynewyork",
    },
    {
      id: "hispanic-latino",
      label: {
        en: "Hispanic/Latino Population",
        "zh-TW": "西裔/拉丁裔人口",
        es: "Población Hispana/Latina",
      },
      value: "40%+",
      description: {
        en: "Percentage of the population identifying as Hispanic or Latino.",
        "zh-TW": "人口中認定為西裔或拉丁裔的百分比。",
        es: "Porcentaje de la población que se identifica como hispano o latino.",
      },
      sourceUrl: "https://www.census.gov/quickfacts/middletowncitynewyork",
    },
    {
      id: "median-income",
      label: {
        en: "Median Household Income",
        "zh-TW": "家庭收入中位數",
        es: "Ingreso Familiar Mediano",
      },
      value: 52000,
      unit: "USD",
      description: {
        en: "Approximate median household income.",
        "zh-TW": "家庭收入中位數的近似值。",
        es: "Ingreso familiar mediano aproximado.",
      },
      sourceUrl: "https://www.census.gov/quickfacts/middletowncitynewyork",
    },
    {
      id: "avg-home-price",
      label: {
        en: "Average Home Price",
        "zh-TW": "平均房價",
        es: "Precio Promedio de Vivienda",
      },
      value: 395000,
      unit: "USD",
      description: {
        en: "Average home sale price, representing a 63% increase since 2019.",
        "zh-TW": "平均房屋售價，自 2019 年以來上漲 63%。",
        es: "Precio promedio de venta, un aumento del 63% desde 2019.",
      },
      sourceUrl: "https://www.realtor.com/realestateandhomes-search/Middletown_NY",
    },
    {
      id: "dri-investment",
      label: {
        en: "DRI Investment",
        "zh-TW": "DRI 投資",
        es: "Inversión DRI",
      },
      value: 10000000,
      unit: "USD",
      description: {
        en: "Total Downtown Revitalization Initiative funding awarded by New York State.",
        "zh-TW": "紐約州頒發的市中心振興倡議總資金。",
        es: "Financiamiento total de la Iniciativa de Revitalización del Centro otorgado por el Estado de Nueva York.",
      },
      sourceUrl: "https://www.ny.gov/programs/downtown-revitalization-initiative",
    },
    {
      id: "campus-size",
      label: {
        en: "Community Campus Size",
        "zh-TW": "社區園區面積",
        es: "Tamaño del Campus Comunitario",
      },
      value: 270,
      unit: "acres",
      description: {
        en: "Total acreage of the planned community campus, including the 33 acres transferred by the state.",
        "zh-TW": "規劃中社區園區的總面積，包含州政府移轉的 33 英畝土地。",
        es: "Superficie total del campus comunitario planificado, incluyendo las 33 acres transferidas por el estado.",
      },
      sourceUrl: "https://www.ny.gov",
    },
    {
      id: "boa-grant",
      label: {
        en: "BOA Grant",
        "zh-TW": "BOA 獎助金",
        es: "Subvención BOA",
      },
      value: 250772,
      unit: "USD",
      description: {
        en: "Brownfield Opportunity Area grant awarded for redevelopment planning.",
        "zh-TW": "棕地機會區域獎助金，用於再開發規劃。",
        es: "Subvención del Área de Oportunidad de Terrenos Baldíos otorgada para planificación de redesarrollo.",
      },
      sourceUrl: "https://www.ny.gov",
    },
  ],
};

/** Resolve localized stats to the given language (falls back to English) */
export function resolveDemographicStats(lang: Language): DemographicStat[] {
  return localizedDemographics.stats.map((s) => ({
    id: s.id,
    label: s.label[lang] ?? s.label.en,
    value: s.value,
    unit: s.unit,
    description: s.description[lang] ?? s.description.en,
    sourceUrl: s.sourceUrl,
  }));
}

/** Resolve localized demographic profile to the given language (falls back to English) */
export function resolveDemographicProfile(lang: Language): DemographicProfile {
  return {
    city: localizedDemographics.city,
    county: localizedDemographics.county,
    state: localizedDemographics.state,
    zip: localizedDemographics.zip,
    area: localizedDemographics.area,
    stats: resolveDemographicStats(lang),
  };
}

/** Default English export for backward compatibility */
export const demographics: DemographicProfile = resolveDemographicProfile("en");
