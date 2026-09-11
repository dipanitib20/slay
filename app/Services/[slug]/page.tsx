"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { getServiceBySlug, servicesData } from "../../data/services";
import { serviceDetailFAQs, defaultFAQs } from "../../data/faqs";

export default function ServiceSlugPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const service = getServiceBySlug(slug) || servicesData[0];

  return (
    <div className="min-h-screen bg-[#F5F4F3] text-[#242424] flex flex-col justify-between selection:bg-[#536757]/20 selection:text-[#536757]">
      {/* Floating Header / Navbar */}
      <Navbar />

      <main className="flex-1 pt-32 sm:pt-40 md:pt-44 mb-40 px-4 sm:px-8 md:px-12">
        <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
          {/* Back Navigation */}
          <div className="mb-6 sm:mb-8">
            <Link
              href="/Services"
              className="inline-flex items-center gap-2 font-subheading text-xs sm:text-sm font-medium text-neutral-500 hover:text-[#536757] transition-colors group"
            >
              <svg
                className="w-4 h-4 transition-transform group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Back to all services</span>
            </Link>
          </div>

          {/* =========================================
              1. HERO SECTION (Header + Full-Width Image)
             ========================================= */}
          <section className="relative mb-40">
            {/* Doodle "Service Details" */}
            <div className="absolute -top-7 sm:-top-9 md:-top-11 left-2 sm:left-4 -rotate-12 pointer-events-none select-none">
              <span className="font-doodle text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#7E8B80]/80">
                Service Details
              </span>
            </div>

            {/* Title & Summary Row */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 sm:gap-10 items-end justify-between pt-4">
              {/* Main Service Headline */}
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-[#536757] font-normal leading-[1.08]">
                {service.heading[0]}
                <br />
                {service.heading[1]}
              </h1>

              {/* Service Summary Text */}
              <p className="font-subheading text-neutral-500 text-xs sm:text-sm md:text-base leading-relaxed lg:pb-2">
                {service.summary}
              </p>
            </div>

            {/* Large Hero Banner Image */}
            <div className="relative w-full aspect-[2.1/1] sm:aspect-[2.4/1] md:aspect-[2.6/1] rounded-[28px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#ECEAE6] mt-8 sm:mt-12 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/[0.04]">
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </section>

          {/* =========================================
              2. TWO-COLUMN CONTENT SECTION (Sticky until footer)
             ========================================= */}
          <section className="no-scroll-animate my-40 grid grid-cols-1 lg:grid-cols-[1fr_1.85fr] gap-12 sm:gap-16 lg:gap-20 items-start">
            {/* Left Column: Deliverables (Sticky below navbar with generous clearance) */}
            <div className="no-scroll-animate lg:sticky lg:top-36 xl:top-40 self-start flex flex-col z-20">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#242424] font-medium tracking-tight mb-4 sm:mb-6">
                Deliverables
              </h2>

              {/* Deliverables List */}
              <div className="flex flex-col border-t border-black/[0.08]">
                {service.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="border-b border-black/[0.08] py-3.5 sm:py-4 flex items-center gap-4 text-xs sm:text-sm md:text-[15px] font-subheading text-[#242424] hover:bg-black/[0.01] transition-colors"
                  >
                    <span className="font-mono text-neutral-400 text-xs font-semibold shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium text-neutral-800">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Button Card */}
              <div className="mt-8 sm:mt-10 p-6 sm:p-7 rounded-[22px] sm:rounded-[28px] bg-white border border-black/[0.04] shadow-sm">
                <h3 className="font-heading text-lg sm:text-xl text-[#242424] font-medium">
                  Ready to get started?
                </h3>
                <p className="font-subheading text-neutral-500 text-xs sm:text-sm mt-1 mb-5 leading-relaxed">
                  Book a discovery call with our creative strategists and turn your goals into results.
                </p>
                <Link
                  href="/Contact"
                  className="w-full inline-flex items-center justify-center bg-[#242424] text-white font-body font-medium text-xs sm:text-sm px-6 py-3.5 rounded-[12px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(0,0,0,0.4),0_8px_20px_rgba(0,0,0,0.3)] active:scale-95 transition-all duration-300 hover:bg-[#3B4A3D]"
                >
                  Book an introductory call
                </Link>
              </div>
            </div>

            {/* Right Column: Overview, Mid-Image, Why it matters, & FAQ */}
            <div className="flex flex-col">
              {/* Overview Heading & Paragraphs */}
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#242424] font-medium tracking-tight mb-4 sm:mb-5">
                  Overview:
                </h2>
                <div className="flex flex-col gap-4 text-xs sm:text-sm md:text-base font-subheading text-neutral-600 leading-relaxed">
                  {service.overview.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Mid-Content Image */}
              <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] rounded-[24px] sm:rounded-[32px] md:rounded-[36px] overflow-hidden my-10 sm:my-14 bg-[#ECEAE6] shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-black/[0.04]">
                <Image
                  src={service.midImage}
                  alt={`${service.title} in action`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Why it Matters Section */}
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#242424] font-medium tracking-tight mb-3 sm:mb-4">
                  Why it matters
                </h2>
                <p className="font-subheading text-neutral-500 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8">
                  {service.whyItMattersIntro}
                </p>

                {/* Bullet Points */}
                <div className="flex flex-col gap-5 sm:gap-6">
                  {service.whyItMatters.map((point, ptIdx) => (
                    <div
                      key={ptIdx}
                      className="flex items-start gap-3.5 text-xs sm:text-sm md:text-[15px] font-subheading text-neutral-600 leading-relaxed"
                    >
                      <span className="text-[#536757] font-bold text-xl leading-none mt-0.5 select-none">
                        •
                      </span>
                      <p>
                        <strong className="text-[#242424] font-semibold">
                          {point.title}
                        </strong>{" "}
                        — {point.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Questions? We are here to help (FAQ Accordion inside Right Column) */}
              <div className="mt-16 sm:mt-24 md:mt-28 pt-12 sm:pt-16 border-t border-black/[0.08]">
                <div className="mb-8 sm:mb-10">
                  <span className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#9BA59D] font-normal block">
                    Questions?
                  </span>
                  <span className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#536757] font-medium block mt-0.5">
                    We are here to help
                  </span>
                </div>

                {/* FAQ Accordion List */}
                <div className="flex flex-col divide-y divide-[#E2DFD9] border-t border-[#E2DFD9]">
                  {(serviceDetailFAQs[service.slug] || defaultFAQs).map((faq, fIdx) => (
                    <details
                      key={fIdx}
                      className="group py-4 sm:py-5 first:pt-4 last:pb-4 focus:outline-none cursor-pointer"
                    >
                      <summary className="w-full flex items-center justify-between gap-4 text-left list-none select-none">
                        <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                          <span className="font-heading text-xl sm:text-2xl text-[#536757] font-normal shrink-0">
                            {fIdx + 1}
                          </span>
                          <span className="font-body text-base sm:text-lg font-medium text-[#242424] group-hover:text-[#536757] transition-colors">
                            {faq.question}
                          </span>
                        </div>
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-[#E2DFD9] flex items-center justify-center shrink-0 text-[#242424] shadow-[0_1px_3px_rgba(0,0,0,0.04)] group-open:rotate-180 transition-transform duration-300">
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
                      </summary>
                      <p className="pl-9 sm:pl-12 pr-4 sm:pr-8 pt-3 text-xs sm:text-sm md:text-base text-neutral-600 font-body leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
