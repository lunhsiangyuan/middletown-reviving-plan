import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  Home,
  Users,
  Briefcase,
  Train,
  TreePine,
  DollarSign,
  MapPin,
  Sun,
  UtensilsCrossed,
  Stethoscope,
  Armchair,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Your Guide to Middletown | Middletown Reviving Plan",
  description:
    "Discover why Middletown, NY is a great place to live, work, and grow. Explore cost of living, community culture, employment, and quality of life.",
};

const qualityOfLifeItems = [
  {
    icon: TreePine,
    title: "Small-Town Charm",
    description:
      "Historic downtown, local shops, and a walkable Heritage Trail offer a peaceful yet vibrant lifestyle just 90 minutes from NYC.",
  },
  {
    icon: Heart,
    title: "Growing Community",
    description:
      "A diverse, welcoming population of 30,345+ residents with strong community events and cultural organizations.",
  },
  {
    icon: Home,
    title: "Affordable Living",
    description:
      "Average home prices at $395K offer significant savings compared to NYC metro areas while maintaining quality of life.",
  },
];

const costOfLivingStats = [
  { label: "Avg. Home Price", value: "$395K", change: "+63% since 2019" },
  { label: "Median Household Income", value: "$52K", change: "" },
  { label: "Distance to NYC", value: "~90 min", change: "via I-84 / NJ Transit" },
  { label: "City Area", value: "5.2 sq mi", change: "" },
];

const employmentSectors = [
  {
    sector: "Healthcare",
    companies: "Garnet Health, Northern Medical Center, Touro COM",
    badge: "bg-emerald-100 text-emerald-800",
  },
  {
    sector: "Education",
    companies: "Fei Tian College, SUNY Orange, Fei Tian Academy",
    badge: "bg-purple-100 text-purple-800",
  },
  {
    sector: "Technology",
    companies: "Gan Jing World (HQ)",
    badge: "bg-sky-100 text-sky-800",
  },
  {
    sector: "Media",
    companies: "NTD Television, The Epoch Times, Sound of Hope Radio",
    badge: "bg-amber-100 text-amber-800",
  },
];

export default function PersonalPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 px-6 py-16 text-white lg:px-12">
        <div className="max-w-3xl">
          <Badge className="mb-4 bg-white/20 text-white">Personal Guide</Badge>
          <h1 className="mb-4 text-4xl font-bold">Your Guide to Middletown</h1>
          <p className="text-lg text-blue-100">
            Everything you need to know about living, working, and thriving in
            Middletown, NY -- a growing community with small-town charm and
            big-city access.
          </p>
        </div>
      </section>

      {/* Why Middletown */}
      <section className="px-6 py-14 lg:px-12">
        <h2 className="mb-8 text-2xl font-bold text-slate-900">
          Why Middletown?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {qualityOfLifeItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title}>
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-blue-100">
                    <Icon className="size-5 text-blue-700" />
                  </div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Retirement & Quality Living */}
      <section className="border-t bg-gradient-to-br from-amber-50 to-orange-50 px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          Ideal for Retirement & Quality Living
        </h2>
        <p className="mb-8 text-slate-600">
          Middletown offers a perfect blend of peaceful living and comprehensive services,
          making it an ideal destination for retirees and families seeking a high quality of life.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-amber-100">
                <Armchair className="size-5 text-amber-700" />
              </div>
              <CardTitle className="text-base">Retirement Haven</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Affordable housing ($395K avg vs $700K+ NYC suburbs), low property
                taxes compared to NJ/CT, walkable downtown, and a tight-knit community.
                Enjoy a serene, unhurried pace of life just 90 minutes from world-class
                city amenities.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-green-100">
                <UtensilsCrossed className="size-5 text-green-700" />
              </div>
              <CardTitle className="text-base">Diverse Cuisine</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                A thriving food scene with healthy dining options: Taiwan Way (Taiwanese
                comfort food), Mister Croissant (French artisan bakery), Monte Pastries,
                Mon Tea (premium teas), Daye&apos;s Coffee (enzyme coffee), Oak &amp; Reed,
                and Clemson Bros. Brewery. Fresh, diverse, and affordable.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-sky-100">
                <Sun className="size-5 text-sky-700" />
              </div>
              <CardTitle className="text-base">Four-Season Climate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Enjoy all four seasons in the Hudson Valley: vibrant fall foliage,
                snowy winters ideal for nearby ski resorts, blooming springs, and warm
                summers. Average temps range from 25°F (winter) to 82°F (summer).
                Clean air and scenic natural surroundings year-round.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-rose-100">
                <Stethoscope className="size-5 text-rose-700" />
              </div>
              <CardTitle className="text-base">Comprehensive Healthcare</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Multiple healthcare providers at your doorstep: Northern Medical Center
                (integrative Western + Chinese medicine, TMS, mental health), Garnet Health
                Medical Center (full-service hospital), Touro COM (medical training
                pipeline). Medicare and Medicaid widely accepted.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost of Living */}
      <section className="border-t bg-slate-50 px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          Cost of Living
        </h2>
        <p className="mb-8 text-slate-600">
          Middletown offers an affordable alternative to New York City while
          remaining well-connected to the metro area.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {costOfLivingStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border bg-white p-5 text-center"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                {stat.label}
              </p>
              <p className="mt-1 text-2xl font-bold text-blue-700">
                {stat.value}
              </p>
              {stat.change && (
                <p className="mt-1 text-xs text-slate-500">{stat.change}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Community & Culture */}
      <section className="px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          Community &amp; Culture
        </h2>
        <p className="mb-8 text-slate-600">
          Middletown is a culturally diverse community where heritage meets
          modern renewal.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-blue-100">
                <Users className="size-5 text-blue-700" />
              </div>
              <CardTitle className="text-base">Diverse Population</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Over 40% of the population identifies as Hispanic or Latino,
                creating a rich multicultural tapestry with diverse cuisines,
                festivals, and community traditions.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-blue-100">
                <MapPin className="size-5 text-blue-700" />
              </div>
              <CardTitle className="text-base">
                Heritage Trail &amp; Recreation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                The Heritage Trail provides miles of scenic walking and cycling
                paths. Downtown features Erie Way Park, Rail Trail Commons, and
                beautifully restored streetscapes from the $10M DRI investment.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Employment & Economy */}
      <section className="border-t bg-slate-50 px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          Employment &amp; Economy
        </h2>
        <p className="mb-8 text-slate-600">
          Key growth sectors are expanding employment opportunities in
          Middletown.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {employmentSectors.map((item) => (
            <div
              key={item.sector}
              className="flex items-start gap-4 rounded-xl border bg-white p-5"
            >
              <Briefcase className="mt-0.5 size-5 shrink-0 text-slate-400" />
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <p className="font-semibold text-slate-900">{item.sector}</p>
                  <Badge className={item.badge}>{item.sector}</Badge>
                </div>
                <p className="text-sm text-slate-600">{item.companies}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Getting Around */}
      <section className="px-6 py-14 lg:px-12">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          Getting Around
        </h2>
        <p className="mb-8 text-slate-600">
          Multiple transportation options connect Middletown to the broader
          region.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border bg-white p-5">
            <Train className="mb-3 size-6 text-blue-600" />
            <p className="font-semibold text-slate-900">NJ Transit / Metro-North</p>
            <p className="mt-1 text-sm text-slate-600">
              Rail connections to NYC Penn Station and Hoboken via Port Jervis
              Line.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-5">
            <DollarSign className="mb-3 size-6 text-blue-600" />
            <p className="font-semibold text-slate-900">Interstate Access</p>
            <p className="mt-1 text-sm text-slate-600">
              I-84 and Route 17 provide direct highway access to NYC, NJ, CT,
              and PA.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-5">
            <MapPin className="mb-3 size-6 text-blue-600" />
            <p className="font-semibold text-slate-900">Local Transit</p>
            <p className="mt-1 text-sm text-slate-600">
              Middletown-area bus routes and the downtown Heritage Trail for
              pedestrians and cyclists.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 px-6 py-16 text-center text-white lg:px-12">
        <h2 className="mb-3 text-3xl font-bold">Ready to Explore?</h2>
        <p className="mb-8 text-blue-100">
          Plan your visit or connect with the Middletown community today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-700 hover:bg-blue-50"
          >
            <Link href="/contact">Plan Your Visit</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 bg-transparent text-white hover:bg-white/10"
          >
            <Link href="/collaborate">Connect with Community</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
