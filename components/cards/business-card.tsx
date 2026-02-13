"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useLanguage, type Language } from "@/lib/i18n/language-context";

interface BusinessCardProps {
  name: string;
  type: string;
  address: string;
  description: string;
  specialties: string[];
}

const typeLabels: Record<string, Record<Language, string>> = {
  restaurant: { en: "Restaurant", "zh-TW": "餐廳", es: "Restaurante" },
  cafe: { en: "Café", "zh-TW": "咖啡廳", es: "Café" },
  bakery: { en: "Bakery", "zh-TW": "烘焙坊", es: "Panadería" },
  brewery: { en: "Brewery", "zh-TW": "釀酒廠", es: "Cervecería" },
  "department-store": { en: "Department Store", "zh-TW": "百貨公司", es: "Tienda" },
  art: { en: "Art", "zh-TW": "藝術", es: "Arte" },
};

export function BusinessCard({
  name,
  type,
  address,
  description,
  specialties,
}: BusinessCardProps) {
  const { language } = useLanguage();

  return (
    <Card className="flex h-full cursor-pointer flex-col transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-base">{name}</CardTitle>
          <Badge variant="secondary">
            {typeLabels[type]?.[language] ?? type}
          </Badge>
        </div>
        <CardDescription className="text-xs">{address}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-3">
        <p className="text-sm text-slate-600">{description}</p>
        {specialties.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1.5">
            {specialties.map((specialty) => (
              <Badge
                key={specialty}
                variant="outline"
                className="text-xs font-normal"
              >
                {specialty}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
