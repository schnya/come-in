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
  title: "応答願う - Come In",
  description: "宇宙飛行士からのメッセージ。あなたの学習への参加をお待ちしています。",
  keywords: ["応答願う", "宇宙", "学習", "Next.js", "React", "TypeScript", "宇宙飛行士"],
  authors: [{ name: "Cosmic Developer" }],
  creator: "Cosmic Developer",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://your-domain.com",
    title: "応答願う - Come In",
    description: "宇宙飛行士からのメッセージ。あなたの学習への参加をお待ちしています。",
    siteName: "応答願う",
  },
  twitter: {
    card: "summary_large_image",
    title: "応答願う - Come In",
    description: "宇宙飛行士からのメッセージ。あなたの学習への参加をお待ちしています。",
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
