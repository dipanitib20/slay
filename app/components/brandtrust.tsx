"use client";

import React from "react";

// Row 1 Logos
const LogoNotion = () => (
  <div className="flex items-center gap-2.5 text-[#1E1E1E] opacity-90 hover:opacity-100 hover:text-[#536757] transition-all duration-200 cursor-pointer shrink-0">
    <svg className="h-7 sm:h-8 w-auto" viewBox="0 0 100 100" fill="currentColor">
      <path d="M6.3 12.3l61.5-6.1c4.5-.4 6.7 1.8 7.6 6.3l18.4 9.1c2.7 1.4 3.6 4.1 3.6 7.7v60.9c0 5.4-3.6 8.1-9 8.6L27 94.9c-4.5.4-7.2-.9-8.1-5.4L6.3 12.3zm24.8 20.3v45.2c0 2.7 1.4 4.1 4.5 3.6l44.3-3.2V32.6H31.1zm31.6 8.6l10.9 24.4V41.7l-10.9-.5zm-22.6 30.7V48.1l11.7 23.9-11.7-.5z" />
    </svg>
    <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight">
      Notion
    </span>
  </div>
);

const LogoIntercom = () => (
  <div className="flex items-center gap-2.5 text-[#1E1E1E] opacity-90 hover:opacity-100 hover:text-[#536757] transition-all duration-200 cursor-pointer shrink-0">
    <svg className="h-6 sm:h-7 w-auto" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-12 5h2v6H7V8zm4-2h2v10h-2V6zm4 2h2v6h-2V8z" />
    </svg>
    <span className="font-heading font-black text-lg sm:text-xl tracking-wider uppercase">
      INTERCOM
    </span>
  </div>
);

const LogoPylon = () => (
  <div className="flex items-center gap-2.5 text-[#1E1E1E] opacity-90 hover:opacity-100 hover:text-[#536757] transition-all duration-200 cursor-pointer shrink-0">
    <svg
      className="h-6 sm:h-7 w-auto"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
    >
      <circle cx="16" cy="16" r="13" />
      <line x1="3" y1="16" x2="29" y2="16" />
      <line x1="8" y1="9" x2="24" y2="9" />
      <line x1="8" y1="23" x2="24" y2="23" />
    </svg>
    <span className="font-heading font-black text-xl sm:text-2xl tracking-tight">
      Pylon
    </span>
  </div>
);

const Logo11x = () => (
  <div className="flex items-center gap-2.5 text-[#1E1E1E] opacity-90 hover:opacity-100 hover:text-[#536757] transition-all duration-200 cursor-pointer shrink-0">
    <svg className="h-6 sm:h-7 w-auto" viewBox="0 0 32 32" fill="currentColor">
      <path d="M16 16C16 11.58 12.42 8 8 8C8 12.42 11.58 16 16 16ZM16 16C20.42 16 24 12.42 24 8C19.58 8 16 11.58 16 16ZM16 16C16 20.42 19.58 24 24 24C24 19.58 20.42 16 16 16ZM16 16C11.58 16 8 20.42 8 24C12.42 24 16 19.58 16 16Z" />
    </svg>
    <span className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tighter">
      11x
    </span>
  </div>
);

const LogoDescript = () => (
  <div className="flex items-center gap-2.5 text-[#1E1E1E] opacity-90 hover:opacity-100 hover:text-[#536757] transition-all duration-200 cursor-pointer shrink-0">
    <svg className="h-6 sm:h-7 w-auto" viewBox="0 0 32 32" fill="currentColor">
      <path d="M4 8h10c4.4 0 8 3.6 8 8s-3.6 8-8 8H4V8zm18 4h6v2h-6v-2zm0 6h4v2h-4v-2zm-12-6H6v8h4c2.2 0 4-1.8 4-4s-1.8-4-4-4z" />
    </svg>
    <span className="font-heading font-black text-xl sm:text-2xl tracking-tight">
      descript
    </span>
  </div>
);

// Row 2 Logos
const LogoBland = () => (
  <div className="flex items-center text-[#1E1E1E] opacity-90 hover:opacity-100 hover:text-[#536757] transition-all duration-200 cursor-pointer shrink-0">
    <span className="font-heading font-black text-2xl sm:text-3xl tracking-tight">
      Bland
    </span>
  </div>
);

const LogoCursor = () => (
  <div className="flex items-center gap-2.5 text-[#1E1E1E] opacity-90 hover:opacity-100 hover:text-[#536757] transition-all duration-200 cursor-pointer shrink-0">
    <svg className="h-6 sm:h-7 w-auto" viewBox="0 0 32 32" fill="currentColor">
      <path d="M16 2L3 9.5V22.5L16 30L29 22.5V9.5L16 2ZM6 11.2L16 17V26.8L6 21V11.2ZM17.5 16.1L8 10.6L16 6L24 10.6L17.5 16.1ZM26 21L17.5 26V17.8L26 12.8V21Z" />
    </svg>
    <span className="font-heading font-black text-lg sm:text-xl tracking-wider uppercase">
      CURSOR
    </span>
  </div>
);

const LogoExpo = () => (
  <div className="flex items-center gap-2.5 text-[#1E1E1E] opacity-90 hover:opacity-100 hover:text-[#536757] transition-all duration-200 cursor-pointer shrink-0">
    <svg className="h-6 sm:h-7 w-auto" viewBox="0 0 32 32" fill="currentColor">
      <path d="M16 4L2 28h5.6l8.4-14.4L24.4 28H30L16 4z" />
    </svg>
    <span className="font-heading font-black text-2xl sm:text-3xl tracking-tight">
      Expo
    </span>
  </div>
);

const LogoThanx = () => (
  <div className="flex items-center gap-1.5 text-[#1E1E1E] opacity-90 hover:opacity-100 hover:text-[#536757] transition-all duration-200 cursor-pointer shrink-0">
    <span className="font-heading italic font-black text-2xl sm:text-3xl tracking-tight">
      Thanx
    </span>
    <span className="text-xs sm:text-sm -translate-y-1.5 select-none">✨</span>
  </div>
);

const LogoSprig = () => (
  <div className="flex items-center text-[#1E1E1E] opacity-90 hover:opacity-100 hover:text-[#536757] transition-all duration-200 cursor-pointer shrink-0">
    <span className="font-heading font-bold text-2xl sm:text-3xl tracking-tight">
      Sprig
    </span>
  </div>
);

// Row 3 Logos
const LogoCortex = () => (
  <div className="flex items-center gap-2.5 text-[#1E1E1E] opacity-90 hover:opacity-100 hover:text-[#536757] transition-all duration-200 cursor-pointer shrink-0">
    <svg
      className="h-6 sm:h-7 w-auto"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
    >
      <path d="M6 10C8 8 10 6 13 6" />
      <path d="M26 10C24 8 22 6 19 6" />
      <path d="M6 22C8 24 10 26 13 26" />
      <path d="M26 22C24 24 22 26 19 26" />
      <circle cx="16" cy="16" r="3" fill="currentColor" />
    </svg>
    <span className="font-heading font-bold text-xl sm:text-2xl tracking-tight">
      cortex
    </span>
  </div>
);

const LogoCape = () => (
  <div className="flex items-center text-[#1E1E1E] opacity-90 hover:opacity-100 hover:text-[#536757] transition-all duration-200 cursor-pointer shrink-0">
    <span className="font-heading font-black text-2xl sm:text-3xl tracking-wider uppercase">
      Cape
    </span>
  </div>
);

const LogoNumeric = () => (
  <div className="flex items-center gap-2.5 text-[#1E1E1E] opacity-90 hover:opacity-100 hover:text-[#536757] transition-all duration-200 cursor-pointer shrink-0">
    <svg
      className="h-6 sm:h-7 w-auto"
      viewBox="0 0 32 32"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 4C9.37 4 4 9.37 4 16C4 22.63 9.37 28 16 28C22.63 28 28 22.63 28 16C28 9.37 22.63 4 16 4ZM16 8C11.58 8 8 11.58 8 16C8 20.42 11.58 24 16 24C20.42 24 24 20.42 24 16C24 11.58 20.42 8 16 8ZM14 10H18V14H14V10ZM14 18H18V22H14V18ZM10 14H14V18H10V14ZM18 14H22V18H18V14Z"
      />
    </svg>
    <span className="font-heading font-black text-xl sm:text-2xl tracking-tight">
      numeric
    </span>
  </div>
);

const LogoContextualAI = () => (
  <div className="flex items-center gap-2.5 text-[#1E1E1E] opacity-90 hover:opacity-100 hover:text-[#536757] transition-all duration-200 cursor-pointer shrink-0">
    <svg
      className="h-6 sm:h-7 w-auto"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
    >
      <rect x="4" y="6" width="16" height="8" rx="4" />
      <rect x="12" y="18" width="16" height="8" rx="4" />
    </svg>
    <span className="font-heading font-bold text-lg sm:text-xl tracking-tight">
      Contextual AI
    </span>
  </div>
);

const LogoKrea = () => (
  <div className="flex items-center gap-2 text-[#1E1E1E] opacity-90 hover:opacity-100 hover:text-[#536757] transition-all duration-200 cursor-pointer shrink-0">
    <svg className="h-6 sm:h-7 w-auto" viewBox="0 0 32 32" fill="currentColor">
      <circle cx="8" cy="8" r="4" />
      <circle cx="8" cy="16" r="4" />
      <circle cx="8" cy="24" r="4" />
      <circle cx="20" cy="8" r="4" />
      <circle cx="14" cy="16" r="4" />
      <circle cx="22" cy="24" r="4" />
    </svg>
    <span className="font-heading font-black text-xl sm:text-2xl tracking-tight">
      KREA
    </span>
  </div>
);

export default function BrandTrust() {
  const row1Logos = [
    <LogoNotion key="r1-1" />,
    <LogoIntercom key="r1-2" />,
    <LogoPylon key="r1-3" />,
    <Logo11x key="r1-4" />,
    <LogoDescript key="r1-5" />,
  ];

  const row2Logos = [
    <LogoBland key="r2-1" />,
    <LogoCursor key="r2-2" />,
    <LogoExpo key="r2-3" />,
    <LogoThanx key="r2-4" />,
    <LogoSprig key="r2-5" />,
  ];

  const row3Logos = [
    <LogoCortex key="r3-1" />,
    <LogoCape key="r3-2" />,
    <LogoNumeric key="r3-3" />,
    <LogoContextualAI key="r3-4" />,
    <LogoKrea key="r3-5" />,
  ];

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

          {/* Row 1: Left to Right Carousel */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee-reverse flex items-center gap-14 sm:gap-20 md:gap-24 shrink-0">
              {row1Logos.map((logo, idx) => (
                <div key={`r1-s1-${idx}`}>{logo}</div>
              ))}
              {row1Logos.map((logo, idx) => (
                <div key={`r1-s2-${idx}`}>{logo}</div>
              ))}
              {row1Logos.map((logo, idx) => (
                <div key={`r1-s3-${idx}`}>{logo}</div>
              ))}
              {row1Logos.map((logo, idx) => (
                <div key={`r1-s4-${idx}`}>{logo}</div>
              ))}
            </div>
          </div>

          {/* Row 2: Right to Left Carousel */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee flex items-center gap-14 sm:gap-20 md:gap-24 shrink-0">
              {row2Logos.map((logo, idx) => (
                <div key={`r2-s1-${idx}`}>{logo}</div>
              ))}
              {row2Logos.map((logo, idx) => (
                <div key={`r2-s2-${idx}`}>{logo}</div>
              ))}
              {row2Logos.map((logo, idx) => (
                <div key={`r2-s3-${idx}`}>{logo}</div>
              ))}
              {row2Logos.map((logo, idx) => (
                <div key={`r2-s4-${idx}`}>{logo}</div>
              ))}
            </div>
          </div>

          {/* Row 3: Left to Right Carousel */}
          <div className="flex overflow-hidden">
            <div className="animate-marquee-reverse flex items-center gap-14 sm:gap-20 md:gap-24 shrink-0">
              {row3Logos.map((logo, idx) => (
                <div key={`r3-s1-${idx}`}>{logo}</div>
              ))}
              {row3Logos.map((logo, idx) => (
                <div key={`r3-s2-${idx}`}>{logo}</div>
              ))}
              {row3Logos.map((logo, idx) => (
                <div key={`r3-s3-${idx}`}>{logo}</div>
              ))}
              {row3Logos.map((logo, idx) => (
                <div key={`r3-s4-${idx}`}>{logo}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
