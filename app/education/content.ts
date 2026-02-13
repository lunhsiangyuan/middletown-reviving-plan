import type { Language } from "@/lib/i18n/language-context";

const en = {
  header: {
    badge: "Education",
    title: "Education & Academic Excellence",
    desc: "Five institutions create a unique academic corridor, making Middletown a growing center for education and innovation.",
  },
  northernAcademy: {
    title: "Northern Academy of the Arts",
    badge: "Grades 5–12",
    desc: "Northern Academy of the Arts is a college-preparatory boarding and day school combining rigorous classical academics with world-class arts training. Founded in 2016 and accredited by the Middle States Association, the school draws students from 15 countries and maintains a 100% graduation rate.",
    programsLabel: "Programs & Tracks",
    tuitionLabel: "Tuition",
    studentsLabel: "students",
    stats: {
      gradRate: "Graduation Rate",
      sat: "Avg. SAT",
      niche: "Niche Rating",
      countries: "Countries",
    },
  },
  feiTianCollege: {
    title: "Fei Tian College",
    badge: "NECHE Accredited",
    desc: "Fei Tian College is accredited by the New England Commission of Higher Education (NECHE) and offers a distinctive blend of traditional arts and modern academic programs across two campuses. The college aspires to grow to 5,000 students, establishing itself as a major educational anchor in the region.",
    programsLabel: "Academic Programs",
    campusesLabel: "Campuses",
    tuitionLabel: "Tuition",
    retentionLabel: "Retention",
    undergrad: "Undergraduate",
    grad: "Graduate",
  },
  feiTianAcademy: {
    title: "Fei Tian Academy of the Arts",
    badge: "K-12",
    desc: "Fei Tian Academy of the Arts provides rigorous academic and performing arts education from kindergarten through 12th grade. The school's focus on classical arts training, combined with comprehensive academic curricula, produces well-rounded graduates prepared for top universities.",
  },
  touro: {
    title: "Touro College of Osteopathic Medicine",
    badge: "Medical School",
    desc: "Touro COM's Middletown campus brings medical education to the heart of the city. Hundreds of medical students live, study, and contribute to the community, strengthening the local healthcare pipeline and adding vitality to the downtown area.",
  },
  sunyOrange: {
    title: "SUNY Orange",
    badge: "Community College",
    desc: "SUNY Orange serves Orange County with a wide range of associate degree and certificate programs. Its Middletown campus provides accessible, affordable higher education and workforce training that supports local economic development.",
  },
  regional: {
    title: "Regional Academic Connections",
    cards: [
      {
        title: "West Point (U.S. Military Academy)",
        desc: "Located in Orange County, the U.S. Military Academy at West Point adds prestige to the region's educational landscape and creates opportunities for academic and community collaboration.",
      },
      {
        title: "NYC Ivy League Proximity",
        desc: "Middletown's position just 90 minutes from New York City provides access to Columbia University, NYU, and other world-class institutions for research partnerships, guest lectures, and student exchange programs.",
      },
    ],
  },
};

export type EducationContent = typeof en;

const zhTW: EducationContent = {
  header: {
    badge: "教育",
    title: "教育與學術卓越",
    desc: "五所教育機構形成獨特的學術走廊，使 Middletown 成為日益成長的教育與創新中心。",
  },
  northernAcademy: {
    title: "Northern Academy of the Arts",
    badge: "5–12 年級",
    desc: "Northern Academy of the Arts 是一所結合嚴謹古典學術與世界級藝術訓練的寄宿暨走讀大學預備學校。學校成立於 2016 年，獲 Middle States Association 認證，招收來自 15 個國家的學生，維持 100% 畢業率。",
    programsLabel: "課程方向",
    tuitionLabel: "學費",
    studentsLabel: "名學生",
    stats: {
      gradRate: "畢業率",
      sat: "平均 SAT",
      niche: "Niche 評級",
      countries: "個國家",
    },
  },
  feiTianCollege: {
    title: "Fei Tian College",
    badge: "NECHE 認證",
    desc: "Fei Tian College 獲得新英格蘭高等教育委員會 (NECHE) 認證，在兩個校區提供傳統藝術與現代學術課程的獨特融合。該學院立志成長至 5,000 名學生，確立其作為該地區重要教育核心的地位。",
    programsLabel: "學術課程",
    campusesLabel: "校區",
    tuitionLabel: "學費",
    retentionLabel: "留校率",
    undergrad: "本科課程",
    grad: "研究所課程",
  },
  feiTianAcademy: {
    title: "Fei Tian Academy of the Arts",
    badge: "K-12",
    desc: "Fei Tian Academy of the Arts 提供從幼稒園到十二年級的嚴謹學術與表演藝術教育。學校專注於古典藝術訓練，結合全面的學術課程，培養出準備進入頂尖大學的全方位畢業生。",
  },
  touro: {
    title: "Touro College of Osteopathic Medicine",
    badge: "醫學院",
    desc: "Touro COM 的 Middletown 校區將醫學教育帶到城市中心。數百名醫學生在此生活、學習並為社區做出貢獻，加強了當地醫療保健人才梯隊，並為市中心增添活力。",
  },
  sunyOrange: {
    title: "SUNY Orange",
    badge: "社區學院",
    desc: "SUNY Orange 為 Orange 郡提供廣泛的副學士學位和證書課程。其 Middletown 校區提供可及且負擔得起的高等教育和勞動力培訓，支持當地經濟發展。",
  },
  regional: {
    title: "區域學術連結",
    cards: [
      {
        title: "West Point（美國軍事學院）",
        desc: "位於 Orange 郡的美國軍事學院 West Point 為該地區的教育版圖增添聲望，並創造學術與社區合作的機會。",
      },
      {
        title: "鄰近紐約市常春藤盟校",
        desc: "Middletown 距紐約市僅 90 分鐘車程，可接觸 Columbia University、NYU 及其他世界級機構，進行研究合作、客座講座和學生交流計畫。",
      },
    ],
  },
};

const es: EducationContent = {
  header: {
    badge: "Educación",
    title: "Educación y Excelencia Académica",
    desc: "Cinco instituciones educativas crean un corredor académico único, convirtiendo a Middletown en un centro creciente de educación e innovación.",
  },
  northernAcademy: {
    title: "Northern Academy of the Arts",
    badge: "Grados 5–12",
    desc: "Northern Academy of the Arts es una escuela preparatoria de internado y externado que combina rigurosos estudios clásicos con formación artística de clase mundial. Fundada en 2016 y acreditada por la Middle States Association, la escuela atrae estudiantes de 15 países y mantiene una tasa de graduación del 100%.",
    programsLabel: "Programas y Pistas",
    tuitionLabel: "Matrícula",
    studentsLabel: "estudiantes",
    stats: {
      gradRate: "Tasa de Graduación",
      sat: "SAT Promedio",
      niche: "Calificación Niche",
      countries: "Países",
    },
  },
  feiTianCollege: {
    title: "Fei Tian College",
    badge: "Acreditado por NECHE",
    desc: "Fei Tian College está acreditado por la Comisión de Educación Superior de Nueva Inglaterra (NECHE) y ofrece una combinación distintiva de artes tradicionales y programas académicos modernos en dos campus. La universidad aspira a crecer a 5,000 estudiantes, estableciéndose como un importante ancla educativa en la región.",
    programsLabel: "Programas Académicos",
    campusesLabel: "Campus",
    tuitionLabel: "Matrícula",
    retentionLabel: "Retención",
    undergrad: "Pregrado",
    grad: "Posgrado",
  },
  feiTianAcademy: {
    title: "Fei Tian Academy of the Arts",
    badge: "K-12",
    desc: "Fei Tian Academy of the Arts ofrece educación académica rigurosa y artes escénicas desde jardín de infantes hasta el grado 12. El enfoque de la escuela en la formación de artes clásicas, combinado con planes de estudio académicos integrales, produce graduados completos preparados para las mejores universidades.",
  },
  touro: {
    title: "Touro College of Osteopathic Medicine",
    badge: "Escuela de Medicina",
    desc: "El campus de Touro COM en Middletown lleva la educación médica al corazón de la ciudad. Cientos de estudiantes de medicina viven, estudian y contribuyen a la comunidad, fortaleciendo el canal local de atención médica y añadiendo vitalidad al centro de la ciudad.",
  },
  sunyOrange: {
    title: "SUNY Orange",
    badge: "Colegio Comunitario",
    desc: "SUNY Orange sirve al Condado de Orange con una amplia gama de programas de grado asociado y certificados. Su campus en Middletown proporciona educación superior accesible y asequible y capacitación laboral que apoya el desarrollo económico local.",
  },
  regional: {
    title: "Conexiones Académicas Regionales",
    cards: [
      {
        title: "West Point (Academia Militar de EE.UU.)",
        desc: "Ubicada en el Condado de Orange, la Academia Militar de Estados Unidos en West Point añade prestigio al panorama educativo de la región y crea oportunidades para la colaboración académica y comunitaria.",
      },
      {
        title: "Proximidad a la Ivy League de NYC",
        desc: "La posición de Middletown a solo 90 minutos de la Ciudad de Nueva York proporciona acceso a Columbia University, NYU y otras instituciones de clase mundial para asociaciones de investigación, conferencias invitadas y programas de intercambio estudiantil.",
      },
    ],
  },
};

export const content: Record<Language, EducationContent> = {
  en,
  "zh-TW": zhTW,
  es,
};
