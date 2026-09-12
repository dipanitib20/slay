"use client";

import React from "react";
import Image from "next/image";

// 45 Logos from /logoforaboutus divided into 3 equal parts (15 logos per row)
const row1Logos = [
  "1.svg", "2.svg", "3.svg", "4.svg", "5.svg", "6.svg", "7.svg", "8.svg", "9.svg", "10.svg",
  "11.svg", "12.svg", "13.svg", "16.svg", "17.svg"
];

const row2Logos = [
  "18.svg", "19.svg", "20.svg", "21.svg", "22.svg", "23.svg", "24.svg", "25.svg", "26.svg", "27.svg",
  "28.svg", "29.svg", "30.svg", "31.svg", "32.svg"
];

const row3Logos = [
  "33.svg", "34.svg", "35.svg", "36.svg", "37.svg", "38.svg", "39.svg", "40.svg", "41.svg", "42.svg",
  "43.svg", "44.svg", "45.svg", "46.svg", "47.svg"
];

interface LogoItemProps {
  src: string;
}

const LogoItem = ({ src }: LogoItemProps) => (
  <div className="flex items-center justify-center shrink-0 px-1 sm:px-2 md:px-3">
    <Image
      src={`/logoforaboutus/${src}`}
      alt={`Brand logo ${src.replace(".svg", "")}`}
      width={400}
      height={180}
      className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto max-w-[200px] sm:max-w-[260px] md:max-w-[320px] lg:max-w-[360px] object-contain opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-200 cursor-pointer"
    />
  </div>
);

export default function BrandTrust() {
  return (
    <section className="w-full bg-[#F5F4F3] my-40 px-4 sm:px-8 md:px-12 relative overflow-hidden">
      <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
        {/* Section Header */}
        <div className="relative max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.14]">
            <span className="text-[#9BA59D] font-normal">Brands we have </span>
            <span className="text-[#536757] font-medium">worked with</span>
          </h2>
          <p className="font-subheading text-neutral-500 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed mt-3.5 sm:mt-4">
            Fashion, jewellery, wellness, education, manufacturing, hospitality and everything in between. Different industries, same starting point: a brand worth more than its presence was showing.
          </p>
        </div>

        {/* Carousel Container with Left & Right Gradient Fade Masks */}
        <div className="relative w-full overflow-hidden flex flex-col gap-10 sm:gap-14 md:gap-16 select-none">
          {/* Left & Right Subtle Fade Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 md:w-48 bg-gradient-to-r from-[#F5F4F3] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 md:w-48 bg-gradient-to-l from-[#F5F4F3] to-transparent z-20 pointer-events-none" />

          {/* Row 1: Left to Right Carousel (15 logos) */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee-reverse flex items-center gap-2 sm:gap-4 md:gap-6 shrink-0">
              {row1Logos.map((logo, idx) => (
                <LogoItem key={`r1-s1-${idx}`} src={logo} />
              ))}
              {row1Logos.map((logo, idx) => (
                <LogoItem key={`r1-s2-${idx}`} src={logo} />
              ))}
            </div>
          </div>

          {/* Row 2: Right to Left Carousel (15 logos) */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee flex items-center gap-2 sm:gap-4 md:gap-6 shrink-0">
              {row2Logos.map((logo, idx) => (
                <LogoItem key={`r2-s1-${idx}`} src={logo} />
              ))}
              {row2Logos.map((logo, idx) => (
                <LogoItem key={`r2-s2-${idx}`} src={logo} />
              ))}
            </div>
          </div>

          {/* Row 3: Left to Right Carousel (15 logos) */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee-reverse flex items-center gap-2 sm:gap-4 md:gap-6 shrink-0">
              {row3Logos.map((logo, idx) => (
                <LogoItem key={`r3-s1-${idx}`} src={logo} />
              ))}
              {row3Logos.map((logo, idx) => (
                <LogoItem key={`r3-s2-${idx}`} src={logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

