'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useId } from 'react';

interface GearAnimationProps {
  type: 'carabiner' | 'rope' | 'harness' | 'helmet';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function GearAnimation({ type, size = 'medium', className = '' }: GearAnimationProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const uniqueId = useId();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-16 h-16',
    large: 'w-24 h-24',
  };

  const gearAnimations = {
    carabiner: {
      initial: { rotateY: 0, rotateX: 0, scale: 1 },
      animate: {
        rotateY: [0, 360],
        rotateX: [0, 10, 0],
        scale: [1, 1.1, 1],
        y: [0, -5, 0],
      },
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
      hover: {
        rotateY: 180,
        scale: 1.2,
        z: 50,
      },
    },
    rope: {
      initial: { rotateZ: 0, scale: 1 },
      animate: {
        rotateZ: [0, 5, -5, 0],
        scale: [1, 1.05, 1],
        y: [0, -3, 0],
      },
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
      hover: {
        rotateZ: 10,
        scale: 1.15,
        z: 30,
      },
    },
    harness: {
      initial: { rotateX: 0, rotateY: 0, scale: 1 },
      animate: {
        rotateX: [0, 5, 0],
        rotateY: [0, 3, 0],
        scale: [1, 1.08, 1],
        y: [0, -4, 0],
      },
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
      hover: {
        rotateX: 10,
        rotateY: 15,
        scale: 1.2,
        z: 40,
      },
    },
    helmet: {
      initial: { rotateY: 0, scale: 1 },
      animate: {
        rotateY: [0, 15, -15, 0],
        scale: [1, 1.06, 1],
        y: [0, -2, 0],
      },
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
      hover: {
        rotateY: 25,
        scale: 1.18,
        z: 35,
      },
    },
  };

  const gearIcons = {
    carabiner: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <title>Professional Carabiner</title>
        <defs>
          {/* メインカラビナのグラデーション */}
          <linearGradient id={`carabinerMain-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6465" />
            <stop offset="30%" stopColor="#FF8080" />
            <stop offset="70%" stopColor="#FF6465" />
            <stop offset="100%" stopColor="#E53E3E" />
          </linearGradient>
          
          {/* ゲート部分のグラデーション */}
          <linearGradient id={`carabinerGate-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B6BBDB" />
            <stop offset="50%" stopColor="#C9CFF2" />
            <stop offset="100%" stopColor="#B6BBDB" />
          </linearGradient>
          
          {/* ハイライトグラデーション */}
          <linearGradient id={`carabinerHighlight-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#fff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          
          {/* シャドウフィルター */}
          <filter id={`carabinerShadow-${uniqueId}`} x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.4"/>
          </filter>
        </defs>
        
        {/* メインのカラビナ形状 - 影 */}
        <path
          d="M20 30 C20 20 35 15 50 15 C65 15 80 20 80 30 C80 50 65 65 50 65 C35 65 20 50 20 30 Z"
          fill="#000"
          opacity="0.3"
          transform="translate(2, 2)"
        />
        
        {/* メインのカラビナ形状 */}
        <path
          d="M20 30 C20 20 35 15 50 15 C65 15 80 20 80 30 C80 50 65 65 50 65 C35 65 20 50 20 30 Z"
          fill={`url(#carabinerMain-${uniqueId})`}
          filter={`url(#carabinerShadow-${uniqueId})`}
        />
        
        {/* 内側の影 */}
        <path
          d="M25 35 C25 25 35 20 50 20 C65 20 75 25 75 35 C75 45 65 50 50 50 C35 50 25 45 25 35 Z"
          fill="#000"
          opacity="0.3"
        />
        
        {/* ゲート部分 - より詳細な形状 */}
        <path
          d="M30 30 L30 15 L70 15 L70 30"
          stroke={`url(#carabinerGate-${uniqueId})`}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* ゲートのハイライト */}
        <path
          d="M32 17 L32 28 L68 28 L68 17"
          stroke="#fff"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
        
        {/* メインハイライト */}
        <ellipse cx="40" cy="35" rx="8" ry="12" fill={`url(#carabinerHighlight-${uniqueId})`} />
        
        {/* 金属質感のライン */}
        <path
          d="M25 40 Q50 35 75 40"
          stroke="#fff"
          strokeWidth="0.5"
          fill="none"
          opacity="0.3"
        />
        
        {/* 追加の質感ライン */}
        <path
          d="M25 45 Q50 40 75 45"
          stroke="#fff"
          strokeWidth="0.3"
          fill="none"
          opacity="0.2"
        />
        
        {/* ゲートの詳細 */}
        <circle cx="30" cy="22" r="1.5" fill="#C9CFF2" />
        <circle cx="70" cy="22" r="1.5" fill="#C9CFF2" />
      </svg>
    ),
    
    rope: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <title>Professional Climbing Rope</title>
        <defs>
          {/* ロープの編み込みパターン */}
          <pattern id={`ropePattern-${uniqueId}`} x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <path d="M0 6 Q6 2 12 6 Q6 10 0 6" stroke="#B6BBDB" strokeWidth="1.2" fill="none"/>
            <path d="M0 6 Q6 10 12 6 Q6 2 0 6" stroke="#C9CFF2" strokeWidth="1.2" fill="none"/>
            <path d="M0 6 Q6 4 12 6" stroke="#FF6465" strokeWidth="0.8" fill="none"/>
          </pattern>
          
          {/* ロープのグラデーション */}
          <linearGradient id={`ropeGradient-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B6BBDB" />
            <stop offset="30%" stopColor="#C9CFF2" />
            <stop offset="70%" stopColor="#B6BBDB" />
            <stop offset="100%" stopColor="#9CA3AF" />
          </linearGradient>
          
          {/* ロープのハイライト */}
          <linearGradient id={`ropeHighlight-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#fff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          
          <filter id={`ropeShadow-${uniqueId}`} x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.4"/>
          </filter>
        </defs>
        
        {/* ロープの影 */}
        <rect x="10" y="40" width="80" height="20" fill="#000" opacity="0.3" rx="10" transform="translate(2, 2)"/>
        
        {/* ロープの本体 */}
        <rect x="10" y="40" width="80" height="20" fill={`url(#ropePattern-${uniqueId})`} rx="10" filter={`url(#ropeShadow-${uniqueId})`}/>
        
        {/* ロープのハイライト */}
        <rect x="10" y="40" width="80" height="10" fill={`url(#ropeHighlight-${uniqueId})`} rx="10"/>
        
        {/* ロープの端部 - より詳細 */}
        <circle cx="15" cy="50" r="4" fill="#B6BBDB"/>
        <circle cx="85" cy="50" r="4" fill="#B6BBDB"/>
        
        {/* ロープの質感ライン */}
        <path d="M15 46 Q50 44 85 46" stroke="#fff" strokeWidth="0.5" fill="none" opacity="0.3"/>
        <path d="M15 54 Q50 56 85 54" stroke="#000" strokeWidth="0.5" fill="none" opacity="0.2"/>
        
        {/* 追加の質感ライン */}
        <path d="M15 48 Q50 46 85 48" stroke="#fff" strokeWidth="0.3" fill="none" opacity="0.2"/>
        <path d="M15 52 Q50 54 85 52" stroke="#000" strokeWidth="0.3" fill="none" opacity="0.1"/>
        
        {/* ロープの端部の詳細 */}
        <circle cx="15" cy="50" r="2" fill="#C9CFF2"/>
        <circle cx="85" cy="50" r="2" fill="#C9CFF2"/>
      </svg>
    ),
    
    harness: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <title>Professional Climbing Harness</title>
        <defs>
          {/* ハーネスのグラデーション */}
          <linearGradient id={`harnessGradient-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6465" />
            <stop offset="30%" stopColor="#FF8080" />
            <stop offset="70%" stopColor="#FF6465" />
            <stop offset="100%" stopColor="#E53E3E" />
          </linearGradient>
          
          {/* ハーネスのハイライト */}
          <linearGradient id={`harnessHighlight-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          
          <filter id={`harnessShadow-${uniqueId}`} x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.4"/>
          </filter>
        </defs>
        
        {/* ハーネスの影 */}
        <rect x="15" y="20" width="70" height="60" fill="#000" opacity="0.3" rx="10" transform="translate(2, 2)"/>
        
        {/* メインのハーネス */}
        <rect x="15" y="20" width="70" height="60" fill={`url(#harnessGradient-${uniqueId})`} rx="10" filter={`url(#harnessShadow-${uniqueId})`}/>
        
        {/* ハーネスのハイライト */}
        <rect x="15" y="20" width="70" height="30" fill={`url(#harnessHighlight-${uniqueId})`} rx="10"/>
        
        {/* ベルト部分 - より詳細 */}
        <rect x="10" y="25" width="80" height="10" fill="#B6BBDB" rx="5"/>
        <rect x="10" y="65" width="80" height="10" fill="#B6BBDB" rx="5"/>
        
        {/* バックル - より詳細 */}
        <rect x="20" y="23" width="15" height="6" fill="#C9CFF2" rx="3"/>
        <rect x="65" y="23" width="15" height="6" fill="#C9CFF2" rx="3"/>
        
        {/* バックルの詳細 */}
        <rect x="22" y="25" width="11" height="2" fill="#B6BBDB" rx="1"/>
        <rect x="67" y="25" width="11" height="2" fill="#B6BBDB" rx="1"/>
        
        {/* ループ - より詳細 */}
        <rect x="25" y="35" width="50" height="8" fill="#B6BBDB" rx="4"/>
        <rect x="25" y="47" width="50" height="8" fill="#B6BBDB" rx="4"/>
        <rect x="25" y="59" width="50" height="8" fill="#B6BBDB" rx="4"/>
        
        {/* ハーネスの質感 */}
        <path d="M20 30 Q50 28 80 30" stroke="#fff" strokeWidth="0.5" fill="none" opacity="0.3"/>
        <path d="M20 40 Q50 38 80 40" stroke="#fff" strokeWidth="0.5" fill="none" opacity="0.3"/>
        <path d="M20 50 Q50 48 80 50" stroke="#fff" strokeWidth="0.5" fill="none" opacity="0.3"/>
        
        {/* 追加の質感ライン */}
        <path d="M20 35 Q50 33 80 35" stroke="#fff" strokeWidth="0.3" fill="none" opacity="0.2"/>
        <path d="M20 45 Q50 43 80 45" stroke="#fff" strokeWidth="0.3" fill="none" opacity="0.2"/>
        
        {/* ループの詳細 */}
        <rect x="27" y="37" width="46" height="4" fill="#C9CFF2" rx="2"/>
        <rect x="27" y="49" width="46" height="4" fill="#C9CFF2" rx="2"/>
        <rect x="27" y="61" width="46" height="4" fill="#C9CFF2" rx="2"/>
      </svg>
    ),
    
    helmet: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <title>Professional Climbing Helmet</title>
        <defs>
          {/* ヘルメットのグラデーション */}
          <linearGradient id={`helmetGradient-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B6BBDB" />
            <stop offset="30%" stopColor="#C9CFF2" />
            <stop offset="70%" stopColor="#B6BBDB" />
            <stop offset="100%" stopColor="#9CA3AF" />
          </linearGradient>
          
          {/* ヘルメットのハイライト */}
          <radialGradient id={`helmetHighlight-${uniqueId}`} cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#fff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          
          <filter id={`helmetShadow-${uniqueId}`} x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.4"/>
          </filter>
        </defs>
        
        {/* ヘルメットの影 */}
        <path
          d="M15 25 C15 15 30 10 50 10 C70 10 85 15 85 25 C85 45 70 60 50 60 C30 60 15 45 15 25 Z"
          fill="#000"
          opacity="0.3"
          transform="translate(2, 2)"
        />
        
        {/* メインのヘルメット */}
        <path
          d="M15 25 C15 15 30 10 50 10 C70 10 85 15 85 25 C85 45 70 60 50 60 C30 60 15 45 15 25 Z"
          fill={`url(#helmetGradient-${uniqueId})`}
          filter={`url(#helmetShadow-${uniqueId})`}
        />
        
        {/* ヘルメットのハイライト */}
        <path
          d="M15 25 C15 15 30 10 50 10 C70 10 85 15 85 25 C85 45 70 60 50 60 C30 60 15 45 15 25 Z"
          fill={`url(#helmetHighlight-${uniqueId})`}
        />
        
        {/* ベンチレーション - より詳細 */}
        <circle cx="30" cy="30" r="4" fill="#FF6465"/>
        <circle cx="50" cy="25" r="4" fill="#FF6465"/>
        <circle cx="70" cy="30" r="4" fill="#FF6465"/>
        <circle cx="30" cy="45" r="4" fill="#FF6465"/>
        <circle cx="70" cy="45" r="4" fill="#FF6465"/>
        
        {/* ベンチレーションの詳細 */}
        <circle cx="30" cy="30" r="2" fill="#FF8080"/>
        <circle cx="50" cy="25" r="2" fill="#FF8080"/>
        <circle cx="70" cy="30" r="2" fill="#FF8080"/>
        <circle cx="30" cy="45" r="2" fill="#FF8080"/>
        <circle cx="70" cy="45" r="2" fill="#FF8080"/>
        
        {/* ストラップ - より詳細 */}
        <rect x="25" y="55" width="50" height="6" fill="#FF8080" rx="3"/>
        <rect x="25" y="62" width="50" height="6" fill="#FF8080" rx="3"/>
        
        {/* バックル - より詳細 */}
        <rect x="35" y="57" width="12" height="4" fill="#B6BBDB" rx="2"/>
        <rect x="53" y="57" width="12" height="4" fill="#B6BBDB" rx="2"/>
        
        {/* バックルの詳細 */}
        <rect x="37" y="58" width="8" height="2" fill="#C9CFF2" rx="1"/>
        <rect x="55" y="58" width="8" height="2" fill="#C9CFF2" rx="1"/>
        
        {/* ヘルメットの質感ライン */}
        <path d="M20 35 Q50 33 80 35" stroke="#fff" strokeWidth="0.5" fill="none" opacity="0.3"/>
        <path d="M20 45 Q50 43 80 45" stroke="#fff" strokeWidth="0.5" fill="none" opacity="0.3"/>
        <path d="M20 55 Q50 53 80 55" stroke="#fff" strokeWidth="0.5" fill="none" opacity="0.3"/>
        
        {/* 追加の質感ライン */}
        <path d="M20 40 Q50 38 80 40" stroke="#fff" strokeWidth="0.3" fill="none" opacity="0.2"/>
        <path d="M20 50 Q50 48 80 50" stroke="#fff" strokeWidth="0.3" fill="none" opacity="0.2"/>
        
        {/* ヘルメットの縁の詳細 */}
        <path d="M15 25 C15 15 30 10 50 10 C70 10 85 15 85 25" stroke="#9CA3AF" strokeWidth="1" fill="none" opacity="0.5"/>
      </svg>
    ),
  };

  const animation = gearAnimations[type];

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className}`}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      initial={animation.initial}
      animate={{
        ...animation.animate,
        rotateX: 'rotateX' in animation.animate 
          ? Array.isArray(animation.animate.rotateX) 
            ? animation.animate.rotateX.map(val => val + mousePosition.y)
            : animation.animate.rotateX + mousePosition.y
          : mousePosition.y,
        rotateY: 'rotateY' in animation.animate 
          ? Array.isArray(animation.animate.rotateY) 
            ? animation.animate.rotateY.map(val => val + mousePosition.x)
            : animation.animate.rotateY + mousePosition.x
          : mousePosition.x,
      }}
      transition={animation.transition}
      whileHover={animation.hover}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-full h-full text-orange-500"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {gearIcons[type]}
      </motion.div>
    </motion.div>
  );
}

// 複数のギアを組み合わせたアニメーション
export function GearCollection() {
  return (
    <div className="flex items-center justify-center space-x-8 py-8">
      <GearAnimation type="carabiner" size="medium" />
      <GearAnimation type="rope" size="medium" />
      <GearAnimation type="harness" size="medium" />
      <GearAnimation type="helmet" size="medium" />
    </div>
  );
}

// パララックス効果付きのギア背景
export function GearParallaxBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-10 left-10"
        animate={{
          y: [0, -20, 0],
          rotateZ: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <GearAnimation type="carabiner" size="small" className="text-orange-500/30" />
      </motion.div>
      
      <motion.div
        className="absolute top-20 right-20"
        animate={{
          y: [0, 15, 0],
          rotateZ: [0, -3, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <GearAnimation type="rope" size="small" className="text-yellow-500/30" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 left-20"
        animate={{
          y: [0, -10, 0],
          rotateZ: [0, 8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <GearAnimation type="harness" size="small" className="text-green-500/30" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-10 right-10"
        animate={{
          y: [0, 12, 0],
          rotateZ: [0, -6, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        <GearAnimation type="helmet" size="small" className="text-blue-500/30" />
      </motion.div>
    </div>
  );
}
