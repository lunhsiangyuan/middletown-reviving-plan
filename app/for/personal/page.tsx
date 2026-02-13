import type { Metadata } from "next";
import { PersonalClient } from "./client";

export const metadata: Metadata = {
  title: "Your Guide to Middletown | Middletown Reviving Plan",
  description:
    "Discover why Middletown, NY is a great place to live, work, and grow. Explore cost of living, community culture, employment, and quality of life.",
};

export default function PersonalPage() {
  return <PersonalClient />;
}
