import type { Metadata } from "next";
import {
  Train,
  Plane,
  Car,
  Bus,
  MapPin,
  Clock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { ReferenceLinks } from "@/components/reference-links";
import { CTASection } from "@/components/sections/cta-section";
import { references } from "@/lib/data/references";

export const metadata: Metadata = {
  title: "Transportation | Middletown Reviving Plan",
  description:
    "Strategic connectivity: Stewart International Airport, I-84 highway access, Shortline Bus to NYC, and regional transit options in Middletown, NY.",
};

const transportRefs = references.filter((ref) =>
  ["middletown-ny-gov"].includes(ref.id)
);

const distances = [
  { city: "New York City", time: "~90 min", method: "Bus / Car via I-84" },
  { city: "Philadelphia", time: "~2.5 hr", method: "Car via I-84 / I-78" },
  { city: "Albany", time: "~2 hr", method: "Car via I-87" },
  { city: "Hartford, CT", time: "~2 hr", method: "Car via I-84 East" },
];

export default function TransportationPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-900 via-sky-800 to-blue-900 py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/3 size-96 rounded-full bg-sky-400 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-sky-200">
            <Train className="size-4" />
            Transportation
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Transportation & Connectivity
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-sky-200">
            Strategically located at the crossroads of major highways and
            transit routes, Middletown offers convenient access to New York
            City and the broader Northeast region.
          </p>
        </div>
      </section>

      {/* Air Travel */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Plane className="size-5 text-sky-600" />
            <h2 className="text-2xl font-bold text-slate-900">Air Travel</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="border-sky-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">
                    Stewart International Airport
                  </CardTitle>
                  <Badge className="bg-sky-100 text-sky-800">SWF</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <p className="text-sm text-slate-600">
                  Located in nearby Newburgh, Stewart International Airport
                  provides commercial air service to destinations across the
                  United States. Breeze Airways operates flights to multiple
                  cities, offering affordable travel options.
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <MapPin className="size-4" />
                  Newburgh, NY (~20 min from Middletown)
                </div>
              </CardContent>
            </Card>
            <Card className="border-sky-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">
                    Orange County Airport
                  </CardTitle>
                  <Badge className="bg-sky-100 text-sky-800">MGJ</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <p className="text-sm text-slate-600">
                  A general aviation airport serving private and charter
                  flights, providing additional air access for the Middletown
                  area.
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <MapPin className="size-4" />
                  Montgomery, NY (~10 min from Middletown)
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Highway Access */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Car className="size-5 text-sky-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              Highway Access
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Interstate 84 (I-84)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Major east-west interstate highway passing directly through
                  Middletown, connecting to I-87 (New York State Thruway)
                  heading south to NYC and north to Albany. Also connects east
                  to Hartford, CT and beyond to Boston.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Route 17 / Future I-86
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Route 17 provides a quick connection south toward the New
                  York State Thruway and northwestward to the Southern Tier
                  region. The route is being upgraded to Interstate 86
                  standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Public Transit */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Bus className="size-5 text-sky-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              Public Transit
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="border-sky-200 bg-sky-50">
              <CardHeader>
                <CardTitle className="text-lg">Shortline Bus to NYC</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <p className="text-sm text-slate-600">
                  Coach USA / Shortline operates regular bus service between
                  Middletown and New York City&apos;s Port Authority Bus Terminal.
                  Travel time is approximately 2 hours, with multiple daily
                  departures.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-sky-700">
                  <Clock className="size-4" />
                  ~2 hours to Manhattan
                </div>
              </CardContent>
            </Card>
            <Card className="border-sky-200 bg-sky-50">
              <CardHeader>
                <CardTitle className="text-lg">
                  Metro-North Railroad
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <p className="text-sm text-slate-600">
                  The Metro-North Harriman station provides commuter rail
                  access to New York City via the Port Jervis line. While not
                  directly in Middletown, it offers an additional transit
                  option for commuters.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-sky-700">
                  <MapPin className="size-4" />
                  Harriman station (~15 min drive)
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Distance to Major Cities */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <MapPin className="size-5 text-sky-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              Distance to Major Cities
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {distances.map((d) => (
              <Card key={d.city} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{d.city}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2 text-3xl font-bold text-sky-700">
                    {d.time}
                  </p>
                  <p className="text-xs text-slate-500">{d.method}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* References */}
      <ReferenceLinks references={transportRefs} />

      {/* CTA */}
      <CTASection />
    </>
  );
}
