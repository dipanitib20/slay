"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import BrandTrust from "../components/brandtrust";
import WorldMap from "../components/worldmap";
import Footer from "../components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F4F3] text-[#242424] flex flex-col justify-between selection:bg-[#536757]/20 selection:text-[#536757]">
      {/* Floating Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Section 1: Hero & Workspace Image */}
        <section className="pt-32 sm:pt-40 md:pt-44 mb-40 px-4 sm:px-8 md:px-12">
          <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
            {/* Hero Section Header */}
            <div className="relative max-w-4xl mx-auto text-center">
              {/* Doodle "About us" on Top Left */}
              <div className="absolute -top-7 sm:-top-9 md:-top-11 left-2 sm:left-10 md:left-18 lg:left-24 -rotate-12 pointer-events-none select-none">
                <span className="font-doodle text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#7E8B80]/80">
                  About us
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-[#536757] font-normal leading-[1.08]">
                WE BUILD BRANDS
                <br />
                THAT MOVE FORWARD
              </h1>

              {/* Subheading / Description Paragraph */}
              <p className="font-subheading text-neutral-500 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed mt-3.5 sm:mt-4">
                We bring strategy, creativity, and technology together to create impactful brands, content, campaigns, and digital experiences that help businesses stand out and grow.
              </p>
            </div>

            {/* Large Office Image Container */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[2.1/1] md:aspect-[2.4/1] rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#ECEAE6] mt-10 sm:mt-14 md:mt-16 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/[0.04]">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1600&auto=format&fit=crop"
                alt="Office Workspace"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Creativity with Purpose & Approach/Belief */}
        <section className="my-40 px-4 sm:px-8 md:px-12">
          <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
            {/* Creativity with Purpose Section Header */}
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[56px] tracking-tight leading-[1.12]">
                <span className="text-[#9BA59D] font-normal italic">Creativity </span>
                <span className="text-[#242424] font-medium">with</span>
                <br />
                <span className="text-[#536757] font-medium">purpose</span>
              </h2>
              <p className="font-subheading text-neutral-500 max-w-lg mx-auto text-xs sm:text-sm md:text-base leading-relaxed mt-3.5 sm:mt-4">
                We combine bold ideas with smart strategy and seamless execution to create digital work that moves businesses forward.
              </p>
            </div>

            {/* Approach & Belief Rows */}
            <div className="mt-14 sm:mt-20 md:mt-24 flex flex-col gap-14 sm:gap-20 md:gap-24">
              {/* Row 1: OUR APPROACH */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-6 sm:gap-8 lg:gap-12">
                {/* Left Column: Text */}
                <div className="flex flex-col">
                  <h3 className="font-heading text-base sm:text-lg md:text-xl font-bold tracking-widest text-[#536757] uppercase mb-2 sm:mb-3">
                    OUR APPROACH
                  </h3>
                  <p className="font-subheading text-[#242424] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-3 sm:mb-4">
                    We bring strategy, creativity, and technology together to build digital experiences that actually move businesses forward.
                  </p>
                  <p className="font-subheading text-neutral-600 text-xs sm:text-sm md:text-[15px] leading-relaxed">
                    From social media and performance marketing to brand identity and web development, every piece is designed with a clear purpose: get attention, build trust, and drive action.
                  </p>
                </div>

                {/* Middle: Horizontal Arrow pointing RIGHT */}
                <div className="hidden lg:flex items-center justify-center shrink-0 px-2 lg:px-6">
                  <svg
                    className="w-20 md:w-28 lg:w-36 h-6 text-[#7E8B80]"
                    viewBox="0 0 120 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 10H116M116 10L102 2M116 10L102 18"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Right Column: Image Card */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] md:aspect-[16/10] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#ECEAE6] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/[0.04]">
                  <Image
                    src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop"
                    alt="Our Approach"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Row 2: OUR BELIEF */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-6 sm:gap-8 lg:gap-12">
                {/* Left Column: Image Card */}
                <div className="order-2 lg:order-1 relative w-full aspect-[4/3] sm:aspect-[16/11] md:aspect-[16/10] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#ECEAE6] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/[0.04]">
                  <Image
                    src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop"
                    alt="Our Belief"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Middle: Horizontal Arrow pointing LEFT */}
                <div className="hidden lg:flex order-2 items-center justify-center shrink-0 px-2 lg:px-6">
                  <svg
                    className="w-20 md:w-28 lg:w-36 h-6 text-[#7E8B80]"
                    viewBox="0 0 120 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M120 10H4M4 10L18 2M4 10L18 18"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Right Column: Text */}
                <div className="order-1 lg:order-3 flex flex-col lg:items-end lg:text-right">
                  <h3 className="font-heading text-base sm:text-lg md:text-xl font-bold tracking-widest text-[#536757] uppercase mb-2 sm:mb-3">
                    OUR BELIEF
                  </h3>
                  <p className="font-subheading text-[#242424] font-medium text-xs sm:text-sm md:text-[15px] leading-snug mb-2 sm:mb-3">
                    Great marketing should do more than look good.
                  </p>
                  <p className="font-subheading text-neutral-600 text-xs sm:text-sm md:text-[15px] leading-relaxed">
                    We believe strong brands are built when bold ideas meet smart execution. That means creating content people want to watch, campaigns people want to click, and digital experiences people want to remember.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Brand Trust Logo Carousel Section */}
      <BrandTrust />

      {/* Global World Map Section */}
      <WorldMap />

      {/* "The Numbers Speak" Stats / Impact Section */}
      <section className="w-full bg-[#F5F4F3] my-40 px-4 sm:px-8 md:px-12 relative overflow-hidden">
        <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
          {/* Section Header */}
          <div className="relative max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.14]">
              <span className="text-[#9BA59D] font-normal">The </span>
              <span className="text-[#536757] font-medium">Numbers Speak</span>
            </h2>
            <p className="font-subheading text-neutral-500 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed mt-3 sm:mt-4">
              A track record built on strategy, creativity, and results.
            </p>
          </div>

          {/* 4 Metrics Columns with Vertical Divider Lines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-0 lg:divide-x lg:divide-neutral-300/80">
            {[
              {
                label: "Brands Transformed",
                value: "75+",
                description:
                  "Helping ambitious brands build stronger digital experiences.",
              },
              {
                label: "Projects Delivered",
                value: "120+",
                description:
                  "From strategy and branding to design, development, and growth.",
              },
              {
                label: "Years of Experience",
                value: "8Y",
                description:
                  "Bringing together creativity, technology, and business thinking.",
              },
              {
                label: "Client Satisfaction",
                value: "98%",
                description:
                  "Building partnerships that turn first projects into long-term work.",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col text-center items-center px-4 sm:px-6 lg:px-8"
              >
                {/* Metric Label */}
                <span className="font-subheading text-neutral-600 text-xs sm:text-sm font-medium">
                  {stat.label}
                </span>

                {/* Number */}
                <span className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal text-[#536757] leading-none my-3 sm:my-4 tracking-tight">
                  {stat.value}
                </span>

                {/* Description */}
                <p className="font-subheading text-neutral-500 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section ("The people behind the work") */}
      <section className="w-full bg-[#F5F4F3] my-40 px-4 sm:px-8 md:px-12 relative overflow-hidden">
        <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16 md:mb-20">
            <div className="relative">
              {/* Cursive Doodle "Our Team" on Top */}
              <div className="absolute -top-7 sm:-top-9 -left-1 -rotate-6 pointer-events-none select-none">
                <span className="font-doodle text-3xl sm:text-4xl md:text-5xl text-[#7E8B80]/85">
                  Our Team
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[58px] tracking-tight leading-[1.08] text-left pt-2">
                <span className="text-[#9BA59D] font-normal">The people behind</span>
                <br />
                <span className="text-[#536757] font-medium">the work</span>
              </h2>
            </div>

            {/* "Join the team" CTA Button */}
            <div className="shrink-0 self-start sm:self-auto mb-2">
              <Link
                href="/Contact"
                className="inline-flex items-center justify-center bg-[#242424] text-white font-body font-medium text-base sm:text-lg px-8 sm:px-11 py-3.5 sm:py-4 rounded-[12px] shadow-[0_12px_28px_rgba(0,0,0,0.5)] active:scale-95 transition-all duration-300"
              >
                Join the team
              </Link>
            </div>
          </div>

          {/* Staggered 3-Column Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-x-12 lg:gap-y-16">
            {[
              {
                id: "member-1",
                name: "Arjun Mehta",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
                gridPlacement: "lg:col-start-1 lg:row-start-1",
              },
              {
                id: "member-2",
                name: "Arjun Mehta",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
                gridPlacement: "lg:col-start-2 lg:row-start-1",
              },
              {
                id: "member-3",
                name: "Arjun Mehta",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
                gridPlacement: "lg:col-start-2 lg:row-start-2",
              },
              {
                id: "member-4",
                name: "Arjun Mehta",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
                gridPlacement: "lg:col-start-3 lg:row-start-2",
              },
            ].map((member) => (
              <div
                key={member.id}
                className={`flex flex-col group ${member.gridPlacement}`}
              >
                {/* Image Frame Card */}
                <div className="relative w-full aspect-[4/5] rounded-[28px] sm:rounded-[34px] md:rounded-[40px] bg-[#ECEAE6]/70 border border-black/[0.04] overflow-hidden flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] group-hover:border-[#536757]/20">
                  {/* Fallback / Mockup Style Placeholder Vector */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <svg
                      className="w-16 h-16 sm:w-20 sm:h-20 text-[#BAC7BE]/70 group-hover:text-[#536757]/60 transition-colors duration-300"
                      viewBox="0 0 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="8"
                        y="8"
                        width="64"
                        height="64"
                        rx="16"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="52" cy="28" r="2.5" fill="currentColor" />
                      <path
                        d="M14 56L30 38C32.5 35.5 36.5 35.5 39 38L52 52"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M44 46L49 40C51.5 37.5 55.5 37.5 58 40L66 50"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Actual Portrait Image if present */}
                  {member.image && (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  )}
                </div>

                {/* Name & Role Text */}
                <div className="mt-4 sm:mt-5 text-left">
                  <h3 className="font-heading text-2xl sm:text-[26px] md:text-[28px] text-[#536757] font-normal tracking-tight">
                    {member.name}
                  </h3>
                  <p className="font-subheading text-neutral-500 text-xs sm:text-sm mt-0.5 sm:mt-1 font-normal tracking-wide">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
