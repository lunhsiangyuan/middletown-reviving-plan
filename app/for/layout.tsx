"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users, GraduationCap, Building2, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage, type Language } from "@/lib/i18n/language-context";

const sidebarTitle: Record<Language, string> = {
  en: "Audience",
  "zh-TW": "受眾專區",
  es: "Audiencia",
};

const audienceNav = [
  {
    label: { en: "Personal", "zh-TW": "居民", es: "Personal" } as Record<Language, string>,
    href: "/for/personal",
    icon: Users,
    color: "text-blue-600",
    activeBg: "bg-blue-50",
    activeBorder: "border-blue-600",
  },
  {
    label: { en: "School", "zh-TW": "學校", es: "Escuela" } as Record<Language, string>,
    href: "/for/school",
    icon: GraduationCap,
    color: "text-purple-600",
    activeBg: "bg-purple-50",
    activeBorder: "border-purple-600",
  },
  {
    label: { en: "Government", "zh-TW": "政府", es: "Gobierno" } as Record<Language, string>,
    href: "/for/government",
    icon: Building2,
    color: "text-red-600",
    activeBg: "bg-red-50",
    activeBorder: "border-red-600",
  },
  {
    label: { en: "Investment", "zh-TW": "投資", es: "Inversión" } as Record<Language, string>,
    href: "/for/investment",
    icon: TrendingUp,
    color: "text-green-600",
    activeBg: "bg-green-50",
    activeBorder: "border-green-600",
  },
];

export default function ForLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { language } = useLanguage();

  return (
    <div className="pt-16">
      {/* Mobile top bar */}
      <div className="border-b bg-white lg:hidden">
        <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2">
          {audienceNav.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                  active
                    ? `${item.activeBg} ${item.color}`
                    : "text-slate-500 hover:bg-slate-100"
                )}
              >
                <Icon className="size-4" />
                {item.label[language] ?? item.label.en}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl">
        {/* Desktop sidebar */}
        <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-56 shrink-0 border-r bg-white p-4 lg:block">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
            {sidebarTitle[language] ?? sidebarTitle.en}
          </p>
          <nav className="flex flex-col gap-1">
            {audienceNav.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2.5 rounded-lg border-l-2 px-3 py-2.5 text-sm font-medium transition-colors",
                    active
                      ? `${item.activeBg} ${item.color} ${item.activeBorder}`
                      : "border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <Icon className="size-4" />
                  {item.label[language] ?? item.label.en}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main content */}
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
