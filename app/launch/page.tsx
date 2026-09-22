import React from "react";
import LaunchCountdown from "../components/launch-countdown";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Launch | Slay Agency",
  description: "Official countdown to the grand unveiling of Slay Agency.",
};

export default function LaunchPage() {
  return <LaunchCountdown standalone={true} />;
}
