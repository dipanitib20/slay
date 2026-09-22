"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import LazyVideo from "../../components/lazy-video";
import { getProjectBySlug, projectsData, BentoItem, ProjectCarousel } from "../../data/projects";

/* ── Helper to detect all standard video formats ── */
const isVideoMedia = (src?: string): boolean => {
  if (!src) return false;
  const clean = src.trim().toLowerCase();
  return (
    clean.endsWith(".webm") ||
    clean.endsWith(".mp4") ||
    clean.endsWith(".mov") ||
    clean.endsWith(".m4v") ||
    clean.endsWith(".ogg") ||
    clean.endsWith(".ogv")
  );
};

/* ── Project Carousel Row Component (Smooth horizontal swipe & control) ── */
function ProjectCarouselRow({
  carousel,
  onImageClick,
}: {
  carousel: ProjectCarousel;
  onImageClick: (img: string, title?: string, caption?: string) => void;
}) {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      // Estimate current card index
      const cardWidth = 380;
      const idx = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(Math.min(Math.max(0, idx), carousel.images.length - 1));
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full flex flex-col">
      {/* Carousel Header Row: Title & Subtitle + Arrows / Counter */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
        <div>
          {carousel.title && (
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#242424] font-medium tracking-tight">
              {carousel.title}
            </h3>
          )}
          {carousel.subtitle && (
            <p className="font-subheading text-neutral-500 text-xs sm:text-sm md:text-base max-w-2xl mt-2 leading-relaxed">
              {carousel.subtitle}
            </p>
          )}
        </div>

        {/* Carousel Controls (Counter & Arrows) */}
        <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
          <span className="font-body text-xs sm:text-sm font-semibold text-neutral-400 tracking-wider mr-2">
            0{currentIndex + 1} / {carousel.images.length < 10 ? `0${carousel.images.length}` : carousel.images.length}
          </span>
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-black/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center text-[#242424] hover:bg-[#536757] hover:text-white hover:border-[#536757] disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 transition-all cursor-pointer"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-black/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center text-[#242424] hover:bg-[#536757] hover:text-white hover:border-[#536757] disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 transition-all cursor-pointer"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Track with Snap & Hidden Scrollbar */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto scroll-smooth scrollbar-none snap-x snap-mandatory py-2 -mx-4 px-4 sm:-mx-8 sm:px-8 md:-mx-12 md:px-12 lg:mx-0 lg:px-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {carousel.images.map((imgSrc, imgIdx) => {
          const isVid = isVideoMedia(imgSrc);
          return (
            <div
              key={imgIdx}
              onClick={() => onImageClick(imgSrc, carousel.title, carousel.subtitle)}
              className="group relative shrink-0 snap-start w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] aspect-[4/5] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#ECEAE6] border border-black/[0.05] shadow-[0_4px_24px_rgba(0,0,0,0.04)] cursor-pointer hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              {isVid ? (
                <LazyVideo
                  src={imgSrc.trim()}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              ) : (
                <Image
                  src={imgSrc.trim()}
                  alt={`${carousel.title || "Project visual"} - Slide ${imgIdx + 1}`}
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 320px, 360px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              )}
              {/* Subtle Gradient Overlay on Hover with Zoom Icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-5 text-white pointer-events-none">
                <span className="font-subheading text-xs font-semibold tracking-wider uppercase text-white/90">
                  Slide 0{imgIdx + 1}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Bento Media Item Component (Clean display without shadows/hover overlays) ── */
function BentoMediaItem({
  item,
  onClick,
}: {
  item: BentoItem;
  onClick: () => void;
}) {
  const isVid = isVideoMedia(item.image);
  const cleanSrc = encodeURI(item.image.trim());

  return (
    <div
      onClick={onClick}
      className="relative w-full cursor-pointer flex flex-col"
    >
      <div
        className={`relative w-full ${item.aspectClass || "aspect-[9/16]"} rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#ECEAE6] border border-black/[0.05]`}
      >
        {isVid ? (
          <LazyVideo
            src={item.image.trim()}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <Image
            src={item.image.trim()}
            alt={item.title || "Project asset"}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        )}
      </div>
    </div>
  );
}

export default function ProjectSlugPage() {
  const params = useParams();
  const rawSlug = params?.slug;
  const slug = Array.isArray(rawSlug) ? rawSlug.join("/") : (rawSlug as string) || "";

  const project = getProjectBySlug(slug) || projectsData[0];
  const nextProject =
    getProjectBySlug(project.nextProjectSlug) || projectsData[1];

  const [activeLightbox, setActiveLightbox] = useState<{
    image: string;
    title: string;
    caption?: string;
  } | null>(null);

  return (
    <div className="min-h-screen bg-[#F5F4F3] text-[#242424] flex flex-col justify-between selection:bg-[#536757]/20 selection:text-[#536757]">
      {/* Floating Header / Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* =========================================
            1. HERO SECTION (Saratoga Inspired)
           ========================================= */}
        <section className="pt-32 sm:pt-40 md:pt-44 mb-16 sm:mb-24 lg:mb-32 px-4 sm:px-8 md:px-12">
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
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-[#536757] font-normal leading-[1.08]">
                {project.heroHeadline[0]}
                <br />
                {project.heroHeadline[1]}
              </h1>

              {/* Narrative Story Description */}
              <p className="font-subheading text-neutral-500 max-w-3xl text-xs sm:text-sm md:text-base leading-relaxed mt-3.5 sm:mt-4">
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
            2. 3-COLUMN BENTO MASONRY IMAGE/VIDEO GALLERY
           ========================================= */}
        {project.bentoGrid && (
          <section className="my-16 sm:my-24 lg:my-32 px-4 sm:px-8 md:px-12">
            <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-start">
                {/* Column 1 */}
                <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
                  {project.bentoGrid.column1?.map((item, idx) => (
                    <BentoMediaItem
                      key={item.id || `col1-${idx}`}
                      item={item}
                      onClick={() =>
                        setActiveLightbox({
                          image: item.image,
                          title: item.title,
                          caption: item.caption,
                        })
                      }
                    />
                  ))}
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
                  {project.bentoGrid.column2?.map((item, idx) => (
                    <BentoMediaItem
                      key={item.id || `col2-${idx}`}
                      item={item}
                      onClick={() =>
                        setActiveLightbox({
                          image: item.image,
                          title: item.title,
                          caption: item.caption,
                        })
                      }
                    />
                  ))}
                </div>

                {/* Column 3 */}
                <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
                  {project.bentoGrid.column3?.map((item, idx) => (
                    <BentoMediaItem
                      key={item.id || `col3-${idx}`}
                      item={item}
                      onClick={() =>
                        setActiveLightbox({
                          image: item.image,
                          title: item.title,
                          caption: item.caption,
                        })
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =========================================
            3. PROJECT CAROUSEL SECTION (Below Bento Images)
               - If 0 carousels: hidden, only bento is visible
               - If 1 carousel: 1 row rendered below bento
               - If 2+ carousels: rendered in separate rows
           ========================================= */}
        {project.carousels && project.carousels.length > 0 && (
          <section className="my-16 sm:my-24 lg:my-32 px-4 sm:px-8 md:px-12 select-none">
            <div className="max-w-8xl mx-auto md:px-6 lg:px-15 flex flex-col gap-14 sm:gap-20 lg:gap-24">
              {project.carousels.map((carousel, cIdx) => (
                <ProjectCarouselRow
                  key={carousel.id || `carousel-${cIdx}`}
                  carousel={carousel}
                  onImageClick={(img, title, caption) =>
                    setActiveLightbox({
                      image: img,
                      title: title || `${project.title} - Slide ${cIdx + 1}`,
                      caption: caption,
                    })
                  }
                />
              ))}
            </div>
          </section>
        )}

        {/* =========================================
            4. NEXT PROJECT / MORE WORK BENTO CTA
           ========================================= */}
        <section className="w-full bg-[#F5F4F3] my-16 sm:my-24 lg:my-32 px-4 sm:px-8 md:px-12 border-t border-black/[0.06] pt-16 sm:pt-24 lg:pt-32">
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
                className="cta-btn inline-flex items-center justify-center text-white font-body font-medium text-sm sm:text-base px-7 py-3.5 rounded-[12px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(0,0,0,0.4),0_8px_20px_rgba(83,103,87,0.3)] active:scale-95 self-start md:self-auto"
              >
                View all case studies
              </Link>
            </div>

            {/* Next Project Featured Card */}
            <Link
              href={`/Work/${nextProject.slug}`}
              className="group block relative w-full aspect-[16/9] sm:aspect-[2.2/1] md:aspect-[2.6/1] rounded-[28px] sm:rounded-[40px] overflow-hidden bg-[#ECEAE6] border border-black/[0.06] shadow-lg"
            >
              {isVideoMedia(nextProject.heroImage) ? (
                <LazyVideo
                  src={nextProject.heroImage.trim()}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              ) : (
                <Image
                  src={nextProject.heroImage.trim()}
                  alt={nextProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-10 md:p-14 text-white">
                <span className="font-subheading text-xs sm:text-sm uppercase tracking-widest text-[#BAC7BE] font-semibold mb-2">
                  Next Case Study · {nextProject.category}
                </span>
                <h3 className="font-heading text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight">
                  {nextProject.title}
                </h3>
                <p className="font-subheading text-neutral-300 text-xs sm:text-sm md:text-base max-w-2xl mt-2 line-clamp-2">
                  {nextProject.description}
                </p>
                <div className="flex items-center gap-2 mt-4 text-white font-body text-sm font-medium">
                  <span>View Project</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main>

      {/* Full-Screen Lightbox Modal for Bento & Carousel Visuals */}
      {activeLightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none animate-fadeIn"
          onClick={() => setActiveLightbox(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setActiveLightbox(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all z-10 cursor-pointer"
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

          {/* Current image / video display */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {isVideoMedia(activeLightbox.image) ? (
              <video
                src={encodeURI(activeLightbox.image.trim())}
                autoPlay
                loop
                muted
                controls
                playsInline
                className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
              />
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={activeLightbox.image.trim()}
                  alt={activeLightbox.title}
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            )}
            <div className="text-center text-white mt-4">
              <h4 className="font-heading text-lg sm:text-xl">
                {activeLightbox.title}
              </h4>
              {activeLightbox.caption && (
                <p className="font-subheading text-xs sm:text-sm text-neutral-400 mt-1">
                  {activeLightbox.caption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

