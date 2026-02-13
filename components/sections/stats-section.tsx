import { DollarSign, MapPin, Users, Home } from "lucide-react";

const stats = [
  {
    label: "DRI Investment",
    value: "$10M",
    icon: DollarSign,
    description: "Downtown Revitalization Initiative",
  },
  {
    label: "Campus Acres",
    value: "270",
    icon: MapPin,
    description: "SUNY Orange / Touro campus land",
  },
  {
    label: "Population",
    value: "30,345",
    icon: Users,
    description: "City of Middletown residents",
  },
  {
    label: "Avg Home Value",
    value: "$395K",
    icon: Home,
    description: "Median residential property",
  },
];

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-violet-900 to-indigo-950 py-16">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 size-96 rounded-full bg-amber-400 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 size-96 rounded-full bg-violet-400 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group cursor-default rounded-2xl p-6 text-center transition-all duration-200 hover:scale-105 hover:bg-white/5"
              >
                <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-amber-500/20 transition-colors group-hover:bg-amber-500/30">
                  <Icon className="size-6 text-amber-300" />
                </div>
                <p className="text-3xl font-bold text-amber-300 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-violet-200">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-xs text-violet-300/70">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
