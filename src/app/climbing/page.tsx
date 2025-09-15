import { GearAnimation, GearCollection, GearParallaxBackground } from '@/components/climbing/gear-animation';
import { ClimbingNavigation } from '@/components/climbing/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, Globe, Search, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Climbing Dictionary - クライミング用語辞典',
  description: 'English ↔ Japanese climbing terminology dictionary for international climbers',
};

export default function ClimbingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <ClimbingNavigation />
      {/* ヒーローセクション */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* 背景画像 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/climbing/hero-background.svg"
            alt="Climbing background"
            fill
            className="object-cover"
            priority
          />
          {/* オーバーレイグラデーション */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/60" />
          {/* 3Dギアアニメーション背景 */}
          <GearParallaxBackground />
        </div>

        {/* メインコンテンツ */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* メインタイトル */}
          <div className="purpose-3d mb-6">
            <div className="purpose-hero-text text-white rotate-1 inline-block mr-4">
              Climbing
            </div>
            <div className="purpose-hero-text bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent rotate-2 inline-block">
              Dictionary
            </div>
          </div>

          {/* サブタイトル */}
          <div className="purpose-3d mb-8 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed rotate-3">
              English ↔ Japanese climbing terminology for global climbers
            </p>
            <p className="text-lg text-slate-400 rotate-4">
              Bridge the language gap in climbing
            </p>
          </div>

          {/* CTAボタン */}
          <div className="purpose-3d flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="purpose-rotate-1">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/climbing/dictionary">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Start Learning
                </Link>
              </Button>
            </div>
            <div className="purpose-rotate-2">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
                asChild
              >
                <Link href="/climbing/quiz">
                  <Zap className="mr-2 h-5 w-5" />
                  Take Quiz
                </Link>
              </Button>
            </div>
          </div>

          {/* 3Dギアコレクション */}
          <div className="mt-12">
            <GearCollection />
          </div>

          {/* スクロールインジケーター */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 px-4 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 purpose-3d">
            <div className="mb-6">
              <div className="purpose-hero-text text-white rotate-1 inline-block mr-4">
                Why Choose Our
              </div>
              <div className="purpose-hero-text bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent rotate-2 inline-block">
                Dictionary?
              </div>
            </div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto rotate-3">
              Designed for international climbers, bridging the language gap in climbing terminology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 特徴1: 多言語対応 */}
            <div className="purpose-rotate-1">
              <Card className="purpose-card bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mb-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">Bilingual Support</CardTitle>
                  <CardDescription className="text-slate-300">
                    English ↔ Japanese terminology with pronunciation guides
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-center">
                    Perfect for international climbers who need to understand both English and Japanese climbing terms.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 特徴2: インタラクティブ検索 */}
            <div className="purpose-rotate-2">
              <Card className="purpose-card bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">Smart Search</CardTitle>
                  <CardDescription className="text-slate-300">
                    Find terms instantly with intelligent search and filtering
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-center">
                    Search in both languages, filter by category, and discover related terms with our advanced search system.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 特徴3: 学習機能 */}
            <div className="purpose-rotate-3">
              <Card className="purpose-card bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mb-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">Interactive Learning</CardTitle>
                  <CardDescription className="text-slate-300">
                    Quizzes, flashcards, and progress tracking
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-center">
                    Test your knowledge with interactive quizzes and track your learning progress over time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 用語プレビューセクション */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/30 to-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 purpose-3d">
            <div className="mb-6">
              <div className="purpose-hero-text text-white rotate-1 inline-block mr-4">
                Popular
              </div>
              <div className="purpose-hero-text bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent rotate-2 inline-block">
                Terms
              </div>
            </div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto rotate-3">
              Explore some of the most commonly used climbing terms in both English and Japanese.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 用語カードの例 */}
            {[
              { id: "crimp", english: "Crimp", japanese: "クリンプ", category: "Hold Types", description: "Small edge hold gripped with fingertips", gear: "carabiner" as const },
              { id: "belay", english: "Belay", japanese: "ビレイ", category: "Safety", description: "Securing a climber with a rope", gear: "rope" as const },
              { id: "route", english: "Route", japanese: "ルート", category: "General", description: "A path up a climbing wall or rock face", gear: "harness" as const },
              { id: "grade", english: "Grade", japanese: "グレード", category: "Difficulty", description: "Difficulty rating of a climb", gear: "helmet" as const },
              { id: "anchor", english: "Anchor", japanese: "アンカー", category: "Safety", description: "Fixed point for securing ropes", gear: "carabiner" as const },
              { id: "beta", english: "Beta", japanese: "ベータ", category: "General", description: "Information about how to climb a route", gear: "rope" as const }
            ].map((term) => (
              <Card key={term.id} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-white">{term.english}</CardTitle>
                    <div className="flex items-center gap-2">
                      <GearAnimation type={term.gear} size="small" className="text-orange-500/70 group-hover:text-orange-500" />
                      <span className="text-sm bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full">
                        {term.category}
                      </span>
                    </div>
                  </div>
                  <CardDescription className="text-2xl text-yellow-400 font-semibold">
                    {term.japanese}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400">{term.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/climbing/dictionary">
                Explore All Terms
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
