"use client";

import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface InteractiveButtonProps {
  children: ReactNode;
  href: string;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
}

export function InteractiveButton({ 
  children, 
  href, 
  variant = "default", 
  size = "lg", 
  className = "" 
}: InteractiveButtonProps) {
  const handleClick = () => {
    // 音響効果
    if (typeof window !== 'undefined') {
      try {
        const audioContext = new AudioContext();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // クリック時の宇宙音響
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.1);
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
      } catch (error) {
        console.log('Button click audio failed:', error);
      }
      
      // バイブレーション効果（モバイル）
      if (navigator.vibrate) {
        navigator.vibrate([50, 30, 50]);
      }
    }
  };

  return (
    <Button 
      size={size} 
      variant={variant}
      className={`hover:scale-105 transition-all duration-200 hover:shadow-lg active:scale-95 ${className}`}
      asChild
      onClick={handleClick}
    >
      <a href={href}>{children}</a>
    </Button>
  );
}