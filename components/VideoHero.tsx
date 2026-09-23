"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface VideoHeroProps {
  videos: string[];
  posterSrc: string;
  posterAlt: string;
  children: React.ReactNode;
  height?: "full" | "inner";
}

export default function VideoHero({
  videos,
  posterSrc,
  posterAlt,
  children,
  height = "inner",
}: VideoHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const heightClass = height === "full" ? "min-h-screen" : "min-h-[70vh]";

  const advanceVideo = useCallback(() => {
    if (videos.length <= 1) return;
    const upcoming = (currentIndex + 1) % videos.length;
    
    // Pre-play the next video before transitioning
    const nextVid = videoRefs.current[upcoming];
    if (nextVid) {
      nextVid.currentTime = 0;
      nextVid.play().catch(() => {});
    }

    setCurrentIndex(upcoming);
  }, [currentIndex, videos.length]);

  // Initial play
  useEffect(() => {
    if (videos.length === 0) return;
    const currentVid = videoRefs.current[currentIndex];
    if (currentVid) {
      currentVid.play().catch(() => {});
    }
  }, [currentIndex, videos.length]);

  return (
    <section
      className={`relative flex items-center overflow-hidden md:items-end ${heightClass}`}
    >
      {videos.map((src, idx) => (
        <video
          key={src}
          ref={(el) => {
            videoRefs.current[idx] = el;
          }}
          src={src}
          muted
          playsInline
          preload="auto"
          poster={idx === 0 ? posterSrc : undefined}
          onEnded={() => {
            if (idx === currentIndex) advanceVideo();
          }}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      <Image
        src={posterSrc}
        alt={posterAlt}
        fill
        priority
        className="object-cover opacity-0"
        sizes="100vw"
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/30 to-night/10 z-20" />

      <div className="relative z-30 w-full">{children}</div>
    </section>
  );
}
