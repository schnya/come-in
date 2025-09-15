import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code, Globe, Mountain, Palette, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Welcome to{" "}
            <span className="text-primary">Come In</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore diverse learning experiences and specialized tools built with modern web technologies.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="/learn">学習を始める</a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8" asChild>
              <a href="/climbing">クライミング辞典</a>
            </Button>
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
                We're constantly working on new projects. Stay tuned for more exciting features!
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
        <div className="bg-muted rounded-lg p-8 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Ready to explore?</h2>
          <p className="text-muted-foreground mb-6">
            Choose your path and start your learning journey with our specialized tools and resources.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <a href="/learn">学習を始める</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/climbing">クライミング辞典</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
