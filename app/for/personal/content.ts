import type { Language } from "@/lib/i18n/language-context";

const en = {
  hero: {
    badge: "Personal Guide",
    title: "Your Guide to Middletown",
    desc: "Everything you need to know about living, working, and thriving in Middletown, NY -- a growing community with small-town charm and big-city access.",
  },
  whyMiddletown: {
    title: "Why Middletown?",
    items: [
      {
        title: "Small-Town Charm",
        description:
          "Historic downtown, local shops, and a walkable Heritage Trail offer a peaceful yet vibrant lifestyle just 90 minutes from NYC.",
      },
      {
        title: "Growing Community",
        description:
          "A diverse, welcoming population of 30,345+ residents with strong community events and cultural organizations.",
      },
      {
        title: "Affordable Living",
        description:
          "Average home prices at $395K offer significant savings compared to NYC metro areas while maintaining quality of life.",
      },
    ],
  },
  retirement: {
    title: "Ideal for Retirement & Quality Living",
    desc: "Middletown offers a perfect blend of peaceful living and comprehensive services, making it an ideal destination for retirees and families seeking a high quality of life.",
    cards: [
      {
        title: "Retirement Haven",
        description:
          "Affordable housing ($395K avg vs $700K+ NYC suburbs), low property taxes compared to NJ/CT, walkable downtown, and a tight-knit community. Enjoy a serene, unhurried pace of life just 90 minutes from world-class city amenities.",
      },
      {
        title: "Diverse Cuisine",
        description:
          "A thriving food scene with healthy dining options: Taiwan Way (Taiwanese comfort food), Mister Croissant (French artisan bakery), Monte Pastries, Mon Tea (premium teas), Daye\u2019s Coffee (enzyme coffee), Oak & Reed, and Clemson Bros. Brewery. Fresh, diverse, and affordable.",
      },
      {
        title: "Four-Season Climate",
        description:
          "Enjoy all four seasons in the Hudson Valley: vibrant fall foliage, snowy winters ideal for nearby ski resorts, blooming springs, and warm summers. Average temps range from 25\u00b0F (winter) to 82\u00b0F (summer). Clean air and scenic natural surroundings year-round.",
      },
      {
        title: "Comprehensive Healthcare",
        description:
          "Multiple healthcare providers at your doorstep: Northern Medical Center (integrative Western + Chinese medicine, TMS, mental health), Garnet Health Medical Center (full-service hospital), Touro COM (medical training pipeline). Medicare and Medicaid widely accepted.",
      },
    ],
  },
  costOfLiving: {
    title: "Cost of Living",
    desc: "Middletown offers an affordable alternative to New York City while remaining well-connected to the metro area.",
    stats: [
      { label: "Avg. Home Price", value: "$395K", change: "+63% since 2019" },
      { label: "Median Household Income", value: "$52K", change: "" },
      { label: "Distance to NYC", value: "~90 min", change: "via I-84 / NJ Transit" },
      { label: "City Area", value: "5.2 sq mi", change: "" },
    ],
  },
  community: {
    title: "Community & Culture",
    desc: "Middletown is a culturally diverse community where heritage meets modern renewal.",
    cards: [
      {
        title: "Diverse Population",
        description:
          "Over 40% of the population identifies as Hispanic or Latino, creating a rich multicultural tapestry with diverse cuisines, festivals, and community traditions.",
      },
      {
        title: "Heritage Trail & Recreation",
        description:
          "The Heritage Trail provides miles of scenic walking and cycling paths. Downtown features Erie Way Park, Rail Trail Commons, and beautifully restored streetscapes from the $10M DRI investment.",
      },
    ],
  },
  employment: {
    title: "Employment & Economy",
    desc: "Key growth sectors are expanding employment opportunities in Middletown.",
    sectors: [
      { sector: "Healthcare", companies: "Garnet Health, Northern Medical Center, Touro COM" },
      { sector: "Education", companies: "Fei Tian College, SUNY Orange, Fei Tian Academy" },
      { sector: "Technology", companies: "Gan Jing World (HQ)" },
      { sector: "Media", companies: "NTD Television, The Epoch Times, Sound of Hope Radio" },
    ],
  },
  gettingAround: {
    title: "Getting Around",
    desc: "Multiple transportation options connect Middletown to the broader region.",
    options: [
      {
        title: "NJ Transit / Metro-North",
        description: "Rail connections to NYC Penn Station and Hoboken via Port Jervis Line.",
      },
      {
        title: "Interstate Access",
        description: "I-84 and Route 17 provide direct highway access to NYC, NJ, CT, and PA.",
      },
      {
        title: "Local Transit",
        description:
          "Middletown-area bus routes and the downtown Heritage Trail for pedestrians and cyclists.",
      },
    ],
  },
  cta: {
    title: "Ready to Explore?",
    desc: "Plan your visit or connect with the Middletown community today.",
    primaryButton: "Plan Your Visit",
    secondaryButton: "Connect with Community",
  },
};

export type PersonalContent = typeof en;

const zhTW: PersonalContent = {
  hero: {
    badge: "個人指南",
    title: "您的 Middletown 指南",
    desc: "關於在 Middletown, NY 生活、工作和發展的一切——一個兼具小鎮魅力與大城市便利的成長中社區。",
  },
  whyMiddletown: {
    title: "為什麼選擇 Middletown？",
    items: [
      {
        title: "小鎮魅力",
        description:
          "歷史悠久的市中心、在地商店，以及適合步行的 Heritage Trail，提供距離紐約市僅 90 分鐘車程的寧靜而充滿活力的生活方式。",
      },
      {
        title: "成長中的社區",
        description:
          "擁有超過 30,345 位居民的多元化、友善社區，舉辦豐富的社區活動和文化組織。",
      },
      {
        title: "可負擔的生活",
        description:
          "平均房價 $395K，相比紐約都會區可節省大量費用，同時維持優質的生活品質。",
      },
    ],
  },
  retirement: {
    title: "退休與優質生活的理想選擇",
    desc: "Middletown 提供寧靜生活與完善服務的完美結合，是退休人士和追求高品質生活的家庭的理想目的地。",
    cards: [
      {
        title: "退休天堂",
        description:
          "可負擔的住房（平均 $395K 對比紐約郊區 $700K+），相比 NJ/CT 較低的房產稅，步行可達的市中心，以及緊密的社區關係。距離世界級城市設施僅 90 分鐘，享受寧靜悠閒的生活節奏。",
      },
      {
        title: "多元美食",
        description:
          "蓬勃發展的美食場景提供健康的用餐選擇：Taiwan Way（台灣家常美食）、Mister Croissant（法式手工烘焙）、Monte Pastries、Mon Tea（精品茶飲）、Daye\u2019s Coffee（酵素咖啡）、Oak & Reed 和 Clemson Bros. Brewery。新鮮、多元且平價。",
      },
      {
        title: "四季分明的氣候",
        description:
          "在 Hudson Valley 享受四季之美：絢爛的秋葉、適合附近滑雪場的雪季冬天、繁花盛開的春天和溫暖的夏天。平均氣溫從 25\u00b0F（冬季）到 82\u00b0F（夏季）。全年清新空氣和優美自然環境。",
      },
      {
        title: "完善的醫療照護",
        description:
          "多家醫療機構近在咫尺：Northern Medical Center（中西醫結合、TMS、心理健康）、Garnet Health Medical Center（全方位醫院）、Touro COM（醫學教育體系）。廣泛接受 Medicare 和 Medicaid。",
      },
    ],
  },
  costOfLiving: {
    title: "生活成本",
    desc: "Middletown 提供相較紐約市更為實惠的替代選擇，同時保持與都會區的良好連結。",
    stats: [
      { label: "平均房價", value: "$395K", change: "自 2019 年以來 +63%" },
      { label: "家庭收入中位數", value: "$52K", change: "" },
      { label: "至紐約市距離", value: "~90 分鐘", change: "經 I-84 / NJ Transit" },
      { label: "城市面積", value: "5.2 sq mi", change: "" },
    ],
  },
  community: {
    title: "社區與文化",
    desc: "Middletown 是一個文化多元的社區，傳統與現代復興在此交融。",
    cards: [
      {
        title: "多元人口",
        description:
          "超過 40% 的人口為西班牙裔或拉丁裔，形成豐富的多元文化，包含多樣的美食、節慶和社區傳統。",
      },
      {
        title: "Heritage Trail 與休閒設施",
        description:
          "Heritage Trail 提供數英里的景觀步行和自行車道。市中心設有 Erie Way Park、Rail Trail Commons，以及透過 $10M DRI 投資精心修復的街景。",
      },
    ],
  },
  employment: {
    title: "就業與經濟",
    desc: "關鍵成長產業正在擴大 Middletown 的就業機會。",
    sectors: [
      { sector: "醫療保健", companies: "Garnet Health, Northern Medical Center, Touro COM" },
      { sector: "教育", companies: "Fei Tian College, SUNY Orange, Fei Tian Academy" },
      { sector: "科技", companies: "Gan Jing World (HQ)" },
      { sector: "媒體", companies: "NTD Television, The Epoch Times, Sound of Hope Radio" },
    ],
  },
  gettingAround: {
    title: "交通方式",
    desc: "多種交通選擇將 Middletown 與更廣泛的區域連結。",
    options: [
      {
        title: "NJ Transit / Metro-North",
        description: "透過 Port Jervis 線連接紐約市 Penn Station 和 Hoboken 的鐵路。",
      },
      {
        title: "州際公路",
        description: "I-84 和 Route 17 提供直達 NYC、NJ、CT 和 PA 的高速公路。",
      },
      {
        title: "地方交通",
        description:
          "Middletown 地區公車路線和市中心 Heritage Trail 供行人和自行車使用。",
      },
    ],
  },
  cta: {
    title: "準備好探索了嗎？",
    desc: "立即計劃您的造訪或與 Middletown 社區聯繫。",
    primaryButton: "規劃您的造訪",
    secondaryButton: "聯繫社區",
  },
};

const es: PersonalContent = {
  hero: {
    badge: "Guía Personal",
    title: "Tu Guía de Middletown",
    desc: "Todo lo que necesitas saber sobre vivir, trabajar y prosperar en Middletown, NY -- una comunidad en crecimiento con encanto de pueblo pequeño y acceso a la gran ciudad.",
  },
  whyMiddletown: {
    title: "¿Por qué Middletown?",
    items: [
      {
        title: "Encanto de Pueblo Pequeño",
        description:
          "Centro histórico, tiendas locales y el sendero Heritage Trail ofrecen un estilo de vida tranquilo pero vibrante a solo 90 minutos de NYC.",
      },
      {
        title: "Comunidad en Crecimiento",
        description:
          "Una población diversa y acogedora de más de 30,345 residentes con eventos comunitarios sólidos y organizaciones culturales.",
      },
      {
        title: "Vida Asequible",
        description:
          "Precios promedio de vivienda de $395K ofrecen ahorros significativos comparados con las áreas metropolitanas de NYC manteniendo la calidad de vida.",
      },
    ],
  },
  retirement: {
    title: "Ideal para la Jubilación y Vida de Calidad",
    desc: "Middletown ofrece una mezcla perfecta de vida tranquila y servicios integrales, convirtiéndolo en un destino ideal para jubilados y familias que buscan alta calidad de vida.",
    cards: [
      {
        title: "Refugio para Jubilados",
        description:
          "Vivienda asequible ($395K promedio vs $700K+ suburbios de NYC), impuestos de propiedad bajos comparados con NJ/CT, centro caminable y una comunidad unida. Disfruta de un ritmo de vida sereno a solo 90 minutos de servicios de clase mundial.",
      },
      {
        title: "Cocina Diversa",
        description:
          "Una escena gastronómica próspera con opciones saludables: Taiwan Way (comida taiwanesa), Mister Croissant (panadería artesanal francesa), Monte Pastries, Mon Tea (tés premium), Daye\u2019s Coffee (café enzimático), Oak & Reed y Clemson Bros. Brewery. Fresca, diversa y asequible.",
      },
      {
        title: "Clima de Cuatro Estaciones",
        description:
          "Disfruta las cuatro estaciones en el Hudson Valley: follaje otoñal vibrante, inviernos nevados ideales para estaciones de esquí cercanas, primaveras florecientes y veranos cálidos. Temperaturas promedio de 25\u00b0F (invierno) a 82\u00b0F (verano). Aire limpio y entornos naturales escénicos todo el año.",
      },
      {
        title: "Atención Médica Integral",
        description:
          "Múltiples proveedores de salud a tu puerta: Northern Medical Center (medicina integrativa occidental + china, TMS, salud mental), Garnet Health Medical Center (hospital de servicio completo), Touro COM (formación médica). Medicare y Medicaid ampliamente aceptados.",
      },
    ],
  },
  costOfLiving: {
    title: "Costo de Vida",
    desc: "Middletown ofrece una alternativa asequible a la ciudad de Nueva York mientras permanece bien conectado al área metropolitana.",
    stats: [
      { label: "Precio Prom. de Vivienda", value: "$395K", change: "+63% desde 2019" },
      { label: "Ingreso Familiar Mediano", value: "$52K", change: "" },
      { label: "Distancia a NYC", value: "~90 min", change: "vía I-84 / NJ Transit" },
      { label: "Área de la Ciudad", value: "5.2 sq mi", change: "" },
    ],
  },
  community: {
    title: "Comunidad y Cultura",
    desc: "Middletown es una comunidad culturalmente diversa donde la herencia se encuentra con la renovación moderna.",
    cards: [
      {
        title: "Población Diversa",
        description:
          "Más del 40% de la población se identifica como hispana o latina, creando un rico tapiz multicultural con cocinas diversas, festivales y tradiciones comunitarias.",
      },
      {
        title: "Heritage Trail y Recreación",
        description:
          "El Heritage Trail ofrece millas de senderos panorámicos para caminar y andar en bicicleta. El centro cuenta con Erie Way Park, Rail Trail Commons y calles bellamente restauradas gracias a la inversión DRI de $10M.",
      },
    ],
  },
  employment: {
    title: "Empleo y Economía",
    desc: "Sectores clave de crecimiento están expandiendo las oportunidades de empleo en Middletown.",
    sectors: [
      { sector: "Salud", companies: "Garnet Health, Northern Medical Center, Touro COM" },
      { sector: "Educación", companies: "Fei Tian College, SUNY Orange, Fei Tian Academy" },
      { sector: "Tecnología", companies: "Gan Jing World (HQ)" },
      { sector: "Medios", companies: "NTD Television, The Epoch Times, Sound of Hope Radio" },
    ],
  },
  gettingAround: {
    title: "Cómo Moverse",
    desc: "Múltiples opciones de transporte conectan Middletown con la región más amplia.",
    options: [
      {
        title: "NJ Transit / Metro-North",
        description: "Conexiones ferroviarias a NYC Penn Station y Hoboken vía la línea Port Jervis.",
      },
      {
        title: "Acceso Interestatal",
        description: "I-84 y Route 17 proporcionan acceso directo por autopista a NYC, NJ, CT y PA.",
      },
      {
        title: "Transporte Local",
        description:
          "Rutas de autobús del área de Middletown y el Heritage Trail del centro para peatones y ciclistas.",
      },
    ],
  },
  cta: {
    title: "¿Listo para Explorar?",
    desc: "Planifica tu visita o conéctate con la comunidad de Middletown hoy.",
    primaryButton: "Planifica tu Visita",
    secondaryButton: "Conecta con la Comunidad",
  },
};

export const content: Record<Language, PersonalContent> = {
  en,
  "zh-TW": zhTW,
  es,
};
