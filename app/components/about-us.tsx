"use client";

import React from "react";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section id="about" className="w-full bg-[#F5F4F3] my-40 px-4 sm:px-8 md:px-12">
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
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.12]">
              <span className="text-neutral-400 font-normal">The People </span>
              <span className="text-[#536757] font-medium">Behind the Work</span>
            </h2>

            {/* Subheading / Description */}
            <p className="font-subheading text-neutral-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mt-4 sm:mt-6">
              A small team with big ideas, bringing strategy, creativity, and technology together to build brands that actually move people.
            </p>
          </div>

          {/* Team Graphic Card Container (About us.svg) */}
          <div className="relative w-full max-w-3xl md:max-w-3xl lg:max-w-4xl mx-auto rounded-[24px] sm:rounded-[32px] md:rounded-[38px] overflow-hidden bg-white/40">
            <Image
              src="/About us.svg"
              alt="Meet the Minds - Slay Agency Team"
              width={1408}
              height={710}
              className="w-full h-auto object-contain select-none"
              unoptimized
            />
          </div>
        </div>

        {/* Bottom Block: Split 2-Column Layout with Sticky Founder's Note */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Typography & Description */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.12]">
              <span className="text-neutral-400 font-normal block">Meet the</span>
              <span className="text-[#536757] font-medium block">founder- Dipani</span>
            </h2>

            <p className="font-subheading text-neutral-500 max-w-lg mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed mt-5 sm:mt-6">
              A small team with big ideas, bringing strategy, creativity and technology together to build brands that actually move people.
            </p>

            {/* Social Links (Instagram, LinkedIn, Facebook) */}
            <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-5 mt-7 sm:mt-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 active:scale-95 transition-transform duration-300 shrink-0"
                aria-label="Instagram"
              >
                <Image
                  src="/instagram.png"
                  alt="Instagram"
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 active:scale-95 transition-transform duration-300 shrink-0"
                aria-label="LinkedIn"
              >
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn"
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 active:scale-95 transition-transform duration-300 shrink-0"
                aria-label="Facebook"
              >
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </a>
            </div>
          </div>

          {/* Right Column: Sticky / Founder's Note Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none flex justify-center lg:justify-end">
              <Image
                src="/foundersnote.png"
                alt="Founder's Note"
                width={800}
                height={800}
                className="w-full max-w-[480px] xl:max-w-[520px] h-auto object-contain select-none drop-shadow-[0_16px_36px_rgba(0,0,0,0.08)] transition-transform duration-500 ease-out"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
