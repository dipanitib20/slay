"use client";

import React, { useState } from "react";
import { FAQItem, defaultFAQs, pageFAQs } from "../data/faqs";

export type { FAQItem };

interface SimpleFAQProps {
  titlePrimary?: string;
  titleSecondary?: string;
  faqs?: FAQItem[];
  pageKey?: keyof typeof pageFAQs | string;
  className?: string;
}

export default function SimpleFAQ({
  titlePrimary = "Questions?",
  titleSecondary = "We are here to help",
  faqs,
  pageKey,
  className = "",
}: SimpleFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const activeFaqs =
    faqs && faqs.length > 0
      ? faqs
      : pageKey && pageFAQs[pageKey as keyof typeof pageFAQs]
      ? pageFAQs[pageKey as keyof typeof pageFAQs]
      : defaultFAQs;

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={`w-full my-16 sm:my-24 lg:my-32 px-4 sm:px-8 md:px-12 relative ${className}`}>
      <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 flex flex-col">
            <h2
              style={{ color: "#536757" }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[62px] tracking-tight leading-[1.12] text-[#536757]"
            >
              <span
                style={{ color: "#536757", opacity: 0.65 }}
                className="block font-normal opacity-65"
              >
                {titlePrimary}
              </span>
              <span
                style={{ color: "#536757" }}
                className="block font-normal mt-0.5"
              >
                {titleSecondary}
              </span>
            </h2>
          </div>

          {/* Right Column: FAQ Accordion List */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-[#E2DFD9]">
            {activeFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.id || index} className="py-4 sm:py-5 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between gap-4 text-left group py-1.5 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                      {/* Serif Number */}
                      <span
                        style={{ color: "#536757" }}
                        className="font-heading text-2xl sm:text-[28px] font-normal select-none shrink-0 w-6 sm:w-8"
                      >
                        {index + 1}
                      </span>

                      {/* Question Text */}
                      <span className="font-body text-base sm:text-lg md:text-[18px] font-medium text-[#242424] group-hover:text-[#536757] transition-colors">
                        {faq.question}
                      </span>
                    </div>

                    {/* Circular Chevron Icon */}
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-[#E2DFD9] flex items-center justify-center shrink-0 text-[#242424] shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-[#F4F4EE]" : "group-hover:bg-[#F4F4EE]"
                      }`}
                    >
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#242424]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Smooth Accordion Body */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pl-10 sm:pl-14 pr-4 sm:pr-8 text-sm sm:text-base text-neutral-600 font-body leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
