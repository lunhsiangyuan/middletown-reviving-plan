import type { Language } from "@/lib/i18n/language-context";

const en = {
  header: {
    badge: "Community Campus",
    title: "The 270-Acre Community Campus",
    desc: "Transforming the former Middletown Psychiatric Center into a world-class campus for education, healthcare, and community development.",
  },
  history: {
    title: "A Historic Transformation",
    p1: "The 270-acre site was once home to the Middletown Psychiatric Center, a state-operated facility that served generations of New Yorkers. As the facility downsized, the campus became an opportunity for reimagining how this vast land could serve the community in new ways.",
    p2: "Today, the campus is evolving into a multi-use community hub that combines higher education, performing arts training, healthcare services, and open green spaces -- a model for adaptive reuse of institutional land.",
    locationLabel: "Location",
    locationValue: "Middletown, Orange County, New York",
    areaLabel: "Total Area",
    areaValue:
      "270 acres of campus land, including the 33 acres transferred by New York State",
  },
  boa: {
    title: "BOA Planning Progress",
    cards: [
      {
        heading: "$250,772",
        desc: "Brownfield Opportunity Area (BOA) grant awarded by New York State for comprehensive redevelopment planning of the campus area.",
      },
      {
        heading: "2029",
        desc: "Target completion year for the BOA Plan, setting the stage for full-scale development of the community campus and surrounding areas.",
      },
      {
        heading: "Pattern for Progress",
        desc: "Partnership with Hudson Valley Pattern for Progress to guide the planning process and ensure community-driven outcomes.",
      },
    ],
  },
  transfer: {
    title: "$1 State Transfer",
    badge: "2024 Milestone",
    p1: "In 2024, New York State completed a historic transfer of 33 acres of the former Middletown Psychiatric Center campus to the City of Middletown for a symbolic price of $1.",
    p2: "This transfer unlocks vast potential for community-driven development, enabling the city to plan mixed-use spaces incorporating education, healthcare, housing, and public amenities.",
    statNumber: "33",
    statLabel: "Acres Transferred",
    statDesc: "From New York State to City of Middletown",
  },
  expansion: {
    title: "Fei Tian College Expansion",
    desc: "Fei Tian College has set an ambitious goal of growing to 5,000 students, creating a major educational anchor on the campus. The college's connection to Dragon Springs provides a unique cultural foundation that blends Eastern arts with modern academic programs.",
  },
};

export type CampusContent = typeof en;

const zhTW: CampusContent = {
  header: {
    badge: "社區校園",
    title: "270 英畝社區校園",
    desc: "將前 Middletown 精神病院中心轉型為世界級的教育、醫療保健和社區發展校園。",
  },
  history: {
    title: "歷史性的轉型",
    p1: "這片 270 英畝的土地曾是 Middletown 精神病院中心的所在地，這是一個服務了數代紐約人的州立設施。隨著該設施的縮減，校園成為重新構想這片廣袤土地如何以新方式服務社區的契機。",
    p2: "如今，校園正在演變為一個多功能社區中心，結合了高等教育、表演藝術培訓、醫療保健服務和開放綠地——成為機構用地適應性再利用的典範。",
    locationLabel: "位置",
    locationValue: "紐約州 Orange 郡 Middletown",
    areaLabel: "總面積",
    areaValue: "270 英畝校園用地，包括紐約州移轉的 33 英畝",
  },
  boa: {
    title: "BOA 規劃進度",
    cards: [
      {
        heading: "$250,772",
        desc: "紐約州頒發的 Brownfield Opportunity Area (BOA) 補助金，用於校園區域的綜合再開發規劃。",
      },
      {
        heading: "2029",
        desc: "BOA 計畫的目標完成年份，為社區校園及周邊區域的全面開發奠定基礎。",
      },
      {
        heading: "Pattern for Progress",
        desc: "與 Hudson Valley Pattern for Progress 合作，引導規劃過程並確保以社區為導向的成果。",
      },
    ],
  },
  transfer: {
    title: "$1 州政府移轉",
    badge: "2024 年里程碑",
    p1: "2024 年，紐約州以象徵性的 $1 價格，完成了將前 Middletown 精神病院中心校園 33 英畝土地移轉給 Middletown 市的歷史性交易。",
    p2: "這項移轉釋放了社區驅動發展的巨大潛力，使該市能夠規劃融合教育、醫療保健、住宅和公共設施的混合用途空間。",
    statNumber: "33",
    statLabel: "英畝已移轉",
    statDesc: "從紐約州移轉至 Middletown 市",
  },
  expansion: {
    title: "Fei Tian College 擴展",
    desc: "Fei Tian College 設定了增長至 5,000 名學生的宏大目標，在校園內打造重要的教育核心。該學院與 Dragon Springs 的連結提供了獨特的文化基礎，將東方藝術與現代學術課程相融合。",
  },
};

const es: CampusContent = {
  header: {
    badge: "Campus Comunitario",
    title: "El Campus Comunitario de 270 Acres",
    desc: "Transformando el antiguo Centro Psiquiátrico de Middletown en un campus de clase mundial para educación, atención médica y desarrollo comunitario.",
  },
  history: {
    title: "Una Transformación Histórica",
    p1: "El sitio de 270 acres fue el hogar del Centro Psiquiátrico de Middletown, una instalación operada por el estado que sirvió a generaciones de neoyorquinos. A medida que la instalación se redujo, el campus se convirtió en una oportunidad para reimaginar cómo esta vasta tierra podría servir a la comunidad de nuevas maneras.",
    p2: "Hoy, el campus está evolucionando hacia un centro comunitario de uso múltiple que combina educación superior, formación en artes escénicas, servicios de salud y espacios verdes abiertos, un modelo de reutilización adaptativa de terrenos institucionales.",
    locationLabel: "Ubicación",
    locationValue: "Middletown, Condado de Orange, Nueva York",
    areaLabel: "Área Total",
    areaValue:
      "270 acres de terreno del campus, incluyendo las 33 acres transferidas por el Estado de Nueva York",
  },
  boa: {
    title: "Progreso de Planificación BOA",
    cards: [
      {
        heading: "$250,772",
        desc: "Subvención del Área de Oportunidad Brownfield (BOA) otorgada por el Estado de Nueva York para la planificación integral de reurbanización del área del campus.",
      },
      {
        heading: "2029",
        desc: "Año objetivo de finalización del Plan BOA, preparando el escenario para el desarrollo a gran escala del campus comunitario y las áreas circundantes.",
      },
      {
        heading: "Pattern for Progress",
        desc: "Asociación con Hudson Valley Pattern for Progress para guiar el proceso de planificación y garantizar resultados impulsados por la comunidad.",
      },
    ],
  },
  transfer: {
    title: "Transferencia Estatal de $1",
    badge: "Hito 2024",
    p1: "En 2024, el Estado de Nueva York completó una transferencia histórica de 33 acres del antiguo campus del Centro Psiquiátrico de Middletown a la Ciudad de Middletown por un precio simbólico de $1.",
    p2: "Esta transferencia desbloquea un gran potencial para el desarrollo impulsado por la comunidad, permitiendo a la ciudad planificar espacios de uso mixto que incorporen educación, atención médica, vivienda y servicios públicos.",
    statNumber: "33",
    statLabel: "Acres Transferidos",
    statDesc: "Del Estado de Nueva York a la Ciudad de Middletown",
  },
  expansion: {
    title: "Expansión de Fei Tian College",
    desc: "Fei Tian College se ha fijado el ambicioso objetivo de crecer a 5,000 estudiantes, creando un importante ancla educativa en el campus. La conexión de la universidad con Dragon Springs proporciona una base cultural única que fusiona las artes orientales con programas académicos modernos.",
  },
};

export const content: Record<Language, CampusContent> = {
  en,
  "zh-TW": zhTW,
  es,
};
