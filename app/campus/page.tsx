import type { Metadata } from "next";
import { CampusClient } from "./client";

export const metadata: Metadata = {
  title: "Community Campus | Middletown Reviving Plan",
  description:
    "The 270-acre Community Campus transformation: from former Middletown Psychiatric Center to a thriving hub for education, healthcare, and community life.",
};

export default function CampusPage() {
  return <CampusClient />;
}
