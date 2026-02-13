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
    <section className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-amber-950">
            {t("cta.title")}
          </h2>
          <p className="text-lg text-amber-900/80">
            {t("cta.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {ctas.map((cta) => {
            const Icon = cta.icon;
            return (
              <div
                key={cta.href}
                className="rounded-xl bg-amber-950/10 p-8 text-center backdrop-blur-sm transition-colors hover:bg-amber-950/15"
              >
                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-amber-950/10">
                  <Icon className="size-7 text-amber-950" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-amber-950">
                  {t(cta.titleKey)}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-amber-900/70">
                  {t(cta.descKey)}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-amber-950/30 bg-amber-950 text-amber-100 hover:bg-amber-900"
                >
                  <Link href={cta.href}>{t(cta.buttonKey)}</Link>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
