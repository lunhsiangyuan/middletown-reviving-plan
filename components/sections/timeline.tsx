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
  categoryLabels?: Record<string, string>;
  horizontal?: boolean;
}

const CURRENT_YEAR = 2026;

export function Timeline({ events, title = "Timeline", categoryLabels, horizontal = false }: TimelineProps) {
  if (horizontal) {
    return (
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-6 w-1 bg-orange-600" />
            <span className="text-sm font-mono uppercase tracking-widest text-slate-500">
              Revitalization Timeline
            </span>
          </div>
          <h2 className="mb-10 text-center text-3xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-noto-serif-tc)' }}>
            {title}
          </h2>

          <div className="overflow-x-auto pb-4">
            <div className="flex items-start gap-0 min-w-max px-8">
              {events.map((event, index) => {
                const isToday = event.year === CURRENT_YEAR;
                const dotClass = isToday
                  ? 'bg-orange-500 animate-pulse ring-4 ring-orange-200'
                  : dotColors[event.category] || 'bg-slate-500';

                return (
                  <div key={`${event.year}-${event.title}`} className="flex flex-col items-center" style={{ minWidth: '160px' }}>
                    <div className="flex items-center w-full">
                      <div className={`w-3 h-3 rounded-full flex-shrink-0 ${dotClass}`} />
                      {index < events.length - 1 && (
                        <div className="flex-1 h-0.5 bg-slate-200" />
                      )}
                    </div>
                    <div className="pt-3 px-2 text-center max-w-[140px]">
                      <div className={`text-xs font-mono mb-1 ${isToday ? 'text-orange-500 font-bold' : 'text-slate-400'}`}>
                        {event.year}
                      </div>
                      <div className="text-sm font-medium text-slate-800 leading-snug">{event.title}</div>
                      {isToday && (
                        <span className="inline-block mt-1 bg-orange-600 text-white text-xs px-2 py-0.5">
                          ← 今日
                        </span>
                      )}
                      <div className="mt-1">
                        <span className={`text-xs px-1.5 py-0.5 rounded ${categoryColors[event.category] || 'bg-slate-100 text-slate-600'}`}>
                          {categoryLabels?.[event.category] ?? event.category}
                        </span>
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
                              {categoryLabels?.[event.category] ?? event.category}
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
                              {categoryLabels?.[event.category] ?? event.category}
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
                        {categoryLabels?.[event.category] ?? event.category}
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
