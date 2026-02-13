import type { Metadata } from "next";
import { TransportationClient } from "./client";

export const metadata: Metadata = {
  title: "Transportation | Middletown Reviving Plan",
  description:
    "Strategic connectivity: Stewart International Airport, I-84 highway access, Shortline Bus to NYC, and regional transit options in Middletown, NY.",
};

export default function TransportationPage() {
  return <TransportationClient />;
}
