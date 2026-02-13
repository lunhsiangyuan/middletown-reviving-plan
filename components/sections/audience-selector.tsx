"use client";

import Link from "next/link";
import { Users, GraduationCap, Building2, TrendingUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/language-context";

const audiences = [
  {
    titleKey: "audiences.personal.title",
    descKey: "audiences.personal.shortDesc",
    icon: Users,
    href: "/for/personal",
    color: "text-blue-600",
    hoverBg: "hover:border-blue-400 hover:bg-blue-50",
  },
  {
    titleKey: "audiences.school.title",
    descKey: "audiences.school.shortDesc",
    icon: GraduationCap,
    href: "/for/school",
    color: "text-purple-600",
    hoverBg: "hover:border-purple-400 hover:bg-purple-50",
  },
  {
    titleKey: "audiences.government.title",
    descKey: "audiences.government.shortDesc",
    icon: Building2,
    href: "/for/government",
    color: "text-red-600",
    hoverBg: "hover:border-red-400 hover:bg-red-50",
  },
  {
    titleKey: "audiences.investment.title",
    descKey: "audiences.investment.shortDesc",
    icon: TrendingUp,
    href: "/for/investment",
    color: "text-amber-600",
    hoverBg: "hover:border-amber-400 hover:bg-amber-50",
  },
];

export function AudienceSelector() {
  const { t } = useLanguage();

  return (
    <section className="bg-amber-50/50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-noto-serif-tc)' }}>
            {t("audiences.selectPrompt")}
          </h2>
          <p className="text-lg text-slate-600">
            {t("audiences.selectDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <Link key={audience.href} href={audience.href} className="min-h-[44px]">
                <Card
                  className={`cursor-pointer border-2 border-transparent transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-100/50 ${audience.hoverBg}`}
                >
                  <CardHeader className="items-center text-center">
                    <div className={`mb-2 rounded-xl bg-white p-3 shadow-sm transition-transform duration-200 group-hover:scale-110 ${audience.color}`}>
                      <Icon className="size-8" />
                    </div>
                    <CardTitle className="text-lg">{t(audience.titleKey)}</CardTitle>
                    <CardDescription>{t(audience.descKey)}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
