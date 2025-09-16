"use client";

import { Award, BookOpen, Briefcase, Code, DoorOpen, Github, Globe, Hand, Linkedin, Mail, MessageCircle, Mountain, Palette, Sparkles, Star, User, Zap } from "lucide-react";

// import { AmbientSound } from "@/components/ambient-sound";
// import { CosmicSound } from "@/components/cosmic-sound";
import { CosmicVisualizer } from "@/components/cosmic-visualizer";
import { InteractiveButton } from "@/components/interactive-button";
import { FadeIn, ScaleIn, ScrollAnimation, StaggeredAnimation, StaggeredItem } from "@/components/scroll-animation";
import { SimpleSound } from "@/components/simple-sound";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const STARS = Array.from({ length: 5 }, (_, i) => i);

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative z-10">
      {/* Cosmic Visual Effects */}
      <CosmicVisualizer 
        interactive={true} 
        excludeAreas={[
          // ヒーローセクションのボタンエリア
          { x: 0, y: 200, width: window.innerWidth, height: 100 },
          // プロジェクトセクションのボタンエリア
          { x: 0, y: 800, width: window.innerWidth, height: 200 },
          // コンタクトセクションのボタンエリア
          { x: 0, y: 1400, width: window.innerWidth, height: 200 },
          // CTAセクションのボタンエリア
          { x: 0, y: 1800, width: window.innerWidth, height: 150 }
        ]} 
      />
      
      {/* Sound Effects - Only click sounds enabled */}
      {/* <AmbientSound />
      <CosmicSound /> */}
      <SimpleSound />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Sign with Door */}
          <ScaleIn delay={0.2}>
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
          </ScaleIn>
          
          <ScrollAnimation direction="up" delay={0.4}>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            🚀 <strong>応答願う</strong> - 命の地表から打ち上げられて、随分経つ
          </p>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={0.6}>
            <p className="text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto italic">
              ずっと 通り過ぎる星の 数を数えて 飛んできた<br />
              その度覚えた 音を繋ぎ メロディーを送る
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={0.8}>
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
          </ScrollAnimation>
        </div>
      </section>

      {/* About/Profile Section */}
      <section className="container mx-auto px-4 py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="flex justify-center items-center gap-3 mb-4">
                <User className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">About Me</h2>
              </div>
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-primary mb-2">浅野竣弥 / Shunya Asano</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Full-stack developer passionate about creating meaningful digital experiences
                </p>
              </div>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ScrollAnimation direction="right" delay={0.2}>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">🚀 Mission Statement</h3>
                  <p className="text-muted-foreground">
                    I believe in the power of technology to bridge cultures and create connections. 
                    As a developer who has experienced both Japanese and New Zealand tech cultures, 
                    I'm passionate about building tools that help people learn and communicate across languages.
                    My journey from Japan to New Zealand has given me unique insights into cross-cultural 
                    development and the importance of creating inclusive digital experiences.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">🎯 Core Values</h3>
                  <StaggeredAnimation delay={0.1}>
                    <div className="grid grid-cols-2 gap-4">
                      <StaggeredItem>
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm">Quality First</span>
                        </div>
                      </StaggeredItem>
                      <StaggeredItem>
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Global Perspective</span>
                        </div>
                      </StaggeredItem>
                      <StaggeredItem>
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Continuous Learning</span>
                        </div>
                      </StaggeredItem>
                      <StaggeredItem>
                        <div className="flex items-center gap-2">
                          <Hand className="h-4 w-4 text-purple-500" />
                          <span className="text-sm">User-Centric</span>
                        </div>
                      </StaggeredItem>
                    </div>
                  </StaggeredAnimation>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation direction="left" delay={0.4}>
              <div className="space-y-6">
                <ScaleIn delay={0.6}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5" />
                        Current Focus
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">Next.js 15 & React 19</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm">TypeScript & Modern Web</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Cross-Cultural Tools</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm">Performance Optimization</span>
                      </div>
                    </CardContent>
                  </Card>
                </ScaleIn>
                
                <ScaleIn delay={0.8}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="h-5 w-5" />
                        Specialties
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {['Full-Stack Development', 'Japanese-English Translation', 'UI/UX Design', 'Performance', 'Accessibility', 'SEO'].map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScaleIn>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Our Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover diverse learning experiences and specialized tools for different interests and needs.
            </p>
          </div>
        </FadeIn>
        
        <StaggeredAnimation delay={0.2}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Learning Platform */}
            <StaggeredItem>
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
            </StaggeredItem>

            {/* Climbing Dictionary */}
            <StaggeredItem>
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
            </StaggeredItem>

            {/* Coming Soon Placeholder */}
            <StaggeredItem>
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
            </StaggeredItem>
          </div>
        </StaggeredAnimation>
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

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Star className="h-8 w-8 text-yellow-500" />
              <h2 className="text-3xl font-bold">What People Say</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Feedback from clients and collaborators who have worked with me
            </p>
          </div>
        </FadeIn>
        
        <StaggeredAnimation delay={0.2}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <StaggeredItem>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {STARS.map((starIndex) => (
                      <Star key={`star-${starIndex}`} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">Exceptional Developer</CardTitle>
                </CardHeader>
                <CardContent>
              <p className="text-sm text-muted-foreground mb-4 italic">
                "Working with Shunya was an absolute pleasure. His attention to detail, 
                clean code, and ability to bridge technical concepts between Japanese and English was outstanding. 
                Highly recommended for any international project."
              </p>
              <div className="text-sm font-medium">
                — Sarah Chen, Product Manager
              </div>
                </CardContent>
              </Card>
            </StaggeredItem>

            <StaggeredItem>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {STARS.map((starIndex) => (
                      <Star key={`star-${starIndex}`} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">Technical Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 italic">
                    "The performance optimizations and modern web practices implemented were game-changing. 
                    Our application now loads 3x faster and provides a much better user experience. 
                    The cross-cultural perspective was invaluable."
                  </p>
                  <div className="text-sm font-medium">
                    — Mike Rodriguez, CTO
                  </div>
                </CardContent>
              </Card>
            </StaggeredItem>

            <StaggeredItem>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {STARS.map((starIndex) => (
                      <Star key={`star-${starIndex}`} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">Great Communication</CardTitle>
                </CardHeader>
                <CardContent>
              <p className="text-sm text-muted-foreground mb-4 italic">
                "Communication with Shunya was clear and professional throughout the project. 
                His ability to explain complex technical concepts in both English and Japanese 
                made collaboration seamless. Will definitely work together again."
              </p>
              <div className="text-sm font-medium">
                — Yuki Tanaka, Design Lead
              </div>
                </CardContent>
              </Card>
            </StaggeredItem>
          </div>
        </StaggeredAnimation>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="flex justify-center items-center gap-3 mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Get In Touch</h2>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Let's connect and discuss how we can work together to create something amazing
              </p>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollAnimation direction="right" delay={0.2}>
              <div className="space-y-6">
                <ScaleIn delay={0.4}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Mail className="h-5 w-5" />
                        Contact Information
                      </CardTitle>
                    </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">shunya.asano@come-in.dev</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Based in New Zealand (Originally from Japan)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Available for freelance projects</span>
                  </div>
                </CardContent>
                  </Card>
                </ScaleIn>
                
                <ScaleIn delay={0.6}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Let's Collaborate</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        I'm always interested in new opportunities and exciting projects. 
                        Whether you need a full-stack developer, technical consultant, or 
                        someone to help bridge language barriers in tech, let's talk!
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm">Web Development</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm">Technical Translation</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-sm">Consulting</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScaleIn>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation direction="left" delay={0.4}>
              <div className="space-y-6">
                <ScaleIn delay={0.6}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Connect With Me</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                  <Button className="w-full justify-start" variant="outline" asChild>
                    <a href="https://github.com/schnya" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button className="w-full justify-start" variant="outline" asChild>
                    <a href="https://linkedin.com/in/shunya-asano" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button className="w-full justify-start" variant="outline" asChild>
                    <a href="mailto:shunya.asano@come-in.dev">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Me
                    </a>
                  </Button>
                    </CardContent>
                  </Card>
                </ScaleIn>
                
                <ScaleIn delay={0.8}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Response</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        I typically respond to messages within 24 hours. 
                        For urgent matters, feel free to reach out directly via email.
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span>Available for new projects</span>
                      </div>
                    </CardContent>
                  </Card>
                </ScaleIn>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <ScaleIn delay={0.2}>
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
            
            <ScrollAnimation direction="up" delay={0.4}>
              <h2 className="text-2xl font-bold mb-4 relative z-10">
                🚀 通信試みる - 応答願う
              </h2>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.6}>
              <p className="text-muted-foreground mb-4 relative z-10">
                本日も通信試みるが 応答は無し
              </p>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.8}>
              <p className="text-muted-foreground/80 mb-6 relative z-10 italic">
                わたしは どんなに離れても いつもあなたの 周回軌道上
              </p>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={1.0}>
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
            </ScrollAnimation>
          </div>
        </ScaleIn>
      </section>
    </div>
  );
}
