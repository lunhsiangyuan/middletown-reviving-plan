import type { Metadata } from "next";
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
import { driProjects } from "@/lib/data/dri-projects";
import { demographics } from "@/lib/data/demographics";
import { references } from "@/lib/data/references";

export const metadata: Metadata = {
  title: "City Revitalization | Middletown Reviving Plan",
  description:
    "$10M Downtown Revitalization Initiative: five transformative projects, Business Improvement District, and economic growth in Middletown, NY.",
};

const revitalizationRefs = references.filter((ref) =>
  [
    "ny-dri-middletown",
    "middletown-bid",
    "middletown-ny-gov",
    "record-online-revitalization",
  ].includes(ref.id)
);

function formatCost(cost: number): string {
  if (cost >= 1_000_000) {
    return `$${(cost / 1_000_000).toFixed(1)}M`;
  }
  return `$${(cost / 1_000).toFixed(0)}K`;
}

export default function RevitalizationPage() {
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
            Revitalization
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            $10M Downtown Revitalization
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-amber-200">
            New York State&apos;s Downtown Revitalization Initiative is
            transforming Middletown&apos;s city center through five strategic
            projects.
          </p>
        </div>
      </section>

      {/* DRI Five Projects */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Hammer className="size-5 text-amber-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              DRI Five Major Projects
            </h2>
          </div>
          <p className="mb-8 max-w-3xl text-slate-600">
            Middletown was selected as a recipient of New York State&apos;s
            Downtown Revitalization Initiative in 2016, receiving $10 million to
            fund five transformative downtown projects.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {driProjects.map((project) => (
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
              Total DRI Investment in Downtown Middletown
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
              Business Improvement District
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-slate-600">
                Established in 1992, the Middletown Business Improvement
                District (BID) has been a driving force behind downtown
                management and promotion for over three decades. The BID
                coordinates improvements, marketing, and events that keep the
                downtown area vibrant and attractive to businesses and visitors.
              </p>
              <p className="text-slate-600">
                The BID&apos;s long history of community stewardship laid the
                groundwork for the DRI award and continues to guide downtown
                development strategy.
              </p>
            </div>
            <Card className="border-amber-200 bg-amber-50">
              <CardContent className="flex flex-col items-center justify-center pt-6 text-center">
                <p className="text-5xl font-bold text-amber-700">30+</p>
                <p className="mt-2 text-lg font-medium text-slate-700">
                  Years of Downtown Stewardship
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Since 1992
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
              Heritage Trail Connection
            </h2>
          </div>
          <p className="mb-4 max-w-3xl text-slate-600">
            The Heritage Trail is a multi-use recreational path that connects
            communities across Orange County. The DRI-funded Rail Trail Commons
            project created a direct link between the Heritage Trail and
            downtown Middletown, turning the trail into an economic asset that
            brings foot traffic to local businesses.
          </p>
        </div>
      </section>

      {/* North Street Revival */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Store className="size-5 text-amber-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              North Street Revival
            </h2>
          </div>
          <p className="mb-4 max-w-3xl text-slate-600">
            North Street, once the commercial heart of Middletown, is
            experiencing a renaissance. New businesses including bakeries, tea
            houses, coffee shops, and restaurants are filling formerly vacant
            storefronts, creating a walkable dining and shopping destination. The
            DRI facade improvement program renovated 17 buildings, preserving
            historic character while modernizing storefronts.
          </p>
        </div>
      </section>

      {/* Economic Impact */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <TrendingUp className="size-5 text-amber-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              Economic Impact
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {demographics.stats
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
                    <p className="text-xs text-slate-500">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* References */}
      <ReferenceLinks references={revitalizationRefs} />

      {/* CTA */}
      <CTASection />
    </>
  );
}
