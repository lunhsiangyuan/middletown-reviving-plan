"use client";

import Link from "next/link";
import { Heart, Handshake, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/language-context";

const ctas = [
  {
    titleKey: "cta.donate.title",
    descKey: "cta.donate.desc",
    buttonKey: "cta.donate.button",
    icon: Heart,
    href: "/donate",
  },
  {
    titleKey: "cta.collaborate.title",
    descKey: "cta.collaborate.desc",
    buttonKey: "cta.collaborate.button",
    icon: Handshake,
    href: "/collaborate",
  },
  {
    titleKey: "cta.contact.title",
    descKey: "cta.contact.desc",
    buttonKey: "cta.contact.button",
    icon: Mail,
    href: "/contact",
  },
];

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-50 border-t border-slate-200 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-slate-300" />
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500">
              Take Action
            </span>
            <div className="h-px w-16 bg-slate-300" />
          </div>
          <h2 className="mb-3 text-3xl font-bold text-slate-900" style={{ fontFamily: 'var(--font-noto-serif-tc)' }}>
            {t("cta.title")}
          </h2>
          <p className="text-lg text-slate-600">
            {t("cta.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ctas.map((cta) => {
            const Icon = cta.icon;
            return (
              <div
                key={cta.href}
                className="border border-slate-300 bg-white p-6 flex flex-col items-start gap-4"
              >
                <div className="w-10 h-10 bg-slate-900 flex items-center justify-center">
                  <Icon className="size-5 text-white" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-slate-900 text-lg">
                    {t(cta.titleKey)}
                  </h3>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    {t(cta.descKey)}
                  </p>
                </div>
                <Button
                  asChild
                  className="mt-auto border border-slate-900 bg-transparent text-slate-900 px-4 py-2 text-sm font-mono uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-colors rounded-none"
                  variant="outline"
                >
                  <Link href={cta.href}>{t(cta.buttonKey)}</Link>
                </Button>
              </div>
            );
          })}

          {/* Executive Summary PDF CTA */}
          <div className="border border-slate-300 bg-white p-6 flex flex-col items-start gap-4">
            <div className="w-10 h-10 bg-slate-900 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-serif font-bold text-slate-900 text-lg">政策提案摘要</h3>
              <p className="text-slate-600 text-sm mt-1">含財務預測、時間軸、合規評估的完整執行摘要</p>
            </div>
            <button className="mt-auto border border-slate-900 text-slate-900 px-4 py-2 text-sm font-mono uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-colors">
              下載 PDF →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
