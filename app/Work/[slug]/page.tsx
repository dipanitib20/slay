"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { getProjectBySlug, projectsData, BentoItem } from "../../data/projects";

export default function ProjectSlugPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const project = getProjectBySlug(slug) || projectsData[0];
  const nextProject =
    getProjectBySlug(project.nextProjectSlug) || projectsData[1];

  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(
    null
  );

  // Flatten all bento items for lightbox viewer
  const allBentoItems: BentoItem[] = [
    ...project.bentoGrid.column1,
    ...project.bentoGrid.column2,
    ...project.bentoGrid.column3,
  ];

  return (
    <div className="min-h-screen bg-[#F5F4F3] text-[#242424] flex flex-col justify-between selection:bg-[#536757]/20 selection:text-[#536757]">
      {/* Floating Header / Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* =========================================
            1. HERO SECTION (Saratoga Inspired)
           ========================================= */}
        <section className="pt-32 sm:pt-40 md:pt-44 mb-40 px-4 sm:px-8 md:px-12">
          <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
            {/* Back to Work Link */}
            <div className="mb-6 sm:mb-8">
              <Link
                href="/Work"
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
                <span>Back to all projects</span>
              </Link>
            </div>

            {/* Hero Main Header Content */}
            <div className="max-w-5xl">
              {/* Display Typography */}
              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[80px] tracking-tight leading-[1.04] uppercase">
                <span className="text-[#9BA59D] font-normal">
                  {project.heroHeadline[0]}
                </span>
                <br />
                <span className="text-[#536757] font-medium">
                  {project.heroHeadline[1]}
                </span>
              </h1>

              {/* Narrative Story Description */}
              <p className="font-subheading text-neutral-600 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed mt-6 sm:mt-8">
                {project.heroDescription}
              </p>
            </div>

            {/* Project Metadata Bento Chips */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-black/[0.08]">
              <div className="flex flex-col">
                <span className="font-subheading text-neutral-400 text-xs uppercase tracking-wider font-semibold">
                  Client
                </span>
                <span className="font-subheading text-[#242424] font-medium text-sm sm:text-base mt-1">
                  {project.meta.client}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-subheading text-neutral-400 text-xs uppercase tracking-wider font-semibold">
                  Year
                </span>
                <span className="font-subheading text-[#242424] font-medium text-sm sm:text-base mt-1">
                  {project.meta.year}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-subheading text-neutral-400 text-xs uppercase tracking-wider font-semibold">
                  Services
                </span>
                <span className="font-subheading text-[#242424] font-medium text-sm sm:text-base mt-1">
                  {project.meta.services}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-subheading text-neutral-400 text-xs uppercase tracking-wider font-semibold">
                  Impact
                </span>
                <span className="font-subheading text-[#536757] font-semibold text-sm sm:text-base mt-1">
                  {project.meta.impact}
                </span>
              </div>
            </div>

            {/* Star Icon Divider */}
            <div className="flex items-center justify-center mt-12 sm:mt-16">
              <div className="flex items-center gap-3">
                <div className="w-12 sm:w-24 h-[1px] bg-black/[0.1]" />
                <span className="text-[#536757] text-lg sm:text-xl select-none">
                  ✦
                </span>
                <div className="w-12 sm:w-24 h-[1px] bg-black/[0.1]" />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            2. 3-COLUMN BENTO MASONRY IMAGE GALLERY
           ========================================= */}
        <section className="my-40 px-4 sm:px-8 md:px-12">
          <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
            {/* Bento Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-start">
              {/* Column 1 */}
              <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
                {project.bentoGrid.column1.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveLightboxIndex(idx)}
                    className="group relative cursor-pointer flex flex-col"
                  >
                    <div
                      className={`relative w-full ${item.aspectClass} rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#ECEAE6] border border-black/[0.05] shadow-[0_4px_24px_rgba(0,0,0,0.04)]`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div className="text-white">
                          {item.tag && (
                            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#BAC7BE] block mb-1">
                              {item.tag}
                            </span>
                          )}
                          <h4 className="font-heading text-lg font-medium">
                            {item.title}
                          </h4>
                          {item.caption && (
                            <p className="font-subheading text-xs text-neutral-300 mt-1">
                              {item.caption}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
                {project.bentoGrid.column2.map((item, idx) => {
                  const globalIdx = project.bentoGrid.column1.length + idx;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveLightboxIndex(globalIdx)}
                      className="group relative cursor-pointer flex flex-col"
                    >
                      <div
                        className={`relative w-full ${item.aspectClass} rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#ECEAE6] border border-black/[0.05] shadow-[0_4px_24px_rgba(0,0,0,0.04)]`}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <div className="text-white">
                            {item.tag && (
                              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#BAC7BE] block mb-1">
                                {item.tag}
                              </span>
                            )}
                            <h4 className="font-heading text-lg font-medium">
                              {item.title}
                            </h4>
                            {item.caption && (
                              <p className="font-subheading text-xs text-neutral-300 mt-1">
                                {item.caption}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
                {project.bentoGrid.column3.map((item, idx) => {
                  const globalIdx =
                    project.bentoGrid.column1.length +
                    project.bentoGrid.column2.length +
                    idx;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveLightboxIndex(globalIdx)}
                      className="group relative cursor-pointer flex flex-col"
                    >
                      <div
                        className={`relative w-full ${item.aspectClass} rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#ECEAE6] border border-black/[0.05] shadow-[0_4px_24px_rgba(0,0,0,0.04)]`}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <div className="text-white">
                            {item.tag && (
                              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#BAC7BE] block mb-1">
                                {item.tag}
                              </span>
                            )}
                            <h4 className="font-heading text-lg font-medium">
                              {item.title}
                            </h4>
                            {item.caption && (
                              <p className="font-subheading text-xs text-neutral-300 mt-1">
                                {item.caption}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            4. NEXT PROJECT / MORE WORK BENTO CTA
           ========================================= */}
        <section className="w-full bg-[#F5F4F3] my-40 px-4 sm:px-8 md:px-12 border-t border-black/[0.04] pt-40">
          <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
              <div>
                <span className="font-subheading text-xs font-bold text-[#536757] uppercase tracking-widest block mb-2">
                  Up Next
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#242424] font-medium tracking-tight">
                  Continue Exploring
                </h2>
              </div>
              <Link
                href="/Work"
                className="inline-flex items-center justify-center bg-[#242424] text-white font-body font-medium text-sm sm:text-base px-7 py-3.5 rounded-[12px] shadow-[0_8px_20px_rgba(0,0,0,0.3)] active:scale-95 transition-all duration-300 self-start md:self-auto"
              >
                View all case studies
              </Link>
            </div>

            {/* Next Project Featured Card */}
            <Link
              href={`/Work/${nextProject.slug}`}
              className="group block relative w-full aspect-[16/9] sm:aspect-[2.2/1] md:aspect-[2.6/1] rounded-[28px] sm:rounded-[40px] overflow-hidden bg-[#ECEAE6] border border-black/[0.06] shadow-lg"
            >
              <Image
                src={nextProject.heroImage}
                alt={nextProject.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-10 md:p-14 text-white">
                <span className="font-subheading text-xs sm:text-sm uppercase tracking-widest text-[#BAC7BE] font-semibold mb-2">
                  Next Case Study · {nextProject.category}
                </span>
                <h3 className="font-heading text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight">
                  {nextProject.title}
                </h3>
                <p className="font-subheading text-xs sm:text-sm md:text-base text-neutral-300 max-w-xl mt-2 line-clamp-2">
                  {nextProject.tagline}
                </p>
                <div className="mt-4 sm:mt-6 inline-flex items-center gap-2 font-subheading text-xs sm:text-sm font-semibold text-white group-hover:text-[#BAC7BE] transition-colors">
                  <span>View Case Study</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none"
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all z-10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex(
                (activeLightboxIndex - 1 + allBentoItems.length) %
                  allBentoItems.length
              );
            }}
            className="absolute left-4 sm:left-8 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all z-10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Current image */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={allBentoItems[activeLightboxIndex].image}
                alt={allBentoItems[activeLightboxIndex].title}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center text-white mt-4">
              <h4 className="font-heading text-lg sm:text-xl">
                {allBentoItems[activeLightboxIndex].title}
              </h4>
              {allBentoItems[activeLightboxIndex].caption && (
                <p className="font-subheading text-xs sm:text-sm text-neutral-400 mt-1">
                  {allBentoItems[activeLightboxIndex].caption}
                </p>
              )}
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex(
                (activeLightboxIndex + 1) % allBentoItems.length
              );
            }}
            className="absolute right-4 sm:right-8 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all z-10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
