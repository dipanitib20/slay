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
        <section className="pt-32 sm:pt-40 md:pt-44 mb-16 sm:mb-24 lg:mb-32 px-4 sm:px-8 md:px-12">
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
                <span className="text-[#536757]/65">WE BUILD BRANDS</span>
                <br />
                <span className="text-[#536757]">THAT MOVE FORWARD</span>
              </h1>

              {/* Subheading / Description Paragraph */}
              <p className="font-subheading text-neutral-500 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed mt-3.5 sm:mt-4">
                We are a full service social media and digital marketing agency, built in house and run small on purpose. Strategy, content, campaigns and design, made by people who know your brand rather than a rotating cast who do not.
              </p>
            </div>

            {/* Large Hero Image Container */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[2.1/1] md:aspect-[2.4/1] rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#FAF9EE] mt-10 sm:mt-14 md:mt-16 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/[0.04]">
              <Image
                src="/about-main.webp"
                alt="Slay The Strategy Studio Office"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Creativity with Purpose & Approach/Belief */}
        <section className="my-16 sm:my-24 lg:my-32 px-4 sm:px-8 md:px-12">
          <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
            {/* Creativity with Purpose Section Header */}
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight leading-[1.12]">
                <span className="text-[#536757]/65">We build brands that make people </span>
                <br />
                <span className="text-[#536757]">stop and actually look</span>
              </h2>
              <p className="font-subheading text-neutral-500 max-w-lg mx-auto text-xs sm:text-sm md:text-base leading-relaxed mt-3.5 sm:mt-4">
                Every creative decision we make is answering a question. Who is this for, what should it make them do, and how will we know it worked. Pretty is the baseline, not the point.
              </p>
            </div>

            {/* Approach & Belief Rows */}
            <div className="mt-14 sm:mt-20 md:mt-24 flex flex-col gap-14 sm:gap-20 md:gap-24">
              {/* Row 1: OUR APPROACH */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-6 sm:gap-8 lg:gap-12">
                {/* Left Column: Text */}
                <div className="flex flex-col">
                  <h3 className="font-heading text-base sm:text-lg md:text-xl font-bold tracking-widest text-[#536757] uppercase mb-2 sm:mb-3">
                    OUR MISSION
                  </h3>
                  <p className="font-subheading text-[#242424] text-xs sm:text-sm md:text-[15px] leading-relaxed mb-3 sm:mb-4">
                    Slay The Strategy exists to close the gap between what a founder has actually built and what the world sees online. Too many good brands are let down by content that makes them look like everybody else. We bring strategy to every piece of content and accountability to every strategy, so the brands we work with look exactly as good as they are.  
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
                    src="/mission.webp"
                    alt="Our Mission"
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
                    src="/vision.webp"
                    alt="Our Vision"
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
                    OUR VISION
                  </h3>
                  <p className="font-subheading text-[#242424] font-medium text-xs sm:text-sm md:text-[15px] leading-snug mb-2 sm:mb-3">
                    To become the first agency ambitious founders think of when average is not an option, in India and in every market we build into. We want Slay The Strategy to be the reference point for what a modern brand should look and sound like online, with a body of work sharp enough that clients arrive already convinced. 
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
      <section className="w-full bg-[#F5F4F3] my-16 sm:my-24 lg:my-32 px-4 sm:px-8 md:px-12 relative overflow-hidden">
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

          {/* 3 Metrics Columns with Vertical Divider Lines */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-0 md:divide-x md:divide-neutral-300/80">
            {[
              {
                label: "Brands Worked With",
                value: "25+",
                description:
                  "Across social media, content, performance marketing, and brand identity since 2024.",
              },
              {
                label: "Years of Experience",
                value: "7.5Y",
                description:
                  "Marketing experience across agency and corporate backgrounds before building this.",
              },
              {
                label: "Based in Delhi NCR",
                value: "NCR",
                description:
                  "Delhi NCR based. Working with clients across India. Time zones have not stopped us yet.",
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
      <section className="w-full bg-[#F5F4F3] my-16 sm:my-24 lg:my-32 px-4 sm:px-8 md:px-12 relative overflow-hidden">
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
                className="cta-btn inline-flex items-center justify-center text-white font-body font-medium text-base sm:text-lg px-8 sm:px-11 py-3.5 sm:py-4 rounded-[12px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(0,0,0,0.4),0_12px_28px_rgba(83,103,87,0.35)] active:scale-95"
              >
                Join the team
              </Link>
            </div>
          </div>

          {/* Centered 2-Column Team Grid */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 justify-center">
            {[
              {
                id: "member-1",
                name: "Dipani Tibrewala",
                role: "Founder & CEO",
                bio: "Hi, I am Dipani. Before Slay the Strategy, I spent 7.5 years in corporate marketing: Plan.Net TechNest India, Accenture, Edelman. I have worked on campaigns for Jaguar, BMW, Microsoft, HPE, and Infosys. I know what brand building looks like at scale and I know exactly what goes wrong when strategy turns into safe, recycled, forgettable content. That is what I left behind in 2024. Slay the Strategy is built for founders and brands who are done blending in. We work with D2C brands, creators, luxury names, professional service businesses, schools, and everyone in between who wants a presence that actually reflects how good what they have built really is. I oversee strategy personally on every account. We move fast, communicate like real people, and do not deliver work we are not proud to put our name on. If you are here, you already know you want more than what you have been getting. Let us talk.",
                image: "/dipani.webp",
              },
              {
                id: "member-2",
                name: "Srivats Tibrewala",
                role: "Co-Founder",
                bio: "Every great creative operation needs someone who makes sure the whole thing actually runs. That is Srivats. Srivats Tibrewala is the Co-Founder of Slay the Strategy and the person responsible for keeping the agency financially sharp and operationally tight. While strategy and creative work happens at the front, Srivats makes sure everything behind it—the numbers, the processes, the structure—is solid enough to scale. He is the reason we move fast without things falling apart. The backbone of everything we build here.",
                image: "/srivats.webp",
              },
            ].map((member) => (
              <div
                key={member.id}
                className="flex flex-col group flip-card-perspective w-full"
              >
                {/* 3D Revolving Card Frame */}
                <div className="flip-card-inner aspect-[4/5] rounded-[28px] sm:rounded-[34px] md:rounded-[40px] cursor-pointer">
                  {/* FRONT FACE (Photo & Details) */}
                  <div className="flip-card-front rounded-[28px] sm:rounded-[34px] md:rounded-[40px] bg-[#ECEAE6]/70 border border-black/[0.04] overflow-hidden flex items-center justify-center shadow-sm group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-shadow duration-500">
                    {/* Fallback Placeholder Vector */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <svg
                        className="w-16 h-16 sm:w-20 sm:h-20 text-[#BAC7BE]/70"
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

                    {/* Portrait Image */}
                    {member.image && (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    )}

                    {/* Subtle Flip Badge Hint */}
                    <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 bg-black/40 backdrop-blur-md text-white/90 text-[10px] sm:text-[11px] font-subheading tracking-wider px-3 py-1.5 rounded-full border border-white/15 opacity-80 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none flex items-center gap-1.5">
                      <span>Hover to flip</span>
                      <span>↺</span>
                    </div>
                  </div>

                  {/* BACK FACE (Full Text Content) */}
                  <div className="flip-card-back rounded-[28px] sm:rounded-[34px] md:rounded-[40px] bg-[#222222] text-white p-6 sm:p-7 md:p-8 flex flex-col justify-center overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.35)] bg-[radial-gradient(ellipse_at_top_right,rgba(83,103,87,0.25),transparent_70%)]">
                    <p className="font-subheading text-white/90 text-xs sm:text-[13px] md:text-[13.5px] lg:text-[14px] leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Name & Role Text Below Card */}
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
