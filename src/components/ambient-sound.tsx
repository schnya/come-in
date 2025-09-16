"use client";

import { useEffect } from "react";

export function AmbientSound() {
  useEffect(() => {
    // ユーザーインタラクション後に音響を有効化
    const enableAudio = () => {
      // ページ読み込み時の宇宙音響効果
      const playAmbientSound = () => {
        if (typeof window !== 'undefined') {
          // Web Audio APIを使用して音響を生成
          try {
            const audioContext = new AudioContext();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            // 宇宙的な低周波音
            oscillator.frequency.setValueAtTime(60, audioContext.currentTime);
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.5);
            gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 2);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 2);
          } catch (error) {
            console.log('Web Audio API failed:', error);
          }
        }
      };

      // ページ読み込み後少し遅延して再生
      const timer = setTimeout(playAmbientSound, 500);

      // ホバー時の音響効果
      const handleMouseEnter = (event: Event) => {
        if (typeof window !== 'undefined' && event.target instanceof HTMLElement) {
          // ボタンやリンクにホバーした時のみ音を再生
          if (event.target.tagName === 'BUTTON' || event.target.tagName === 'A' || event.target.closest('button') || event.target.closest('a')) {
            try {
              const audioContext = new AudioContext();
              const oscillator = audioContext.createOscillator();
              const gainNode = audioContext.createGain();
              
              oscillator.connect(gainNode);
              gainNode.connect(audioContext.destination);
              
              // 高周波の宇宙音響
              oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
              oscillator.type = 'triangle';
              
              gainNode.gain.setValueAtTime(0, audioContext.currentTime);
              gainNode.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + 0.1);
              gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.3);
              
              oscillator.start(audioContext.currentTime);
              oscillator.stop(audioContext.currentTime + 0.3);
            } catch (error) {
              console.log('Hover audio failed:', error);
            }
          }
        }
      };

      // ドキュメント全体にホバー効果を追加
      document.addEventListener('mouseenter', handleMouseEnter, true);

      return () => {
        clearTimeout(timer);
        document.removeEventListener('mouseenter', handleMouseEnter, true);
      };
    };

    // ユーザーがページをクリックまたはタッチした後に音響を有効化
    const handleUserInteraction = () => {
      enableAudio();
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

  return null; // このコンポーネントは音響効果のみ
}
