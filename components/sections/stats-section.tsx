"use client";

import { DollarSign, MapPin, Users, Home } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

const stats = [
  {
    labelKey: "stats.driInvestment",
    value: "$10M",
    icon: DollarSign,
    descKey: "stats.driDesc",
  },
  {
    labelKey: "stats.campusSize",
    value: "270",
    icon: MapPin,
    descKey: "stats.campusDesc",
  },
  {
    labelKey: "stats.population",
    value: "30,345",
    icon: Users,
    descKey: "stats.populationDesc",
  },
  {
    labelKey: "stats.avgHome",
    value: "$395K",
    icon: Home,
    descKey: "stats.avgHomeDesc",
  },
];

export function StatsSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-violet-900 to-indigo-950 py-16">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 size-96 rounded-full bg-amber-400 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 size-96 rounded-full bg-violet-400 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.labelKey}
                className="group cursor-default rounded-2xl p-6 text-center transition-all duration-200 hover:scale-105 hover:bg-white/5"
              >
                <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-amber-500/20 transition-colors group-hover:bg-amber-500/30">
                  <Icon className="size-6 text-amber-300" />
                </div>
                <p className="text-3xl font-bold text-amber-300 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-violet-200">
                  {t(stat.labelKey)}
                </p>
                <p className="mt-0.5 text-xs text-violet-300/70">
                  {t(stat.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
