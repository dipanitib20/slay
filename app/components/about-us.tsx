"use client";

import React from "react";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section id="about" className="w-full bg-[#F5F4F3] my-14 sm:my-24 lg:my-40 px-4 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-24 sm:gap-32 md:gap-40">
        
        {/* Top Block: Centered Team Showcase with "Meet the Minds" */}
        <div className="w-full flex flex-col items-center">
          {/* Section Header */}
          <div className="relative max-w-3xl mx-auto text-center mb-10 sm:mb-14 md:mb-16">
            {/* Doodle "Meet the Minds" in Top Left */}
            <div className="absolute -top-10 sm:-top-14 md:-top-16 left-0 sm:left-4 md:-left-8 lg:-left-16 pointer-events-none select-none -rotate-6 sm:-rotate-8">
              <span className="font-doodle text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#536757] whitespace-nowrap">
                Meet the Minds
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight leading-[1.12]">
              <span className="text-neutral-400">The People </span>
              <span className="text-[#536757]">Behind the Strategy</span>
            </h2>

            {/* Subheading / Description */}
            <p className="font-subheading text-neutral-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mt-4 sm:mt-6">
              A small team with big ideas, bringing strategy, creativity, and technology together to build brands that actually move people.
            </p>
          </div>

          {/* Team Graphic Card Container (Aboutusnew.svg) */}
          <div className="relative w-full max-w-3xl md:max-w-3xl lg:max-w-4xl mx-auto rounded-[24px] sm:rounded-[32px] md:rounded-[38px] overflow-hidden bg-white/40">
            <Image
              src="/Aboutusnew.svg"
              alt="Meet the Minds - Slay Agency Team"
              width={1408}
              height={710}
              className="w-full h-auto object-contain select-none"
              unoptimized
            />
          </div>
        </div>

        {/* Bottom Block: Split 2-Column Layout with Founder Image & Small Yellow Sticky Note */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Typography & Social Links */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight leading-[1.12]">
              <span className="text-neutral-400 block">Meet the</span>
              <span className="text-[#536757] block">founder - Dipani</span>
            </h2>

            {/* Social Links (Instagram, LinkedIn, Facebook) */}
            <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-5 mt-7 sm:mt-9">
              <a
                href="https://www.instagram.com/slaywithdipani"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 active:scale-95 transition-transform duration-300 shrink-0"
                aria-label="Instagram"
              >
                <Image
                  src="/instagram.webp"
                  alt="Instagram"
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/dipani-h-tibrewala-a7460066?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 active:scale-95 transition-transform duration-300 shrink-0"
                aria-label="LinkedIn"
              >
                <Image
                  src="/linkedin.webp"
                  alt="LinkedIn"
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61574319477171"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 active:scale-95 transition-transform duration-300 shrink-0"
                aria-label="Facebook"
              >
                <Image
                  src="/facebook.webp"
                  alt="Facebook"
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </a>
            </div>
          </div>

          {/* Right Column: Prominent Founder Image with Small Yellow Sticky Note */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[440px]">
              {/* Main Large Founder Image */}
              <div className="relative w-full aspect-square rounded-[24px] sm:rounded-[32px] md:rounded-[38px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border-4 sm:border-[6px] border-white bg-white">
                <Image
                  src="/founder-image.webp"
                  alt="Founder Dipani"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Small Yellow Sticky Note (Secondary Decorative Element) */}
              <div className="absolute -bottom-4 -left-3 sm:-bottom-6 sm:-left-6 md:-bottom-7 md:-left-8 w-44 sm:w-48 md:w-54 bg-[#FFF275] text-[#242424] p-3.5 sm:p-4 rounded-[4px] sm:rounded-[6px] shadow-[0_12px_28px_rgba(0,0,0,0.14)] -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 z-10 select-none border border-black/5">
                {/* Translucent top tape strip */}
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-12 sm:w-14 h-4 bg-white/70 backdrop-blur-xs rotate-1 shadow-xs border border-black/5 rounded-xs" />
                
                <p className="font-doodle text-xl sm:text-2xl md:text-[25px] leading-tight text-[#1A1A1A]">
                  “Building brands that don’t blend in. Let’s create something bold.”
                </p>
                <span className="font-doodle text-lg sm:text-xl text-[#536757] block text-right mt-1 font-semibold">
                  — Dipani
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
