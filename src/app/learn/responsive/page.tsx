import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Code, Eye, Smartphone, Tablet, Monitor, Grid } from 'lucide-react';

export const metadata = {
  title: 'レスポンシブデザイン - Next.js 15 学習ガイド',
  description: 'モバイルファーストのレスポンシブデザイン実装方法を学びます。',
};

export default function ResponsivePage() {
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
              <h1 className="text-3xl font-bold">レスポンシブデザイン</h1>
              <p className="text-muted-foreground mt-2">
                モバイルファーストのレスポンシブデザイン実装
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
              <Eye className="h-5 w-5" />
              <h2 className="text-2xl font-bold">概要</h2>
            </div>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  レスポンシブデザインは、様々な画面サイズやデバイスで最適な表示を提供する重要な技術です。
                  モバイルファーストのアプローチで、Tailwind CSSのブレークポイントを活用した
                  効率的なレスポンシブデザインを実装する方法を学びます。
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">モバイルファースト</Badge>
                  <Badge variant="secondary">ブレークポイント</Badge>
                  <Badge variant="secondary">フレックスボックス</Badge>
                  <Badge variant="secondary">グリッドレイアウト</Badge>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Breakpoints */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Grid className="h-5 w-5" />
              <h2 className="text-2xl font-bold">ブレークポイント</h2>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Tailwind CSS ブレークポイント</CardTitle>
                <CardDescription>
                  モバイルファーストのアプローチで段階的にスタイルを適用
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <Smartphone className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <h4 className="font-medium">sm</h4>
                      <p className="text-sm text-muted-foreground">640px+</p>
                      <p className="text-xs text-muted-foreground mt-1">スマートフォン</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <Tablet className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <h4 className="font-medium">md</h4>
                      <p className="text-sm text-muted-foreground">768px+</p>
                      <p className="text-xs text-muted-foreground mt-1">タブレット</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <Monitor className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <h4 className="font-medium">lg</h4>
                      <p className="text-sm text-muted-foreground">1024px+</p>
                      <p className="text-xs text-muted-foreground mt-1">デスクトップ</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <Monitor className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <h4 className="font-medium">xl</h4>
                      <p className="text-sm text-muted-foreground">1280px+</p>
                      <p className="text-xs text-muted-foreground mt-1">大型デスクトップ</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Implementation Examples */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Code className="h-5 w-5" />
              <h2 className="text-2xl font-bold">実装例</h2>
            </div>
            
            <div className="space-y-6">
              {/* Grid Layout */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                    グリッドレイアウト
                  </CardTitle>
                  <CardDescription>
                    画面サイズに応じてカラム数を調整
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="bg-card p-4 rounded-lg">カード 1</div>
  <div className="bg-card p-4 rounded-lg">カード 2</div>
  <div className="bg-card p-4 rounded-lg">カード 3</div>
</div>`}
                    </pre>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-card p-4 rounded-lg border">カード 1</div>
                    <div className="bg-card p-4 rounded-lg border">カード 2</div>
                    <div className="bg-card p-4 rounded-lg border">カード 3</div>
                  </div>
                </CardContent>
              </Card>

              {/* Flexbox Layout */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                    フレックスボックス
                  </CardTitle>
                  <CardDescription>
                    方向と配置を画面サイズに応じて変更
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`<div className="flex flex-col md:flex-row gap-4 items-center">
  <div className="flex-1">コンテンツ 1</div>
  <div className="flex-1">コンテンツ 2</div>
</div>`}
                    </pre>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 items-center p-4 border rounded-lg">
                    <div className="flex-1 bg-muted p-3 rounded text-center">コンテンツ 1</div>
                    <div className="flex-1 bg-muted p-3 rounded text-center">コンテンツ 2</div>
                  </div>
                </CardContent>
              </Card>

              {/* Typography */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                    タイポグラフィ
                  </CardTitle>
                  <CardDescription>
                    画面サイズに応じてフォントサイズを調整
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`<h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
  レスポンシブタイトル
</h1>
<p className="text-sm md:text-base lg:text-lg">
  レスポンシブなテキスト
</p>`}
                    </pre>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-2xl lg:text-3xl font-bold">レスポンシブタイトル</h3>
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
                      画面サイズに応じてフォントサイズが変化します
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Spacing */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                    スペーシング
                  </CardTitle>
                  <CardDescription>
                    画面サイズに応じてパディングとマージンを調整
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <pre className="text-sm overflow-x-auto">
{`<div className="p-4 md:p-8 lg:p-12">
  <div className="space-y-4 md:space-y-8">
    <div className="bg-card p-4 rounded">アイテム 1</div>
    <div className="bg-card p-4 rounded">アイテム 2</div>
  </div>
</div>`}
                    </pre>
                  </div>
                  <div className="p-4 md:p-8 lg:p-12 bg-muted rounded-lg">
                    <div className="space-y-4 md:space-y-8">
                      <div className="bg-card p-4 rounded border">アイテム 1</div>
                      <div className="bg-card p-4 rounded border">アイテム 2</div>
                    </div>
                  </div>
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
                  <p className="text-sm">• モバイルファーストで設計する</p>
                  <p className="text-sm">• タッチフレンドリーなUI</p>
                  <p className="text-sm">• 適切なコントラスト比</p>
                  <p className="text-sm">• 読みやすいフォントサイズ</p>
                  <p className="text-sm">• パフォーマンスを考慮</p>
                  <p className="text-sm">• 実際のデバイスでテスト</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">❌ 避けるべきこと</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• デスクトップファーストの設計</p>
                  <p className="text-sm">• 小さすぎるタッチターゲット</p>
                  <p className="text-sm">• 過度なアニメーション</p>
                  <p className="text-sm">• 固定幅の使用</p>
                  <p className="text-sm">• 横スクロールの発生</p>
                  <p className="text-sm">• デスクトップのみのテスト</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Demo */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Smartphone className="h-5 w-5" />
              <h2 className="text-2xl font-bold">デモ</h2>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  ブラウザの幅を変更して、レスポンシブデザインの動作を確認してください。
                </p>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-primary/10 p-4 rounded-lg text-center">
                      <h4 className="font-medium">カード 1</h4>
                      <p className="text-sm text-muted-foreground">レスポンシブ</p>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg text-center">
                      <h4 className="font-medium">カード 2</h4>
                      <p className="text-sm text-muted-foreground">デザイン</p>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg text-center">
                      <h4 className="font-medium">カード 3</h4>
                      <p className="text-sm text-muted-foreground">実装例</p>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg text-center">
                      <h4 className="font-medium">カード 4</h4>
                      <p className="text-sm text-muted-foreground">デモ</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-4 items-center p-4 bg-muted rounded-lg">
                    <div className="flex-1 text-center">
                      <h4 className="font-medium">左側コンテンツ</h4>
                      <p className="text-sm text-muted-foreground">モバイルでは縦並び</p>
                    </div>
                    <div className="flex-1 text-center">
                      <h4 className="font-medium">右側コンテンツ</h4>
                      <p className="text-sm text-muted-foreground">デスクトップでは横並び</p>
                    </div>
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
                  レスポンシブデザインの実装が完了したら、次のトピックに進みましょう
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button asChild>
                    <Link href="/learn/accessibility">アクセシビリティ対応 →</Link>
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
