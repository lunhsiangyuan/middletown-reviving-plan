import type { Metadata } from "next";
import {
  GraduationCap,
  Award,
  BookOpen,
  School,
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
  title: "Education | Middletown Reviving Plan",
  description:
    "Four institutions of higher learning in Middletown, NY: Fei Tian College, Fei Tian Academy of the Arts, Touro COM, and SUNY Orange.",
};

const feiTianCollege = organizations.find((o) => o.id === "fei-tian-college")!;
const feiTianAcademy = organizations.find((o) => o.id === "fei-tian-academy")!;
const touro = organizations.find((o) => o.id === "touro-com")!;
const sunyOrange = organizations.find((o) => o.id === "suny-orange")!;

const educationRefs = references.filter((ref) =>
  ["fei-tian-college", "fei-tian-academy", "touro-com", "suny-orange"].includes(
    ref.id
  )
);

const feiTianPrograms =
  (feiTianCollege.additionalInfo?.programs as string[]) || [];

export default function EducationPage() {
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
            Education
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Education & Academic Excellence
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-purple-200">
            Four institutions of higher learning create a unique academic
            corridor, making Middletown a growing center for education and
            innovation.
          </p>
        </div>
      </section>

      {/* Fei Tian College */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Award className="size-5 text-purple-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              Fei Tian College
            </h2>
            <Badge className="bg-purple-100 text-purple-800">
              NECHE Accredited
            </Badge>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-slate-600">
                Fei Tian College is accredited by the New England Commission of
                Higher Education (NECHE) and offers a distinctive blend of
                traditional arts and modern academic programs. The college
                aspires to grow to 5,000 students, establishing itself as a
                major educational anchor in the region.
              </p>
              <div className="mt-6">
                <p className="mb-3 text-sm font-medium text-slate-500">
                  Academic Programs
                </p>
                <div className="flex flex-wrap gap-2">
                  {feiTianPrograms.map((program) => (
                    <Badge key={program} variant="outline" className="text-sm">
                      {program}
                    </Badge>
                  ))}
                </div>
              </div>
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
        </div>
      </section>

      {/* Fei Tian Academy */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <School className="size-5 text-purple-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              Fei Tian Academy of the Arts
            </h2>
            <Badge className="bg-purple-100 text-purple-800">K-12</Badge>
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
              <p className="text-slate-600">
                Fei Tian Academy of the Arts provides rigorous academic and
                performing arts education from kindergarten through 12th grade.
                The school&apos;s focus on classical arts training, combined with
                comprehensive academic curricula, produces well-rounded
                graduates prepared for top universities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Touro COM */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <BookOpen className="size-5 text-purple-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              Touro College of Osteopathic Medicine
            </h2>
            <Badge className="bg-emerald-100 text-emerald-800">
              Medical School
            </Badge>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-slate-600">
                Touro COM&apos;s Middletown campus brings medical education to
                the heart of the city. Hundreds of medical students live, study,
                and contribute to the community, strengthening the local
                healthcare pipeline and adding vitality to the downtown area.
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

      {/* SUNY Orange */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <GraduationCap className="size-5 text-purple-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              SUNY Orange
            </h2>
            <Badge className="bg-sky-100 text-sky-800">Community College</Badge>
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
              <p className="text-slate-600">
                SUNY Orange serves Orange County with a wide range of associate
                degree and certificate programs. Its Middletown campus provides
                accessible, affordable higher education and workforce training
                that supports local economic development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Academic Connections */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <MapPin className="size-5 text-purple-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              Regional Academic Connections
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-lg">
                  West Point (U.S. Military Academy)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Located in Orange County, the U.S. Military Academy at West
                  Point adds prestige to the region&apos;s educational landscape
                  and creates opportunities for academic and community
                  collaboration.
                </p>
              </CardContent>
            </Card>
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-lg">
                  NYC Ivy League Proximity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Middletown&apos;s position just 90 minutes from New York City
                  provides access to Columbia University, NYU, and other
                  world-class institutions for research partnerships,
                  guest lectures, and student exchange programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* References */}
      <ReferenceLinks references={educationRefs} />

      {/* CTA */}
      <CTASection />
    </>
  );
}
