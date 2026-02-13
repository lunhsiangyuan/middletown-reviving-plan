"use client";

import Link from "next/link";
import { Users, GraduationCap, Building2, TrendingUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const audiences = [
  {
    title: "Personal",
    description: "Discover what Middletown offers for you and your family.",
    icon: Users,
    href: "/for/personal",
    color: "text-blue-600",
    hoverBg: "hover:border-blue-400 hover:bg-blue-50",
  },
  {
    title: "School",
    description: "Educational opportunities and campus development plans.",
    icon: GraduationCap,
    href: "/for/school",
    color: "text-purple-600",
    hoverBg: "hover:border-purple-400 hover:bg-purple-50",
  },
  {
    title: "Government",
    description: "Policy frameworks, grants, and civic partnership programs.",
    icon: Building2,
    href: "/for/government",
    color: "text-red-600",
    hoverBg: "hover:border-red-400 hover:bg-red-50",
  },
  {
    title: "Investment",
    description: "Economic opportunities and development ROI projections.",
    icon: TrendingUp,
    href: "/for/investment",
    color: "text-emerald-600",
    hoverBg: "hover:border-emerald-400 hover:bg-emerald-50",
  },
];

export function AudienceSelector() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-slate-900">
            I am a...
          </h2>
          <p className="text-lg text-slate-600">
            Choose your perspective to see what matters most to you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <Link key={audience.href} href={audience.href} className="min-h-[44px]">
                <Card
                  className={`cursor-pointer border-2 border-transparent transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${audience.hoverBg}`}
                >
                  <CardHeader className="items-center text-center">
                    <div className={`mb-2 rounded-xl bg-white p-3 shadow-sm transition-transform duration-200 group-hover:scale-110 ${audience.color}`}>
                      <Icon className="size-8" />
                    </div>
                    <CardTitle className="text-lg">{audience.title}</CardTitle>
                    <CardDescription>{audience.description}</CardDescription>
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
