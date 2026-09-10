"use client";

import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/navbar";
import SimpleFAQ from "../components/simplefaq";
import Footer from "../components/footer";
import { countryCodes } from "@/data/countrycode";

const servicesList = [
  "Web Design & Development",
  "Brand Strategy & Identity",
  "Performance Marketing",
  "Social Media Management",
  "UGC & Content Shoots",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    serviceNeeded: "",
    brandDetails: "",
    email: "",
    phone: "",
  });
  const [countryCode, setCountryCode] = useState("+91");
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceRef = useRef<HTMLDivElement>(null);
  const countryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        serviceRef.current &&
        !serviceRef.current.contains(event.target as Node)
      ) {
        setIsServiceOpen(false);
      }
      if (
        countryRef.current &&
        !countryRef.current.contains(event.target as Node)
      ) {
        setIsCountryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedCountry =
    countryCodes.find((c) => c.dialCode === countryCode) || countryCodes[0];

  const filteredCountries = countryCodes.filter(
    (c) =>
      c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.dialCode.includes(countrySearch) ||
      c.code.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        companyName: "",
        serviceNeeded: "",
        brandDetails: "",
        email: "",
        phone: "",
      });
    }, 4000);
  };

  const ShortInTimeCard = ({ className = "" }: { className?: string }) => (
    <div
      className={`bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/[0.04] max-w-sm ${className}`}
    >
      {/* Coral/Salmon Accent Block */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#E68782] flex items-center justify-center text-white mb-5 sm:mb-6 shadow-sm">
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>

      {/* Card Title */}
      <h2 className="font-heading font-medium text-2xl sm:text-3xl text-[#242424] tracking-tight">
        Short in time?
      </h2>

      {/* Card Description */}
      <p className="font-subheading text-neutral-500 text-sm sm:text-[15px] leading-relaxed mt-2.5">
        Let&apos;s turn your vision into reality! Contact us today, and let&apos;s
        start a conversation about your next project.
      </p>

      {/* Book a Call Button */}
      <div className="mt-6">
        <a
          href="https://cal.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[#242424] hover:bg-[#383838] text-white font-body font-medium text-sm sm:text-base px-7 sm:px-8 py-3 rounded-[12px] shadow-[0_8px_20px_rgba(0,0,0,0.35)] active:scale-95 transition-all duration-200"
        >
          Book a call
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F5F4F3] text-[#242424] flex flex-col justify-between selection:bg-[#536757]/20 selection:text-[#536757]">
      {/* Floating Header / Navbar */}
      <Navbar bookCallHref="/Contact" />

      {/* Main Contact Section */}
      <main className="flex-1 pt-32 sm:pt-40 md:pt-44 mb-40 px-4 sm:px-8 md:px-12">
        <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Heading & Quick Call Card */}
            <div className="lg:col-span-5 flex flex-col">
              {/* Doodle Note */}
              <div className="mb-2 -rotate-6 select-none pointer-events-none w-fit">
                <span className="font-doodle text-3xl sm:text-4xl text-[#7E8B80]/90">
                  Let&apos;s Talk
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[62px] text-[#536757] font-normal tracking-tight leading-[1.12]">
                Got a project in 
                <br />mind?
              </h1>

              {/* "Short in time?" Card (Visible on Desktop here) */}
              <ShortInTimeCard className="hidden lg:block mt-10 sm:mt-14" />
            </div>

            {/* Right Column: Contact Request Form (Aligned to Right Edge) */}
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col w-full">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">
                {/* 1. Your Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="font-heading font-medium text-lg sm:text-xl text-[#242424] tracking-tight"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Enter your name"
                    className="w-full bg-white rounded-[16px] px-5 py-3.5 sm:py-4 text-base font-body text-[#242424] placeholder:text-neutral-400/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-black/[0.05] focus:outline-none focus:ring-2 focus:ring-[#536757]/30 transition-all"
                  />
                </div>

                {/* 2. Your brand or company name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="companyName"
                    className="font-heading font-medium text-lg sm:text-xl text-[#242424] tracking-tight"
                  >
                    Your brand or company name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({ ...formData, companyName: e.target.value })
                    }
                    placeholder="Enter brand or company name"
                    className="w-full bg-white rounded-[16px] px-5 py-3.5 sm:py-4 text-base font-body text-[#242424] placeholder:text-neutral-400/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-black/[0.05] focus:outline-none focus:ring-2 focus:ring-[#536757]/30 transition-all"
                  />
                </div>

                {/* 3. What you are looking for */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="serviceNeeded"
                    className="font-heading font-medium text-lg sm:text-xl text-[#242424] tracking-tight"
                  >
                    What you are looking for
                  </label>
                  <div className="relative" ref={serviceRef}>
                    <button
                      type="button"
                      id="serviceNeeded"
                      onClick={() => {
                        setIsServiceOpen(!isServiceOpen);
                        setIsCountryOpen(false);
                      }}
                      className={`w-full bg-white rounded-[16px] px-5 py-3.5 sm:py-4 text-left text-base font-body shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-black/[0.05] focus:outline-none focus:ring-2 focus:ring-[#536757]/30 transition-all flex items-center justify-between cursor-pointer ${
                        formData.serviceNeeded
                          ? "text-[#242424]"
                          : "text-neutral-400/90"
                      }`}
                    >
                      <span className="truncate">
                        {formData.serviceNeeded || "Select an option"}
                      </span>
                      <svg
                        className={`w-4 h-4 text-neutral-400 transition-transform duration-200 shrink-0 ml-2 ${
                          isServiceOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {isServiceOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-white rounded-[16px] shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-black/[0.06] py-1.5 max-h-64 overflow-y-auto">
                        {servicesList.map((service) => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => {
                              setFormData({
                                ...formData,
                                serviceNeeded: service,
                              });
                              setIsServiceOpen(false);
                            }}
                            className={`w-full text-left px-5 py-3 text-sm sm:text-base font-body hover:bg-[#F5F4F3] transition-colors flex items-center justify-between ${
                              formData.serviceNeeded === service
                                ? "text-[#536757] font-medium bg-[#536757]/5"
                                : "text-[#242424]"
                            }`}
                          >
                            <span>{service}</span>
                            {formData.serviceNeeded === service && (
                              <svg
                                className="w-4 h-4 text-[#536757]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2.5"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* 4. Tell us about your brand */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="brandDetails"
                    className="font-heading font-medium text-lg sm:text-xl text-[#242424] tracking-tight"
                  >
                    Tell us about your brand
                  </label>
                  <textarea
                    id="brandDetails"
                    rows={4}
                    value={formData.brandDetails}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        brandDetails: e.target.value,
                      })
                    }
                    placeholder="Tell us about your brand, goals, etc."
                    className="w-full bg-white rounded-[20px] px-5 py-3.5 sm:py-4 text-base font-body text-[#242424] placeholder:text-neutral-400/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-black/[0.05] focus:outline-none focus:ring-2 focus:ring-[#536757]/30 transition-all resize-none min-h-[130px] sm:min-h-[150px]"
                  />
                </div>

                {/* 5. Your email */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-heading font-medium text-lg sm:text-xl text-[#242424] tracking-tight"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="yourname@gmail.com"
                    className="w-full bg-white rounded-[16px] px-5 py-3.5 sm:py-4 text-base font-body text-[#242424] placeholder:text-neutral-400/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-black/[0.05] focus:outline-none focus:ring-2 focus:ring-[#536757]/30 transition-all"
                  />
                </div>

                {/* 6. Your phone number */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="font-heading font-medium text-lg sm:text-xl text-[#242424] tracking-tight"
                  >
                    Your phone number
                  </label>
                  <div className="flex gap-2 sm:gap-3">
                    {/* Country Code Dropdown */}
                    <div className="relative shrink-0" ref={countryRef}>
                      <button
                        type="button"
                        id="countryCode"
                        onClick={() => {
                          setIsCountryOpen(!isCountryOpen);
                          setIsServiceOpen(false);
                        }}
                        className="h-full bg-white rounded-[16px] px-3.5 sm:px-4 py-3.5 sm:py-4 text-base font-body text-[#242424] shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-black/[0.05] focus:outline-none focus:ring-2 focus:ring-[#536757]/30 transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer whitespace-nowrap"
                      >
                        <span className="text-lg leading-none">{selectedCountry.flag}</span>
                        <span className="font-medium text-sm sm:text-base">
                          {selectedCountry.dialCode}
                        </span>
                        <svg
                          className={`w-3.5 h-3.5 text-[#242424]/60 transition-transform duration-200 ${
                            isCountryOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {isCountryOpen && (
                        <div className="absolute top-full left-0 mt-2 z-50 w-72 sm:w-80 bg-white rounded-[18px] shadow-[0_16px_40px_rgba(0,0,0,0.16)] border border-black/[0.08] p-2">
                          {/* Search Input */}
                          <div className="p-1 pb-2 border-b border-black/[0.05]">
                            <input
                              type="text"
                              value={countrySearch}
                              onChange={(e) => setCountrySearch(e.target.value)}
                              placeholder="Search country or code..."
                              className="w-full bg-[#F5F4F3] rounded-[10px] px-3 py-2 text-sm font-body text-[#242424] placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#536757]/40"
                              autoFocus
                            />
                          </div>

                          {/* Country List */}
                          <div className="max-h-56 overflow-y-auto mt-1 divide-y divide-black/[0.02]">
                            {filteredCountries.length > 0 ? (
                              filteredCountries.map((c) => (
                                <button
                                  key={`${c.code}-${c.dialCode}`}
                                  type="button"
                                  onClick={() => {
                                    setCountryCode(c.dialCode);
                                    setIsCountryOpen(false);
                                    setCountrySearch("");
                                  }}
                                  className={`w-full text-left px-3 py-2.5 rounded-[10px] text-sm font-body hover:bg-[#F5F4F3] transition-colors flex items-center justify-between ${
                                    countryCode === c.dialCode &&
                                    selectedCountry.code === c.code
                                      ? "bg-[#536757]/10 text-[#536757] font-medium"
                                      : "text-[#242424]"
                                  }`}
                                >
                                  <div className="flex items-center gap-2.5 truncate">
                                    <span className="text-base leading-none shrink-0">
                                      {c.flag}
                                    </span>
                                    <span className="truncate">{c.name}</span>
                                    <span className="text-xs text-neutral-400 font-mono shrink-0">
                                      ({c.code})
                                    </span>
                                  </div>
                                  <span className="font-mono text-xs text-neutral-500 shrink-0 ml-2">
                                    {c.dialCode}
                                  </span>
                                </button>
                              ))
                            ) : (
                              <div className="px-3 py-4 text-center text-xs text-neutral-400 font-body">
                                No country found
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="Enter your phone number"
                      className="flex-1 bg-white rounded-[16px] px-5 py-3.5 sm:py-4 text-base font-body text-[#242424] placeholder:text-neutral-400/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-black/[0.05] focus:outline-none focus:ring-2 focus:ring-[#536757]/30 transition-all min-w-0"
                    />
                  </div>
                </div>

                {/* Submit Button & Disclaimer */}
                <div className="flex flex-col items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center bg-[#1C1C1C] hover:bg-[#333333] text-white font-body font-medium text-base sm:text-lg py-4 rounded-[16px] shadow-[0_12px_28px_rgba(0,0,0,0.35)] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                  >
                    {isSubmitted ? "Request Submitted! ✓" : "Submit"}
                  </button>

                  <p className="text-[12px] sm:text-[13px] text-neutral-400 font-body text-center">
                    By submitting, you agree to our{" "}
                    <span className="underline cursor-pointer">Terms</span> and{" "}
                    <span className="underline cursor-pointer">
                      Privacy Policy
                    </span>
                    .
                  </p>
                </div>
              </form>

              {/* "Short in time?" Card (Visible on Mobile here after Form) */}
              <ShortInTimeCard className="block lg:hidden mt-10 sm:mt-12 w-full max-w-none" />
            </div>
          </div>
        </div>
      </main>

      {/* FAQ Section */}
      <SimpleFAQ />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
