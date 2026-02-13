import type { Metadata } from "next";
import { GovernmentClient } from "./client";

export const metadata: Metadata = {
  title: "Revitalization Progress Report | Middletown Reviving Plan",
  description:
    "Government progress report on Middletown's Downtown Revitalization Initiative, BOA planning, economic impact, and funding opportunities.",
};

export default function GovernmentPage() {
  return <GovernmentClient />;
}
