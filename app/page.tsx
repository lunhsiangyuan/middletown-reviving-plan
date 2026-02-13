import Link from "next/link";
import type { Metadata } from "next";
import {
  Building,
  Heart,
  GraduationCap,
  Store,
  Coffee,
  Train,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Hero } from "@/components/sections/hero";
import { AudienceSelector } from "@/components/sections/audience-selector";
import { StatsSection } from "@/components/sections/stats-section";
import { Timeline } from "@/components/sections/timeline";
import { CTASection } from "@/components/sections/cta-section";
import { timelineEvents } from "@/lib/data/timeline";

export const metadata: Metadata = {
  title: "Middletown Reviving Plan | Where Technology Meets Humanity",
  description:
    "A comprehensive community initiative to transform Middletown, NY through strategic investments in education, healthcare, infrastructure, and sustainable growth.",
};

const topics = [
  {
    title: "Community Campus",
    description:
      "270-acre campus transformation from former psychiatric center to thriving community hub.",
    icon: Building,
    href: "/campus",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    hoverBorder: "hover:border-blue-300",
  },
  {
    title: "Healthcare",
    description:
      "Integrative medicine and regional health services building a healthier community.",
    icon: Heart,
    href: "/healthcare",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    hoverBorder: "hover:border-emerald-300",
  },
  {
    title: "Education",
    description:
      "Four institutions of higher learning driving academic excellence and innovation.",
    icon: GraduationCap,
    href: "/education",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    hoverBorder: "hover:border-purple-300",
  },
  {
    title: "Revitalization",
    description:
      "$10M Downtown Revitalization Initiative transforming the city center.",
    icon: Store,
    href: "/revitalization",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    hoverBorder: "hover:border-amber-300",
  },
  {
    title: "Business & Lifestyle",
    description:
      "A vibrant mix of dining, shopping, and cultural destinations downtown.",
    icon: Coffee,
    href: "/lifestyle",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    hoverBorder: "hover:border-rose-300",
  },
  {
    title: "Transportation",
    description:
      "Strategic connectivity to NYC, regional airports, and interstate highways.",
    icon: Train,
    href: "/transportation",
    color: "text-sky-600",
    bgColor: "bg-sky-50",
    hoverBorder: "hover:border-sky-300",
  },
  {
    title: "Case Studies",
    description:
      "Lessons from comparable Hudson Valley cities that have revitalized successfully.",
    icon: BookOpen,
    href: "/case-studies",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    hoverBorder: "hover:border-indigo-300",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Audience Selector */}
      <AudienceSelector />

      {/* Topic Navigation Grid */}
      <section id="explore" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-blue-600">
              Where Technology Meets Humanity
            </p>
            <h2 className="mb-3 text-3xl font-bold text-slate-900">
              Explore the Plan
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Seven interconnected pillars driving Middletown&apos;s
              transformation into a model 21st-century community.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => {
              const Icon = topic.icon;
              return (
                <Link key={topic.href} href={topic.href}>
                  <Card
                    className={`h-full cursor-pointer border-2 border-transparent transition-all duration-200 hover:shadow-lg ${topic.hoverBorder}`}
                  >
                    <CardHeader>
                      <div
                        className={`mb-3 flex size-12 items-center justify-center rounded-xl ${topic.bgColor}`}
                      >
                        <Icon className={`size-6 ${topic.color}`} />
                      </div>
                      <CardTitle className="flex items-center justify-between text-lg">
                        {topic.title}
                        <ArrowRight className="size-4 text-slate-400" />
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {topic.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Timeline */}
      <Timeline
        events={timelineEvents}
        title="Revitalization Timeline"
      />

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
