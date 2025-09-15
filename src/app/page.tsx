import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
            A modern Next.js 15 application built with TypeScript, Tailwind CSS, and the latest web technologies.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="/learn">学習を始める</a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8" asChild>
              <a href="/learn">詳細を見る</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Modern Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built with the latest technologies and best practices for optimal performance and developer experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Next.js 15</CardTitle>
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
              <CardTitle>TypeScript</CardTitle>
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
              <CardTitle>Tailwind CSS v4</CardTitle>
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

          <Card>
            <CardHeader>
              <CardTitle>TanStack Query</CardTitle>
              <CardDescription>
                Powerful data fetching and state management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Efficient server state management with caching and synchronization.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modern UI</CardTitle>
              <CardDescription>
                Beautiful, accessible components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Pre-built components with shadcn/ui and Radix UI primitives.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Developer Experience</CardTitle>
              <CardDescription>
                Optimized for productivity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                ESLint, Prettier, Vitest, and modern tooling for the best DX.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-muted rounded-lg p-8 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Ready to build something amazing?</h2>
          <p className="text-muted-foreground mb-6">
            Start developing with this modern Next.js 15 setup and create your next great application.
          </p>
          <Button size="lg" asChild>
            <a href="/learn">学習を始める</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
