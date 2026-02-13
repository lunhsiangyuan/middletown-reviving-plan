import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  FlaskConical,
  Globe,
  Stethoscope,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { organizations } from "@/lib/data/organizations";

export const metadata: Metadata = {
  title: "Academic Partnership Opportunities | Middletown Reviving Plan",
  description:
    "Explore academic collaboration opportunities with Middletown institutions including Fei Tian College, Touro COM, and SUNY Orange.",
};

const partnerInstitutions = [
  {
    id: "fei-tian-college",
    highlight: "NECHE-accredited",
    programs: ["Dance", "Fine Arts", "Data Science", "Biomedical Sciences", "Quantum Computing", "Biostatistics"],
  },
  {
    id: "touro-com",
    highlight: "Osteopathic Medicine",
    programs: ["Doctor of Osteopathic Medicine"],
  },
  {
    id: "suny-orange",
    highlight: "Community College",
    programs: ["Associate Degrees", "Certificate Programs"],
  },
  {
    id: "fei-tian-academy",
    highlight: "K-12 Arts School",
    programs: ["Performing Arts", "Academic Excellence"],
  },
];

const exchangePrograms = [
  {
    title: "Student Exchange",
    description:
      "Semester-long programs allowing students to experience diverse academic environments across partner institutions.",
    icon: Globe,
  },
  {
    title: "Faculty Collaboration",
    description:
      "Joint research initiatives and visiting professor programs to foster cross-institutional knowledge sharing.",
    icon: BookOpen,
  },
  {
    title: "Summer Intensives",
    description:
      "Short-term immersive programs in performing arts, biomedical sciences, and data analytics.",
    icon: GraduationCap,
  },
];

const researchAreas = [
  {
    area: "Biomedical Sciences",
    description:
      "Fei Tian College's biomedical sciences program combined with Touro COM's medical research capabilities create opportunities for translational research.",
    badge: "bg-emerald-100 text-emerald-800",
  },
  {
    area: "Data Science & Computing",
    description:
      "Programs in data science, quantum computing, and biostatistics offer cross-disciplinary research in healthcare analytics and AI applications.",
    badge: "bg-sky-100 text-sky-800",
  },
  {
    area: "Community Health",
    description:
      "Community-based health research leveraging Northern Medical Center's integrative medicine approach and Touro's clinical training.",
    badge: "bg-amber-100 text-amber-800",
  },
  {
    area: "Performing Arts",
    description:
      "Fei Tian's world-renowned dance and fine arts programs offer unique research opportunities in arts education and cultural preservation.",
    badge: "bg-purple-100 text-purple-800",
  },
];

const regionalNetwork = [
  { name: "West Point (USMA)", distance: "~20 mi", county: "Orange County" },
  { name: "Columbia University", distance: "~75 mi", county: "New York City" },
  { name: "NYU", distance: "~75 mi", county: "New York City" },
  { name: "Mount Sinai", distance: "~75 mi", county: "New York City" },
  { name: "Vassar College", distance: "~50 mi", county: "Dutchess County" },
  { name: "Marist College", distance: "~55 mi", county: "Dutchess County" },
];

export default function SchoolPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 px-6 py-16 text-white lg:px-12">
        <div className="max-w-3xl">
          <Badge className="mb-4 bg-white/20 text-white">
            Academic Partnerships
          </Badge>
          <h1 className="mb-4 text-4xl font-bold">
            Academic Partnership Opportunities
          </h1>
          <p className="text-lg text-purple-100">
            Middletown is home to a growing academic ecosystem. Explore how your
            institution can partner with local colleges, medical schools, and
            research programs.
          </p>
        </div>
      </section>

      {/* Partner Institutions */}
      <section className="px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          Partner Institutions
        </h2>
        <p className="mb-8 text-slate-600">
          Four key academic institutions form the core of Middletown&apos;s
          education ecosystem.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {partnerInstitutions.map((inst) => {
            const org = organizations.find((o) => o.id === inst.id);
            if (!org) return null;
            return (
              <Card key={inst.id}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base">{org.name}</CardTitle>
                    <Badge className="bg-purple-100 text-purple-800">
                      {inst.highlight}
                    </Badge>
                  </div>
                  {org.address && (
                    <CardDescription className="text-xs">
                      {org.address}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-slate-600">{org.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {inst.programs.map((prog) => (
                      <Badge
                        key={prog}
                        variant="outline"
                        className="text-xs font-normal"
                      >
                        {prog}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <a
                    href={org.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-purple-600 hover:underline"
                  >
                    Visit Website <ExternalLink className="size-3" />
                  </a>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Exchange Programs */}
      <section className="border-t bg-slate-50 px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          Exchange Programs
        </h2>
        <p className="mb-8 text-slate-600">
          Potential student and faculty exchange opportunities across partner
          institutions.
        </p>
        <div className="grid gap-6 lg:grid-cols-3">
          {exchangePrograms.map((program) => {
            const Icon = program.icon;
            return (
              <Card key={program.title}>
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-purple-100">
                    <Icon className="size-5 text-purple-700" />
                  </div>
                  <CardTitle className="text-base">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Research Collaboration */}
      <section className="px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          Research Collaboration
        </h2>
        <p className="mb-8 text-slate-600">
          Cross-institutional research opportunities spanning multiple
          disciplines.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {researchAreas.map((item) => (
            <div
              key={item.area}
              className="flex items-start gap-4 rounded-xl border bg-white p-5"
            >
              <FlaskConical className="mt-0.5 size-5 shrink-0 text-purple-500" />
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <p className="font-semibold text-slate-900">{item.area}</p>
                  <Badge className={item.badge}>{item.area}</Badge>
                </div>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Regional Academic Network */}
      <section className="border-t bg-slate-50 px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          Regional Academic Network
        </h2>
        <p className="mb-8 text-slate-600">
          Middletown&apos;s strategic location places it within reach of major
          universities and research institutions.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {regionalNetwork.map((school) => (
            <div
              key={school.name}
              className="flex items-center justify-between rounded-lg border bg-white px-4 py-3"
            >
              <div>
                <p className="font-medium text-slate-900">{school.name}</p>
                <p className="text-xs text-slate-500">{school.county}</p>
              </div>
              <Badge variant="outline" className="text-xs">
                {school.distance}
              </Badge>
            </div>
          ))}
        </div>
      </section>

      {/* Healthcare Training Pipeline */}
      <section className="px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          Healthcare Training Pipeline
        </h2>
        <p className="mb-8 text-slate-600">
          A unique medical education pathway from classroom to clinical practice.
        </p>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
          <div className="flex-1 rounded-xl border bg-purple-50 p-6">
            <Stethoscope className="mb-3 size-8 text-purple-600" />
            <h3 className="mb-2 text-lg font-bold text-purple-900">
              Touro COM
            </h3>
            <p className="text-sm text-purple-800">
              Osteopathic medical students receive classroom education and
              pre-clinical training at the Middletown campus.
            </p>
          </div>
          <div className="flex items-center justify-center px-4 text-purple-400">
            <span className="hidden text-3xl lg:block">&rarr;</span>
            <span className="text-2xl lg:hidden">&darr;</span>
          </div>
          <div className="flex-1 rounded-xl border bg-emerald-50 p-6">
            <Stethoscope className="mb-3 size-8 text-emerald-600" />
            <h3 className="mb-2 text-lg font-bold text-emerald-900">
              Clinical Rotations
            </h3>
            <p className="text-sm text-emerald-800">
              Students complete clinical rotations at Northern Medical Center and
              Garnet Health Medical Center, gaining real-world medical experience.
            </p>
          </div>
          <div className="flex items-center justify-center px-4 text-emerald-400">
            <span className="hidden text-3xl lg:block">&rarr;</span>
            <span className="text-2xl lg:hidden">&darr;</span>
          </div>
          <div className="flex-1 rounded-xl border bg-blue-50 p-6">
            <GraduationCap className="mb-3 size-8 text-blue-600" />
            <h3 className="mb-2 text-lg font-bold text-blue-900">
              Local Practice
            </h3>
            <p className="text-sm text-blue-800">
              Graduates are well-positioned to practice in the community,
              strengthening Middletown&apos;s healthcare workforce and serving
              residents.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 px-6 py-16 text-center text-white lg:px-12">
        <h2 className="mb-3 text-3xl font-bold">Start a Partnership</h2>
        <p className="mb-8 text-purple-100">
          Interested in academic collaboration? We&apos;d love to hear from your
          institution.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-purple-700 hover:bg-purple-50"
          >
            <Link href="/contact">Propose a Partnership</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 bg-transparent text-white hover:bg-white/10"
          >
            <Link href="/contact">Contact Academic Affairs</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
