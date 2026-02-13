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

const topics = [
  { title: "Campus", href: "/topics/campus" },
  { title: "Healthcare", href: "/topics/healthcare" },
  { title: "Education", href: "/topics/education" },
  { title: "Revitalization", href: "/topics/revitalization" },
  { title: "Lifestyle", href: "/topics/lifestyle" },
  { title: "Transportation", href: "/topics/transportation" },
  { title: "Case Studies", href: "/topics/case-studies" },
];

const audiences = [
  { title: "Personal", href: "/for/personal" },
  { title: "School", href: "/for/school" },
  { title: "Government", href: "/for/government" },
  { title: "Investment", href: "/for/investment" },
];

const languages = [
  { label: "EN", code: "en" },
  { label: "中文", code: "zh" },
  { label: "ES", code: "es" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
                <NavigationMenuTrigger className={isScrolled ? "text-slate-700" : "text-white/90 hover:text-white"}>
                  Topics
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
                            {topic.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* For Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={isScrolled ? "text-slate-700" : "text-white/90 hover:text-white"}>
                  For
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
                            {audience.title}
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
                className="cursor-pointer text-xs hover:bg-slate-100"
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
                    Topics
                  </p>
                  <div className="flex flex-col gap-1">
                    {topics.map((topic) => (
                      <Link
                        key={topic.href}
                        href={topic.href}
                        onClick={() => setOpen(false)}
                        className="rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700"
                      >
                        {topic.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* For */}
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    For
                  </p>
                  <div className="flex flex-col gap-1">
                    {audiences.map((audience) => (
                      <Link
                        key={audience.href}
                        href={audience.href}
                        onClick={() => setOpen(false)}
                        className="rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-violet-50 hover:text-violet-700"
                      >
                        {audience.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Language
                  </p>
                  <div className="flex gap-2">
                    {languages.map((lang) => (
                      <Badge
                        key={lang.code}
                        variant="outline"
                        className="cursor-pointer hover:bg-slate-100"
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
