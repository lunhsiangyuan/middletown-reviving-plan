// Middletown Reviving Plan - Topic-Location Mapping Data
// 每個主題對應的地圖 marker 群組和推薦 zoom/center

import type { MapMarker } from "@/components/ui/map";

export interface TopicLocation {
  topicId: string;
  titleKey: string; // i18n key (e.g. "mapExplorer.topics.campus.title")
  descKey: string; // i18n key (e.g. "mapExplorer.topics.campus.desc")
  icon: string; // lucide icon name
  color: string; // tailwind text color
  bgColor: string; // tailwind bg color
  href: string;
  center: [number, number];
  zoom: number;
  markerIds: string[];
}

export const topicLocations: TopicLocation[] = [
  {
    topicId: "campus",
    titleKey: "mapExplorer.topics.campus.title",
    descKey: "mapExplorer.topics.campus.desc",
    icon: "Building",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    href: "/campus",
    center: [41.455, -74.437],
    zoom: 14,
    markerIds: ["fei-tian-college", "fei-tian-academy", "northern-academy"],
  },
  {
    topicId: "healthcare",
    titleKey: "mapExplorer.topics.healthcare.title",
    descKey: "mapExplorer.topics.healthcare.desc",
    icon: "Heart",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    href: "/healthcare",
    center: [41.445, -74.395],
    zoom: 13,
    markerIds: ["northern-medical-center", "garnet-health"],
  },
  {
    topicId: "education",
    titleKey: "mapExplorer.topics.education.title",
    descKey: "mapExplorer.topics.education.desc",
    icon: "GraduationCap",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    href: "/education",
    center: [41.445, -74.422],
    zoom: 14,
    markerIds: ["suny-orange", "touro-com", "northern-academy", "fei-tian-college"],
  },
  {
    topicId: "revitalization",
    titleKey: "mapExplorer.topics.revitalization.title",
    descKey: "mapExplorer.topics.revitalization.desc",
    icon: "Store",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    href: "/revitalization",
    center: [41.445, -74.42],
    zoom: 15,
    markerIds: ["downtown"],
  },
  {
    topicId: "lifestyle",
    titleKey: "mapExplorer.topics.lifestyle.title",
    descKey: "mapExplorer.topics.lifestyle.desc",
    icon: "Coffee",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    href: "/lifestyle",
    center: [41.445, -74.42],
    zoom: 15,
    markerIds: ["downtown"],
  },
  {
    topicId: "transportation",
    titleKey: "mapExplorer.topics.transportation.title",
    descKey: "mapExplorer.topics.transportation.desc",
    icon: "Train",
    color: "text-sky-600",
    bgColor: "bg-sky-50",
    href: "/transportation",
    center: [41.446, -74.423],
    zoom: 13,
    markerIds: [], // overview — 所有 markers 皆為灰色
  },
  {
    topicId: "technology",
    titleKey: "mapExplorer.topics.technology.title",
    descKey: "mapExplorer.topics.technology.desc",
    icon: "Monitor",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    href: "/case-studies",
    center: [41.446, -74.422],
    zoom: 15,
    markerIds: ["gan-jing-world"],
  },
];

// 所有地圖標記（含 organizations 座標 + 虛擬標記）
export const allMarkers: MapMarker[] = [
  // Healthcare
  {
    id: "northern-medical-center",
    position: [41.4459, -74.4229],
    title: "Northern Medical Center",
    description: "Integrative medical center — Western & Eastern medicine",
  },
  {
    id: "garnet-health",
    position: [41.4427, -74.3669],
    title: "Garnet Health Medical Center",
    description: "Full-service community hospital",
  },
  // Education
  {
    id: "northern-academy",
    position: [41.4451, -74.4265],
    title: "Northern Academy of the Arts",
    description: "College-prep school (Grades 5–12), Niche A+",
  },
  {
    id: "fei-tian-college",
    position: [41.4462, -74.4235],
    title: "Fei Tian College",
    description: "NECHE-accredited — Arts, STEM, Quantum Computing",
  },
  {
    id: "fei-tian-academy",
    position: [41.4827, -74.5969],
    title: "Fei Tian Academy of the Arts",
    description: "K-12 arts school in Cuddebackville",
  },
  {
    id: "touro-com",
    position: [41.4467, -74.4187],
    title: "Touro College of Osteopathic Medicine",
    description: "Osteopathic medical school",
  },
  {
    id: "suny-orange",
    position: [41.4413, -74.4244],
    title: "SUNY Orange",
    description: "Community college serving Orange County",
  },
  // Technology
  {
    id: "gan-jing-world",
    position: [41.446, -74.422],
    title: "Gan Jing World",
    description: "Technology & video platform HQ",
  },
  // Virtual markers
  {
    id: "downtown",
    position: [41.445, -74.42],
    title: "Downtown & North Street",
    description: "$10M DRI investment and historic commercial area",
  },
];
