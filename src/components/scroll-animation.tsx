"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

export function ScrollAnimation({ 
  children, 
  direction = "up", 
  delay = 0, 
  duration = 0.6,
  distance = 50,
  className 
}: ScrollAnimationProps) {
  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance }
  };

  const initial = directionMap[direction];
  const animate = { x: 0, y: 0 };

  return (
    <motion.div
      className={className}
      initial={{ 
        ...initial,
        opacity: 0 
      }}
      whileInView={{ 
        ...animate,
        opacity: 1 
      }}
      viewport={{ 
        once: true, 
        margin: "-100px" 
      }}
      transition={{ 
        duration,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}

// フェードインアニメーション
export function FadeIn({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className 
}: Omit<ScrollAnimationProps, "direction" | "distance">) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// スケールアニメーション
export function ScaleIn({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className 
}: Omit<ScrollAnimationProps, "direction" | "distance">) {
  return (
    <motion.div
      className={className}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// 回転アニメーション
export function RotateIn({ 
  children, 
  delay = 0, 
  duration = 0.8,
  className 
}: Omit<ScrollAnimationProps, "direction" | "distance">) {
  return (
    <motion.div
      className={className}
      initial={{ rotate: -10, opacity: 0 }}
      whileInView={{ rotate: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// ステージャードアニメーション（子要素を順次表示）
export function StaggeredAnimation({ 
  children, 
  delay = 0.1,
  className 
}: { 
  children: ReactNode; 
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: delay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

// ステージャードアニメーション用の子要素
export function StaggeredItem({ 
  children, 
  className 
}: { 
  children: ReactNode; 
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
