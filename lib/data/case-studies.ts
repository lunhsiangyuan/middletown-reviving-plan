// Middletown Reviving Plan - Comparable Revitalization Case Studies

import type { Language } from "@/lib/i18n/language-context";

export interface LocalizedCaseStudy {
  id: string;
  name: string;
  state: string;
  population: number;
  keyStrategy: Record<Language, string>;
  outcomes: Record<Language, string[]>;
  lessonsForMiddletown: Record<Language, string>;
  sourceUrl: string;
}

/** Flat case study for components that expect plain strings */
export interface CaseStudy {
  id: string;
  name: string;
  state: string;
  population: number;
  keyStrategy: string;
  outcomes: string[];
  lessonsForMiddletown: string;
  sourceUrl: string;
}

/** Resolve localized case studies to the given language (falls back to English) */
export function resolveCaseStudies(lang: Language): CaseStudy[] {
  return localizedCaseStudies.map((cs) => ({
    id: cs.id,
    name: cs.name,
    state: cs.state,
    population: cs.population,
    keyStrategy: cs.keyStrategy[lang] ?? cs.keyStrategy.en,
    outcomes: cs.outcomes[lang] ?? cs.outcomes.en,
    lessonsForMiddletown:
      cs.lessonsForMiddletown[lang] ?? cs.lessonsForMiddletown.en,
    sourceUrl: cs.sourceUrl,
  }));
}

const localizedCaseStudies: LocalizedCaseStudy[] = [
  {
    id: "beacon-ny",
    name: "Beacon",
    state: "NY",
    population: 13769,
    keyStrategy: {
      en: "Art-focused revitalization anchored by the Dia:Beacon museum",
      "zh-TW": "以 Dia:Beacon 博物館為核心的藝術導向振興",
      es: "Revitalización centrada en el arte, anclada por el museo Dia:Beacon",
    },
    outcomes: {
      en: [
        "Dia:Beacon attracted 130,000+ annual visitors, catalyzing downtown transformation",
        "Main Street vacancy rates dropped from 30% to under 5%",
        "Property values increased significantly, attracting new restaurants and galleries",
        "Became a nationally recognized model for arts-driven small city revival",
      ],
      "zh-TW": [
        "Dia:Beacon 每年吸引超過 13 萬名遊客，催化市中心轉型",
        "Main Street 空置率從 30% 降至 5% 以下",
        "房產價值大幅上漲，吸引新餐廳和藝廊進駐",
        "成為全美公認的藝術驅動小城市復興典範",
      ],
      es: [
        "Dia:Beacon atrajo más de 130,000 visitantes anuales, catalizando la transformación del centro",
        "Las tasas de vacancia en Main Street bajaron del 30% a menos del 5%",
        "Los valores de las propiedades aumentaron significativamente, atrayendo nuevos restaurantes y galerías",
        "Se convirtió en un modelo reconocido a nivel nacional para la revitalización de pequeñas ciudades impulsada por el arte",
      ],
    },
    lessonsForMiddletown: {
      en: "A single cultural anchor institution can catalyze broader economic development. Middletown's growing arts and educational institutions (Fei Tian, Shen Yun) could serve a similar catalyst role.",
      "zh-TW":
        "單一文化標竿機構能催化更廣泛的經濟發展。Middletown 日益壯大的藝術和教育機構（飛天、神韻）可以扮演類似的催化角色。",
      es: "Una sola institución cultural ancla puede catalizar un desarrollo económico más amplio. Las crecientes instituciones artísticas y educativas de Middletown (Fei Tian, Shen Yun) podrían desempeñar un papel catalizador similar.",
    },
    sourceUrl: "https://www.cityofbeacon.org",
  },
  {
    id: "newburgh-ny",
    name: "Newburgh",
    state: "NY",
    population: 28856,
    keyStrategy: {
      en: "Waterfront revitalization combined with historic preservation",
      "zh-TW": "結合水岸振興與歷史保存",
      es: "Revitalización del frente acuático combinada con preservación histórica",
    },
    outcomes: {
      en: [
        "Waterfront redevelopment attracted new businesses and residential investment",
        "Historic district designation preserved architectural character",
        "Land bank program addressed vacant and abandoned properties",
        "Growing arts community emerged in affordable commercial spaces",
      ],
      "zh-TW": [
        "水岸再開發吸引新商業和住宅投資",
        "歷史街區認定保留了建築特色",
        "土地銀行計畫處理空置和廢棄房產",
        "在可負擔的商業空間中逐漸形成藝術社群",
      ],
      es: [
        "El redesarrollo del frente acuático atrajo nuevos negocios e inversión residencial",
        "La designación de distrito histórico preservó el carácter arquitectónico",
        "El programa de banco de tierras abordó propiedades vacantes y abandonadas",
        "Una creciente comunidad artística surgió en espacios comerciales asequibles",
      ],
    },
    lessonsForMiddletown: {
      en: "Historic preservation and strategic public land use can attract private investment. Middletown's 33-acre state land transfer and DRI facade program mirror Newburgh's approach to leveraging public assets.",
      "zh-TW":
        "歷史保存和策略性公有地利用可以吸引民間投資。Middletown 的 33 英畝州有土地移轉和 DRI 立面改善計畫，與 Newburgh 利用公共資產的做法如出一轍。",
      es: "La preservación histórica y el uso estratégico de tierras públicas pueden atraer inversión privada. La transferencia de 33 acres de terreno estatal de Middletown y el programa de fachadas DRI reflejan el enfoque de Newburgh para aprovechar activos públicos.",
    },
    sourceUrl: "https://www.cityofnewburgh-ny.gov",
  },
  {
    id: "hudson-ny",
    name: "Hudson",
    state: "NY",
    population: 6042,
    keyStrategy: {
      en: "Small city revival through arts, antiques, and creative economy",
      "zh-TW": "透過藝術、古董和創意經濟推動小城市復興",
      es: "Revitalización de pequeña ciudad a través del arte, antigüedades y economía creativa",
    },
    outcomes: {
      en: [
        "Warren Street transformed into a destination antiques and gallery corridor",
        "Tourism became a major economic driver for the city",
        "Young entrepreneurs and artists attracted by affordable real estate",
        "Restaurant and hospitality sector grew substantially",
      ],
      "zh-TW": [
        "Warren Street 轉型為古董與藝廊的目的地走廊",
        "觀光業成為城市主要經濟驅動力",
        "年輕創業者和藝術家被可負擔的房地產吸引",
        "餐飲和旅宿業大幅成長",
      ],
      es: [
        "Warren Street se transformó en un corredor destino de antigüedades y galerías",
        "El turismo se convirtió en un motor económico principal de la ciudad",
        "Jóvenes emprendedores y artistas atraídos por bienes raíces asequibles",
        "El sector de restaurantes y hospitalidad creció sustancialmente",
      ],
    },
    lessonsForMiddletown: {
      en: "A distinct identity and niche market can drive revival even in very small cities. Middletown's unique cultural assets (Chinese arts, integrative medicine) could define a similarly distinctive brand.",
      "zh-TW":
        "獨特的定位和利基市場即使在極小的城市也能驅動復興。Middletown 的獨特文化資產（中華藝術、中西醫整合）可以定義出類似的獨特品牌。",
      es: "Una identidad distintiva y un mercado nicho pueden impulsar la revitalización incluso en ciudades muy pequeñas. Los activos culturales únicos de Middletown (artes chinas, medicina integrativa) podrían definir una marca igualmente distintiva.",
    },
    sourceUrl: "https://www.cityofhudson.org",
  },
  {
    id: "kingston-ny",
    name: "Kingston",
    state: "NY",
    population: 23266,
    keyStrategy: {
      en: "Emerging tech hub with Uptown-Midtown connection strategy",
      "zh-TW": "新興科技中心，結合 Uptown-Midtown 連結策略",
      es: "Centro tecnológico emergente con estrategia de conexión Uptown-Midtown",
    },
    outcomes: {
      en: [
        "Tech companies and remote workers relocated from NYC metro area",
        "Uptown Stockade District revitalized with new businesses",
        "Public investment in connecting historic districts boosted foot traffic",
        "Named one of America's coolest small cities by multiple publications",
      ],
      "zh-TW": [
        "科技公司和遠距工作者從紐約都會區遷入",
        "Uptown Stockade 歷史區以新商家振興",
        "投資連接歷史街區的公共設施帶動人流",
        "被多家媒體評為美國最酷小城市之一",
      ],
      es: [
        "Empresas tecnológicas y trabajadores remotos se reubicaron desde el área metropolitana de NYC",
        "El Distrito Stockade de Uptown se revitalizó con nuevos negocios",
        "La inversión pública en conectar distritos históricos impulsó el tráfico peatonal",
        "Nombrada una de las pequeñas ciudades más cool de América por múltiples publicaciones",
      ],
    },
    lessonsForMiddletown: {
      en: "Connecting distinct districts (like Middletown's downtown and campus areas) and attracting tech investment (Gan Jing World) can create a virtuous cycle of growth and innovation.",
      "zh-TW":
        "連接不同的區域（如 Middletown 的市中心和園區區域）並吸引科技投資（乾淨世界），可以創造增長和創新的良性循環。",
      es: "Conectar distritos distintos (como el centro y las áreas del campus de Middletown) y atraer inversión tecnológica (Gan Jing World) puede crear un ciclo virtuoso de crecimiento e innovación.",
    },
    sourceUrl: "https://www.kingston-ny.gov",
  },
  {
    id: "poughkeepsie-ny",
    name: "Poughkeepsie",
    state: "NY",
    population: 30515,
    keyStrategy: {
      en: "Education-driven revitalization with iconic infrastructure (Walkway Over the Hudson)",
      "zh-TW":
        "以教育為驅動的振興，搭配標誌性基礎設施（Walkway Over the Hudson）",
      es: "Revitalización impulsada por la educación con infraestructura icónica (Walkway Over the Hudson)",
    },
    outcomes: {
      en: [
        "Walkway Over the Hudson attracted 500,000+ annual visitors",
        "Vassar College and Marist College partnerships strengthened downtown",
        "DRI funding supported streetscape and public space improvements",
        "Growing restaurant and entertainment scene on Main Street",
      ],
      "zh-TW": [
        "Walkway Over the Hudson 每年吸引超過 50 萬名遊客",
        "Vassar College 和 Marist College 的合作關係強化市中心發展",
        "DRI 資金支援街景和公共空間改善",
        "Main Street 的餐飲和娛樂場景持續成長",
      ],
      es: [
        "Walkway Over the Hudson atrajo más de 500,000 visitantes anuales",
        "Las asociaciones con Vassar College y Marist College fortalecieron el centro",
        "El financiamiento DRI apoyó mejoras de paisaje urbano y espacios públicos",
        "Creciente escena de restaurantes y entretenimiento en Main Street",
      ],
    },
    lessonsForMiddletown: {
      en: "Education institutions as anchor partners and signature public infrastructure investments drive sustained revitalization. Middletown's three higher-ed institutions and Heritage Trail parallel Poughkeepsie's assets.",
      "zh-TW":
        "教育機構作為核心合作夥伴，加上標誌性公共基礎設施投資，能持續推動振興。Middletown 的三所高等教育機構和 Heritage Trail 與 Poughkeepsie 的資產形成對應。",
      es: "Las instituciones educativas como socios ancla y las inversiones en infraestructura pública emblemática impulsan una revitalización sostenida. Las tres instituciones de educación superior de Middletown y el Heritage Trail son paralelos a los activos de Poughkeepsie.",
    },
    sourceUrl: "https://www.cityofpoughkeepsie.com",
  },
];
