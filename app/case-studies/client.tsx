"use client";

import {
  BookOpen,
  CheckCircle2,
  Lightbulb,
  Users,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ReferenceLinks } from "@/components/reference-links";
import { CTASection } from "@/components/sections/cta-section";
import { resolveCaseStudies } from "@/lib/data/case-studies";
import { references } from "@/lib/data/references";
import { useLanguage } from "@/lib/i18n/language-context";
import { content } from "./content";

const caseStudyRefs = references.filter((ref) =>
  ["ny-dri-middletown", "record-online-revitalization"].includes(ref.id)
);

export function CaseStudiesClient() {
  const { language } = useLanguage();
  const c = content[language] ?? content.en;
  const studies = resolveCaseStudies(language);

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-violet-900 py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/3 size-96 rounded-full bg-violet-400 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-indigo-200">
            <BookOpen className="size-4" />
            {c.header.badge}
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            {c.header.title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-indigo-200">
            {c.header.desc}
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {studies.map((study) => (
              <Card key={study.id} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-violet-50">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">
                        {study.name}, {study.state}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        <span className="flex items-center gap-1.5">
                          <Users className="size-3.5" />
                          {c.card.populationLabel}{" "}
                          {study.population.toLocaleString()}
                        </span>
                      </CardDescription>
                    </div>
                    <Badge className="bg-indigo-100 text-indigo-800">
                      {c.card.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid gap-6 lg:grid-cols-2">
                    {/* Strategy & Outcomes */}
                    <div>
                      <p className="mb-3 text-sm font-medium text-slate-500">
                        {c.card.keyStrategyLabel}
                      </p>
                      <p className="mb-4 font-medium text-slate-900">
                        {study.keyStrategy}
                      </p>
                      <p className="mb-3 text-sm font-medium text-slate-500">
                        {c.card.outcomesLabel}
                      </p>
                      <ul className="flex flex-col gap-2">
                        {study.outcomes.map((outcome, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-slate-600"
                          >
                            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Lessons for Middletown */}
                    <div className="rounded-lg border-2 border-indigo-100 bg-indigo-50 p-5">
                      <div className="mb-3 flex items-center gap-2">
                        <Lightbulb className="size-5 text-indigo-600" />
                        <p className="font-semibold text-indigo-900">
                          {c.card.lessonsTitle}
                        </p>
                      </div>
                      <p className="text-sm leading-relaxed text-indigo-800">
                        {study.lessonsForMiddletown}
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <a
                    href={study.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-slate-500 hover:text-indigo-600 hover:underline"
                  >
                    {c.card.visitPrefix} {study.name} {c.card.visitSuffix}
                    <ArrowRight className="size-3" />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How Middletown Compares */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-slate-900">
            {c.comparison.title}
          </h2>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-lg border bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    {c.comparison.tableHeaders.city}
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-slate-700">
                    {c.comparison.tableHeaders.population}
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    {c.comparison.tableHeaders.keyStrategy}
                  </th>
                </tr>
              </thead>
              <tbody>
                {studies.map((study) => (
                  <tr key={study.id} className="border-b last:border-b-0">
                    <td className="px-4 py-3 font-medium text-slate-900">
                      {study.name}, {study.state}
                    </td>
                    <td className="px-4 py-3 text-right text-slate-600">
                      {study.population.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      {study.keyStrategy}
                    </td>
                  </tr>
                ))}
                <tr className="bg-indigo-50 font-medium">
                  <td className="px-4 py-3 text-indigo-900">
                    {c.comparison.middletown.name}
                  </td>
                  <td className="px-4 py-3 text-right text-indigo-900">
                    {c.comparison.middletown.population}
                  </td>
                  <td className="px-4 py-3 text-indigo-900">
                    {c.comparison.middletown.strategy}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 rounded-lg border-2 border-indigo-200 bg-indigo-50 p-6">
            <h3 className="mb-3 text-lg font-semibold text-indigo-900">
              {c.advantages.title}
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-indigo-800">
              {c.advantages.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-indigo-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* References */}
      <ReferenceLinks references={caseStudyRefs} />

      {/* CTA */}
      <CTASection />
    </>
  );
}
