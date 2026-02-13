"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MapPin, Menu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLanguage, type Language } from "@/lib/i18n/language-context";

const topics = [
  { titleKey: "nav.campus", href: "/campus" },
  { titleKey: "nav.healthcare", href: "/healthcare" },
  { titleKey: "nav.education", href: "/education" },
  { titleKey: "nav.revitalization", href: "/revitalization" },
  { titleKey: "nav.lifestyle", href: "/lifestyle" },
  { titleKey: "nav.transportation", href: "/transportation" },
  { titleKey: "nav.caseStudies", href: "/case-studies" },
];

const audiences = [
  { titleKey: "nav.forPersonal", href: "/for/personal" },
  { titleKey: "nav.forSchool", href: "/for/school" },
  { titleKey: "nav.forGovernment", href: "/for/government" },
  { titleKey: "nav.forInvestment", href: "/for/investment" },
];

const languages: { label: string; code: Language }[] = [
  { label: "EN", code: "en" },
  { label: "中文", code: "zh-TW" },
  { label: "ES", code: "es" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled
        ? "border-b bg-white/95 backdrop-blur-md shadow-sm"
        : "bg-transparent border-transparent"
    }`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <MapPin className={`size-6 ${isScrolled ? "text-amber-600" : "text-amber-400"}`} />
          <span className={`text-lg font-bold ${isScrolled ? "text-slate-900" : "text-white"}`}>
            Middletown Reviving Plan
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Topics Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={`bg-transparent ${isScrolled ? "text-slate-700 hover:bg-slate-100" : "text-white/90 hover:text-white hover:bg-white/10"}`}>
                  {t("nav.topics")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-1 p-2 md:grid-cols-2">
                    {topics.map((topic) => (
                      <li key={topic.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={topic.href}
                            className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-amber-50 hover:text-amber-700"
                          >
                            {t(topic.titleKey)}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* For Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={`bg-transparent ${isScrolled ? "text-slate-700 hover:bg-slate-100" : "text-white/90 hover:text-white hover:bg-white/10"}`}>
                  {t("nav.for")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-1 p-2">
                    {audiences.map((audience) => (
                      <li key={audience.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={audience.href}
                            className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-violet-50 hover:text-violet-700"
                          >
                            {t(audience.titleKey)}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Language Switcher */}
          <div className="flex gap-1">
            {languages.map((lang) => (
              <Badge
                key={lang.code}
                variant="outline"
                onClick={() => setLanguage(lang.code)}
                className={`cursor-pointer text-xs transition-colors ${
                  language === lang.code
                    ? "bg-amber-500 text-white border-amber-500 hover:bg-amber-600"
                    : isScrolled
                      ? "hover:bg-slate-100"
                      : "text-white/80 border-white/30 hover:bg-white/10 hover:text-white"
                }`}
              >
                {lang.label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={isScrolled ? "" : "text-white"}>
                <Menu className="size-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <MapPin className="size-5 text-amber-600" />
                  Middletown Reviving Plan
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6 px-4">
                {/* Topics */}
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {t("nav.topics")}
                  </p>
                  <div className="flex flex-col gap-1">
                    {topics.map((topic) => (
                      <Link
                        key={topic.href}
                        href={topic.href}
                        onClick={() => setOpen(false)}
                        className="rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700"
                      >
                        {t(topic.titleKey)}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* For */}
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {t("nav.for")}
                  </p>
                  <div className="flex flex-col gap-1">
                    {audiences.map((audience) => (
                      <Link
                        key={audience.href}
                        href={audience.href}
                        onClick={() => setOpen(false)}
                        className="rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-violet-50 hover:text-violet-700"
                      >
                        {t(audience.titleKey)}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {t("nav.language")}
                  </p>
                  <div className="flex gap-2">
                    {languages.map((lang) => (
                      <Badge
                        key={lang.code}
                        variant="outline"
                        onClick={() => setLanguage(lang.code)}
                        className={`cursor-pointer ${
                          language === lang.code
                            ? "bg-amber-500 text-white border-amber-500"
                            : "hover:bg-slate-100"
                        }`}
                      >
                        {lang.label}
                      </Badge>
                    ))}
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
