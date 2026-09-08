"use client";

import React, { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
  color?: string;
}

export interface FAQProps {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
}

/* ── FAQ Pill: absolutely positioned, smooth CSS max-height animation, no layout shift (Desktop) ── */
function FAQPill({
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
      className={`${color} text-white rounded-[26px] px-7 py-4.5 sm:py-5 shadow-[0_10px_28px_rgba(83,103,87,0.22)] hover:shadow-[0_16px_36px_rgba(83,103,87,0.3)] transition-all duration-300 cursor-pointer w-full select-none border border-white/10`}
      onClick={() => setOpen(!open)}
    >
      {/* Question row */}
      <div className="flex items-center justify-between gap-3.5">
        <span className="font-body text-white font-medium text-base sm:text-lg leading-snug">
          {question}
        </span>
        {/* + button that rotates to × */}
        <div
          className="w-7 h-7 rounded-full border border-white/35 flex items-center justify-center flex-shrink-0 bg-white/10"
          style={{
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <svg
            className="w-4 h-4 text-white"
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
      {/* Answer */}
      <div
        style={{
          maxHeight: open ? "260px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="border-t border-white/15 mt-3.5 pt-3.5">
          <p className="text-sm sm:text-[15px] text-white/85 leading-relaxed font-body">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
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
    answer:
      "We provide end-to-end digital solutions including brand strategy, custom UI/UX design, Next.js & React web development, e-commerce, and high-growth performance marketing.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Typical web design and development projects range between 2 to 6 weeks from discovery to deployment, depending on project scope and deliverables.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We offer tailored project-based quotes as well as flexible monthly retainer plans designed to fit your team's specific roadmap and growth targets.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes! We partner with ambitious early-stage startups as well as established global enterprises looking to scale their digital presence.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply reach out via our contact form or book a quick intro call. We will review your goals and deliver a detailed roadmap and estimate within 24-48 hours.",
  },
];

export default function FAQFun({ items = defaultFAQItems }: FAQProps = {}) {
  const faqList = items && items.length > 0 ? items : defaultFAQItems;

  return (
    <section className="relative w-full bg-[#F5F4F3] section-py px-4 sm:px-8 md:px-12 overflow-hidden select-none">
      <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
        {/* ── ABSOLUTE LAYOUT: Desktop ── */}
        <div
          className="hidden md:block relative z-20 w-full"
          style={{ minHeight: "820px" }}
        >
          {/* Central Heading */}
          <div className="absolute inset-x-0 top-[35%] flex flex-col items-center text-center select-none pointer-events-none z-10">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.12]">
              <span className="text-neutral-400 font-normal relative inline-block">
                You ask.
                <span className="absolute -top-3 -right-8 sm:-top-4 sm:-right-12 md:-top-6 md:-right-16 font-doodle text-2xl sm:text-3xl md:text-4xl text-[#242424] rotate-[15deg] select-none pointer-events-none tracking-normal">
                  FAQs
                </span>
              </span>
              <span className="text-[#536757] font-medium block">
                We make it simple.
              </span>
            </h2>
          </div>

          {/* Scattered FAQ Pills - Spread wide to max-w-8xl boundaries with 20% expanded size */}
          {/* 1. Top Left */}
          {faqList[0] && (
            <div className="absolute left-0 lg:left-[1%] top-[10%] w-[330px] sm:w-[370px] lg:w-[410px] z-30">
              <FAQPill
                question={faqList[0].question}
                answer={faqList[0].answer}
              />
            </div>
          )}

          {/* 2. Top Right */}
          {faqList[1] && (
            <div className="absolute right-0 lg:right-[1%] top-[3%] w-[330px] sm:w-[370px] lg:w-[410px] z-30">
              <FAQPill
                question={faqList[1].question}
                answer={faqList[1].answer}
              />
            </div>
          )}

          {/* 3. Bottom Left */}
          {faqList[2] && (
            <div className="absolute left-0 lg:left-[1%] top-[62%] w-[330px] sm:w-[370px] lg:w-[410px] z-30">
              <FAQPill
                question={faqList[2].question}
                answer={faqList[2].answer}
              />
            </div>
          )}

          {/* 4. Bottom Right */}
          {faqList[3] && (
            <div className="absolute right-0 lg:right-[1%] top-[58%] w-[330px] sm:w-[370px] lg:w-[410px] z-30">
              <FAQPill
                question={faqList[3].question}
                answer={faqList[3].answer}
              />
            </div>
          )}

          {/* 5. Bottom Center */}
          {faqList[4] && (
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[1%] w-[330px] sm:w-[370px] lg:w-[410px] z-30">
              <FAQPill
                question={faqList[4].question}
                answer={faqList[4].answer}
              />
            </div>
          )}
        </div>

        {/* ── STACKED LAYOUT: Mobile ── */}
        <div className="block md:hidden relative z-20 w-full px-2 flex flex-col items-center select-none">
          {/* Central Heading on Mobile */}
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
      </div>
    </section>
  );
}
