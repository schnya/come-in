import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function GoogleSearchConsolePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Google Search Console</h1>
              <p className="text-muted-foreground mt-2">
                SEO分析と検索パフォーマンスの最適化
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
              Google Search Consoleとは？
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Google Search Console（GSC）は、Google検索でのサイトのパフォーマンスを監視・改善するための無料ツールです。
              検索結果での表示状況、インデックス状況、SEOの問題点を把握できます。
            </p>
            <div className="flex justify-center gap-2 flex-wrap">
              <Badge variant="secondary">初級</Badge>
              <Badge variant="outline">⏱️ 45分</Badge>
              <Badge variant="outline">🔍 SEO分析</Badge>
            </div>
          </div>
        </section>

        {/* What is GSC */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>GSCの基本機能</CardTitle>
              <CardDescription>
                Google Search Consoleでできることとその重要性
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">主要機能</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">検索パフォーマンス</h4>
                    <p className="text-sm text-muted-foreground">
                      検索結果での表示回数、クリック数、CTR、平均順位を分析
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">インデックス状況</h4>
                    <p className="text-sm text-muted-foreground">
                      Googleにインデックスされているページ数とエラーページを確認
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Core Web Vitals</h4>
                    <p className="text-sm text-muted-foreground">
                      ページの読み込み速度、インタラクティブ性、視覚的安定性を測定
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">セキュリティ問題</h4>
                    <p className="text-sm text-muted-foreground">
                      マルウェア、ハッキング、スパムなどの問題を検出・通知
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">GSCを使う理由</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-muted rounded">
                    <p className="font-medium">検索エンジン最適化（SEO）の改善</p>
                    <p className="text-sm text-muted-foreground">
                      検索結果での表示状況を把握し、SEO戦略を最適化
                    </p>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <p className="font-medium">技術的問題の早期発見</p>
                    <p className="text-sm text-muted-foreground">
                      インデックスエラー、クロールエラーを迅速に発見・修正
                    </p>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <p className="font-medium">競合分析</p>
                    <p className="text-sm text-muted-foreground">
                      検索クエリの分析で、競合他社との差別化ポイントを発見
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* SEO Analysis Deep Dive */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">SEO分析</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>インデックスエラーの種類と対処法</CardTitle>
                <CardDescription>
                  よくあるインデックスエラーとその解決方法
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 border border-red-200 rounded">
                    <h4 className="font-medium text-red-800">404エラー</h4>
                    <p className="text-sm text-red-700 mb-2">ページが見つからない</p>
                    <ul className="text-xs text-red-600 space-y-1">
                      <li>• リンク切れの修正</li>
                      <li>• 301リダイレクトの設定</li>
                      <li>• サイトマップの更新</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                    <h4 className="font-medium text-yellow-800">サーバーエラー（5xx）</h4>
                    <p className="text-sm text-yellow-700 mb-2">サーバー側の問題</p>
                    <ul className="text-xs text-yellow-600 space-y-1">
                      <li>• サーバーの負荷確認</li>
                      <li>• データベース接続確認</li>
                      <li>• 一時的な問題の場合は再クロール要求</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                    <h4 className="font-medium text-blue-800">リダイレクトエラー</h4>
                    <p className="text-sm text-blue-700 mb-2">リダイレクトの設定問題</p>
                    <ul className="text-xs text-blue-600 space-y-1">
                      <li>• リダイレクトチェーンの確認</li>
                      <li>• 301リダイレクトの適切な設定</li>
                      <li>• 無限リダイレクトの回避</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>クロールエラーの対処法</CardTitle>
                <CardDescription>
                  Googlebotがページをクロールできない問題の解決
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium">robots.txtの問題</h4>
                    <p className="text-sm text-muted-foreground">
                      robots.txtでページがブロックされていないか確認
                    </p>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium">ページの読み込み速度</h4>
                    <p className="text-sm text-muted-foreground">
                      ページが重すぎてタイムアウトしていないか確認
                    </p>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium">JavaScript依存</h4>
                    <p className="text-sm text-muted-foreground">
                      重要なコンテンツがJavaScriptで生成されていないか確認
                    </p>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium">認証が必要なページ</h4>
                    <p className="text-sm text-muted-foreground">
                      ログインが必要なページがクロール対象になっていないか確認
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Reports */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>主要レポートの見方</CardTitle>
              <CardDescription>
                GSCで重要なレポートとその活用方法
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">検索パフォーマンス</h3>
                  <div className="space-y-2">
                    <h4 className="font-medium">確認できる情報:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 検索での表示回数（インプレッション）</li>
                      <li>• クリック数（CTR）</li>
                      <li>• 平均検索順位</li>
                      <li>• 検索クエリ（キーワード）</li>
                    </ul>
                  </div>
                  <div className="mt-3 p-3 bg-muted rounded">
                    <p className="text-sm">
                      <strong>活用例:</strong> どのキーワードで検索されているか、順位が上がっているかを分析
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">ページ</h3>
                  <div className="space-y-2">
                    <h4 className="font-medium">確認できる情報:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• ページ別の検索パフォーマンス</li>
                      <li>• どのページが検索で表示されているか</li>
                      <li>• ページ別のクリック数</li>
                      <li>• ページ別の平均順位</li>
                    </ul>
                  </div>
                  <div className="mt-3 p-3 bg-muted rounded">
                    <p className="text-sm">
                      <strong>活用例:</strong> 人気ページの分析、改善が必要なページの特定
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">サイトマップ</h3>
                  <div className="space-y-2">
                    <h4 className="font-medium">確認できる情報:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 送信したサイトマップの状況</li>
                      <li>• インデックスされたページ数</li>
                      <li>• エラーのあるページ</li>
                      <li>• クロール状況</li>
                    </ul>
                  </div>
                  <div className="mt-3 p-3 bg-muted rounded">
                    <p className="text-sm">
                      <strong>活用例:</strong> 新しいページが正しくインデックスされているか確認
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">カバレッジ</h3>
                  <div className="space-y-2">
                    <h4 className="font-medium">確認できる情報:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 有効なページ数</li>
                      <li>• エラーのあるページ</li>
                      <li>• 警告のあるページ</li>
                      <li>• 除外されたページ</li>
                    </ul>
                  </div>
                  <div className="mt-3 p-3 bg-muted rounded">
                    <p className="text-sm">
                      <strong>活用例:</strong> インデックスエラーの修正、SEO問題の解決
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Search Query Analysis */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>検索クエリ分析</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">検索クエリの分析方法</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">1. 検索パフォーマンスレポートで確認</h4>
                    <p className="text-sm text-muted-foreground">
                      検索パフォーマンス → クエリタブで、サイトに関連する検索クエリを確認
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">2. フィルター機能の活用</h4>
                    <p className="text-sm text-muted-foreground">
                      日付範囲、デバイス、国、検索タイプでフィルタリングして詳細分析
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">3. データのエクスポート</h4>
                    <p className="text-sm text-muted-foreground">
                      詳細な分析のために、データをCSV形式でエクスポート
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">分析後の具体的な行動</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded">
                    <h4 className="font-medium text-green-800 mb-2">高表示・低CTRのクエリ</h4>
                    <p className="text-sm text-green-700 mb-2">表示回数は多いがクリック率が低いキーワード</p>
                    <div className="space-y-2">
                      <h5 className="font-medium text-sm">改善アクション:</h5>
                      <ul className="text-xs text-green-600 space-y-1">
                        <li>• メタタイトルを魅力的に書き換え</li>
                        <li>• メタディスクリプションを改善</li>
                        <li>• ページの内容を検索意図に合わせて調整</li>
                        <li>• 構造化データでリッチスニペットを狙う</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">低順位の重要キーワード</h4>
                    <p className="text-sm text-blue-700 mb-2">ビジネスに重要だが順位が低いキーワード</p>
                    <div className="space-y-2">
                      <h5 className="font-medium text-sm">改善アクション:</h5>
                      <ul className="text-xs text-blue-600 space-y-1">
                        <li>• コンテンツの質と量を向上</li>
                        <li>• 内部リンクを強化</li>
                        <li>• 関連キーワードでコンテンツを拡充</li>
                        <li>• 外部リンクの獲得を検討</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-orange-50 border border-orange-200 rounded">
                    <h4 className="font-medium text-orange-800 mb-2">新規キーワードの発見</h4>
                    <p className="text-sm text-orange-700 mb-2">予想していなかった検索クエリ</p>
                    <div className="space-y-2">
                      <h5 className="font-medium text-sm">改善アクション:</h5>
                      <ul className="text-xs text-orange-600 space-y-1">
                        <li>• 新規コンテンツの企画</li>
                        <li>• 既存ページの最適化</li>
                        <li>• ロングテールキーワードの活用</li>
                        <li>• ユーザーニーズの深掘り</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-purple-50 border border-purple-200 rounded">
                    <h4 className="font-medium text-purple-800 mb-2">競合分析</h4>
                    <p className="text-sm text-purple-700 mb-2">同じキーワードで上位表示されている競合</p>
                    <div className="space-y-2">
                      <h5 className="font-medium text-sm">改善アクション:</h5>
                      <ul className="text-xs text-purple-600 space-y-1">
                        <li>• 競合のコンテンツ分析</li>
                        <li>• 差別化ポイントの明確化</li>
                        <li>• より良いユーザー体験の提供</li>
                        <li>• 独自の価値提案の強化</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">重要な指標の見方</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">表示回数（インプレッション）</h4>
                      <p className="text-sm text-muted-foreground">
                        検索結果に表示された回数。認知度の指標
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">クリック数</h4>
                      <p className="text-sm text-muted-foreground">
                        実際にクリックされた回数。トラフィック獲得の指標
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">CTR（クリック率）</h4>
                      <p className="text-sm text-muted-foreground">
                        クリック数 ÷ 表示回数。タイトルと説明文の魅力度
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">平均順位</h4>
                      <p className="text-sm text-muted-foreground">
                        検索結果での平均的な表示位置。SEO効果の指標
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Core Web Vitals */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Core Web Vitals</CardTitle>
              <CardDescription>
                ユーザー体験の重要な指標とその改善方法
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Core Web Vitalsの3つの指標</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">LCP（Largest Contentful Paint）</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      最大コンテンツの描画時間。ページの読み込み速度を測定
                    </p>
                    <div className="text-sm">
                      <span className="text-green-600">良好: 2.5秒以下</span> | 
                      <span className="text-yellow-600">要改善: 2.5-4.0秒</span> | 
                      <span className="text-red-600">不良: 4.0秒超</span>
                    </div>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">FID（First Input Delay）</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      初回入力遅延。ユーザーの操作に対する応答性を測定
                    </p>
                    <div className="text-sm">
                      <span className="text-green-600">良好: 100ms以下</span> | 
                      <span className="text-yellow-600">要改善: 100-300ms</span> | 
                      <span className="text-red-600">不良: 300ms超</span>
                    </div>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">CLS（Cumulative Layout Shift）</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      累積レイアウトシフト。ページの視覚的安定性を測定
                    </p>
                    <div className="text-sm">
                      <span className="text-green-600">良好: 0.1以下</span> | 
                      <span className="text-yellow-600">要改善: 0.1-0.25</span> | 
                      <span className="text-red-600">不良: 0.25超</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">改善方法</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium mb-2">LCP改善</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 画像の最適化</li>
                      <li>• CDNの活用</li>
                      <li>• サーバー応答時間の短縮</li>
                      <li>• 不要なJavaScriptの削除</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium mb-2">FID改善</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• JavaScriptの最適化</li>
                      <li>• サードパーティスクリプトの最適化</li>
                      <li>• メインスレッドのブロックを削減</li>
                      <li>• コード分割の実装</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium mb-2">CLS改善</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 画像サイズの指定</li>
                      <li>• フォントの最適化</li>
                      <li>• 動的コンテンツの予約領域確保</li>
                      <li>• 広告の適切な配置</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* SEO Improvement */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>SEO改善の実践</CardTitle>
              <CardDescription>
                GSCのデータを活用したSEO改善の具体的な方法
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">改善の優先順位付け</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium">1. 高表示・低CTRのクエリ</h4>
                    <p className="text-sm text-muted-foreground">
                      表示回数は多いがクリック率が低いキーワードのタイトル・説明文を改善
                    </p>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium">2. 低順位の重要キーワード</h4>
                    <p className="text-sm text-muted-foreground">
                      ビジネスに重要なキーワードで順位が低いページのコンテンツを強化
                    </p>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium">3. インデックスエラーの修正</h4>
                    <p className="text-sm text-muted-foreground">
                      カバレッジレポートでエラーページを特定し、迅速に修正
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">リッチスニペットの活用</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">リッチスニペットとは</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      検索結果で通常のタイトル・説明文に加えて、評価、価格、画像などの追加情報が表示される機能
                    </p>
                    <div className="p-3 bg-background rounded border">
                      <h5 className="font-medium text-sm mb-2">例：通常のスニペット</h5>
                      <p className="text-xs text-muted-foreground">
                        「美味しいレストラン - 東京の和食店」<br />
                        https://example.com
                      </p>
                    </div>
                    <div className="p-3 bg-background rounded border mt-2">
                      <h5 className="font-medium text-sm mb-2">例：リッチスニペット</h5>
                      <p className="text-xs text-muted-foreground">
                        「美味しいレストラン - 東京の和食店」 ⭐⭐⭐⭐⭐ 4.8/5<br />
                        💰 予算: 3,000-5,000円 📍 東京都渋谷区<br />
                        https://example.com
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium mb-2">実装方法</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 構造化データ（JSON-LD）を使用</li>
                        <li>• Schema.orgのマークアップ</li>
                        <li>• Googleの構造化データテストツールで確認</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium mb-2">効果</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 検索結果での目立ちやすさ向上</li>
                        <li>• クリック率（CTR）の向上</li>
                        <li>• 信頼性の向上</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">ロングテールキーワードの活用</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">ロングテールキーワードとは</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      3語以上の長いキーワードフレーズ。検索ボリュームは少ないが、競合が少なく、コンバージョン率が高い
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-3 bg-red-50 border border-red-200 rounded">
                        <h5 className="font-medium text-red-800 text-sm mb-2">短いキーワード（競合激しい）</h5>
                        <ul className="text-xs text-red-700 space-y-1">
                          <li>• &quot;レストラン&quot; (月間検索数: 100万)</li>
                          <li>• &quot;東京 レストラン&quot; (月間検索数: 50万)</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-green-50 border border-green-200 rounded">
                        <h5 className="font-medium text-green-800 text-sm mb-2">ロングテールキーワード（競合少ない）</h5>
                        <ul className="text-xs text-green-700 space-y-1">
                          <li>• &quot;東京 渋谷 和食 個室 予約&quot; (月間検索数: 1,000)</li>
                          <li>• &quot;家族連れ 子供 安心 レストラン 渋谷&quot; (月間検索数: 500)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium mb-2">見つけ方</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Google Search Consoleの検索クエリ分析</li>
                        <li>• Google Suggest（検索候補）</li>
                        <li>• 関連検索キーワード</li>
                        <li>• 競合サイトのコンテンツ分析</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium mb-2">活用方法</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• ブログ記事のタイトルに組み込む</li>
                        <li>• メタディスクリプションに含める</li>
                        <li>• 見出し（H2, H3）に使用</li>
                        <li>• 内部リンクのアンカーテキストに使用</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">継続的な改善プロセス</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">週次チェック</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 検索パフォーマンスの確認</li>
                      <li>• 新しいエラーの確認</li>
                      <li>• 重要なキーワードの順位変動</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">月次分析</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• トレンド分析</li>
                      <li>• 競合比較</li>
                      <li>• 改善施策の効果測定</li>
                    </ul>
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
              <CardTitle>GSC活用のベストプラクティス</CardTitle>
              <CardDescription>
                効果的なSEO分析のための実践的なアドバイス
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">データの正確性</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">適切な期間設定</h4>
                      <p className="text-sm text-muted-foreground">
                        短期間の変動に惑わされず、最低3ヶ月のデータで分析
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">フィルターの活用</h4>
                      <p className="text-sm text-muted-foreground">
                        デバイス、国、検索タイプでフィルタリングして詳細分析
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">複数ツールとの連携</h4>
                      <p className="text-sm text-muted-foreground">
                        GA4、Google Analyticsと組み合わせて総合的に分析
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">継続的な改善</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">目標設定</h4>
                      <p className="text-sm text-muted-foreground">
                        明確なSEO目標を設定し、KPIで進捗を測定
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">実験とテスト</h4>
                      <p className="text-sm text-muted-foreground">
                        小さな変更から始めて、効果を測定しながら改善
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">レポート作成</h4>
                      <p className="text-sm text-muted-foreground">
                        定期的なレポート作成で、改善の成果を可視化
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
                GSCの学習を深めるための次のアクション
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">実践的な学習</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 自分のサイトにGSCを設定する</li>
                    <li>• 定期的にレポートを確認する</li>
                    <li>• 検索クエリを分析してコンテンツを改善する</li>
                    <li>• Core Web Vitalsを改善する</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">関連する学習トピック</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Google Analytics 4</li>
                    <li>• Google Tag Manager</li>
                    <li>• SEO基礎</li>
                    <li>• ブログ戦略</li>
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
              <Link href="/learn/google-analytics-4">Google Analytics 4</Link>
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
