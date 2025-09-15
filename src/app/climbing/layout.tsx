import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Climbing Dictionary - クライミング用語辞典',
  description: 'English ↔ Japanese climbing terminology for climbers in New Zealand. NZ在住の日本人クライマーのための用語辞典',
  keywords: ['climbing', 'dictionary', 'terminology', 'English', 'Japanese', 'New Zealand', 'クライミング', '用語', '辞典'],
  authors: [{ name: 'Climbing Dictionary Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://your-domain.com/climbing',
    title: 'Climbing Dictionary - クライミング用語辞典',
    description: 'English ↔ Japanese climbing terminology for climbers in New Zealand',
    siteName: 'Climbing Dictionary',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Climbing Dictionary - クライミング用語辞典',
    description: 'English ↔ Japanese climbing terminology for climbers in New Zealand',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ClimbingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <div className="climbing-app">
          {children}
        </div>
      </body>
    </html>
  );
}
