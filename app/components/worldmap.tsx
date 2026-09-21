"use client";

import React, { useMemo, useState } from "react";
import DottedMap from "dotted-map";

interface CountryConfig {
  id: string;
  name: string;
  role: string;
}

const COUNTRIES_CONFIG: CountryConfig[] = [
  {
    id: "IND",
    name: "India",
    role: "Technology & Strategy Hub",
  },
  {
    id: "USA",
    name: "United States",
    role: "Strategy & Creative Hub",
  },
  {
    id: "GBR",
    name: "United Kingdom",
    role: "Brand & Creative Studio",
  },
  {
    id: "CAN",
    name: "Canada",
    role: "Engineering & Innovation",
  },
  {
    id: "ARE",
    name: "United Arab Emirates",
    role: "Middle East Operations",
  },
  {
    id: "AUS",
    name: "Australia",
    role: "Growth & Client Delivery",
  },
  {
    id: "DEU",
    name: "Germany",
    role: "European Operations",
  },
];

interface CountryData extends CountryConfig {
  points: { x: number; y: number }[];
  center: { x: number; y: number };
}

export default function WorldMap() {
  const [hoveredCountryId, setHoveredCountryId] = useState<string | null>(null);

  // Compute world map and highlight dots for target countries
  const { width, height, bgDots, countriesData } = useMemo(() => {
    const mapHeight = 60;
    const worldMap = new DottedMap({ height: mapHeight, grid: "diagonal" });
    const mapWidth = (worldMap as any).image?.width || (worldMap as any).width || 119;

    const highlightedKeys = new Set<string>();
    const countries: CountryData[] = [];

    COUNTRIES_CONFIG.forEach((config) => {
      const countryMap = new DottedMap({
        height: mapHeight,
        grid: "diagonal",
        countries: [config.id],
        region: worldMap.image.region,
      });

      const pts = countryMap.getPoints().map((p) => ({
        x: Number(p.x.toFixed(2)),
        y: Number(p.y.toFixed(2)),
      }));

      // For smaller regions like UAE, ensure pin point is included
      if (config.id === "ARE") {
        const pin = worldMap.getPin({ lat: 25.2, lng: 55.27 });
        if (pin && !pts.some((p) => Math.hypot(p.x - pin.x, p.y - pin.y) < 0.1)) {
          pts.push({ x: Number(pin.x.toFixed(2)), y: Number(pin.y.toFixed(2)) });
        }
      }

      pts.forEach((p) => highlightedKeys.add(`${p.x.toFixed(1)};${p.y.toFixed(1)}`));

      const sumX = pts.reduce((s, p) => s + p.x, 0);
      const sumY = pts.reduce((s, p) => s + p.y, 0);
      const center = {
        x: pts.length ? Number((sumX / pts.length).toFixed(2)) : 0,
        y: pts.length ? Number((sumY / pts.length).toFixed(2)) : 0,
      };

      countries.push({
        ...config,
        points: pts,
        center,
      });
    });

    // Background dots (all other world dots excluding highlighted countries)
    const bg: { x: number; y: number }[] = [];
    worldMap.getPoints().forEach((p) => {
      const key = `${p.x.toFixed(1)};${p.y.toFixed(1)}`;
      if (!highlightedKeys.has(key)) {
        bg.push({
          x: Number(p.x.toFixed(2)),
          y: Number(p.y.toFixed(2)),
        });
      }
    });

    return {
      width: mapWidth,
      height: mapHeight,
      bgDots: bg,
      countriesData: countries,
    };
  }, []);

  const activeCountry = hoveredCountryId
    ? countriesData.find((c) => c.id === hoveredCountryId)
    : null;

  return (
    <section className="w-full bg-[#F5F4F3] mt-8 sm:mt-12 lg:mt-16 mb-0 px-4 sm:px-8 md:px-12 relative overflow-hidden">
      <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
        {/* Section Header */}
        <div className="relative max-w-3xl mx-auto text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight leading-[1.12]">
            <span className="text-[#9BA59D]">Built </span>
            <span className="text-[#536757]">Without Borders</span>
          </h2>
          <p className="font-subheading text-neutral-500 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed mt-3 sm:mt-3.5">
            We are set up to work anywhere. Calls, approvals and reporting run around your working hours rather than ours, we communicate in English, and remote is not a compromise here, it is how the agency was built.
          </p>

          {/* Interactive Country Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-6">
            {countriesData.map((country) => {
              const isSelected = hoveredCountryId === country.id;
              return (
                <button
                  key={country.id}
                  onClick={() =>
                    setHoveredCountryId(isSelected ? null : country.id)
                  }
                  onMouseEnter={() => setHoveredCountryId(country.id)}
                  onMouseLeave={() => setHoveredCountryId(null)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 border cursor-pointer ${
                    isSelected
                      ? "bg-[#536757] text-white border-[#536757] shadow-sm scale-105"
                      : "bg-white/70 text-neutral-700 border-neutral-200/80 hover:border-[#536757]/60 hover:text-[#536757] hover:bg-white"
                  }`}
                >
                  {country.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Map Canvas Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative w-full aspect-[119/60] select-none">
            {/* SVG Canvas for Background Dots & Highlighted Countries */}
            <svg
              className="w-full h-full"
              viewBox={`0 0 ${width} ${height}`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background world dots */}
              <g id="world-bg-dots" opacity="0.6">
                {bgDots.map((pt, idx) => (
                  <circle
                    key={`bg-${idx}`}
                    cx={pt.x}
                    cy={pt.y}
                    r={0.22}
                    fill="#B8C2BA"
                  />
                ))}
              </g>

              {/* Highlighted Country Dots (forming dark green country silhouettes) */}
              {countriesData.map((country) => {
                const isHovered = hoveredCountryId === country.id;

                return (
                  <g
                    key={`country-${country.id}`}
                    className="cursor-pointer group"
                    onMouseEnter={() => setHoveredCountryId(country.id)}
                    onMouseLeave={() => setHoveredCountryId(null)}
                    onClick={() =>
                      setHoveredCountryId(isHovered ? null : country.id)
                    }
                  >
                    {/* Invisible larger hit areas for effortless hovering over the country */}
                    {country.points.map((pt, idx) => (
                      <circle
                        key={`hit-${country.id}-${idx}`}
                        cx={pt.x}
                        cy={pt.y}
                        r={0.65}
                        fill="transparent"
                      />
                    ))}

                    {/* Visible Country Dots */}
                    {country.points.map((pt, idx) => (
                      <circle
                        key={`pt-${country.id}-${idx}`}
                        cx={pt.x}
                        cy={pt.y}
                        r={isHovered ? 0.36 : 0.28}
                        fill={isHovered ? "#2D3F31" : "#536757"}
                        className="transition-all duration-200"
                      />
                    ))}
                  </g>
                );
              })}
            </svg>

            {/* Hover Tooltip showing Country Name and details */}
            {activeCountry && (
              <div
                className="absolute z-20 pointer-events-none transform -translate-x-1/2 -translate-y-full mb-3 transition-all duration-200 ease-out"
                style={{
                  left: `${(activeCountry.center.x / width) * 100}%`,
                  top: `${(activeCountry.center.y / height) * 100}%`,
                }}
              >
                <div className="bg-[#242424] text-white px-3.5 py-2 rounded-xl shadow-xl text-xs font-body whitespace-nowrap flex items-center gap-2.5 border border-white/15">
                  <span className="w-2 h-2 rounded-full bg-[#536757] shrink-0 animate-pulse" />
                  <div className="flex flex-col text-left leading-tight">
                    <span className="font-semibold text-white text-xs sm:text-sm tracking-wide">
                      {activeCountry.name}
                    </span>
                    <span className="text-neutral-400 text-[10px] mt-0.5">
                      {activeCountry.role}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
