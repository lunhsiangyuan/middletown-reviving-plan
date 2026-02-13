"use client";

import { Timeline } from "@/components/sections/timeline";
import { resolveEvents, categoryLabels } from "@/lib/data/timeline";
import { useLanguage } from "@/lib/i18n/language-context";

export function TimelineWrapper() {
  const { language, t } = useLanguage();
  const events = resolveEvents(language);

  // Translate category labels for badges
  const translatedCategoryLabels = Object.fromEntries(
    Object.entries(categoryLabels).map(([key, labels]) => [
      key,
      labels[language] ?? labels.en,
    ])
  );

  return (
    <Timeline
      events={events}
      title={t("home.timeline")}
      categoryLabels={translatedCategoryLabels}
    />
  );
}
