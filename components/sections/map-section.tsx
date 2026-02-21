"use client";

import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";
import type { MapProps } from "../ui/map";

const DynamicMap = dynamic(() => import("../ui/map"), {
    ssr: false,
    loading: () => (
        <div className="flex h-[500px] w-full flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-100 animate-pulse">
            <div className="flex flex-col items-center gap-3 text-slate-400">
                <MapPin className="size-10 opacity-50" />
                <span className="font-medium tracking-wider">LOADING MAP...</span>
            </div>
        </div>
    ),
});

interface MapSectionProps extends MapProps {
    title?: string;
    description?: string;
    badgeLabel?: string;
    containerClassName?: string;
}

export function MapSection({
    title = "Map Overview",
    description,
    badgeLabel = "Location",
    containerClassName = "py-16 bg-slate-50",
    ...mapProps
}: MapSectionProps) {
    return (
        <section className={containerClassName}>
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-200 px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm">
                        <MapPin className="size-4" />
                        <span>{badgeLabel}</span>
                    </div>
                    <h2
                        className="text-3xl font-bold text-slate-900"
                        style={{ fontFamily: "var(--font-noto-serif-tc)" }}
                    >
                        {title}
                    </h2>
                    {description && (
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                            {description}
                        </p>
                    )}
                </div>
                <div className="relative z-0 overflow-hidden rounded-xl border border-slate-200 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-slate-300">
                    <DynamicMap {...mapProps} className="h-[500px] w-full bg-white" />
                </div>
            </div>
        </section>
    );
}
