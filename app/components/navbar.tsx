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
  avatarSrc = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=256&auto=format&fit=crop",
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-8 md:px-12 py-5 md:py-8 transition-all duration-300">
      {/* DESKTOP NAVBAR (Split Pills) */}
      <div className="hidden md:flex max-w-8xl mx-auto items-center justify-between px-6 lg:px-15">
        {/* Left Navigation Pill */}
        <nav
          aria-label="Main Navigation"
          className="flex items-center gap-8 sm:gap-11 bg-white/95 backdrop-blur-md px-7 sm:px-9 py-3.5 sm:py-4 rounded-full transition-transform duration-300"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center justify-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#242424]/20 rounded-lg"
            aria-label="Home"
          >
            <Image
              src="/Logosmall.svg"
              alt="Logo"
              width={52}
              height={45}
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[18px] sm:text-[19px] font-medium text-[#242424]/90 tracking-tight hover:text-[#536757] transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Right CTA Button & Avatar */}
        <Link
          href={bookCallHref}
          className="group relative flex items-center select-none active:scale-95 transition-transform duration-200"
        >
          {/* 1. CTA Button (Base layer) */}
          <div className="relative z-0 flex items-center bg-[#242424] group-hover:bg-[#536757] text-white pl-8 pr-7 py-3.5 rounded-full transition-colors duration-300  -translate-x-2">
            <span className="text-[18px] sm:text-[19px] font-semibold tracking-tight text-white whitespace-nowrap">
              Book a call
            </span>
          </div>

          {/* 2. Image (Over CTA) */}
          <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white -ml-4 shrink-0 ">
            <Image
              src={avatarSrc}
              alt="Profile"
              width={56}
              height={56}
              className="w-full h-full object-cover transition-transform duration-300"
              unoptimized
            />
          </div>

          {/* 3. Minus / Addition Div (Smoothly transitions from - to + on hover) */}
          <div className="absolute right-10 sm:right-12 z-20 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md pointer-events-none translate-x-3 transition-transform duration-300 group-hover:rotate-90">
            <div className="relative flex items-center justify-center w-3 h-3">
              {/* Horizontal Bar */}
              <span className="w-2.5 sm:w-3 h-[2px] bg-[#242424] block rounded-full absolute" />
              {/* Vertical Bar (appears on hover to form +) */}
              <span className="w-[2px] h-2.5 sm:h-3 bg-[#242424] block rounded-full absolute scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-300" />
            </div>
          </div>
        </Link>
      </div>

      {/* MOBILE NAVBAR (Single unified pill) */}
      <div className="md:hidden flex items-center justify-between bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full shadow-[0_4px_25px_rgba(0,0,0,0.08)] border border-black/[0.04]">
        {/* Mobile Logo */}
        <Link
          href="/"
          className="flex items-center focus:outline-none"
          aria-label="Home"
        >
          <Image
            src="/Logosmall.svg"
            alt="Logo"
            width={44}
            height={38}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Circular Hamburger Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-11 h-11 rounded-full bg-[#f4f4ee] hover:bg-[#eaeae2] flex flex-col items-center justify-center gap-1 transition-all duration-200 focus:outline-none active:scale-95 shrink-0"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <svg
              className="w-5 h-5 text-[#242424]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <>
              <span className="w-4.5 h-[2px] bg-[#242424] block rounded-full" />
              <span className="w-4.5 h-[2px] bg-[#242424] block rounded-full" />
              <span className="w-4.5 h-[2px] bg-[#242424] block rounded-full" />
            </>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 w-full bg-white/95 backdrop-blur-md rounded-3xl p-5 shadow-2xl border border-black/[0.06] animate-in fade-in slide-in-from-top-3 duration-200 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-lg font-semibold text-[#242424] hover:text-[#536757] hover:bg-neutral-100/80 rounded-2xl transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-neutral-100 flex justify-center">
            <Link
              href={bookCallHref}
              onClick={() => setMobileMenuOpen(false)}
              className="group relative flex items-center justify-center select-none active:scale-95 transition-transform duration-200"
            >
              <div className="relative z-0 flex items-center bg-[#242424] group-hover:bg-[#536757] text-white pl-6 pr-6 py-3 rounded-full transition-colors duration-300 shadow-md">
                <span className="text-[16px] font-semibold tracking-tight text-white whitespace-nowrap">
                  Book a call
                </span>
              </div>
              <div className="relative z-10 w-10 h-10 rounded-full overflow-hidden border-2 border-white -ml-3 shrink-0 shadow-md">
                <Image
                  src={avatarSrc}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute right-8 z-20 w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md pointer-events-none translate-x-2 transition-transform duration-300 group-hover:rotate-90">
                <div className="relative flex items-center justify-center w-2.5 h-2.5">
                  <span className="w-2 h-[2px] bg-[#242424] block rounded-full absolute" />
                  <span className="w-[2px] h-2 bg-[#242424] block rounded-full absolute scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-300" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
