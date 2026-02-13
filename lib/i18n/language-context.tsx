"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { getCookie, setCookie } from "@/lib/cookies";

import en from "./translations/en.json";
import zhTW from "./translations/zh-TW.json";
import es from "./translations/es.json";

export type Language = "en" | "zh-TW" | "es";

const translations: Record<Language, Record<string, unknown>> = {
  en,
  "zh-TW": zhTW,
  es,
};

function getNestedValue(obj: unknown, path: string): string {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current === null || current === undefined || typeof current !== "object") {
      return path;
    }
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === "string" ? current : path;
}

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  const cookie = getCookie("lang");
  if (cookie === "en" || cookie === "zh-TW" || cookie === "es") return cookie;
  return "zh-TW";
}

export function LanguageProvider({
  children,
  initialLanguage,
}: {
  children: ReactNode;
  initialLanguage?: Language;
}) {
  const [language, setLanguageState] = useState<Language>(
    initialLanguage ?? getInitialLanguage()
  );

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    setCookie("lang", lang);
  }, []);

  const t = useCallback(
    (key: string): string => {
      const value = getNestedValue(translations[language], key);
      if (value !== key) return value;
      // Fallback to English
      return getNestedValue(translations.en, key);
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
