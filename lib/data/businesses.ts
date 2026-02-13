// Middletown Reviving Plan - Local Businesses Data

import type { Language } from "@/lib/i18n/language-context";

export type BusinessType =
  | "restaurant"
  | "shop"
  | "media"
  | "brewery"
  | "bakery"
  | "cafe"
  | "department-store"
  | "art";

export interface LocalizedBusiness {
  id: string;
  name: string;
  type: BusinessType;
  address?: string;
  description: Record<Language, string>;
  specialties: Record<Language, string[]>;
  website?: string;
  sourceUrl: string;
}

/** Flat business for components that expect plain strings */
export interface Business {
  id: string;
  name: string;
  type: BusinessType;
  address?: string;
  description: string;
  specialties: string[];
  website?: string;
  sourceUrl: string;
}

/** Resolve localized businesses to the given language (falls back to English) */
export function resolveBusinesses(lang: Language): Business[] {
  return localizedBusinesses.map((b) => ({
    ...b,
    description: b.description[lang] ?? b.description.en,
    specialties: b.specialties[lang] ?? b.specialties.en,
  }));
}

export const localizedBusinesses: LocalizedBusiness[] = [
  {
    id: "taiwan-way",
    name: "Taiwan Way",
    type: "restaurant",
    address: "26 South St, Middletown, NY 10940",
    description: {
      en: "Authentic Taiwanese eatery bringing traditional flavors to downtown Middletown, popular for bubble tea and classic Taiwanese comfort food.",
      "zh-TW":
        "正宗台灣小吃店，將傳統風味帶入 Middletown 市中心，以珍珠奶茶和經典台灣小吃著稱。",
      es: "Restaurante taiwanés auténtico que trae sabores tradicionales al centro de Middletown, popular por su té de burbujas y comida reconfortante taiwanesa clásica.",
    },
    specialties: {
      en: ["Bubble Tea", "Beef Noodle Soup", "Braised Pork Rice"],
      "zh-TW": ["珍珠奶茶", "牛肉麵", "滷肉飯"],
      es: ["Té de Burbujas", "Sopa de Fideos con Res", "Arroz con Cerdo Estofado"],
    },
    sourceUrl: "https://www.middletownbid.com",
  },
  {
    id: "mister-croissant",
    name: "Mister Croissant",
    type: "bakery",
    address: "28 North St, Middletown, NY 10940",
    description: {
      en: "French-style bakery offering freshly baked croissants, pastries, and artisan breads in the heart of downtown.",
      "zh-TW":
        "法式烘焙坊，在市中心供應新鮮出爐的可頌、糕點和手工麵包。",
      es: "Panadería de estilo francés que ofrece croissants recién horneados, pasteles y panes artesanales en el corazón del centro.",
    },
    specialties: {
      en: ["Croissants", "French Pastries", "Artisan Breads"],
      "zh-TW": ["可頌", "法式糕點", "手工麵包"],
      es: ["Croissants", "Repostería Francesa", "Panes Artesanales"],
    },
    sourceUrl: "https://www.middletownbid.com",
  },
  {
    id: "mon-tea",
    name: "Mon Tea",
    type: "cafe",
    address: "102 North St, Middletown, NY 10940",
    description: {
      en: "Tea house and dessert shop specializing in premium teas and Asian-inspired desserts.",
      "zh-TW": "茶飲與甜品店，專營精選茶品和亞洲風格甜點。",
      es: "Casa de té y postres especializada en tés premium y postres de inspiración asiática.",
    },
    specialties: {
      en: ["Premium Teas", "Asian Desserts", "Specialty Drinks"],
      "zh-TW": ["精選茶品", "亞洲甜點", "特調飲品"],
      es: ["Tés Premium", "Postres Asiáticos", "Bebidas Especiales"],
    },
    sourceUrl: "https://www.middletownbid.com",
  },
  {
    id: "oak-and-reed",
    name: "Oak & Reed",
    type: "restaurant",
    address: "45-53 North St, Middletown, NY 10940",
    description: {
      en: "American restaurant offering a refined dining experience with locally sourced ingredients and craft cocktails.",
      "zh-TW":
        "美式餐廳，提供精緻的用餐體驗，使用在地食材搭配精釀雞尾酒。",
      es: "Restaurante americano que ofrece una experiencia gastronómica refinada con ingredientes locales y cócteles artesanales.",
    },
    specialties: {
      en: ["American Cuisine", "Craft Cocktails", "Locally Sourced Ingredients"],
      "zh-TW": ["美式料理", "精釀雞尾酒", "在地食材"],
      es: ["Cocina Americana", "Cócteles Artesanales", "Ingredientes Locales"],
    },
    sourceUrl: "https://www.middletownbid.com",
  },
  {
    id: "dayes-coffee",
    name: "Daye's Coffee",
    type: "cafe",
    address: "32-34 North St, Middletown, NY 10940",
    description: {
      en: "Specialty coffee shop known for its unique enzyme coffee and cozy atmosphere in downtown Middletown.",
      "zh-TW":
        "特色咖啡館，以獨特的酵素咖啡和 Middletown 市中心的溫馨氛圍聞名。",
      es: "Cafetería especializada conocida por su café enzimático único y su ambiente acogedor en el centro de Middletown.",
    },
    specialties: {
      en: ["Enzyme Coffee", "Specialty Brews", "Light Bites"],
      "zh-TW": ["酵素咖啡", "特調咖啡", "輕食"],
      es: ["Café Enzimático", "Preparaciones Especiales", "Bocadillos"],
    },
    sourceUrl: "https://www.middletownbid.com",
  },
  {
    id: "clemson-bros-brewery",
    name: "Clemson Bros. Brewery",
    type: "brewery",
    description: {
      en: "Local craft brewery producing a rotating selection of beers, contributing to Middletown's growing food and beverage scene.",
      "zh-TW":
        "在地精釀啤酒廠，推出各式輪替精釀啤酒，為 Middletown 蓬勃發展的餐飲業注入活力。",
      es: "Cervecería artesanal local que produce una selección rotativa de cervezas, contribuyendo a la creciente escena gastronómica de Middletown.",
    },
    specialties: {
      en: ["Craft Beer", "IPAs", "Seasonal Brews"],
      "zh-TW": ["精釀啤酒", "IPA", "季節限定"],
      es: ["Cerveza Artesanal", "IPAs", "Cervezas de Temporada"],
    },
    sourceUrl: "https://www.middletownbid.com",
  },
  {
    id: "new-middletown-dept-store",
    name: "New Middletown Department Store",
    type: "department-store",
    address: "Middletown, NY 10940",
    description: {
      en: "Major retail investment of $2.1M by Shen Yun, revitalizing a downtown commercial space into a full-service department store.",
      "zh-TW":
        "神韻投資 210 萬美元的大型零售項目，將市中心商業空間活化為全方位百貨商場。",
      es: "Importante inversión comercial de $2.1M por Shen Yun, revitalizando un espacio comercial del centro en una tienda departamental de servicio completo.",
    },
    specialties: {
      en: ["Retail", "Fashion", "Home Goods"],
      "zh-TW": ["零售", "時尚", "居家用品"],
      es: ["Comercio", "Moda", "Artículos para el Hogar"],
    },
    sourceUrl: "https://www.middletownbid.com",
  },
  {
    id: "artvicki-creations",
    name: "ArtVicki Creations",
    type: "art",
    address: "10 North St, Middletown, NY 10940",
    description: {
      en: "Art gift shop featuring unique handcrafted items and artistic creations from local and regional artists.",
      "zh-TW":
        "藝術禮品店，展售來自在地及區域藝術家的獨特手工創作。",
      es: "Tienda de regalos artísticos con artículos únicos hechos a mano y creaciones artísticas de artistas locales y regionales.",
    },
    specialties: {
      en: ["Art Gifts", "Handcrafted Items", "Local Art"],
      "zh-TW": ["藝術禮品", "手工製品", "在地藝術"],
      es: ["Regalos Artísticos", "Artículos Artesanales", "Arte Local"],
    },
    sourceUrl: "https://www.middletownbid.com",
  },
  {
    id: "monte-pastries",
    name: "Monte Pastries",
    type: "bakery",
    address: "North St, Middletown, NY 10940",
    description: {
      en: "Artisan pastry shop bringing European-style baked goods to downtown Middletown as part of the North Street revitalization.",
      "zh-TW":
        "手工糕點店，將歐式烘焙帶入 Middletown 市中心，是 North Street 振興計畫的一部分。",
      es: "Pastelería artesanal que trae productos horneados de estilo europeo al centro de Middletown como parte de la revitalización de North Street.",
    },
    specialties: {
      en: ["European Pastries", "Cakes", "Artisan Baked Goods"],
      "zh-TW": ["歐式糕點", "蛋糕", "手工烘焙"],
      es: ["Repostería Europea", "Pasteles", "Productos Artesanales"],
    },
    sourceUrl: "https://www.middletownbid.com",
  },
];
