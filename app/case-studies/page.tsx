import type { Metadata } from "next";
import { CaseStudiesClient } from "./client";

export const metadata: Metadata = {
  title: "Case Studies | Middletown Reviving Plan",
  description:
    "Lessons from comparable Hudson Valley cities that have successfully revitalized: Beacon, Newburgh, Hudson, Kingston, and Poughkeepsie.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
