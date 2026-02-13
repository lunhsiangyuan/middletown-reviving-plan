import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  Building2,
  MapPin,
  Users,
  DollarSign,
  Briefcase,
  Landmark,
  Train,
  GraduationCap,
  FileDown,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Investment Opportunities | Middletown Reviving Plan",
  description:
    "Explore investment opportunities in Middletown, NY. Real estate trends, existing investment cases, opportunity sectors, and strategic advantages.",
};

const marketStats = [
  {
    icon: DollarSign,
    label: "Avg. Home Price",
    value: "$395K",
    detail: "+63% since 2019",
  },
  {
    icon: Users,
    label: "Population",
    value: "30,345",
    detail: "Growing community",
  },
  {
    icon: Landmark,
    label: "Public Investment",
    value: "$10M+",
    detail: "DRI + BOA grants",
  },
  {
    icon: Building2,
    label: "Facade Renovations",
    value: "17 buildings",
    detail: "Downtown core",
  },
];

const investmentCases = [
  {
    name: "Gan Jing World",
    sector: "Technology",
    badge: "bg-sky-100 text-sky-800",
    description:
      "Technology and clean-content video platform headquartered in Middletown, bringing tech jobs and innovation to the community.",
    investment: "HQ Operations",
  },
  {
    name: "NTD Television / The Epoch Times / Sound of Hope Radio",
    sector: "Media",
    badge: "bg-amber-100 text-amber-800",
    description:
      "A media cluster with multiple international news and broadcasting organizations operating in the Middletown area.",
    investment: "Media Cluster",
  },
  {
    name: "Mister Croissant / Taiwan Way / Monte Pastries",
    sector: "Food & Beverage",
    badge: "bg-orange-100 text-orange-800",
    description:
      "Downtown restaurants and bakeries revitalizing North Street and the commercial core with diverse culinary offerings.",
    investment: "Multiple Storefronts",
  },
  {
    name: "New Middletown Department Store",
    sector: "Retail",
    badge: "bg-pink-100 text-pink-800",
    description:
      "Major retail investment revitalizing a downtown commercial space into a full-service department store.",
    investment: "$2.1M (Shen Yun)",
  },
  {
    name: "Northern Medical Center",
    sector: "Healthcare",
    badge: "bg-emerald-100 text-emerald-800",
    description:
      "Integrative medical center offering Primary Care, Chinese Medicine, Mental Health, TMS, Physical Therapy, and more. Led by CEO Dr. Jingduan Yang.",
    investment: "Healthcare Services",
  },
  {
    name: "Fei Tian College",
    sector: "Education",
    badge: "bg-purple-100 text-purple-800",
    description:
      "NECHE-accredited college with programs in Dance, Fine Arts, Data Science, Biomedical Sciences, Quantum Computing, and Biostatistics.",
    investment: "Academic Institution",
  },
];

const opportunitySectors = [
  {
    title: "Healthcare",
    icon: Building2,
    description:
      "Growing demand for medical services with Touro COM training pipeline and Northern Medical Center expansion.",
  },
  {
    title: "Education",
    icon: GraduationCap,
    description:
      "Multiple colleges and training institutions creating demand for student housing, services, and technology.",
  },
  {
    title: "Technology",
    icon: TrendingUp,
    description:
      "Gan Jing World HQ establishes a tech presence; opportunity for supporting businesses and tech services.",
  },
  {
    title: "Food & Beverage",
    icon: Briefcase,
    description:
      "Downtown revitalization creating prime restaurant and retail spaces with growing foot traffic.",
  },
  {
    title: "Real Estate",
    icon: DollarSign,
    description:
      "63% home value appreciation since 2019; commercial spaces being renovated; 270-acre campus development planned.",
  },
  {
    title: "Media & Entertainment",
    icon: MapPin,
    description:
      "Established media organizations create an ecosystem for content production, broadcasting, and digital services.",
  },
];

const strategicAdvantages = [
  {
    title: "90 Minutes from NYC",
    description:
      "Direct access to New York City via I-84, Route 17, and NJ Transit rail, providing metro-area connectivity at a fraction of the cost.",
    icon: Train,
  },
  {
    title: "Multi-Modal Transportation",
    description:
      "Interstate highways, commuter rail, and the Heritage Trail create excellent accessibility for residents and businesses.",
    icon: MapPin,
  },
  {
    title: "Trained Workforce",
    description:
      "Fei Tian College, Touro COM, and SUNY Orange provide a steady pipeline of educated professionals in healthcare, technology, and the arts.",
    icon: GraduationCap,
  },
  {
    title: "Government Support",
    description:
      "$10M+ in public investment through DRI, BOA grants, and NYS programs demonstrate strong government commitment to growth.",
    icon: Landmark,
  },
];

export default function InvestmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 px-6 py-16 text-white lg:px-12">
        <div className="max-w-3xl">
          <Badge className="mb-4 bg-white/20 text-white">
            Investment Strategy
          </Badge>
          <h1 className="mb-4 text-4xl font-bold">
            Investment Opportunities in Middletown
          </h1>
          <p className="text-lg text-green-100">
            Discover a rapidly growing community with proven returns, strong
            public investment, and an expanding economic ecosystem. Middletown
            offers compelling opportunities across multiple sectors.
          </p>
        </div>
      </section>

      {/* Market Overview */}
      <section className="px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          Market Overview
        </h2>
        <p className="mb-8 text-slate-600">
          Key indicators show consistent growth and investment momentum in
          Middletown.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {marketStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-xl border bg-gradient-to-b from-white to-green-50 p-6 text-center"
              >
                <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-xl bg-green-100">
                  <Icon className="size-6 text-green-700" />
                </div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  {stat.label}
                </p>
                <p className="mt-1 text-2xl font-bold text-green-700">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs text-slate-500">{stat.detail}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Existing Investment Cases */}
      <section className="border-t bg-slate-50 px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          Existing Investment Cases
        </h2>
        <p className="mb-8 text-slate-600">
          These businesses and organizations have already invested in
          Middletown&apos;s revival, establishing a proven track record of
          growth.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {investmentCases.map((item) => (
            <Card
              key={item.name}
              className="transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base">{item.name}</CardTitle>
                  <Badge className={item.badge}>{item.sector}</Badge>
                </div>
                <CardDescription className="text-xs font-semibold text-green-700">
                  {item.investment}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Opportunity Sectors */}
      <section className="px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          Opportunity Sectors
        </h2>
        <p className="mb-8 text-slate-600">
          Key sectors with the highest growth potential for new investment.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {opportunitySectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <Card key={sector.title}>
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-green-100">
                    <Icon className="size-5 text-green-700" />
                  </div>
                  <CardTitle className="text-base">{sector.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    {sector.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Strategic Advantages */}
      <section className="border-t bg-slate-50 px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          Strategic Advantages
        </h2>
        <p className="mb-8 text-slate-600">
          Why Middletown is uniquely positioned for investment success.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          {strategicAdvantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className="flex items-start gap-4 rounded-xl border bg-white p-6"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-green-100">
                  <Icon className="size-6 text-green-700" />
                </div>
                <div>
                  <p className="mb-1 text-lg font-semibold text-slate-900">
                    {adv.title}
                  </p>
                  <p className="text-sm text-slate-600">{adv.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ROI Analysis */}
      <section className="px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          ROI Analysis
        </h2>
        <p className="mb-8 text-slate-600">
          Historical data demonstrates strong returns across multiple investment
          categories.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Home Value Appreciation */}
          <div className="rounded-xl border bg-gradient-to-b from-white to-green-50 p-6">
            <h3 className="mb-4 text-lg font-bold text-slate-900">
              Home Value Appreciation
            </h3>
            <div className="mb-4 flex items-end gap-3">
              <div className="flex-1">
                <p className="text-xs text-slate-500">2019</p>
                <div className="mt-1 h-4 rounded-full bg-slate-200">
                  <div
                    className="h-4 rounded-full bg-slate-400"
                    style={{ width: "61%" }}
                  />
                </div>
                <p className="mt-1 text-sm font-medium text-slate-600">
                  ~$242K
                </p>
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-500">2025</p>
                <div className="mt-1 h-4 rounded-full bg-green-200">
                  <div
                    className="h-4 rounded-full bg-green-600"
                    style={{ width: "100%" }}
                  />
                </div>
                <p className="mt-1 text-sm font-bold text-green-700">$395K</p>
              </div>
            </div>
            <div className="rounded-lg bg-green-100 p-3 text-center">
              <p className="text-2xl font-bold text-green-800">+63%</p>
              <p className="text-xs text-green-700">
                Home value appreciation in 6 years
              </p>
            </div>
          </div>

          {/* Commercial & Public Investment */}
          <div className="rounded-xl border bg-gradient-to-b from-white to-green-50 p-6">
            <h3 className="mb-4 text-lg font-bold text-slate-900">
              Public &amp; Private Investment
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between rounded-lg bg-white p-3">
                <p className="text-sm text-slate-700">DRI Public Investment</p>
                <p className="font-bold text-green-700">$10.0M</p>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white p-3">
                <p className="text-sm text-slate-700">
                  Dept. Store (Shen Yun)
                </p>
                <p className="font-bold text-green-700">$2.1M</p>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white p-3">
                <p className="text-sm text-slate-700">BOA Planning Grant</p>
                <p className="font-bold text-green-700">$250K</p>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white p-3">
                <p className="text-sm text-slate-700">
                  Facade Renovations (17 bldgs)
                </p>
                <p className="font-bold text-green-700">$1.0M</p>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-green-100 p-3 text-center">
              <p className="text-2xl font-bold text-green-800">$13.35M+</p>
              <p className="text-xs text-green-700">
                Total documented investment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 px-6 py-16 text-center text-white lg:px-12">
        <h2 className="mb-3 text-3xl font-bold">Ready to Invest?</h2>
        <p className="mb-8 text-green-100">
          Schedule a consultation or download our investor deck to learn more
          about opportunities in Middletown.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-green-700 hover:bg-green-50"
          >
            <Link href="/contact">Schedule Investment Consultation</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 bg-transparent text-white hover:bg-white/10"
          >
            <Link href="/for/government">
              <FileDown className="mr-1 size-4" />
              Download Investor Deck
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
