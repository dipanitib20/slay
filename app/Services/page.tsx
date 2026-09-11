"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import SimpleFAQ from "../components/simplefaq";
import Footer from "../components/footer";

interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  buttonText: string;
  image: string;
}

export default function ServicesPage() {
  const services: ServiceItem[] = [
    {
      id: "web-design",
      slug: "web-design-development",
      title: "Web Design & Development",
      description:
        "From high-converting landing pages to complete brand websites, we design and develop digital experiences that feel effortless, load fast, and turn visitors into customers.",
      buttonText: "Explore web design",
      image:
        "https://images.unsplash.com/photo-1556742049-0a67e55722c3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "brand-identity",
      slug: "brand-identity-strategy",
      title: "Brand Identity & Strategy",
      description:
        "We build brands that connect and endure — from visual systems, typography, and logos to comprehensive positioning and voice guidelines.",
      buttonText: "Explore branding",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "social-media",
      slug: "social-media-management",
      title: "Social Media Management",
      description:
        "We turn your social presence into a brand people remember — with strategic content, consistent posting, and a voice that feels truly yours.",
      buttonText: "Explore social growth",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "performance-marketing",
      slug: "performance-marketing",
      title: "Performance Marketing",
      description:
        "Data-driven ad campaigns designed to convert, scale your revenue, and maximize ROI across paid social and search channels.",
      buttonText: "Explore marketing",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const industryCol1 = [
    { name: "E-commerce", rotation: 6 },
    { name: "SaaS & AI", rotation: -7 },
    { name: "Fashion & Retail", rotation: 5 },
    { name: "Real Estate", rotation: -8 },
    { name: "Crypto & Web3", rotation: 6 },
    { name: "Fintech", rotation: -5 },
    { name: "Food & Beverage", rotation: 6 },
  ];

  const industryCol2 = [
    { name: "Healthcare", rotation: 7 },
    { name: "Education", rotation: -6 },
    { name: "Luxury Goods", rotation: 8 },
    { name: "Automotive", rotation: -5 },
    { name: "Media & Culture", rotation: 7 },
    { name: "Beauty & Wellness", rotation: -7 },
    { name: "Hospitality", rotation: 5 },
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
              {/* Doodle "What We Do" on Top Left */}
              <div className="absolute -top-7 sm:-top-9 md:-top-11 left-2 sm:left-10 md:left-18 lg:left-24 -rotate-12 pointer-events-none select-none">
                <span className="font-doodle text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#7E8B80]/80">
                  What We Do
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-[#536757] font-normal leading-[1.08]">
                FROM BIG IDEAS
                <br />
                TO BIGGER IMPACT
              </h1>

              {/* Subheading / Description Paragraph */}
              <p className="font-subheading text-neutral-500 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed mt-3.5 sm:mt-4">
                From strategy and branding to content, marketing, and web
                development, we create digital experiences designed to connect,
                convert, and grow your business.
              </p>
            </div>

            {/* 2x2 Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mt-12 sm:mt-16 md:mt-20">
              {services.map((service, index) => (
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
                      src={service.image}
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
                        className="w-full inline-flex items-center justify-center bg-[#242424] text-white font-body font-medium text-base sm:text-lg px-8 sm:px-11 py-3.5 sm:py-4 rounded-[12px] shadow-[0_12px_28px_rgba(0,0,0,0.5)] active:scale-95 transition-all duration-300 hover:bg-[#3B4A3D]"
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
                  <span className="text-neutral-400 font-normal">Different industries. </span>
                  <span className="text-[#2B382E] font-medium">Same</span>
                  <br />
                  <span className="text-[#2B382E] font-medium">ambition.</span>
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
