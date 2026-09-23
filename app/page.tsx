"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "./components/navbar";
import AboutUsSection from "./components/about-us";
import FAQFun from "./components/faqfun";
import FAQ from "./components/faq";
import TestimonialSection from "./components/testimonial";
import Footer from "./components/footer";

export default function Home() {
  const router = useRouter();
  const [activeCard, setActiveCard] = useState<number>(0);

  const clientLogos = [
    { id: "1", src: "/Homelogocarousel/1.svg", alt: "Client Logo 1" },
    { id: "2", src: "/Homelogocarousel/2.svg", alt: "Client Logo 2" },
    { id: "3", src: "/Homelogocarousel/3.svg", alt: "Client Logo 3" },
    { id: "4", src: "/Homelogocarousel/4.svg", alt: "Client Logo 4" },
    { id: "5", src: "/Homelogocarousel/5.svg", alt: "Client Logo 5" },
    { id: "6", src: "/Homelogocarousel/6.svg", alt: "Client Logo 6" },
    { id: "7", src: "/Homelogocarousel/7.svg", alt: "Client Logo 7" },
    { id: "8", src: "/Homelogocarousel/8.svg", alt: "Client Logo 8" },
    { id: "9", src: "/Homelogocarousel/9.svg", alt: "Client Logo 9" },
    { id: "10", src: "/Homelogocarousel/10.svg", alt: "Client Logo 10" },
    { id: "11", src: "/Homelogocarousel/11.svg", alt: "Client Logo 11" },
    { id: "12", src: "/Homelogocarousel/12.svg", alt: "Client Logo 12" },
    { id: "13", src: "/Homelogocarousel/13.svg", alt: "Client Logo 13" },
    { id: "16", src: "/Homelogocarousel/16.svg", alt: "Client Logo 16" },
    { id: "17", src: "/Homelogocarousel/17.svg", alt: "Client Logo 17" },
    { id: "18", src: "/Homelogocarousel/18.svg", alt: "Client Logo 18" },
    { id: "19", src: "/Homelogocarousel/19.svg", alt: "Client Logo 19" },
    { id: "20", src: "/Homelogocarousel/20.svg", alt: "Client Logo 20" },
  ];

  const services = [
    {
      number: "01/N",
      slug: "social-media-management",
      title: "Social media management",
      description:
        "Instagram is no longer optional. It is your storefront, your first impression and your most visited sales page. We manage it end to end, so it consistently reflects the true value of your brand.",
    },
    {
      number: "02/N",
      slug: "performance-marketing",
      title: "Performance Marketing",
      description:
        "Anyone can boost a post. We build actual campaigns. Audience research, creative strategy, ad copy, testing and optimisation based on what the data says. Every rupee tracked. ",
    },
    {
      number: "03/N",
      slug: "brand-identity-strategy",
      title: "Brand Identity & Strategy",
      description:
        "Logo, colour, type, tone and the rules that hold it all together. Built so your brand still looks and sounds like itself on a reel, an invoice and a shopfront.",
    },
    {
      number: "04/N",
      slug: "founder-led-marketing",
      title: "Founder Led Marketing",
      description:
        "The most underused marketing asset at any founder led company is the founder. Your story, your perspective, your presence on LinkedIn and Instagram builds trust faster than any ad campaign. We write, we post, we position. You grow.",
    },
  ];

  const projects = [
    {
      id: "indian-summer-atelier",
      slug: "indian-summer-atelier",
      title: "Indian Summer Atelier",
      description:
        "A Gurugram fashion label with the product already right and the presence lagging behind it. We built the content system around what they shoot in house, then took it further with performance marketing and founder led content.",
      image: "/projectcard/indian summer.webp",
      tags: ["Social Media", "Performance Marketing", "Founder Led", "UGC & Content Shoot"],
    },
    {
      id: "law-in-heels",
      slug: "law-in-heels",
      title: "Law in Heels",
      description:
        "Aka Anvi Jain, lawyer turned legal creator, needed a platform. We built her consistent, aesthetic content system, shoot planning, scripting, calendars, and purposeful strategy.",
      image: "/projectcard/law in heels.webp",
      tags: ["Social Media", "LinkedIn", "YouTube", "Personal Brand", "Content Shoot"],
    },
  ];

  const desktopVideoRef = React.useRef<HTMLVideoElement | null>(null);
  const mobileVideoRef = React.useRef<HTMLVideoElement | null>(null);

  React.useEffect(() => {
    const playVideos = () => {
      if (desktopVideoRef.current) {
        desktopVideoRef.current.defaultMuted = true;
        desktopVideoRef.current.muted = true;
        desktopVideoRef.current.play().catch(() => {});
      }
      if (mobileVideoRef.current) {
        mobileVideoRef.current.defaultMuted = true;
        mobileVideoRef.current.muted = true;
        mobileVideoRef.current.play().catch(() => {});
      }
    };

    playVideos();
    // Re-attempt after short delay to ensure stream attachment
    const timer = setTimeout(playVideos, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#F5F4F3] text-[#242424] selection:bg-[#242424] selection:text-white overflow-x-hidden">
      {/* Floating Header / Navbar */}
      <Navbar />

      {/* Hero Section (Fullscreen Edge-to-Edge Video) */}
      <section className="relative w-full hero-fullscreen overflow-hidden bg-[#1C1C1C]">
        {/* Mobile Video (< 768px) */}
        <video
          ref={mobileVideoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="md:hidden absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/mobielhero.mp4" type="video/mp4" />
          <source src="/Herovideomobile.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Desktop Video (>= 768px) */}
        <video
          ref={desktopVideoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="hidden md:block absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/desktophero.mp4" type="video/mp4" />
          <source src="/HeroDesktopvod.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Client Logos Carousel Section (Single Row) */}
      <section className="relative w-full bg-[#F5F4F3] mt-20 mb-40 overflow-hidden no-scroll-animate">
        {/* Left & Right Gradient Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-[#F5F4F3] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-[#F5F4F3] to-transparent z-10 pointer-events-none" />

        {/* Infinite Carousel Track */}
        <div className="animate-marquee flex items-center gap-5 sm:gap-7 md:gap-9 shrink-0">
          {clientLogos.map((logo, index) => (
            <div
              key={`set1-${logo.id}-${index}`}
              className="flex items-center justify-center shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={264}
                height={115}
                className="h-[60px] sm:h-[70px] md:h-[82px] w-auto max-w-[190px] sm:max-w-[234px] md:max-w-[275px] object-contain opacity-85 hover:opacity-100 transition-opacity duration-200"
                unoptimized
              />
            </div>
          ))}
          {clientLogos.map((logo, index) => (
            <div
              key={`set2-${logo.id}-${index}`}
              className="flex items-center justify-center shrink-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={264}
                height={115}
                className="h-[60px] sm:h-[70px] md:h-[82px] w-auto max-w-[190px] sm:max-w-[234px] md:max-w-[275px] object-contain opacity-85 hover:opacity-100 transition-opacity duration-200"
                unoptimized
              />
            </div>
          ))}
        </div>
      </section>

      {/* "What we bring" / Services Showcase Section */}
      <section id="services" className="w-full bg-[#F5F4F3] my-40 px-4 sm:px-8 md:px-12">
        <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
          {/* Section Header */}
          <div className="relative max-w-5xl mx-auto text-center mb-14 sm:mb-18 md:mb-20 flex flex-col items-center">
            {/* Headline Container with Relative Top-Right Doodle */}
            <div className="relative inline-flex flex-col items-center text-center">
              {/* Doodle Arrow & Handwritten Note on Top Right */}
              <div className="absolute -top-10 sm:-top-13 md:-top-16 -right-4 sm:-right-8 md:-right-12 lg:-right-16 flex items-center gap-1 sm:gap-2 pointer-events-none select-none">
                <Image
                  src="/arrow.svg"
                  alt="Arrow"
                  width={85}
                  height={55}
                  className="w-10 sm:w-14 md:w-18 lg:w-22 h-auto object-contain shrink-0"
                />
                <span className="font-doodle text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#536757] whitespace-nowrap -rotate-2 -translate-y-1">
                  What we bring
                </span>
              </div>

              {/* Main Headline */}
              {/* Mobile (3 lines, matching font size, dual color middle line) */}
              <h2 className="sm:hidden font-heading text-4xl uppercase tracking-tight leading-[1.14] text-center">
                <span className="text-neutral-400 block whitespace-nowrap">
                  We build brands that
                </span>
                <span className="block whitespace-nowrap">
                  <span className="text-neutral-400">make people </span>
                  <span className="text-[#536757]">stop and</span>
                </span>
                <span className="text-[#536757] block whitespace-nowrap">
                  actually look.
                </span>
              </h2>

              {/* Desktop / Tablet */}
              <h2 className="hidden sm:block font-heading sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-tight leading-[1.14] text-center">
                <span className="text-neutral-400 block text-center sm:whitespace-nowrap">
                  We build brands that make people
                </span>
                <span className="text-[#536757] block text-center sm:whitespace-nowrap">
                  stop and actually look.
                </span>
              </h2>
            </div>

            {/* Subheading / Description Paragraph */}
            <p className="font-subheading text-neutral-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mt-6 text-center">
              Most brands blend into the scroll. Same formats, same captions, same energy. Slay the Strategy exists to change that. We are a full service social media and digital marketing agency crafting aesthetic, intentional content for founders who refuse to be forgettable. No average work. No noise. Just work worth stopping for.
            </p>
          </div>

          {/* Cards Expandable Container */}
          <div className="bg-[#FAF9EE] rounded-[32px] sm:rounded-[40px] p-1.5 sm:p-2 border-1 border-[#ECEADE]/60">
            <div className="flex flex-col md:flex-row gap-1.5 sm:gap-2 h-[580px] sm:h-[500px] md:h-[460px] lg:h-[480px] w-full">
              {services.map((service, index) => {
                const isActive = activeCard === index;

                return (
                  <div
                    key={service.number}
                    onMouseEnter={() => setActiveCard(index)}
                    onClick={() => {
                      if (isActive) {
                        router.push(`/Services/${service.slug}`);
                      } else {
                        setActiveCard(index);
                      }
                    }}
                    className={`relative overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-between group/card ${
                      isActive
                        ? "flex-[2.8] md:flex-[2.2] bg-[#536757] text-white rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 lg:p-9 shadow-xl"
                        : "flex-1 bg-[#F0EEEB] text-[#242424] hover:bg-[#EAE7E3] rounded-[22px] sm:rounded-[28px] p-5 sm:p-6"
                    }`}
                  >
                    {/* Top Section */}
                    {isActive ? (
                      <div className="flex items-center justify-between w-full">
                        <span className="font-sans font-medium text-sm sm:text-base tracking-wider text-white">
                          {service.number}
                        </span>
                      </div>
                    ) : (
                      <div className="w-full pt-2 sm:pt-4 text-center">
                        <h3 className="font-heading font-semibold text-base sm:text-lg lg:text-[19px] text-[#242424] leading-snug mx-auto max-w-[140px] sm:max-w-[160px]">
                          {service.title}
                        </h3>
                      </div>
                    )}

                    {/* Inactive Middle Spacer */}
                    {!isActive && <div />}

                    {/* Bottom Content for Active Card */}
                    {isActive ? (
                      <div className="flex flex-col gap-2.5 sm:gap-3 transition-all duration-500 delay-100 ease-out">
                        <Link
                          href={`/Services/${service.slug}`}
                          onClick={(e) => e.stopPropagation()}
                          className="font-heading font-medium text-2xl sm:text-3xl lg:text-[32px] text-white leading-tight tracking-tight hover:text-white/80 transition-colors inline-flex items-center gap-2 group/title"
                        >
                          <span>{service.title}</span>
                          <span className="text-xl transition-transform group-hover/title:translate-x-1">→</span>
                        </Link>
                        <p className="font-subheading text-white/90 text-sm sm:text-[15px] lg:text-base leading-relaxed max-w-lg">
                          {service.description}
                        </p>
                      </div>
                    ) : (
                      /* Optional Bottom placeholder to balance inactive card */
                      <div className="w-full flex justify-center opacity-0 pointer-events-none">
                        <span className="text-xs">{service.number}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-10 sm:mt-12 md:mt-14 flex justify-center">
            <Link
              href="/Services"
              className="cta-btn inline-flex items-center justify-center text-white font-body font-medium text-base sm:text-lg px-8 sm:px-11 py-3.5 sm:py-4 rounded-[12px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(0,0,0,0.4),0_12px_28px_rgba(83,103,87,0.35)] active:scale-95"
            >
              View more services
            </Link>
          </div>
        </div>
      </section>

      {/* "What We've Made" / Project Showcase Section */}
      <section id="work" className="w-full bg-[#F5F4F3] my-40 px-4 sm:px-8 md:px-12">
        <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
          {/* Section Header */}
          <div className="relative max-w-3xl mx-auto text-center mb-14 sm:mb-18 md:mb-20">
            {/* Doodle Handwritten Note on Top Right */}
            <div className="absolute -top-7 sm:-top-9 md:-top-11 right-0 sm:right-2 md:right-4 lg:right-6 flex flex-col items-center pointer-events-none select-none md:translate-x-6 lg:translate-x-10">
              <span className="font-doodle text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#536757] whitespace-nowrap -rotate-2">
                What We’ve Made
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight leading-[1.12]">
              <span className="text-neutral-400">Real work. </span>
              <span className="text-[#536757]">Real brands.</span>
            </h2>

            {/* Subheading / Description Paragraph */}
            <p className="font-subheading text-neutral-500 max-w-xl mx-auto text-base sm:text-lg leading-relaxed mt-4 sm:mt-5">
              We have worked across fashion, wellness, education, entertainment, luxury, events and everything in between. Some of our work is featured below in full. The rest you can see as a quick look at what we did and why it worked.
            </p>
          </div>

          {/* Project Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {projects.map((project, idx) => (
              <Link
                key={`${project.id}-${idx}`}
                href={`/Work/${project.slug}`}
                className="group flex flex-col cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/4.1] sm:aspect-[4/3.9] md:aspect-[4/4] rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#ECEAE6] ">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Project Details */}
                <div className="flex flex-col mt-6 sm:mt-7">
                  <h3 className="font-heading font-medium text-2xl sm:text-3xl text-[#536757] tracking-tight group-hover:text-[#242424] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="font-subheading text-neutral-500 text-sm sm:text-base leading-relaxed mt-2 max-w-xl">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex items-center gap-3 mt-4 sm:mt-5 flex-wrap">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-6 sm:px-7 py-2.5 rounded-full bg-white text-[#242424] font-body font-regular text-sm sm:text-[15px] shadow-[0_2px_12px_rgba(0,0,0,0.25)] border border-black/[0.04] transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Action Button */}
          <div className="mt-10 sm:mt-12 md:mt-18 flex justify-center">
            <Link
              href="/Work"
              className="cta-btn inline-flex items-center justify-center text-white font-body font-medium text-base sm:text-lg px-8 sm:px-11 py-3.5 sm:py-4 rounded-[12px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(0,0,0,0.4),0_12px_28px_rgba(83,103,87,0.35)] active:scale-95"
            >
              View more projects
            </Link>
          </div>
        </div>
      </section>

      {/* "The People Behind the Work" / About Us Section */}
      <AboutUsSection />

      {/* FAQ Fun Section */}
      <FAQFun />

      {/* Scattered Pills FAQ Section */}
      <FAQ />

      {/* Criss-Crossing Ticker Ribbons Section */}
      <section className="relative w-full mt-4 sm:mt-6 mb-10 sm:mb-24 lg:mb-40 overflow-hidden bg-[#F5F4F3] select-none no-scroll-animate">
        <div className="relative w-full flex items-center justify-center h-[220px] sm:h-[260px] md:h-[290px]">
          {/* Black Strip Ribbon (Angled bottom-left to top-right, moving right-to-left) */}
          <div className="absolute w-[300vw] left-1/2 -translate-x-1/2 py-3.5 sm:py-4 md:py-5 bg-[#1C1C1C] text-white shadow-[0_12px_28px_rgba(0,0,0,0.35)] rotate-[6.5deg] sm:rotate-[5deg] md:rotate-[3.8deg] z-10 overflow-hidden flex items-center">
            <div className="animate-marquee flex items-center whitespace-nowrap">
              {Array.from({ length: 6 }).map((_, setIdx) => (
                <div key={`black-set-${setIdx}`} className="flex items-center">
                  {[
                    "Social Media Management",
                    "Performance Marketing",
                    "UGC and Content Shoots",
                    "AI Generated Videos",
                    "Web Design and Development",
                    "Brand Identity",
                    "Founder Led Marketing",
                    "Strategy First",
                    "Built In House",
                    "Trusted by 25+ Brands",
                  ].map((item, idx) => (
                    <React.Fragment key={`black-${setIdx}-${idx}`}>
                      <span className="font-geist font-medium text-base sm:text-lg md:text-[21px] tracking-tight text-white whitespace-nowrap">
                        {item}
                      </span>
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 shrink-0 mx-5 sm:mx-7 md:mx-8"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                      </svg>
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Green Strip Ribbon (Angled top-left to bottom-right, moving left-to-right) */}
          <div className="absolute w-[300vw] left-1/2 -translate-x-1/2 py-3.5 sm:py-4 md:py-5 bg-[#536757] text-white shadow-[0_16px_36px_rgba(0,0,0,0.4)] rotate-[-6.5deg] sm:rotate-[-5deg] md:rotate-[-3.8deg] z-20 overflow-hidden flex items-center">
            <div className="animate-marquee-reverse flex items-center whitespace-nowrap">
              {Array.from({ length: 6 }).map((_, setIdx) => (
                <div key={`green-set-${setIdx}`} className="flex items-center">
                  {[
                    "Social Media Management",
                    "Performance Marketing",
                    "UGC and Content Shoots",
                    "AI Generated Videos",
                    "Web Design and Development",
                    "Brand Identity",
                    "Founder Led Marketing",
                    "Strategy First",
                    "Built In House",
                    "Trusted by 25+ Brands",
                  ].map((item, idx) => (
                    <React.Fragment key={`green-${setIdx}-${idx}`}>
                      <span className="font-geist font-medium text-base sm:text-lg md:text-[21px] tracking-tight text-white whitespace-nowrap">
                        {item}
                      </span>
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 shrink-0 mx-5 sm:mx-7 md:mx-8"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                      </svg>
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section with Auto-Cycling Scattered Cards */}
      <TestimonialSection />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}


