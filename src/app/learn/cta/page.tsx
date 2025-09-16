import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function CTAPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">CTA（Call-to-Action）</h1>
              <p className="text-muted-foreground mt-2">
                効果的なアクション促進ボタンとユーザー導線の設計
              </p>
            </div>
            <Button asChild>
              <Link href="/learn">学習一覧に戻る</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              CTAとは何か？
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              CTA（Call-to-Action）は、ユーザーに特定のアクションを促すための要素です。
              ボタン、リンク、フォームなど、ユーザーが次に何をすべきかを明確に示す重要なUI要素です。
            </p>
            <div className="flex justify-center gap-2 flex-wrap">
              <Badge variant="secondary">初級</Badge>
              <Badge variant="outline">⏱️ 40分</Badge>
              <Badge variant="outline">🎯 UXデザイン</Badge>
            </div>
          </div>
        </section>

        {/* What is CTA */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>CTAの基本概念</CardTitle>
              <CardDescription>
                効果的なCTAの特徴と重要性を理解しましょう
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">CTAの定義</h3>
                <p className="text-muted-foreground">
                  Call-to-Action（行動喚起）は、ユーザーに特定の行動を促すためのUI要素です。
                  登録、購入、ダウンロード、問い合わせなど、ビジネス目標に直結する重要な要素です。
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">効果的なCTAの特徴</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">明確性</h4>
                    <p className="text-sm text-muted-foreground">
                      何をするのかが一目で分かる
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">緊急性</h4>
                    <p className="text-sm text-muted-foreground">
                      今すぐ行動したくなる理由がある
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">視認性</h4>
                    <p className="text-sm text-muted-foreground">
                      目立つ位置とデザイン
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">価値提供</h4>
                    <p className="text-sm text-muted-foreground">
                      ユーザーにとってのメリットが明確
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">CTAの実例</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Good CTA Example */}
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">✅ 良いCTAの例</CardTitle>
                <CardDescription>
                  明確で行動しやすいCTA
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <Button className="w-full" size="lg">
                    無料で始める
                  </Button>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">良いポイント:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 行動が明確（「始める」）</li>
                    <li>• 価値が分かる（「無料」）</li>
                    <li>• 目立つデザイン</li>
                    <li>• 適切なサイズ</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Bad CTA Example */}
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">❌ 悪いCTAの例</CardTitle>
                <CardDescription>
                  改善が必要なCTA
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <Button variant="outline" size="sm" className="w-full">
                    クリック
                  </Button>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">改善点:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 何をするか不明確</li>
                    <li>• 価値が伝わらない</li>
                    <li>• サイズが小さい</li>
                    <li>• 目立たないデザイン</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Best Practices */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>CTAのベストプラクティス</CardTitle>
              <CardDescription>
                効果的なCTAを作るための具体的な方法
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">テキストの書き方</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded">
                      <p className="font-medium">✅ 良い例</p>
                      <p className="text-sm text-muted-foreground">「今すぐ無料で始める」「資料をダウンロード」「無料相談を予約」</p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <p className="font-medium">❌ 悪い例</p>
                      <p className="text-sm text-muted-foreground">「クリック」「詳細」「こちら」</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">デザインのポイント</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded">
                      <p className="font-medium">✅ 良い例</p>
                      <p className="text-sm text-muted-foreground">目立つ色、適切なサイズ、十分な余白</p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <p className="font-medium">❌ 悪い例</p>
                      <p className="text-sm text-muted-foreground">小さすぎる、目立たない色、窮屈な配置</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">配置のコツ</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">Above the Fold</h4>
                    <p className="text-sm text-muted-foreground">スクロールしなくても見える位置</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">自然な流れ</h4>
                    <p className="text-sm text-muted-foreground">コンテンツの流れに沿った配置</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">複数箇所</h4>
                    <p className="text-sm text-muted-foreground">重要なページでは複数配置</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Interactive Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">インタラクティブな例</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>ボタンスタイルの比較</CardTitle>
                <CardDescription>
                  異なるスタイルのCTAボタン
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button className="w-full">プライマリボタン</Button>
                  <Button variant="outline" className="w-full">セカンダリボタン</Button>
                  <Button variant="destructive" className="w-full">警告ボタン</Button>
                  <Button variant="ghost" className="w-full">ゴーストボタン</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>サイズの比較</CardTitle>
                <CardDescription>
                  異なるサイズのCTAボタン
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button size="sm" className="w-full">小さいボタン</Button>
                  <Button size="default" className="w-full">標準ボタン</Button>
                  <Button size="lg" className="w-full">大きいボタン</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* A/B Testing */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>A/BテストでCTAを最適化</CardTitle>
              <CardDescription>
                データに基づいたCTAの改善方法
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">テストすべき要素</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">テキスト</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• ボタンの文言</li>
                      <li>• 説明文の長さ</li>
                      <li>• 価値提案の表現</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">デザイン</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 色とコントラスト</li>
                      <li>• サイズと形状</li>
                      <li>• 配置と余白</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">測定すべき指標</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">クリック率（CTR）</h4>
                    <p className="text-sm text-muted-foreground">ボタンがクリックされる割合</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">コンバージョン率</h4>
                    <p className="text-sm text-muted-foreground">目標達成までの割合</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">離脱率</h4>
                    <p className="text-sm text-muted-foreground">ページを離れる割合</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>次のステップ</CardTitle>
              <CardDescription>
                CTAの学習を深めるための次のアクション
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">実践的な学習</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 既存サイトのCTAを分析する</li>
                    <li>• 自分のプロジェクトでCTAを実装する</li>
                    <li>• A/Bテストを計画・実行する</li>
                    <li>• ユーザーフィードバックを収集する</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">関連する学習トピック</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• ユーザビリティテスト</li>
                    <li>• コンバージョン最適化</li>
                    <li>• ユーザー心理と行動分析</li>
                    <li>• デザインシステム</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navigation */}
        <section className="text-center">
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild>
              <Link href="/learn">学習一覧に戻る</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">ホームに戻る</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
