"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import SimpleFAQ from "../components/simplefaq";
import Footer from "../components/footer";

import { servicesData } from "../data/services";

export default function ServicesPage() {

  const industryCol1 = [
    { name: "Fashion and Lifestyle", rotation: 5 },
    { name: "Wellness and D2C", rotation: -6 },
    { name: "Education", rotation: 6 },
    { name: "Legal and Professional Services", rotation: -5 },
    { name: "Media and Entertainment", rotation: 6 },
  ];

  const industryCol2 = [
    { name: "Jewellery and Luxury", rotation: -7 },
    { name: "Food and Beverage", rotation: 6 },
    { name: "Events and Nightlife", rotation: -6 },
    { name: "Corporate and B2B", rotation: 7 },
    { name: "Fashion and Lifestyle", rotation: -5 },
  ];

  return (
    <div className="min-h-screen bg-[#F5F4F3] text-[#242424] flex flex-col justify-between selection:bg-[#536757]/20 selection:text-[#536757]">
      {/* Floating Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Section 1: Services Grid */}
        <section className="pt-32 sm:pt-40 md:pt-44 mb-40 px-4 sm:px-8 md:px-12">
          <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
            {/* Section Header */}
            <div className="relative max-w-4xl mx-auto text-center">
              {/* Main Headline */}
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-[#536757] font-normal leading-[1.08]">
                <span className="text-[#536757]/65">What we</span>
                <br />
                <span className="text-[#536757]">actually do</span>
              </h1>

              {/* Subheading / Description Paragraph */}
              <p className="font-subheading text-neutral-500 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed mt-3.5 sm:mt-4">
                We work with brands that want strategy behind the content and results behind the strategy. Six things, all of it in house, none of it outsourced to someone you will never meet. Here is where we spend our time and why we are good at it.

              </p>
            </div>

            {/* 6 Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mt-12 sm:mt-16 md:mt-20">
              {servicesData.map((service, index) => (
                <div
                  key={`${service.id}-${index}`}
                  className="bg-white rounded-[28px] sm:rounded-[36px] p-3 sm:p-4 lg:p-4.5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/[0.04] flex flex-col justify-between group hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300"
                >
                  {/* Mockup / Image Container */}
                  <Link
                    href={`/Services/${service.slug}`}
                    className="block relative w-full aspect-[16/11] sm:aspect-[16/10] rounded-[22px] sm:rounded-[28px] overflow-hidden bg-[#ECEAE6]"
                  >
                    <Image
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      unoptimized
                    />
                  </Link>

                  {/* Service Details & Action */}
                  <div className="flex flex-col mt-5 sm:mt-6 px-2 sm:px-3 pb-1.5 flex-1 justify-between">
                    <div>
                      <Link href={`/Services/${service.slug}`}>
                        <h2 className="font-heading text-2xl sm:text-3xl text-[#242424] tracking-tight font-medium group-hover:text-[#536757] transition-colors duration-200">
                          {service.title}
                        </h2>
                      </Link>
                      <p className="font-subheading text-neutral-500 text-xs sm:text-sm md:text-base leading-relaxed mt-2.5">
                        {service.description}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="mt-6 sm:mt-8 flex justify-center">
                      <Link
                        href={`/Services/${service.slug}`}
                        className="w-full inline-flex items-center justify-center bg-[#242424] text-white font-body font-medium text-base sm:text-lg px-8 sm:px-11 py-3.5 sm:py-4 rounded-[12px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(0,0,0,0.4),0_12px_28px_rgba(0,0,0,0.45)] active:scale-95 transition-all duration-300"
                      >
                        {service.buttonText}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Industries Showcase Section */}
        <section className="my-40 w-full px-4 sm:px-8 md:px-12">
          <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
            <div className="bg-white rounded-[32px] sm:rounded-[44px] md:rounded-[52px] border border-black/[0.04] shadow-[0_4px_32px_rgba(0,0,0,0.03)] overflow-hidden relative pt-10 sm:pt-14 md:pt-16 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-8 md:px-12">
              {/* Floating Pills Moving Bottom to Top Container */}
              <div className="relative h-[240px] sm:h-[290px] md:h-[340px] w-full overflow-hidden">
                {/* Top & Bottom Gradient Fade Overlays */}
                <div className="absolute top-0 inset-x-0 h-20 sm:h-28 bg-gradient-to-b from-white via-white/85 to-transparent pointer-events-none z-10" />
                <div className="absolute bottom-0 inset-x-0 h-16 sm:h-24 bg-gradient-to-t from-white via-white/85 to-transparent pointer-events-none z-10" />

                {/* Staggered Vertical Columns (Only 2 Middle Columns Centered) */}
                <div className="grid grid-cols-2 gap-6 sm:gap-10 md:gap-14 h-full items-start justify-items-center max-w-2xl mx-auto">
                  {/* Column 1 */}
                  <div className="flex flex-col animate-marquee-vertical-fast gap-6 sm:gap-8 items-center py-2 shrink-0">
                    {[...industryCol1, ...industryCol1].map((item, idx) => (
                      <div
                        key={`col1-${idx}`}
                        style={{ transform: `rotate(${item.rotation}deg)` }}
                        className="bg-gradient-to-b from-[#627766] to-[#48584c] text-white font-body font-medium text-sm sm:text-[15px] md:text-base px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 rounded-full shadow-[0_12px_24px_-4px_rgba(40,55,44,0.38)] border border-white/20 whitespace-nowrap select-none transition-transform hover:scale-105 shrink-0"
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>

                  {/* Column 2 */}
                  <div className="flex flex-col animate-marquee-vertical-slow gap-6 sm:gap-8 items-center py-2 shrink-0">
                    {[...industryCol2, ...industryCol2].map((item, idx) => (
                      <div
                        key={`col2-${idx}`}
                        style={{ transform: `rotate(${item.rotation}deg)` }}
                        className="bg-gradient-to-b from-[#627766] to-[#48584c] text-white font-body font-medium text-sm sm:text-[15px] md:text-base px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 rounded-full shadow-[0_12px_24px_-4px_rgba(40,55,44,0.38)] border border-white/20 whitespace-nowrap select-none transition-transform hover:scale-105 shrink-0"
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Headline & Description */}
              <div className="relative z-20 text-center max-w-3xl mx-auto mt-6 sm:mt-10">
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.14]">
                  <span className="text-neutral-400 font-normal">Industries we </span>
                  <span className="text-[#2B382E] font-medium">have</span>
                  <br />
                  <span className="text-[#2B382E] font-medium">built in </span>
                </h2>
                <p className="font-subheading text-neutral-500 max-w-xl mx-auto text-sm sm:text-base md:text-[17px] leading-relaxed mt-4 sm:mt-5">
                  We work across industries to solve unique challenges with thoughtful design, technology, and strategy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FAQ Section */}
      <SimpleFAQ pageKey="services" />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
