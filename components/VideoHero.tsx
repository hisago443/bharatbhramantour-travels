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
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);
  const heightClass = height === "full" ? "min-h-screen" : "min-h-[70vh]";

  const advanceVideo = useCallback(() => {
    if (videos.length <= 1) return;
    const upcoming = (currentIndex + 1) % videos.length;
    setNextIndex(upcoming);
    setTimeout(() => {
      setCurrentIndex(upcoming);
      setNextIndex(null);
    }, 1000);
  }, [currentIndex, videos.length]);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.src = videos[currentIndex];
    vid.load();
    vid.play().catch(() => {});

    const onEnded = () => advanceVideo();
    vid.addEventListener("ended", onEnded);
    return () => vid.removeEventListener("ended", onEnded);
  }, [currentIndex, videos, advanceVideo]);

  useEffect(() => {
    if (nextIndex === null) return;
    const vid = nextVideoRef.current;
    if (!vid) return;
    vid.src = videos[nextIndex];
    vid.load();
    vid.play().catch(() => {});
  }, [nextIndex, videos]);

  return (
    <section
      className={`relative flex items-center overflow-hidden md:items-end ${heightClass}`}
    >
      <video
        ref={videoRef}
        muted
        playsInline
        preload="metadata"
        poster={posterSrc}
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
        style={{ opacity: nextIndex !== null ? 0 : 1 }}
      />

      {nextIndex !== null && (
        <video
          ref={nextVideoRef}
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      <Image
        src={posterSrc}
        alt={posterAlt}
        fill
        priority
        className="object-cover opacity-0"
        sizes="100vw"
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/30 to-night/10" />

      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}
