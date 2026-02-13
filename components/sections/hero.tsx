"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

const slogans = {
  "zh-TW": {
    eyebrow: "復興願景",
    title: "Reviving",
    highlight: "Middletown",
    line1: "當科技遇上人性",
    line2: "進步與傳統智慧的融合",
    line3: "偉大文明與文藝復興的再現",
    cta1: "探索計畫",
    cta2: "找到你的角色",
  },
  en: {
    eyebrow: "A Vision for Tomorrow",
    title: "Reviving",
    highlight: "Middletown",
    line1: "Where Technology Meets Humanity",
    line2: "A Fusion of Progress and Ancient Wisdom",
    line3: "The Renaissance of Great Civilization",
    cta1: "Explore the Plan",
    cta2: "Find Your Role",
  },
  es: {
    eyebrow: "Una Visión para el Mañana",
    title: "Reviviendo",
    highlight: "Middletown",
    line1: "Donde la Tecnología Encuentra la Humanidad",
    line2: "Una Fusión de Progreso y Sabiduría Ancestral",
    line3: "El Renacimiento de una Gran Civilización",
    cta1: "Explorar el Plan",
    cta2: "Encuentra Tu Rol",
  },
};

export function Hero() {
  const { language } = useLanguage();
  const s = slogans[language] || slogans["zh-TW"];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-transparent to-slate-900/80" />

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 size-96 rounded-full bg-blue-500 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 size-96 rounded-full bg-emerald-500 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-300">
          {s.eyebrow}
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {s.title}{" "}
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            {s.highlight}
          </span>
        </h1>

        {/* Three-line Slogan */}
        <div className="mx-auto mb-8 max-w-2xl space-y-2">
          <p className="text-xl font-light tracking-wide text-white/90 sm:text-2xl">
            {s.line1}
          </p>
          <p className="text-lg text-slate-300 sm:text-xl">
            {s.line2}
          </p>
          <p className="text-lg font-medium text-emerald-300 sm:text-xl">
            {s.line3}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="bg-blue-600 px-8 text-white hover:bg-blue-700"
          >
            <Link href="#explore">{s.cta1}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-slate-500 bg-transparent text-white hover:bg-white/10"
          >
            <Link href="/for/personal">{s.cta2}</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="size-6 text-slate-400" />
      </div>
    </section>
  );
}
