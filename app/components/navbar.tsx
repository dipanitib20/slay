"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavbarProps {
  logoText?: string;
  links?: { name: string; href: string }[];
  mobileLinks?: { name: string; href: string }[];
  bookCallHref?: string;
  avatarSrc?: string;
  phone?: string;
  email?: string;
}

export default function Navbar({
  logoText = "slay",
  links = [
    { name: "About", href: "/About" },
    { name: "Services", href: "/Services" },
    { name: "Work", href: "/Work" },
  ],
  mobileLinks = [
    { name: "Services", href: "/Services" },
    { name: "Case studies", href: "/Work" },
    { name: "About us", href: "/About" },
    { name: "Contact", href: "/Contact" },
  ],
  bookCallHref = "/Contact",
  avatarSrc = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=256&auto=format&fit=crop",
  phone = "(510) 895-6500",
  email = "hello@slayagency.com",
}: NavbarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      if (pathname === "/") {
        const hero = document.querySelector(".hero-fullscreen");
        if (hero) {
          const rect = hero.getBoundingClientRect();
          setIsPastHero(rect.bottom <= 90);
        } else {
          setIsPastHero(window.scrollY > 400);
        }
      } else {
        setIsPastHero(true);
      }
    };

    checkScrollPosition();
    window.addEventListener("scroll", checkScrollPosition, { passive: true });
    window.addEventListener("resize", checkScrollPosition, { passive: true });
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, [pathname]);

  const isHeroActive = pathname === "/" && !isPastHero;

  // Open with smooth transition
  const handleOpenMenu = () => {
    setIsOpen(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    });
  };

  // Close with smooth exit transition
  const handleCloseMenu = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 w-full px-4 sm:px-8 md:px-12 py-5 md:py-8 transition-all duration-300">
        {/* DESKTOP NAVBAR (Split Pills) */}
        <div className="hidden md:flex max-w-8xl mx-auto items-center justify-between px-6 lg:px-15">
          {/* Left Navigation Pill */}
          <nav
            aria-label="Main Navigation"
            className={`flex items-center gap-8 sm:gap-11 backdrop-blur-md px-7 sm:px-9 py-3.5 sm:py-4 rounded-full transition-colors duration-300 ${
              isHeroActive ? "bg-[#F5F4F3]" : "bg-white"
            }`}
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
            <div className="relative z-0 flex items-center bg-[#242424] group-hover:bg-[#536757] text-white pl-8 pr-7 py-3.5 rounded-full transition-colors duration-300 -translate-x-2">
              <span className="text-[18px] sm:text-[19px] font-semibold tracking-tight text-white whitespace-nowrap">
                Book a call
              </span>
            </div>

            {/* 2. Image (Over CTA) */}
            <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white -ml-4 shrink-0">
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

        {/* MOBILE NAVBAR (Header Pill) */}
        <div className="md:hidden flex items-center justify-between bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full shadow-[0_4px_25px_rgba(0,0,0,0.08)] border border-black/[0.04]">
          {/* Mobile Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 focus:outline-none"
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
            onClick={handleOpenMenu}
            className="w-11 h-11 rounded-full bg-[#f4f4ee] hover:bg-[#eaeae2] flex flex-col items-center justify-center gap-1 transition-all duration-200 focus:outline-none active:scale-95 shrink-0"
            aria-label="Open navigation menu"
          >
            <span className="w-4.5 h-[2px] bg-[#242424] block rounded-full" />
            <span className="w-4.5 h-[2px] bg-[#242424] block rounded-full" />
            <span className="w-4.5 h-[2px] bg-[#242424] block rounded-full" />
          </button>
        </div>
      </header>

      {/* MOBILE POPUP MENU WITH SMOOTH TRANSITION AND BACKGROUND BLUR */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex items-start justify-center px-4 sm:px-8 pt-5 pb-6 overflow-y-auto">
          {/* Background Blur Overlay (Smooth Fade in/out) */}
          <div
            className={`fixed inset-0 bg-black/45 backdrop-blur-md transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleCloseMenu}
            aria-hidden="true"
          />

          {/* Floating Dropdown Card (Matches closed navbar width with smooth scale, fade & slide) */}
          <div
            className={`relative w-full h-fit bg-white rounded-[32px] p-6 sm:p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] border border-black/5 z-10 flex flex-col transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] transform will-change-transform ${
              isVisible
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-[0.96] -translate-y-3 pointer-events-none"
            }`}
          >
            {/* Top Header Row */}
            <div className="flex items-center justify-between pb-6">
              {/* Logo */}
              <Link
                href="/"
                onClick={handleCloseMenu}
                className="flex items-center gap-2 focus:outline-none"
              >
                <Image
                  src="/Logosmall.svg"
                  alt="Logo"
                  width={38}
                  height={34}
                  className="h-8 w-auto object-contain"
                />
              </Link>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleCloseMenu}
                className="w-11 h-11 rounded-full bg-[#f4f4ee] hover:bg-[#eaeae2] flex items-center justify-center text-[#242424] transition-all active:scale-95 shrink-0 focus:outline-none"
                aria-label="Close menu"
              >
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
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col py-1 space-y-1">
              {mobileLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleCloseMenu}
                  className="text-[25px] sm:text-[27px] font-semibold tracking-[-0.02em] text-[#242424] hover:text-[#536757] transition-colors py-2 block"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Bottom Contact Section */}
            <div className="mt-7 pt-2 flex flex-col gap-2.5">
              <a
                href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                className="text-[15px] font-semibold text-[#666666] hover:text-[#242424] transition-colors w-fit"
              >
                {phone}
              </a>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="group flex items-center gap-3 text-left focus:outline-none cursor-pointer"
                  title="Click to copy email address"
                >
                  {/* Teal/Green Copy Button */}
                  <div className="w-8 h-8 rounded-full bg-[#52ba9d] group-hover:bg-[#43a88c] flex items-center justify-center text-white shrink-0 transition-colors shadow-sm">
                    {copied ? (
                      <svg
                        className="w-4 h-4 text-white animate-in zoom-in-75 duration-150"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="9"
                          y="9"
                          width="13"
                          height="13"
                          rx="2"
                          ry="2"
                        />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                    )}
                  </div>
                  <span className="text-[17px] font-semibold text-[#242424] group-hover:text-[#52ba9d] transition-colors">
                    {email}
                  </span>
                </button>

                {copied && (
                  <span className="text-xs font-semibold text-[#52ba9d] bg-[#52ba9d]/10 px-2.5 py-0.5 rounded-full animate-in fade-in duration-150">
                    Copied!
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

