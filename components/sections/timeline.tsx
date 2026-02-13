"use client";

import { Badge } from "@/components/ui/badge";

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  category: string;
}

const categoryColors: Record<string, string> = {
  infrastructure: "bg-blue-100 text-blue-800",
  education: "bg-purple-100 text-purple-800",
  healthcare: "bg-emerald-100 text-emerald-800",
  business: "bg-amber-100 text-amber-800",
  government: "bg-red-100 text-red-800",
};

const dotColors: Record<string, string> = {
  infrastructure: "bg-blue-500",
  education: "bg-purple-500",
  healthcare: "bg-emerald-500",
  business: "bg-amber-500",
  government: "bg-red-500",
};

interface TimelineProps {
  events: TimelineEvent[];
  title?: string;
}

export function Timeline({ events, title = "Timeline" }: TimelineProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-noto-serif-tc)' }}>
          {title}
        </h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-amber-300 via-violet-300 to-amber-300 md:left-1/2 md:-translate-x-px" />

          <div className="flex flex-col gap-8">
            {events.map((event, index) => {
              const isLeft = index % 2 === 0;
              const dotColor = dotColors[event.category] || "bg-slate-500";
              const badgeColor = categoryColors[event.category] || "bg-slate-100 text-slate-800";

              return (
                <div
                  key={`${event.year}-${event.title}`}
                  className="relative flex items-start gap-6 md:gap-0"
                >
                  {/* Mobile: dot on the left */}
                  <div className="relative z-10 md:hidden">
                    <div className={`size-3 rounded-full ring-4 ring-amber-100 ${dotColor}`} />
                  </div>

                  {/* Desktop: alternating layout */}
                  <div className="hidden w-full items-center md:flex">
                    {/* Left content */}
                    <div className={`w-1/2 px-8 ${isLeft ? "text-right" : ""}`}>
                      {isLeft && (
                        <div>
                          <span className="text-sm font-bold text-amber-600">
                            {event.year}
                          </span>
                          <h3 className="mt-1 text-lg font-semibold text-slate-900">
                            {event.title}
                          </h3>
                          <p className="mt-1 text-sm text-slate-600">
                            {event.description}
                          </p>
                          <div className="mt-2 flex justify-end">
                            <Badge className={badgeColor}>
                              {event.category}
                            </Badge>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Center dot */}
                    <div className="relative z-10 flex shrink-0 items-center justify-center">
                      <div className={`size-4 rounded-full ring-4 ring-amber-100 ${dotColor}`} />
                    </div>

                    {/* Right content */}
                    <div className={`w-1/2 px-8 ${!isLeft ? "text-left" : ""}`}>
                      {!isLeft && (
                        <div>
                          <span className="text-sm font-bold text-amber-600">
                            {event.year}
                          </span>
                          <h3 className="mt-1 text-lg font-semibold text-slate-900">
                            {event.title}
                          </h3>
                          <p className="mt-1 text-sm text-slate-600">
                            {event.description}
                          </p>
                          <div className="mt-2">
                            <Badge className={badgeColor}>
                              {event.category}
                            </Badge>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile content */}
                  <div className="md:hidden">
                    <span className="text-sm font-bold text-amber-600">
                      {event.year}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-slate-900">
                      {event.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {event.description}
                    </p>
                    <div className="mt-2">
                      <Badge className={badgeColor}>
                        {event.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
