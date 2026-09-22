import React from "react";
import LaunchCountdown from "../components/launch-countdown";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Launch Countdown | Slay Agency",
  description: "Official countdown to the grand unveiling of Slay Agency.",
};

export default function CountdownPage() {
  return <LaunchCountdown standalone={true} />;
}
