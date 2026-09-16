"use client";

import React, { useState, useEffect } from "react";

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

interface TestimonialSet {
  items: {
    testimonial: Testimonial;
    position: {
      top?: string;
      bottom?: string;
      left?: string;
      right?: string;
      width: string;
    };
  }[];
}

const t1: Testimonial = {
  id: "t1",
  quote:
    "“Dipani is hands on and hardworking. I chose to work with her because of her clear vision and strong knowledge. Within just one month she understood the deliverables and went beyond the initial requirements by continuously improving on the ask. She is easy to work with, proactive, and brings a thoughtful approach to her work.”",
  author: "Bineet",
  role: "Founder, Mahru",
};

const t2: Testimonial = {
  id: "t2",
  quote:
    "“Dipani supported us with social media planning and execution including content direction, posting, and performance tracking. Her approach was structured and thoughtful with a clear understanding of brand positioning and audience behaviour. Communication was smooth, timelines were respected, and the work consistently reflected what we were aiming to build.”",
  author: "Binod Kumar",
  role: "Founder, Orient Polyfilms",
};

const t3: Testimonial = {
  id: "t3",
  quote:
    "“You handled our work with professionalism and clear understanding. The experience has been smooth and the results are excellent.”",
  author: "Ritu and Manav",
  role: "Maple Bear Canadian Preschool",
};

const t4: Testimonial = {
  id: "t4",
  quote:
    "“The content was consistent, on brand, and actually got noticed. Working with the team felt seamless and the quality never dropped.”",
  author: "Rohit",
  role: "Founder, Wallora",
};

const t5: Testimonial = {
  id: "t5",
  quote:
    "“The team understood the soul of the brand before they created a single piece of content. Everything felt intentional and completely aligned with what we were building.”",
  author: "Minakshi",
  role: "Founder, The Sacred Nook",
};

const t6: Testimonial = {
  id: "t6",
  quote:
    "“The reels capture the craft in a way I never thought content could. Every shoot feels considered, every edit feels right. The work speaks for the jewellery the way it deserves to be spoken for.”",
  author: "Punitta Trikha",
  role: "Jewellery Designer & Craftswoman",
};

const testimonialSets: TestimonialSet[] = [
  // Set 1
  {
    items: [
      {
        testimonial: t1,
        position: {
          top: "4%",
          left: "2%",
          width: "390px",
        },
      },
      {
        testimonial: t2,
        position: {
          top: "2%",
          right: "2%",
          width: "400px",
        },
      },
      {
        testimonial: t3,
        position: {
          bottom: "6%",
          left: "5%",
          width: "370px",
        },
      },
      {
        testimonial: t4,
        position: {
          bottom: "6%",
          right: "4%",
          width: "380px",
        },
      },
    ],
  },
  // Set 2
  {
    items: [
      {
        testimonial: t5,
        position: {
          top: "5%",
          left: "4%",
          width: "380px",
        },
      },
      {
        testimonial: t6,
        position: {
          top: "3%",
          right: "3%",
          width: "390px",
        },
      },
      {
        testimonial: t1,
        position: {
          bottom: "5%",
          left: "2%",
          width: "390px",
        },
      },
      {
        testimonial: t2,
        position: {
          bottom: "4%",
          right: "2%",
          width: "400px",
        },
      },
    ],
  },
  // Set 3
  {
    items: [
      {
        testimonial: t3,
        position: {
          top: "6%",
          left: "3%",
          width: "370px",
        },
      },
      {
        testimonial: t4,
        position: {
          top: "4%",
          right: "4%",
          width: "380px",
        },
      },
      {
        testimonial: t5,
        position: {
          bottom: "5%",
          left: "4%",
          width: "380px",
        },
      },
      {
        testimonial: t6,
        position: {
          bottom: "4%",
          right: "3%",
          width: "390px",
        },
      },
    ],
  },
];

export default function TestimonialSection() {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Begin ultra-smooth fade out
      setIsFading(true);
      setTimeout(() => {
        // Swap set index and smoothly fade in new set
        setCurrentSetIndex((prev) => (prev + 1) % testimonialSets.length);
        setIsFading(false);
      }, 900); // 900ms gentle fade out
    }, 5500); // 5.5s cycle

    return () => clearInterval(interval);
  }, []);

  const activeSet = testimonialSets[currentSetIndex];

  return (
    <section className="relative w-full bg-[#F5F4F3] my-10 sm:my-24 lg:my-40 px-4 sm:px-8 md:px-12 overflow-hidden select-none">
      <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
        {/* ── DESKTOP SCATTERED LAYOUT ── */}
        <div
          className="hidden md:block relative z-20 w-full"
          style={{ minHeight: "840px" }}
        >
          {/* Center Heading with Doodle Above */}
          <div className="absolute inset-x-0 top-[38%] flex flex-col items-center text-center select-none pointer-events-none z-10">
            <div className="relative inline-block">
              {/* Doodle "Kind Words" above the heading */}
              <div className="absolute -top-10 sm:-top-12 md:-top-14 left-0 sm:-left-4 pointer-events-none select-none -rotate-6">
                <span className="font-doodle text-3xl sm:text-4xl lg:text-5xl text-[#536757] whitespace-nowrap">
                  Kind Words
                </span>
              </div>

              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.12]">
                <span className="text-neutral-400 font-normal block">
                  Straight from the chat.
                </span>
                <span className="text-[#536757] font-medium block mt-1">
                  Real words
                </span>
              </h2>
            </div>
          </div>

          {/* 4 Floating Testimonial Cards */}
          {activeSet.items.map((item, idx) => (
            <div
              key={`${item.testimonial.id}-${idx}`}
              className="absolute z-30 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{
                top: item.position.top,
                bottom: item.position.bottom,
                left: item.position.left,
                right: item.position.right,
                width: item.position.width,
                transitionDelay: isFading ? `${idx * 40}ms` : `${idx * 60}ms`,
                opacity: isFading ? 0 : 1,
                transform: isFading
                  ? "scale(0.975) translateY(8px)"
                  : "scale(1) translateY(0)",
                filter: isFading ? "blur(2.5px)" : "blur(0px)",
              }}
            >
              {/* Quote Bubble Card */}
              <div className="bg-[#D2DCD3]/90 backdrop-blur-sm rounded-[24px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-black/[0.03] transition-all hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
                <p className="font-body text-[#242424] text-sm sm:text-[15px] leading-relaxed font-normal">
                  {item.testimonial.quote}
                </p>
              </div>

              {/* Author Info Below Card */}
              <div className="flex flex-col mt-3.5 ml-2">
                <span className="font-body font-bold text-sm sm:text-base text-[#242424] leading-tight">
                  {item.testimonial.author}
                </span>
                <span className="font-body text-xs sm:text-[13px] text-neutral-500 leading-tight mt-0.5">
                  {item.testimonial.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── MOBILE STACKED/AUTO-CYCLE LAYOUT ── */}
        <div className="block md:hidden relative z-20 w-full px-2 flex flex-col items-center select-none">
          {/* Center Heading on Mobile with Kind Words Doodle above */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="flex items-center gap-2 mb-2 pointer-events-none select-none">
              <span className="font-doodle text-3xl sm:text-4xl text-[#536757] -rotate-6">
                Kind Words
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl tracking-tight leading-[1.12]">
              <span className="text-neutral-400 font-normal block">
                Straight from the chat.
              </span>
              <span className="text-[#536757] font-medium block mt-1">
                Real words
              </span>
            </h2>
          </div>

          {/* Cards Stack for Mobile with Subtle Fade Transitions */}
          <div className="flex flex-col gap-5 w-full max-w-[440px]">
            {activeSet.items.map((item, idx) => (
              <div
                key={`mobile-${item.testimonial.id}-${idx}`}
                className="transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col"
                style={{
                  transitionDelay: isFading ? `${idx * 30}ms` : `${idx * 50}ms`,
                  opacity: isFading ? 0 : 1,
                  transform: isFading ? "translateY(6px)" : "translateY(0)",
                }}
              >
                <div className="bg-[#D2DCD3]/90 rounded-[22px] p-5 shadow-[0_4px_16px_rgba(0,0,0,0.03)] border border-black/[0.03]">
                  <p className="font-body text-[#242424] text-sm leading-relaxed">
                    {item.testimonial.quote}
                  </p>
                </div>
                <div className="flex flex-col mt-3 ml-2">
                  <span className="font-body font-bold text-sm text-[#242424]">
                    {item.testimonial.author}
                  </span>
                  <span className="font-body text-xs text-neutral-500">
                    {item.testimonial.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
