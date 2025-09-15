import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Code, Eye, Zap, Image, Package, Gauge } from 'lucide-react';

export const metadata = {
  title: 'パフォーマンス最適化 - Next.js 15 学習ガイド',
  description: 'Core Web Vitalsを意識したパフォーマンス最適化方法を学びます。',
};

export default function PerformancePage() {
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
              <h1 className="text-3xl font-bold">パフォーマンス最適化</h1>
              <p className="text-muted-foreground mt-2">
                Core Web Vitalsを意識したパフォーマンス最適化
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
              <Zap className="h-5 w-5" />
              <h2 className="text-2xl font-bold">概要</h2>
            </div>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  パフォーマンス最適化は、ユーザー体験とSEOの両方に重要な影響を与えます。
                  Next.js 15の最新機能を活用して、画像最適化、コード分割、キャッシュ戦略、
                  バンドル最適化などの手法を学び、Core Web Vitalsの改善を実現します。
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">画像最適化</Badge>
                  <Badge variant="secondary">コード分割</Badge>
                  <Badge variant="secondary">キャッシュ戦略</Badge>
                  <Badge variant="secondary">バンドル最適化</Badge>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Core Web Vitals */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Gauge className="h-5 w-5" />
              <h2 className="text-2xl font-bold">Core Web Vitals</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">✓</span>
                    LCP (Largest Contentful Paint)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    最大コンテンツ描画時間
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• 目標: 2.5秒以内</li>
                    <li>• 画像の最適化</li>
                    <li>• フォントの最適化</li>
                    <li>• サーバー応答時間の改善</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">✓</span>
                    INP (Interaction to Next Paint)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    インタラクションまでの時間
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• 目標: 200ms以内</li>
                    <li>• JavaScriptの最適化</li>
                    <li>• メインスレッドのブロック回避</li>
                    <li>• イベントハンドラーの最適化</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">✓</span>
                    CLS (Cumulative Layout Shift)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    累積レイアウトシフト
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• 目標: 0.1以内</li>
                    <li>• 画像サイズの指定</li>
                    <li>• フォントの最適化</li>
                    <li>• 動的コンテンツの予約領域確保</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">✓</span>
                    FCP (First Contentful Paint)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    初回コンテンツ描画時間
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• 目標: 1.8秒以内</li>
                    <li>• クリティカルCSS</li>
                    <li>• リソースの優先度設定</li>
                    <li>• サーバーサイドレンダリング</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Optimization Techniques */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Code className="h-5 w-5" />
              <h2 className="text-2xl font-bold">最適化手法</h2>
            </div>
            
            <div className="space-y-6">
              {/* Image Optimization */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Image className="h-5 w-5" />
                    画像最適化
                  </CardTitle>
                  <CardDescription>
                    Next.js Image コンポーネントの活用
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`import Image from 'next/image';

// 最適化された画像
<Image
  src="/hero-image.jpg"
  alt="ヒーロー画像"
  width={800}
  height={600}
  priority // 重要画像には優先読み込み
  placeholder="blur" // ブラー効果
  blurDataURL="data:image/jpeg;base64,..."
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>

// 遅延読み込み
<Image
  src="/lazy-image.jpg"
  alt="遅延読み込み画像"
  width={400}
  height={300}
  loading="lazy"
/>`}
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    自動的なWebP変換、レスポンシブ画像、遅延読み込みを提供します。
                  </p>
                </CardContent>
              </Card>

              {/* Code Splitting */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    コード分割
                  </CardTitle>
                  <CardDescription>
                    動的インポートとSuspenseの活用
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`import { Suspense, lazy } from 'react';

// 動的インポート
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>読み込み中...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

// ルートレベルでの分割
const Dashboard = lazy(() => import('./Dashboard'));
const Profile = lazy(() => import('./Profile'));`}
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    必要な時だけコンポーネントを読み込み、初期バンドルサイズを削減します。
                  </p>
                </CardContent>
              </Card>

              {/* Font Optimization */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                    フォント最適化
                  </CardTitle>
                  <CardDescription>
                    Next.js Font の活用
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`import { Inter, Roboto_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // フォントスワップ
  variable: '--font-inter',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

// layout.tsx
export default function RootLayout({ children }) {
  return (
    <html className={\`\${inter.variable} \${robotoMono.variable}\`}>
      <body>{children}</body>
    </html>
  );
}`}
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    自動的な最適化、フォントスワップ、プリロードを提供します。
                  </p>
                </CardContent>
              </Card>

              {/* Caching Strategy */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                    キャッシュ戦略
                  </CardTitle>
                  <CardDescription>
                    Next.js のキャッシュ機能の活用
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`// データキャッシュ
async function getData() {
  const res = await fetch('https://api.example.com/data', {
    next: { revalidate: 3600 } // 1時間キャッシュ
  });
  return res.json();
}

// ルートキャッシュ
export const revalidate = 60; // 60秒

// 動的ルートでのキャッシュ制御
export const dynamic = 'force-static';
export const dynamicParams = true;

// ISR (Incremental Static Regeneration)
export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }];
}`}
                    </pre>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    データキャッシュ、ルートキャッシュ、ISRを活用してパフォーマンスを向上させます。
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Performance Monitoring */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Gauge className="h-5 w-5" />
              <h2 className="text-2xl font-bold">パフォーマンス監視</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">測定ツール</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• Lighthouse (Chrome DevTools)</p>
                  <p className="text-sm">• PageSpeed Insights</p>
                  <p className="text-sm">• WebPageTest</p>
                  <p className="text-sm">• GTmetrix</p>
                  <p className="text-sm">• Core Web Vitals Chrome Extension</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">監視指標</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• LCP, INP, CLS, FCP</p>
                  <p className="text-sm">• バンドルサイズ</p>
                  <p className="text-sm">• リソース読み込み時間</p>
                  <p className="text-sm">• メモリ使用量</p>
                  <p className="text-sm">• ネットワーク使用量</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Eye className="h-5 w-5" />
              <h2 className="text-2xl font-bold">ベストプラクティス</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">✅ 推奨事項</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• 画像の最適化と遅延読み込み</p>
                  <p className="text-sm">• フォントの最適化</p>
                  <p className="text-sm">• コード分割の実装</p>
                  <p className="text-sm">• キャッシュ戦略の活用</p>
                  <p className="text-sm">• 不要なJavaScriptの削除</p>
                  <p className="text-sm">• 定期的なパフォーマンス監視</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">❌ 避けるべきこと</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• 大きな画像の直接使用</p>
                  <p className="text-sm">• 不要なライブラリの読み込み</p>
                  <p className="text-sm">• 同期的な重い処理</p>
                  <p className="text-sm">• 過度なアニメーション</p>
                  <p className="text-sm">• キャッシュの無視</p>
                  <p className="text-sm">• パフォーマンステストの省略</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Next Steps */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle>次のステップ</CardTitle>
                <CardDescription>
                  パフォーマンス最適化の実装が完了したら、次のトピックに進みましょう
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button asChild>
                    <Link href="/learn/error-handling">エラーハンドリング →</Link>
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
