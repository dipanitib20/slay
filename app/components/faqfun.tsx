"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

export interface FAQItem {
  question: string;
  answer: string;
  shortLabel?: string;
  tags?: string;
  color?: string;
}

export interface FAQProps {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
  subDescription?: string;
}

const defaultFAQItems: FAQItem[] = [
  {
    question: "The Conversation",
    shortLabel: "The Conversation",
    tags: "DISCOVERY • ALIGNMENT • FIT ASSESSMENT",
    answer:
      "We start with a call, not a pitch deck. Where the brand is now, what is not working, and what success actually looks like in numbers. If we are not the right fit, we will tell you on that call.",
  },
  {
    question: "Audit and Strategy",
    shortLabel: "Audit & Strategy",
    tags: "AUDIENCE • COMPETITORS • POSITIONING",
    answer:
      "We go through your existing presence, your competitors and your audience, then build the strategy. Positioning, content pillars, platform plan and what we are measuring. You approve it before anything gets made.",
  },
  {
    question: "The Build",
    shortLabel: "The Build",
    tags: "CONTENT CALENDAR • CREATIVE DIRECTION • SCRIPTS",
    answer:
      "Content calendar, scripts, shoot plans, creative direction and design. This is where the brand world gets built. The first calendar reaches you before the month starts, never mid month.",
  },
  {
    question: "Execution",
    shortLabel: "Execution",
    tags: "PRODUCTION • SCHEDULING • COMMUNITY",
    answer:
      "We shoot, edit, write, schedule, post and handle the comments and DMs. Consistent, on brand and on time. You stay in the loop without having to chase anyone for an update.",
  },
  {
    question: "Report and Sharpen",
    shortLabel: "Report & Sharpen",
    tags: "MONTHLY REPORTING • ANALYTICS • REFINEMENT",
    answer:
      "Monthly reporting on what performed and what did not, and a strategy adjustment based on it. No agency should be running month six the same way it ran month one.",
  },
];

const INITIAL_INDEX = 0;
const STEP_COOLDOWN = 280; // ms — snappy, tactile wheel response

export default function FAQFun({
  items = defaultFAQItems,
  title = "How we actually work",
  subtitle = "PROCESS",
  subDescription = "Five steps. No mystery, no jargon, no six week onboarding before anything gets made.",
}: FAQProps = {}) {
  const faqList = items && items.length > 0 ? items : defaultFAQItems;
  const [activeIndex, setActiveIndex] = useState(INITIAL_INDEX);
  const [isPinned, setIsPinned] = useState(false);

  // Mobile horizontal slide state
  const [mobileIndex, setMobileIndex] = useState(0);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const handleMobilePrev = () => {
    setMobileIndex((prev) => Math.max(0, prev - 1));
  };

  const handleMobileNext = () => {
    setMobileIndex((prev) => Math.min(faqList.length - 1, prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const deltaX = touchStartXRef.current - e.changedTouches[0].clientX;
    const deltaY = touchStartYRef.current - e.changedTouches[0].clientY;

    // Only swipe if horizontal motion is dominant
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 35) {
      if (deltaX > 0) {
        handleMobileNext();
      } else {
        handleMobilePrev();
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  const wrapperRef = useRef<HTMLDivElement>(null); // Stays in document flow as spacer
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(1200);

  const activeIndexRef = useRef(INITIAL_INDEX);
  const isPinnedRef = useRef(false);
  const lastScrollYRef = useRef(0);
  const enterDirectionRef = useRef<"down" | "up">("down");
  const lastReleaseTimeRef = useRef(0);
  const isFirstEntryRef = useRef(true);
  const exitDirectionRef = useRef<"down" | "up" | null>(null);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    isPinnedRef.current = isPinned;
  }, [isPinned]);

  // Cleanup overflow scroll lock on unmount
  useEffect(() => {
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  // Measure container width for responsive arc curvature
  useEffect(() => {
    if (!containerRef.current) return;
    const updateSize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const pinScrollYRef = useRef(0);
  const isStepLockedRef = useRef(false);
  const resetDeltaTimerRef = useRef<NodeJS.Timeout | null>(null);

  const releasePin = useCallback((direction: "down" | "up") => {
    isPinnedRef.current = false;
    setIsPinned(false);
    exitDirectionRef.current = direction;
    lastReleaseTimeRef.current = Date.now();

    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";

    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const currentY = window.scrollY;

    if (direction === "down") {
      const targetY = currentY + rect.bottom;
      window.scrollTo({ top: targetY, behavior: "instant" });
    } else {
      const targetY = currentY + rect.top - window.innerHeight;
      window.scrollTo({ top: Math.max(0, targetY), behavior: "instant" });
    }
  }, []);

  // Wheel listener: Single notch per question step with locked scroll
  useEffect(() => {
    let accumulatedDelta = 0;
    const DELTA_THRESHOLD = 30;

    const handleWheel = (e: WheelEvent) => {
      if (!isPinnedRef.current) return;

      e.preventDefault();
      e.stopPropagation();

      accumulatedDelta += e.deltaY;

      if (resetDeltaTimerRef.current) clearTimeout(resetDeltaTimerRef.current);
      resetDeltaTimerRef.current = setTimeout(() => {
        accumulatedDelta = 0;
      }, 200);

      if (isStepLockedRef.current) return;

      if (accumulatedDelta > DELTA_THRESHOLD) {
        accumulatedDelta = 0;
        if (activeIndexRef.current < faqList.length - 1) {
          isStepLockedRef.current = true;
          setActiveIndex((i) => i + 1);
          setTimeout(() => {
            isStepLockedRef.current = false;
          }, STEP_COOLDOWN);
        } else {
          releasePin("down");
        }
      } else if (accumulatedDelta < -DELTA_THRESHOLD) {
        accumulatedDelta = 0;
        if (activeIndexRef.current > 0) {
          isStepLockedRef.current = true;
          setActiveIndex((i) => i - 1);
          setTimeout(() => {
            isStepLockedRef.current = false;
          }, STEP_COOLDOWN);
        } else {
          releasePin("up");
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (resetDeltaTimerRef.current) clearTimeout(resetDeltaTimerRef.current);
    };
  }, [faqList.length, releasePin]);

  // Scroll listener: Detects entry to lock screen in place
  useEffect(() => {
    const handleScroll = () => {
      if (isPinnedRef.current) return;

      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollYRef.current;
      lastScrollYRef.current = currentScrollY;

      if (!wrapperRef.current) return;

      if (Date.now() - lastReleaseTimeRef.current < 450) {
        return;
      }

      const rect = wrapperRef.current.getBoundingClientRect();
      const targetPinY = currentScrollY + rect.top;

      if (scrollingDown && rect.top <= 0 && rect.bottom > window.innerHeight * 0.3) {
        enterDirectionRef.current = "down";
        pinScrollYRef.current = targetPinY;
        isPinnedRef.current = true;
        setIsPinned(true);

        if (exitDirectionRef.current === "up") {
          setActiveIndex(0);
        } else if (isFirstEntryRef.current) {
          setActiveIndex(0);
          isFirstEntryRef.current = false;
        }

        window.scrollTo({ top: targetPinY, behavior: "instant" });
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
      } else if (!scrollingDown && rect.bottom >= window.innerHeight && rect.top < window.innerHeight * 0.7) {
        enterDirectionRef.current = "up";
        pinScrollYRef.current = targetPinY;
        isPinnedRef.current = true;
        setIsPinned(true);

        if (exitDirectionRef.current === "down") {
          setActiveIndex(faqList.length - 1);
        }

        window.scrollTo({ top: targetPinY, behavior: "instant" });
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [faqList.length]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (isStepLockedRef.current) return;

      if (
        e.key === "ArrowRight" ||
        e.key === "ArrowDown" ||
        e.key === "PageDown" ||
        e.key === " "
      ) {
        e.preventDefault();
        if (activeIndexRef.current < faqList.length - 1) {
          isStepLockedRef.current = true;
          setActiveIndex((i) => i + 1);
          setTimeout(() => {
            isStepLockedRef.current = false;
          }, 360);
        } else {
          releasePin("down");
        }
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        if (activeIndexRef.current > 0) {
          isStepLockedRef.current = true;
          setActiveIndex((i) => i - 1);
          setTimeout(() => {
            isStepLockedRef.current = false;
          }, 360);
        } else {
          releasePin("up");
        }
      }
    },
    [faqList.length, releasePin]
  );

  // Arc Geometry parameters:
  const radius = Math.min(Math.max(containerWidth * 0.65, 750), 920);
  const apexY = 195; // Positioned below header
  const centerY = apexY + radius;
  const centerX = containerWidth / 2;

  // Clockwise arc progression on scroll down:
  const getSlotAngle = (idx: number, active: number): { angle: number; isVisible: boolean; opacity: number } => {
    const diff = active - idx;
    const clampedDiff = Math.max(Math.min(diff, 3.5), -3.5);
    const angle = clampedDiff * 26;
    const isVisible = Math.abs(diff) <= 2;

    let opacity = 0;
    if (diff === 0) opacity = 1;
    else if (Math.abs(diff) === 1) opacity = 1;
    else if (Math.abs(diff) === 2) opacity = 0.85;
    else opacity = 0;

    return { angle, isVisible, opacity };
  };

  return (
    <section className="relative w-full bg-[#F5F4F3] mt-4 sm:mt-16 lg:my-40 mb-10 sm:mb-20 select-none no-scroll-animate">
      {/* ── DESKTOP FIXED PINNED CONTAINER (≥1024px) ── */}
      <div
        ref={wrapperRef}
        className="hidden lg:block relative w-full h-screen"
      >
        <div
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className={`w-full h-screen overflow-hidden px-4 sm:px-8 md:px-12 bg-[#F5F4F3] focus:outline-none z-30 ${
            isPinned ? "fixed inset-0" : "sticky top-0"
          }`}
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
          }}
        >
          <div className="max-w-7xl mx-auto w-full h-full relative flex flex-col justify-between">
            {/* Top Section Header */}
            <div className="relative max-w-3xl mx-auto text-center pt-6 xl:pt-10 mb-2 select-none z-30 pointer-events-none">
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight leading-[1.12]">
                <span className="text-[#9BA59D]">How we </span>
                <span className="text-[#536757]">actually work</span>
              </h2>
              <p className="font-subheading text-neutral-500 max-w-xl mx-auto text-xs sm:text-sm md:text-[15px] leading-relaxed mt-2.5">
                {subDescription}
              </p>
            </div>

            {/* ── CIRCULAR ARC LAYOUT ── */}
            <div
              ref={containerRef}
              className="relative w-full h-full focus:outline-none"
            >
              {/* SVG Arc Guide Track & Subtle Dome Backdrop */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="faqArcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#536757" stopOpacity="0.04" />
                    <stop offset="15%" stopColor="#536757" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#536757" stopOpacity="0.55" />
                    <stop offset="85%" stopColor="#536757" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#536757" stopOpacity="0.04" />
                  </linearGradient>
                  <radialGradient id="faqDomeGlow" cx="50%" cy="20%" r="65%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
                    <stop offset="60%" stopColor="#F5F4F3" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#F5F4F3" stopOpacity="0" />
                  </radialGradient>
                </defs>
                {(() => {
                  const startRad = (-65 * Math.PI) / 180;
                  const endRad = (65 * Math.PI) / 180;
                  const x1 = centerX + radius * Math.sin(startRad);
                  const y1 = centerY - radius * Math.cos(startRad);
                  const x2 = centerX + radius * Math.sin(endRad);
                  const y2 = centerY - radius * Math.cos(endRad);
                  const pathData = `M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`;
                  const fillData = `M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} L ${x2} ${centerY} L ${x1} ${centerY} Z`;

                  return (
                    <>
                      <path d={fillData} fill="url(#faqDomeGlow)" />
                      <path
                        d={pathData}
                        fill="none"
                        stroke="#000000"
                        strokeOpacity="0.04"
                        strokeWidth="4"
                      />
                      <path
                        d={pathData}
                        fill="none"
                        stroke="url(#faqArcGradient)"
                        strokeWidth="2.5"
                      />
                    </>
                  );
                })()}
              </svg>

              {/* Arc Step Pills positioned cleanly along the curve */}
              {faqList.map((faq, idx) => {
                const isActive = idx === activeIndex;
                const { angle: angleDeg, isVisible, opacity } = getSlotAngle(idx, activeIndex);
                const angleRad = (angleDeg * Math.PI) / 180;

                const x = centerX + radius * Math.sin(angleRad);
                const y = centerY - radius * Math.cos(angleRad);

                if (isActive) {
                  return (
                    <div
                      key={idx}
                      className="absolute z-30 transition-all duration-300 ease-out motion-reduce:transition-none select-none flex items-center justify-center"
                      style={{
                        left: `${x}px`,
                        top: `${y}px`,
                        transform: "translate(-50%, -50%)",
                        opacity: 1,
                      }}
                    >
                      {/* Active Pill centered exactly on the arc line */}
                      <div className="bg-[#536757] text-white font-medium text-sm lg:text-[15px] px-5 py-2.5 rounded-2xl shadow-[0_12px_28px_rgba(83,103,87,0.32)] border border-white/20 flex items-center gap-2.5 whitespace-nowrap">
                        <span className="font-bold text-xs bg-white/20 px-2 py-0.5 rounded-md">
                          0{idx + 1}
                        </span>
                        <span>{faq.shortLabel || faq.question}</span>
                      </div>
                    </div>
                  );
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-pressed={isActive}
                    aria-label={faq.question}
                    className="absolute z-20 transition-all duration-300 ease-out motion-reduce:transition-none select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#536757] focus-visible:ring-offset-2 bg-white/95 hover:bg-white text-[#242424]/80 hover:text-[#536757] font-medium text-xs lg:text-sm px-4 py-2 rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(83,103,87,0.18)] border border-neutral-200/80 hover:border-[#536757]/40 flex items-center gap-2"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: "translate(-50%, -50%)",
                      opacity: opacity,
                      pointerEvents: isVisible ? "auto" : "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span className="font-bold text-xs bg-neutral-100 text-neutral-500 px-1.5 py-0.5 rounded">
                      0{idx + 1}
                    </span>
                    <span>{faq.shortLabel || faq.question}</span>
                  </button>
                );
              })}

              {/* Center Card / Step Display Panel */}
              <div className="absolute top-[280px] xl:top-[295px] inset-x-0 mx-auto max-w-2xl px-6 flex flex-col items-center text-center z-30 pointer-events-auto">
                {/* Main Step Title in Serif */}
                <div
                  key={`title-${activeIndex}`}
                  className="transition-all duration-300 ease-out animate-fadeIn"
                >
                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-[34px] text-[#242424] font-medium tracking-tight leading-[1.25]">
                    0{activeIndex + 1} {faqList[activeIndex]?.question}
                  </h3>
                </div>

                {/* Answer body text */}
                <div
                  key={`answer-${activeIndex}`}
                  className="min-h-[75px] flex items-center justify-center mt-3.5 transition-all duration-300 ease-out animate-fadeIn"
                >
                  <p className="font-body text-sm lg:text-base text-[#242424]/75 leading-relaxed max-w-xl mx-auto font-normal">
                    {faqList[activeIndex]?.answer}
                  </p>
                </div>

                {/* Dashed divider */}
                <div className="w-full max-w-md mx-auto my-3.5 border-t border-dashed border-[#242424]/15" />

                {/* Sub-tags in tracked uppercase */}
                <div
                  key={`tags-${activeIndex}`}
                  className="transition-all duration-300 ease-out animate-fadeIn"
                >
                  <p className="font-body text-[11px] tracking-widest text-[#536757] font-semibold uppercase">
                    {faqList[activeIndex]?.tags}
                  </p>
                </div>

                {/* CTA Action Button */}
                <Link
                  href="/Contact"
                  className="cta-btn mt-4 inline-flex items-center justify-center px-7 py-2.5 rounded-full text-white font-medium text-xs lg:text-sm shadow-[0_4px_16px_rgba(83,103,87,0.22)] hover:shadow-[0_6px_22px_rgba(83,103,87,0.32)] cursor-pointer"
                >
                  Start your project
                </Link>

                {/* Counter & 5 Progress Navigation Dots */}
                <div className="mt-4 flex flex-col items-center gap-1.5">
                  <span className="font-body text-[10px] font-semibold text-neutral-400 tracking-widest uppercase">
                    0{activeIndex + 1} / 0{faqList.length}
                  </span>
                  <div
                    className="flex items-center gap-2"
                    role="tablist"
                    aria-label="Process step progress"
                  >
                    {faqList.map((item, idx) => {
                      const isCurrent = idx === activeIndex;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveIndex(idx)}
                          aria-label={`Go to step ${idx + 1}: ${item.question}`}
                          aria-selected={isCurrent}
                          role="tab"
                          className={`h-2 transition-all duration-300 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#536757] focus-visible:ring-offset-1 ${
                            isCurrent
                              ? "w-7 bg-[#536757]"
                              : "w-2 bg-[#536757]/25 hover:bg-[#536757]/50"
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── HORIZONTAL STEP SLIDER: Mobile (<1024px) ── */}
      <div className="block lg:hidden relative z-20 w-full pt-8 pb-4 sm:pt-12 sm:pb-6 px-4 sm:px-8 flex flex-col items-center select-none overflow-hidden">
        {/* Section Heading */}
        <h2 className="font-heading text-4xl sm:text-5xl uppercase tracking-tight text-center max-w-xs sm:max-w-sm mx-auto leading-tight">
          <span className="text-[#9BA59D]">How we </span>
          <span className="text-[#536757]">actually work</span>
        </h2>

        {/* Subheading */}
        <p className="font-subheading text-neutral-500 max-w-sm sm:max-w-md mx-auto text-xs sm:text-sm leading-relaxed text-center mt-2.5 mb-2">
          {subDescription}
        </p>

        {/* Step Eyebrow + Straight Horizontal Line with Sliding Number Badge */}
        <div className="w-full flex flex-col items-center mt-9 mb-7">
          <span className="text-[11px] font-bold tracking-[0.22em] text-[#536757]/80 uppercase mb-3">
            STEP
          </span>

          <div className="relative w-full flex items-center justify-center">
            {/* Straight Horizontal Guide Line */}
            <div className="absolute inset-x-0 top-1/2 h-[1px] bg-neutral-300/80 -translate-y-1/2" />

            {/* Step Badge with internal horizontal sliding numbers */}
            <div className="relative z-10 w-12 h-12 rounded-[14px] bg-[#536757] text-white font-bold text-lg flex items-center justify-center shadow-[0_6px_18px_rgba(83,103,87,0.35)] overflow-hidden">
              <div
                className="flex w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
              >
                {faqList.map((_, idx) => (
                  <span
                    key={idx}
                    className="w-full h-full shrink-0 flex items-center justify-center text-center"
                  >
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slide Content Viewport (Continuous Carousel Track) */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="w-full max-w-lg mx-auto overflow-hidden py-2"
        >
          <div
            className="flex w-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
            style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
          >
            {faqList.map((item, idx) => {
              const isCurrent = idx === mobileIndex;
              return (
                <div
                  key={idx}
                  className="w-full shrink-0 flex flex-col items-center text-center px-4 sm:px-6"
                  style={{
                    opacity: isCurrent ? 1 : 0.15,
                    transform: isCurrent ? "scale(1)" : "scale(0.95)",
                    filter: isCurrent ? "blur(0px)" : "blur(1.5px)",
                    transition:
                      "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease, filter 0.5s ease",
                  }}
                >
                  {/* Title */}
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#242424] tracking-tight">
                    0{idx + 1} {item.question}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm sm:text-[15px] text-[#242424]/75 font-normal leading-relaxed mt-2.5 max-w-xs sm:max-w-sm">
                    {item.answer}
                  </p>

                  {/* Dotted border tags */}
                  {item.tags && (
                    <div className="w-full max-w-xs sm:max-w-sm border-y border-dotted border-neutral-300/90 py-3.5 my-5">
                      <p className="font-subheading text-[10.5px] sm:text-xs tracking-[0.18em] text-[#536757] font-semibold uppercase">
                        {item.tags}
                      </p>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Link
                    href="/Contact"
                    className="cta-btn inline-flex items-center justify-center px-8 py-3.5 rounded-2xl text-white font-semibold text-sm shadow-[0_4px_16px_rgba(83,103,87,0.25)] active:scale-95 cursor-pointer"
                  >
                    Start your project
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Counter (Sliding Number Display) */}
        <div className="mt-7 text-[11px] font-bold text-neutral-400 tracking-[0.2em] h-4 overflow-hidden flex items-center justify-center">
          <div
            className="flex flex-col items-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateY(-${mobileIndex * 16}px)` }}
          >
            {faqList.map((_, idx) => (
              <span
                key={idx}
                className="h-4 flex items-center justify-center leading-none"
              >
                {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}/
                {faqList.length < 10 ? `0${faqList.length}` : faqList.length}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow Controls */}
        <div className="flex items-center gap-3 mt-3.5">
          <button
            type="button"
            onClick={handleMobilePrev}
            disabled={mobileIndex === 0}
            className="w-10 h-10 rounded-xl bg-white border border-neutral-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center text-neutral-700 hover:text-[#536757] hover:border-[#536757]/40 disabled:opacity-30 disabled:cursor-not-allowed active:scale-90 transition-all cursor-pointer"
            aria-label="Previous step"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleMobileNext}
            disabled={mobileIndex === faqList.length - 1}
            className="w-10 h-10 rounded-xl bg-white border border-neutral-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center text-neutral-700 hover:text-[#536757] hover:border-[#536757]/40 disabled:opacity-30 disabled:cursor-not-allowed active:scale-90 transition-all cursor-pointer"
            aria-label="Next step"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
