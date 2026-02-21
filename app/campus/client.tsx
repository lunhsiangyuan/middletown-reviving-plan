"use client";

import {
  Building,
  TreePine,
  Landmark,
  GraduationCap,
  FileText,
  MapPin,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { OrgCard } from "@/components/cards/org-card";
import { ReferenceLinks } from "@/components/reference-links";
import { CTASection } from "@/components/sections/cta-section";
import { MapSection } from "@/components/sections/map-section";
import { resolveOrganizations } from "@/lib/data/organizations";
import { resolveReferences } from "@/lib/data/references";
import { useLanguage } from "@/lib/i18n/language-context";
import { content } from "./content";

export function CampusClient() {
  const { language } = useLanguage();
  const c = content[language] ?? content.en;

  const orgs = resolveOrganizations(language);
  const refs = resolveReferences(language);

  const campusOrgs = orgs.filter((org) =>
    ["fei-tian-college", "fei-tian-academy"].includes(org.id)
  );

  const campusRefs = refs.filter((ref) =>
    ["ny-boa-program", "fei-tian-college", "fei-tian-academy", "middletown-ny-gov"].includes(ref.id)
  );

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/3 size-96 rounded-full bg-cyan-400 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-blue-200">
            <Building className="size-4" />
            {c.header.badge}
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            {c.header.title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-blue-200">
            {c.header.desc}
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <TreePine className="size-5 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900">
                  {c.history.title}
                </h2>
              </div>
              <p className="mb-4 text-slate-600">{c.history.p1}</p>
              <p className="text-slate-600">{c.history.p2}</p>
            </div>
            <div className="flex flex-col gap-4">
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 size-5 shrink-0 text-blue-600" />
                    <div>
                      <p className="font-semibold text-slate-900">
                        {c.history.locationLabel}
                      </p>
                      <p className="text-sm text-slate-600">
                        {c.history.locationValue}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Building className="mt-1 size-5 shrink-0 text-blue-600" />
                    <div>
                      <p className="font-semibold text-slate-900">
                        {c.history.areaLabel}
                      </p>
                      <p className="text-sm text-slate-600">
                        {c.history.areaValue}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* BOA Planning Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <FileText className="size-5 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {c.boa.title}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {c.boa.cards.map((card, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle
                    className={
                      i < 2
                        ? "text-3xl font-bold text-blue-700"
                        : "text-lg font-bold text-blue-700"
                    }
                  >
                    {card.heading}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{card.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* $1 State Transfer */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Landmark className="size-5 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {c.transfer.title}
            </h2>
          </div>
          <div className="rounded-xl border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <Badge className="mb-4 bg-blue-100 text-blue-800">
                  {c.transfer.badge}
                </Badge>
                <p className="mb-4 text-slate-700">{c.transfer.p1}</p>
                <p className="text-slate-600">{c.transfer.p2}</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-6 text-center shadow-sm">
                <p className="text-6xl font-bold text-blue-700">
                  {c.transfer.statNumber}
                </p>
                <p className="text-lg font-medium text-slate-700">
                  {c.transfer.statLabel}
                </p>
                <p className="text-sm text-slate-500">{c.transfer.statDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fei Tian College Expansion */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <GraduationCap className="size-5 text-purple-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {c.expansion.title}
            </h2>
          </div>
          <p className="mb-8 max-w-3xl text-slate-600">{c.expansion.desc}</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {campusOrgs.map((org) => (
              <OrgCard
                key={org.id}
                name={org.name}
                type={org.type}
                address={org.address}
                description={org.description}
                website={org.website}
                sourceUrl={org.sourceUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* References */}
      <ReferenceLinks references={campusRefs} />

      {/* Campus Map */}
      <MapSection
        title="Campus Location"
        description="The 270-acre former Middletown Psychiatric Center now transformed into a vibrant community hub."
        badgeLabel="Location"
        center={[41.4552, -74.4371]}
        zoom={15}
        markers={[
          {
            id: "campus-center",
            position: [41.4552, -74.4371],
            title: "Community Campus",
            description: "Home to Fei Tian College and Northern Academy"
          }
        ]}
      />

      {/* CTA */}
      <CTASection />
    </>
  );
}
