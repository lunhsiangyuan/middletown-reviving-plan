import type { Metadata } from "next";
import { RevitalizationClient } from "./client";

export const metadata: Metadata = {
  title: "City Revitalization | Middletown Reviving Plan",
  description:
    "$10M Downtown Revitalization Initiative: five transformative projects, Business Improvement District, and economic growth in Middletown, NY.",
};

export default function RevitalizationPage() {
  return <RevitalizationClient />;
}
