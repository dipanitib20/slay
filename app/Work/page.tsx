"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
}

export default function WorkPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = ["All", "Design", "Strategy", "Branding", "Development"];

  const projects: ProjectItem[] = [
    {
      id: "project-1",
      slug: "the-social-refresh",
      title: "Indian Summer",
      description:
        "Reimagining a growing brand’s social presence with bold visuals, sharper storytelling, and a strategy built for engagement.",
      image: "/homework/indian-summer.png",
      category: "Design",
      tags: ["Design", "Strategy"],
    },
    {
      id: "project-2",
      slug: "lumen-brand-evolution",
      title: "Law in Heels",
      description:
        "Evolving a modern brand into an iconic identity with warm human-centric design and engaging content.",
      image: "/homework/law-in-heels.png",
      category: "Branding",
      tags: ["Branding", "Design"],
    },
    {
      id: "project-3",
      slug: "kinetic-motion-lab",
      title: "Kinetic Motion Lab",
      description:
        "Dynamic motion identity and digital campaign built for high-voltage creative pioneers.",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      category: "Strategy",
      tags: ["Design", "Strategy"],
    },
    {
      id: "project-4",
      slug: "nordic-living-space",
      title: "Nordic Living Space",
      description:
        "A serene digital sanctuary for Scandinavian interior design, blending tactile craftsmanship with frictionless e-commerce.",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
      category: "Development",
      tags: ["Design", "Development"],
    },
    {
      id: "project-5",
      slug: "the-social-refresh",
      title: "The Social Refresh",
      description:
        "Reimagining a growing brand’s social presence with bold visuals, sharper storytelling, and a strategy built for engagement.",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
      category: "Strategy",
      tags: ["Design", "Strategy"],
    },
    {
      id: "project-6",
      slug: "nordic-living-space",
      title: "Nordic Living Space",
      description:
        "Minimalist architectural e-commerce flagship engineered for speed, conversion, and spatial beauty.",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
      category: "Development",
      tags: ["Design", "Development"],
    },
    {
      id: "project-7",
      slug: "lumen-brand-evolution",
      title: "Lumen Brand Evolution",
      description:
        "Translating complex technology infrastructure into an effortless, warm, human-centric design language.",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
      category: "Design",
      tags: ["Design", "Strategy"],
    },
    {
      id: "project-8",
      slug: "kinetic-motion-lab",
      title: "Kinetic Motion Lab",
      description:
        "High-voltage digital campaigns and motion language that captures the relentless pace of modern culture.",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
      category: "Branding",
      tags: ["Design", "Branding"],
    },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "All" ||
        project.category === selectedCategory ||
        project.tags.includes(selectedCategory);

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredProjects = filteredProjects.slice(0, 2);
  const remainingProjects = filteredProjects.slice(2);

  return (
    <div className="min-h-screen bg-[#F5F4F3] text-[#242424] flex flex-col justify-between selection:bg-[#536757]/20 selection:text-[#536757]">
      {/* Floating Header / Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 pt-32 sm:pt-40 md:pt-44 mb-40 px-4 sm:px-8 md:px-12">
        <div className="max-w-8xl mx-auto md:px-6 lg:px-15">
          {/* Headline Section */}
          <div className="relative max-w-4xl mx-auto text-center z-40">
            {/* Doodle "Our Work" on Top Left */}
            <div className="absolute -top-7 sm:-top-9 md:-top-11 left-2 sm:left-10 md:left-18 lg:left-24 -rotate-12 pointer-events-none select-none">
              <span className="font-doodle text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#7E8B80]/80">
                Our Work
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-[#536757] font-normal leading-[1.08]">
              SELECTED PROJECTS
              <br />
              BUILT WITH BOLD BRANDS
            </h1>

            {/* Subheading / Description Paragraph */}
            <p className="font-subheading text-neutral-500 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed mt-3.5 sm:mt-4">
              Explore our curated portfolio of digital products, brand identities, and high-impact web experiences built for ambitious teams.
            </p>

            {/* Filter and Search Bar Row */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 flex-wrap relative z-40">
              {/* Search Input */}
              <div className="bg-white rounded-[12px] px-5 sm:px-6 py-3.5 sm:py-4 shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-black/[0.04] flex items-center gap-3 transition-all focus-within:ring-2 focus-within:ring-[#536757]/30">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none outline-none text-base sm:text-lg font-body text-[#242424] placeholder:text-neutral-400 w-28 sm:w-36 focus:w-48 transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="text-neutral-400 hover:text-[#242424] text-sm font-semibold focus:outline-none cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Category Dropdown Button */}
              <div className="relative z-50">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="inline-flex items-center justify-between gap-4 bg-[#242424] text-white font-body font-medium text-base sm:text-lg px-8 sm:px-11 py-3.5 sm:py-4 rounded-[12px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(0,0,0,0.4),0_12px_28px_rgba(0,0,0,0.45)] active:scale-95 transition-all duration-300 cursor-pointer min-w-[140px]"
                >
                  <span>{selectedCategory}</span>
                  <svg
                    className={`w-4 h-4 text-white/90 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
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

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsDropdownOpen(false)}
                    />
                    <div className="absolute right-0 sm:left-0 mt-2 w-48 bg-white rounded-2xl shadow-[0_20px_48px_rgba(0,0,0,0.18)] border border-black/5 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => {
                            setSelectedCategory(cat);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm font-body transition-colors flex items-center justify-between cursor-pointer ${
                            selectedCategory === cat
                              ? "font-semibold text-[#536757] bg-neutral-50"
                              : "text-[#242424] hover:bg-neutral-100/70"
                          }`}
                        >
                          <span>{cat}</span>
                          {selectedCategory === cat && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#536757]" />
                          )}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Projects Grid Container */}
          <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col gap-10 sm:gap-14 md:gap-16 relative z-10">
            {/* Top Row: 2 Featured Larger Columns */}
            {featuredProjects.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                {featuredProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/Work/${project.slug}`}
                    className="group flex flex-col cursor-pointer"
                  >
                    {/* Image Container */}
                    <div className="relative w-full aspect-[4/4] sm:aspect-[4/4.1] rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#ECEAE6]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        unoptimized
                      />
                    </div>

                    {/* Project Info */}
                    <div className="flex flex-col mt-6 sm:mt-7">
                      <h2 className="font-heading font-medium text-2xl sm:text-3xl text-[#536757] tracking-tight group-hover:text-[#242424] transition-colors duration-200">
                        {project.title}
                      </h2>
                      <p className="font-subheading text-neutral-500 text-sm sm:text-base leading-relaxed mt-2 max-w-xl">
                        {project.description}
                      </p>

                      {/* Tag Badges */}
                      <div className="flex items-center gap-3 mt-4 sm:mt-5 flex-wrap">
                        {project.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="px-6 sm:px-7 py-2 rounded-full bg-white text-[#242424] font-body text-sm shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-black/[0.04]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Next Rows: 3 Columns Grid */}
            {remainingProjects.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-8 lg:gap-10">
                {remainingProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/Work/${project.slug}`}
                    className="group flex flex-col cursor-pointer"
                  >
                    {/* Image Container */}
                    <div className="relative w-full aspect-[4/4] sm:aspect-[4/4.1] rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#ECEAE6]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        unoptimized
                      />
                    </div>

                    {/* Project Info */}
                    <div className="flex flex-col mt-6 sm:mt-7">
                      <h2 className="font-heading font-medium text-2xl sm:text-3xl text-[#536757] tracking-tight group-hover:text-[#242424] transition-colors duration-200">
                        {project.title}
                      </h2>
                      <p className="font-subheading text-neutral-500 text-sm sm:text-base leading-relaxed mt-2 max-w-xl">
                        {project.description}
                      </p>

                      {/* Tag Badges */}
                      <div className="flex items-center gap-3 mt-4 sm:mt-5 flex-wrap">
                        {project.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="px-6 sm:px-7 py-2 rounded-full bg-white text-[#242424] font-body text-sm shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-black/[0.04]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Action Button: View More Projects */}
            {filteredProjects.length > 0 && (
              <div className="mt-8 sm:mt-10 md:mt-12 flex justify-center">
                <button
                  type="button"
                  className="inline-flex items-center justify-center bg-[#242424] text-white font-body font-medium text-base sm:text-lg px-8 sm:px-11 py-3.5 sm:py-4 rounded-[12px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(0,0,0,0.4),0_12px_28px_rgba(0,0,0,0.45)] active:scale-95 transition-all duration-300 hover:bg-[#333333] cursor-pointer"
                >
                  View more projects
                </button>
              </div>
            )}

            {/* No Results Found */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-20 bg-white/60 rounded-3xl border border-black/5 p-8 max-w-md mx-auto">
                <p className="text-lg font-heading text-[#536757]">
                  No projects found matching your search.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="mt-4 px-6 py-2 rounded-full bg-[#242424] text-white text-sm font-medium hover:bg-[#536757] transition-colors cursor-pointer"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
