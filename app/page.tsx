"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";
import FAQFun from "./components/faqfun";
import TestimonialSection from "./components/testimonial";
import Footer from "./components/footer";

export default function Home() {
  const [activeCard, setActiveCard] = useState<number>(0);

  const logos = [
    {
      id: "logo1",
      element: (
        <div className="flex items-center gap-3 text-[#242424] opacity-85 hover:opacity-100 hover:text-[#536757] transition-all duration-200 shrink-0">
          <svg
            className="h-8 sm:h-9 w-auto"
            viewBox="0 0 48 48"
            fill="currentColor"
          >
            <circle cx="10" cy="24" r="5" />
            <circle cx="24" cy="12" r="5" />
            <circle cx="24" cy="36" r="5" />
            <circle cx="38" cy="24" r="5" />
            <path
              d="M10 24L24 12M10 24L24 36M24 12L38 24M24 36L38 24M24 12V36"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-2xl sm:text-[28px] font-extrabold tracking-tight">
            logoipsum
          </span>
        </div>
      ),
    },
    {
      id: "logo2",
      element: (
        <div className="flex items-center text-[#242424] opacity-85 hover:opacity-100 transition-all duration-200 shrink-0">
          <svg
            className="h-9 sm:h-10 w-auto"
            viewBox="0 0 120 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 48L32 62H74L60 48H18Z" fill="#242424" />
            <path d="M74 62L88 48V20L74 34V62Z" fill="#242424" />
            <path d="M32 62V48H60V62H32Z" fill="#242424" />
            <path d="M80 20L96 36H114L98 20H80Z" fill="#242424" />
            <path d="M114 36L120 30V12L114 18V36Z" fill="#242424" />
            <polygon
              points="12,18 48,18 42,46 6,46"
              fill="white"
              stroke="#242424"
              strokeWidth="7"
              strokeLinejoin="round"
            />
            <polygon points="22,26 38,26 34,38 18,38" fill="#242424" />
            <polygon
              points="52,18 88,18 82,46 46,46"
              fill="white"
              stroke="#242424"
              strokeWidth="7"
              strokeLinejoin="round"
            />
            <polygon points="62,26 78,26 74,38 58,38" fill="#242424" />
            <polygon points="84,10 96,10 93,18 81,18" fill="#242424" />
            <polygon points="99,10 111,10 108,18 96,18" fill="#242424" />
          </svg>
        </div>
      ),
    },
    {
      id: "logo3",
      element: (
        <div className="flex items-center text-[#242424] opacity-85 hover:opacity-100 hover:text-[#536757] transition-all duration-200 shrink-0">
          <svg
            className="h-8 sm:h-9 w-auto"
            viewBox="0 0 200 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="0"
              y="30"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="32"
              fontWeight="900"
              fontStyle="italic"
              fill="#242424"
              letterSpacing="-1"
            >
              Logoipsum
            </text>
            <line
              x1="-5"
              y1="16"
              x2="105"
              y2="16"
              stroke="#F5F4F3"
              strokeWidth="2.5"
            />
            <line
              x1="-10"
              y1="16"
              x2="25"
              y2="16"
              stroke="#242424"
              strokeWidth="2.5"
            />
          </svg>
        </div>
      ),
    },
    {
      id: "logo4",
      element: (
        <div className="flex items-center gap-3 text-[#242424] opacity-85 hover:opacity-100 hover:text-[#536757] transition-all duration-200 shrink-0">
          <svg
            className="h-8 sm:h-9 w-auto"
            viewBox="0 0 40 40"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 38C29.9411 38 38 29.9411 38 20C38 10.0589 29.9411 2 20 2C10.0589 2 2 10.0589 2 20C2 29.9411 10.0589 38 20 38ZM20 28C24.4183 28 28 24.4183 28 20C28 15.5817 24.4183 12 20 12C16.8 12 14.05 13.88 12.8 16.6C12.3 14.8 13.2 12.7 15 11.5C10 13.5 7.5 19 9.5 24C11.5 29 17 31.5 22 29.5C20.5 28.5 20 28 20 28Z"
            />
          </svg>
          <span className="text-2xl sm:text-[28px] font-extrabold tracking-tight">
            Logoipsum
          </span>
        </div>
      ),
    },
  ];

  const services = [
    {
      number: "01/N",
      title: "Social Media Management",
      description:
        "We turn your social presence into a brand people remember — with strategic content, consistent posting, and a voice that feels truly yours.",
    },
    {
      number: "02/N",
      title: "Performance Marketing",
      description:
        "Data-driven ad campaigns designed to convert, scale your revenue, and maximize ROI across paid social and search channels.",
    },
    {
      number: "03/N",
      title: "UGC & Content Shoots",
      description:
        "High-converting user-generated content and studio-quality creative shoots tailored to engage modern audiences.",
    },
    {
      number: "04/N",
      title: "AI-Generated Videos",
      description:
        "Cutting-edge AI video production for hyper-scalable visual storytelling, dynamic ad variations, and rapid creative testing.",
    },
  ];

  const projects = [
    {
      id: "project-1",
      title: "The Social Refresh",
      description:
        "Reimagining a growing brand’s social presence with bold visuals, sharper storytelling, and a strategy built for engagement.",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
      tags: ["Design", "Strategy"],
    },
    {
      id: "project-2",
      title: "The Social Refresh",
      description:
        "Reimagining a growing brand’s social presence with bold visuals, sharper storytelling, and a strategy built for engagement.",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
      tags: ["Design", "Strategy"],
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#F5F4F3] text-[#242424] selection:bg-[#242424] selection:text-white overflow-x-hidden">
      {/* Floating Header / Navbar */}
      <Navbar />

      {/* Hero Section (Fullscreen Edge-to-Edge Video) */}
      <section className="relative w-full hero-fullscreen overflow-hidden bg-[#242424]">
        {/* Mobile Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="block md:hidden absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/Herovideomobile.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Desktop Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/HeroDesktopvod.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Clients Horizontal Carousel Section */}
      <section className="relative w-full bg-[#F5F4F3] section-py overflow-hidden">
        {/* Left & Right Gradient Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-[#F5F4F3] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-[#F5F4F3] to-transparent z-10 pointer-events-none" />

        {/* Infinite Carousel Track */}
        <div className="animate-marquee flex items-center gap-16 sm:gap-24">
          {logos.map((logo, index) => (
            <div key={`set1-${logo.id}-${index}`}>{logo.element}</div>
          ))}
          {logos.map((logo, index) => (
            <div key={`set2-${logo.id}-${index}`}>{logo.element}</div>
          ))}
          {logos.map((logo, index) => (
            <div key={`set3-${logo.id}-${index}`}>{logo.element}</div>
          ))}
          {logos.map((logo, index) => (
            <div key={`set4-${logo.id}-${index}`}>{logo.element}</div>
          ))}
        </div>
      </section>

      {/* "What we bring" / Services Showcase Section */}
      <section id="services" className="w-full bg-[#F5F4F3] section-py px-4 sm:px-8 md:px-12">
        <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
          {/* Section Header */}
          <div className="relative max-w-4xl mx-auto text-center mb-14 sm:mb-18 md:mb-20">
            {/* Doodle Arrow & Handwritten Note */}
            <div className="absolute -top-9 sm:-top-12 md:-top-16 right-0 sm:right-2 md:right-6 lg:right-12 flex items-center gap-1 sm:gap-2 pointer-events-none select-none md:translate-x-8 lg:translate-x-14">
              <Image
                src="/arrow.svg"
                alt="Arrow"
                width={85}
                height={55}
                className="w-10 sm:w-16 md:w-22 lg:w-28 h-auto object-contain shrink-0"
              />
              <span className="font-doodle text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#536757] whitespace-nowrap pt-1 sm:pt-2 md:pt-3 -translate-y-2 sm:-translate-y-3 md:-translate-y-5">
                What we bring
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.12]">
              <span className="text-neutral-400 font-normal">Built to make </span>
              <span className="text-[#536757] font-medium">your brand grow.</span>
            </h2>

            {/* Subheading / Description Paragraph */}
            <p className="font-subheading text-neutral-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mt-6">
              From bold brand identities and scroll-stopping content to high-performing campaigns and seamless websites, we bring creativity, strategy, and technology together to build brands that stand out and perform.
            </p>
          </div>

          {/* Cards Expandable Container */}
          <div className="bg-[#FAF9EE] rounded-[32px] sm:rounded-[40px] p-1.5 sm:p-2 border-1 border-[#ECEADE]/60">
            <div className="flex flex-col md:flex-row gap-1.5 sm:gap-2 h-[580px] sm:h-[500px] md:h-[460px] lg:h-[480px] w-full">
              {services.map((service, index) => {
                const isActive = activeCard === index;

                return (
                  <div
                    key={service.number}
                    onMouseEnter={() => setActiveCard(index)}
                    onClick={() => setActiveCard(index)}
                    className={`relative overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-between ${
                      isActive
                        ? "flex-[2.8] md:flex-[2.2] bg-[#222222] text-white rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 lg:p-9 shadow-xl"
                        : "flex-1 bg-[#F0EEEB] text-[#242424] hover:bg-[#EAE7E3] rounded-[22px] sm:rounded-[28px] p-5 sm:p-6"
                    }`}
                  >
                    {/* Top Section */}
                    {isActive ? (
                      <div className="flex items-center justify-between w-full">
                        <span className="font-sans font-medium text-sm sm:text-base tracking-wider text-white">
                          {service.number}
                        </span>
                      </div>
                    ) : (
                      <div className="w-full pt-2 sm:pt-4 text-center">
                        <h3 className="font-heading font-semibold text-base sm:text-lg lg:text-[19px] text-[#242424] leading-snug mx-auto max-w-[140px] sm:max-w-[160px]">
                          {service.title}
                        </h3>
                      </div>
                    )}

                    {/* Inactive Middle Spacer */}
                    {!isActive && <div />}

                    {/* Bottom Content for Active Card */}
                    {isActive ? (
                      <div className="flex flex-col gap-2.5 sm:gap-3 transition-all duration-500 delay-100 ease-out">
                        <h3 className="font-heading font-medium text-2xl sm:text-3xl lg:text-[32px] text-white leading-tight tracking-tight">
                          {service.title}
                        </h3>
                        <p className="font-subheading text-neutral-300 text-sm sm:text-[15px] lg:text-base leading-relaxed max-w-lg">
                          {service.description}
                        </p>
                      </div>
                    ) : (
                      /* Optional Bottom placeholder to balance inactive card */
                      <div className="w-full flex justify-center opacity-0 pointer-events-none">
                        <span className="text-xs">{service.number}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-10 sm:mt-12 md:mt-14 flex justify-center">
            <Link
              href="/Services"
              className="inline-flex items-center justify-center bg-[#242424] text-white font-body font-medium text-base sm:text-lg px-8 sm:px-11 py-3.5 sm:py-4 rounded-[12px] shadow-[0_12px_28px_rgba(0,0,0,0.5)] active:scale-95 transition-all duration-300"
            >
              View more services
            </Link>
          </div>
        </div>
      </section>

      {/* "What We've Made" / Project Showcase Section */}
      <section id="work" className="w-full bg-[#F5F4F3] section-py px-4 sm:px-8 md:px-12">
        <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
          {/* Section Header */}
          <div className="relative max-w-3xl mx-auto text-center mb-14 sm:mb-18 md:mb-20">
            {/* Doodle Arrow & Handwritten Note on Top Right */}
            <div className="absolute -top-10 sm:-top-14 md:-top-16 right-0 sm:right-2 md:right-4 lg:right-6 flex flex-col items-center pointer-events-none select-none md:translate-x-6 lg:translate-x-10">
              <span className="font-doodle text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#536757] whitespace-nowrap -rotate-2">
                What We’ve Made
              </span>
              <Image
                src="/arrow.svg"
                alt="Arrow"
                width={85}
                height={55}
                className="w-10 sm:w-14 md:w-18 lg:w-20 h-auto object-contain shrink-0 rotate-[130deg] scale-x-[-1] mt-0.5 -translate-x-3"
              />
            </div>

            {/* Main Headline */}
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.12]">
              <span className="text-neutral-400 font-normal">Work That </span>
              <span className="text-[#536757] font-medium">Makes an Impact</span>
            </h2>

            {/* Subheading / Description Paragraph */}
            <p className="font-subheading text-neutral-500 max-w-xl mx-auto text-base sm:text-lg leading-relaxed mt-4 sm:mt-5">
              From strategy to execution, we create work that gets attention, builds brands, and drives results.
            </p>
          </div>

          {/* Project Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {projects.map((project, idx) => (
              <div key={`${project.id}-${idx}`} className="group flex flex-col cursor-pointer">
                {/* Image Container */}
                <div className="relative w-full aspect-[4/4.1] sm:aspect-[4/3.9] md:aspect-[4/4] rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#ECEAE6] ">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    unoptimized
                  />
                </div>

                {/* Project Details */}
                <div className="flex flex-col mt-6 sm:mt-7">
                  <h3 className="font-heading font-medium text-2xl sm:text-3xl text-[#536757] tracking-tight transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="font-subheading text-neutral-500 text-sm sm:text-base leading-relaxed mt-2 max-w-xl">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex items-center gap-3 mt-4 sm:mt-5 flex-wrap">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-6 sm:px-7 py-2.5 rounded-full bg-white text-[#242424] font-body font-regular text-sm sm:text-[15px] shadow-[0_2px_12px_rgba(0,0,0,0.25)] border border-black/[0.04] transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="mt-10 sm:mt-12 md:mt-18 flex justify-center">
            <Link
              href="#book-call"
              className="inline-flex items-center justify-center bg-[#242424] text-white font-body font-medium text-base sm:text-lg px-8 sm:px-11 py-3.5 sm:py-4 rounded-[12px] shadow-[0_12px_28px_rgba(0,0,0,0.5)] active:scale-95 transition-all duration-300"
            >
              View more projects
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQFun />

      {/* Criss-Crossing Ticker Ribbons Section */}
      <section className="relative w-full py-16 sm:py-24 md:py-32 overflow-hidden bg-[#F5F4F3] select-none no-scroll-animate">
        <div className="relative w-full flex items-center justify-center h-[220px] sm:h-[260px] md:h-[290px]">
          {/* Black Strip Ribbon (Angled bottom-left to top-right, moving right-to-left) */}
          <div className="absolute w-[300vw] left-1/2 -translate-x-1/2 py-3.5 sm:py-4 md:py-5 bg-[#1C1C1C] text-white shadow-[0_12px_28px_rgba(0,0,0,0.35)] rotate-[6.5deg] sm:rotate-[5deg] md:rotate-[3.8deg] z-10 overflow-hidden flex items-center">
            <div className="animate-marquee flex items-center whitespace-nowrap">
              {Array.from({ length: 6 }).map((_, setIdx) => (
                <div key={`black-set-${setIdx}`} className="flex items-center">
                  {[
                    "Trusted by Global Startups",
                    "Conversion Focused",
                    "Built to Scale",
                    "Fast Turnaround",
                    "Seamless User Experience",
                    "World-Class Quality",
                    "Data-Driven Growth",
                    "End-to-End Execution",
                  ].map((item, idx) => (
                    <React.Fragment key={`black-${setIdx}-${idx}`}>
                      <span className="font-geist font-medium text-base sm:text-lg md:text-[21px] tracking-tight text-white whitespace-nowrap">
                        {item}
                      </span>
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 shrink-0 mx-5 sm:mx-7 md:mx-8"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                      </svg>
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Green Strip Ribbon (Angled top-left to bottom-right, moving left-to-right) */}
          <div className="absolute w-[300vw] left-1/2 -translate-x-1/2 py-3.5 sm:py-4 md:py-5 bg-[#536757] text-white shadow-[0_16px_36px_rgba(0,0,0,0.4)] rotate-[-6.5deg] sm:rotate-[-5deg] md:rotate-[-3.8deg] z-20 overflow-hidden flex items-center">
            <div className="animate-marquee-reverse flex items-center whitespace-nowrap">
              {Array.from({ length: 6 }).map((_, setIdx) => (
                <div key={`green-set-${setIdx}`} className="flex items-center">
                  {[
                    "Web Development",
                    "UI/UX Design",
                    "Conversion-Focused Design",
                    "Digital Marketing",
                    "Brand Strategy",
                    "Performance Marketing",
                    "Content Production",
                    "Next.js & React",
                  ].map((item, idx) => (
                    <React.Fragment key={`green-${setIdx}-${idx}`}>
                      <span className="font-geist font-medium text-base sm:text-lg md:text-[21px] tracking-tight text-white whitespace-nowrap">
                        {item}
                      </span>
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 shrink-0 mx-5 sm:mx-7 md:mx-8"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                      </svg>
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section with Auto-Cycling Scattered Cards */}
      <TestimonialSection />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}


