"use client";

import React, { useMemo, useState } from "react";
import DottedMap from "dotted-map";

interface LocationHub {
  id: string;
  name: string;
  country: string;
  role: string;
  lat: number;
  lng: number;
  timeZone: string;
}

export default function WorldMap() {
  const [activeHub, setActiveHub] = useState<string | null>("india");

  const hubs: LocationHub[] = [
    {
      id: "india",
      name: "India",
      country: "India",
      role: "Technology & Development Hub",
      lat: 20.59,
      lng: 78.96,
      timeZone: "Asia/Kolkata",
    },
    {
      id: "uae",
      name: "United Arab Emirates",
      country: "UAE",
      role: "Middle East Operations",
      lat: 25.2,
      lng: 55.27,
      timeZone: "Asia/Dubai",
    },
    {
      id: "singapore",
      name: "Singapore",
      country: "Singapore",
      role: "APAC Regional Headquarters",
      lat: 1.35,
      lng: 103.82,
      timeZone: "Asia/Singapore",
    },
    {
      id: "australia",
      name: "Australia",
      country: "Australia",
      role: "Growth & Client Delivery",
      lat: -33.87,
      lng: 151.21,
      timeZone: "Australia/Sydney",
    },
    {
      id: "canada",
      name: "Canada",
      country: "Canada",
      role: "Engineering & Innovation",
      lat: 45.42,
      lng: -75.69,
      timeZone: "America/Toronto",
    },
    {
      id: "us",
      name: "United States",
      country: "United States",
      role: "Strategy & Creative Hub",
      lat: 37.77,
      lng: -122.42,
      timeZone: "America/Los_Angeles",
    },
  ];

  // Generate dotted map SVG & coordinates
  const { svgMap, pinCoords } = useMemo(() => {
    const map = new DottedMap({ height: 60, grid: "diagonal" });
    const svg = map.getSVG({
      radius: 0.22,
      color: "#B8C2BA",
      shape: "circle",
      backgroundColor: "transparent",
    });

    const coords: Record<string, { x: number; y: number }> = {};
    hubs.forEach((hub) => {
      const pin = map.getPin({ lat: hub.lat, lng: hub.lng });
      if (pin) {
        coords[hub.id] = { x: pin.x, y: pin.y };
      }
    });

    return { svgMap: svg, pinCoords: coords };
  }, []);

  // Connection arcs between hubs
  const connectionPaths = [
    { from: "us", to: "canada" },
    { from: "canada", to: "uae" },
    { from: "uae", to: "india" },
    { from: "india", to: "singapore" },
    { from: "singapore", to: "australia" },
    { from: "us", to: "india" },
  ];

  // Calculate curved Bezier path
  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 6; // Arc upward
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <section className="w-full bg-[#F5F4F3] my-40 px-4 sm:px-8 md:px-12 relative overflow-hidden">
      <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
        {/* Section Header */}
        <div className="relative max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.14]">
            <span className="text-[#9BA59D] font-normal">Connect with teams & </span>
            <span className="text-[#536757] font-medium">clients worldwide</span>
          </h2>
          <p className="font-subheading text-neutral-500 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed mt-3.5 sm:mt-4">
            Our platform enables seamless collaboration across continents,
            bringing the world to your workspace.
          </p>
        </div>

        {/* Map Canvas Container (Seamless with page background) */}
        <div className="relative max-w-6xl mx-auto">
          {/* World Map SVG Canvas */}
          <div className="relative w-full aspect-[119/60] select-none">
            {/* Base Dotted Map SVG */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none"
              dangerouslySetInnerHTML={{ __html: svgMap }}
            />

            {/* Overlay Interactive SVG for Arcs & Beacons */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 119 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#536757" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#536757" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#536757" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Animated Connection Arcs */}
              {connectionPaths.map(({ from, to }, idx) => {
                const start = pinCoords[from];
                const end = pinCoords[to];
                if (!start || !end) return null;
                const d = createCurvedPath(start, end);

                return (
                  <g key={`arc-${idx}`}>
                    {/* Background faint arc */}
                    <path
                      d={d}
                      stroke="#536757"
                      strokeWidth="0.3"
                      strokeOpacity="0.25"
                      fill="none"
                    />
                    {/* Animated pulsing dash arc */}
                    <path
                      d={d}
                      stroke="url(#arcGrad)"
                      strokeWidth="0.55"
                      strokeDasharray="1.5 2"
                      fill="none"
                      className="animate-pulse"
                    />
                  </g>
                );
              })}

              {/* Location Pins & Concentric Pulse Rings */}
              {hubs.map((hub) => {
                const pos = pinCoords[hub.id];
                if (!pos) return null;
                const isSelected = activeHub === hub.id;

                return (
                  <g
                    key={`pin-${hub.id}`}
                    className="cursor-pointer group"
                    onClick={() => setActiveHub(hub.id)}
                    onMouseEnter={() => setActiveHub(hub.id)}
                  >
                    {/* Outer Pulsing Beacon */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isSelected ? 2.4 : 1.6}
                      fill="#536757"
                      fillOpacity={isSelected ? 0.35 : 0.2}
                      className="animate-ping"
                      style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
                    />

                    {/* Middle Ring */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isSelected ? 1.4 : 1.0}
                      fill="#536757"
                      fillOpacity="0.4"
                    />

                    {/* Solid Core Dot */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isSelected ? 0.85 : 0.65}
                      fill={isSelected ? "#242424" : "#536757"}
                      stroke="#FFFFFF"
                      strokeWidth="0.25"
                      className="transition-all duration-200"
                    />
                  </g>
                );
              })}
            </svg>

            {/* Dynamic Active Location Floating Badge */}
            {activeHub && pinCoords[activeHub] && (
              <div
                className="absolute z-20 pointer-events-none transform -translate-x-1/2 -translate-y-full mb-2 transition-all duration-300"
                style={{
                  left: `${(pinCoords[activeHub].x / 119) * 100}%`,
                  top: `${(pinCoords[activeHub].y / 60) * 100}%`,
                }}
              >
                {(() => {
                  const hub = hubs.find((h) => h.id === activeHub);
                  if (!hub) return null;

                  return (
                    <div className="bg-[#242424] text-white px-3 py-1.5 rounded-xl shadow-lg text-[10px] sm:text-xs font-body whitespace-nowrap flex items-center gap-2 border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#536757] animate-pulse shrink-0" />
                      <div className="flex flex-col leading-tight">
                        <span className="font-semibold text-white">
                          {hub.name}
                        </span>
                        <span className="text-neutral-400 text-[9px]">
                          {hub.role}
                        </span>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
