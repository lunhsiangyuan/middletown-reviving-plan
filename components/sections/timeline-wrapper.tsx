"use client";

import { Timeline } from "@/components/sections/timeline";
import { resolveEvents, categoryLabels } from "@/lib/data/timeline";
import { useLanguage } from "@/lib/i18n/language-context";

interface TimelineWrapperProps {
  horizontal?: boolean;
}

export function TimelineWrapper({ horizontal = false }: TimelineWrapperProps) {
  const { language, t } = useLanguage();
  const events = resolveEvents(language);

  // Translate category labels for badges
  const translatedCategoryLabels = Object.fromEntries(
    Object.entries(categoryLabels).map(([key, labels]) => [
      key,
      labels[language] ?? labels.en,
    ])
  );

  const todayLabelMap: Record<string, string> = {
    "zh-TW": "← 今日",
    en: "← Today",
    es: "← Hoy",
  };

  return (
    <Timeline
      events={events}
      title={t("home.timeline")}
      categoryLabels={translatedCategoryLabels}
      horizontal={horizontal}
      todayLabel={todayLabelMap[language] ?? todayLabelMap.en}
    />
  );
}
