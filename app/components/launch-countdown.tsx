"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
}

interface LaunchCountdownProps {
  children?: React.ReactNode;
  /** Optional custom launch ISO string or timestamp. If not provided, defaults to tomorrow 10:00 AM */
  targetDate?: string | number | Date;
  /** Allow standalone mode where it renders purely as a page */
  standalone?: boolean;
}

/**
 * SplitFlapDigit: Realistic mechanical split flap card
 * Revolves from top to bottom around the X-axis with pronounced 3D depth.
 */
function SplitFlapDigit({ digit }: { digit: string }) {
  const [curr, setCurr] = useState(digit);
  const [prev, setPrev] = useState(digit);
  const [isFlipping, setIsFlipping] = useState(false);
  const animKeyRef = useRef(0);

  useEffect(() => {
    if (digit !== curr) {
      setPrev(curr);
      setCurr(digit);
      setIsFlipping(true);
      animKeyRef.current += 1;

      const timer = setTimeout(() => {
        setIsFlipping(false);
        setPrev(digit);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [digit, curr]);

  return (
    <div
      className="relative w-20 h-28 sm:w-32 sm:h-44 md:w-36 md:h-52 lg:w-44 lg:h-60 select-none"
      style={{
        perspective: "700px",
        WebkitPerspective: "700px",
      }}
    >
      {/* Outer Card Container */}
      <div
        className="relative w-full h-full rounded-xl sm:rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.42),0_12px_24px_rgba(0,0,0,0.25)] border border-[#383a39]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* ================= STATIC TOP (Shows NEW/CURR digit top half) ================= */}
        <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden rounded-t-xl sm:rounded-t-2xl bg-gradient-to-b from-[#2e312f] to-[#202221] border-b border-black/90 flex items-end justify-center">
          <span className="text-[72px] sm:text-[115px] md:text-[135px] lg:text-[160px] font-bold text-white leading-none translate-y-[50%] font-['Geist',sans-serif] tracking-tight">
            {curr}
          </span>
          <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-black/30 pointer-events-none" />
        </div>

        {/* ================= STATIC BOTTOM (Shows OLD/PREV digit bottom half) ================= */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden rounded-b-xl sm:rounded-b-2xl bg-gradient-to-b from-[#1c1e1d] to-[#121413] flex items-start justify-center">
          <span className="text-[72px] sm:text-[115px] md:text-[135px] lg:text-[160px] font-bold text-white leading-none -translate-y-[50%] font-['Geist',sans-serif] tracking-tight">
            {isFlipping ? prev : curr}
          </span>
          {/* Dynamic dark shadow cast on the static bottom when top flap flips down */}
          <div
            className={`absolute inset-0 bg-black pointer-events-none transition-opacity duration-300 ${
              isFlipping ? "opacity-60" : "opacity-0"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* ================= ANIMATED FLAPS (PROMINENT 3D FLIP OVER X-AXIS) ================= */}
        {isFlipping && (
          <div key={`flap-${animKeyRef.current}`} className="absolute inset-0 pointer-events-none">
            {/* Top Flap (flips down from 0deg to -90deg) */}
            <div
              className="absolute top-0 left-0 w-full h-1/2 overflow-hidden rounded-t-xl sm:rounded-t-2xl bg-gradient-to-b from-[#333634] to-[#202221] border-b border-black flex items-end justify-center z-30"
              style={{
                transformOrigin: "center bottom",
                animation: "flapFoldTop 0.26s cubic-bezier(0.4, 0, 0.7, 1) forwards",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                willChange: "transform",
                boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
              }}
            >
              <span className="text-[72px] sm:text-[115px] md:text-[135px] lg:text-[160px] font-bold text-white leading-none translate-y-[50%] font-['Geist',sans-serif] tracking-tight">
                {prev}
              </span>
              {/* Dynamic darkening shadow on fold */}
              <div
                className="absolute inset-0 bg-black pointer-events-none"
                style={{
                  animation: "flapShadowTop 0.26s cubic-bezier(0.4, 0, 0.7, 1) forwards",
                }}
              />
            </div>

            {/* Bottom Flap (drops in from 90deg to 0deg with tactile snap) */}
            <div
              className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden rounded-b-xl sm:rounded-b-2xl bg-gradient-to-b from-[#1e201f] to-[#121413] flex items-start justify-center z-40"
              style={{
                transformOrigin: "center top",
                transform: "rotateX(90deg)",
                animation: "flapUnfoldBottom 0.28s 0.25s cubic-bezier(0.18, 0.89, 0.32, 1.15) forwards",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                willChange: "transform",
                boxShadow: "0 15px 30px rgba(0,0,0,0.6)",
              }}
            >
              <span className="text-[72px] sm:text-[115px] md:text-[135px] lg:text-[160px] font-bold text-white leading-none -translate-y-[50%] font-['Geist',sans-serif] tracking-tight">
                {curr}
              </span>
              {/* Dynamic shadow uncovering on unfold */}
              <div
                className="absolute inset-0 bg-black pointer-events-none"
                style={{
                  animation: "flapShadowBottom 0.28s 0.25s cubic-bezier(0.18, 0.89, 0.32, 1.15) forwards",
                }}
              />
            </div>
          </div>
        )}

        {/* Middle split horizontal crease line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2.5px] -translate-y-1/2 bg-[#090b0a] z-50 shadow-[0_2px_4px_rgba(0,0,0,0.95)]" />

        {/* Left and Right mechanical hinge notches */}
        <div className="absolute top-1/2 -left-1.5 w-3 h-3 -translate-y-1/2 bg-[#F5F4F3] rounded-full border border-black/40 z-50 shadow-inner" />
        <div className="absolute top-1/2 -right-1.5 w-3 h-3 -translate-y-1/2 bg-[#F5F4F3] rounded-full border border-black/40 z-50 shadow-inner" />
      </div>
    </div>
  );
}

export default function LaunchCountdown({
  children,
  targetDate,
  standalone = false,
}: LaunchCountdownProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [previewBypassed, setPreviewBypassed] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);
  const [showAdminControls, setShowAdminControls] = useState(false);
  const [customTarget, setCustomTarget] = useState<number | null>(null);

  // Compute launch target: today at 10:00 AM if still upcoming, otherwise tomorrow at 10:00 AM
  const launchTimestamp = useMemo(() => {
    if (customTarget !== null) return customTarget;
    if (targetDate) return new Date(targetDate).getTime();

    const now = new Date();
    const target = new Date(now);
    target.setHours(10, 0, 0, 0);

    // If 10:00 AM today hasn't passed yet, target today 10:00 AM.
    // If it has already passed, target tomorrow 10:00 AM.
    if (now.getTime() >= target.getTime()) {
      target.setDate(target.getDate() + 1);
    }

    return target.getTime();
  }, [targetDate, customTarget]);

  // Initial calculation of time left
  const calculateTimeLeft = (): TimeLeft => {
    const now = Date.now();
    const diff = Math.max(0, launchTimestamp - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds, totalMs: diff };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalMs: 1,
  });

  const [isLaunched, setIsLaunched] = useState(false);

  useEffect(() => {
    setMounted(true);
    const initial = calculateTimeLeft();
    setTimeLeft(initial);
    if (initial.totalMs <= 0) {
      setIsLaunched(true);
    }

    const interval = setInterval(() => {
      const remaining = calculateTimeLeft();
      setTimeLeft(remaining);

      if (remaining.totalMs <= 0 && !isLaunched) {
        setIsRevealing(true);
        setTimeout(() => {
          setIsLaunched(true);
          setIsRevealing(false);
        }, 1000);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [launchTimestamp, isLaunched]);

  // Ensure all videos (including Hero edge-to-edge video) play immediately upon launch
  useEffect(() => {
    if (isLaunched || previewBypassed) {
      const videos = document.querySelectorAll<HTMLVideoElement>("video");
      videos.forEach((vid) => {
        vid.play().catch(() => {});
      });
    }
  }, [isLaunched, previewBypassed]);

  // Format second digits for the flap cards
  const secondsString = String(timeLeft.seconds).padStart(2, "0");
  const secondTens = secondsString[0];
  const secondUnits = secondsString[1];

  // Skip countdown on admin or login routes if used as root wrapper
  const isExcludedRoute =
    pathname?.startsWith("/admin") ||
    pathname?.startsWith("/login") ||
    pathname?.startsWith("/api");

  const countdownOverlay = (
    <div
      className={`fixed inset-0 z-50 bg-[#F5F4F3] text-[#242424] font-body flex flex-col justify-between items-center overflow-y-auto overflow-x-hidden transition-all duration-1000 ${
        isRevealing ? "opacity-0 scale-95 filter blur-sm pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Keyframe styles for split flap 3D revolving animation */}
      <style>{`
        @keyframes flapFoldTop {
          0% {
            transform: rotateX(0deg);
          }
          100% {
            transform: rotateX(-90deg);
          }
        }
        @keyframes flapUnfoldBottom {
          0% {
            transform: rotateX(90deg);
          }
          85% {
            transform: rotateX(-4deg);
          }
          100% {
            transform: rotateX(0deg);
          }
        }
        @keyframes flapShadowTop {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 0.8;
          }
        }
        @keyframes flapShadowBottom {
          0% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>

      {/* ================= HEADER ================= */}
      <header className="w-full max-w-7xl mx-auto px-6 sm:px-12 pt-6 sm:pt-10 flex items-center justify-between z-20 shrink-0">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center group focus:outline-none"
          aria-label="Slay Home"
        >
          <Image
            src="/Logosmall.svg"
            alt="Slay Logo"
            width={52}
            height={45}
            className="h-9 sm:h-11 w-auto object-contain transition-transform duration-200"
            priority
          />
        </Link>

        {/* Contact Info */}
        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-[#242424]/90 tracking-wide">
          <a
            href="tel:+919036383777"
            className="hover:text-[#536757] transition-colors"
          >
            +91 90363 83777
          </a>
          <span className="text-[#242424]/40 font-light">/</span>
          <a
            href="mailto:hello@slaystrategy.com"
            className="hover:text-[#536757] transition-colors"
          >
            hello@slaystrategy.com
          </a>
        </div>
      </header>

      {/* ================= MAIN HERO COUNTDOWN STAGE (DEAD CENTER) ================= */}
      <main className="relative w-full max-w-6xl mx-auto px-4 sm:px-8 py-6 my-auto flex-1 flex flex-col items-center justify-center text-center z-10">
        
        {/* TOP MINI TIME: DAYS : HOUR : MIN */}
        <div className="flex flex-col items-center mb-5 sm:mb-7">
          <div className="flex items-center gap-3 sm:gap-5 text-3xl sm:text-5xl md:text-6xl font-bold text-[#242424] font-['Geist',sans-serif] tracking-tight">
            <span>{String(timeLeft.days).padStart(2, "0")}</span>
            <span className="text-[#242424]/30 -translate-y-0.5">:</span>
            <span>{String(timeLeft.hours).padStart(2, "0")}</span>
            <span className="text-[#242424]/30 -translate-y-0.5">:</span>
            <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
          </div>

          {/* Labels underneath */}
          <div className="flex items-center justify-between w-full max-w-[260px] sm:max-w-[340px] md:max-w-[400px] mt-1.5 px-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium text-[#242424]/50">
            <span className="w-12 text-center">Days</span>
            <span className="w-12 text-center">Hour</span>
            <span className="w-12 text-center">Min</span>
          </div>
        </div>

        {/* ================= CENTER STAGE: WATERMARK & 3D SPLIT-FLAP SECONDS ================= */}
        <div className="relative w-full flex items-center justify-center my-3 sm:my-5">
          
          {/* GIANT WATERMARK TEXT BEHIND: "COMING SOON" (Horizontally Centered) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none w-full">
            <div className="text-[44px] sm:text-[80px] md:text-[115px] lg:text-[145px] xl:text-[170px] font-black tracking-tight text-[#E7E4E0] uppercase font-['Geist',sans-serif] leading-none whitespace-nowrap text-center">
              COMING SOON
            </div>
          </div>

          {/* CENTER 3D SPLIT-FLAP SECONDS CARDS */}
          <div className="relative z-10 flex items-center gap-2.5 sm:gap-4 md:gap-5">
            <SplitFlapDigit digit={secondTens} />
            <SplitFlapDigit digit={secondUnits} />
          </div>
        </div>

        {/* SECONDS LABEL */}
        <div className="mt-4 sm:mt-6 text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.35em] uppercase text-[#242424]/60">
          S E C O N D S
        </div>

        {/* ================= BOTTOM COPY ================= */}
        <div className="mt-8 sm:mt-10 max-w-lg mx-auto flex flex-col items-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#242424] font-['Fraunces',serif]">
            We&apos;re coming soon...
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#242424]/60 max-w-md font-normal leading-relaxed">
            We are putting the final touches on our new digital experience. Slay Agency officially goes live {timeLeft.days > 0 ? "tomorrow morning" : "today"} at <strong className="text-[#242424] font-semibold">10:00 AM</strong>.
          </p>
        </div>
      </main>

      {/* ================= FOOTER / COPYRIGHT ================= */}
      <footer className="w-full max-w-7xl mx-auto px-6 sm:px-12 pb-6 sm:pb-8 flex items-center justify-between text-xs text-[#242424]/40 z-20 shrink-0">
        <div>© {new Date().getFullYear()} Slay Agency. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/slaythestrategy.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#242424] transition-colors"
          >
            Instagram
          </a>
          <span>·</span>
          <a
            href="https://www.facebook.com/profile.php?id=61586631632667"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#242424] transition-colors"
          >
            Facebook
          </a>
        </div>
      </footer>

      {/* Developer / Preview Floating Controls (Bottom-Left) */}
      {!standalone && (
        <div className="fixed bottom-4 left-4 z-[99999]">
          {!showAdminControls ? (
            <button
              onClick={() => setShowAdminControls(true)}
              className="px-3 py-1.5 rounded-full bg-[#242424]/80 hover:bg-[#242424] text-white text-[11px] font-medium shadow-md transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>⚙️</span>
              <span>Test / Preview</span>
            </button>
          ) : (
            <div className="p-3.5 rounded-2xl bg-[#242424] text-white border border-white/10 shadow-2xl flex flex-col gap-2.5 text-xs max-w-xs animate-fadeIn">
              <div className="flex items-center justify-between font-semibold text-white/90 pb-1 border-b border-white/10">
                <span>Countdown Controls</span>
                <button
                  onClick={() => setShowAdminControls(false)}
                  className="text-white/50 hover:text-white cursor-pointer text-sm"
                >
                  ✕
                </button>
              </div>

              <p className="text-[11px] text-white/60">
                Test the 3D flap animation or reveal the full website instantly.
              </p>

              <div className="flex flex-col gap-1.5 pt-1">
                <button
                  onClick={() => {
                    setIsRevealing(true);
                    setTimeout(() => {
                      setIsLaunched(true);
                      setPreviewBypassed(true);
                      setIsRevealing(false);
                    }, 800);
                  }}
                  className="w-full px-3 py-2 rounded-lg bg-[#536757] hover:bg-[#445647] text-white font-medium text-xs transition cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>🚀</span>
                  <span>Simulate 10:00 AM Launch</span>
                </button>

                <button
                  onClick={() => setPreviewBypassed(true)}
                  className="w-full px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white/90 text-xs transition cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>👁️</span>
                  <span>Bypass / View Live Website</span>
                </button>

                <button
                  onClick={() => {
                    setCustomTarget(Date.now() + 10000);
                    setIsLaunched(false);
                    setPreviewBypassed(false);
                  }}
                  className="w-full px-3 py-1.5 rounded-lg bg-[#536757]/30 hover:bg-[#536757]/50 text-[#a3c4ab] text-xs transition cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>⏱️</span>
                  <span>Set 10-Second Test Timer</span>
                </button>

                <button
                  onClick={() => {
                    setCustomTarget(null);
                    setIsLaunched(false);
                    setPreviewBypassed(false);
                  }}
                  className="w-full px-3 py-1 text-[10px] text-white/40 hover:text-white/70 transition cursor-pointer text-center"
                >
                  Reset to 10:00 AM Target
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );

  // If standalone countdown page, return the overlay directly
  if (standalone) {
    return countdownOverlay;
  }

  // If excluded route (admin, login, api), render children without countdown
  if (isExcludedRoute) {
    return <>{children}</>;
  }

  // If already launched and not in test preview bypass, render children directly
  if (mounted && isLaunched && !previewBypassed) {
    return <>{children}</>;
  }

  // Otherwise (before launch or previewing), render children in background DOM so hero video & assets preload with zero lazy delays
  return (
    <>
      <div
        className={`w-full ${
          !isLaunched && !previewBypassed ? "pointer-events-none select-none" : ""
        }`}
        aria-hidden={!isLaunched && !previewBypassed}
      >
        {children}
      </div>

      {previewBypassed && !isLaunched && (
        <div className="fixed top-3 right-3 z-[99999] bg-[#242424] text-white text-xs font-medium py-1.5 px-3.5 rounded-full border border-white/20 shadow-xl flex items-center gap-2.5 transition-all">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Preview Mode (Countdown Active)</span>
          <button
            onClick={() => setPreviewBypassed(false)}
            className="text-[#a3c4ab] underline hover:text-white ml-1 cursor-pointer font-semibold"
          >
            Return to Countdown
          </button>
        </div>
      )}

      {(!isLaunched || isRevealing) && !previewBypassed && countdownOverlay}
    </>
  );
}
