import type { Metadata } from "next";
import {
  Coffee,
  UtensilsCrossed,
  ShoppingBag,
  Radio,
  Sparkles,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { BusinessCard } from "@/components/cards/business-card";
import { OrgCard } from "@/components/cards/org-card";
import { ReferenceLinks } from "@/components/reference-links";
import { CTASection } from "@/components/sections/cta-section";
import { businesses } from "@/lib/data/businesses";
import { organizations } from "@/lib/data/organizations";
import { references } from "@/lib/data/references";

export const metadata: Metadata = {
  title: "Business & Lifestyle | Middletown Reviving Plan",
  description:
    "Dining, shopping, media organizations, and quality of life in downtown Middletown, NY.",
};

const diningBusinesses = businesses.filter((b) =>
  ["restaurant", "cafe", "bakery", "brewery"].includes(b.type)
);

const shoppingBusinesses = businesses.filter((b) =>
  ["department-store", "art"].includes(b.type)
);

const mediaOrgs = organizations.filter((o) =>
  ["gan-jing-world", "ntd-television", "epoch-times", "sound-of-hope"].includes(
    o.id
  )
);

const lifestyleRefs = references.filter((ref) =>
  ["middletown-bid", "gan-jing-world"].includes(ref.id)
);

export default function LifestylePage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-900 via-rose-800 to-pink-900 py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/3 size-96 rounded-full bg-pink-400 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-rose-200">
            <Coffee className="size-4" />
            Business & Lifestyle
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Business & Lifestyle
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-rose-200">
            A vibrant mix of dining, shopping, and cultural destinations that
            make downtown Middletown a place to explore and enjoy.
          </p>
        </div>
      </section>

      {/* Dining Section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <UtensilsCrossed className="size-5 text-rose-600" />
            <h2 className="text-2xl font-bold text-slate-900">Dining</h2>
          </div>
          <p className="mb-8 max-w-3xl text-slate-600">
            From Taiwanese comfort food to French pastries and craft beer,
            Middletown&apos;s dining scene reflects the community&apos;s rich
            cultural diversity.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {diningBusinesses.map((biz) => (
              <BusinessCard
                key={biz.id}
                name={biz.name}
                type={biz.type}
                address={biz.address || "Middletown, NY"}
                description={biz.description}
                specialties={biz.specialties}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Shopping Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <ShoppingBag className="size-5 text-rose-600" />
            <h2 className="text-2xl font-bold text-slate-900">Shopping</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {shoppingBusinesses.map((biz) => (
              <BusinessCard
                key={biz.id}
                name={biz.name}
                type={biz.type}
                address={biz.address || "Middletown, NY"}
                description={biz.description}
                specialties={biz.specialties}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Media Organizations */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Radio className="size-5 text-rose-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              Media Organizations
            </h2>
          </div>
          <p className="mb-8 max-w-3xl text-slate-600">
            Middletown is home to several major media organizations, adding a
            unique dimension to the city&apos;s economy and cultural identity.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {mediaOrgs.map((org) => (
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

      {/* Living in Middletown */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Sparkles className="size-5 text-rose-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              Living in Middletown
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Affordable Living</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Average home prices around $395K -- significantly more
                  affordable than NYC metro, with home values up 63% since 2019
                  showing strong growth potential.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cultural Diversity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  With over 40% Hispanic/Latino population and a growing Asian
                  community, Middletown offers a richly diverse cultural
                  experience reflected in its dining and community life.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Growing Downtown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  The $10M DRI investment, new businesses on North Street, and
                  the Heritage Trail connection are creating a walkable,
                  vibrant downtown core.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* References */}
      <ReferenceLinks references={lifestyleRefs} />

      {/* CTA */}
      <CTASection />
    </>
  );
}
