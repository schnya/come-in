"use client";

import { useEffect, useRef } from "react";

export function CosmicSound() {
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    // Web Audio APIを使用して宇宙音響を生成
    const createCosmicSound = () => {
      if (typeof window !== 'undefined' && window.AudioContext) {
        audioContextRef.current = new AudioContext();
        
        // 低周波の宇宙音響を生成
        const oscillator = audioContextRef.current.createOscillator();
        const gainNode = audioContextRef.current.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContextRef.current.destination);
        
        oscillator.frequency.setValueAtTime(60, audioContextRef.current.currentTime);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0, audioContextRef.current.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.01, audioContextRef.current.currentTime + 0.5);
        gainNode.gain.linearRampToValueAtTime(0, audioContextRef.current.currentTime + 3);
        
        oscillator.start(audioContextRef.current.currentTime);
        oscillator.stop(audioContextRef.current.currentTime + 3);
      }
    };

    // ページ読み込み時の宇宙音響
    const timer = setTimeout(createCosmicSound, 2000);

    // スクロール時の音響効果
    const handleScroll = () => {
      if (audioContextRef.current && audioContextRef.current.state === 'running') {
        const oscillator = audioContextRef.current.createOscillator();
        const gainNode = audioContextRef.current.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContextRef.current.destination);
        
        oscillator.frequency.setValueAtTime(200, audioContextRef.current.currentTime);
        oscillator.type = 'triangle';
        
        gainNode.gain.setValueAtTime(0, audioContextRef.current.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.005, audioContextRef.current.currentTime + 0.1);
        gainNode.gain.linearRampToValueAtTime(0, audioContextRef.current.currentTime + 0.3);
        
        oscillator.start(audioContextRef.current.currentTime);
        oscillator.stop(audioContextRef.current.currentTime + 0.3);
      }
    };

    // スクロールイベントを追加（デバウンス付き）
    let scrollTimer: NodeJS.Timeout;
    const debouncedScroll = () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(handleScroll, 100);
    };

    window.addEventListener('scroll', debouncedScroll);

    return () => {
      clearTimeout(timer);
      clearTimeout(scrollTimer);
      window.removeEventListener('scroll', debouncedScroll);
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return null;
}
