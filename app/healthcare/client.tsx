"use client";

import {
  Heart,
  Stethoscope,
  ShieldCheck,
  Users,
  GraduationCap,
  Hospital,
  Clock,
  Phone,
  ExternalLink,
  Brain,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { OrgCard } from "@/components/cards/org-card";
import { ReferenceLinks } from "@/components/reference-links";
import { CTASection } from "@/components/sections/cta-section";
import { MapSection } from "@/components/sections/map-section";
import {
  resolveOrganizations,
  isHealthcareInfo,
} from "@/lib/data/organizations";
import { resolveReferences } from "@/lib/data/references";
import { useLanguage } from "@/lib/i18n/language-context";
import { content } from "./content";

export function HealthcareClient() {
  const { language } = useLanguage();
  const c = content[language] ?? content.en;

  const orgs = resolveOrganizations(language);
  const refs = resolveReferences(language);

  const nmc = orgs.find((org) => org.id === "northern-medical-center")!;
  const touro = orgs.find((org) => org.id === "touro-com")!;
  const garnet = orgs.find((org) => org.id === "garnet-health")!;

  const healthcareRefs = refs.filter((ref) =>
    ["northern-medical-center", "garnet-health", "touro-com"].includes(ref.id)
  );

  const nmcInfo = isHealthcareInfo(nmc.additionalInfo) ? nmc.additionalInfo : null;

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/3 size-96 rounded-full bg-teal-400 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-emerald-200">
            <Heart className="size-4" />
            {c.header.badge}
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            {c.header.title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-emerald-200">
            {c.header.desc}
          </p>
        </div>
      </section>

      {/* Northern Medical Center - Tabbed */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Stethoscope className="size-5 text-emerald-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {c.nmc.title}
            </h2>
          </div>
          <p className="mb-6 max-w-3xl text-slate-600">{c.nmc.desc}</p>

          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">
                {c.nmc.tabs.overview}
              </TabsTrigger>
              <TabsTrigger value="services">
                {c.nmc.tabs.services}
              </TabsTrigger>
              <TabsTrigger value="physicians">
                {c.nmc.tabs.physicians}
              </TabsTrigger>
              <TabsTrigger value="insurance">
                {c.nmc.tabs.insurance}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="mb-1 text-sm font-medium text-slate-500">
                        {c.nmc.overviewLabels.address}
                      </p>
                      <p className="text-slate-900">{nmc.address}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-medium text-slate-500">
                        {c.nmc.overviewLabels.phone}
                      </p>
                      <p className="text-slate-900">{nmc.phone}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-medium text-slate-500">
                        {c.nmc.overviewLabels.ceo}
                      </p>
                      <p className="text-slate-900">
                        {nmcInfo?.ceo
                          ? `${nmcInfo.ceo.name}, ${nmcInfo.ceo.credentials}`
                          : "—"}
                      </p>
                      {nmcInfo?.ceo && (
                        <p className="mt-1 text-sm text-slate-500">
                          {nmcInfo.ceo.background}
                        </p>
                      )}
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-medium text-slate-500">
                        {c.nmc.overviewLabels.description}
                      </p>
                      <p className="text-slate-700">{nmc.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="services" className="mt-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {nmcInfo?.services.map((service) => (
                  <Card key={service.name}>
                    <CardContent className="pt-6">
                      <div className="mb-2 flex items-center gap-2">
                        <Heart className="size-4 shrink-0 text-emerald-500" />
                        <p className="font-medium text-slate-900">
                          {service.name}
                        </p>
                      </div>
                      <p className="text-sm text-slate-600">
                        {service.description}
                      </p>
                      {service.conditions && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {service.conditions.map((cond) => (
                            <Badge
                              key={cond}
                              variant="outline"
                              className="text-xs"
                            >
                              {cond}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="physicians" className="mt-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {nmcInfo?.physicians.map((doc) => (
                  <Card key={doc.name}>
                    <CardContent className="pt-6">
                      <div className="mb-1 flex items-center gap-2">
                        <Users className="size-4 shrink-0 text-emerald-500" />
                        <p className="font-medium text-slate-900">
                          {doc.name}
                          {doc.credentials && (
                            <span className="ml-1 text-sm text-slate-500">
                              {doc.credentials}
                            </span>
                          )}
                        </p>
                      </div>
                      <p className="mb-2 text-sm text-slate-500">{doc.title}</p>
                      <div className="flex flex-wrap gap-1">
                        {doc.specialty.map((spec) => (
                          <Badge
                            key={spec}
                            variant="outline"
                            className="text-xs"
                          >
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="insurance" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4 text-sm text-slate-600">
                    {c.nmc.insuranceIntro}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {nmcInfo?.insurance.map((plan) => (
                      <Badge
                        key={plan}
                        variant="outline"
                        className="text-sm"
                      >
                        {plan}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Office Hours & Appointment Info */}
      {nmcInfo && (
        <section className="bg-emerald-50 py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Hours */}
              {nmcInfo.hours && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Clock className="size-5 text-emerald-600" />
                      {c.nmc.hoursTitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <dl className="space-y-1 text-sm">
                      {Object.entries(nmcInfo.hours).map(([day, time]) => (
                        <div key={day} className="flex justify-between">
                          <dt className="text-slate-600">{day}</dt>
                          <dd
                            className={
                              time === "Closed"
                                ? "text-slate-400"
                                : "font-medium text-slate-900"
                            }
                          >
                            {time}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </CardContent>
                </Card>
              )}

              {/* Contact & Appointment */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Phone className="size-5 text-emerald-600" />
                    {c.nmc.contactTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {nmc.phone && (
                    <p className="text-sm text-slate-700">
                      <span className="font-medium">{c.nmc.overviewLabels.phone}:</span>{" "}
                      {nmc.phone}
                    </p>
                  )}
                  {nmcInfo.telehealth && (
                    <Badge className="bg-emerald-100 text-emerald-800">
                      {c.nmc.telehealthLabel}
                    </Badge>
                  )}
                  {nmcInfo.appointmentUrl && (
                    <a
                      href={nmcInfo.appointmentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 hover:text-emerald-900"
                    >
                      {c.nmc.bookAppointment}
                      <ExternalLink className="size-3" />
                    </a>
                  )}
                </CardContent>
              </Card>

              {/* Specialty Programs */}
              {nmcInfo.programs && nmcInfo.programs.length > 0 && (
                <Card className="md:col-span-2 lg:col-span-1">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Brain className="size-5 text-emerald-600" />
                      {c.nmc.programsTitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {nmcInfo.programs.map((prog) => (
                      <div key={prog.name}>
                        <p className="flex items-center gap-2 text-sm font-medium text-slate-900">
                          <Zap className="size-3 text-amber-500" />
                          {prog.name}
                        </p>
                        <p className="ml-5 text-xs text-slate-500">
                          {prog.description}
                        </p>
                        {prog.effectiveness && (
                          <p className="ml-5 mt-0.5 text-xs font-medium text-emerald-700">
                            {prog.effectiveness}
                          </p>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Touro COM */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <GraduationCap className="size-5 text-purple-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {c.touro.title}
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-slate-600">{c.touro.p1}</p>
              <p className="text-slate-600">{c.touro.p2}</p>
            </div>
            <OrgCard
              name={touro.name}
              type={touro.type}
              address={touro.address}
              description={touro.description}
              website={touro.website}
              sourceUrl={touro.sourceUrl}
            />
          </div>
        </div>
      </section>

      {/* Garnet Health */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Hospital className="size-5 text-emerald-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {c.garnet.title}
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <OrgCard
              name={garnet.name}
              type={garnet.type}
              address={garnet.address}
              description={garnet.description}
              website={garnet.website}
              sourceUrl={garnet.sourceUrl}
            />
            <Card className="border-emerald-200 bg-emerald-50">
              <CardHeader>
                <CardTitle className="text-lg">
                  {c.garnet.communityHealth.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-3 text-sm text-slate-700">
                  {c.garnet.communityHealth.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ShieldCheck className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* References */}
      <ReferenceLinks references={healthcareRefs} />

      {/* Healthcare Map */}
      <MapSection
        title={c.header.title}
        description={nmc.address}
        badgeLabel={c.header.badge}
        center={[41.445, -74.395]}
        zoom={13}
        markers={[
          {
            id: "northern-medical-center",
            position: [41.4459, -74.4229],
            title: nmc.name,
            description: nmc.address,
          },
          {
            id: "garnet-health",
            position: [41.4427, -74.3669],
            title: garnet.name,
            description: garnet.address,
          },
          {
            id: "touro-com",
            position: [41.4467, -74.4187],
            title: touro.name,
            description: touro.address,
          },
        ]}
      />

      {/* CTA */}
      <CTASection />
    </>
  );
}
