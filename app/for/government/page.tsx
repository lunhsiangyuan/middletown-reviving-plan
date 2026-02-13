import type { Metadata } from "next";
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
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/cards/project-card";
import { driProjects, DRI_TOTAL_INVESTMENT } from "@/lib/data/dri-projects";

export const metadata: Metadata = {
  title: "Revitalization Progress Report | Middletown Reviving Plan",
  description:
    "Government progress report on Middletown's Downtown Revitalization Initiative, BOA planning, economic impact, and funding opportunities.",
};

const impactMetrics = [
  {
    icon: Users,
    label: "Population",
    value: "30,345",
    detail: "2020 Census",
    color: "text-red-600",
    bg: "bg-red-100",
  },
  {
    icon: Home,
    label: "Avg. Home Value",
    value: "$395K",
    detail: "+63% since 2019",
    color: "text-red-600",
    bg: "bg-red-100",
  },
  {
    icon: Building2,
    label: "DRI Projects",
    value: "5 completed",
    detail: "$10M invested",
    color: "text-red-600",
    bg: "bg-red-100",
  },
  {
    icon: TrendingUp,
    label: "BOA Grant",
    value: "$250,772",
    detail: "Planning through 2029",
    color: "text-red-600",
    bg: "bg-red-100",
  },
];

const fundingPrograms = [
  {
    name: "Downtown Revitalization Initiative (DRI)",
    amount: "$10M",
    status: "Completed",
    description: "New York State program for transformative downtown projects.",
  },
  {
    name: "Brownfield Opportunity Area (BOA)",
    amount: "$250,772",
    status: "Active",
    description:
      "State grant for brownfield redevelopment planning and environmental assessment.",
  },
  {
    name: "Empire State Development (ESD)",
    amount: "Various",
    status: "Ongoing",
    description:
      "Economic development programs supporting business attraction and retention.",
  },
  {
    name: "Community Development Block Grant (CDBG)",
    amount: "Various",
    status: "Eligible",
    description:
      "Federal HUD grants for community development and infrastructure improvements.",
  },
  {
    name: "New York Main Street Program",
    amount: "Up to $500K",
    status: "Eligible",
    description:
      "Funding for downtown anchor projects and building renovations.",
  },
];

const boaTimeline = [
  { year: "2024", event: "BOA Grant Awarded ($250,772)" },
  { year: "2025", event: "Environmental Assessment & Community Engagement" },
  { year: "2026", event: "Brownfield Site Analysis & Planning" },
  { year: "2027", event: "Redevelopment Strategy Finalization" },
  { year: "2028-29", event: "Implementation & Construction Phase" },
];

const downloadableReports = [
  { title: "Personal Guide", description: "Resident-focused overview of Middletown" },
  { title: "School Partnership Proposal", description: "Academic collaboration framework" },
  { title: "Government Progress Report", description: "Full DRI and BOA documentation" },
  { title: "Investor Deck", description: "Investment opportunity presentation" },
];

export default function GovernmentPage() {
  const totalCost = driProjects.reduce((sum, p) => sum + p.cost, 0);
  const completedCount = driProjects.filter(
    (p) => p.status === "completed"
  ).length;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-700 to-slate-900 px-6 py-16 text-white lg:px-12">
        <div className="max-w-3xl">
          <Badge className="mb-4 bg-white/20 text-white">
            Government Report
          </Badge>
          <h1 className="mb-4 text-4xl font-bold">
            Revitalization Progress Report
          </h1>
          <p className="text-lg text-red-100">
            A comprehensive overview of Middletown&apos;s revitalization efforts,
            including DRI project completion, BOA planning, economic impact, and
            available funding programs.
          </p>
        </div>
      </section>

      {/* DRI Completion Summary */}
      <section className="px-6 py-14 lg:px-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              DRI Completion Summary
            </h2>
            <p className="text-slate-600">
              Downtown Revitalization Initiative -- all projects successfully
              completed.
            </p>
          </div>
          <div className="flex gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-red-700">
                {completedCount}
              </p>
              <p className="text-xs text-slate-500">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-700">
                ${(DRI_TOTAL_INVESTMENT / 1_000_000).toFixed(0)}M
              </p>
              <p className="text-xs text-slate-500">Total Invested</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-emerald-600">100%</p>
              <p className="text-xs text-slate-500">Completion</p>
            </div>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {driProjects.map((project) => (
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
          BOA Planning Progress
        </h2>
        <p className="mb-8 text-slate-600">
          Brownfield Opportunity Area grant of $250,772 is funding
          redevelopment planning through 2029.
        </p>
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-red-200 lg:left-1/2" />
          <div className="flex flex-col gap-6">
            {boaTimeline.map((item, idx) => (
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
          Economic Impact Dashboard
        </h2>
        <p className="mb-8 text-slate-600">
          Key metrics showing the impact of revitalization efforts on
          Middletown&apos;s economy.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impactMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <Card key={metric.label}>
                <CardContent className="flex flex-col items-center pt-6 text-center">
                  <div
                    className={`mb-3 flex size-12 items-center justify-center rounded-xl ${metric.bg}`}
                  >
                    <Icon className={`size-6 ${metric.color}`} />
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
          Funding &amp; Grants
        </h2>
        <p className="mb-8 text-slate-600">
          Available and completed funding programs for Middletown&apos;s
          revitalization.
        </p>
        <div className="flex flex-col gap-3">
          {fundingPrograms.map((program) => (
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
                      program.status === "Completed"
                        ? "bg-emerald-100 text-emerald-800"
                        : program.status === "Active"
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
          Downloadable Reports
        </h2>
        <p className="mb-8 text-slate-600">
          Access detailed reports for stakeholder review and distribution.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {downloadableReports.map((report) => (
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
        <h2 className="mb-3 text-3xl font-bold">Need More Information?</h2>
        <p className="mb-8 text-red-100">
          Request a detailed briefing or schedule a meeting with the planning
          team.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-red-700 hover:bg-red-50"
          >
            <Link href="/contact">Request Detailed Report</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 bg-transparent text-white hover:bg-white/10"
          >
            <Link href="/contact">
              <Calendar className="mr-1 size-4" />
              Schedule Briefing
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
