import type { Language } from "@/lib/i18n/language-context";

const en = {
  hero: {
    badge: "Academic Partnerships",
    title: "Academic Partnership Opportunities",
    desc: "Middletown is home to a growing academic ecosystem. Explore how your institution can partner with local colleges, medical schools, and research programs.",
  },
  partnerInstitutions: {
    title: "Partner Institutions",
    desc: "Four key academic institutions form the core of Middletown\u2019s education ecosystem.",
    visitWebsite: "Visit Website",
  },
  exchangePrograms: {
    title: "Exchange Programs",
    desc: "Potential student and faculty exchange opportunities across partner institutions.",
    items: [
      {
        title: "Student Exchange",
        description:
          "Semester-long programs allowing students to experience diverse academic environments across partner institutions.",
      },
      {
        title: "Faculty Collaboration",
        description:
          "Joint research initiatives and visiting professor programs to foster cross-institutional knowledge sharing.",
      },
      {
        title: "Summer Intensives",
        description:
          "Short-term immersive programs in performing arts, biomedical sciences, and data analytics.",
      },
    ],
  },
  researchCollaboration: {
    title: "Research Collaboration",
    desc: "Cross-institutional research opportunities spanning multiple disciplines.",
    areas: [
      {
        area: "Biomedical Sciences",
        description:
          "Fei Tian College\u2019s biomedical sciences program combined with Touro COM\u2019s medical research capabilities create opportunities for translational research.",
      },
      {
        area: "Data Science & Computing",
        description:
          "Programs in data science, quantum computing, and biostatistics offer cross-disciplinary research in healthcare analytics and AI applications.",
      },
      {
        area: "Community Health",
        description:
          "Community-based health research leveraging Northern Medical Center\u2019s integrative medicine approach and Touro\u2019s clinical training.",
      },
      {
        area: "Performing Arts",
        description:
          "Fei Tian\u2019s world-renowned dance and fine arts programs offer unique research opportunities in arts education and cultural preservation.",
      },
    ],
  },
  regionalNetwork: {
    title: "Regional Academic Network",
    desc: "Middletown\u2019s strategic location places it within reach of major universities and research institutions.",
  },
  healthcarePipeline: {
    title: "Healthcare Training Pipeline",
    desc: "A unique medical education pathway from classroom to clinical practice.",
    stages: [
      {
        name: "Touro COM",
        description:
          "Osteopathic medical students receive classroom education and pre-clinical training at the Middletown campus.",
      },
      {
        name: "Clinical Rotations",
        description:
          "Students complete clinical rotations at Northern Medical Center and Garnet Health Medical Center, gaining real-world medical experience.",
      },
      {
        name: "Local Practice",
        description:
          "Graduates are well-positioned to practice in the community, strengthening Middletown\u2019s healthcare workforce and serving residents.",
      },
    ],
  },
  cta: {
    title: "Start a Partnership",
    desc: "Interested in academic collaboration? We\u2019d love to hear from your institution.",
    primaryButton: "Propose a Partnership",
    secondaryButton: "Contact Academic Affairs",
  },
};

export type SchoolContent = typeof en;

const zhTW: SchoolContent = {
  hero: {
    badge: "學術合作",
    title: "學術合作機會",
    desc: "Middletown 擁有蓬勃發展的學術生態系統。探索您的機構如何與當地的大學、醫學院和研究計畫合作。",
  },
  partnerInstitutions: {
    title: "合作機構",
    desc: "四所核心學術機構構成 Middletown 教育生態系統的基礎。",
    visitWebsite: "造訪網站",
  },
  exchangePrograms: {
    title: "交流計畫",
    desc: "合作機構間潛在的學生和教師交流機會。",
    items: [
      {
        title: "學生交換",
        description:
          "學期制的計畫，讓學生體驗合作機構間多元的學術環境。",
      },
      {
        title: "教師合作",
        description:
          "聯合研究計畫和訪問教授專案，促進跨機構知識交流。",
      },
      {
        title: "暑期密集課程",
        description:
          "表演藝術、生物醫學科學和資料分析的短期沉浸式課程。",
      },
    ],
  },
  researchCollaboration: {
    title: "研究合作",
    desc: "跨越多個學科的跨機構研究機會。",
    areas: [
      {
        area: "生物醫學科學",
        description:
          "Fei Tian College 的生物醫學科學計畫結合 Touro COM 的醫學研究能力，創造轉化研究的機會。",
      },
      {
        area: "資料科學與運算",
        description:
          "資料科學、量子運算和生物統計學的課程提供健康照護分析和 AI 應用的跨學科研究。",
      },
      {
        area: "社區健康",
        description:
          "結合 Northern Medical Center 的整合醫學方法和 Touro 臨床訓練的社區健康研究。",
      },
      {
        area: "表演藝術",
        description:
          "Fei Tian 享譽世界的舞蹈和美術課程提供藝術教育和文化保存方面的獨特研究機會。",
      },
    ],
  },
  regionalNetwork: {
    title: "區域學術網絡",
    desc: "Middletown 的戰略位置使其能夠觸及主要大學和研究機構。",
  },
  healthcarePipeline: {
    title: "醫療教育培訓體系",
    desc: "從課堂到臨床實踐的獨特醫學教育路徑。",
    stages: [
      {
        name: "Touro COM",
        description:
          "骨科醫學學生在 Middletown 校區接受課堂教育和臨床前訓練。",
      },
      {
        name: "臨床實習",
        description:
          "學生在 Northern Medical Center 和 Garnet Health Medical Center 完成臨床實習，獲得真實的醫療經驗。",
      },
      {
        name: "在地執業",
        description:
          "畢業生具備在社區執業的良好條件，強化 Middletown 的醫療人力並服務居民。",
      },
    ],
  },
  cta: {
    title: "開始合作",
    desc: "有興趣進行學術合作嗎？我們期待聽到您的機構的聲音。",
    primaryButton: "提案合作",
    secondaryButton: "聯絡學術事務",
  },
};

const es: SchoolContent = {
  hero: {
    badge: "Alianzas Académicas",
    title: "Oportunidades de Alianzas Académicas",
    desc: "Middletown alberga un ecosistema académico en crecimiento. Explore cómo su institución puede asociarse con universidades locales, escuelas de medicina y programas de investigación.",
  },
  partnerInstitutions: {
    title: "Instituciones Asociadas",
    desc: "Cuatro instituciones académicas clave forman el núcleo del ecosistema educativo de Middletown.",
    visitWebsite: "Visitar Sitio Web",
  },
  exchangePrograms: {
    title: "Programas de Intercambio",
    desc: "Oportunidades potenciales de intercambio estudiantil y docente entre instituciones asociadas.",
    items: [
      {
        title: "Intercambio Estudiantil",
        description:
          "Programas semestrales que permiten a los estudiantes experimentar diversos entornos académicos en las instituciones asociadas.",
      },
      {
        title: "Colaboración Docente",
        description:
          "Iniciativas de investigación conjunta y programas de profesores visitantes para fomentar el intercambio de conocimiento interinstitucional.",
      },
      {
        title: "Intensivos de Verano",
        description:
          "Programas inmersivos de corta duración en artes escénicas, ciencias biomédicas y análisis de datos.",
      },
    ],
  },
  researchCollaboration: {
    title: "Colaboración en Investigación",
    desc: "Oportunidades de investigación interinstitucional que abarcan múltiples disciplinas.",
    areas: [
      {
        area: "Ciencias Biomédicas",
        description:
          "El programa de ciencias biomédicas de Fei Tian College combinado con las capacidades de investigación médica de Touro COM crean oportunidades para la investigación traslacional.",
      },
      {
        area: "Ciencia de Datos y Computación",
        description:
          "Programas en ciencia de datos, computación cuántica y bioestadística ofrecen investigación interdisciplinaria en análisis de salud y aplicaciones de IA.",
      },
      {
        area: "Salud Comunitaria",
        description:
          "Investigación en salud comunitaria aprovechando el enfoque de medicina integrativa de Northern Medical Center y la formación clínica de Touro.",
      },
      {
        area: "Artes Escénicas",
        description:
          "Los programas de danza y bellas artes de renombre mundial de Fei Tian ofrecen oportunidades de investigación únicas en educación artística y preservación cultural.",
      },
    ],
  },
  regionalNetwork: {
    title: "Red Académica Regional",
    desc: "La ubicación estratégica de Middletown lo coloca al alcance de las principales universidades e instituciones de investigación.",
  },
  healthcarePipeline: {
    title: "Cadena de Formación en Salud",
    desc: "Una vía única de educación médica desde el aula hasta la práctica clínica.",
    stages: [
      {
        name: "Touro COM",
        description:
          "Los estudiantes de medicina osteopática reciben educación en el aula y formación preclínica en el campus de Middletown.",
      },
      {
        name: "Rotaciones Clínicas",
        description:
          "Los estudiantes completan rotaciones clínicas en Northern Medical Center y Garnet Health Medical Center, adquiriendo experiencia médica real.",
      },
      {
        name: "Práctica Local",
        description:
          "Los graduados están bien posicionados para ejercer en la comunidad, fortaleciendo la fuerza laboral de salud de Middletown y sirviendo a los residentes.",
      },
    ],
  },
  cta: {
    title: "Inicia una Alianza",
    desc: "¿Interesado en la colaboración académica? Nos encantaría escuchar a su institución.",
    primaryButton: "Proponer una Alianza",
    secondaryButton: "Contactar Asuntos Académicos",
  },
};

export const content: Record<Language, SchoolContent> = {
  en,
  "zh-TW": zhTW,
  es,
};
