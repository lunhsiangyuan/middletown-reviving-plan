"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

const slogans = {
  "zh-TW": {
    eyebrow: "OFFICIAL PROPOSAL · NYS ESD 2026",
    title: "Reviving",
    highlight: "Middletown",
    line1: "當科技遇上人性",
    line2: "進步與傳統智慧的融合",
    line3: "偉大文明與文藝復興的再現",
    cta1: "探索計畫",
    cta2: "找到你的角色",
  },
  en: {
    eyebrow: "OFFICIAL PROPOSAL · NYS ESD 2026",
    title: "Reviving",
    highlight: "Middletown",
    line1: "Where Technology Meets Humanity",
    line2: "A Fusion of Progress and Ancient Wisdom",
    line3: "The Renaissance of Great Civilization",
    cta1: "Explore the Plan",
    cta2: "Find Your Role",
  },
  es: {
    eyebrow: "PROPUESTA OFICIAL · NYS ESD 2026",
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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/80" />

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 size-96 rounded-full bg-orange-600/30 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 size-96 rounded-full bg-slate-600/30 blur-3xl" />
      </div>

      {/* Orange glow arc */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-orange-600/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-mono font-medium uppercase tracking-widest text-orange-400 bg-orange-600/20 border border-orange-600/40 rounded-none px-4 py-1 inline-block">
          {s.eyebrow}
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <span style={{ fontFamily: 'var(--font-noto-serif-tc)' }}>{s.title}</span>{" "}
          <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
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
          <p className="text-lg font-medium text-orange-300 sm:text-xl">
            {s.line3}
          </p>
        </div>

        {/* Investment Metrics Panel */}
        <div className="mx-auto mb-8 max-w-3xl bg-slate-800/60 backdrop-blur-sm border border-orange-600/30 px-6 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-mono font-bold tabular-nums text-orange-400">$234M</div>
            <div className="text-xs text-slate-400 tracking-wide">總投資額</div>
          </div>
          <div>
            <div className="text-2xl font-mono font-bold tabular-nums text-orange-400">270</div>
            <div className="text-xs text-slate-400 tracking-wide">英畝開發面積</div>
          </div>
          <div>
            <div className="text-2xl font-mono font-bold tabular-nums text-orange-400">30,345</div>
            <div className="text-xs text-slate-400 tracking-wide">受惠人口</div>
          </div>
          <div>
            <div className="text-2xl font-mono font-bold tabular-nums text-emerald-400">2,847</div>
            <div className="text-xs text-slate-400 tracking-wide">就業機會</div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="bg-orange-600 px-8 text-white hover:bg-orange-700 font-mono uppercase tracking-widest rounded-none"
          >
            <Link href="#explore">{s.cta1}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-slate-500 bg-transparent text-slate-200 hover:bg-slate-700/50 font-mono uppercase tracking-widest rounded-none"
          >
            <Link href="/for/personal">{s.cta2}</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="size-6 text-orange-400/70" />
      </div>
    </section>
  );
}
