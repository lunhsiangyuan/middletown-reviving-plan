"use client";

import {
  GraduationCap,
  Award,
  BookOpen,
  School,
  MapPin,
  Star,
  Globe,
  Building2,
  Users,
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
  isEducationInfo,
} from "@/lib/data/organizations";
import type { EducationInfo } from "@/lib/data/organizations";
import { resolveReferences } from "@/lib/data/references";
import { useLanguage } from "@/lib/i18n/language-context";
import { content } from "./content";

function ProgramsByLevel({
  info,
  undergraduate,
  graduate,
}: {
  info: EducationInfo;
  undergraduate: string;
  graduate: string;
}) {
  const undergrad = info.programs.filter((p) => p.level === "undergraduate");
  const grad = info.programs.filter((p) => p.level === "graduate");

  return (
    <Tabs defaultValue="undergraduate">
      <TabsList>
        <TabsTrigger value="undergraduate">
          {undergraduate} ({undergrad.length})
        </TabsTrigger>
        <TabsTrigger value="graduate">
          {graduate} ({grad.length})
        </TabsTrigger>
      </TabsList>
      <TabsContent value="undergraduate" className="mt-4">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {undergrad.map((p) => (
            <Card key={`${p.name}-${p.degree}`}>
              <CardContent className="pt-4">
                <div className="mb-1 flex items-center gap-2">
                  <Badge className="bg-purple-100 text-purple-800 text-xs">
                    {p.degree}
                  </Badge>
                  <span className="text-sm font-medium text-slate-900">
                    {p.name}
                  </span>
                </div>
                {p.description && (
                  <p className="text-xs text-slate-500">{p.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="graduate" className="mt-4">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {grad.map((p) => (
            <Card key={`${p.name}-${p.degree}`}>
              <CardContent className="pt-4">
                <div className="mb-1 flex items-center gap-2">
                  <Badge className="bg-indigo-100 text-indigo-800 text-xs">
                    {p.degree}
                  </Badge>
                  <span className="text-sm font-medium text-slate-900">
                    {p.name}
                  </span>
                </div>
                {p.description && (
                  <p className="text-xs text-slate-500">{p.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}

export function EducationClient() {
  const { language } = useLanguage();
  const c = content[language] ?? content.en;

  const orgs = resolveOrganizations(language);
  const refs = resolveReferences(language);

  const feiTianCollege = orgs.find((o) => o.id === "fei-tian-college")!;
  const feiTianAcademy = orgs.find((o) => o.id === "fei-tian-academy")!;
  const northernAcademy = orgs.find((o) => o.id === "northern-academy")!;
  const touro = orgs.find((o) => o.id === "touro-com")!;
  const sunyOrange = orgs.find((o) => o.id === "suny-orange")!;

  const educationRefs = refs.filter((ref) =>
    [
      "fei-tian-college",
      "fei-tian-academy",
      "northern-academy",
      "touro-com",
      "suny-orange",
    ].includes(ref.id)
  );

  const ftcInfo = isEducationInfo(feiTianCollege.additionalInfo)
    ? feiTianCollege.additionalInfo
    : null;
  const naInfo = isEducationInfo(northernAcademy.additionalInfo)
    ? northernAcademy.additionalInfo
    : null;

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/3 size-96 rounded-full bg-indigo-400 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-purple-200">
            <GraduationCap className="size-4" />
            {c.header.badge}
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            {c.header.title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-purple-200">
            {c.header.desc}
          </p>
        </div>
      </section>

      {/* Northern Academy of the Arts */}
      {naInfo && (
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-center gap-2">
              <Star className="size-5 text-amber-500" />
              <h2 className="text-2xl font-bold text-slate-900">
                {c.northernAcademy.title}
              </h2>
              <Badge className="bg-amber-100 text-amber-800">
                {c.northernAcademy.badge}
              </Badge>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="mb-4 text-slate-600">
                  {c.northernAcademy.desc}
                </p>
                {/* Key Stats */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-center">
                    <p className="text-2xl font-bold text-amber-800">
                      {naInfo.graduationRate}
                    </p>
                    <p className="text-xs text-amber-600">
                      {c.northernAcademy.stats.gradRate}
                    </p>
                  </div>
                  <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-center">
                    <p className="text-2xl font-bold text-amber-800">
                      {naInfo.satAverage}
                    </p>
                    <p className="text-xs text-amber-600">
                      {c.northernAcademy.stats.sat}
                    </p>
                  </div>
                  <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-center">
                    <p className="text-2xl font-bold text-amber-800">
                      {naInfo.nicheRating}
                    </p>
                    <p className="text-xs text-amber-600">
                      {c.northernAcademy.stats.niche}
                    </p>
                  </div>
                  <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-center">
                    <p className="text-2xl font-bold text-amber-800">
                      {naInfo.studentCountries}
                    </p>
                    <p className="text-xs text-amber-600">
                      {c.northernAcademy.stats.countries}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <OrgCard
                  name={northernAcademy.name}
                  type={northernAcademy.type}
                  address={northernAcademy.address}
                  description={northernAcademy.description}
                  website={northernAcademy.website}
                  sourceUrl={northernAcademy.sourceUrl}
                />
                {/* Programs */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-slate-500">
                      {c.northernAcademy.programsLabel}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {naInfo.programs.map((p) => (
                        <Badge
                          key={p.name}
                          variant="outline"
                          className="text-xs"
                        >
                          {p.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                {/* Tuition & Enrollment */}
                {naInfo.tuition && (
                  <div className="flex gap-3 text-sm">
                    <Badge className="bg-slate-100 text-slate-700">
                      {c.northernAcademy.tuitionLabel}:{" "}
                      {naInfo.tuition.notes || `$${naInfo.tuition.amount.toLocaleString()}/${naInfo.tuition.period}`}
                    </Badge>
                    {naInfo.enrollment?.total && (
                      <Badge className="bg-slate-100 text-slate-700">
                        <Users className="mr-1 size-3" />
                        {naInfo.enrollment.total} {c.northernAcademy.studentsLabel}
                      </Badge>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Fei Tian College */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Award className="size-5 text-purple-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {c.feiTianCollege.title}
            </h2>
            <Badge className="bg-purple-100 text-purple-800">
              {c.feiTianCollege.badge}
            </Badge>
          </div>
          <div className="mb-8 grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-slate-600">{c.feiTianCollege.desc}</p>
              {/* Campuses */}
              {ftcInfo?.campuses && (
                <div className="mt-4 space-y-3">
                  <p className="text-sm font-medium text-slate-500">
                    {c.feiTianCollege.campusesLabel}
                  </p>
                  {ftcInfo.campuses.map((campus) => (
                    <div
                      key={campus.name}
                      className="flex items-start gap-2 text-sm"
                    >
                      <Building2 className="mt-0.5 size-4 shrink-0 text-purple-500" />
                      <div>
                        <p className="font-medium text-slate-900">
                          {campus.name}
                        </p>
                        <p className="text-slate-500">
                          {campus.address}
                          {campus.acres && ` (${campus.acres} acres)`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {/* Quick stats */}
              {ftcInfo && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {ftcInfo.tuition && (
                    <Badge className="bg-purple-50 text-purple-700">
                      {c.feiTianCollege.tuitionLabel}:{" "}
                      {ftcInfo.tuition.notes || `$${ftcInfo.tuition.amount.toLocaleString()}/${ftcInfo.tuition.period}`}
                    </Badge>
                  )}
                  {ftcInfo.enrollment?.retentionRate && (
                    <Badge className="bg-purple-50 text-purple-700">
                      {c.feiTianCollege.retentionLabel}: {ftcInfo.enrollment.retentionRate}
                    </Badge>
                  )}
                  {ftcInfo.leadership && (
                    <Badge className="bg-purple-50 text-purple-700">
                      <Globe className="mr-1 size-3" />
                      {ftcInfo.leadership.map((l) => l.name).join(", ")}
                    </Badge>
                  )}
                </div>
              )}
            </div>
            <OrgCard
              name={feiTianCollege.name}
              type={feiTianCollege.type}
              address={feiTianCollege.address}
              description={feiTianCollege.description}
              website={feiTianCollege.website}
              sourceUrl={feiTianCollege.sourceUrl}
            />
          </div>

          {/* Programs by level */}
          {ftcInfo && (
            <ProgramsByLevel
              info={ftcInfo}
              undergraduate={c.feiTianCollege.undergrad}
              graduate={c.feiTianCollege.grad}
            />
          )}
        </div>
      </section>

      {/* Fei Tian Academy */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <School className="size-5 text-purple-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {c.feiTianAcademy.title}
            </h2>
            <Badge className="bg-purple-100 text-purple-800">
              {c.feiTianAcademy.badge}
            </Badge>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <OrgCard
              name={feiTianAcademy.name}
              type={feiTianAcademy.type}
              address={feiTianAcademy.address}
              description={feiTianAcademy.description}
              website={feiTianAcademy.website}
              sourceUrl={feiTianAcademy.sourceUrl}
            />
            <div>
              <p className="text-slate-600">{c.feiTianAcademy.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Touro COM */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <BookOpen className="size-5 text-purple-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {c.touro.title}
            </h2>
            <Badge className="bg-emerald-100 text-emerald-800">
              {c.touro.badge}
            </Badge>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-slate-600">{c.touro.desc}</p>
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

      {/* SUNY Orange */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <GraduationCap className="size-5 text-purple-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {c.sunyOrange.title}
            </h2>
            <Badge className="bg-sky-100 text-sky-800">
              {c.sunyOrange.badge}
            </Badge>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <OrgCard
              name={sunyOrange.name}
              type={sunyOrange.type}
              address={sunyOrange.address}
              description={sunyOrange.description}
              website={sunyOrange.website}
              sourceUrl={sunyOrange.sourceUrl}
            />
            <div>
              <p className="text-slate-600">{c.sunyOrange.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Academic Connections */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <MapPin className="size-5 text-purple-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {c.regional.title}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {c.regional.cards.map((card, i) => (
              <Card key={i} className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-lg">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{card.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* References */}
      <ReferenceLinks references={educationRefs} />

      {/* Education Map */}
      <MapSection
        title={c.header.title}
        description={northernAcademy.address}
        badgeLabel={c.header.badge}
        center={[41.447, -74.425]}
        zoom={14}
        markers={[
          {
            id: "northern-academy",
            position: [41.4451, -74.4265],
            title: northernAcademy.name,
            description: northernAcademy.address,
          },
          {
            id: "fei-tian-college",
            position: [41.4462, -74.4235],
            title: feiTianCollege.name,
            description: feiTianCollege.address,
          },
          {
            id: "touro-com",
            position: [41.4467, -74.4187],
            title: touro.name,
            description: touro.address,
          },
          {
            id: "suny-orange",
            position: [41.4413, -74.4244],
            title: sunyOrange.name,
            description: sunyOrange.address,
          },
        ]}
      />

      {/* CTA */}
      <CTASection />
    </>
  );
}
