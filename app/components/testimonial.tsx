"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
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

const testimonialSets: TestimonialSet[] = [
  // Set 1
  {
    items: [
      {
        testimonial: {
          id: "t1",
          quote:
            "“We came to Slay with a rough idea, and they turned it into a beautiful, functional MVP in weeks. Highly recommended.”",
          author: "Rachel Lin",
          role: "Co-Founder at Driftly",
          avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop",
        },
        position: {
          top: "8%",
          left: "3%",
          width: "360px",
        },
      },
      {
        testimonial: {
          id: "t2",
          quote:
            "“The design quality and attention to micro-interactions blew our investors away. Truly a world-class team.”",
          author: "Marcus Vance",
          role: "Head of Product at Rayon",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop",
        },
        position: {
          top: "4%",
          right: "4%",
          width: "370px",
        },
      },
      {
        testimonial: {
          id: "t3",
          quote:
            "“Our conversion rate doubled within 30 days of launching the new site. The strategy behind their work is second to none.”",
          author: "Elena Rostova",
          role: "CMO at Lumina Brands",
          avatar:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=256&auto=format&fit=crop",
        },
        position: {
          bottom: "6%",
          left: "6%",
          width: "380px",
        },
      },
      {
        testimonial: {
          id: "t4",
          quote:
            "“Fast turnaround, unmatched visual polish, and zero friction throughout the whole process. They are our go-to partner.”",
          author: "David Chen",
          role: "Founder & CEO at Kroma",
          avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop",
        },
        position: {
          bottom: "8%",
          right: "3%",
          width: "370px",
        },
      },
    ],
  },
  // Set 2 (Different positions & different testimonials)
  {
    items: [
      {
        testimonial: {
          id: "t5",
          quote:
            "“Slay redefined our entire visual identity and built a high-speed web app that our users love. Couldn’t be happier.”",
          author: "Sophia Sterling",
          role: "VP of Brand at NexaTech",
          avatar:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop",
        },
        position: {
          top: "14%",
          left: "7%",
          width: "370px",
        },
      },
      {
        testimonial: {
          id: "t6",
          quote:
            "“They don’t just design; they understand consumer psychology and scalability. Exceptional collaboration from day one.”",
          author: "Jameson Bell",
          role: "Co-Founder at Aerow",
          avatar:
            "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=256&auto=format&fit=crop",
        },
        position: {
          top: "9%",
          right: "2%",
          width: "380px",
        },
      },
      {
        testimonial: {
          id: "t7",
          quote:
            "“Working with Slay felt like an extension of our internal team. They delivered on every promise ahead of schedule.”",
          author: "Amina Al-Mansoor",
          role: "Product Lead at Qubit Labs",
          avatar:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop",
        },
        position: {
          bottom: "10%",
          left: "3%",
          width: "360px",
        },
      },
      {
        testimonial: {
          id: "t8",
          quote:
            "“The smoothest agency engagement we’ve ever experienced. Their work helped us secure our Series A funding effortlessly.”",
          author: "Lucas Moreau",
          role: "CEO at Veloce Digital",
          avatar:
            "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=256&auto=format&fit=crop",
        },
        position: {
          bottom: "4%",
          right: "7%",
          width: "380px",
        },
      },
    ],
  },
  // Set 3 (Different positions & different testimonials)
  {
    items: [
      {
        testimonial: {
          id: "t9",
          quote:
            "“Slay turned a complex B2B workflow into a sleek, consumer-grade experience. Our team’s productivity skyrocketed.”",
          author: "Chloe Dubois",
          role: "Head of Growth at Synergo",
          avatar:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop",
        },
        position: {
          top: "6%",
          left: "5%",
          width: "360px",
        },
      },
      {
        testimonial: {
          id: "t10",
          quote:
            "“Their team is relentless about excellence. The animations, speed, and design finesse exceeded all expectations.”",
          author: "Vikram Mehta",
          role: "Co-Founder at Pulse Commerce",
          avatar:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&auto=format&fit=crop",
        },
        position: {
          top: "13%",
          right: "5%",
          width: "370px",
        },
      },
      {
        testimonial: {
          id: "t11",
          quote:
            "“Every single deliverable was sharp, polished, and ready for production. 10/10 would partner again.”",
          author: "Hannah Zimmerman",
          role: "Creative Director at Studio 9",
          avatar:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=256&auto=format&fit=crop",
        },
        position: {
          bottom: "8%",
          left: "8%",
          width: "370px",
        },
      },
      {
        testimonial: {
          id: "t12",
          quote:
            "“The feedback on our relaunch has been 100% positive. Slay set a new standard for our digital brand.”",
          author: "Liam O'Connor",
          role: "Founder at Apex Studio",
          avatar:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&auto=format&fit=crop",
        },
        position: {
          bottom: "12%",
          right: "2%",
          width: "380px",
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
    <section className="relative w-full bg-[#F5F4F3] section-py px-4 sm:px-8 md:px-12 overflow-hidden select-none">
      <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
        {/* ── DESKTOP SCATTERED LAYOUT ── */}
        <div
          className="hidden md:block relative z-20 w-full"
          style={{ minHeight: "840px" }}
        >
          {/* Center Heading with Curved Arrow & Doodle */}
          <div className="absolute inset-x-0 top-[38%] flex flex-col items-center text-center select-none pointer-events-none z-10">
            <div className="relative inline-block">
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.12]">
                <span className="text-neutral-400 font-normal block">
                  Hear It From
                </span>
                <span className="text-[#536757] font-medium block mt-1">
                  Our Clients
                </span>
              </h2>

              {/* Hand-drawn Arrow & "Kind Words" Doodle on right */}
              <div className="absolute left-[102%] top-1/2 -translate-y-1/2 ml-4 lg:ml-6 flex items-center gap-2 pointer-events-none select-none">
                <svg
                  className="w-16 h-16 lg:w-20 lg:h-20 text-[#536757] transform -rotate-12"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15,65 Q55,65 70,30" />
                  <path d="M52,30 L70,30 L70,48" />
                </svg>
                <span className="font-doodle text-3xl lg:text-4xl text-[#536757] -rotate-6 whitespace-nowrap -translate-y-4">
                  Kind Words
                </span>
              </div>
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

              {/* Author & Avatar Info Below Card */}
              <div className="flex items-center gap-3 mt-3.5 ml-2">
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                  <Image
                    src={item.testimonial.avatar}
                    alt={item.testimonial.author}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-body font-bold text-sm sm:text-base text-[#242424] leading-tight">
                    {item.testimonial.author}
                  </span>
                  <span className="font-body text-xs sm:text-[13px] text-neutral-500 leading-tight mt-0.5">
                    {item.testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── MOBILE STACKED/AUTO-CYCLE LAYOUT ── */}
        <div className="block md:hidden relative z-20 w-full px-2 flex flex-col items-center select-none">
          {/* Center Heading on Mobile */}
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="font-heading text-4xl sm:text-5xl tracking-tight leading-[1.12]">
              <span className="text-neutral-400 font-normal block">
                Hear It From
              </span>
              <span className="text-[#536757] font-medium block mt-1">
                Our Clients
              </span>
            </h2>
            <div className="flex items-center gap-2 mt-3">
              <span className="font-doodle text-2xl sm:text-3xl text-[#536757] -rotate-6">
                Kind Words
              </span>
            </div>
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
                <div className="flex items-center gap-3 mt-3 ml-2">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                    <Image
                      src={item.testimonial.avatar}
                      alt={item.testimonial.author}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-body font-bold text-sm text-[#242424]">
                      {item.testimonial.author}
                    </span>
                    <span className="font-body text-xs text-neutral-500">
                      {item.testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
