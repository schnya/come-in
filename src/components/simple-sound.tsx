"use client";

import { useEffect } from "react";

export function SimpleSound() {
  useEffect(() => {
    // Web Audio APIを使用したシンプルな音響効果
    const createBeep = (frequency: number, duration: number, volume: number = 0.1) => {
      if (typeof window !== 'undefined' && window.AudioContext) {
        try {
          const audioContext = new AudioContext();
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();
          
          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);
          
          oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
          oscillator.type = 'sine';
          
          gainNode.gain.setValueAtTime(0, audioContext.currentTime);
          gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 0.01);
          gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + duration);
          
          oscillator.start(audioContext.currentTime);
          oscillator.stop(audioContext.currentTime + duration);
        } catch (error) {
          console.log('Web Audio API failed:', error);
        }
      }
    };

    // ページ読み込み時の音響効果
    const playWelcomeSound = () => {
      // 宇宙的な音響シーケンス
      setTimeout(() => createBeep(220, 0.2, 0.1), 0);    // A3
      setTimeout(() => createBeep(330, 0.2, 0.1), 200);  // E4
      setTimeout(() => createBeep(440, 0.3, 0.1), 400);  // A4
    };

    // ユーザーインタラクション後に音響を有効化
    const handleUserInteraction = () => {
      playWelcomeSound();
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  return null;
}
