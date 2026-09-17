"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [serverError, setServerError] = useState("");

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

  const validateEmail = (emailStr: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailStr.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");
    setNameError("");
    setEmailError("");
    setPhoneError("");

    // Client-side validations
    let hasError = false;

    if (!formData.name.trim()) {
      setNameError("Please enter your name.");
      hasError = true;
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      setNameError("Name can only contain alphabetic letters and spaces.");
      hasError = true;
    }

    if (!formData.email.trim()) {
      setEmailError("Please enter your email.");
      hasError = true;
    } else if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address (e.g. name@example.com).");
      hasError = true;
    }

    if (!formData.phone.trim()) {
      setPhoneError("Please enter your phone number.");
      hasError = true;
    } else if (!/^\d+$/.test(formData.phone.trim())) {
      setPhoneError("Phone number must contain only numeric digits.");
      hasError = true;
    } else if (formData.phone.trim().length < 5 || formData.phone.trim().length > 16) {
      setPhoneError("Please enter a valid phone number (5-16 digits).");
      hasError = true;
    }

    if (hasError) return;

    try {
      setIsSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          companyName: formData.companyName.trim(),
          serviceNeeded: formData.serviceNeeded,
          brandDetails: formData.brandDetails.trim(),
          email: formData.email.trim(),
          countryCode,
          phone: formData.phone.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        companyName: "",
        serviceNeeded: "",
        brandDetails: "",
        email: "",
        phone: "",
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 6000);
    } catch (err: any) {
      console.error("Submission error:", err);
      setServerError(err?.message || "Failed to send your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const ShortInTimeCard = ({ className = "" }: { className?: string }) => (
    <div
      className={`bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 border border-black/[0.04] max-w-sm ${className}`}
    >
      {/* Calendly Logo */}
      <div className="mb-5 sm:mb-6">
        <Image
          src="/Calendly.webp"
          alt="Calendly"
          width={130}
          height={27}
          className="h-7 sm:h-8 w-auto object-contain"
        />
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
          href="https://calendly.com/dipanitib20/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[#242424] hover:bg-[#383838] text-white font-body font-medium text-sm sm:text-base px-7 sm:px-8 py-3 rounded-[12px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(0,0,0,0.4),0_8px_20px_rgba(0,0,0,0.35)] active:scale-95 transition-all duration-200"
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
      <main className="flex-1 pt-32 sm:pt-40 md:pt-44 mb-20 px-4 sm:px-8 md:px-12">
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
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-normal tracking-tight leading-[1.12]">
                <span className="text-[#536757]/65">Got a project</span>
                <br />
                <span className="text-[#536757]">in mind?</span>
              </h1>

              {/* Intro Subtext */}
              <div className="mt-6 sm:mt-8 space-y-2.5 max-w-md">
                
                <p className="font-body text-[#242424]/80 text-sm sm:text-[15px] leading-relaxed">
                  Fashion, jewellery, wellness, education, hospitality and B2B. Some came for one campaign and stayed for the year. If your brand is somewhere on that list, we have probably already solved the problem you are about to describe on the call.
                </p>
              </div>

              {/* "Short in time?" Card (Visible on Desktop here) */}
              <ShortInTimeCard className="hidden lg:block mt-10 sm:mt-12" />
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
                    onChange={(e) => {
                      // Only alphabets and spaces allowed
                      const filtered = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                      setFormData((prev) => ({ ...prev, name: filtered }));
                      if (nameError) setNameError("");
                    }}
                    placeholder="Enter your name"
                    className={`w-full bg-white rounded-[16px] px-5 py-3.5 sm:py-4 text-base font-body text-[#242424] placeholder:text-neutral-400/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border ${
                      nameError ? "border-red-400 ring-1 ring-red-400/50" : "border-black/[0.05]"
                    } focus:outline-none focus:ring-2 focus:ring-[#536757]/30 transition-all`}
                  />
                  {nameError && (
                    <p className="text-xs text-red-500 font-body pl-1">{nameError}</p>
                  )}
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
                    onChange={(e) => {
                      const val = e.target.value;
                      setFormData((prev) => ({ ...prev, email: val }));
                      if (emailError && (validateEmail(val) || !val)) {
                        setEmailError("");
                      }
                    }}
                    onBlur={() => {
                      if (formData.email && !validateEmail(formData.email)) {
                        setEmailError("Please enter a valid email address.");
                      }
                    }}
                    placeholder="yourname@gmail.com"
                    className={`w-full bg-white rounded-[16px] px-5 py-3.5 sm:py-4 text-base font-body text-[#242424] placeholder:text-neutral-400/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border ${
                      emailError ? "border-red-400 ring-1 ring-red-400/50" : "border-black/[0.05]"
                    } focus:outline-none focus:ring-2 focus:ring-[#536757]/30 transition-all`}
                  />
                  {emailError && (
                    <p className="text-xs text-red-500 font-body pl-1">{emailError}</p>
                  )}
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
                      required
                      value={formData.phone}
                      onChange={(e) => {
                        // Only numerics allowed
                        const numeric = e.target.value.replace(/\D/g, "");
                        setFormData((prev) => ({ ...prev, phone: numeric }));
                        if (phoneError) setPhoneError("");
                      }}
                      placeholder="Enter your phone number"
                      className={`flex-1 bg-white rounded-[16px] px-5 py-3.5 sm:py-4 text-base font-body text-[#242424] placeholder:text-neutral-400/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border ${
                        phoneError ? "border-red-400 ring-1 ring-red-400/50" : "border-black/[0.05]"
                      } focus:outline-none focus:ring-2 focus:ring-[#536757]/30 transition-all min-w-0`}
                    />
                  </div>
                  {phoneError && (
                    <p className="text-xs text-red-500 font-body pl-1">{phoneError}</p>
                  )}
                </div>

                {/* Submit Button & Disclaimer */}
                <div className="flex flex-col items-center gap-3 pt-2">
                  {serverError && (
                    <div className="w-full bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-[14px] text-sm font-body text-center">
                      {serverError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full inline-flex items-center justify-center bg-[#1C1C1C] hover:bg-[#333333] text-white font-body font-medium text-base sm:text-lg py-4 rounded-[16px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(0,0,0,0.4),0_12px_28px_rgba(0,0,0,0.35)] active:scale-[0.98] transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed ${
                      isSubmitted ? "!bg-[#536757] hover:!bg-[#435346]" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : isSubmitted ? (
                      "Request Submitted! ✓"
                    ) : (
                      "Submit"
                    )}
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
      <SimpleFAQ pageKey="contact" className="!mt-0 !mb-0" />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
