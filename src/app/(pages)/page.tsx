"use client";

import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  m,
  useCycle,
} from "framer-motion";
import { useEffect } from "react";

const IMAGES = [
  "/images/me2024.jpg",
  "/images/me2004.jpg",
  "/images/me2025.jpg",
  "/images/me2022.jpg",
];

const ROLES = [
  "Full-Stack System Architect",
  "iOS/Android App Developer",
  "UI/UX Enthusiast",
  "Rock Climber",
];

export default function Home() {
  const [currentIndex, cycleIndex] = useCycle(...IMAGES.keys());

  useEffect(() => {
    const interval = setInterval(cycleIndex, 4500);
    return () => clearInterval(interval);
  }, [cycleIndex]);

  return (
    <div className="grid grid-cols-[minmax(100px,1fr)_minmax(300px,2fr)_minmax(100px,1fr)] items-center h-screen w-full px-7">
      <h1 className="text-xl md:text-8xl text-center [writing-mode:sideways-lr]">
        I&apos;m Shunya Asano
      </h1>
      <LazyMotion features={domAnimation}>
        <div className="relative w-full max-w-2xl mx-auto overflow-hidden aspect-[9/16] md:aspect-square">
          {IMAGES.map((image, index) => (
            <m.img
              key={image}
              src={image}
              alt={`Slide ${index + 1}`}
              className="absolute top-0 left-0 w-full h-full object-cover motion-reduce:transition-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentIndex ? 1 : 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
      </LazyMotion>
      <div className="relative flex justify-center">
        <LazyMotion features={domAnimation}>
          <AnimatePresence mode="wait">
            <m.p
              key={ROLES[currentIndex]}
              className="text-2xl md:text-7xl text-center [writing-mode:sideways-rl] motion-reduce:transition-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              {ROLES[currentIndex]}
            </m.p>
          </AnimatePresence>
        </LazyMotion>
      </div>
    </div>
  );
}
