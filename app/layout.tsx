import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter, Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LanguageProvider, type Language } from "@/lib/i18n/language-context";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Middletown Reviving Plan | 當科技遇上人性",
  description:
    "Middletown, NY 社區振興生態系統展示平台。當科技遇上人性，進步與傳統智慧的融合，偉大文明與文藝復興的再現。",
};

const VALID_LANGS = new Set<Language>(["en", "zh-TW", "es"]);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get("lang")?.value ?? "";
  const initialLang: Language = VALID_LANGS.has(langCookie as Language)
    ? (langCookie as Language)
    : "zh-TW";

  return (
    <html lang={initialLang}>
      <body
        className={`${inter.variable} ${notoSansTC.variable} ${notoSerifTC.variable} font-sans antialiased`}
      >
        <LanguageProvider initialLanguage={initialLang}>
          <Header />
          {/* Compliance Badge Banner — Civic Gravity */}
          <div className="bg-slate-900 border-b border-orange-600/30 py-2 mt-16">
            <div className="container mx-auto px-4 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-6 text-xs text-slate-400 flex-wrap gap-y-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                  NYS ESD Certified Proposal
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                  HUD Community Development Block Grant Eligible
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                  City Council District 8 Endorsed
                </span>
              </div>
              <div className="text-xs text-slate-500 font-mono">
                Proposal Ref: MRP-2026-NYS-001
              </div>
            </div>
          </div>
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
