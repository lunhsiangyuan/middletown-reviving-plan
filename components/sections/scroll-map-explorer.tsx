"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
    MapPin,
    ArrowRight,
    ArrowUp,
    Building,
    Heart,
    GraduationCap,
    Store,
    Coffee,
    Train,
    Monitor,
} from "lucide-react";
import { topicLocations, allMarkers } from "@/lib/data/topic-locations";
import { useLanguage } from "@/lib/i18n/language-context";

const DynamicMap = dynamic(() => import("../ui/map"), {
    ssr: false,
    loading: () => (
        <div className="flex h-full min-h-[300px] w-full flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-100 animate-pulse">
            <div className="flex flex-col items-center gap-3 text-slate-400">
                <MapPin className="size-10 opacity-50" />
                <span className="font-medium tracking-wider">LOADING MAP...</span>
            </div>
        </div>
    ),
});

// Lucide icon name → component 映射
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Building,
    Heart,
    GraduationCap,
    Store,
    Coffee,
    Train,
    Monitor,
};

export function ScrollMapExplorer() {
    const { t } = useLanguage();
    const [activeTopicId, setActiveTopicId] = useState(topicLocations[0].topicId);
    const [showBackToMap, setShowBackToMap] = useState(false);
    const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const mapRef = useRef<HTMLDivElement>(null);

    // IntersectionObserver：偵測哪個卡片進入視口中央 20%
    const setupCardObserver = useCallback(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        const topicId = entry.target.getAttribute("data-topic-id");
                        if (topicId) setActiveTopicId(topicId);
                    }
                }
            },
            {
                rootMargin: "-40% 0px -40% 0px",
                threshold: 0,
            }
        );

        Object.values(sectionRefs.current).forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // IntersectionObserver：偵測地圖是否離開視口（手機版浮動按鈕）
    useEffect(() => {
        if (!mapRef.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => setShowBackToMap(!entry.isIntersecting),
            { threshold: 0.1 }
        );
        observer.observe(mapRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        return setupCardObserver();
    }, [setupCardObserver]);

    const activeTopic =
        topicLocations.find((t) => t.topicId === activeTopicId) || topicLocations[0];

    return (
        <section className="bg-slate-50 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="mb-10 text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-200 px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm">
                        <MapPin className="size-4" />
                        <span>{t("mapExplorer.badge")}</span>
                    </div>
                    <h2
                        className="text-3xl font-bold text-slate-900"
                        style={{ fontFamily: "var(--font-noto-serif-tc)" }}
                    >
                        {t("mapExplorer.title")}
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                        {t("mapExplorer.desc")}
                    </p>
                </div>

                {/* 響應式左右分欄佈局 */}
                <div className="flex flex-col lg:flex-row lg:gap-8">
                    {/* 地圖：手機在上方（order-first），桌面在右側（order-last） */}
                    <div ref={mapRef} className="order-first mb-6 lg:order-last lg:mb-0 lg:w-7/12">
                        <div className="lg:sticky lg:top-24">
                            <div className="overflow-hidden rounded-xl border border-slate-200 shadow-xl transition-all duration-300 hover:shadow-2xl">
                                <DynamicMap
                                    center={activeTopic.center}
                                    zoom={activeTopic.zoom}
                                    markers={allMarkers}
                                    activeMarkerIds={activeTopic.markerIds}
                                    className="h-[300px] w-full lg:h-[550px]"
                                />
                            </div>
                            {/* 當前主題圓點指示器 */}
                            <div className="mt-3 flex items-center justify-center gap-1.5">
                                {topicLocations.map((tp) => (
                                    <button
                                        key={tp.topicId}
                                        onClick={() => setActiveTopicId(tp.topicId)}
                                        className={`size-2 rounded-full transition-all duration-300 ${
                                            tp.topicId === activeTopicId
                                                ? "scale-125 bg-slate-700"
                                                : "bg-slate-300 hover:bg-slate-400"
                                        }`}
                                        aria-label={t(tp.titleKey)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 卡片列：手機在下方（order-last），桌面在左側（order-first） */}
                    <div className="order-last lg:order-first lg:w-5/12">
                        <div className="space-y-4">
                            {topicLocations.map((topic) => {
                                const Icon = iconMap[topic.icon];
                                const isActive = topic.topicId === activeTopicId;
                                return (
                                    <div
                                        key={topic.topicId}
                                        ref={(el) => {
                                            sectionRefs.current[topic.topicId] = el;
                                        }}
                                        data-topic-id={topic.topicId}
                                        className={`cursor-pointer rounded-xl border-2 p-5 transition-all duration-300 ${
                                            isActive
                                                ? "border-slate-300 bg-white shadow-lg scale-[1.01]"
                                                : "border-transparent bg-white/60 hover:bg-white hover:shadow-md"
                                        }`}
                                        onClick={() => setActiveTopicId(topic.topicId)}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div
                                                className={`flex size-11 shrink-0 items-center justify-center rounded-lg ${topic.bgColor}`}
                                            >
                                                {Icon && <Icon className={`size-5 ${topic.color}`} />}
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <div className="flex items-center justify-between gap-2">
                                                    <h3 className="font-semibold text-slate-900">
                                                        {t(topic.titleKey)}
                                                    </h3>
                                                    <Link
                                                        href={topic.href}
                                                        className="shrink-0 text-slate-400 transition-colors hover:text-slate-600"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <ArrowRight className="size-4" />
                                                    </Link>
                                                </div>
                                                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                                    {t(topic.descKey)}
                                                </p>
                                            </div>
                                        </div>
                                        {/* Active 底部色條 */}
                                        {isActive && (
                                            <div
                                                className={`mt-3 h-0.5 rounded-full transition-all duration-500 ${topic.bgColor}`}
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* 手機版：浮動「回到地圖」按鈕（地圖離開視口時顯示） */}
            {showBackToMap && (
                <button
                    onClick={() =>
                        mapRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2.5 text-sm font-medium text-white shadow-lg transition-all hover:bg-slate-700 active:scale-95 lg:hidden"
                >
                    <ArrowUp className="size-4" />
                    {t("mapExplorer.backToMap")}
                </button>
            )}
        </section>
    );
}
