"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  logoText?: string;
  links?: { name: string; href: string }[];
  bookCallHref?: string;
  avatarSrc?: string;
}

export default function Navbar({
  links = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
  ],
  bookCallHref = "#book-call",
  avatarSrc = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop",
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-8 py-5 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Navigation Pill */}
        <nav
          aria-label="Main Navigation"
          className="flex items-center gap-6 sm:gap-8 bg-white/95 backdrop-blur-md px-4 sm:px-6 py-2.5 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] border border-black/[0.06] transition-transform duration-300 hover:shadow-[0_6px_30px_rgba(0,0,0,0.09)]"
        >
          {/* 3D Block Logo */}
          <Link
            href="/"
            className="flex items-center justify-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 rounded-lg"
            aria-label="Home"
          >
            <svg
              className="w-10 h-7 text-black transition-transform duration-200 group-hover:scale-105"
              viewBox="0 0 120 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* 3D Extruded Shadow / Depth */}
              <path
                d="M18 48L32 62H74L60 48H18Z"
                fill="#111111"
              />
              <path
                d="M74 62L88 48V20L74 34V62Z"
                fill="#18181b"
              />
              <path
                d="M32 62V48H60V62H32Z"
                fill="#09090b"
              />
              <path
                d="M80 20L96 36H114L98 20H80Z"
                fill="#111111"
              />
              <path
                d="M114 36L120 30V12L114 18V36Z"
                fill="#18181b"
              />

              {/* Main Front Block 1 */}
              <polygon
                points="12,18 48,18 42,46 6,46"
                fill="white"
                stroke="#111111"
                strokeWidth="7"
                strokeLinejoin="round"
              />
              <polygon
                points="22,26 38,26 34,38 18,38"
                fill="#111111"
              />

              {/* Main Front Block 2 */}
              <polygon
                points="52,18 88,18 82,46 46,46"
                fill="white"
                stroke="#111111"
                strokeWidth="7"
                strokeLinejoin="round"
              />
              <polygon
                points="62,26 78,26 74,38 58,38"
                fill="#111111"
              />

              {/* Accent dot / dash */}
              <polygon
                points="84,10 96,10 93,18 81,18"
                fill="#111111"
              />
              <polygon
                points="99,10 111,10 108,18 96,18"
                fill="#111111"
              />
            </svg>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[14px] font-medium text-neutral-800 hover:text-black tracking-tight transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu toggle inside left pill */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-1 text-neutral-700 hover:text-black focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Right CTA Pill: "Book a call" + Avatar */}
        <div className="flex items-center">
          <Link
            href={bookCallHref}
            className="group flex items-center gap-3 bg-[#171717] hover:bg-[#0a0a0a] text-white pl-5 pr-1.5 py-1.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.18)] transition-all duration-300 transform active:scale-95"
          >
            <span className="text-[14px] font-medium tracking-tight text-white/95 group-hover:text-white transition-colors">
              Book a call
            </span>

            {/* Sub-pill action icon */}
            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <svg
                className="w-2.5 h-2.5 text-white/90 transform group-hover:translate-x-0.5 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>

            {/* Avatar Profile */}
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 shadow-sm shrink-0">
              <Image
                src={avatarSrc}
                alt="Founder avatar"
                width={32}
                height={32}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                unoptimized
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-sm mx-auto bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-black/[0.06] animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-neutral-800 hover:text-black hover:bg-neutral-100 rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
