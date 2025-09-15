import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/providers";
import { ThemeToggle } from "@/components/theme-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Come In - Modern Next.js App",
  description: "A modern Next.js 15 application with TypeScript, Tailwind CSS, and the latest features",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Modern Web Development"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://your-domain.com",
    title: "Come In - Modern Next.js App",
    description: "A modern Next.js 15 application with TypeScript, Tailwind CSS, and the latest features",
    siteName: "Come In",
  },
  twitter: {
    card: "summary_large_image",
    title: "Come In - Modern Next.js App",
    description: "A modern Next.js 15 application with TypeScript, Tailwind CSS, and the latest features",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Providers>
          <div className="relative min-h-screen">
            {/* Theme Toggle - Fixed Position */}
            <div className="fixed top-4 right-4 z-50">
              <ThemeToggle />
            </div>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
