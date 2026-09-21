"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  navLinks?: { name: string; href: string }[];
  attributionText?: string;
  creatorName?: string;
  phone?: string;
  email?: string;
}

export default function Footer({
  navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Services", href: "/Services" },
    { name: "Work", href: "/Work" },
    { name: "Terms & Conditions", href: "/TnC" },
  ],
  attributionText = "A agency created by",
  creatorName = "Designncode",
  phone = "+91 90363 83777",
  email = "hello@slaystrategy.com",
}: FooterProps) {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61586631632667",
      icon: (
        <svg
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/slaythestrategy.agency?stkn=MTJnbDJsbm5qNG5xZw==",
      icon: (
        <svg
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-none stroke-current"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/slay-the-strategy/",
      icon: (
        <svg
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
    },
  ];

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#F5F4F3] mt-10 sm:mt-16 lg:mt-24 pt-6 sm:pt-8 md:pt-10 px-4 sm:px-8 md:px-12 relative overflow-hidden">
      {/* Background Watermark Text "Slay" with Geist Font & Subtle Spacing */}
      <div
        className="absolute top-6 sm:top-8 md:top-10 left-1/2 -translate-x-[48%] pointer-events-none select-none z-0 font-geist font-regular text-[150px] sm:text-[270px] md:text-[380px] lg:text-[470px] leading-none tracking-[-0.01em] whitespace-nowrap bg-gradient-to-b from-[#536757]/[0.75] via-[#536757]/[0.1] to-transparent bg-clip-text text-transparent [mask-image:linear-gradient(to_bottom,black_15%,transparent_85%)]"
        aria-hidden="true"
      >
        Slay
      </div>

      <div className="relative z-10 max-w-8xl mx-auto md:px-6 lg:px-15">
        {/* Main Content Area */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Brand Monogram Icon */}
          <div className="mb-5 sm:mb-8 transition-transform duration-300 hover:scale-105">
            <Image
              src="/Logosmall.svg"
              alt="Slay Agency Monogram"
              width={72}
              height={63}
              className="w-12 sm:w-16 md:w-18 h-auto object-contain"
            />
          </div>

          {/* Heading */}
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-[#4A4A4A] tracking-tight leading-[1.18] max-w-2xl px-2">
            Build it once.{" "}
            <br />
            <span className="text-[#242424]">Build it right. </span>
          </h2>

          {/* Subheading */}
          <p className="font-subheading text-[#4A4A4A]/85 text-sm sm:text-base md:text-lg max-w-xl mx-auto mt-3 sm:mt-5 leading-relaxed px-4">
            If you are ready to show up online the way your brand actually deserves, let us talk.
          </p>

          {/* Direct Contact Pills: Email & Phone */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2.5 bg-white hover:bg-[#536757] text-[#242424] hover:text-white border border-neutral-200/90 hover:border-[#536757] px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_20px_rgba(83,103,87,0.25)] transition-all duration-200 group"
            >
              <svg
                className="w-4 h-4 text-[#536757] group-hover:text-white transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>{email}</span>
            </a>

            <a
              href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
              className="inline-flex items-center gap-2.5 bg-white hover:bg-[#536757] text-[#242424] hover:text-white border border-neutral-200/90 hover:border-[#536757] px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_20px_rgba(83,103,87,0.25)] transition-all duration-200 group"
            >
              <svg
                className="w-4 h-4 text-[#536757] group-hover:text-white transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>{phone}</span>
            </a>
          </div>

          {/* Social Cards: 2x2 Grid on Mobile with centered 3rd item, Flex Row on Desktop */}
          <div className="grid grid-cols-2 md:flex md:flex-row md:items-center md:justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-8 sm:mt-12 md:mt-14 w-full max-w-sm sm:max-w-lg md:max-w-none">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between gap-2 sm:gap-4 md:gap-6 bg-[#F2F2F2] hover:bg-[#EBEBEB] border border-white/90 inner-shadow-card px-3.5 py-2.5 sm:px-5 sm:py-3.5 md:pl-6 md:pr-3.5 md:py-3.5 rounded-[14px] sm:rounded-[18px] md:rounded-[20px] transition-all duration-300 min-w-0 md:w-[210px] lg:w-[220px] last:col-span-2 last:w-[calc(50%-5px)] sm:last:w-[calc(50%-8px)] md:last:w-[210px] lg:last:w-[220px] md:last:col-span-1 last:mx-auto md:last:mx-0"
              >
                <span className="font-heading font-bold text-[13.5px] sm:text-[16px] md:text-[18px] text-[#242424] tracking-tight truncate">
                  {social.name}
                </span>

                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-[#202020] text-white flex items-center justify-center shrink-0 circle-badge-shadow transition-all duration-300">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="mt-16 sm:mt-24 md:mt-32">
          {/* Edge-fading divider line (0 opacity at ends, smooth transition in center) */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#242424]/20 to-transparent" />

          <div className="pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-12 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
            {/* Navigation Links */}
            <nav
              aria-label="Footer Navigation"
              className="flex items-center gap-5 sm:gap-8 md:gap-10 flex-wrap justify-center"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-body font-semibold text-sm sm:text-base md:text-[17px] text-[#242424] hover:text-[#536757] transition-colors duration-200 underline sm:no-underline underline-offset-4 decoration-black/20"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Attribution / Credits */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <div className="font-body text-neutral-600 text-xs sm:text-sm md:text-[16px]">
                {attributionText}{" "}
                <span className="font-bold text-[#242424]">{creatorName}</span>
              </div>

              {/* Back to Top */}
              <button
                type="button"
                onClick={scrollToTop}
                className="text-xs sm:text-sm font-semibold text-neutral-600 hover:text-[#242424] flex items-center gap-1 transition-colors cursor-pointer"
                aria-label="Back to top of page"
              >
                Back To Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

