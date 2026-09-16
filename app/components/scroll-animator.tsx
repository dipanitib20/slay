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
        "section:not(.hero-fullscreen):not(.no-scroll-animate), [data-scroll-reveal]"
      );

      observedElements = Array.from(candidates).filter((el) => {
        if (
          el.closest("header") ||
          el.closest("nav") ||
          el.closest("[class*='sticky']") ||
          el.closest(".no-scroll-animate") ||
          el.classList.contains("no-scroll-animate") ||
          el.classList.contains("sticky") ||
          el.classList.contains("animate-marquee") ||
          el.classList.contains("animate-marquee-reverse") ||
          el.querySelector("video")
        ) {
          return false;
        }
        return true;
      });

      observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              target.classList.add("scroll-visible");
              target.classList.remove("scroll-hidden");
              obs.unobserve(target);
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px 50px 0px",
        }
      );

      observedElements.forEach((el) => {
        el.classList.add("scroll-animate");
        const rect = el.getBoundingClientRect();
        // If element is already in or near viewport on initial load
        if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
          el.classList.add("scroll-visible");
          el.classList.remove("scroll-hidden");
        } else {
          el.classList.add("scroll-hidden");
          el.classList.remove("scroll-visible");
          observer?.observe(el);
        }
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
