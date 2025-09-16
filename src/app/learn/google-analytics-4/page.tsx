import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function GoogleAnalytics4Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Google Analytics 4</h1>
              <p className="text-muted-foreground mt-2">
                最新のWeb分析ツールの基本と実践
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
              Google Analytics 4とは？
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Google Analytics 4（GA4）は、Googleの最新のWeb分析ツールです。
              ユーザーの行動を詳細に追跡し、ビジネスの成長に必要な洞察を提供します。
            </p>
            <div className="flex justify-center gap-2 flex-wrap">
              <Badge variant="secondary">初級</Badge>
              <Badge variant="outline">⏱️ 60分</Badge>
              <Badge variant="outline">📊 Web分析</Badge>
            </div>
          </div>
        </section>

        {/* What is GA4 */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>GA4の基本概念</CardTitle>
              <CardDescription>
                Universal Analytics（UA）からの変更点と新機能
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">GA4の特徴</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">イベントベース分析</h4>
                    <p className="text-sm text-muted-foreground">
                      ページビュー、クリック、スクロールなど、すべてのユーザー行動をイベントとして追跡
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">クロスプラットフォーム</h4>
                    <p className="text-sm text-muted-foreground">
                      Web、アプリ、オフラインのデータを統合して分析
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">機械学習</h4>
                    <p className="text-sm text-muted-foreground">
                      AIによる予測分析と自動インサイト
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">プライバシー重視</h4>
                    <p className="text-sm text-muted-foreground">
                      Cookieレス分析とプライバシー保護機能
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">UAとの主な違い</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-muted rounded">
                    <p className="font-medium">セッションベース → イベントベース</p>
                    <p className="text-sm text-muted-foreground">
                      セッションではなく、個別のイベントを基本単位として分析
                    </p>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <p className="font-medium">ページビュー → エンゲージメント</p>
                    <p className="text-sm text-muted-foreground">
                      ページビュー数ではなく、エンゲージメント時間を重視
                    </p>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <p className="font-medium">バウンス率 → エンゲージメント率</p>
                    <p className="text-sm text-muted-foreground">
                      バウンス率の代わりに、エンゲージメント率を指標として使用
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Metrics Deep Dive */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">重要な指標</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>エンゲージメント時間</CardTitle>
                <CardDescription>
                  ユーザーがサイトにどれだけ関心を持っているかを測る指標
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">計算方法</h4>
                  <p className="text-sm text-muted-foreground">
                    ユーザーがページに滞在している時間 + ページ間の移動時間
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">良いエンゲージメント時間の目安</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• ブログ記事: 2-5分</li>
                    <li>• 商品ページ: 1-3分</li>
                    <li>• ランディングページ: 30秒-2分</li>
                    <li>• サービスページ: 2-4分</li>
                  </ul>
                </div>
                <div className="p-3 bg-muted rounded">
                  <h4 className="font-medium mb-1">改善のヒント</h4>
                  <p className="text-sm text-muted-foreground">
                    エンゲージメント時間が短い場合：コンテンツの質向上、関連記事の追加、読みやすさの改善
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>エンゲージメント率</CardTitle>
                <CardDescription>
                  セッションのうち、エンゲージしたセッションの割合
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">エンゲージしたセッションとは</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 10秒以上滞在</li>
                    <li>• 2ページ以上閲覧</li>
                    <li>• コンバージョンイベント発生</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">業界別の目安</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• ECサイト: 40-60%</li>
                    <li>• 企業サイト: 30-50%</li>
                    <li>• ブログ: 50-70%</li>
                    <li>• メディア: 60-80%</li>
                  </ul>
                </div>
                <div className="p-3 bg-muted rounded">
                  <h4 className="font-medium mb-1">改善のヒント</h4>
                  <p className="text-sm text-muted-foreground">
                    エンゲージメント率が低い場合：ファーストビューの改善、ナビゲーションの最適化、コンテンツの関連性向上
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Traffic Sources Deep Dive */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>トラフィックソースとマーケティングチャネル</CardTitle>
              <CardDescription>
                ユーザーがどこから来ているかを詳しく分析する方法
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">主要なトラフィックソース</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">Organic Search（自然検索）</h4>
                      <p className="text-sm text-muted-foreground">
                        Google、Yahoo!などの検索エンジンからの流入。SEOの成果を測る指標
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">Direct（直接流入）</h4>
                      <p className="text-sm text-muted-foreground">
                        URLを直接入力、ブックマークからの流入。ブランド認知度の指標
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">Social（ソーシャル）</h4>
                      <p className="text-sm text-muted-foreground">
                        Facebook、Twitter、InstagramなどのSNSからの流入
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">Paid Search（有料検索）</h4>
                      <p className="text-sm text-muted-foreground">
                        Google Ads、Yahoo!広告などの検索広告からの流入
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">Referral（参照）</h4>
                      <p className="text-sm text-muted-foreground">
                        他のWebサイトからのリンク経由の流入
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">Email（メール）</h4>
                      <p className="text-sm text-muted-foreground">
                        メールマーケティングからの流入
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">UTMパラメータの活用</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">UTMパラメータとは</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      URLに追加するパラメータで、トラフィックの詳細な出所を追跡できる
                    </p>
                    <div className="p-3 bg-background rounded border">
                      <code className="text-sm">
                        https://example.com?utm_source=facebook&utm_medium=social&utm_campaign=summer_sale
                      </code>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">utm_source</h4>
                      <p className="text-sm text-muted-foreground">
                        トラフィックの出所（facebook、google、newsletter）
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">utm_medium</h4>
                      <p className="text-sm text-muted-foreground">
                        メディアの種類（social、cpc、email、banner）
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">utm_campaign</h4>
                      <p className="text-sm text-muted-foreground">
                        キャンペーン名（summer_sale、product_launch）
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Reports */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>主要レポートの見方</CardTitle>
              <CardDescription>
                GA4で重要なレポートとその活用方法
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">リアルタイムレポート</h3>
                  <div className="space-y-2">
                    <h4 className="font-medium">確認できる情報:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 現在アクティブなユーザー数</li>
                      <li>• 現在見られているページ</li>
                      <li>• ユーザーの地理的位置</li>
                      <li>• トラフィックソース</li>
                    </ul>
                  </div>
                  <div className="mt-3 p-3 bg-muted rounded">
                    <p className="text-sm">
                      <strong>活用例:</strong> 新しいコンテンツを公開した直後の反応を確認
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">エンゲージメントレポート</h3>
                  <div className="space-y-2">
                    <h4 className="font-medium">確認できる情報:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• エンゲージメント時間</li>
                      <li>• エンゲージメント率</li>
                      <li>• イベント数</li>
                      <li>• コンバージョン数</li>
                    </ul>
                  </div>
                  <div className="mt-3 p-3 bg-muted rounded">
                    <p className="text-sm">
                      <strong>活用例:</strong> ユーザーのサイト滞在時間と関心度を分析
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">獲得レポート</h3>
                  <div className="space-y-2">
                    <h4 className="font-medium">確認できる情報:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• トラフィックソース</li>
                      <li>• チャネル別ユーザー数</li>
                      <li>• 参照元サイト</li>
                      <li>• 検索クエリ</li>
                    </ul>
                  </div>
                  <div className="mt-3 p-3 bg-muted rounded">
                    <p className="text-sm">
                      <strong>活用例:</strong> どのマーケティングチャネルが効果的かを分析
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">行動フローレポート</h3>
                  <div className="space-y-2">
                    <h4 className="font-medium">確認できる情報:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• ページ遷移パターン</li>
                      <li>• 離脱ポイント</li>
                      <li>• ユーザージャーニー</li>
                      <li>• コンバージョン経路</li>
                    </ul>
                  </div>
                  <div className="mt-3 p-3 bg-muted rounded">
                    <p className="text-sm">
                      <strong>活用例:</strong> ユーザーの行動パターンと改善点を特定
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Custom Events */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>カスタムイベントの設定</CardTitle>
              <CardDescription>
                重要なユーザー行動を追跡するためのカスタムイベント
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">重要なカスタムイベント例</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">フォーム送信</h4>
                      <p className="text-sm text-muted-foreground">
                        お問い合わせフォーム、会員登録フォームの送信を追跡
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">ファイルダウンロード</h4>
                      <p className="text-sm text-muted-foreground">
                        PDF、動画、画像などのダウンロードを追跡
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">動画再生</h4>
                      <p className="text-sm text-muted-foreground">
                        動画の再生開始、完了、一時停止を追跡
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">外部リンククリック</h4>
                      <p className="text-sm text-muted-foreground">
                        外部サイトへのリンククリックを追跡
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">検索実行</h4>
                      <p className="text-sm text-muted-foreground">
                        サイト内検索の実行と検索クエリを追跡
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">スクロール深度</h4>
                      <p className="text-sm text-muted-foreground">
                        ページのスクロール深度（25%、50%、75%、100%）を追跡
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">スクロール深度の視覚的例</h3>
                <div className="p-4 bg-muted rounded">
                  <div className="space-y-4">
                    <div className="text-center">
                      <h4 className="font-medium mb-2">ページのスクロール深度</h4>
                      <div className="relative bg-white border-2 border-gray-300 rounded h-64 mx-auto max-w-md">
                        {/* ページコンテンツの視覚的表現 */}
                        <div className="absolute inset-0 p-4 space-y-2">
                          <div className="h-4 bg-blue-200 rounded"></div>
                          <div className="h-4 bg-blue-200 rounded"></div>
                          <div className="h-4 bg-blue-200 rounded"></div>
                          <div className="h-4 bg-blue-200 rounded"></div>
                          <div className="h-4 bg-blue-200 rounded"></div>
                          <div className="h-4 bg-blue-200 rounded"></div>
                          <div className="h-4 bg-blue-200 rounded"></div>
                          <div className="h-4 bg-blue-200 rounded"></div>
                          <div className="h-4 bg-blue-200 rounded"></div>
                          <div className="h-4 bg-blue-200 rounded"></div>
                          <div className="h-4 bg-blue-200 rounded"></div>
                          <div className="h-4 bg-blue-200 rounded"></div>
                        </div>
                        
                        {/* スクロール深度のマーカー */}
                        <div className="absolute left-0 right-0 top-1/4 border-t-2 border-red-500">
                          <span className="absolute -left-16 top-0 text-xs bg-red-500 text-white px-1 rounded">25%</span>
                        </div>
                        <div className="absolute left-0 right-0 top-1/2 border-t-2 border-orange-500">
                          <span className="absolute -left-16 top-0 text-xs bg-orange-500 text-white px-1 rounded">50%</span>
                        </div>
                        <div className="absolute left-0 right-0 top-3/4 border-t-2 border-yellow-500">
                          <span className="absolute -left-16 top-0 text-xs bg-yellow-500 text-white px-1 rounded">75%</span>
                        </div>
                        <div className="absolute left-0 right-0 bottom-0 border-t-2 border-green-500">
                          <span className="absolute -left-16 top-0 text-xs bg-green-500 text-white px-1 rounded">100%</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="p-2 bg-red-100 rounded">
                        <div className="text-xs font-medium">25%</div>
                        <div className="text-xs text-muted-foreground">関心あり</div>
                      </div>
                      <div className="p-2 bg-orange-100 rounded">
                        <div className="text-xs font-medium">50%</div>
                        <div className="text-xs text-muted-foreground">内容確認</div>
                      </div>
                      <div className="p-2 bg-yellow-100 rounded">
                        <div className="text-xs font-medium">75%</div>
                        <div className="text-xs text-muted-foreground">詳細読了</div>
                      </div>
                      <div className="p-2 bg-green-100 rounded">
                        <div className="text-xs font-medium">100%</div>
                        <div className="text-xs text-muted-foreground">完全読了</div>
                      </div>
                    </div>
                    <div className="p-3 bg-background rounded border">
                      <h4 className="font-medium mb-2">スクロール深度の活用方法</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 25%未満で離脱が多い → ファーストビューの改善</li>
                        <li>• 50%で離脱が多い → コンテンツの中盤を改善</li>
                        <li>• 75%以上到達率が高い → コンテンツの質が良い</li>
                        <li>• 100%到達率が高い → コンテンツが適切な長さ</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">イベント設定の手順</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">1. 管理画面でイベントを作成</h4>
                    <p className="text-sm text-muted-foreground">
                      管理 → データ表示 → イベント → 「イベントを作成」
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">2. イベント名と条件を設定</h4>
                    <p className="text-sm text-muted-foreground">
                      既存のイベントをベースに、新しいイベント名と条件を設定
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">3. コンバージョンとして設定</h4>
                    <p className="text-sm text-muted-foreground">
                      重要なイベントは「コンバージョンとしてマーク」を有効化
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Exit Point Analysis */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>離脱ポイント分析</CardTitle>
              <CardDescription>
                ユーザーがどこで離脱しているかを分析し、改善点を見つける
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">離脱ポイントの特定方法</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">1. エグジットページ分析</h4>
                    <div className="p-3 bg-muted rounded">
                      <p className="text-sm text-muted-foreground">
                        エンゲージメント → ページとスクリーン → エグジットページ
                      </p>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                      <li>• どのページで離脱が多いか</li>
                      <li>• 離脱率の高いページを特定</li>
                      <li>• 改善が必要なページを優先順位付け</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">2. 行動フロー分析</h4>
                    <div className="p-3 bg-muted rounded">
                      <p className="text-sm text-muted-foreground">
                        エンゲージメント → エンゲージメント → 行動フロー
                      </p>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                      <li>• ユーザーのページ遷移パターン</li>
                      <li>• 離脱が多い遷移を特定</li>
                      <li>• ユーザージャーニーの最適化</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">離脱率改善のアプローチ</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium">コンテンツの改善</h4>
                    <p className="text-sm text-muted-foreground">
                      情報不足、読みにくさ、関連性の低さを改善
                    </p>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium">ナビゲーションの改善</h4>
                    <p className="text-sm text-muted-foreground">
                      次のアクションが分かりやすくなるよう、CTAやリンクを配置
                    </p>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium">ページ速度の改善</h4>
                    <p className="text-sm text-muted-foreground">
                      読み込み時間の短縮、画像最適化、コード最適化
                    </p>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium">モバイル対応の改善</h4>
                    <p className="text-sm text-muted-foreground">
                      レスポンシブデザイン、タッチ操作の最適化
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>GA4活用のベストプラクティス</CardTitle>
              <CardDescription>
                効果的な分析のための実践的なアドバイス
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">データの精度向上</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">内部トラフィックの除外</h4>
                      <p className="text-sm text-muted-foreground">
                        社内IPアドレスを除外して、正確なユーザーデータを取得
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">スパムトラフィックの除外</h4>
                      <p className="text-sm text-muted-foreground">
                        ボットやスパムトラフィックを除外するフィルターを設定
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">UTMパラメータの活用</h4>
                      <p className="text-sm text-muted-foreground">
                        キャンペーンやチャネルを正確に追跡するためのUTM設定
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">継続的な改善</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">定期的なレポート確認</h4>
                      <p className="text-sm text-muted-foreground">
                        週次・月次でレポートを確認し、トレンドを把握
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">目標設定とKPI管理</h4>
                      <p className="text-sm text-muted-foreground">
                        明確な目標を設定し、KPIで進捗を測定
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">A/Bテストとの連携</h4>
                      <p className="text-sm text-muted-foreground">
                        GA4のデータを基にA/Bテストを計画・実行
                      </p>
                    </div>
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
                GA4の学習を深めるための次のアクション
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">実践的な学習</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 自分のサイトにGA4を導入する</li>
                    <li>• カスタムイベントを設定する</li>
                    <li>• 定期的にレポートを確認する</li>
                    <li>• データに基づいて改善施策を実行する</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">関連する学習トピック</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Google Search Console</li>
                    <li>• Google Tag Manager</li>
                    <li>• A/Bテスト実践</li>
                    <li>• ファネル分析</li>
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
              <Link href="/learn/google-search-console">Google Search Console</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/learn/google-tag-manager">Google Tag Manager</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
