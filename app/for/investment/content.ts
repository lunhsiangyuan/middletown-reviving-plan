import type { Language } from "@/lib/i18n/language-context";

const en = {
  hero: {
    badge: "Investment Strategy",
    title: "Investment Opportunities in Middletown",
    desc: "Discover a rapidly growing community with proven returns, strong public investment, and an expanding economic ecosystem. Middletown offers compelling opportunities across multiple sectors.",
  },
  marketSection: {
    title: "Market Overview",
    desc: "Key indicators show consistent growth and investment momentum in Middletown.",
    stats: [
      {
        label: "Avg. Home Price",
        value: "$395K",
        detail: "+63% since 2019",
      },
      {
        label: "Population",
        value: "30,345",
        detail: "Growing community",
      },
      {
        label: "Public Investment",
        value: "$10M+",
        detail: "DRI + BOA grants",
      },
      {
        label: "Facade Renovations",
        value: "17 buildings",
        detail: "Downtown core",
      },
    ],
  },
  investmentCasesSection: {
    title: "Existing Investment Cases",
    desc: "These businesses and organizations have already invested in Middletown's revival, establishing a proven track record of growth.",
    visitWebsite: "Visit Website",
    cases: [
      {
        name: "Gan Jing World",
        sector: "Technology",
        description:
          "Technology and clean-content video platform headquartered in Middletown, bringing tech jobs and innovation to the community.",
      },
      {
        name: "NTD Television",
        sector: "Media",
        description:
          "International multilingual television network providing independent news and cultural programming to a global audience.",
      },
      {
        name: "The Epoch Times",
        sector: "Media",
        description:
          "Multi-language international media organization with print and digital news operations based in the Middletown area.",
      },
      {
        name: "Sound of Hope Radio",
        sector: "Media",
        description:
          "Chinese-language radio network delivering news and cultural content, with broadcasting operations in the region.",
      },
      {
        name: "New Middletown Department Store",
        sector: "Retail",
        description:
          "$2.1M retail investment by Shen Yun, revitalizing a downtown commercial space into a full-service department store.",
      },
      {
        name: "Fei Tian College",
        sector: "Education",
        description:
          "NECHE-accredited college offering programs in Dance, Fine Arts, Data Science, Biomedical Sciences, Quantum Computing, and Biostatistics.",
      },
      {
        name: "Fei Tian Academy",
        sector: "Education",
        description:
          "K-12 arts school cultivating classical Chinese dance, music, and fine arts education for young students.",
      },
      {
        name: "Touro College of Osteopathic Medicine",
        sector: "Education",
        description:
          "Medical school training the next generation of physicians, creating a healthcare workforce pipeline for the region.",
      },
      {
        name: "Northern Medical Center",
        sector: "Healthcare",
        description:
          "Integrative medical center offering Primary Care, Chinese Medicine, Mental Health, TMS, Physical Therapy, and more.",
      },
      {
        name: "Taiwan Way",
        sector: "Food & Beverage",
        description:
          "Taiwanese restaurant bringing authentic Asian cuisine to downtown Middletown, enriching the local dining scene.",
      },
      {
        name: "Mister Croissant",
        sector: "Food & Beverage",
        description:
          "French bakery offering artisan pastries and fresh-baked bread, adding European flair to the commercial core.",
      },
      {
        name: "Monte Pastries",
        sector: "Food & Beverage",
        description:
          "European pastry shop featuring handcrafted cakes and desserts, contributing to downtown revitalization.",
      },
    ],
  },
  opportunitySection: {
    title: "Opportunity Sectors",
    desc: "Key sectors with the highest growth potential for new investment.",
    sectors: [
      {
        title: "Healthcare",
        description:
          "Growing demand for medical services with Touro COM training pipeline and Northern Medical Center expansion.",
      },
      {
        title: "Education",
        description:
          "Multiple colleges and training institutions creating demand for student housing, services, and technology.",
      },
      {
        title: "Technology",
        description:
          "Gan Jing World HQ establishes a tech presence; opportunity for supporting businesses and tech services.",
      },
      {
        title: "Food & Beverage",
        description:
          "Downtown revitalization creating prime restaurant and retail spaces with growing foot traffic.",
      },
      {
        title: "Real Estate",
        description:
          "63% home value appreciation since 2019; commercial spaces being renovated; 270-acre campus development planned.",
      },
      {
        title: "Media & Entertainment",
        description:
          "Established media organizations create an ecosystem for content production, broadcasting, and digital services.",
      },
    ],
  },
  strategicSection: {
    title: "Strategic Advantages",
    desc: "Why Middletown is uniquely positioned for investment success.",
    advantages: [
      {
        title: "90 Minutes from NYC",
        description:
          "Direct access to New York City via I-84, Route 17, and NJ Transit rail, providing metro-area connectivity at a fraction of the cost.",
      },
      {
        title: "Multi-Modal Transportation",
        description:
          "Interstate highways, commuter rail, and the Heritage Trail create excellent accessibility for residents and businesses.",
      },
      {
        title: "Trained Workforce",
        description:
          "Fei Tian College, Touro COM, and SUNY Orange provide a steady pipeline of educated professionals in healthcare, technology, and the arts.",
      },
      {
        title: "Government Support",
        description:
          "$10M+ in public investment through DRI, BOA grants, and NYS programs demonstrate strong government commitment to growth.",
      },
    ],
  },
  roiSection: {
    title: "ROI Analysis",
    desc: "Historical data demonstrates strong returns across multiple investment categories.",
    homeValue: {
      title: "Home Value Appreciation",
      year2019: "2019",
      price2019: "~$242K",
      year2025: "2025",
      price2025: "$395K",
      appreciation: "+63%",
      appreciationDetail: "Home value appreciation in 6 years",
    },
    publicPrivate: {
      title: "Public & Private Investment",
      items: [
        { label: "DRI Public Investment", value: "$10.0M" },
        { label: "Dept. Store (Shen Yun)", value: "$2.1M" },
        { label: "BOA Planning Grant", value: "$250K" },
        { label: "Facade Renovations (17 bldgs)", value: "$1.0M" },
      ],
      total: "$13.35M+",
      totalLabel: "Total documented investment",
    },
  },
  cta: {
    title: "Ready to Invest?",
    desc: "Schedule a consultation or download our investor deck to learn more about opportunities in Middletown.",
    scheduleConsultation: "Schedule Investment Consultation",
    downloadDeck: "Download Investor Deck",
  },
};

export type InvestmentContent = typeof en;

const zhTW: InvestmentContent = {
  hero: {
    badge: "投資策略",
    title: "Middletown 投資機會",
    desc: "探索一個快速成長的社區，擁有已驗證的回報、強勁的公共投資及持續擴展的經濟生態系統。Middletown 在多個領域提供引人注目的投資機會。",
  },
  marketSection: {
    title: "市場概覽",
    desc: "關鍵指標顯示 Middletown 持續成長與投資動能。",
    stats: [
      {
        label: "平均房價",
        value: "$395K",
        detail: "自 2019 年以來 +63%",
      },
      {
        label: "人口",
        value: "30,345",
        detail: "持續成長的社區",
      },
      {
        label: "公共投資",
        value: "$10M+",
        detail: "DRI + BOA 補助金",
      },
      {
        label: "外牆翻新",
        value: "17 棟建築",
        detail: "市中心核心區域",
      },
    ],
  },
  investmentCasesSection: {
    title: "現有投資案例",
    desc: "這些企業和組織已投資 Middletown 的復興，建立了成長的良好紀錄。",
    visitWebsite: "造訪網站",
    cases: [
      {
        name: "Gan Jing World",
        sector: "Technology",
        description:
          "總部位於 Middletown 的科技與乾淨內容影音平台，為社區帶來科技就業機會與創新。",
      },
      {
        name: "NTD Television",
        sector: "Media",
        description:
          "國際多語電視網絡，為全球觀眾提供獨立新聞與文化節目。",
      },
      {
        name: "The Epoch Times",
        sector: "Media",
        description:
          "多語國際媒體組織，於 Middletown 地區設有紙本及數位新聞運營。",
      },
      {
        name: "Sound of Hope Radio",
        sector: "Media",
        description:
          "中文廣播電台網絡，提供新聞與文化內容，在該地區設有廣播運營。",
      },
      {
        name: "New Middletown Department Store",
        sector: "Retail",
        description:
          "Shen Yun 投資 $2.1M 的零售項目，將市中心商業空間轉型為全方位百貨公司。",
      },
      {
        name: "Fei Tian College",
        sector: "Education",
        description:
          "NECHE 認證的學院，提供舞蹈、美術、資料科學、生物醫學、量子計算及生物統計等課程。",
      },
      {
        name: "Fei Tian Academy",
        sector: "Education",
        description:
          "K-12 藝術學校，培養年輕學生的中國古典舞、音樂及美術教育。",
      },
      {
        name: "Touro College of Osteopathic Medicine",
        sector: "Education",
        description:
          "培訓下一代醫師的醫學院，為該地區建立醫療人才供應鏈。",
      },
      {
        name: "Northern Medical Center",
        sector: "Healthcare",
        description:
          "整合醫學中心，提供家庭醫學、中醫、心理健康、TMS、物理治療等多項服務。",
      },
      {
        name: "Taiwan Way",
        sector: "Food & Beverage",
        description:
          "台灣餐廳，將正宗亞洲料理帶入 Middletown 市中心，豐富當地餐飲選擇。",
      },
      {
        name: "Mister Croissant",
        sector: "Food & Beverage",
        description:
          "法式烘焙坊，提供手工糕點與現烤麵包，為商業核心區增添歐式風情。",
      },
      {
        name: "Monte Pastries",
        sector: "Food & Beverage",
        description:
          "歐式糕點店，以手工蛋糕和甜點為特色，為市中心復興做出貢獻。",
      },
    ],
  },
  opportunitySection: {
    title: "機會產業",
    desc: "具有最高成長潛力的新投資關鍵產業。",
    sectors: [
      {
        title: "醫療保健",
        description:
          "隨著 Touro COM 人才培訓管道及 Northern Medical Center 擴建，醫療服務需求持續增長。",
      },
      {
        title: "教育",
        description:
          "多所大學和培訓機構創造了對學生住宿、服務和科技的需求。",
      },
      {
        title: "科技",
        description:
          "Gan Jing World 總部建立科技據點；支援企業和科技服務的商機應運而生。",
      },
      {
        title: "餐飲業",
        description:
          "市中心活化創造優質餐廳與零售空間，人流持續增加。",
      },
      {
        title: "不動產",
        description:
          "自 2019 年以來房價增值 63%；商業空間持續翻新；270 英畝校園開發計畫進行中。",
      },
      {
        title: "媒體與娛樂",
        description:
          "成熟的媒體組織建構了內容製作、廣播及數位服務的生態系統。",
      },
    ],
  },
  strategicSection: {
    title: "策略優勢",
    desc: "為何 Middletown 在投資方面具有獨特定位。",
    advantages: [
      {
        title: "距紐約市 90 分鐘",
        description:
          "透過 I-84、Route 17 及 NJ Transit 鐵路直達紐約市，以極低成本享受都會區連通性。",
      },
      {
        title: "多元交通方式",
        description:
          "州際公路、通勤鐵路及 Heritage Trail 為居民和企業提供優秀的可及性。",
      },
      {
        title: "訓練有素的勞動力",
        description:
          "Fei Tian College、Touro COM 和 SUNY Orange 提供醫療、科技和藝術領域的穩定專業人才。",
      },
      {
        title: "政府支持",
        description:
          "透過 DRI、BOA 補助金及紐約州計畫投入超過 $10M 公共投資，展現政府對成長的堅定承諾。",
      },
    ],
  },
  roiSection: {
    title: "投資報酬率分析",
    desc: "歷史數據顯示多個投資類別具有強勁回報。",
    homeValue: {
      title: "房產增值",
      year2019: "2019",
      price2019: "~$242K",
      year2025: "2025",
      price2025: "$395K",
      appreciation: "+63%",
      appreciationDetail: "6 年內房產增值幅度",
    },
    publicPrivate: {
      title: "公共與民間投資",
      items: [
        { label: "DRI 公共投資", value: "$10.0M" },
        { label: "百貨公司 (Shen Yun)", value: "$2.1M" },
        { label: "BOA 規劃補助金", value: "$250K" },
        { label: "外牆翻新（17 棟）", value: "$1.0M" },
      ],
      total: "$13.35M+",
      totalLabel: "已記錄的總投資額",
    },
  },
  cta: {
    title: "準備好投資了嗎？",
    desc: "預約諮詢或下載我們的投資簡報，了解更多 Middletown 的投資機會。",
    scheduleConsultation: "預約投資諮詢",
    downloadDeck: "下載投資簡報",
  },
};

const es: InvestmentContent = {
  hero: {
    badge: "Estrategia de Inversión",
    title: "Oportunidades de Inversión en Middletown",
    desc: "Descubra una comunidad en rápido crecimiento con retornos comprobados, fuerte inversión pública y un ecosistema económico en expansión. Middletown ofrece oportunidades atractivas en múltiples sectores.",
  },
  marketSection: {
    title: "Panorama del Mercado",
    desc: "Los indicadores clave muestran crecimiento consistente e impulso de inversión en Middletown.",
    stats: [
      {
        label: "Precio Prom. de Vivienda",
        value: "$395K",
        detail: "+63% desde 2019",
      },
      {
        label: "Población",
        value: "30,345",
        detail: "Comunidad en crecimiento",
      },
      {
        label: "Inversión Pública",
        value: "$10M+",
        detail: "Subvenciones DRI + BOA",
      },
      {
        label: "Renovaciones de Fachada",
        value: "17 edificios",
        detail: "Zona céntrica",
      },
    ],
  },
  investmentCasesSection: {
    title: "Casos de Inversión Existentes",
    desc: "Estas empresas y organizaciones ya han invertido en la revitalización de Middletown, estableciendo un historial comprobado de crecimiento.",
    visitWebsite: "Visitar Sitio Web",
    cases: [
      {
        name: "Gan Jing World",
        sector: "Technology",
        description:
          "Plataforma tecnológica de video y contenido limpio con sede en Middletown, generando empleos tecnológicos e innovación en la comunidad.",
      },
      {
        name: "NTD Television",
        sector: "Media",
        description:
          "Red televisiva internacional multilingüe que ofrece noticias independientes y programación cultural a una audiencia global.",
      },
      {
        name: "The Epoch Times",
        sector: "Media",
        description:
          "Organización mediática internacional multilingüe con operaciones de noticias impresas y digitales en el área de Middletown.",
      },
      {
        name: "Sound of Hope Radio",
        sector: "Media",
        description:
          "Red de radio en idioma chino que transmite noticias y contenido cultural, con operaciones de radiodifusión en la región.",
      },
      {
        name: "New Middletown Department Store",
        sector: "Retail",
        description:
          "Inversión minorista de $2.1M por Shen Yun, revitalizando un espacio comercial del centro en una tienda departamental de servicio completo.",
      },
      {
        name: "Fei Tian College",
        sector: "Education",
        description:
          "Universidad acreditada por NECHE que ofrece programas en Danza, Bellas Artes, Ciencia de Datos, Ciencias Biomédicas, Computación Cuántica y Bioestadística.",
      },
      {
        name: "Fei Tian Academy",
        sector: "Education",
        description:
          "Escuela de artes K-12 que cultiva la danza clásica china, música y educación en bellas artes para estudiantes jóvenes.",
      },
      {
        name: "Touro College of Osteopathic Medicine",
        sector: "Education",
        description:
          "Escuela de medicina que forma la próxima generación de médicos, creando una fuente de profesionales de salud para la región.",
      },
      {
        name: "Northern Medical Center",
        sector: "Healthcare",
        description:
          "Centro médico integrativo que ofrece Atención Primaria, Medicina China, Salud Mental, TMS, Terapia Física y más.",
      },
      {
        name: "Taiwan Way",
        sector: "Food & Beverage",
        description:
          "Restaurante taiwanés que trae cocina asiática auténtica al centro de Middletown, enriqueciendo la escena gastronómica local.",
      },
      {
        name: "Mister Croissant",
        sector: "Food & Beverage",
        description:
          "Panadería francesa que ofrece pastelería artesanal y pan recién horneado, añadiendo estilo europeo al núcleo comercial.",
      },
      {
        name: "Monte Pastries",
        sector: "Food & Beverage",
        description:
          "Pastelería europea con pasteles y postres artesanales, contribuyendo a la revitalización del centro.",
      },
    ],
  },
  opportunitySection: {
    title: "Sectores de Oportunidad",
    desc: "Sectores clave con el mayor potencial de crecimiento para nueva inversión.",
    sectors: [
      {
        title: "Salud",
        description:
          "Demanda creciente de servicios médicos con la fuente de formación de Touro COM y la expansión de Northern Medical Center.",
      },
      {
        title: "Educación",
        description:
          "Múltiples universidades e instituciones de formación que generan demanda de vivienda estudiantil, servicios y tecnología.",
      },
      {
        title: "Tecnología",
        description:
          "La sede de Gan Jing World establece presencia tecnológica; oportunidad para negocios de soporte y servicios tecnológicos.",
      },
      {
        title: "Alimentos y Bebidas",
        description:
          "La revitalización del centro crea espacios privilegiados para restaurantes y comercios con tráfico peatonal creciente.",
      },
      {
        title: "Bienes Raíces",
        description:
          "63% de apreciación del valor inmobiliario desde 2019; espacios comerciales en renovación; desarrollo de campus de 270 acres planificado.",
      },
      {
        title: "Medios y Entretenimiento",
        description:
          "Organizaciones mediáticas establecidas crean un ecosistema para producción de contenido, transmisión y servicios digitales.",
      },
    ],
  },
  strategicSection: {
    title: "Ventajas Estratégicas",
    desc: "Por qué Middletown tiene una posición única para el éxito en inversiones.",
    advantages: [
      {
        title: "A 90 Minutos de NYC",
        description:
          "Acceso directo a la Ciudad de Nueva York vía I-84, Route 17 y NJ Transit, ofreciendo conectividad metropolitana a una fracción del costo.",
      },
      {
        title: "Transporte Multimodal",
        description:
          "Autopistas interestatales, tren de cercanías y Heritage Trail crean excelente accesibilidad para residentes y empresas.",
      },
      {
        title: "Fuerza Laboral Capacitada",
        description:
          "Fei Tian College, Touro COM y SUNY Orange proporcionan un flujo constante de profesionales en salud, tecnología y artes.",
      },
      {
        title: "Apoyo Gubernamental",
        description:
          "Más de $10M en inversión pública a través de DRI, subvenciones BOA y programas de NYS demuestran un fuerte compromiso gubernamental con el crecimiento.",
      },
    ],
  },
  roiSection: {
    title: "Análisis de ROI",
    desc: "Los datos históricos demuestran fuertes retornos en múltiples categorías de inversión.",
    homeValue: {
      title: "Apreciación del Valor Inmobiliario",
      year2019: "2019",
      price2019: "~$242K",
      year2025: "2025",
      price2025: "$395K",
      appreciation: "+63%",
      appreciationDetail: "Apreciación del valor inmobiliario en 6 años",
    },
    publicPrivate: {
      title: "Inversión Pública y Privada",
      items: [
        { label: "Inversión Pública DRI", value: "$10.0M" },
        { label: "Tienda Departamental (Shen Yun)", value: "$2.1M" },
        { label: "Subvención de Planificación BOA", value: "$250K" },
        { label: "Renovaciones de Fachada (17 edif.)", value: "$1.0M" },
      ],
      total: "$13.35M+",
      totalLabel: "Total de inversión documentada",
    },
  },
  cta: {
    title: "¿Listo para Invertir?",
    desc: "Programe una consulta o descargue nuestra presentación para inversionistas para conocer más sobre las oportunidades en Middletown.",
    scheduleConsultation: "Programar Consulta de Inversión",
    downloadDeck: "Descargar Presentación para Inversionistas",
  },
};

export const content: Record<Language, InvestmentContent> = {
  en,
  "zh-TW": zhTW,
  es,
};
