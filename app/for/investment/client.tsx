"use client";

import Link from "next/link";
import Image from "next/image";
import {
  TrendingUp,
  Building2,
  MapPin,
  Users,
  DollarSign,
  Briefcase,
  Landmark,
  Train,
  GraduationCap,
  FileDown,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage, type Language } from "@/lib/i18n/language-context";
import { content } from "./content";

/* ---------- Non-text constants ---------- */

type SectorType =
  | "Technology"
  | "Media"
  | "Education"
  | "Healthcare"
  | "Retail"
  | "Food & Beverage";

const sectorLabels: Record<SectorType, Record<Language, string>> = {
  Technology: { en: "Technology", "zh-TW": "科技", es: "Tecnología" },
  Media: { en: "Media", "zh-TW": "媒體", es: "Medios" },
  Education: { en: "Education", "zh-TW": "教育", es: "Educación" },
  Healthcare: { en: "Healthcare", "zh-TW": "醫療", es: "Salud" },
  Retail: { en: "Retail", "zh-TW": "零售", es: "Comercio" },
  "Food & Beverage": { en: "Food & Beverage", "zh-TW": "餐飲", es: "Alimentos" },
};

const sectorBadgeColors: Record<SectorType, string> = {
  Technology: "bg-violet-100 text-violet-800",
  Media: "bg-sky-100 text-sky-800",
  Education: "bg-purple-100 text-purple-800",
  Healthcare: "bg-emerald-100 text-emerald-800",
  Retail: "bg-amber-100 text-amber-800",
  "Food & Beverage": "bg-orange-100 text-orange-800",
};

const sectorGradients: Record<SectorType, string> = {
  Technology: "from-violet-500 to-violet-700",
  Media: "from-sky-500 to-sky-700",
  Education: "from-purple-500 to-purple-700",
  Healthcare: "from-emerald-500 to-emerald-700",
  Retail: "from-amber-500 to-amber-700",
  "Food & Beverage": "from-orange-500 to-orange-700",
};

const caseImages: Record<string, string> = {
  "Gan Jing World": "/images/ganjingworld.png",
  "NTD Television": "/images/ntd.png",
  "The Epoch Times": "/images/epochtimes.png",
  "Sound of Hope Radio": "/images/soundofhope.png",
  "Fei Tian College": "/images/feitian-college.png",
  "Fei Tian Academy": "/images/feitian-academy.png",
  "Touro College of Osteopathic Medicine": "/images/touro.png",
  "Northern Medical Center": "/images/nmc.png",
};

const caseWebsites: Record<string, string> = {
  "Gan Jing World": "https://www.ganjingworld.com",
  "NTD Television": "https://www.ntd.com",
  "The Epoch Times": "https://www.theepochtimes.com",
  "Sound of Hope Radio": "https://www.soundofhope.org",
  "Fei Tian College": "https://www.feitian.edu",
  "Fei Tian Academy": "https://www.feitianacademy.org",
  "Touro College of Osteopathic Medicine": "https://tourocom.touro.edu",
  "Northern Medical Center": "https://www.northernmedicalcenter.com",
};

const marketStatIcons = [DollarSign, Users, Landmark, Building2];

const opportunityIcons = [
  Building2,
  GraduationCap,
  TrendingUp,
  Briefcase,
  DollarSign,
  MapPin,
];

const strategicIcons = [Train, MapPin, GraduationCap, Landmark];

/* ---------- Sub-component ---------- */

function InvestmentCaseCard({
  name,
  sector,
  description,
  visitWebsiteLabel,
}: {
  name: string;
  sector: string;
  description: string;
  visitWebsiteLabel: string;
}) {
  const { language } = useLanguage();
  const badgeColor = sectorBadgeColors[sector as SectorType];
  const gradient = sectorGradients[sector as SectorType];
  const initial = name.charAt(0);
  const image = caseImages[name];
  const website = caseWebsites[name];
  const sectorText = sectorLabels[sector as SectorType]?.[language] ?? sector;

  return (
    <div className="group overflow-hidden rounded-xl border bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      {/* Image / Placeholder */}
      {image ? (
        <div className="relative h-[225px] w-full overflow-hidden">
          <Image
            src={image}
            alt={`${name} website screenshot`}
            width={400}
            height={225}
            className="object-cover rounded-t-lg"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
      ) : (
        <div
          className={`flex h-[225px] w-full items-center justify-center rounded-t-lg bg-gradient-to-br ${gradient}`}
        >
          <span className="text-6xl font-bold text-white/80">{initial}</span>
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold leading-tight text-slate-900">
            {name}
          </h3>
          <Badge className={`shrink-0 text-[10px] ${badgeColor}`}>
            {sectorText}
          </Badge>
        </div>
        <p className="mb-3 text-xs leading-relaxed text-slate-600">
          {description}
        </p>
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-green-700 transition-colors hover:text-green-900"
          >
            <ExternalLink className="size-3" />
            {visitWebsiteLabel}
          </a>
        )}
      </div>
    </div>
  );
}

/* ---------- Main Component ---------- */

export function InvestmentClient() {
  const { language } = useLanguage();
  const c = content[language] ?? content.en;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 px-6 py-16 text-white lg:px-12">
        <div className="max-w-3xl">
          <Badge className="mb-4 bg-white/20 text-white">
            {c.hero.badge}
          </Badge>
          <h1 className="mb-4 text-4xl font-bold">
            {c.hero.title}
          </h1>
          <p className="text-lg text-green-100">
            {c.hero.desc}
          </p>
        </div>
      </section>

      {/* Market Overview */}
      <section className="px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          {c.marketSection.title}
        </h2>
        <p className="mb-8 text-slate-600">
          {c.marketSection.desc}
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {c.marketSection.stats.map((stat, idx) => {
            const Icon = marketStatIcons[idx];
            return (
              <div
                key={stat.label}
                className="rounded-xl border bg-gradient-to-b from-white to-green-50 p-6 text-center"
              >
                <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-xl bg-green-100">
                  <Icon className="size-6 text-green-700" />
                </div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  {stat.label}
                </p>
                <p className="mt-1 text-2xl font-bold text-green-700">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs text-slate-500">{stat.detail}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Existing Investment Cases */}
      <section className="border-t bg-slate-50 px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          {c.investmentCasesSection.title}
        </h2>
        <p className="mb-8 text-slate-600">
          {c.investmentCasesSection.desc}
        </p>
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {c.investmentCasesSection.cases.map((item) => (
            <InvestmentCaseCard
              key={item.name}
              name={item.name}
              sector={item.sector}
              description={item.description}
              visitWebsiteLabel={c.investmentCasesSection.visitWebsite}
            />
          ))}
        </div>
      </section>

      {/* Opportunity Sectors */}
      <section className="px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          {c.opportunitySection.title}
        </h2>
        <p className="mb-8 text-slate-600">
          {c.opportunitySection.desc}
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {c.opportunitySection.sectors.map((sector, idx) => {
            const Icon = opportunityIcons[idx];
            return (
              <Card key={sector.title}>
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-green-100">
                    <Icon className="size-5 text-green-700" />
                  </div>
                  <CardTitle className="text-base">{sector.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    {sector.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Strategic Advantages */}
      <section className="border-t bg-slate-50 px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          {c.strategicSection.title}
        </h2>
        <p className="mb-8 text-slate-600">
          {c.strategicSection.desc}
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          {c.strategicSection.advantages.map((adv, idx) => {
            const Icon = strategicIcons[idx];
            return (
              <div
                key={adv.title}
                className="flex items-start gap-4 rounded-xl border bg-white p-6"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-green-100">
                  <Icon className="size-6 text-green-700" />
                </div>
                <div>
                  <p className="mb-1 text-lg font-semibold text-slate-900">
                    {adv.title}
                  </p>
                  <p className="text-sm text-slate-600">{adv.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ROI Analysis */}
      <section className="px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          {c.roiSection.title}
        </h2>
        <p className="mb-8 text-slate-600">
          {c.roiSection.desc}
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Home Value Appreciation */}
          <div className="rounded-xl border bg-gradient-to-b from-white to-green-50 p-6">
            <h3 className="mb-4 text-lg font-bold text-slate-900">
              {c.roiSection.homeValue.title}
            </h3>
            <div className="mb-4 flex items-end gap-3">
              <div className="flex-1">
                <p className="text-xs text-slate-500">{c.roiSection.homeValue.year2019}</p>
                <div className="mt-1 h-4 rounded-full bg-slate-200">
                  <div
                    className="h-4 rounded-full bg-slate-400"
                    style={{ width: "61%" }}
                  />
                </div>
                <p className="mt-1 text-sm font-medium text-slate-600">
                  {c.roiSection.homeValue.price2019}
                </p>
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-500">{c.roiSection.homeValue.year2025}</p>
                <div className="mt-1 h-4 rounded-full bg-green-200">
                  <div
                    className="h-4 rounded-full bg-green-600"
                    style={{ width: "100%" }}
                  />
                </div>
                <p className="mt-1 text-sm font-bold text-green-700">{c.roiSection.homeValue.price2025}</p>
              </div>
            </div>
            <div className="rounded-lg bg-green-100 p-3 text-center">
              <p className="text-2xl font-bold text-green-800">{c.roiSection.homeValue.appreciation}</p>
              <p className="text-xs text-green-700">
                {c.roiSection.homeValue.appreciationDetail}
              </p>
            </div>
          </div>

          {/* Commercial & Public Investment */}
          <div className="rounded-xl border bg-gradient-to-b from-white to-green-50 p-6">
            <h3 className="mb-4 text-lg font-bold text-slate-900">
              {c.roiSection.publicPrivate.title}
            </h3>
            <div className="flex flex-col gap-3">
              {c.roiSection.publicPrivate.items.map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-lg bg-white p-3">
                  <p className="text-sm text-slate-700">{item.label}</p>
                  <p className="font-bold text-green-700">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg bg-green-100 p-3 text-center">
              <p className="text-2xl font-bold text-green-800">{c.roiSection.publicPrivate.total}</p>
              <p className="text-xs text-green-700">
                {c.roiSection.publicPrivate.totalLabel}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 px-6 py-16 text-center text-white lg:px-12">
        <h2 className="mb-3 text-3xl font-bold">{c.cta.title}</h2>
        <p className="mb-8 text-green-100">
          {c.cta.desc}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-green-700 hover:bg-green-50"
          >
            <Link href="/contact">{c.cta.scheduleConsultation}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 bg-transparent text-white hover:bg-white/10"
          >
            <Link href="/for/government">
              <FileDown className="mr-1 size-4" />
              {c.cta.downloadDeck}
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
