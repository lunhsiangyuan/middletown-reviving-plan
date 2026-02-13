import Link from "next/link";
import { Heart, Handshake, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ctas = [
  {
    title: "Donate",
    description:
      "Support community projects and help bring the reviving plan to life.",
    icon: Heart,
    href: "/donate",
    buttonText: "Make a Contribution",
  },
  {
    title: "Collaborate",
    description:
      "Partner with us on initiatives in education, healthcare, or business development.",
    icon: Handshake,
    href: "/collaborate",
    buttonText: "Get Involved",
  },
  {
    title: "Contact Us",
    description:
      "Have questions or ideas? Reach out to the planning committee.",
    icon: Mail,
    href: "/contact",
    buttonText: "Send a Message",
  },
];

export function CTASection() {
  return (
    <section className="bg-blue-700 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-white">
            Be Part of the Change
          </h2>
          <p className="text-lg text-blue-200">
            Every contribution moves Middletown closer to its vision.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {ctas.map((cta) => {
            const Icon = cta.icon;
            return (
              <div
                key={cta.title}
                className="rounded-xl bg-white/10 p-8 text-center backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-white/10">
                  <Icon className="size-7 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {cta.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-blue-200">
                  {cta.description}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white hover:text-blue-700"
                >
                  <Link href={cta.href}>{cta.buttonText}</Link>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
