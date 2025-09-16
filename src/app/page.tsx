import { BookOpen, Code, DoorOpen, Globe, Hand, Mountain, Palette, Sparkles, Zap } from "lucide-react";

import { InteractiveButton } from "@/components/interactive-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AmbientSound } from "@/components/ambient-sound";
import { CosmicSound } from "@/components/cosmic-sound";
import { SimpleSound } from "@/components/simple-sound";
import { CosmicVisualizer } from "@/components/cosmic-visualizer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Cosmic Visual Effects */}
      <CosmicVisualizer />
      
      {/* Ambient Sound Effects */}
      <AmbientSound />
      <CosmicSound />
      <SimpleSound />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Sign with Door */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <DoorOpen className="h-12 w-12 text-primary animate-pulse" />
            <div className="relative">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="text-primary relative">
                  Come In - Over
                  <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-500 animate-twinkle" />
                </span>
              </h1>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <Hand className="h-6 w-6 text-primary animate-wave" />
              </div>
            </div>
            <DoorOpen className="h-12 w-12 text-primary animate-float" />
          </div>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            🚀 <strong>応答願う</strong> - 命の地表から打ち上げられて、随分経つ
          </p>
          <p className="text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto italic">
            ずっと 通り過ぎる星の 数を数えて 飛んできた<br />
            その度覚えた 音を繋ぎ メロディーを送る
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <InteractiveButton 
              href="/learn"
              className="text-lg px-8"
            >
              学習を始める - どうぞ
            </InteractiveButton>
            <InteractiveButton 
              href="/climbing"
              variant="outline"
              className="text-lg px-8"
            >
              クライミング辞典 - 応答願う
            </InteractiveButton>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore Our Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover diverse learning experiences and specialized tools for different interests and needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Learning Platform */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="h-6 w-6 text-primary" />
                <CardTitle>Learning Platform</CardTitle>
              </div>
              <CardDescription>
                Modern web development concepts and best practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Learn about Next.js 15, React 19, TypeScript, and modern web technologies with interactive examples.
              </p>
              <Button className="w-full" asChild>
                <a href="/learn">学習を始める</a>
              </Button>
            </CardContent>
          </Card>

          {/* Climbing Dictionary */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Mountain className="h-6 w-6 text-orange-500" />
                <CardTitle>Climbing Dictionary</CardTitle>
              </div>
              <CardDescription>
                English ↔ Japanese climbing terminology
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Perfect for Japanese climbers in New Zealand. Learn climbing terms in both languages.
              </p>
              <Button className="w-full" asChild>
                <a href="/climbing">クライミング辞典</a>
              </Button>
            </CardContent>
          </Card>

          {/* Coming Soon Placeholder */}
          <Card className="hover:shadow-lg transition-shadow opacity-60">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Zap className="h-6 w-6 text-muted-foreground" />
                <CardTitle>More Projects</CardTitle>
              </div>
              <CardDescription>
                Additional specialized tools and learning experiences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                We&apos;re constantly working on new projects. Stay tuned for more exciting features!
              </p>
              <Button className="w-full" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Built with Modern Technology</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powered by the latest web technologies for optimal performance and developer experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Code className="h-6 w-6 text-primary" />
                <CardTitle>Next.js 15</CardTitle>
              </div>
              <CardDescription>
                Latest version with App Router, Server Components, and Turbopack
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Experience the power of React 19, Server Actions, and optimized performance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Globe className="h-6 w-6 text-primary" />
                <CardTitle>TypeScript</CardTitle>
              </div>
              <CardDescription>
                Full type safety with modern TypeScript features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Strict type checking and excellent developer experience with IntelliSense.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Palette className="h-6 w-6 text-primary" />
                <CardTitle>Tailwind CSS v4</CardTitle>
              </div>
              <CardDescription>
                Modern utility-first CSS framework
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Rapid UI development with design system and dark mode support.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-muted rounded-lg p-8 text-center max-w-2xl mx-auto relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-4 left-4">
            <DoorOpen className="h-8 w-8 text-primary/20 animate-pulse" />
          </div>
          <div className="absolute top-4 right-4">
            <Hand className="h-8 w-8 text-primary/20 animate-wave" />
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <Sparkles className="h-6 w-6 text-yellow-500/30 animate-bounce" />
          </div>
          
          <h2 className="text-2xl font-bold mb-4 relative z-10">
            🚀 通信試みる - 応答願う
          </h2>
          <p className="text-muted-foreground mb-4 relative z-10">
            本日も通信試みるが 応答は無し
          </p>
          <p className="text-muted-foreground/80 mb-6 relative z-10 italic">
            わたしは どんなに離れても いつもあなたの 周回軌道上
          </p>
          <div className="flex gap-4 justify-center flex-wrap relative z-10">
            <InteractiveButton 
              href="/learn"
            >
              学習を始める - どうぞ
            </InteractiveButton>
            <InteractiveButton 
              href="/climbing"
              variant="outline"
            >
              クライミング辞典 - 応答願う
            </InteractiveButton>
          </div>
        </div>
      </section>
    </div>
  );
}
