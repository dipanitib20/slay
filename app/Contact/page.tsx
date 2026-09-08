"use client";

import React, { useState } from "react";
import Navbar from "../components/navbar";
import SimpleFAQ from "../components/simplefaq";
import Footer from "../components/footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDetails: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", projectDetails: "" });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#F5F4F3] text-[#242424] flex flex-col justify-between selection:bg-[#536757]/20 selection:text-[#536757]">
      {/* Floating Header / Navbar */}
      <Navbar bookCallHref="/Contact" />

      {/* Main Contact Section */}
      <main className="flex-1 pt-32 sm:pt-40 md:pt-44 pb-16 sm:pb-24 px-4 sm:px-8 md:px-12">
        <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
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

              {/* "Short in time?" Card */}
              <div className="bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/[0.04] mt-10 sm:mt-14 max-w-sm">
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
            </div>

            {/* Right Column: Contact Request Form (Aligned to Right Edge) */}
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col w-full">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Name Input */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="font-heading font-medium text-lg sm:text-xl text-[#242424] tracking-tight"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    className="w-full bg-white rounded-[16px] px-5 py-4 sm:py-4.5 text-base font-body text-[#242424] placeholder:text-neutral-400 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-black/[0.05] focus:outline-none focus:ring-2 focus:ring-[#536757]/30 transition-all"
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-heading font-medium text-lg sm:text-xl text-[#242424] tracking-tight"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your.email@company.com"
                    className="w-full bg-white rounded-[16px] px-5 py-4 sm:py-4.5 text-base font-body text-[#242424] placeholder:text-neutral-400 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-black/[0.05] focus:outline-none focus:ring-2 focus:ring-[#536757]/30 transition-all"
                  />
                </div>

                {/* Message / Project Details Textarea */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="projectDetails"
                    className="font-heading font-medium text-lg sm:text-xl text-[#242424] tracking-tight"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="projectDetails"
                    rows={5}
                    value={formData.projectDetails}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        projectDetails: e.target.value,
                      })
                    }
                    placeholder="Share your goals, timeline, deliverables, or questions..."
                    className="w-full bg-white rounded-[20px] px-5 py-4 sm:py-4.5 text-base font-body text-[#242424] placeholder:text-neutral-400 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-black/[0.05] focus:outline-none focus:ring-2 focus:ring-[#536757]/30 transition-all resize-none min-h-[160px] sm:min-h-[190px]"
                  />
                </div>

                {/* Send Request Button & Disclaimer */}
                <div className="flex flex-col items-start gap-2 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center bg-[#242424] hover:bg-[#383838] text-white font-body font-medium text-base sm:text-lg px-9 sm:px-11 py-3.5 sm:py-4 rounded-[12px] shadow-[0_12px_28px_rgba(0,0,0,0.5)] active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    {isSubmitted ? "Request Sent! ✓" : "Send request"}
                  </button>

                  <p className="text-[12px] sm:text-[13px] text-neutral-400 font-body">
                    By submitting, you agree to our{" "}
                    <span className="underline cursor-pointer">Terms</span> and{" "}
                    <span className="underline cursor-pointer">
                      Privacy Policy
                    </span>
                    .
                  </p>
                </div>
              </form>
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
