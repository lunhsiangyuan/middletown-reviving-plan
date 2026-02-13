import type { Language } from "@/lib/i18n/language-context";

const en = {
  header: {
    badge: "Healthcare",
    title: "Healthcare & Wellness",
    desc: "A growing healthcare ecosystem that combines integrative medicine, medical education, and community hospital services.",
  },
  nmc: {
    title: "Northern Medical Center",
    desc: "Led by CEO Dr. Jingduan Yang, Northern Medical Center is an integrative medical center offering a unique blend of Western and Eastern medicine approaches.",
    tabs: {
      overview: "Overview",
      services: "Services",
      physicians: "Physicians",
      insurance: "Insurance",
    },
    overviewLabels: {
      address: "Address",
      phone: "Phone",
      ceo: "CEO",
      description: "Description",
    },
    insuranceIntro:
      "Northern Medical Center accepts a wide range of insurance plans:",
    hoursTitle: "Office Hours",
    contactTitle: "Contact & Appointments",
    telehealthLabel: "Telehealth Available",
    bookAppointment: "Book an Appointment",
    programsTitle: "Specialty Programs",
  },
  touro: {
    title: "Touro College of Osteopathic Medicine",
    p1: "Touro COM's Middletown campus trains future physicians and contributes significantly to the local healthcare ecosystem. Medical students bring vibrancy to downtown while preparing to serve communities across the region.",
    p2: "The presence of a medical school strengthens Middletown's identity as a healthcare destination and creates a pipeline of physicians who may choose to practice locally.",
  },
  garnet: {
    title: "Garnet Health & Regional Healthcare",
    communityHealth: {
      title: "Community Health Resources",
      items: [
        "Full-service community hospital with emergency department",
        "Integrative medicine at Northern Medical Center",
        "Medical education pipeline via Touro COM",
        "Growing network of specialty and primary care providers",
      ],
    },
  },
};

export type HealthcareContent = typeof en;

const zhTW: HealthcareContent = {
  header: {
    badge: "醫療保健",
    title: "醫療保健與健康",
    desc: "一個結合整合醫學、醫學教育和社區醫院服務的日益成長的醫療保健生態系統。",
  },
  nmc: {
    title: "Northern Medical Center",
    desc: "由執行長楊景端醫師領導，Northern Medical Center 是一家整合醫療中心，提供西方醫學與東方醫學的獨特結合。",
    tabs: {
      overview: "概覽",
      services: "服務項目",
      physicians: "醫師團隊",
      insurance: "保險方案",
    },
    overviewLabels: {
      address: "地址",
      phone: "電話",
      ceo: "執行長",
      description: "簡介",
    },
    insuranceIntro: "Northern Medical Center 接受多種保險方案：",
    hoursTitle: "門診時間",
    contactTitle: "聯繫與預約",
    telehealthLabel: "提供遠距醫療",
    bookAppointment: "預約看診",
    programsTitle: "特色療程",
  },
  touro: {
    title: "Touro College of Osteopathic Medicine",
    p1: "Touro COM 的 Middletown 校區培訓未來的醫師，並為當地醫療保健生態系統做出重要貢獻。醫學生為市中心帶來活力，同時準備為整個地區的社區服務。",
    p2: "醫學院的存在強化了 Middletown 作為醫療保健目的地的定位，並建立了可能選擇在當地執業的醫師人才梯隊。",
  },
  garnet: {
    title: "Garnet Health 與區域醫療保健",
    communityHealth: {
      title: "社區健康資源",
      items: [
        "設有急診部門的全方位社區醫院",
        "Northern Medical Center 的整合醫學服務",
        "透過 Touro COM 建立的醫學教育人才梯隊",
        "持續擴大的專科與基層醫療服務網絡",
      ],
    },
  },
};

const es: HealthcareContent = {
  header: {
    badge: "Salud",
    title: "Salud y Bienestar",
    desc: "Un ecosistema de atención médica en crecimiento que combina medicina integrativa, educación médica y servicios hospitalarios comunitarios.",
  },
  nmc: {
    title: "Northern Medical Center",
    desc: "Dirigido por el CEO Dr. Jingduan Yang, Northern Medical Center es un centro médico integrativo que ofrece una combinación única de enfoques de medicina occidental y oriental.",
    tabs: {
      overview: "Resumen",
      services: "Servicios",
      physicians: "Médicos",
      insurance: "Seguros",
    },
    overviewLabels: {
      address: "Dirección",
      phone: "Teléfono",
      ceo: "CEO",
      description: "Descripción",
    },
    insuranceIntro:
      "Northern Medical Center acepta una amplia gama de planes de seguro:",
    hoursTitle: "Horario de Atención",
    contactTitle: "Contacto y Citas",
    telehealthLabel: "Telesalud Disponible",
    bookAppointment: "Reservar una Cita",
    programsTitle: "Programas Especializados",
  },
  touro: {
    title: "Touro College of Osteopathic Medicine",
    p1: "El campus de Touro COM en Middletown forma a futuros médicos y contribuye significativamente al ecosistema local de atención médica. Los estudiantes de medicina aportan vitalidad al centro de la ciudad mientras se preparan para servir a las comunidades de toda la región.",
    p2: "La presencia de una escuela de medicina fortalece la identidad de Middletown como destino de atención médica y crea un canal de médicos que pueden elegir ejercer localmente.",
  },
  garnet: {
    title: "Garnet Health y Atención Médica Regional",
    communityHealth: {
      title: "Recursos de Salud Comunitaria",
      items: [
        "Hospital comunitario de servicio completo con departamento de emergencias",
        "Medicina integrativa en Northern Medical Center",
        "Canal de educación médica a través de Touro COM",
        "Red creciente de proveedores de atención primaria y especializada",
      ],
    },
  },
};

export const content: Record<Language, HealthcareContent> = {
  en,
  "zh-TW": zhTW,
  es,
};
