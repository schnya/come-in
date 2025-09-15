import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Code, Eye, Search, Globe, FileText, Zap } from 'lucide-react';

export const metadata = {
  title: 'SEO最適化 - Next.js 15 学習ガイド',
  description: 'Next.js 15のSEO機能を活用した最適化方法を学びます。',
};

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/learn">
                <ArrowLeft className="h-4 w-4 mr-2" />
                学習一覧に戻る
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold">SEO最適化</h1>
              <p className="text-muted-foreground mt-2">
                Next.js 15のSEO機能を活用した最適化
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Overview */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Search className="h-5 w-5" />
              <h2 className="text-2xl font-bold">概要</h2>
            </div>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  SEO（Search Engine Optimization）は、検索エンジンでの可視性を向上させる重要な要素です。
                  Next.js 15のApp RouterとServer Componentsを活用して、メタデータ、構造化データ、
                  サイトマップ、パフォーマンス最適化などのSEO機能を実装する方法を学びます。
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">メタデータ</Badge>
                  <Badge variant="secondary">構造化データ</Badge>
                  <Badge variant="secondary">サイトマップ</Badge>
                  <Badge variant="secondary">パフォーマンス</Badge>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* SEO Fundamentals */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-5 w-5" />
              <h2 className="text-2xl font-bold">SEOの基本要素</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                    技術的SEO
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• ページ速度の最適化</li>
                    <li>• モバイルフレンドリー</li>
                    <li>• サイトマップの提供</li>
                    <li>• robots.txtの設定</li>
                    <li>• 構造化データの実装</li>
                    <li>• 内部リンクの最適化</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                    コンテンツSEO
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• タイトルタグの最適化</li>
                    <li>• メタディスクリプション</li>
                    <li>• 見出し構造の整理</li>
                    <li>• キーワードの適切な配置</li>
                    <li>• 高品質なコンテンツ</li>
                    <li>• 画像のalt属性</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Next.js SEO Features */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Code className="h-5 w-5" />
              <h2 className="text-2xl font-bold">Next.js 15のSEO機能</h2>
            </div>
            
            <div className="space-y-6">
              {/* Metadata API */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                    Metadata API
                  </CardTitle>
                  <CardDescription>
                    App Routerでのメタデータ管理
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'サイト名',
    template: '%s | サイト名'
  },
  description: 'サイトの説明',
  keywords: ['キーワード1', 'キーワード2'],
  authors: [{ name: '著者名' }],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://example.com',
    title: 'サイト名',
    description: 'サイトの説明',
    siteName: 'サイト名',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'サイト名',
    description: 'サイトの説明',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// app/page.tsx
export const metadata: Metadata = {
  title: 'ホームページ',
  description: 'ホームページの説明',
};`}
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    App Routerでは、layout.tsxとpage.tsxでメタデータを定義できます。
                  </p>
                </CardContent>
              </Card>

              {/* Structured Data */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                    構造化データ
                  </CardTitle>
                  <CardDescription>
                    JSON-LD形式での構造化データ実装
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`// components/structured-data.tsx
export function StructuredData({ data }: { data: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// 使用例
const articleData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "記事のタイトル",
  "author": {
    "@type": "Person",
    "name": "著者名"
  },
  "datePublished": "2024-01-01",
  "dateModified": "2024-01-01",
  "description": "記事の説明"
};

<StructuredData data={articleData} />`}
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    検索エンジンがコンテンツを理解しやすくするための構造化データを実装します。
                  </p>
                </CardContent>
              </Card>

              {/* Sitemap */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                    サイトマップ
                  </CardTitle>
                  <CardDescription>
                    動的サイトマップの生成
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://example.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://example.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://example.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}`}
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    app/sitemap.tsファイルでサイトマップを自動生成できます。
                  </p>
                </CardContent>
              </Card>

              {/* Robots.txt */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                    robots.txt
                  </CardTitle>
                  <CardDescription>
                    検索エンジンクローラーの制御
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://example.com/sitemap.xml',
  }
}`}
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    app/robots.tsファイルでrobots.txtを自動生成できます。
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Performance SEO */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5" />
              <h2 className="text-2xl font-bold">パフォーマンスSEO</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Core Web Vitals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• <strong>LCP</strong>: 最大コンテンツ描画時間 (2.5秒以内)</p>
                  <p className="text-sm">• <strong>FID</strong>: 初回入力遅延 (100ms以内)</p>
                  <p className="text-sm">• <strong>CLS</strong>: 累積レイアウトシフト (0.1以内)</p>
                  <p className="text-sm">• <strong>INP</strong>: インタラクションまでの時間 (200ms以内)</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">最適化手法</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• 画像の最適化 (next/image)</p>
                  <p className="text-sm">• フォントの最適化 (next/font)</p>
                  <p className="text-sm">• コード分割と遅延読み込み</p>
                  <p className="text-sm">• キャッシュ戦略の実装</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-5 w-5" />
              <h2 className="text-2xl font-bold">ベストプラクティス</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">✅ 推奨事項</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• 一意で説明的なタイトルタグ</p>
                  <p className="text-sm">• 魅力的なメタディスクリプション</p>
                  <p className="text-sm">• 適切な見出し構造 (H1→H2→H3)</p>
                  <p className="text-sm">• 高速なページ読み込み</p>
                  <p className="text-sm">• モバイルフレンドリーなデザイン</p>
                  <p className="text-sm">• 内部リンクの最適化</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">❌ 避けるべきこと</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• 重複コンテンツ</p>
                  <p className="text-sm">• キーワードの過度な使用</p>
                  <p className="text-sm">• 薄いコンテンツ</p>
                  <p className="text-sm">• 遅いページ読み込み</p>
                  <p className="text-sm">• モバイル非対応</p>
                  <p className="text-sm">• 不適切なリダイレクト</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* SEO Tools */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Search className="h-5 w-5" />
              <h2 className="text-2xl font-bold">SEOツール</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">分析ツール</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• Google Search Console</p>
                  <p className="text-sm">• Google Analytics 4</p>
                  <p className="text-sm">• PageSpeed Insights</p>
                  <p className="text-sm">• Lighthouse</p>
                  <p className="text-sm">• GTmetrix</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">キーワードツール</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• Google Keyword Planner</p>
                  <p className="text-sm">• Ahrefs</p>
                  <p className="text-sm">• SEMrush</p>
                  <p className="text-sm">• Ubersuggest</p>
                  <p className="text-sm">• Answer The Public</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Demo */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Eye className="h-5 w-5" />
              <h2 className="text-2xl font-bold">デモ</h2>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  このページのSEO実装例を確認してください。
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">実装されているSEO要素:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• 適切なメタデータ (title, description, keywords)</li>
                      <li>• Open Graph タグ</li>
                      <li>• Twitter Card タグ</li>
                      <li>• セマンティックHTML構造</li>
                      <li>• 適切な見出し階層</li>
                      <li>• 内部リンクの最適化</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">確認方法:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• ブラウザの開発者ツールでElementsタブを確認</li>
                      <li>• ページのソースを表示してメタタグを確認</li>
                      <li>• LighthouseでSEOスコアを測定</li>
                      <li>• Google Search Consoleでインデックス状況を確認</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Next Steps */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle>次のステップ</CardTitle>
                <CardDescription>
                  SEO最適化の実装が完了したら、次のトピックに進みましょう
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button asChild>
                    <Link href="/learn/performance">パフォーマンス最適化 →</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/learn">学習一覧に戻る</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}
