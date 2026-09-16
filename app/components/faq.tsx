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

/* ── FAQ Pill: smooth accordion animation, brand green (+15% larger size) ── */
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
      className={`${color} text-white rounded-[26px] px-6 sm:px-7 py-4.5 sm:py-5 shadow-[0_10px_28px_rgba(83,103,87,0.25)] hover:shadow-[0_14px_34px_rgba(83,103,87,0.35)] border border-white/10 cursor-pointer w-full select-none transition-all duration-200 relative ${
        open ? "z-30" : "z-20"
      }`}
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
      {/* Question row */}
      <div className="flex items-center justify-between gap-3.5">
        <span className="font-body text-white font-medium text-[15px] sm:text-[17px] md:text-lg leading-snug">
          {question}
        </span>
        {/* + button that rotates to × */}
        <div
          className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0 bg-white/10"
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
          maxHeight: open ? "500px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="border-t border-white/15 mt-3.5 pt-3.5">
          <p className="text-sm sm:text-[15px] text-white/90 leading-relaxed font-body">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

const defaultItems: FAQItem[] = [
  {
    question: "What does a retainer cost?",
    answer:
      "Retainers start at INR 35,000 per month and scale with scope. Content shoots, ad management and website work are quoted separately. You get an exact number after the first call, not a generic package sheet.",
  },
  {
    question: "Is there a minimum commitment?",
    answer:
      "We ask for three months. Social media compounds and one month tells nobody anything. After three months it runs monthly.",
  },
  {
    question: "Do you work with brands outside India?",
    answer:
      "Yes. We work across time zones, communicate in English, and schedule calls and reporting around your working hours rather than ours.",
  },
  {
    question: "Who actually works on my account?",
    answer:
      "A dedicated team of a strategist, an editor and a designer, with Dipani reviewing strategy and creative personally on every account.",
  },
  {
    question: "How do I get started?",
    answer:
      "Email hello@slaystrategy.com or call the number on the contact page. The first call runs 30 minutes and costs nothing.",
  },
];

export default function FAQ({ items = defaultItems }: FAQProps = {}) {
  const faqList = items && items.length > 0 ? items : defaultItems;

  return (
    <section className="relative w-full mt-8 sm:mt-16 md:mt-36 mb-4 sm:mb-6 select-none no-scroll-animate overflow-visible">
      {/* ── DESKTOP SCATTERED PILLS LAYOUT (≥768px) ── */}
      <div
        className="hidden md:block relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 pb-4"
        style={{ minHeight: "560px", height: "560px" }}
      >
        {/* Central Heading */}
        <div className="absolute inset-x-0 top-[26%] flex flex-col items-center text-center select-none pointer-events-none z-10">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-[56px] lg:text-[62px] tracking-tight leading-[1.12]">
            <span className="text-neutral-400 font-normal relative inline-block">
              Questions people
              <span className="absolute -top-3 -right-8 sm:-top-4 sm:-right-11 font-doodle text-2xl sm:text-3xl text-[#242424] rotate-[15deg] select-none pointer-events-none tracking-normal">
                FAQs
              </span>
            </span>
            <span className="text-[#536757] font-medium block">
              usually ask 
            </span>
          </h2>
        </div>

        {/* Top Left Pill (Item 0) */}
        {faqList[0] && (
          <div className="absolute left-[2%] top-[3%] w-[315px] sm:w-[355px] lg:w-[365px] z-20">
            <FAQPill
              question={faqList[0].question}
              answer={faqList[0].answer}
            />
          </div>
        )}

        {/* Top Right Pill (Item 1) */}
        {faqList[1] && (
          <div className="absolute right-[2%] top-[3%] w-[315px] sm:w-[355px] lg:w-[365px] z-20">
            <FAQPill
              question={faqList[1].question}
              answer={faqList[1].answer}
            />
          </div>
        )}

        {/* Middle Left Pill (Item 2) */}
        {faqList[2] && (
          <div className="absolute left-[2%] top-[51%] w-[315px] sm:w-[355px] lg:w-[365px] z-20">
            <FAQPill
              question={faqList[2].question}
              answer={faqList[2].answer}
            />
          </div>
        )}

        {/* Middle Right Pill (Item 3) */}
        {faqList[3] && (
          <div className="absolute right-[2%] top-[49%] w-[315px] sm:w-[355px] lg:w-[365px] z-20">
            <FAQPill
              question={faqList[3].question}
              answer={faqList[3].answer}
            />
          </div>
        )}

        {/* Bottom Center Pill (Item 4) */}
        {faqList[4] && (
          <div className="absolute left-1/2 -translate-x-1/2 top-[76%] w-[335px] sm:w-[380px] lg:w-[390px] z-20">
            <FAQPill
              question={faqList[4].question}
              answer={faqList[4].answer}
            />
          </div>
        )}
      </div>

      {/* ── MOBILE STACKED ACCORDION LAYOUT (<768px) ── */}
      <div className="block md:hidden relative z-20 w-full px-4 sm:px-8 flex flex-col items-center select-none pb-6">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="font-heading text-3xl sm:text-4xl tracking-tight leading-[1.12]">
            <span className="text-neutral-400 font-normal relative inline-block">
              Questions people
              <span className="absolute -top-3 -right-7 font-doodle text-2xl text-[#242424] rotate-[15deg] select-none pointer-events-none tracking-normal">
                FAQs
              </span>
            </span>
            <span className="text-[#536757] font-medium block">
              usually ask
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-[550px]">
          {faqList.map((faq, idx) => (
            <FAQPill
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
