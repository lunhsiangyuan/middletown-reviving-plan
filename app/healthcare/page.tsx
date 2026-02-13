import type { Metadata } from "next";
import { HealthcareClient } from "./client";

export const metadata: Metadata = {
  title: "Healthcare | Middletown Reviving Plan",
  description:
    "A growing healthcare ecosystem in Middletown, NY: Northern Medical Center, Garnet Health, and Touro College of Osteopathic Medicine.",
};

export default function HealthcarePage() {
  return <HealthcareClient />;
}
