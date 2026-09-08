"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let observedElements: HTMLElement[] = [];

    const timeout = setTimeout(() => {
      const candidates = document.querySelectorAll<HTMLElement>(
        "section:not(.hero-fullscreen), main > div > div, .grid > div, footer, [data-scroll-reveal]"
      );

      observedElements = Array.from(candidates).filter((el) => {
        if (
          el.closest("header") ||
          el.closest("nav") ||
          el.classList.contains("no-scroll-animate") ||
          el.classList.contains("animate-marquee") ||
          el.querySelector("video")
        ) {
          return false;
        }
        return true;
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const target = entry.target as HTMLElement;
            if (entry.isIntersecting) {
              target.classList.add("scroll-visible");
              target.classList.remove("scroll-hidden");
            } else {
              const rect = target.getBoundingClientRect();
              // Smoothly fade out when scrolled past viewport
              if (rect.bottom < -60 || rect.top > window.innerHeight + 60) {
                target.classList.add("scroll-hidden");
                target.classList.remove("scroll-visible");
              }
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px -40px 0px",
        }
      );

      observedElements.forEach((el) => {
        el.classList.add("scroll-animate");
        const rect = el.getBoundingClientRect();
        // If element is already in the viewport on load
        if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
          el.classList.add("scroll-visible");
          el.classList.remove("scroll-hidden");
        } else {
          el.classList.add("scroll-hidden");
          el.classList.remove("scroll-visible");
        }
        observer?.observe(el);
      });
    }, 60);

    return () => {
      clearTimeout(timeout);
      if (observer) {
        observedElements.forEach((el) => observer?.unobserve(el));
      }
    };
  }, [pathname]);

  return null;
}
