"use client";

import Link from "next/link";
import {
  Building,
  Heart,
  GraduationCap,
  Store,
  Coffee,
  Train,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/language-context";

const topics = [
  {
    titleKey: "nav.campus",
    descKey: "home.topics.campus",
    icon: Building,
    href: "/campus",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    hoverBorder: "hover:border-indigo-300",
  },
  {
    titleKey: "nav.healthcare",
    descKey: "home.topics.healthcare",
    icon: Heart,
    href: "/healthcare",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    hoverBorder: "hover:border-emerald-300",
  },
  {
    titleKey: "nav.education",
    descKey: "home.topics.education",
    icon: GraduationCap,
    href: "/education",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    hoverBorder: "hover:border-purple-300",
  },
  {
    titleKey: "nav.revitalization",
    descKey: "home.topics.revitalization",
    icon: Store,
    href: "/revitalization",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    hoverBorder: "hover:border-amber-400",
  },
  {
    titleKey: "nav.lifestyle",
    descKey: "home.topics.lifestyle",
    icon: Coffee,
    href: "/lifestyle",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    hoverBorder: "hover:border-rose-300",
  },
  {
    titleKey: "nav.transportation",
    descKey: "home.topics.transportation",
    icon: Train,
    href: "/transportation",
    color: "text-sky-600",
    bgColor: "bg-sky-50",
    hoverBorder: "hover:border-sky-300",
  },
  {
    titleKey: "nav.caseStudies",
    descKey: "home.topics.caseStudies",
    icon: BookOpen,
    href: "/case-studies",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    hoverBorder: "hover:border-indigo-300",
  },
];

export function TopicsGrid() {
  const { t } = useLanguage();

  return (
    <section id="explore" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-amber-600">
            {t("home.explore.tagline")}
          </p>
          <h2 className="mb-3 text-3xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-noto-serif-tc)' }}>
            {t("home.explore.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            {t("home.explore.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <Link key={topic.href} href={topic.href}>
                <Card
                  className={`h-full cursor-pointer border-2 border-transparent transition-all duration-200 hover:shadow-lg ${topic.hoverBorder}`}
                >
                  <CardHeader>
                    <div
                      className={`mb-3 flex size-12 items-center justify-center rounded-xl ${topic.bgColor}`}
                    >
                      <Icon className={`size-6 ${topic.color}`} />
                    </div>
                    <CardTitle className="flex items-center justify-between text-lg">
                      {t(topic.titleKey)}
                      <ArrowRight className="size-4 text-slate-400" />
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {t(topic.descKey)}
                    </CardDescription>
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
