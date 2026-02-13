"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

export function Footer() {
  const { t } = useLanguage();

  const topicLinks = [
    { labelKey: "nav.campus", href: "/campus" },
    { labelKey: "nav.healthcare", href: "/healthcare" },
    { labelKey: "nav.education", href: "/education" },
    { labelKey: "nav.revitalization", href: "/revitalization" },
    { labelKey: "nav.lifestyle", href: "/lifestyle" },
    { labelKey: "nav.transportation", href: "/transportation" },
  ];

  const stakeholderLinks = [
    { labelKey: "nav.forPersonal", href: "/for/personal" },
    { labelKey: "nav.forSchool", href: "/for/school" },
    { labelKey: "nav.forGovernment", href: "/for/government" },
    { labelKey: "nav.forInvestment", href: "/for/investment" },
  ];

  const connectLinks = [
    { labelKey: "footer.contactUs", href: "/contact" },
    { labelKey: "footer.newsletter", href: "/newsletter" },
    { labelKey: "footer.twitterX", href: "#twitter" },
    { labelKey: "footer.facebook", href: "#facebook" },
  ];

  return (
    <footer>
      <div className="h-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400" />

      <div className="bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* About */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <MapPin className="size-5 text-amber-600" />
                <h3 className="text-lg font-bold text-amber-950">
                  {t("footer.about")}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-amber-800/70">
                {t("footer.aboutDesc")}
              </p>
            </div>

            {/* Topics */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-amber-950">
                {t("footer.topicsTitle")}
              </h3>
              <ul className="flex flex-col gap-2">
                {topicLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-amber-700 transition-colors hover:text-amber-900"
                    >
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Stakeholders */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-amber-950">
                {t("footer.stakeholdersTitle")}
              </h3>
              <ul className="flex flex-col gap-2">
                {stakeholderLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-amber-700 transition-colors hover:text-amber-900"
                    >
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-amber-950">
                {t("footer.connectTitle")}
              </h3>
              <ul className="flex flex-col gap-2">
                {connectLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-amber-700 transition-colors hover:text-amber-900"
                    >
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-amber-900">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-amber-200">
              &copy; 2026 {t("footer.copyright")}
            </p>
            <div className="flex gap-4 text-sm text-amber-300">
              <Link href="/privacy" className="hover:text-amber-100">
                {t("footer.privacy")}
              </Link>
              <Link href="/terms" className="hover:text-amber-100">
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
