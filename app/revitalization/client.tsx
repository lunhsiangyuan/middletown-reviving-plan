"use client";

import {
  Store,
  DollarSign,
  Hammer,
  Footprints,
  TrendingUp,
  Building2,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { ProjectCard } from "@/components/cards/project-card";
import { ReferenceLinks } from "@/components/reference-links";
import { CTASection } from "@/components/sections/cta-section";
import { MapSection } from "@/components/sections/map-section";
import { resolveDRIProjects } from "@/lib/data/dri-projects";
import { resolveDemographicProfile } from "@/lib/data/demographics";
import { resolveReferences } from "@/lib/data/references";
import { useLanguage } from "@/lib/i18n/language-context";
import { content } from "./content";

function formatCost(cost: number): string {
  if (cost >= 1_000_000) {
    return `$${(cost / 1_000_000).toFixed(1)}M`;
  }
  return `$${(cost / 1_000).toFixed(0)}K`;
}

export function RevitalizationClient() {
  const { language } = useLanguage();
  const c = content[language] ?? content.en;
  const projects = resolveDRIProjects(language);
  const demo = resolveDemographicProfile(language);
  const allReferences = resolveReferences(language);
  const revitalizationRefs = allReferences.filter((ref) =>
    ["ny-dri-middletown", "middletown-bid", "middletown-ny-gov", "record-online-revitalization"].includes(ref.id)
  );

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900 py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/3 size-96 rounded-full bg-orange-400 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-amber-200">
            <Store className="size-4" />
            {c.header.badge}
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            {c.header.title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-amber-200">
            {c.header.desc}
          </p>
        </div>
      </section>

      {/* DRI Five Projects */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Hammer className="size-5 text-amber-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {c.dri.title}
            </h2>
          </div>
          <p className="mb-8 max-w-3xl text-slate-600">
            {c.dri.desc}
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                cost={formatCost(project.cost)}
                status={project.status}
                description={project.description}
                sourceUrl={project.sourceUrl}
              />
            ))}
          </div>
          <div className="mt-8 rounded-lg bg-amber-50 p-6 text-center">
            <p className="text-3xl font-bold text-amber-700">
              $10,000,000
            </p>
            <p className="text-sm text-amber-600">
              {c.dri.totalLabel}
            </p>
          </div>
        </div>
      </section>

      {/* Business Improvement District */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Building2 className="size-5 text-amber-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {c.bid.title}
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-slate-600">
                {c.bid.descP1}
              </p>
              <p className="text-slate-600">
                {c.bid.descP2}
              </p>
            </div>
            <Card className="border-amber-200 bg-amber-50">
              <CardContent className="flex flex-col items-center justify-center pt-6 text-center">
                <p className="text-5xl font-bold text-amber-700">{c.bid.statNumber}</p>
                <p className="mt-2 text-lg font-medium text-slate-700">
                  {c.bid.statLabel}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  {c.bid.statSince}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Heritage Trail */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Footprints className="size-5 text-amber-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {c.heritage.title}
            </h2>
          </div>
          <p className="mb-4 max-w-3xl text-slate-600">
            {c.heritage.desc}
          </p>
        </div>
      </section>

      {/* North Street Revival */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Store className="size-5 text-amber-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {c.northStreet.title}
            </h2>
          </div>
          <p className="mb-4 max-w-3xl text-slate-600">
            {c.northStreet.desc}
          </p>
        </div>
      </section>

      {/* Economic Impact */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <TrendingUp className="size-5 text-amber-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {c.economic.title}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {demo.stats
              .filter((s) =>
                ["population", "avg-home-price", "dri-investment", "median-income"].includes(s.id)
              )
              .map((stat) => (
                <Card key={stat.id}>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <DollarSign className="size-4 text-amber-600" />
                      <p className="text-sm font-medium text-slate-500">
                        {stat.label}
                      </p>
                    </div>
                    <CardTitle className="text-2xl text-amber-700">
                      {typeof stat.value === "number"
                        ? stat.unit === "USD"
                          ? `$${stat.value.toLocaleString()}`
                          : stat.value.toLocaleString()
                        : stat.value}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-slate-500">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* References */}
      <ReferenceLinks references={revitalizationRefs} />

      {/* Revitalization Map */}
      <MapSection
        title={c.header.title}
        description={c.header.desc}
        badgeLabel={c.header.badge}
        center={[41.445, -74.42]}
        zoom={16}
        markers={[
          {
            id: "north-street",
            position: [41.445, -74.42],
            title: c.northStreet.title,
            description: c.northStreet.desc,
          },
          {
            id: "heritage-trail",
            position: [41.441, -74.418],
            title: c.heritage.title,
            description: c.heritage.desc,
          },
        ]}
      />

      {/* CTA */}
      <CTASection />
    </>
  );
}
