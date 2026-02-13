import type { Metadata } from "next";
import { SchoolClient } from "./client";

export const metadata: Metadata = {
  title: "Academic Partnership Opportunities | Middletown Reviving Plan",
  description:
    "Explore academic collaboration opportunities with Middletown institutions including Fei Tian College, Touro COM, and SUNY Orange.",
};

export default function SchoolPage() {
  return <SchoolClient />;
}
