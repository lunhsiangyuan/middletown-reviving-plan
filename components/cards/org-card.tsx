"use client";

import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useLanguage, type Language } from "@/lib/i18n/language-context";

interface OrgCardProps {
  name: string;
  type: string;
  address?: string;
  description: string;
  website?: string;
  sourceUrl: string;
}

const typeBadgeColors: Record<string, string> = {
  healthcare: "bg-emerald-100 text-emerald-800",
  education: "bg-purple-100 text-purple-800",
  media: "bg-sky-100 text-sky-800",
  technology: "bg-sky-100 text-sky-800",
  government: "bg-red-100 text-red-800",
  nonprofit: "bg-amber-100 text-amber-800",
};

const typeLabels: Record<string, Record<Language, string>> = {
  healthcare: { en: "Healthcare", "zh-TW": "醫療", es: "Salud" },
  education: { en: "Education", "zh-TW": "教育", es: "Educación" },
  media: { en: "Media", "zh-TW": "媒體", es: "Medios" },
  technology: { en: "Technology", "zh-TW": "科技", es: "Tecnología" },
  government: { en: "Government", "zh-TW": "政府", es: "Gobierno" },
  nonprofit: { en: "Nonprofit", "zh-TW": "非營利", es: "Sin fines de lucro" },
};

const labels: Record<Language, { website: string; source: string }> = {
  en: { website: "Website", source: "Source" },
  "zh-TW": { website: "官方網站", source: "來源" },
  es: { website: "Sitio web", source: "Fuente" },
};

export function OrgCard({
  name,
  type,
  address,
  description,
  website,
  sourceUrl,
}: OrgCardProps) {
  const { language } = useLanguage();
  const badgeColor = typeBadgeColors[type] || "bg-slate-100 text-slate-800";
  const typeLabel = typeLabels[type]?.[language] ?? type;
  const l = labels[language] ?? labels.en;

  return (
    <Card className="flex h-full flex-col transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-base">{name}</CardTitle>
          <Badge className={badgeColor}>{typeLabel}</Badge>
        </div>
        {address && (
          <CardDescription className="text-xs">{address}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-slate-600">{description}</p>
      </CardContent>
      <CardFooter className="gap-3">
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex cursor-pointer items-center gap-1 text-xs text-blue-600 hover:underline"
          >
            {l.website} <ExternalLink className="size-3" />
          </a>
        )}
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex cursor-pointer items-center gap-1 text-xs text-slate-500 hover:underline"
        >
          {l.source} <ExternalLink className="size-3" />
        </a>
      </CardFooter>
    </Card>
  );
}
