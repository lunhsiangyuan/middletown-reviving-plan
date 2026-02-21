import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { AudienceSelector } from "@/components/sections/audience-selector";
import { StatsSection } from "@/components/sections/stats-section";
import { TopicsGrid } from "@/components/sections/topics-grid";
import { TimelineWrapper } from "@/components/sections/timeline-wrapper";
import { CommunityStories } from "@/components/sections/community-stories";
import { CTASection } from "@/components/sections/cta-section";
import { ScrollMapExplorer } from "@/components/sections/scroll-map-explorer";

export const metadata: Metadata = {
  title: "Middletown Reviving Plan | Where Technology Meets Humanity",
  description:
    "A comprehensive community initiative to transform Middletown, NY through strategic investments in education, healthcare, infrastructure, and sustainable growth.",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Decorative divider */}
      <div className="section-divider">
        <span className="text-amber-400">◆</span>
      </div>

      {/* Audience Selector */}
      <AudienceSelector />

      {/* Decorative divider */}
      <div className="section-divider">
        <span className="text-amber-400">◆</span>
      </div>

      {/* Topic Navigation Grid */}
      <TopicsGrid />

      {/* Stats Section */}
      <StatsSection />

      {/* Community Impact Stories */}
      <CommunityStories />

      {/* Timeline — horizontal mode */}
      <TimelineWrapper horizontal />

      {/* Decorative divider */}
      <div className="section-divider">
        <span className="text-amber-400">◆</span>
      </div>

      {/* Interactive Map — Scroll-Driven Explorer */}
      <ScrollMapExplorer />

      {/* Decorative divider */}
      <div className="section-divider">
        <span className="text-amber-400">◆</span>
      </div>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
