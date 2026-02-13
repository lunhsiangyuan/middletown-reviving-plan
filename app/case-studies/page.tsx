import type { Metadata } from "next";
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
import { caseStudies } from "@/lib/data/case-studies";
import { references } from "@/lib/data/references";

export const metadata: Metadata = {
  title: "Case Studies | Middletown Reviving Plan",
  description:
    "Lessons from comparable Hudson Valley cities that have successfully revitalized: Beacon, Newburgh, Hudson, Kingston, and Poughkeepsie.",
};

const caseStudyRefs = references.filter((ref) =>
  ["ny-dri-middletown", "record-online-revitalization"].includes(ref.id)
);

export default function CaseStudiesPage() {
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
            Case Studies
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Lessons from Comparable Cities
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-indigo-200">
            How other Hudson Valley cities have successfully revitalized, and
            what Middletown can learn from their experiences.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {caseStudies.map((study) => (
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
                          Population: {study.population.toLocaleString()}
                        </span>
                      </CardDescription>
                    </div>
                    <Badge className="bg-indigo-100 text-indigo-800">
                      Case Study
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid gap-6 lg:grid-cols-2">
                    {/* Strategy & Outcomes */}
                    <div>
                      <p className="mb-3 text-sm font-medium text-slate-500">
                        Key Strategy
                      </p>
                      <p className="mb-4 font-medium text-slate-900">
                        {study.keyStrategy}
                      </p>
                      <p className="mb-3 text-sm font-medium text-slate-500">
                        Outcomes
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
                          Lessons for Middletown
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
                    Visit {study.name} official site
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
            How Middletown Compares
          </h2>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-lg border bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    City
                  </th>
                  <th className="px-4 py-3 text-right font-semibold text-slate-700">
                    Population
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Key Strategy
                  </th>
                </tr>
              </thead>
              <tbody>
                {caseStudies.map((study) => (
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
                    Middletown, NY
                  </td>
                  <td className="px-4 py-3 text-right text-indigo-900">
                    30,345
                  </td>
                  <td className="px-4 py-3 text-indigo-900">
                    Education + Arts + Healthcare + DRI infrastructure
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 rounded-lg border-2 border-indigo-200 bg-indigo-50 p-6">
            <h3 className="mb-3 text-lg font-semibold text-indigo-900">
              Middletown&apos;s Unique Advantages
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-indigo-800">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-indigo-600" />
                Multiple educational anchors (Fei Tian College, Touro COM, SUNY
                Orange) -- more than any comparable city
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-indigo-600" />
                270-acre campus for expansion -- the largest redevelopment
                opportunity in the region
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-indigo-600" />
                Unique cultural identity through Chinese arts, integrative
                medicine, and media organizations
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-indigo-600" />
                Strong public investment ($10M DRI + $250K BOA + $1 land
                transfer) already in place
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-indigo-600" />
                Technology sector presence (Gan Jing World) complementing
                traditional economic base
              </li>
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
