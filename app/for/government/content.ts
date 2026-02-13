import type { Language } from "@/lib/i18n/language-context";

const en = {
  hero: {
    badge: "Government Report",
    title: "Revitalization Progress Report",
    desc: "A comprehensive overview of Middletown's revitalization efforts, including DRI project completion, BOA planning, economic impact, and available funding programs.",
  },
  driSection: {
    title: "DRI Completion Summary",
    desc: "Downtown Revitalization Initiative -- all projects successfully completed.",
    projectsLabel: "Projects",
    totalInvestedLabel: "Total Invested",
    completionLabel: "Completion",
  },
  boaSection: {
    title: "BOA Planning Progress",
    desc: "Brownfield Opportunity Area grant of $250,772 is funding redevelopment planning through 2029.",
    timeline: [
      { year: "2024", event: "BOA Grant Awarded ($250,772)" },
      { year: "2025", event: "Environmental Assessment & Community Engagement" },
      { year: "2026", event: "Brownfield Site Analysis & Planning" },
      { year: "2027", event: "Redevelopment Strategy Finalization" },
      { year: "2028-29", event: "Implementation & Construction Phase" },
    ],
  },
  impactSection: {
    title: "Economic Impact Dashboard",
    desc: "Key metrics showing the impact of revitalization efforts on Middletown's economy.",
    metrics: [
      {
        label: "Population",
        value: "30,345",
        detail: "2020 Census",
      },
      {
        label: "Avg. Home Value",
        value: "$395K",
        detail: "+63% since 2019",
      },
      {
        label: "DRI Projects",
        value: "5 completed",
        detail: "$10M invested",
      },
      {
        label: "BOA Grant",
        value: "$250,772",
        detail: "Planning through 2029",
      },
    ],
  },
  fundingSection: {
    title: "Funding & Grants",
    desc: "Available and completed funding programs for Middletown's revitalization.",
    programs: [
      {
        name: "Downtown Revitalization Initiative (DRI)",
        amount: "$10M",
        status: "Completed",
        description:
          "New York State program for transformative downtown projects.",
      },
      {
        name: "Brownfield Opportunity Area (BOA)",
        amount: "$250,772",
        status: "Active",
        description:
          "State grant for brownfield redevelopment planning and environmental assessment.",
      },
      {
        name: "Empire State Development (ESD)",
        amount: "Various",
        status: "Ongoing",
        description:
          "Economic development programs supporting business attraction and retention.",
      },
      {
        name: "Community Development Block Grant (CDBG)",
        amount: "Various",
        status: "Eligible",
        description:
          "Federal HUD grants for community development and infrastructure improvements.",
      },
      {
        name: "New York Main Street Program",
        amount: "Up to $500K",
        status: "Eligible",
        description:
          "Funding for downtown anchor projects and building renovations.",
      },
    ],
  },
  reportsSection: {
    title: "Downloadable Reports",
    desc: "Access detailed reports for stakeholder review and distribution.",
    reports: [
      {
        title: "Personal Guide",
        description: "Resident-focused overview of Middletown",
      },
      {
        title: "School Partnership Proposal",
        description: "Academic collaboration framework",
      },
      {
        title: "Government Progress Report",
        description: "Full DRI and BOA documentation",
      },
      {
        title: "Investor Deck",
        description: "Investment opportunity presentation",
      },
    ],
  },
  cta: {
    title: "Need More Information?",
    desc: "Request a detailed briefing or schedule a meeting with the planning team.",
    requestReport: "Request Detailed Report",
    scheduleBriefing: "Schedule Briefing",
  },
};

export type GovernmentContent = typeof en;

const zhTW: GovernmentContent = {
  hero: {
    badge: "政府報告",
    title: "都市更新進度報告",
    desc: "全面概述 Middletown 的都市更新工作，包括 DRI 專案完成進度、BOA 規劃、經濟影響及可用資金計畫。",
  },
  driSection: {
    title: "DRI 完成摘要",
    desc: "Downtown Revitalization Initiative（市中心活化倡議）── 所有專案均已順利完成。",
    projectsLabel: "專案數",
    totalInvestedLabel: "總投資額",
    completionLabel: "完成率",
  },
  boaSection: {
    title: "BOA 規劃進度",
    desc: "Brownfield Opportunity Area 補助金 $250,772 正資助至 2029 年的重建規劃。",
    timeline: [
      { year: "2024", event: "獲得 BOA 補助金（$250,772）" },
      { year: "2025", event: "環境評估與社區參與" },
      { year: "2026", event: "棕地場址分析與規劃" },
      { year: "2027", event: "重建策略定案" },
      { year: "2028-29", event: "實施與建設階段" },
    ],
  },
  impactSection: {
    title: "經濟影響儀表板",
    desc: "關鍵指標顯示都市更新對 Middletown 經濟的影響。",
    metrics: [
      {
        label: "人口",
        value: "30,345",
        detail: "2020 年人口普查",
      },
      {
        label: "平均房價",
        value: "$395K",
        detail: "自 2019 年以來 +63%",
      },
      {
        label: "DRI 專案",
        value: "5 項已完成",
        detail: "已投資 $10M",
      },
      {
        label: "BOA 補助金",
        value: "$250,772",
        detail: "規劃至 2029 年",
      },
    ],
  },
  fundingSection: {
    title: "資金與補助",
    desc: "Middletown 都市更新的可用及已完成資金計畫。",
    programs: [
      {
        name: "Downtown Revitalization Initiative (DRI)",
        amount: "$10M",
        status: "已完成",
        description: "紐約州轉型性市中心專案計畫。",
      },
      {
        name: "Brownfield Opportunity Area (BOA)",
        amount: "$250,772",
        status: "進行中",
        description: "州政府棕地重建規劃及環境評估補助。",
      },
      {
        name: "Empire State Development (ESD)",
        amount: "不等",
        status: "持續進行",
        description: "支援企業招商與留才的經濟發展計畫。",
      },
      {
        name: "Community Development Block Grant (CDBG)",
        amount: "不等",
        status: "符合資格",
        description: "聯邦 HUD 社區發展與基礎設施改善補助。",
      },
      {
        name: "New York Main Street Program",
        amount: "最高 $500K",
        status: "符合資格",
        description: "市中心核心專案及建築翻新資金。",
      },
    ],
  },
  reportsSection: {
    title: "可下載報告",
    desc: "取得供利害關係人審閱與分發的詳細報告。",
    reports: [
      {
        title: "個人指南",
        description: "以居民為導向的 Middletown 概覽",
      },
      {
        title: "學校合作提案",
        description: "學術合作架構",
      },
      {
        title: "政府進度報告",
        description: "完整 DRI 及 BOA 文件",
      },
      {
        title: "投資人簡報",
        description: "投資機會簡報",
      },
    ],
  },
  cta: {
    title: "需要更多資訊？",
    desc: "申請詳細簡報或安排與規劃團隊的會議。",
    requestReport: "索取詳細報告",
    scheduleBriefing: "預約簡報",
  },
};

const es: GovernmentContent = {
  hero: {
    badge: "Informe Gubernamental",
    title: "Informe de Progreso de Revitalización",
    desc: "Una visión integral de los esfuerzos de revitalización de Middletown, incluyendo la finalización de proyectos DRI, planificación BOA, impacto económico y programas de financiamiento disponibles.",
  },
  driSection: {
    title: "Resumen de Finalización DRI",
    desc: "Downtown Revitalization Initiative -- todos los proyectos completados exitosamente.",
    projectsLabel: "Proyectos",
    totalInvestedLabel: "Total Invertido",
    completionLabel: "Completado",
  },
  boaSection: {
    title: "Progreso de Planificación BOA",
    desc: "La subvención del Brownfield Opportunity Area de $250,772 financia la planificación de redesarrollo hasta 2029.",
    timeline: [
      { year: "2024", event: "Subvención BOA otorgada ($250,772)" },
      {
        year: "2025",
        event: "Evaluación ambiental y participación comunitaria",
      },
      { year: "2026", event: "Análisis y planificación de sitios brownfield" },
      { year: "2027", event: "Finalización de estrategia de redesarrollo" },
      { year: "2028-29", event: "Fase de implementación y construcción" },
    ],
  },
  impactSection: {
    title: "Panel de Impacto Económico",
    desc: "Indicadores clave que muestran el impacto de los esfuerzos de revitalización en la economía de Middletown.",
    metrics: [
      {
        label: "Población",
        value: "30,345",
        detail: "Censo 2020",
      },
      {
        label: "Valor Prom. de Vivienda",
        value: "$395K",
        detail: "+63% desde 2019",
      },
      {
        label: "Proyectos DRI",
        value: "5 completados",
        detail: "$10M invertidos",
      },
      {
        label: "Subvención BOA",
        value: "$250,772",
        detail: "Planificación hasta 2029",
      },
    ],
  },
  fundingSection: {
    title: "Financiamiento y Subvenciones",
    desc: "Programas de financiamiento disponibles y completados para la revitalización de Middletown.",
    programs: [
      {
        name: "Downtown Revitalization Initiative (DRI)",
        amount: "$10M",
        status: "Completado",
        description:
          "Programa del Estado de Nueva York para proyectos transformadores del centro urbano.",
      },
      {
        name: "Brownfield Opportunity Area (BOA)",
        amount: "$250,772",
        status: "Activo",
        description:
          "Subvención estatal para planificación de redesarrollo de brownfields y evaluación ambiental.",
      },
      {
        name: "Empire State Development (ESD)",
        amount: "Varios",
        status: "En curso",
        description:
          "Programas de desarrollo económico que apoyan la atracción y retención de empresas.",
      },
      {
        name: "Community Development Block Grant (CDBG)",
        amount: "Varios",
        status: "Elegible",
        description:
          "Subvenciones federales HUD para desarrollo comunitario y mejoras de infraestructura.",
      },
      {
        name: "New York Main Street Program",
        amount: "Hasta $500K",
        status: "Elegible",
        description:
          "Financiamiento para proyectos ancla del centro y renovaciones de edificios.",
      },
    ],
  },
  reportsSection: {
    title: "Informes Descargables",
    desc: "Acceda a informes detallados para revisión y distribución a partes interesadas.",
    reports: [
      {
        title: "Guía Personal",
        description: "Resumen de Middletown orientado a residentes",
      },
      {
        title: "Propuesta de Alianza Escolar",
        description: "Marco de colaboración académica",
      },
      {
        title: "Informe de Progreso Gubernamental",
        description: "Documentación completa de DRI y BOA",
      },
      {
        title: "Presentación para Inversionistas",
        description: "Presentación de oportunidades de inversión",
      },
    ],
  },
  cta: {
    title: "¿Necesita Más Información?",
    desc: "Solicite un informe detallado o programe una reunión con el equipo de planificación.",
    requestReport: "Solicitar Informe Detallado",
    scheduleBriefing: "Programar Sesión Informativa",
  },
};

export const content: Record<Language, GovernmentContent> = {
  en,
  "zh-TW": zhTW,
  es,
};
