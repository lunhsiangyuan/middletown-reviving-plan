"use client";

import {
  Heart,
  Stethoscope,
  ShieldCheck,
  Users,
  GraduationCap,
  Hospital,
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
import { organizations } from "@/lib/data/organizations";
import { references } from "@/lib/data/references";

const nmc = organizations.find((org) => org.id === "northern-medical-center")!;
const touro = organizations.find((org) => org.id === "touro-com")!;
const garnet = organizations.find((org) => org.id === "garnet-health")!;

const healthcareRefs = references.filter((ref) =>
  ["northern-medical-center", "garnet-health", "touro-com"].includes(ref.id)
);

const nmcServices = (nmc.additionalInfo?.services as string[]) || [];
const nmcDoctors = (nmc.additionalInfo?.doctors as string[]) || [];
const nmcInsurance = (nmc.additionalInfo?.insurance as string[]) || [];

export default function HealthcarePage() {
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
            Healthcare
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Healthcare & Wellness
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-emerald-200">
            A growing healthcare ecosystem that combines integrative medicine,
            medical education, and community hospital services.
          </p>
        </div>
      </section>

      {/* Northern Medical Center - Tabbed */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Stethoscope className="size-5 text-emerald-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              Northern Medical Center
            </h2>
          </div>
          <p className="mb-6 max-w-3xl text-slate-600">
            Led by CEO Dr. Jingduan Yang, Northern Medical Center is an
            integrative medical center offering a unique blend of Western and
            Eastern medicine approaches.
          </p>

          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="physicians">Physicians</TabsTrigger>
              <TabsTrigger value="insurance">Insurance</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="mb-1 text-sm font-medium text-slate-500">
                        Address
                      </p>
                      <p className="text-slate-900">{nmc.address}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-medium text-slate-500">
                        CEO
                      </p>
                      <p className="text-slate-900">
                        {nmc.additionalInfo?.ceo as string}
                      </p>
                    </div>
                    <div className="sm:col-span-2">
                      <p className="mb-1 text-sm font-medium text-slate-500">
                        Description
                      </p>
                      <p className="text-slate-700">{nmc.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="services" className="mt-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {nmcServices.map((service) => (
                  <Card key={service}>
                    <CardContent className="flex items-center gap-3 pt-6">
                      <Heart className="size-5 shrink-0 text-emerald-500" />
                      <p className="font-medium text-slate-900">{service}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="physicians" className="mt-6">
              <div className="grid gap-4 sm:grid-cols-3">
                {nmcDoctors.map((doctor) => (
                  <Card key={doctor}>
                    <CardContent className="flex items-center gap-3 pt-6">
                      <Users className="size-5 shrink-0 text-emerald-500" />
                      <p className="font-medium text-slate-900">{doctor}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="insurance" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4 text-sm text-slate-600">
                    Northern Medical Center accepts a wide range of insurance
                    plans:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {nmcInsurance.map((plan) => (
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

      {/* Touro COM */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <GraduationCap className="size-5 text-purple-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              Touro College of Osteopathic Medicine
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-slate-600">
                Touro COM&apos;s Middletown campus trains future physicians and
                contributes significantly to the local healthcare ecosystem.
                Medical students bring vibrancy to downtown while preparing to
                serve communities across the region.
              </p>
              <p className="text-slate-600">
                The presence of a medical school strengthens Middletown&apos;s
                identity as a healthcare destination and creates a pipeline of
                physicians who may choose to practice locally.
              </p>
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
              Garnet Health & Regional Healthcare
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
                  Community Health Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                    Full-service community hospital with emergency department
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                    Integrative medicine at Northern Medical Center
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                    Medical education pipeline via Touro COM
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                    Growing network of specialty and primary care providers
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* References */}
      <ReferenceLinks references={healthcareRefs} />

      {/* CTA */}
      <CTASection />
    </>
  );
}
