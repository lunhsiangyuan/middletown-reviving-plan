"use client";

import {
  Train,
  Plane,
  Car,
  Bus,
  MapPin,
  Clock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { ReferenceLinks } from "@/components/reference-links";
import { CTASection } from "@/components/sections/cta-section";
import { MapSection } from "@/components/sections/map-section";
import { resolveReferences } from "@/lib/data/references";
import { useLanguage } from "@/lib/i18n/language-context";
import { content } from "./content";

const transitIcons = [Clock, MapPin] as const;

export function TransportationClient() {
  const { language } = useLanguage();
  const c = content[language] ?? content.en;

  const references = resolveReferences(language);
  const transportRefs = references.filter((ref) =>
    ["middletown-ny-gov"].includes(ref.id)
  );

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-900 via-sky-800 to-blue-900 py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/3 size-96 rounded-full bg-sky-400 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-sky-200">
            <Train className="size-4" />
            {c.header.badge}
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            {c.header.title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-sky-200">
            {c.header.desc}
          </p>
        </div>
      </section>

      {/* Air Travel */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Plane className="size-5 text-sky-600" />
            <h2 className="text-2xl font-bold text-slate-900">{c.air.title}</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {c.air.airports.map((airport) => (
              <Card key={airport.code} className="border-sky-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">
                      {airport.name}
                    </CardTitle>
                    <Badge className="bg-sky-100 text-sky-800">{airport.code}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-slate-600">
                    {airport.desc}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <MapPin className="size-4" />
                    {airport.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highway Access */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Car className="size-5 text-sky-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {c.highway.title}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {c.highway.roads.map((road) => (
              <Card key={road.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{road.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    {road.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Public Transit */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Bus className="size-5 text-sky-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {c.transit.title}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {c.transit.services.map((service, i) => {
              const Icon = transitIcons[i];
              return (
                <Card key={service.name} className="border-sky-200 bg-sky-50">
                  <CardHeader>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-3">
                    <p className="text-sm text-slate-600">
                      {service.desc}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-sky-700">
                      <Icon className="size-4" />
                      {service.detail}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Distance to Major Cities */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <MapPin className="size-5 text-sky-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {c.distances.title}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.distances.cities.map((d) => (
              <Card key={d.city} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{d.city}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2 text-3xl font-bold text-sky-700">
                    {d.time}
                  </p>
                  <p className="text-xs text-slate-500">{d.method}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* References */}
      <ReferenceLinks references={transportRefs} />

      {/* Transportation Map */}
      <MapSection
        title={c.header.title}
        description={c.header.desc}
        badgeLabel={c.header.badge}
        center={[41.446, -74.423]}
        zoom={13}
        markers={[
          {
            id: "middletown-center",
            position: [41.446, -74.423],
            title: "Middletown, NY",
            description: "60 miles from NYC — Strategic location",
          },
        ]}
      />

      {/* CTA */}
      <CTASection />
    </>
  );
}
