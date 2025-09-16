"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  opacity: number;
  originalRadius: number;
  originalOpacity: number;
}

interface Supernova {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  particles: Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    color: string;
  }>;
  life: number;
  maxLife: number;
}

interface CosmicVisualizerProps {
  interactive?: boolean;
  excludeAreas?: Array<{
    x: number;
    y: number;
    width: number;
    height: number;
  }>;
}

export function CosmicVisualizer({ interactive = false, excludeAreas = [] }: CosmicVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // キャンバスサイズを設定
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 星の配列
    const stars: Star[] = [];
    const supernovas: Supernova[] = [];
    let currentMousePos = { x: 0, y: 0 };
    let isCurrentlyHovering = false;

    // 星を生成
    for (let i = 0; i < 150; i++) {
      const star: Star = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.8 + 0.2,
        originalRadius: 0,
        originalOpacity: 0,
      };
      star.originalRadius = star.radius;
      star.originalOpacity = star.opacity;
      stars.push(star);
    }

    // マウスイベント
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      currentMousePos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseEnter = () => {
      isCurrentlyHovering = true;
    };

    const handleMouseLeave = () => {
      isCurrentlyHovering = false;
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // 除外エリア内かチェック
      const isInExcludeArea = excludeAreas.some(area => 
        x >= area.x && x <= area.x + area.width &&
        y >= area.y && y <= area.y + area.height
      );

      if (isInExcludeArea) {
        return; // 除外エリア内ではクリックを無効
      }

      // 超新星爆発を生成
      const supernova: Supernova = {
        x,
        y,
        radius: 0,
        maxRadius: 200,
        opacity: 1,
        particles: [],
        life: 0,
        maxLife: 120, // 2秒間（60fps）
      };

      // パーティクルを生成
      for (let i = 0; i < 50; i++) {
        const angle = (Math.PI * 2 * i) / 50;
        const speed = Math.random() * 8 + 2;
        supernova.particles.push({
          x: x, // 爆発の中心から開始
          y: y, // 爆発の中心から開始
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: Math.random() * 60 + 30,
          color: `hsl(${Math.random() * 60 + 20}, 100%, ${Math.random() * 30 + 70}%)`, // オレンジ〜黄色
        });
      }

      supernovas.push(supernova);

      // 超新星爆発の音を再生
      if (typeof window !== 'undefined' && window.AudioContext) {
        try {
          const audioContext = new AudioContext();
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();
          
          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);
          
          // 爆発音の周波数変化
          oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
          oscillator.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 0.5);
          oscillator.type = 'sawtooth';
          
          gainNode.gain.setValueAtTime(0, audioContext.currentTime);
          gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
          gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);
          
          oscillator.start(audioContext.currentTime);
          oscillator.stop(audioContext.currentTime + 0.5);
        } catch (error) {
          console.log('Supernova sound failed:', error);
        }
      }
    };

    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseenter', handleMouseEnter);
      canvas.addEventListener('mouseleave', handleMouseLeave);
      canvas.addEventListener('click', handleClick);
    }

    // アニメーションループ
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 星を描画
      stars.forEach((star) => {
        // マウスとの距離を計算
        const dx = star.x - currentMousePos.x;
        const dy = star.y - currentMousePos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // マウスが近い場合の効果
        if (isCurrentlyHovering && distance < 100) {
          const influence = (100 - distance) / 100;
          star.radius = star.originalRadius * (1 + influence * 2);
          star.opacity = Math.min(1, star.originalOpacity * (1 + influence * 3));
          
          // マウスに向かって移動
          const force = influence * 0.1;
          star.vx += (dx / distance) * force;
          star.vy += (dy / distance) * force;
        } else {
          // 元の状態に戻る
          star.radius += (star.originalRadius - star.radius) * 0.1;
          star.opacity += (star.originalOpacity - star.opacity) * 0.1;
        }

        // 星の位置を更新
        star.x += star.vx;
        star.y += star.vy;
        
        // 画面端で反対側に移動
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
        
        // 星を描画
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        
        // キラキラ効果
        if (Math.random() < 0.01) {
          star.opacity = Math.random() * 0.8 + 0.2;
        }
      });

      // 超新星爆発を描画
      for (let i = supernovas.length - 1; i >= 0; i--) {
        const supernova = supernovas[i];
        if (!supernova) continue;
        
        supernova.life++;

        // 爆発の中心
        const progress = supernova.life / supernova.maxLife;
        supernova.radius = supernova.maxRadius * (1 - (1 - progress) ** 3);
        supernova.opacity = 1 - progress;

        // 爆発の円を描画
        const gradient = ctx.createRadialGradient(
          supernova.x, supernova.y, 0,
          supernova.x, supernova.y, supernova.radius
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${supernova.opacity})`);
        gradient.addColorStop(0.3, `rgba(255, 200, 100, ${supernova.opacity * 0.8})`);
        gradient.addColorStop(0.7, `rgba(255, 100, 50, ${supernova.opacity * 0.4})`);
        gradient.addColorStop(1, `rgba(255, 50, 0, 0)`);

        ctx.beginPath();
        ctx.arc(supernova.x, supernova.y, supernova.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // パーティクルを描画
        for (let j = supernova.particles.length - 1; j >= 0; j--) {
          const particle = supernova.particles[j];
          if (!particle) continue;
          
          particle.life++;
          particle.x += particle.vx;
          particle.y += particle.vy;

          const particleProgress = particle.life / particle.maxLife;
          const particleOpacity = 1 - particleProgress;
          const particleRadius = Math.max(0, 2 * (1 - particleProgress)); // 負の値を防ぐ

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particleRadius, 0, Math.PI * 2);
          ctx.fillStyle = particle.color.replace(')', `, ${particleOpacity})`).replace('hsl', 'hsla');
          ctx.fill();

          // 死んだパーティクルを削除（寿命が尽きるか、半径が0になったら）
          if (particle.life >= particle.maxLife || particleRadius <= 0) {
            supernova.particles.splice(j, 1);
          }
        }

        // 死んだ超新星を削除
        if (supernova.life >= supernova.maxLife) {
          supernovas.splice(i, 1);
        }
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseenter', handleMouseEnter);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
        canvas.removeEventListener('click', handleClick);
      }
    };
  }, [interactive, excludeAreas]); // interactiveプロパティとexcludeAreasの変更を監視

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 z-0 ${interactive ? 'pointer-events-auto cursor-crosshair' : 'pointer-events-none'}`}
      style={{ background: 'transparent' }}
    />
  );
}
