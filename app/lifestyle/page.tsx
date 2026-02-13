import type { Metadata } from "next";
import { LifestyleClient } from "./client";

export const metadata: Metadata = {
  title: "Business & Lifestyle | Middletown Reviving Plan",
  description:
    "Dining, shopping, media organizations, and quality of life in downtown Middletown, NY.",
};

export default function LifestylePage() {
  return <LifestyleClient />;
}
