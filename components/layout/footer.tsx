import Link from "next/link";
import { MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  about: {
    title: "About",
    description:
      "The Middletown Reviving Plan is a community-driven initiative to transform and revitalize Middletown, NY through strategic investments in education, healthcare, infrastructure, and local business development.",
  },
  topics: {
    title: "Topics",
    links: [
      { label: "Campus", href: "/campus" },
      { label: "Healthcare", href: "/healthcare" },
      { label: "Education", href: "/education" },
      { label: "Revitalization", href: "/revitalization" },
      { label: "Lifestyle", href: "/lifestyle" },
      { label: "Transportation", href: "/transportation" },
    ],
  },
  stakeholders: {
    title: "For Stakeholders",
    links: [
      { label: "Personal", href: "/for/personal" },
      { label: "School", href: "/for/school" },
      { label: "Government", href: "/for/government" },
      { label: "Investment", href: "/for/investment" },
    ],
  },
  connect: {
    title: "Connect",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "Twitter / X", href: "#twitter" },
      { label: "Facebook", href: "#facebook" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <MapPin className="size-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">
                {footerLinks.about.title}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              {footerLinks.about.description}
            </p>
          </div>

          {/* Topics */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              {footerLinks.topics.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.topics.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Stakeholders */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              {footerLinks.stakeholders.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.stakeholders.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              {footerLinks.connect.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.connect.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; 2026 Middletown Reviving Plan. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-slate-300">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-300">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
