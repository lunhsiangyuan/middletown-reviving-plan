// Middletown Reviving Plan - Organizations Data (i18n)

import type { Language } from "@/lib/i18n/language-context";

export type OrganizationType =
  | "healthcare"
  | "education"
  | "media"
  | "government"
  | "cultural"
  | "technology";

// --- Healthcare domain interfaces (resolved / non-localized) ---

export interface ServiceDetail {
  name: string;
  description: string;
  conditions?: string[];
}

export interface Physician {
  name: string;
  title: string;
  specialty: string[];
  languages?: string[];
  credentials?: string;
}

export interface WellnessProgram {
  name: string;
  description: string;
  effectiveness?: string;
}

export interface HealthcareInfo {
  ceo?: { name: string; credentials: string; background: string };
  services: ServiceDetail[];
  physicians: Physician[];
  insurance: string[];
  hours?: Record<string, string>;
  telehealth?: boolean;
  programs?: WellnessProgram[];
  socialMedia?: Record<string, string>;
  appointmentUrl?: string;
  patientPortalUrl?: string;
  donateUrl?: string;
}

// --- Education domain interfaces (resolved / non-localized) ---

export interface Campus {
  name: string;
  address: string;
  acres?: number;
  description?: string;
}

export interface ProgramDetail {
  name: string;
  degree: string;
  level: string;
  credits?: number;
  description?: string;
}

export interface FacultyMember {
  name: string;
  title: string;
  department?: string;
  credentials?: string;
}

export interface EducationInfo {
  founded?: number;
  accreditation?: string;
  accreditingBody?: string;
  campuses?: Campus[];
  programs: ProgramDetail[];
  tuition?: { amount: number; period: string; notes?: string };
  enrollment?: { total?: number; newStudents?: number; retentionRate?: string };
  faculty?: FacultyMember[];
  leadership?: { name: string; title: string; credentials?: string }[];
  graduationRate?: string;
  satAverage?: number;
  nicheRating?: string;
  studentCountries?: number;
  boardingAvailable?: boolean;
  admissionRequirements?: string[];
}

// --- Core Organization interface (resolved / non-localized) ---

export interface Organization {
  id: string;
  name: string;
  type: OrganizationType;
  address?: string;
  phone?: string;
  website: string;
  description: string;
  sourceUrl: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  additionalInfo?: HealthcareInfo | EducationInfo | Record<string, unknown>;
}

// --- Helper type guards ---

export function isHealthcareInfo(
  info: Organization["additionalInfo"]
): info is HealthcareInfo {
  return !!info && "physicians" in info && "services" in info;
}

export function isEducationInfo(
  info: Organization["additionalInfo"]
): info is EducationInfo {
  return !!info && "programs" in info && Array.isArray((info as EducationInfo).programs) && (info as EducationInfo).programs.length > 0 && typeof (info as EducationInfo).programs[0] === "object" && "degree" in (info as EducationInfo).programs[0];
}

// ============================================================
// Localized interfaces (internal, for the i18n data store)
// ============================================================

interface LocalizedServiceDetail {
  name: string;
  description: Record<Language, string>;
  conditions?: string[];
}

interface LocalizedWellnessProgram {
  name: string;
  description: Record<Language, string>;
  effectiveness?: Record<Language, string>;
}

interface LocalizedHealthcareInfo {
  ceo?: { name: string; credentials: string; background: Record<Language, string> };
  services: LocalizedServiceDetail[];
  physicians: Physician[];
  insurance: string[];
  hours?: Record<string, string>;
  telehealth?: boolean;
  programs?: LocalizedWellnessProgram[];
  socialMedia?: Record<string, string>;
  appointmentUrl?: string;
  patientPortalUrl?: string;
  donateUrl?: string;
}

interface LocalizedCampus {
  name: string;
  address: string;
  acres?: number;
  description?: Record<Language, string>;
}

interface LocalizedProgramDetail {
  name: string;
  degree: string;
  level: string;
  credits?: number;
  description?: Record<Language, string>;
}

interface LocalizedEducationInfo {
  founded?: number;
  accreditation?: string;
  accreditingBody?: string;
  campuses?: LocalizedCampus[];
  programs: LocalizedProgramDetail[];
  tuition?: { amount: number; period: string; notes?: Record<Language, string> };
  enrollment?: { total?: number; newStudents?: number; retentionRate?: string };
  faculty?: FacultyMember[];
  leadership?: { name: string; title: string; credentials?: string }[];
  graduationRate?: string;
  satAverage?: number;
  nicheRating?: string;
  studentCountries?: number;
  boardingAvailable?: boolean;
  admissionRequirements?: Record<Language, string[]>;
}

interface LocalizedOrganization {
  id: string;
  name: string;
  type: OrganizationType;
  address?: string;
  phone?: string;
  website: string;
  description: Record<Language, string>;
  sourceUrl: string;
  coordinates?: { lat: number; lng: number };
  additionalInfo?: LocalizedHealthcareInfo | LocalizedEducationInfo | Record<string, unknown>;
}

// --- Localized type guards (internal) ---

function isLocalizedHealthcareInfo(
  info: LocalizedOrganization["additionalInfo"]
): info is LocalizedHealthcareInfo {
  return !!info && "physicians" in info && "services" in info;
}

function isLocalizedEducationInfo(
  info: LocalizedOrganization["additionalInfo"]
): info is LocalizedEducationInfo {
  return (
    !!info &&
    "programs" in info &&
    Array.isArray((info as LocalizedEducationInfo).programs) &&
    (info as LocalizedEducationInfo).programs.length > 0 &&
    typeof (info as LocalizedEducationInfo).programs[0] === "object" &&
    "degree" in (info as LocalizedEducationInfo).programs[0]
  );
}

// ============================================================
// Resolve helpers
// ============================================================

function resolveText(rec: Record<Language, string>, lang: Language): string {
  return rec[lang] ?? rec.en;
}

function resolveTextArray(rec: Record<Language, string[]>, lang: Language): string[] {
  return rec[lang] ?? rec.en;
}

function resolveHealthcareInfo(
  info: LocalizedHealthcareInfo,
  lang: Language
): HealthcareInfo {
  return {
    ...info,
    ceo: info.ceo
      ? {
          name: info.ceo.name,
          credentials: info.ceo.credentials,
          background: resolveText(info.ceo.background, lang),
        }
      : undefined,
    services: info.services.map((s) => ({
      name: s.name,
      description: resolveText(s.description, lang),
      ...(s.conditions ? { conditions: s.conditions } : {}),
    })),
    programs: info.programs
      ? info.programs.map((p) => ({
          name: p.name,
          description: resolveText(p.description, lang),
          ...(p.effectiveness
            ? { effectiveness: resolveText(p.effectiveness, lang) }
            : {}),
        }))
      : undefined,
  };
}

function resolveEducationInfo(
  info: LocalizedEducationInfo,
  lang: Language
): EducationInfo {
  return {
    ...info,
    campuses: info.campuses
      ? info.campuses.map((c) => ({
          name: c.name,
          address: c.address,
          ...(c.acres !== undefined ? { acres: c.acres } : {}),
          ...(c.description
            ? { description: resolveText(c.description, lang) }
            : {}),
        }))
      : undefined,
    programs: info.programs.map((p) => ({
      name: p.name,
      degree: p.degree,
      level: p.level,
      ...(p.credits !== undefined ? { credits: p.credits } : {}),
      ...(p.description
        ? { description: resolveText(p.description, lang) }
        : {}),
    })),
    tuition: info.tuition
      ? {
          amount: info.tuition.amount,
          period: info.tuition.period,
          ...(info.tuition.notes
            ? { notes: resolveText(info.tuition.notes, lang) }
            : {}),
        }
      : undefined,
    admissionRequirements: info.admissionRequirements
      ? resolveTextArray(info.admissionRequirements, lang)
      : undefined,
  };
}

function resolveAdditionalInfo(
  info: LocalizedOrganization["additionalInfo"],
  type: OrganizationType,
  lang: Language
): Organization["additionalInfo"] {
  if (!info) return undefined;
  if (type === "healthcare" && isLocalizedHealthcareInfo(info)) {
    return resolveHealthcareInfo(info, lang);
  }
  if (type === "education" && isLocalizedEducationInfo(info)) {
    return resolveEducationInfo(info, lang);
  }
  return info as Record<string, unknown>;
}

// ============================================================
// Localized Organization Data
// ============================================================

const localizedOrganizations: LocalizedOrganization[] = [
  // ==================== HEALTHCARE ====================
  {
    id: "northern-medical-center",
    name: "Northern Medical Center",
    type: "healthcare",
    address: "14 Jason Place Suite 201, Middletown, NY 10940",
    phone: "(845) 800-5118",
    website: "https://www.northernmedical.org",
    description: {
      en: "Integrative medical center led by CEO Dr. Jingduan Yang, offering a unique blend of Western and Eastern medicine. Services span Primary Care, Chinese Medicine, Mental Health, TMS Therapy, Physical Therapy, Weight Management, and Integrative Medicine.",
      "zh-TW":
        "由執行長楊景端醫師領導的整合醫學中心，提供獨特的中西醫結合服務。涵蓋家庭醫學、中醫、心理健康、TMS 治療、物理治療、體重管理和整合醫學。",
      es: "Centro médico integrativo dirigido por el CEO Dr. Jingduan Yang, que ofrece una combinación única de medicina occidental y oriental. Los servicios abarcan Atención Primaria, Medicina China, Salud Mental, Terapia TMS, Fisioterapia, Control de Peso y Medicina Integrativa.",
    },
    sourceUrl: "https://www.northernmedical.org",
    coordinates: { lat: 41.4459, lng: -74.4229 },
    additionalInfo: {
      ceo: {
        name: "Dr. Jingduan Yang",
        credentials: "MD, FAPA",
        background: {
          en: "Fifth-generation Chinese medicine practitioner; trained in psychiatry at Thomas Jefferson University, clinical psychopharmacology at Oxford, and integrative medicine at University of Arizona.",
          "zh-TW":
            "第五代中醫傳人；曾於 Thomas Jefferson 大學受訓精神科、牛津大學臨床精神藥理學、亞利桑那大學整合醫學。",
          es: "Practicante de medicina china de quinta generación; formado en psiquiatría en la Universidad Thomas Jefferson, psicofarmacología clínica en Oxford y medicina integrativa en la Universidad de Arizona.",
        },
      },
      services: [
        {
          name: "Primary Care",
          description: {
            en: "Comprehensive adult and geriatric primary care including annual physicals, chronic disease management, and preventive screenings.",
            "zh-TW":
              "全面的成人和老年人基礎醫療，包括年度體檢、慢性病管理和預防性篩檢。",
            es: "Atención primaria integral para adultos y geriátrica, incluyendo exámenes físicos anuales, manejo de enfermedades crónicas y exámenes preventivos.",
          },
          conditions: [
            "Hypertension",
            "Diabetes",
            "Heart Disease",
            "Thyroid Disorders",
          ],
        },
        {
          name: "Pediatrics",
          description: {
            en: "Well-child visits, vaccinations, developmental screenings, and acute illness care for children and adolescents.",
            "zh-TW":
              "兒童健康檢查、疫苗接種、發展篩檢，以及兒童和青少年的急性疾病照護。",
            es: "Visitas de bienestar infantil, vacunaciones, evaluaciones del desarrollo y atención de enfermedades agudas para niños y adolescentes.",
          },
        },
        {
          name: "Mental Health",
          description: {
            en: "Psychiatric evaluation, medication management, psychotherapy, and holistic approaches to anxiety, depression, PTSD, and ADHD.",
            "zh-TW":
              "精神科評估、藥物管理、心理治療，以及針對焦慮、憂鬱、PTSD 和 ADHD 的整合方法。",
            es: "Evaluación psiquiátrica, manejo de medicamentos, psicoterapia y enfoques holísticos para la ansiedad, depresión, TEPT y TDAH.",
          },
          conditions: ["Anxiety", "Depression", "PTSD", "ADHD", "Insomnia"],
        },
        {
          name: "TMS Therapy",
          description: {
            en: "FDA-approved Transcranial Magnetic Stimulation for treatment-resistant depression and other mental health conditions using non-invasive brain stimulation.",
            "zh-TW":
              "FDA 核准的經顱磁刺激治療，用於治療難治性憂鬱症和其他心理健康問題，採用非侵入性腦部刺激。",
            es: "Estimulación Magnética Transcraneal aprobada por la FDA para la depresión resistente al tratamiento y otras condiciones de salud mental utilizando estimulación cerebral no invasiva.",
          },
        },
        {
          name: "Integrative Medicine",
          description: {
            en: "Combines evidence-based Western medicine with traditional healing modalities including acupuncture, herbal medicine, and mind-body practices.",
            "zh-TW":
              "結合實證西醫與傳統療法，包括針灸、草藥和身心靈修煉。",
            es: "Combina medicina occidental basada en evidencia con modalidades de curación tradicionales incluyendo acupuntura, medicina herbal y prácticas mente-cuerpo.",
          },
        },
        {
          name: "Acupuncture & Chinese Medicine",
          description: {
            en: "Traditional Chinese medicine treatments including acupuncture, herbal formulas, cupping, and moxibustion for pain, stress, and chronic conditions.",
            "zh-TW":
              "傳統中醫治療，包括針灸、中藥方劑、拔罐和艾灸，用於疼痛、壓力和慢性疾病。",
            es: "Tratamientos de medicina china tradicional incluyendo acupuntura, fórmulas herbales, ventosas y moxibustión para dolor, estrés y condiciones crónicas.",
          },
        },
        {
          name: "Physical Therapy",
          description: {
            en: "Orthopedic and sports rehabilitation, post-surgical recovery, chronic pain management, and balance/fall prevention programs.",
            "zh-TW":
              "骨科與運動復健、術後恢復、慢性疼痛管理，以及平衡/跌倒預防計畫。",
            es: "Rehabilitación ortopédica y deportiva, recuperación posquirúrgica, manejo del dolor crónico y programas de prevención de caídas/equilibrio.",
          },
        },
        {
          name: "Weight Management",
          description: {
            en: "Medically supervised weight loss programs combining nutritional counseling, metabolic assessment, and lifestyle modification.",
            "zh-TW":
              "醫學監督的體重管理計畫，結合營養諮詢、代謝評估和生活方式調整。",
            es: "Programas de pérdida de peso supervisados médicamente que combinan asesoramiento nutricional, evaluación metabólica y modificación del estilo de vida.",
          },
        },
        {
          name: "Brain Health (QEEG)",
          description: {
            en: "Quantitative EEG brain mapping to identify patterns associated with neurological and psychiatric conditions, guiding personalized treatment plans.",
            "zh-TW":
              "定量腦電圖腦部掃描，識別與神經和精神疾病相關的模式，指導個人化治療方案。",
            es: "Mapeo cerebral por EEG cuantitativo para identificar patrones asociados con condiciones neurológicas y psiquiátricas, guiando planes de tratamiento personalizados.",
          },
        },
        {
          name: "IV Nutritional Therapy",
          description: {
            en: "Intravenous vitamin and mineral infusions for immune support, energy optimization, and recovery.",
            "zh-TW":
              "靜脈注射維生素和礦物質，支援免疫功能、能量優化和恢復。",
            es: "Infusiones intravenosas de vitaminas y minerales para apoyo inmunológico, optimización de energía y recuperación.",
          },
        },
        {
          name: "Telehealth",
          description: {
            en: "Virtual appointments for follow-ups, medication management, and consultations available for established patients.",
            "zh-TW":
              "提供遠距醫療，包括追蹤回診、藥物管理和諮詢服務（限現有病患）。",
            es: "Citas virtuales para seguimientos, manejo de medicamentos y consultas disponibles para pacientes establecidos.",
          },
        },
      ],
      physicians: [
        {
          name: "Dr. Jingduan Yang",
          title: "CEO & Medical Director",
          specialty: [
            "Psychiatry",
            "Integrative Medicine",
            "Chinese Medicine",
          ],
          credentials: "MD, FAPA",
        },
        {
          name: "Dr. Lisa Pathak",
          title: "Physician",
          specialty: ["Internal Medicine", "Primary Care"],
        },
        {
          name: "Dr. Alison Zhou",
          title: "Physician",
          specialty: ["Internal Medicine"],
        },
        {
          name: "Dr. James Chao",
          title: "Physician",
          specialty: ["Family Medicine"],
        },
        {
          name: "Rosenny Chasin",
          title: "Physician Assistant",
          specialty: ["Primary Care"],
          credentials: "PA-C",
        },
        {
          name: "David Gao",
          title: "Physical Therapist",
          specialty: ["Physical Therapy", "Rehabilitation"],
          credentials: "PT",
        },
        {
          name: "Serene Feng",
          title: "Licensed Acupuncturist",
          specialty: ["Acupuncture", "Chinese Medicine"],
          credentials: "L.Ac.",
        },
        {
          name: "Zhang Guiying",
          title: "Licensed Acupuncturist",
          specialty: ["Acupuncture", "Chinese Medicine"],
          credentials: "L.Ac.",
        },
      ],
      insurance: [
        "Medicare",
        "Medicaid",
        "Aetna",
        "Cigna",
        "UnitedHealthcare",
        "MVP Health Care",
        "Empire BCBS",
        "Fidelis Care",
        "Humana",
        "HealthFirst",
        "1199 SEIU",
        "MagnaCare",
      ],
      hours: {
        Monday: "Closed",
        Tuesday: "8:00 AM – 6:00 PM",
        Wednesday: "8:00 AM – 6:00 PM",
        Thursday: "8:00 AM – 6:00 PM",
        Friday: "8:00 AM – 6:00 PM",
        Saturday: "Closed",
        Sunday: "Closed",
      },
      telehealth: true,
      programs: [
        {
          name: "TMS Therapy",
          description: {
            en: "FDA-approved Transcranial Magnetic Stimulation targeting treatment-resistant depression. Non-invasive, no sedation required, sessions last approximately 20 minutes.",
            "zh-TW":
              "FDA 核准的經顱磁刺激，針對難治性憂鬱症。非侵入性，無需麻醉，每次療程約 20 分鐘。",
            es: "Estimulación Magnética Transcraneal aprobada por la FDA para depresión resistente al tratamiento. No invasiva, sin sedación requerida, sesiones de aproximadamente 20 minutos.",
          },
          effectiveness: {
            en: "83% response rate in clinical outcomes",
            "zh-TW": "臨床結果顯示 83% 反應率",
            es: "83% de tasa de respuesta en resultados clínicos",
          },
        },
        {
          name: "Weight Management",
          description: {
            en: "Comprehensive medically supervised program combining metabolic testing, nutritional guidance, and ongoing support for sustainable weight loss.",
            "zh-TW":
              "全面的醫學監督計畫，結合代謝檢測、營養指導和持續支持，實現可持續的體重管理。",
            es: "Programa integral supervisado médicamente que combina pruebas metabólicas, orientación nutricional y apoyo continuo para una pérdida de peso sostenible.",
          },
        },
        {
          name: "QEEG Brain Health",
          description: {
            en: "Advanced brain mapping using quantitative EEG to identify neural patterns and guide targeted neurofeedback and treatment protocols.",
            "zh-TW":
              "使用定量腦電圖進行先進腦部掃描，識別神經模式並指導針對性的神經回饋和治療方案。",
            es: "Mapeo cerebral avanzado usando EEG cuantitativo para identificar patrones neuronales y guiar protocolos de neurofeedback y tratamiento dirigidos.",
          },
        },
        {
          name: "Advanced Nutritional Therapy",
          description: {
            en: "IV vitamin infusions and personalized supplement protocols designed to address deficiencies and optimize cellular health.",
            "zh-TW":
              "靜脈注射維生素和個人化補充劑方案，旨在解決營養缺乏並優化細胞健康。",
            es: "Infusiones de vitaminas IV y protocolos de suplementos personalizados diseñados para abordar deficiencias y optimizar la salud celular.",
          },
        },
      ],
      socialMedia: {
        facebook: "https://www.facebook.com/NorthernMedicalCenter",
        youtube: "https://www.youtube.com/@NorthernMedicalCenter",
      },
      appointmentUrl: "https://www.northernmedical.org/appointment",
      donateUrl: "https://www.northernmedical.org/donate",
    } satisfies LocalizedHealthcareInfo,
  },
  {
    id: "garnet-health",
    name: "Garnet Health Medical Center",
    type: "healthcare",
    address: "707 East Main St, Middletown, NY 10940",
    website: "https://garnethealth.org",
    description: {
      en: "Full-service community hospital providing comprehensive healthcare services to the greater Middletown area.",
      "zh-TW":
        "全方位服務的社區醫院，為 Middletown 及周邊地區提供全面的醫療服務。",
      es: "Hospital comunitario de servicio completo que brinda servicios de atención médica integral al área de Middletown.",
    },
    sourceUrl: "https://garnethealth.org",
    coordinates: { lat: 41.4478, lng: -74.4069 },
  },

  // ==================== EDUCATION ====================
  {
    id: "northern-academy",
    name: "Northern Academy of the Arts",
    type: "education",
    address: "1 Ashley Avenue, Middletown, NY 10940",
    phone: "(845) 779-0808",
    website: "https://northernacademy.org",
    description: {
      en: "College-preparatory boarding and day school serving grades 5–12, combining rigorous academics with world-class classical arts training. Niche A+ rated with 100% graduation rate and 1300 average SAT.",
      "zh-TW":
        "大學預備寄宿暨走讀學校，招收 5-12 年級學生，結合嚴謹的學術課程與世界級古典藝術訓練。Niche 評級 A+，畢業率 100%，SAT 平均 1300 分。",
      es: "Escuela preparatoria de internado y día que atiende grados 5-12, combinando académicos rigurosos con entrenamiento en artes clásicas de clase mundial. Calificación Niche A+ con 100% de tasa de graduación y 1300 promedio SAT.",
    },
    sourceUrl: "https://northernacademy.org",
    coordinates: { lat: 41.4451, lng: -74.4265 },
    additionalInfo: {
      founded: 2016,
      accreditation: "Middle States Association",
      accreditingBody: "Middle States Association of Colleges and Schools",
      programs: [
        {
          name: "Classical Curriculum",
          degree: "Certificate",
          level: "secondary",
          description: {
            en: "Core liberal arts curriculum emphasizing critical thinking, writing, and ethical reasoning rooted in the classical tradition.",
            "zh-TW":
              "核心博雅課程，強調植根於古典傳統的批判性思維、寫作和倫理推理。",
            es: "Currículo central de artes liberales enfatizando el pensamiento crítico, la escritura y el razonamiento ético arraigado en la tradición clásica.",
          },
        },
        {
          name: "Advanced Placement (20+ courses)",
          degree: "Certificate",
          level: "secondary",
          description: {
            en: "Over 20 AP course offerings across sciences, mathematics, humanities, and languages.",
            "zh-TW":
              "提供超過 20 門 AP 課程，涵蓋自然科學、數學、人文學科和語言。",
            es: "Más de 20 cursos AP en ciencias, matemáticas, humanidades e idiomas.",
          },
        },
        {
          name: "STEM Program",
          degree: "Certificate",
          level: "secondary",
          description: {
            en: "Science, technology, engineering, and mathematics pathway with hands-on labs and competitions.",
            "zh-TW":
              "科學、技術、工程和數學學程，包含實驗室實作和競賽。",
            es: "Programa de ciencia, tecnología, ingeniería y matemáticas con laboratorios prácticos y competencias.",
          },
        },
        {
          name: "Business & Entrepreneurship",
          degree: "Certificate",
          level: "secondary",
          description: {
            en: "Practical business education including economics, marketing, and entrepreneurship projects.",
            "zh-TW":
              "實務商業教育，包括經濟學、行銷和創業專案。",
            es: "Educación empresarial práctica incluyendo economía, marketing y proyectos de emprendimiento.",
          },
        },
        {
          name: "Classical Chinese Dance",
          degree: "Certificate",
          level: "secondary",
          description: {
            en: "Intensive training in classical Chinese dance technique, a hallmark program connected to the Shen Yun artistic tradition.",
            "zh-TW":
              "中國古典舞密集訓練，是與神韻藝術傳統相關的招牌課程。",
            es: "Entrenamiento intensivo en danza clásica china, un programa emblemático conectado con la tradición artística de Shen Yun.",
          },
        },
        {
          name: "Music Program",
          degree: "Certificate",
          level: "secondary",
          description: {
            en: "Instrumental and vocal training with ensemble performance and music theory.",
            "zh-TW":
              "器樂和聲樂訓練，搭配合奏演出和音樂理論。",
            es: "Formación instrumental y vocal con interpretación de conjunto y teoría musical.",
          },
        },
        {
          name: "Visual Arts",
          degree: "Certificate",
          level: "secondary",
          description: {
            en: "Fine arts instruction including drawing, painting, sculpture, and art history.",
            "zh-TW":
              "美術教學，包括素描、繪畫、雕塑和藝術史。",
            es: "Instrucción en bellas artes incluyendo dibujo, pintura, escultura e historia del arte.",
          },
        },
      ],
      tuition: {
        amount: 32900,
        period: "year",
        notes: {
          en: "Day: $32,900; Boarding: $52,400",
          "zh-TW": "走讀：$32,900；寄宿：$52,400",
          es: "Día: $32,900; Internado: $52,400",
        },
      },
      enrollment: {
        total: 198,
        retentionRate: "High",
      },
      graduationRate: "100%",
      satAverage: 1300,
      nicheRating: "A+",
      studentCountries: 15,
      boardingAvailable: true,
      admissionRequirements: {
        en: [
          "Application form",
          "Academic transcripts",
          "Teacher recommendations",
          "Student essay",
          "Interview",
          "Audition (for arts track)",
        ],
        "zh-TW": [
          "申請表",
          "學業成績單",
          "教師推薦信",
          "學生作文",
          "面試",
          "試演（藝術學程）",
        ],
        es: [
          "Formulario de solicitud",
          "Expedientes académicos",
          "Recomendaciones de profesores",
          "Ensayo del estudiante",
          "Entrevista",
          "Audición (para la vía artística)",
        ],
      },
      leadership: [
        {
          name: "Administration",
          title: "Head of School",
        },
      ],
    } satisfies LocalizedEducationInfo,
  },
  {
    id: "fei-tian-college",
    name: "Fei Tian College",
    type: "education",
    address: "14 Jason Place, Middletown, NY 10940",
    website: "https://feitian.edu",
    description: {
      en: "NECHE-accredited college offering a distinctive blend of classical arts conservatory training and modern academic programs across two campuses. Programs span from Classical Chinese Dance and Fine Arts to Data Science and Quantum Computing.",
      "zh-TW":
        "經 NECHE 認證的大學，在兩個校區提供獨特的古典藝術保育訓練和現代學術課程。課程涵蓋中國古典舞和美術到數據科學和量子計算。",
      es: "Universidad acreditada por NECHE que ofrece una combinación distintiva de formación conservatorio en artes clásicas y programas académicos modernos en dos campus. Los programas abarcan desde Danza Clásica China y Bellas Artes hasta Ciencia de Datos y Computación Cuántica.",
    },
    sourceUrl: "https://feitian.edu",
    coordinates: { lat: 41.4459, lng: -74.4229 },
    additionalInfo: {
      founded: 2011,
      accreditation: "NECHE",
      accreditingBody: "New England Commission of Higher Education",
      campuses: [
        {
          name: "Northern Campus (Middletown)",
          address: "14 Jason Place, Middletown, NY 10940",
          description: {
            en: "Main campus housing STEM programs, administrative offices, and shared facilities with Northern Medical Center.",
            "zh-TW":
              "主校區，設有 STEM 課程、行政辦公室，以及與 Northern Medical Center 共用的設施。",
            es: "Campus principal que alberga programas STEM, oficinas administrativas e instalaciones compartidas con Northern Medical Center.",
          },
        },
        {
          name: "Cuddebackville Campus",
          address: "140 Galley Hill Rd, Cuddebackville, NY 12729",
          acres: 30,
          description: {
            en: "Arts conservatory campus dedicated to dance, music, fine arts, and stage production programs.",
            "zh-TW":
              "藝術保育校區，專注於舞蹈、音樂、美術和舞台製作課程。",
            es: "Campus conservatorio de artes dedicado a programas de danza, música, bellas artes y producción escénica.",
          },
        },
      ],
      programs: [
        // --- Undergraduate ---
        {
          name: "Classical Chinese Dance",
          degree: "BFA",
          level: "undergraduate",
          credits: 135,
          description: {
            en: "Intensive professional training in classical Chinese dance technique, repertory, choreography, and pedagogy.",
            "zh-TW":
              "密集的中國古典舞專業訓練，涵蓋技巧、劇目、編舞和教學法。",
            es: "Formación profesional intensiva en técnica de danza clásica china, repertorio, coreografía y pedagogía.",
          },
        },
        {
          name: "Dance",
          degree: "BFA",
          level: "undergraduate",
          description: {
            en: "Broad dance training encompassing multiple styles with performance and choreographic opportunities.",
            "zh-TW":
              "廣泛的舞蹈訓練，涵蓋多種風格，提供表演和編舞機會。",
            es: "Formación amplia en danza que abarca múltiples estilos con oportunidades de interpretación y coreografía.",
          },
        },
        {
          name: "Fine Arts & Design",
          degree: "BFA",
          level: "undergraduate",
          description: {
            en: "Studio arts program covering drawing, painting, sculpture, and design principles.",
            "zh-TW":
              "工作室藝術課程，涵蓋素描、繪畫、雕塑和設計原理。",
            es: "Programa de artes de estudio que cubre dibujo, pintura, escultura y principios de diseño.",
          },
        },
        {
          name: "Stage Production",
          degree: "BFA",
          level: "undergraduate",
          description: {
            en: "Technical theater training in lighting, sound, set design, stage management, and production.",
            "zh-TW":
              "劇場技術訓練，涵蓋燈光、音響、佈景設計、舞台監督和製作。",
            es: "Formación en teatro técnico en iluminación, sonido, diseño de escenografía, dirección de escena y producción.",
          },
        },
        {
          name: "Arts Management",
          degree: "BFA",
          level: "undergraduate",
          description: {
            en: "Business of the arts covering arts administration, marketing, fundraising, and venue management.",
            "zh-TW":
              "藝術經營管理，涵蓋藝術行政、行銷、募資和場館管理。",
            es: "Gestión del negocio artístico que cubre administración de artes, marketing, recaudación de fondos y gestión de sedes.",
          },
        },
        {
          name: "Music Performance",
          degree: "BM",
          level: "undergraduate",
          description: {
            en: "Performance-focused music degree with instrumental or vocal concentration and ensemble participation.",
            "zh-TW":
              "以表演為核心的音樂學位，可選擇器樂或聲樂主修，並參與合奏演出。",
            es: "Título de música enfocado en interpretación con concentración instrumental o vocal y participación en ensamble.",
          },
        },
        {
          name: "Biomedical Sciences",
          degree: "BS",
          level: "undergraduate",
          description: {
            en: "Pre-medical sciences program covering biology, chemistry, anatomy, and research methodology.",
            "zh-TW":
              "醫學預備科學課程，涵蓋生物學、化學、解剖學和研究方法學。",
            es: "Programa de ciencias premédicas que cubre biología, química, anatomía y metodología de investigación.",
          },
        },
        {
          name: "Computer Science",
          degree: "BS",
          level: "undergraduate",
          description: {
            en: "Core computing curriculum including algorithms, software engineering, AI, and systems design.",
            "zh-TW":
              "核心計算課程，包括演算法、軟體工程、人工智慧和系統設計。",
            es: "Currículo de computación central incluyendo algoritmos, ingeniería de software, IA y diseño de sistemas.",
          },
        },
        {
          name: "Computer Networks & Cybersecurity",
          degree: "BS",
          level: "undergraduate",
          description: {
            en: "Network architecture, security protocols, ethical hacking, and enterprise infrastructure.",
            "zh-TW":
              "網路架構、安全協議、資安倫理和企業基礎設施。",
            es: "Arquitectura de redes, protocolos de seguridad, hacking ético e infraestructura empresarial.",
          },
        },
        {
          name: "Data Science",
          degree: "BS",
          level: "undergraduate",
          description: {
            en: "Statistical analysis, machine learning, data visualization, and big data technologies.",
            "zh-TW":
              "統計分析、機器學習、數據視覺化和大數據技術。",
            es: "Análisis estadístico, aprendizaje automático, visualización de datos y tecnologías de big data.",
          },
        },
        {
          name: "Statistics",
          degree: "BS",
          level: "undergraduate",
          description: {
            en: "Mathematical statistics, probability theory, and applied statistical methods.",
            "zh-TW":
              "數理統計、機率理論和應用統計方法。",
            es: "Estadística matemática, teoría de probabilidad y métodos estadísticos aplicados.",
          },
        },
        // --- Graduate ---
        {
          name: "Classical Chinese Dance",
          degree: "MFA",
          level: "graduate",
          description: {
            en: "Advanced study in classical Chinese dance with research, performance, and teaching components.",
            "zh-TW":
              "中國古典舞進階研究，涵蓋研究、表演和教學。",
            es: "Estudio avanzado en danza clásica china con componentes de investigación, interpretación y enseñanza.",
          },
        },
        {
          name: "Dance",
          degree: "MFA",
          level: "graduate",
          description: {
            en: "Graduate dance program with emphasis on creative research, choreography, and performance.",
            "zh-TW":
              "舞蹈研究所課程，重視創意研究、編舞和表演。",
            es: "Programa de posgrado en danza con énfasis en investigación creativa, coreografía e interpretación.",
          },
        },
        {
          name: "Fine Art",
          degree: "MFA",
          level: "graduate",
          description: {
            en: "Advanced studio practice with critical theory, exhibition, and thesis project.",
            "zh-TW":
              "進階工作室實踐，搭配批判理論、展覽和畢業論文專題。",
            es: "Práctica avanzada de estudio con teoría crítica, exhibición y proyecto de tesis.",
          },
        },
        {
          name: "Music Performance",
          degree: "MM",
          level: "graduate",
          description: {
            en: "Graduate-level performance study with recital requirements and advanced musicianship.",
            "zh-TW":
              "研究所演奏課程，含獨奏會要求和進階音樂素養。",
            es: "Estudio de interpretación a nivel de posgrado con requisitos de recital y musicalidad avanzada.",
          },
        },
        {
          name: "Biostatistics",
          degree: "MS",
          level: "graduate",
          description: {
            en: "Applied biostatistics for health sciences research, clinical trials, and epidemiology.",
            "zh-TW":
              "應用於健康科學研究、臨床試驗和流行病學的生物統計。",
            es: "Bioestadística aplicada para investigación en ciencias de la salud, ensayos clínicos y epidemiología.",
          },
        },
        {
          name: "Data Science",
          degree: "MS",
          level: "graduate",
          description: {
            en: "Advanced data science with deep learning, NLP, and applied research projects.",
            "zh-TW":
              "進階數據科學，涵蓋深度學習、自然語言處理和應用研究專題。",
            es: "Ciencia de datos avanzada con aprendizaje profundo, PNL y proyectos de investigación aplicada.",
          },
        },
        {
          name: "Quantum Computing",
          degree: "MS",
          level: "graduate",
          description: {
            en: "Cutting-edge program covering quantum algorithms, quantum information theory, and quantum hardware.",
            "zh-TW":
              "前沿課程，涵蓋量子演算法、量子資訊理論和量子硬體。",
            es: "Programa de vanguardia que cubre algoritmos cuánticos, teoría de información cuántica y hardware cuántico.",
          },
        },
      ],
      tuition: {
        amount: 37950,
        period: "year",
        notes: {
          en: "Full-time: $37,950/year; Part-time: $1,500/credit",
          "zh-TW": "全日制：$37,950/年；兼讀：$1,500/學分",
          es: "Tiempo completo: $37,950/año; Tiempo parcial: $1,500/crédito",
        },
      },
      enrollment: {
        newStudents: 44,
        retentionRate: "88–100%",
      },
      faculty: [
        {
          name: "Classical Chinese Dance Faculty",
          title: "Department (17+ members)",
          department: "Classical Chinese Dance",
          credentials:
            "Faculty from Beijing Academy of Dance, Fei Tian College MFA program, and other elite institutions.",
        },
      ],
      leadership: [
        { name: "Vina Lee", title: "President" },
        { name: "Peter Y. Li", title: "Provost", credentials: "PhD" },
        {
          name: "Joseph Zhao",
          title: "Vice President, Northern Campus",
          credentials: "PhD",
        },
      ],
    } satisfies LocalizedEducationInfo,
  },
  {
    id: "fei-tian-academy",
    name: "Fei Tian Academy of the Arts",
    type: "education",
    address: "140 Galley Hill Rd, Cuddebackville, NY 12729",
    website: "https://feitianacademy.org",
    description: {
      en: "K-12 arts school providing rigorous academic and performing arts education.",
      "zh-TW": "K-12 藝術學校，提供嚴謹的學術和表演藝術教育。",
      es: "Escuela de artes K-12 que brinda educación académica rigurosa y de artes escénicas.",
    },
    sourceUrl: "https://feitianacademy.org",
    coordinates: { lat: 41.4827, lng: -74.5969 },
  },
  {
    id: "touro-com",
    name: "Touro College of Osteopathic Medicine",
    type: "education",
    address: "60 Prospect Ave, Middletown, NY 10940",
    website: "https://tourocom.touro.edu",
    description: {
      en: "Osteopathic medical school with a campus in Middletown, training future physicians and contributing to the local healthcare ecosystem.",
      "zh-TW":
        "在 Middletown 設有校區的骨科醫學院，培育未來醫師並為在地醫療生態系統做出貢獻。",
      es: "Escuela de medicina osteopática con un campus en Middletown, formando futuros médicos y contribuyendo al ecosistema de salud local.",
    },
    sourceUrl: "https://tourocom.touro.edu",
    coordinates: { lat: 41.4467, lng: -74.4187 },
  },
  {
    id: "suny-orange",
    name: "SUNY Orange",
    type: "education",
    address: "115 South St, Middletown, NY 10940",
    website: "https://sunyorange.edu",
    description: {
      en: "Community college serving Orange County with a wide range of associate degree and certificate programs.",
      "zh-TW":
        "服務 Orange County 的社區大學，提供多元的副學士學位和證書課程。",
      es: "Colegio comunitario que sirve al Condado de Orange con una amplia gama de programas de grado asociado y certificados.",
    },
    sourceUrl: "https://sunyorange.edu",
    coordinates: { lat: 41.4413, lng: -74.4244 },
  },

  // ==================== MEDIA & TECHNOLOGY ====================
  {
    id: "gan-jing-world",
    name: "Gan Jing World",
    type: "technology",
    address: "Middletown, NY 10940",
    website: "https://ganjingworld.com",
    description: {
      en: "Technology and video platform headquartered in Middletown, focused on clean, family-friendly content.",
      "zh-TW":
        "總部位於 Middletown 的科技與影音平台，專注於乾淨、適合闔家觀賞的內容。",
      es: "Plataforma de tecnología y video con sede en Middletown, enfocada en contenido limpio y apto para toda la familia.",
    },
    sourceUrl: "https://ganjingworld.com",
    coordinates: { lat: 41.446, lng: -74.422 },
  },
  {
    id: "ntd-television",
    name: "NTD Television",
    type: "media",
    website: "https://ntd.com",
    description: {
      en: "Independent media organization providing news and cultural programming with a presence in the Middletown area.",
      "zh-TW":
        "獨立媒體機構，提供新聞和文化節目，在 Middletown 地區設有據點。",
      es: "Organización de medios independiente que ofrece noticias y programación cultural con presencia en el área de Middletown.",
    },
    sourceUrl: "https://ntd.com",
  },
  {
    id: "epoch-times",
    name: "The Epoch Times",
    type: "media",
    website: "https://theepochtimes.com",
    description: {
      en: "Multi-language media organization with operations connected to the Middletown community.",
      "zh-TW":
        "多語種媒體機構，與 Middletown 社區有密切的營運連結。",
      es: "Organización de medios multilingüe con operaciones conectadas a la comunidad de Middletown.",
    },
    sourceUrl: "https://theepochtimes.com",
  },
  {
    id: "sound-of-hope",
    name: "Sound of Hope Radio",
    type: "media",
    website: "https://soundofhope.org",
    description: {
      en: "International Chinese-language radio network with operations in the Middletown area, broadcasting news and cultural programming.",
      "zh-TW":
        "國際華語廣播網路，在 Middletown 地區設有營運據點，播出新聞和文化節目。",
      es: "Red de radio internacional en idioma chino con operaciones en el área de Middletown, transmitiendo noticias y programación cultural.",
    },
    sourceUrl: "https://soundofhope.org",
  },

  // ==================== GOVERNMENT ====================
  {
    id: "middletown-bid",
    name: "Middletown Business Improvement District",
    type: "government",
    address: "Middletown, NY 10940",
    website: "https://middletownbid.com",
    description: {
      en: "Established in 1992, the BID manages downtown Middletown's business district, coordinating improvements and promotional activities.",
      "zh-TW":
        "成立於 1992 年，管理 Middletown 市中心商業區，協調改善工程和推廣活動。",
      es: "Establecido en 1992, el BID gestiona el distrito comercial del centro de Middletown, coordinando mejoras y actividades de promoción.",
    },
    sourceUrl: "https://middletownbid.com",
  },
];

// ============================================================
// Public resolve function
// ============================================================

export function resolveOrganizations(lang: Language): Organization[] {
  return localizedOrganizations.map((org) => ({
    ...org,
    description: resolveText(org.description, lang),
    additionalInfo: org.additionalInfo
      ? resolveAdditionalInfo(org.additionalInfo, org.type, lang)
      : undefined,
  }));
}

// Re-export the original array name for backward compatibility (English default)
export const organizations: Organization[] = resolveOrganizations("en");
