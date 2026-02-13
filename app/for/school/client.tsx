"use client";

import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  FlaskConical,
  Globe,
  Stethoscope,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { resolveOrganizations } from "@/lib/data/organizations";
import { useLanguage } from "@/lib/i18n/language-context";
import { content } from "./content";
import type { LucideIcon } from "lucide-react";

const partnerInstitutions = [
  {
    id: "fei-tian-college",
    highlight: "NECHE-accredited",
    programs: ["Dance", "Fine Arts", "Data Science", "Biomedical Sciences", "Quantum Computing", "Biostatistics"],
  },
  {
    id: "touro-com",
    highlight: "Osteopathic Medicine",
    programs: ["Doctor of Osteopathic Medicine"],
  },
  {
    id: "suny-orange",
    highlight: "Community College",
    programs: ["Associate Degrees", "Certificate Programs"],
  },
  {
    id: "fei-tian-academy",
    highlight: "K-12 Arts School",
    programs: ["Performing Arts", "Academic Excellence"],
  },
];

const exchangeIcons: LucideIcon[] = [Globe, BookOpen, GraduationCap];

const researchBadges = [
  "bg-emerald-100 text-emerald-800",
  "bg-sky-100 text-sky-800",
  "bg-amber-100 text-amber-800",
  "bg-purple-100 text-purple-800",
];

const regionalNetwork = [
  { name: "West Point (USMA)", distance: "~20 mi", county: "Orange County" },
  { name: "Columbia University", distance: "~75 mi", county: "New York City" },
  { name: "NYU", distance: "~75 mi", county: "New York City" },
  { name: "Mount Sinai", distance: "~75 mi", county: "New York City" },
  { name: "Vassar College", distance: "~50 mi", county: "Dutchess County" },
  { name: "Marist College", distance: "~55 mi", county: "Dutchess County" },
];

export function SchoolClient() {
  const { language } = useLanguage();
  const c = content[language] ?? content.en;

  const organizations = resolveOrganizations(language);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 px-6 py-16 text-white lg:px-12">
        <div className="max-w-3xl">
          <Badge className="mb-4 bg-white/20 text-white">
            {c.hero.badge}
          </Badge>
          <h1 className="mb-4 text-4xl font-bold">{c.hero.title}</h1>
          <p className="text-lg text-purple-100">{c.hero.desc}</p>
        </div>
      </section>

      {/* Partner Institutions */}
      <section className="px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          {c.partnerInstitutions.title}
        </h2>
        <p className="mb-8 text-slate-600">{c.partnerInstitutions.desc}</p>
        <div className="grid gap-6 sm:grid-cols-2">
          {partnerInstitutions.map((inst) => {
            const org = organizations.find((o) => o.id === inst.id);
            if (!org) return null;
            return (
              <Card key={inst.id}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base">{org.name}</CardTitle>
                    <Badge className="bg-purple-100 text-purple-800">
                      {inst.highlight}
                    </Badge>
                  </div>
                  {org.address && (
                    <CardDescription className="text-xs">
                      {org.address}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-slate-600">{org.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {inst.programs.map((prog) => (
                      <Badge
                        key={prog}
                        variant="outline"
                        className="text-xs font-normal"
                      >
                        {prog}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <a
                    href={org.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-purple-600 hover:underline"
                  >
                    {c.partnerInstitutions.visitWebsite}{" "}
                    <ExternalLink className="size-3" />
                  </a>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Exchange Programs */}
      <section className="border-t bg-slate-50 px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          {c.exchangePrograms.title}
        </h2>
        <p className="mb-8 text-slate-600">{c.exchangePrograms.desc}</p>
        <div className="grid gap-6 lg:grid-cols-3">
          {c.exchangePrograms.items.map((program, i) => {
            const Icon = exchangeIcons[i];
            return (
              <Card key={i}>
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-purple-100">
                    <Icon className="size-5 text-purple-700" />
                  </div>
                  <CardTitle className="text-base">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Research Collaboration */}
      <section className="px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          {c.researchCollaboration.title}
        </h2>
        <p className="mb-8 text-slate-600">{c.researchCollaboration.desc}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {c.researchCollaboration.areas.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-xl border bg-white p-5"
            >
              <FlaskConical className="mt-0.5 size-5 shrink-0 text-purple-500" />
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <p className="font-semibold text-slate-900">{item.area}</p>
                  <Badge className={researchBadges[i]}>{item.area}</Badge>
                </div>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Regional Academic Network */}
      <section className="border-t bg-slate-50 px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          {c.regionalNetwork.title}
        </h2>
        <p className="mb-8 text-slate-600">{c.regionalNetwork.desc}</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {regionalNetwork.map((school) => (
            <div
              key={school.name}
              className="flex items-center justify-between rounded-lg border bg-white px-4 py-3"
            >
              <div>
                <p className="font-medium text-slate-900">{school.name}</p>
                <p className="text-xs text-slate-500">{school.county}</p>
              </div>
              <Badge variant="outline" className="text-xs">
                {school.distance}
              </Badge>
            </div>
          ))}
        </div>
      </section>

      {/* Healthcare Training Pipeline */}
      <section className="px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          {c.healthcarePipeline.title}
        </h2>
        <p className="mb-8 text-slate-600">{c.healthcarePipeline.desc}</p>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
          <div className="flex-1 rounded-xl border bg-purple-50 p-6">
            <Stethoscope className="mb-3 size-8 text-purple-600" />
            <h3 className="mb-2 text-lg font-bold text-purple-900">
              {c.healthcarePipeline.stages[0].name}
            </h3>
            <p className="text-sm text-purple-800">
              {c.healthcarePipeline.stages[0].description}
            </p>
          </div>
          <div className="flex items-center justify-center px-4 text-purple-400">
            <span className="hidden text-3xl lg:block">&rarr;</span>
            <span className="text-2xl lg:hidden">&darr;</span>
          </div>
          <div className="flex-1 rounded-xl border bg-emerald-50 p-6">
            <Stethoscope className="mb-3 size-8 text-emerald-600" />
            <h3 className="mb-2 text-lg font-bold text-emerald-900">
              {c.healthcarePipeline.stages[1].name}
            </h3>
            <p className="text-sm text-emerald-800">
              {c.healthcarePipeline.stages[1].description}
            </p>
          </div>
          <div className="flex items-center justify-center px-4 text-emerald-400">
            <span className="hidden text-3xl lg:block">&rarr;</span>
            <span className="text-2xl lg:hidden">&darr;</span>
          </div>
          <div className="flex-1 rounded-xl border bg-blue-50 p-6">
            <GraduationCap className="mb-3 size-8 text-blue-600" />
            <h3 className="mb-2 text-lg font-bold text-blue-900">
              {c.healthcarePipeline.stages[2].name}
            </h3>
            <p className="text-sm text-blue-800">
              {c.healthcarePipeline.stages[2].description}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 px-6 py-16 text-center text-white lg:px-12">
        <h2 className="mb-3 text-3xl font-bold">{c.cta.title}</h2>
        <p className="mb-8 text-purple-100">{c.cta.desc}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-purple-700 hover:bg-purple-50"
          >
            <Link href="/contact">{c.cta.primaryButton}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 bg-transparent text-white hover:bg-white/10"
          >
            <Link href="/contact">{c.cta.secondaryButton}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
