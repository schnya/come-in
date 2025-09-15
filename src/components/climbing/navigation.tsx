'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, BookOpen, Globe, Search, Zap, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ClimbingNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { href: '/climbing', label: 'Home', icon: Home },
    { href: '/climbing/dictionary', label: 'Dictionary', icon: BookOpen },
    { href: '/climbing/quiz', label: 'Quiz', icon: Zap },
    { href: '/climbing/about', label: 'About', icon: Globe },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <Link href="/climbing" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              Climbing <span className="text-orange-500">Dictionary</span>
            </span>
          </Link>

          {/* デスクトップナビゲーション */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-200 group"
                >
                  <Icon className="h-4 w-4 group-hover:text-orange-500 transition-colors duration-200" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* モバイルナビゲーション */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 border border-slate-800/50">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-3 px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-md transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
