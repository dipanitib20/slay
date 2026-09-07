"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "./components/navbar";

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

  return (
    <div className="relative min-h-screen w-full bg-[#F5F4F3] text-[#242424] selection:bg-[#242424] selection:text-white overflow-x-hidden">
      {/* Floating Header / Navbar */}
      <Navbar />

      {/* Hero Section (Fullscreen Edge-to-Edge Video) */}
      <section className="relative w-full h-screen min-h-screen overflow-hidden bg-[#242424]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/HeroDesktopvod.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Clients Horizontal Carousel Section */}
      <section className="relative w-full bg-[#F5F4F3] py-14 sm:py-20 overflow-hidden">
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
      <section className="w-full bg-[#F5F4F3] py-24 sm:py-32 px-5 sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-8xl mx-auto">
          {/* Section Header */}
          <div className="relative max-w-4xl mx-auto text-center mb-16 sm:mb-20">
            {/* Doodle Arrow & Handwritten Note */}
            <div className="absolute -top-12 sm:-top-16 right-2 sm:right-12 md:right-20 flex items-center gap-2 pointer-events-none select-none translate-x-45">
              <Image
                src="/arrow.svg"
                alt="Arrow"
                width={85}
                height={55}
                className="w-16 sm:w-24 md:w-28 h-auto object-contain"
              />
              <span className="font-doodle text-3xl sm:text-4xl md:text-5xl text-[#536757] whitespace-nowrap pt-3 -translate-y-5">
                What we bring
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.12]">
              <span className="text-neutral-400 font-normal">Built to make </span>
              <span className="text-[#536757] font-semibold">your brand</span>
              <br />
              <span className="text-[#536757] font-semibold">grow.</span>
            </h2>

            {/* Subheading / Description Paragraph */}
            <p className="font-subheading text-neutral-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mt-6">
              From bold brand identities and scroll-stopping content to high-performing campaigns and seamless websites, we bring creativity, strategy, and technology together to build brands that stand out and perform.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
            {services.map((service, index) => {
              const isActive = activeCard === index;

              return (
                <div
                  key={service.number}
                  onClick={() => setActiveCard(index)}
                  onMouseEnter={() => setActiveCard(index)}
                  className={`rounded-[32px] p-7 sm:p-8 flex flex-col justify-between min-h-[380px] sm:min-h-[440px] transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#242424] text-white shadow-2xl scale-[1.02]"
                      : "bg-[#ECEAE7] text-[#242424] hover:bg-[#E5E2DF] hover:shadow-md"
                  }`}
                >
                  {/* Top Header */}
                  {isActive ? (
                    <div className="flex items-center justify-between w-full">
                      <span className="text-sm font-semibold tracking-wider text-neutral-400">
                        {service.number}
                      </span>
                    </div>
                  ) : (
                    <div className="w-full pt-2">
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#242424] text-center leading-snug">
                        {service.title}
                      </h3>
                    </div>
                  )}

                  {/* Empty Spacer when inactive */}
                  {!isActive && <div />}

                  {/* Bottom Content when Active */}
                  {isActive ? (
                    <div className="flex flex-col gap-3 animate-in fade-in duration-300">
                      <h3 className="font-heading font-bold text-2xl sm:text-[26px] text-white leading-tight">
                        {service.title}
                      </h3>
                      <p className="font-subheading text-neutral-300 text-sm sm:text-[15px] leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  ) : (
                    <div className="flex justify-center w-full pb-2">
                      <span className="text-xs font-semibold tracking-wider text-neutral-400">
                        {service.number}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
