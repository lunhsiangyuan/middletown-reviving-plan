import type { Metadata } from "next";
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
import { organizations } from "@/lib/data/organizations";
import { references } from "@/lib/data/references";

export const metadata: Metadata = {
  title: "Community Campus | Middletown Reviving Plan",
  description:
    "The 270-acre Community Campus transformation: from former Middletown Psychiatric Center to a thriving hub for education, healthcare, and community life.",
};

const campusOrgs = organizations.filter((org) =>
  ["fei-tian-college", "fei-tian-academy"].includes(org.id)
);

const campusRefs = references.filter((ref) =>
  ["ny-boa-program", "fei-tian-college", "fei-tian-academy", "middletown-ny-gov"].includes(ref.id)
);

export default function CampusPage() {
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
            Community Campus
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            The 270-Acre Community Campus
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-blue-200">
            Transforming the former Middletown Psychiatric Center into a
            world-class campus for education, healthcare, and community
            development.
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
                  A Historic Transformation
                </h2>
              </div>
              <p className="mb-4 text-slate-600">
                The 270-acre site was once home to the Middletown Psychiatric
                Center, a state-operated facility that served generations of New
                Yorkers. As the facility downsized, the campus became an
                opportunity for reimagining how this vast land could serve the
                community in new ways.
              </p>
              <p className="text-slate-600">
                Today, the campus is evolving into a multi-use community hub
                that combines higher education, performing arts training,
                healthcare services, and open green spaces -- a model for
                adaptive reuse of institutional land.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 size-5 shrink-0 text-blue-600" />
                    <div>
                      <p className="font-semibold text-slate-900">Location</p>
                      <p className="text-sm text-slate-600">
                        Middletown, Orange County, New York
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
                      <p className="font-semibold text-slate-900">Total Area</p>
                      <p className="text-sm text-slate-600">
                        270 acres of campus land, including the 33 acres
                        transferred by New York State
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
              BOA Planning Progress
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-700">
                  $250,772
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Brownfield Opportunity Area (BOA) grant awarded by New York
                  State for comprehensive redevelopment planning of the campus
                  area.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-700">
                  2029
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Target completion year for the BOA Plan, setting the stage for
                  full-scale development of the community campus and surrounding
                  areas.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-blue-700">
                  Pattern for Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Partnership with Hudson Valley Pattern for Progress to guide
                  the planning process and ensure community-driven outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* $1 State Transfer */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Landmark className="size-5 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              $1 State Transfer
            </h2>
          </div>
          <div className="rounded-xl border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <Badge className="mb-4 bg-blue-100 text-blue-800">
                  2024 Milestone
                </Badge>
                <p className="mb-4 text-slate-700">
                  In 2024, New York State completed a historic transfer of 33
                  acres of the former Middletown Psychiatric Center campus to the
                  City of Middletown for a symbolic price of $1.
                </p>
                <p className="text-slate-600">
                  This transfer unlocks vast potential for community-driven
                  development, enabling the city to plan mixed-use spaces
                  incorporating education, healthcare, housing, and public
                  amenities.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-6 text-center shadow-sm">
                <p className="text-6xl font-bold text-blue-700">33</p>
                <p className="text-lg font-medium text-slate-700">
                  Acres Transferred
                </p>
                <p className="text-sm text-slate-500">
                  From New York State to City of Middletown
                </p>
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
              Fei Tian College Expansion
            </h2>
          </div>
          <p className="mb-8 max-w-3xl text-slate-600">
            Fei Tian College has set an ambitious goal of growing to 5,000
            students, creating a major educational anchor on the campus. The
            college&apos;s connection to Dragon Springs provides a unique
            cultural foundation that blends Eastern arts with modern academic
            programs.
          </p>
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

      {/* CTA */}
      <CTASection />
    </>
  );
}
