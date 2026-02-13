import type { Language } from "@/lib/i18n/language-context";

const en = {
  header: {
    badge: "Revitalization",
    title: "$10M Downtown Revitalization",
    desc: "New York State's Downtown Revitalization Initiative is transforming Middletown's city center through five strategic projects.",
  },
  dri: {
    title: "DRI Five Major Projects",
    desc: "Middletown was selected as a recipient of New York State's Downtown Revitalization Initiative in 2016, receiving $10 million to fund five transformative downtown projects.",
    totalLabel: "Total DRI Investment in Downtown Middletown",
  },
  bid: {
    title: "Business Improvement District",
    descP1: "Established in 1992, the Middletown Business Improvement District (BID) has been a driving force behind downtown management and promotion for over three decades. The BID coordinates improvements, marketing, and events that keep the downtown area vibrant and attractive to businesses and visitors.",
    descP2: "The BID's long history of community stewardship laid the groundwork for the DRI award and continues to guide downtown development strategy.",
    statNumber: "30+",
    statLabel: "Years of Downtown Stewardship",
    statSince: "Since 1992",
  },
  heritage: {
    title: "Heritage Trail Connection",
    desc: "The Heritage Trail is a multi-use recreational path that connects communities across Orange County. The DRI-funded Rail Trail Commons project created a direct link between the Heritage Trail and downtown Middletown, turning the trail into an economic asset that brings foot traffic to local businesses.",
  },
  northStreet: {
    title: "North Street Revival",
    desc: "North Street, once the commercial heart of Middletown, is experiencing a renaissance. New businesses including bakeries, tea houses, coffee shops, and restaurants are filling formerly vacant storefronts, creating a walkable dining and shopping destination. The DRI facade improvement program renovated 17 buildings, preserving historic character while modernizing storefronts.",
  },
  economic: {
    title: "Economic Impact",
  },
};

export type RevitalizationContent = typeof en;

const zhTW: RevitalizationContent = {
  header: {
    badge: "城市再造",
    title: "$10M 市中心振興計畫",
    desc: "紐約州市中心振興倡議（DRI）正透過五項策略性專案，全面改造 Middletown 的城市中心。",
  },
  dri: {
    title: "DRI 五大專案",
    desc: "Middletown 於 2016 年獲選為紐約州市中心振興倡議的受惠城市，獲得 $10M 資金用於推動五項轉型性的市中心專案。",
    totalLabel: "DRI 對 Middletown 市中心的總投資額",
  },
  bid: {
    title: "商業改善區",
    descP1: "Middletown 商業改善區（BID）成立於 1992 年，三十多年來一直是市中心管理與推廣的核心推動力。BID 負責協調改善工程、行銷活動與各類活動，使市中心保持活力並吸引商家與訪客。",
    descP2: "BID 長期的社區管理歷史，為獲得 DRI 獎助奠定了基礎，並持續引導市中心的發展策略。",
    statNumber: "30+",
    statLabel: "年市中心管理經驗",
    statSince: "自 1992 年起",
  },
  heritage: {
    title: "Heritage Trail 連結",
    desc: "Heritage Trail 是一條連接 Orange County 各社區的多功能休閒步道。DRI 資助的 Rail Trail Commons 專案在 Heritage Trail 與 Middletown 市中心之間建立了直接連結，將步道轉化為帶動在地商家人潮的經濟資產。",
  },
  northStreet: {
    title: "North Street 復興",
    desc: "North Street 曾是 Middletown 的商業中心，如今正經歷一場復興。麵包店、茶館、咖啡館和餐廳等新商家進駐原本空置的店面，打造出一個適合步行的餐飲與購物目的地。DRI 外觀改善計畫翻新了 17 棟建築，在保留歷史風貌的同時實現店面現代化。",
  },
  economic: {
    title: "經濟影響",
  },
};

const es: RevitalizationContent = {
  header: {
    badge: "Revitalizacion",
    title: "$10M Revitalizacion del Centro",
    desc: "La Iniciativa de Revitalizacion del Centro de Nueva York esta transformando el centro de Middletown a traves de cinco proyectos estrategicos.",
  },
  dri: {
    title: "Cinco Proyectos Principales del DRI",
    desc: "Middletown fue seleccionada como receptora de la Iniciativa de Revitalizacion del Centro del Estado de Nueva York en 2016, recibiendo $10 millones para financiar cinco proyectos transformadores en el centro.",
    totalLabel: "Inversion Total del DRI en el Centro de Middletown",
  },
  bid: {
    title: "Distrito de Mejora Comercial",
    descP1: "Establecido en 1992, el Distrito de Mejora Comercial de Middletown (BID) ha sido una fuerza impulsora detras de la gestion y promocion del centro durante mas de tres decadas. El BID coordina mejoras, marketing y eventos que mantienen el area del centro vibrante y atractiva para negocios y visitantes.",
    descP2: "La larga historia de administracion comunitaria del BID sento las bases para el premio DRI y continua guiando la estrategia de desarrollo del centro.",
    statNumber: "30+",
    statLabel: "Anos de Administracion del Centro",
    statSince: "Desde 1992",
  },
  heritage: {
    title: "Conexion Heritage Trail",
    desc: "Heritage Trail es un sendero recreativo multiuso que conecta comunidades en todo Orange County. El proyecto Rail Trail Commons, financiado por el DRI, creo un enlace directo entre Heritage Trail y el centro de Middletown, convirtiendo el sendero en un activo economico que atrae trafico peatonal a los negocios locales.",
  },
  northStreet: {
    title: "Renacimiento de North Street",
    desc: "North Street, una vez el corazon comercial de Middletown, esta experimentando un renacimiento. Nuevos negocios incluyendo panaderias, casas de te, cafeterias y restaurantes estan llenando vitrinas antes vacantes, creando un destino transitable de gastronomia y compras. El programa de mejora de fachadas del DRI renovo 17 edificios, preservando el caracter historico mientras se modernizaban las vitrinas.",
  },
  economic: {
    title: "Impacto Economico",
  },
};

export const content: Record<Language, RevitalizationContent> = {
  en,
  "zh-TW": zhTW,
  es,
};
