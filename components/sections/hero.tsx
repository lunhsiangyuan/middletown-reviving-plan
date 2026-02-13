import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-transparent to-slate-900/80" />

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 size-96 rounded-full bg-blue-500 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 size-96 rounded-full bg-emerald-500 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-300">
          A Vision for Tomorrow
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Reviving{" "}
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Middletown
          </span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          A comprehensive community initiative to transform Middletown, NY
          through strategic investments in education, healthcare, and
          sustainable growth.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="bg-blue-600 px-8 text-white hover:bg-blue-700"
          >
            <Link href="#explore">Explore the Plan</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-slate-500 bg-transparent text-white hover:bg-white/10"
          >
            <Link href="/for/personal">Find Your Role</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="size-6 text-slate-400" />
      </div>
    </section>
  );
}
