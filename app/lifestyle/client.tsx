"use client";

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
import { MapSection } from "@/components/sections/map-section";
import { resolveBusinesses } from "@/lib/data/businesses";
import { resolveOrganizations } from "@/lib/data/organizations";
import { resolveReferences } from "@/lib/data/references";
import { useLanguage } from "@/lib/i18n/language-context";
import { content } from "./content";

export function LifestyleClient() {
  const { language } = useLanguage();
  const c = content[language] ?? content.en;

  const organizations = resolveOrganizations(language);
  const references = resolveReferences(language);
  const businesses = resolveBusinesses(language);

  const mediaOrgs = organizations.filter((o) =>
    ["gan-jing-world", "ntd-television", "epoch-times", "sound-of-hope"].includes(
      o.id
    )
  );

  const lifestyleRefs = references.filter((ref) =>
    ["middletown-bid", "gan-jing-world"].includes(ref.id)
  );
  const diningBusinesses = businesses.filter((b) =>
    ["restaurant", "cafe", "bakery", "brewery"].includes(b.type)
  );
  const shoppingBusinesses = businesses.filter((b) =>
    ["department-store", "art"].includes(b.type)
  );

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
            {c.header.badge}
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            {c.header.title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-rose-200">
            {c.header.desc}
          </p>
        </div>
      </section>

      {/* Dining Section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <UtensilsCrossed className="size-5 text-rose-600" />
            <h2 className="text-2xl font-bold text-slate-900">{c.dining.title}</h2>
          </div>
          <p className="mb-8 max-w-3xl text-slate-600">
            {c.dining.desc}
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
            <h2 className="text-2xl font-bold text-slate-900">{c.shopping.title}</h2>
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
              {c.media.title}
            </h2>
          </div>
          <p className="mb-8 max-w-3xl text-slate-600">
            {c.media.desc}
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
              {c.living.title}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {c.living.cards.map((card) => (
              <Card key={card.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    {card.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* References */}
      <ReferenceLinks references={lifestyleRefs} />

      {/* Lifestyle Map */}
      <MapSection
        title={c.header.title}
        description={c.header.desc}
        badgeLabel={c.header.badge}
        center={[41.445, -74.42]}
        zoom={15}
        markers={[
          {
            id: "downtown",
            position: [41.445, -74.42],
            title: "Downtown & North Street",
            description: "Restaurants, shops & cultural venues",
          },
          {
            id: "gan-jing-world",
            position: [41.446, -74.422],
            title: "Gan Jing World",
            description: "Technology & media HQ",
          },
        ]}
      />

      {/* CTA */}
      <CTASection />
    </>
  );
}
