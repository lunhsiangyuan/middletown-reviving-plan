"use client";

import Link from "next/link";
import {
  CheckCircle2,
  TrendingUp,
  Users,
  Home,
  DollarSign,
  Building2,
  FileDown,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/cards/project-card";
import { resolveDRIProjects, DRI_TOTAL_INVESTMENT } from "@/lib/data/dri-projects";
import { useLanguage } from "@/lib/i18n/language-context";
import { content } from "./content";

const metricIcons = [Users, Home, Building2, TrendingUp];
const metricStyles = { color: "text-red-600", bg: "bg-red-100" };

export function GovernmentClient() {
  const { language } = useLanguage();
  const c = content[language] ?? content.en;
  const projects = resolveDRIProjects(language);

  const completedCount = projects.filter(
    (p) => p.status === "completed"
  ).length;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-700 to-slate-900 px-6 py-16 text-white lg:px-12">
        <div className="max-w-3xl">
          <Badge className="mb-4 bg-white/20 text-white">
            {c.hero.badge}
          </Badge>
          <h1 className="mb-4 text-4xl font-bold">
            {c.hero.title}
          </h1>
          <p className="text-lg text-red-100">
            {c.hero.desc}
          </p>
        </div>
      </section>

      {/* DRI Completion Summary */}
      <section className="px-6 py-14 lg:px-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {c.driSection.title}
            </h2>
            <p className="text-slate-600">
              {c.driSection.desc}
            </p>
          </div>
          <div className="flex gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-red-700">
                {completedCount}
              </p>
              <p className="text-xs text-slate-500">{c.driSection.projectsLabel}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-700">
                ${(DRI_TOTAL_INVESTMENT / 1_000_000).toFixed(0)}M
              </p>
              <p className="text-xs text-slate-500">{c.driSection.totalInvestedLabel}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-emerald-600">100%</p>
              <p className="text-xs text-slate-500">{c.driSection.completionLabel}</p>
            </div>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              cost={`$${(project.cost / 1_000_000).toFixed(1)}M`}
              status={project.status}
              description={project.description}
              sourceUrl={project.sourceUrl}
            />
          ))}
        </div>
      </section>

      {/* BOA Planning Progress */}
      <section className="border-t bg-slate-50 px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          {c.boaSection.title}
        </h2>
        <p className="mb-8 text-slate-600">
          {c.boaSection.desc}
        </p>
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-red-200 lg:left-1/2" />
          <div className="flex flex-col gap-6">
            {c.boaSection.timeline.map((item, idx) => (
              <div
                key={item.year}
                className={`relative flex items-start gap-4 lg:gap-8 ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div
                  className={`hidden flex-1 lg:block ${
                    idx % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <p className="font-bold text-red-700">{item.year}</p>
                  <p className="text-sm text-slate-600">{item.event}</p>
                </div>
                <div className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-red-400 bg-white">
                  <CheckCircle2 className="size-4 text-red-600" />
                </div>
                <div className="flex-1 lg:hidden">
                  <p className="font-bold text-red-700">{item.year}</p>
                  <p className="text-sm text-slate-600">{item.event}</p>
                </div>
                <div className="hidden flex-1 lg:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Economic Impact Dashboard */}
      <section className="px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          {c.impactSection.title}
        </h2>
        <p className="mb-8 text-slate-600">
          {c.impactSection.desc}
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {c.impactSection.metrics.map((metric, idx) => {
            const Icon = metricIcons[idx];
            return (
              <Card key={metric.label}>
                <CardContent className="flex flex-col items-center pt-6 text-center">
                  <div
                    className={`mb-3 flex size-12 items-center justify-center rounded-xl ${metricStyles.bg}`}
                  >
                    <Icon className={`size-6 ${metricStyles.color}`} />
                  </div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    {metric.label}
                  </p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">
                    {metric.value}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {metric.detail}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Funding & Grants */}
      <section className="border-t bg-slate-50 px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          {c.fundingSection.title}
        </h2>
        <p className="mb-8 text-slate-600">
          {c.fundingSection.desc}
        </p>
        <div className="flex flex-col gap-3">
          {c.fundingSection.programs.map((program) => (
            <div
              key={program.name}
              className="flex flex-col gap-3 rounded-xl border bg-white p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex-1">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <p className="font-semibold text-slate-900">
                    {program.name}
                  </p>
                  <Badge
                    className={
                      program.status === "Completed" || program.status === "已完成" || program.status === "Completado"
                        ? "bg-emerald-100 text-emerald-800"
                        : program.status === "Active" || program.status === "進行中" || program.status === "Activo"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-slate-100 text-slate-800"
                    }
                  >
                    {program.status}
                  </Badge>
                </div>
                <p className="text-sm text-slate-600">{program.description}</p>
              </div>
              <p className="shrink-0 text-lg font-bold text-red-700">
                {program.amount}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Downloadable Reports */}
      <section className="px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          {c.reportsSection.title}
        </h2>
        <p className="mb-8 text-slate-600">
          {c.reportsSection.desc}
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {c.reportsSection.reports.map((report) => (
            <div
              key={report.title}
              className="flex items-center gap-4 rounded-xl border bg-white p-5"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-red-100">
                <FileDown className="size-5 text-red-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-900">{report.title}</p>
                <p className="text-xs text-slate-500">{report.description}</p>
              </div>
              <Button variant="outline" size="sm" disabled>
                PDF
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-red-700 to-slate-900 px-6 py-16 text-center text-white lg:px-12">
        <h2 className="mb-3 text-3xl font-bold">{c.cta.title}</h2>
        <p className="mb-8 text-red-100">
          {c.cta.desc}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-red-700 hover:bg-red-50"
          >
            <Link href="/contact">{c.cta.requestReport}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 bg-transparent text-white hover:bg-white/10"
          >
            <Link href="/contact">
              <Calendar className="mr-1 size-4" />
              {c.cta.scheduleBriefing}
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
