"use client";

import React, { useRef, useState, useEffect } from "react";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  className?: string;
  aspectRatioClass?: string;
}

export default function LazyVideo({
  src,
  poster,
  className = "w-full h-full object-cover",
  ...props
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (videoRef.current) {
              videoRef.current.play().catch(() => {});
            }
          } else {
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      {
        rootMargin: "300px 0px", // Preload slightly before entering viewport
        threshold: 0.05,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  const encodedSrc = src ? encodeURI(src.trim()) : "";

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden bg-[#ECEAE6]">
      {isInView && (
        <video
          ref={videoRef}
          src={encodedSrc}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedData={() => setIsLoaded(true)}
          className={`${className} transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          {...props}
        />
      )}
    </div>
  );
}
