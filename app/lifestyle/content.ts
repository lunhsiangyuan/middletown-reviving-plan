import type { Language } from "@/lib/i18n/language-context";

const en = {
  header: {
    badge: "Business & Lifestyle",
    title: "Business & Lifestyle",
    desc: "A vibrant mix of dining, shopping, and cultural destinations that make downtown Middletown a place to explore and enjoy.",
  },
  dining: {
    title: "Dining",
    desc: "From Taiwanese comfort food to French pastries and craft beer, Middletown's dining scene reflects the community's rich cultural diversity.",
  },
  shopping: {
    title: "Shopping",
  },
  media: {
    title: "Media Organizations",
    desc: "Middletown is home to several major media organizations, adding a unique dimension to the city's economy and cultural identity.",
  },
  living: {
    title: "Living in Middletown",
    cards: [
      {
        title: "Affordable Living",
        desc: "Average home prices around $395K -- significantly more affordable than NYC metro, with home values up 63% since 2019 showing strong growth potential.",
      },
      {
        title: "Cultural Diversity",
        desc: "With over 40% Hispanic/Latino population and a growing Asian community, Middletown offers a richly diverse cultural experience reflected in its dining and community life.",
      },
      {
        title: "Growing Downtown",
        desc: "The $10M DRI investment, new businesses on North Street, and the Heritage Trail connection are creating a walkable, vibrant downtown core.",
      },
    ],
  },
};

export type LifestyleContent = typeof en;

const zhTW: LifestyleContent = {
  header: {
    badge: "商業與生活",
    title: "商業與生活",
    desc: "豐富多元的餐飲、購物與文化場所，讓 Middletown 市中心成為探索與享受的絕佳去處。",
  },
  dining: {
    title: "餐飲",
    desc: "從台灣家常料理到法式糕點與精釀啤酒，Middletown 的餐飲風貌反映了社區豐富的文化多樣性。",
  },
  shopping: {
    title: "購物",
  },
  media: {
    title: "媒體機構",
    desc: "Middletown 是多家重要媒體機構的所在地，為城市的經濟與文化特色增添了獨特的面向。",
  },
  living: {
    title: "在 Middletown 生活",
    cards: [
      {
        title: "親民的居住成本",
        desc: "平均房價約 $395K，遠低於紐約都會區，且自 2019 年以來房價上漲 63%，顯示強勁的增值潛力。",
      },
      {
        title: "文化多元性",
        desc: "超過 40% 的西語裔/拉丁裔人口以及持續成長的亞裔社區，讓 Middletown 擁有豐富多元的文化體驗，充分體現在餐飲與社區生活中。",
      },
      {
        title: "蓬勃發展的市中心",
        desc: "$10M DRI 投資、North Street 新開設的商家，以及 Heritage Trail 的連接，正打造一個適合步行且充滿活力的市中心核心區。",
      },
    ],
  },
};

const es: LifestyleContent = {
  header: {
    badge: "Negocios y Estilo de Vida",
    title: "Negocios y Estilo de Vida",
    desc: "Una vibrante mezcla de restaurantes, tiendas y destinos culturales que hacen del centro de Middletown un lugar para explorar y disfrutar.",
  },
  dining: {
    title: "Gastronomia",
    desc: "Desde comida taiwanesa reconfortante hasta pasteles franceses y cerveza artesanal, la escena gastronómica de Middletown refleja la rica diversidad cultural de la comunidad.",
  },
  shopping: {
    title: "Compras",
  },
  media: {
    title: "Organizaciones de Medios",
    desc: "Middletown alberga varias organizaciones de medios importantes, agregando una dimensión única a la economía y la identidad cultural de la ciudad.",
  },
  living: {
    title: "Vivir en Middletown",
    cards: [
      {
        title: "Vida Asequible",
        desc: "Precios promedio de vivienda alrededor de $395K, significativamente más asequibles que el área metropolitana de NYC, con valores de vivienda que aumentaron un 63% desde 2019, mostrando un fuerte potencial de crecimiento.",
      },
      {
        title: "Diversidad Cultural",
        desc: "Con más del 40% de población hispana/latina y una creciente comunidad asiática, Middletown ofrece una experiencia cultural ricamente diversa reflejada en su gastronomía y vida comunitaria.",
      },
      {
        title: "Centro en Crecimiento",
        desc: "La inversión de $10M del DRI, nuevos negocios en North Street y la conexión con Heritage Trail están creando un centro urbano transitable y vibrante.",
      },
    ],
  },
};

export const content: Record<Language, LifestyleContent> = {
  en,
  "zh-TW": zhTW,
  es,
};
