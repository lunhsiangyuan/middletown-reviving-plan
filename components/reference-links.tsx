"use client";

import { ExternalLink } from "lucide-react";
import { useLanguage, type Language } from "@/lib/i18n/language-context";

interface Reference {
  title: string;
  url: string;
  type: string;
}

interface ReferenceLinksProps {
  references: Reference[];
}

const sectionTitle: Record<Language, string> = {
  en: "References & Sources",
  "zh-TW": "參考資料與來源",
  es: "Referencias y fuentes",
};

const typeLabels: Record<string, Record<Language, string>> = {
  government: { en: "Government", "zh-TW": "政府", es: "Gobierno" },
  education: { en: "Education", "zh-TW": "教育", es: "Educación" },
  media: { en: "Media", "zh-TW": "媒體", es: "Medios" },
  healthcare: { en: "Healthcare", "zh-TW": "醫療", es: "Salud" },
  business: { en: "Business", "zh-TW": "商業", es: "Negocios" },
  nonprofit: { en: "Nonprofit", "zh-TW": "非營利", es: "Sin fines de lucro" },
  research: { en: "Research", "zh-TW": "研究", es: "Investigación" },
  organization: { en: "Organization", "zh-TW": "機構", es: "Organización" },
  technology: { en: "Technology", "zh-TW": "科技", es: "Tecnología" },
  academic: { en: "Academic", "zh-TW": "學術", es: "Académico" },
  news: { en: "News", "zh-TW": "新聞", es: "Noticias" },
};

export function ReferenceLinks({ references }: ReferenceLinksProps) {
  const { language } = useLanguage();

  // Group references by type
  const grouped = references.reduce<Record<string, Reference[]>>(
    (acc, ref) => {
      if (!acc[ref.type]) acc[ref.type] = [];
      acc[ref.type].push(ref);
      return acc;
    },
    {}
  );

  return (
    <section className="border-t bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-slate-500">
          {sectionTitle[language] ?? sectionTitle.en}
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(grouped).map(([type, refs]) => (
            <div key={type}>
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-400">
                {typeLabels[type]?.[language] ?? type}
              </p>
              <ul className="flex flex-col gap-1.5">
                {refs.map((ref) => (
                  <li key={ref.url}>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-slate-600 transition-colors hover:text-blue-700"
                    >
                      <ExternalLink className="size-3 shrink-0 text-slate-400" />
                      {ref.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
