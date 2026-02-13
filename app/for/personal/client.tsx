"use client";

import Link from "next/link";
import {
  Heart,
  Home,
  Users,
  Briefcase,
  Train,
  DollarSign,
  MapPin,
  Sun,
  UtensilsCrossed,
  Stethoscope,
  Armchair,
  TreePine,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/i18n/language-context";
import { content } from "./content";
import type { LucideIcon } from "lucide-react";

const qualityOfLifeIcons: LucideIcon[] = [TreePine, Heart, Home];

const retirementIcons: { icon: LucideIcon; bgColor: string; iconColor: string }[] = [
  { icon: Armchair, bgColor: "bg-amber-100", iconColor: "text-amber-700" },
  { icon: UtensilsCrossed, bgColor: "bg-green-100", iconColor: "text-green-700" },
  { icon: Sun, bgColor: "bg-sky-100", iconColor: "text-sky-700" },
  { icon: Stethoscope, bgColor: "bg-rose-100", iconColor: "text-rose-700" },
];

const communityIcons: LucideIcon[] = [Users, MapPin];

const transportIcons: LucideIcon[] = [Train, DollarSign, MapPin];

const sectorBadges = [
  "bg-emerald-100 text-emerald-800",
  "bg-purple-100 text-purple-800",
  "bg-sky-100 text-sky-800",
  "bg-amber-100 text-amber-800",
];

export function PersonalClient() {
  const { language } = useLanguage();
  const c = content[language] ?? content.en;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 px-6 py-16 text-white lg:px-12">
        <div className="max-w-3xl">
          <Badge className="mb-4 bg-white/20 text-white">{c.hero.badge}</Badge>
          <h1 className="mb-4 text-4xl font-bold">{c.hero.title}</h1>
          <p className="text-lg text-blue-100">{c.hero.desc}</p>
        </div>
      </section>

      {/* Why Middletown */}
      <section className="px-6 py-14 lg:px-12">
        <h2 className="mb-8 text-2xl font-bold text-slate-900">
          {c.whyMiddletown.title}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {c.whyMiddletown.items.map((item, i) => {
            const Icon = qualityOfLifeIcons[i];
            return (
              <Card key={i}>
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-blue-100">
                    <Icon className="size-5 text-blue-700" />
                  </div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Retirement & Quality Living */}
      <section className="border-t bg-gradient-to-br from-amber-50 to-orange-50 px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          {c.retirement.title}
        </h2>
        <p className="mb-8 text-slate-600">{c.retirement.desc}</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {c.retirement.cards.map((card, i) => {
            const { icon: Icon, bgColor, iconColor } = retirementIcons[i];
            return (
              <Card key={i}>
                <CardHeader>
                  <div
                    className={`mb-2 flex size-10 items-center justify-center rounded-lg ${bgColor}`}
                  >
                    <Icon className={`size-5 ${iconColor}`} />
                  </div>
                  <CardTitle className="text-base">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{card.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Cost of Living */}
      <section className="border-t bg-slate-50 px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          {c.costOfLiving.title}
        </h2>
        <p className="mb-8 text-slate-600">{c.costOfLiving.desc}</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {c.costOfLiving.stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-xl border bg-white p-5 text-center"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                {stat.label}
              </p>
              <p className="mt-1 text-2xl font-bold text-blue-700">
                {stat.value}
              </p>
              {stat.change && (
                <p className="mt-1 text-xs text-slate-500">{stat.change}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Community & Culture */}
      <section className="px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          {c.community.title}
        </h2>
        <p className="mb-8 text-slate-600">{c.community.desc}</p>
        <div className="grid gap-6 lg:grid-cols-2">
          {c.community.cards.map((card, i) => {
            const Icon = communityIcons[i];
            return (
              <Card key={i}>
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-blue-100">
                    <Icon className="size-5 text-blue-700" />
                  </div>
                  <CardTitle className="text-base">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{card.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Employment & Economy */}
      <section className="border-t bg-slate-50 px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          {c.employment.title}
        </h2>
        <p className="mb-8 text-slate-600">{c.employment.desc}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {c.employment.sectors.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-xl border bg-white p-5"
            >
              <Briefcase className="mt-0.5 size-5 shrink-0 text-slate-400" />
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <p className="font-semibold text-slate-900">{item.sector}</p>
                  <Badge className={sectorBadges[i]}>{item.sector}</Badge>
                </div>
                <p className="text-sm text-slate-600">{item.companies}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Getting Around */}
      <section className="px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          {c.gettingAround.title}
        </h2>
        <p className="mb-8 text-slate-600">{c.gettingAround.desc}</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {c.gettingAround.options.map((option, i) => {
            const Icon = transportIcons[i];
            return (
              <div key={i} className="rounded-xl border bg-white p-5">
                <Icon className="mb-3 size-6 text-blue-600" />
                <p className="font-semibold text-slate-900">{option.title}</p>
                <p className="mt-1 text-sm text-slate-600">
                  {option.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 px-6 py-16 text-center text-white lg:px-12">
        <h2 className="mb-3 text-3xl font-bold">{c.cta.title}</h2>
        <p className="mb-8 text-blue-100">{c.cta.desc}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-700 hover:bg-blue-50"
          >
            <Link href="/contact">{c.cta.primaryButton}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 bg-transparent text-white hover:bg-white/10"
          >
            <Link href="/collaborate">{c.cta.secondaryButton}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
