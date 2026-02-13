"use client";

import Link from "next/link";
import { useState } from "react";
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

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <MapPin className="size-6 text-blue-700" />
          <span className="text-lg font-bold text-slate-900">
            Middletown Reviving Plan
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Topics Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-slate-700">
                  Topics
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-1 p-2 md:grid-cols-2">
                    {topics.map((topic) => (
                      <li key={topic.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={topic.href}
                            className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-700"
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
                <NavigationMenuTrigger className="text-slate-700">
                  For
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-1 p-2">
                    {audiences.map((audience) => (
                      <li key={audience.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={audience.href}
                            className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-emerald-50 hover:text-emerald-700"
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
              <Button variant="ghost" size="icon">
                <Menu className="size-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <MapPin className="size-5 text-blue-700" />
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
                        className="rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700"
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
                        className="rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
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
