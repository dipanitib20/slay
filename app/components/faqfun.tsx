"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

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
}

/* ── Mobile FAQ Pill: stacked layout, smooth accordion ── */
function MobileFAQPill({
  question,
  answer,
  color = "bg-[#536757]",
}: {
  question: string;
  answer: string;
  color?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${color} text-white rounded-[22px] px-6 py-4.5 shadow-[0_8px_24px_rgba(83,103,87,0.2)] cursor-pointer w-full select-none transition-all duration-200 border border-white/10`}
      onClick={() => setOpen(!open)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen(!open);
        }
      }}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-body text-white font-medium text-base leading-snug">
          {question}
        </span>
        <div
          className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0 bg-white/10"
          style={{
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <svg
            className="w-3.5 h-3.5 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </div>
      <div
        style={{
          maxHeight: open ? "260px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="border-t border-white/15 mt-3 pt-3">
          <p className="text-sm text-white/85 leading-relaxed font-body">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

const defaultFAQItems: FAQItem[] = [
  {
    question: "What services do you offer?",
    shortLabel: "Services",
    tags: "BRAND STRATEGY • UI/UX DESIGN • WEB DEVELOPMENT",
    answer:
      "We provide end-to-end digital solutions including brand strategy, custom UI/UX design, Next.js & React web development, e-commerce, and high-growth performance marketing.",
  },
  {
    question: "How long does a project take?",
    shortLabel: "Timeline",
    tags: "2–6 WEEKS • CLEAR MILESTONES • TIMELY DELIVERY",
    answer:
      "Typical web design and development projects range between 2 to 6 weeks from discovery to deployment, depending on project scope and deliverables.",
  },
  {
    question: "What is your pricing structure?",
    shortLabel: "Pricing",
    tags: "PROJECT BASED • MONTHLY RETAINERS • TRANSPARENT",
    answer:
      "We offer tailored project-based quotes as well as flexible monthly retainer plans designed to fit your team's specific roadmap and growth targets.",
  },
  {
    question: "Do you work with startups?",
    shortLabel: "Startups",
    tags: "EARLY STAGE • SCALING • GLOBAL ENTERPRISES",
    answer:
      "Yes! We partner with ambitious early-stage startups as well as established global enterprises looking to scale their digital presence.",
  },
  {
    question: "Do you provide ongoing support?",
    shortLabel: "Support",
    tags: "MAINTENANCE • OPTIMIZATION • CONTINUOUS ITERATION",
    answer:
      "Yes, we offer post-launch maintenance, performance optimization, content updates, and continuous design support to ensure your website scales effortlessly.",
  },
  {
    question: "How do we get started?",
    shortLabel: "Kickoff",
    tags: "INTRO CALL • ROADMAP • 24–48H PROPOSAL",
    answer:
      "Simply reach out via our contact form or book a quick intro call. We will review your goals and deliver a detailed roadmap and estimate within 24-48 hours.",
  },
];

const TOTAL = 6;
const MIDDLE_INDEX = 2;
const STEP_COOLDOWN = 280; // ms — snappy, tactile wheel response

export default function FAQFun({ items = defaultFAQItems }: FAQProps = {}) {
  const faqList = items && items.length > 0 ? items : defaultFAQItems;
  const [activeIndex, setActiveIndex] = useState(MIDDLE_INDEX);
  const [isPinned, setIsPinned] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null); // Stays in document flow as spacer
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(1200);

  const activeIndexRef = useRef(MIDDLE_INDEX);
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

  // Smoothly lock pin position and absorb entry momentum
  const engagePin = useCallback(() => {
    isPinnedRef.current = true;
    setIsPinned(true);
    // Absorb landing momentum from entry flick so it doesn't accidentally advance the wheel
    isStepLockedRef.current = true;
    setTimeout(() => {
      isStepLockedRef.current = false;
    }, 380);

    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      const targetY = window.scrollY + rect.top;
      pinScrollYRef.current = targetY;
      window.scrollTo({ top: targetY, behavior: "instant" as ScrollBehavior });
    }
  }, []);

  // Release lock smoothly into adjacent sections without glitching or layout shifts
  const releasePin = useCallback((direction: "down" | "up") => {
    isPinnedRef.current = false;
    setIsPinned(false);
    lastReleaseTimeRef.current = Date.now();
    exitDirectionRef.current = direction;

    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      const currentY = window.scrollY;
      if (direction === "down") {
        // Smoothly glide into the section below
        const target = currentY + rect.bottom + 80;
        window.scrollTo({ top: target, behavior: "smooth" });
      } else {
        // Smoothly glide into the section above
        const target = Math.max(0, currentY + rect.top - window.innerHeight * 0.4);
        window.scrollTo({ top: target, behavior: "smooth" });
      }
    }
  }, []);

  // Check if FAQ section has entered viewport and engage pin
  const checkAndEngage = useCallback(() => {
    if (window.innerWidth < 1024) return;
    if (isPinnedRef.current) return;

    // 700ms cooldown after boundary release to let exit scroll complete smoothly
    if (Date.now() - lastReleaseTimeRef.current < 700) return;

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const rect = wrapper.getBoundingClientRect();
    const vh = window.innerHeight;

    // If user previously exited downwards (scrolled down past 6/6):
    if (exitDirectionRef.current === "down") {
      // If user scrolled all the way back above the FAQ section, clear exit direction
      if (rect.top > vh) {
        exitDirectionRef.current = null;
      } else {
        // Only re-pin if user reversed direction and is now scrolling UP back into FAQ
        const isReEnteringFromBelow =
          enterDirectionRef.current === "up" && rect.top <= 40 && rect.bottom >= vh * 0.7;
        if (isReEnteringFromBelow) {
          exitDirectionRef.current = null;
          setActiveIndex(faqList.length - 1); // Keep at 6/6
          engagePin();
        }
        return;
      }
    }

    // If user previously exited upwards (scrolled up past 1/6):
    if (exitDirectionRef.current === "up") {
      // If user scrolled all the way back below the FAQ section, clear exit direction
      if (rect.bottom < -50) {
        exitDirectionRef.current = null;
      } else {
        // Only re-pin if user reversed direction and is now scrolling DOWN back into FAQ
        const isReEnteringFromAbove =
          enterDirectionRef.current === "down" && rect.top <= 40 && rect.top >= -120;
        if (isReEnteringFromAbove) {
          exitDirectionRef.current = null;
          setActiveIndex(0); // Keep at 1/6
          engagePin();
        }
        return;
      }
    }

    // Standard entry:
    const enteringFromAbove = enterDirectionRef.current === "down";
    const isAligned = enteringFromAbove
      ? rect.top <= 40 && rect.top >= -120
      : rect.top <= 40 && rect.bottom >= vh * 0.7;

    if (isAligned) {
      if (isFirstEntryRef.current) {
        isFirstEntryRef.current = false;
        setActiveIndex(MIDDLE_INDEX);
      }
      engagePin();
    }
  }, [engagePin, faqList.length]);

  // Track scroll direction and check for engagement on scroll
  useEffect(() => {
    lastScrollYRef.current = window.scrollY;
    const onScroll = () => {
      if (isPinnedRef.current) {
        // While pinned, container is fixed inset-0.
        // Never call window.scrollTo in onScroll — fighting browser momentum causes 60Hz/120Hz vibration.
        return;
      }
      enterDirectionRef.current = window.scrollY >= lastScrollYRef.current ? "down" : "up";
      lastScrollYRef.current = window.scrollY;
      checkAndEngage();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [checkAndEngage]);

  // ---- Discrete stepping while pinned ----
  useEffect(() => {
    if (!isPinned || window.innerWidth < 1024) return;

    let accumulatedDelta = 0;

    const handleWheel = (e: WheelEvent) => {
      // Unconditionally prevent default window scroll while pinned
      e.preventDefault();

      // If currently animating or locked during a point-to-point transition, discard all momentum!
      if (isStepLockedRef.current) {
        return;
      }

      accumulatedDelta += e.deltaY;

      // Clear any pending pause-reset timer
      if (resetDeltaTimerRef.current) {
        clearTimeout(resetDeltaTimerRef.current);
      }
      // If user stops scrolling for 180ms without reaching threshold, reset accumulator
      resetDeltaTimerRef.current = setTimeout(() => {
        accumulatedDelta = 0;
      }, 180);

      // Reduced sensitivity: requires a deliberate, comfortable scroll gesture (65px)
      // This prevents accidental double-stepping on normal scrolls
      const THRESHOLD = 65;
      const STEP_LOCK_MS = 480; // Swallows full trackpad momentum deceleration curve

      if (accumulatedDelta >= THRESHOLD) {
        accumulatedDelta = 0;
        if (resetDeltaTimerRef.current) clearTimeout(resetDeltaTimerRef.current);

        if (activeIndexRef.current < faqList.length - 1) {
          isStepLockedRef.current = true;
          setActiveIndex((i) => i + 1);
          setTimeout(() => {
            isStepLockedRef.current = false;
          }, STEP_LOCK_MS);
        } else {
          releasePin("down");
        }
      } else if (accumulatedDelta <= -THRESHOLD) {
        accumulatedDelta = 0;
        if (resetDeltaTimerRef.current) clearTimeout(resetDeltaTimerRef.current);

        if (activeIndexRef.current > 0) {
          isStepLockedRef.current = true;
          setActiveIndex((i) => i - 1);
          setTimeout(() => {
            isStepLockedRef.current = false;
          }, STEP_LOCK_MS);
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
  }, [isPinned, releasePin, faqList.length]);

  // Keyboard navigation for cycling FAQs
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
  const apexY = 125; // Lowered top apex position for plenty of top clearance
  const centerY = apexY + radius;
  const centerX = containerWidth / 2;

  // Clockwise arc progression on scroll down:
  // When activeIndex increments (scrolling down), all pointers move in a CLOCKWISE direction (+angle)
  // Upcoming items arrive from the left (-angle), move up to apex (0°), and exit to the right (+angle)
  const getSlotAngle = (idx: number, active: number): { angle: number; isVisible: boolean; opacity: number } => {
    // diff = active - idx:
    // When active increases, diff increases for all items -> positive angle change -> CLOCKWISE rotation!
    const diff = active - idx;
    const clampedDiff = Math.max(Math.min(diff, 3.5), -3.5);
    const angle = clampedDiff * 26;
    const isVisible = Math.abs(diff) <= 2;

    let opacity = 0;
    if (diff === 0) opacity = 1;
    else if (Math.abs(diff) === 1) opacity = 1;
    else if (Math.abs(diff) === 2) opacity = 0.85;
    else opacity = 0; // Off-screen items fade smoothly to 0 and remain parked on their side

    return { angle, isVisible, opacity };
  };

  return (
    <section className="relative w-full bg-[#F5F4F3] select-none no-scroll-animate">
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
          <div className="max-w-7xl mx-auto w-full h-full relative">
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

              {/* 6 Arc FAQ Pills positioned cleanly along the curve */}
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
                      {/* Floating FAQ label anchored above the active pill */}
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 text-[11px] font-bold tracking-[0.25em] text-[#536757] uppercase drop-shadow-sm pointer-events-none whitespace-nowrap">
                        FAQ
                      </span>
                      {/* Active Pill centered exactly on the arc line */}
                      <div className="bg-[#536757] text-white font-medium text-sm lg:text-[15px] px-5 py-2.5 rounded-2xl shadow-[0_12px_28px_rgba(83,103,87,0.32)] border border-white/20 flex items-center gap-2.5 whitespace-nowrap">
                        <span className="font-bold text-xs bg-white/20 px-2 py-0.5 rounded-md">
                          0{idx + 1}
                        </span>
                        <span>{faq.shortLabel || `Question 0${idx + 1}`}</span>
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
                    <span>{faq.shortLabel || `Question 0${idx + 1}`}</span>
                  </button>
                );
              })}

              {/* Center Card / Answer Display Panel (Agnos Style) */}
              <div className="absolute top-[210px] xl:top-[230px] inset-x-0 mx-auto max-w-2xl px-6 flex flex-col items-center text-center z-30 pointer-events-auto">
                {/* Main Question Title in Serif */}
                <div
                  key={`title-${activeIndex}`}
                  className="transition-all duration-300 ease-out animate-fadeIn"
                >
                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-[34px] text-[#242424] font-medium tracking-tight leading-[1.25]">
                    {faqList[activeIndex]?.question}
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
                <div className="w-full max-w-md mx-auto my-4 border-t border-dashed border-[#242424]/15" />

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
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center justify-center px-7 py-2.5 rounded-full bg-[#536757] text-white font-medium text-xs lg:text-sm hover:bg-[#435346] shadow-[0_4px_16px_rgba(83,103,87,0.22)] hover:shadow-[0_6px_22px_rgba(83,103,87,0.32)] transition-all duration-200 cursor-pointer"
                >
                  Start your project
                </a>

                {/* Counter & 6 Progress Navigation Dots */}
                <div className="mt-5 flex flex-col items-center gap-1.5">
                  <span className="font-body text-[10px] font-semibold text-neutral-400 tracking-widest uppercase">
                    0{activeIndex + 1} / 0{faqList.length}
                  </span>
                  <div
                    className="flex items-center gap-2"
                    role="tablist"
                    aria-label="FAQ question progress"
                  >
                    {faqList.map((item, idx) => {
                      const isCurrent = idx === activeIndex;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveIndex(idx)}
                          aria-label={`Go to question ${idx + 1}: ${item.question}`}
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

      {/* ── STACKED ACCORDION LAYOUT: Mobile (<1024px) ── */}
      <div className="block lg:hidden relative z-20 w-full section-py px-4 sm:px-8 md:px-12 flex flex-col items-center select-none">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.12]">
            <span className="text-neutral-400 font-normal relative inline-block">
              You ask.
              <span className="absolute -top-3 -right-8 sm:-top-4 sm:-right-12 font-doodle text-2xl sm:text-3xl text-[#242424] rotate-[15deg] select-none pointer-events-none tracking-normal">
                FAQs
              </span>
            </span>
            <span className="text-[#536757] font-medium block">
              We make it simple.
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-[480px]">
          {faqList.map((faq, idx) => (
            <MobileFAQPill
              key={idx}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

