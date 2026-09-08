"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  image: string;
}

export default function ServicesPage() {
  const services: ServiceItem[] = [
    {
      id: "web-design-1",
      title: "Web Design & Development",
      description:
        "From high-converting landing pages to complete brand websites, we design and develop digital experiences that feel effortless, load fast, and turn visitors into customers.",
      buttonText: "Build your website",
      buttonHref: "#book-call",
      image:
        "https://images.unsplash.com/photo-1556742049-0a67e55722c3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "web-design-2",
      title: "Web Design & Development",
      description:
        "From high-converting landing pages to complete brand websites, we design and develop digital experiences that feel effortless, load fast, and turn visitors into customers.",
      buttonText: "Build your website",
      buttonHref: "#book-call",
      image:
        "https://images.unsplash.com/photo-1556742049-0a67e55722c3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "web-design-3",
      title: "Web Design & Development",
      description:
        "From high-converting landing pages to complete brand websites, we design and develop digital experiences that feel effortless, load fast, and turn visitors into customers.",
      buttonText: "Build your website",
      buttonHref: "#book-call",
      image:
        "https://images.unsplash.com/photo-1556742049-0a67e55722c3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "web-design-4",
      title: "Web Design & Development",
      description:
        "From high-converting landing pages to complete brand websites, we design and develop digital experiences that feel effortless, load fast, and turn visitors into customers.",
      buttonText: "Build your website",
      buttonHref: "#book-call",
      image:
        "https://images.unsplash.com/photo-1556742049-0a67e55722c3?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F4F3] text-[#242424] flex flex-col justify-between selection:bg-[#536757]/20 selection:text-[#536757]">
      {/* Floating Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 pt-32 sm:pt-40 md:pt-44 pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Section Header */}
          <div className="relative max-w-4xl mx-auto text-center">
            {/* Doodle "What We Do" on Top Left */}
            <div className="absolute -top-7 sm:-top-9 md:-top-11 left-2 sm:left-10 md:left-18 lg:left-24 -rotate-12 pointer-events-none select-none">
              <span className="font-doodle text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#7E8B80]/80">
                What We Do
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-[#536757] font-normal leading-[1.08]">
              FROM BIG IDEAS
              <br />
              TO BIGGER IMPACT
            </h1>

            {/* Subheading / Description Paragraph */}
            <p className="font-subheading text-neutral-500 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed mt-3.5 sm:mt-4">
              From strategy and branding to content, marketing, and web
              development, we create digital experiences designed to connect,
              convert, and grow your business.
            </p>
          </div>

          {/* 2x2 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mt-12 sm:mt-16 md:mt-20">
            {services.map((service, index) => (
              <div
                key={`${service.id}-${index}`}
                className="bg-white rounded-[28px] sm:rounded-[36px] p-5 sm:p-6 lg:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/[0.04] flex flex-col justify-between group hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                {/* Mockup / Image Container */}
                <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] rounded-[20px] sm:rounded-[26px] overflow-hidden bg-[#ECEAE6]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    unoptimized
                  />
                </div>

                {/* Service Details & Action */}
                <div className="flex flex-col mt-6 sm:mt-7 flex-1 justify-between">
                  <div>
                    <h2 className="font-heading text-2xl sm:text-3xl text-[#242424] tracking-tight font-medium">
                      {service.title}
                    </h2>
                    <p className="font-subheading text-neutral-500 text-xs sm:text-sm md:text-base leading-relaxed mt-2.5">
                      {service.description}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="mt-6 sm:mt-8">
                    <Link
                      href={service.buttonHref}
                      className="w-full inline-flex items-center justify-center bg-[#242424] hover:bg-[#536757] text-white font-body font-medium text-sm sm:text-base py-3.5 sm:py-4 rounded-[12px] sm:rounded-[14px] shadow-[0_12px_24px_rgba(0,0,0,0.3)] active:scale-[0.98] transition-all duration-300 text-center"
                    >
                      {service.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
