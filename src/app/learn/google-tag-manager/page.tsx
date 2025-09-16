import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function GoogleTagManagerPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Google Tag Manager</h1>
              <p className="text-muted-foreground mt-2">
                タグ管理とイベント追跡の効率化
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
              Google Tag Managerとは？
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Google Tag Manager（GTM）は、ウェブサイトのタグ（トラッキングコード）を一元管理するツールです。
              開発者に頼らず、マーケターが直接タグを管理・更新できます。
            </p>
            <div className="flex justify-center gap-2 flex-wrap">
              <Badge variant="secondary">中級</Badge>
              <Badge variant="outline">⏱️ 55分</Badge>
              <Badge variant="outline">🏷️ タグ管理</Badge>
            </div>
          </div>
        </section>

        {/* What is GTM */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>GTMの基本概念</CardTitle>
              <CardDescription>
                Google Tag Managerの仕組みと従来のタグ管理との違い
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">GTMの特徴</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">一元管理</h4>
                    <p className="text-sm text-muted-foreground">
                      複数のタグを一つのコンテナで管理し、効率的に運用
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">非技術者対応</h4>
                    <p className="text-sm text-muted-foreground">
                      開発者に頼らず、マーケターが直接タグを設定・更新
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">バージョン管理</h4>
                    <p className="text-sm text-muted-foreground">
                      タグの変更履歴を管理し、問題発生時に簡単にロールバック
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">プレビュー機能</h4>
                    <p className="text-sm text-muted-foreground">
                      本番環境に影響を与えずに、タグの動作をテスト
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">従来のタグ管理との違い</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-muted rounded">
                    <p className="font-medium">従来: 直接埋め込み</p>
                    <p className="text-sm text-muted-foreground">
                      各タグをHTMLに直接埋め込み。変更時は開発者が必要
                    </p>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <p className="font-medium">GTM: コンテナ経由</p>
                    <p className="text-sm text-muted-foreground">
                      一つのGTMコンテナを埋め込み、タグはGTMで管理
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tracking Deep Dive */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">トラッキング</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>トラッキングコードとは</CardTitle>
                <CardDescription>
                  ユーザーの行動を追跡するためのコードの仕組み
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">トラッキングコードの役割</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• ユーザーの行動を記録</li>
                    <li>• データを分析ツールに送信</li>
                    <li>• コンバージョンを測定</li>
                    <li>• パフォーマンスを監視</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">従来のトラッキングコード</h4>
                  <div className="p-3 bg-muted rounded">
                    <code className="text-sm">
                      &lt;script&gt;<br />
                      &nbsp;&nbsp;gtag(&apos;config&apos;, &apos;GA_MEASUREMENT_ID&apos;);<br />
                      &lt;/script&gt;
                    </code>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    各ツールごとに個別のコードを設置する必要があった
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">GTMでのトラッキングコード</h4>
                  <div className="p-3 bg-muted rounded">
                    <code className="text-sm">
                      &lt;script&gt;<br />
                      &nbsp;&nbsp;(function(w,d,s,l,i){'{'}{'...}'})(window,document,&apos;script&apos;,&apos;dataLayer&apos;,&apos;GTM-XXXXXXX&apos;);<br />
                      &lt;/script&gt;
                    </code>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    一つのコードで複数のツールを管理
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>カスタムHTMLタグ</CardTitle>
                <CardDescription>
                  独自のトラッキングコードを設定する方法
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">カスタムHTMLタグとは</h4>
                  <p className="text-sm text-muted-foreground">
                    GTMで提供されていないツールや独自のトラッキングコードを設定できる機能
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">使用例</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded">
                      <h5 className="font-medium text-sm">Facebook Pixel</h5>
                      <code className="text-xs">
                        &lt;script&gt;<br />
                        &nbsp;&nbsp;fbq(&apos;track&apos;, &apos;PageView&apos;);<br />
                        &lt;/script&gt;
                      </code>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h5 className="font-medium text-sm">カスタムイベント</h5>
                      <code className="text-xs">
                        &lt;script&gt;<br />
                        &nbsp;&nbsp;dataLayer.push({'{'}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&apos;event&apos;: &apos;custom_event&apos;,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&apos;value&apos;: 100<br />
                        &nbsp;&nbsp;{'}'});<br />
                        &lt;/script&gt;
                      </code>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">設定手順</h4>
                  <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                    <li>タグ → 新規 → カスタムHTML</li>
                    <li>HTMLコードを入力</li>
                    <li>トリガーを設定</li>
                    <li>保存して公開</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* GTM Benefits */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>GTMを使うメリット</CardTitle>
              <CardDescription>
                従来のトラッキングコード管理と比較したGTMの利点
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">開発効率の向上</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 border border-green-200 rounded">
                      <h4 className="font-medium text-green-800">GTM使用時</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• マーケターが直接設定可能</li>
                        <li>• 開発者への依頼が不要</li>
                        <li>• 即座に変更を反映</li>
                        <li>• バージョン管理が簡単</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 border border-red-200 rounded">
                      <h4 className="font-medium text-red-800">従来の方法</h4>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• 開発者への依頼が必要</li>
                        <li>• コードの修正・デプロイが必要</li>
                        <li>• 変更に時間がかかる</li>
                        <li>• バージョン管理が複雑</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">具体的なメリット</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">🚀 スピード</h4>
                    <p className="text-sm text-muted-foreground">
                      タグの追加・変更が数分で完了。開発チームを待つ必要がない
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">🔒 安全性</h4>
                    <p className="text-sm text-muted-foreground">
                      プレビューモードでテスト可能。本番環境への影響を最小限に
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">📊 管理性</h4>
                    <p className="text-sm text-muted-foreground">
                      一つの画面で全タグを管理。重複や競合を回避
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">🔄 柔軟性</h4>
                    <p className="text-sm text-muted-foreground">
                      条件に応じたタグの発火。細かい制御が可能
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">👥 協業</h4>
                    <p className="text-sm text-muted-foreground">
                      複数人での管理。権限設定で役割分担
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">📈 スケーラビリティ</h4>
                    <p className="text-sm text-muted-foreground">
                      新しいツールの追加が簡単。成長に合わせて拡張
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">コスト削減効果</h3>
                <div className="p-4 bg-muted rounded">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">開発コストの削減</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 開発者への依頼時間: 80%削減</li>
                        <li>• タグ管理の工数: 90%削減</li>
                        <li>• デバッグ時間: 70%削減</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">運用効率の向上</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• マーケターの自立性向上</li>
                        <li>• 迅速なキャンペーン対応</li>
                        <li>• データの精度向上</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Core Concepts */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>GTMの基本概念</CardTitle>
              <CardDescription>
                タグ、トリガー、変数の3つの基本要素
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">タグ（Tags）</h3>
                  <div className="space-y-2">
                    <h4 className="font-medium">定義:</h4>
                    <p className="text-sm text-muted-foreground">
                      実際に実行されるトラッキングコード
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">例:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Google Analytics 4</li>
                      <li>• Google Ads コンバージョン</li>
                      <li>• Facebook Pixel</li>
                      <li>• カスタムHTML</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">トリガー（Triggers）</h3>
                  <div className="space-y-2">
                    <h4 className="font-medium">定義:</h4>
                    <p className="text-sm text-muted-foreground">
                      タグを発火させる条件
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">例:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• ページビュー</li>
                      <li>• クリック</li>
                      <li>• フォーム送信</li>
                      <li>• スクロール</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">変数（Variables）</h3>
                  <div className="space-y-2">
                    <h4 className="font-medium">定義:</h4>
                    <p className="text-sm text-muted-foreground">
                      タグやトリガーで使用するデータ
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">例:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• ページURL</li>
                      <li>• クリック要素</li>
                      <li>• フォーム値</li>
                      <li>• カスタム値</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-muted rounded">
                <h4 className="font-medium mb-2">GTMの動作フロー</h4>
                <p className="text-sm text-muted-foreground">
                  トリガーが条件を満たす → 変数からデータを取得 → タグが実行される
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Common Tags */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>よく使うタグの設定</CardTitle>
              <CardDescription>
                基本的なタグの設定方法と実用例
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Google Analytics 4タグ</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">設定手順:</h4>
                    <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                      <li>タグ → 新規 → Google Analytics: GA4 設定</li>
                      <li>測定IDを入力（G-XXXXXXXXXX）</li>
                      <li>トリガーを「All Pages」に設定</li>
                      <li>タグ名を「GA4 - Page View」に設定</li>
                      <li>保存</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">カスタムイベントタグ</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">例: フォーム送信イベント</h4>
                    <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                      <li>タグ → 新規 → Google Analytics: GA4 イベント</li>
                      <li>設定タグにGA4設定タグを選択</li>
                      <li>イベント名を「form_submit」に設定</li>
                      <li>トリガーを「Form Submission」に設定</li>
                      <li>タグ名を「GA4 - Form Submit」に設定</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">クリック追跡タグ</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">例: 外部リンククリック</h4>
                    <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                      <li>トリガー → 新規 → クリック - リンク</li>
                      <li>トリガー名を「External Link Click」に設定</li>
                      <li>クリック要素を「a」に設定</li>
                      <li>リンクURLに「(.*)」を設定（すべてのリンク）</li>
                      <li>タグでこのトリガーを使用</li>
                    </ol>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Variables */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>変数の活用</CardTitle>
              <CardDescription>
                データレイヤー変数とビルトイン変数の使い分け
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">ビルトイン変数</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">Page URL</h4>
                      <p className="text-sm text-muted-foreground">
                        現在のページのURL
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">Page Title</h4>
                      <p className="text-sm text-muted-foreground">
                        ページのタイトル
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">Click Element</h4>
                      <p className="text-sm text-muted-foreground">
                        クリックされた要素
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">Click URL</h4>
                      <p className="text-sm text-muted-foreground">
                        クリックされたリンクのURL
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">Form Element</h4>
                      <p className="text-sm text-muted-foreground">
                        フォーム要素
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">Random Number</h4>
                      <p className="text-sm text-muted-foreground">
                        ランダムな数値
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">カスタム変数</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">データレイヤー変数</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      JavaScriptのdataLayerから値を取得
                    </p>
                    <div className="p-3 bg-background rounded border">
                      <code className="text-sm">
                        dataLayer.push({'{'}<br />
                        &nbsp;&nbsp;&apos;event&apos;: &apos;purchase&apos;,<br />
                        &nbsp;&nbsp;&apos;value&apos;: 100,<br />
                        &nbsp;&nbsp;&apos;currency&apos;: &apos;JPY&apos;<br />
                        {'}'});
                      </code>
                    </div>
                  </div>
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">JavaScript変数</h4>
                    <p className="text-sm text-muted-foreground">
                      ページ上のJavaScript変数やDOM要素の値を取得
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Debugging */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>デバッグとテスト</CardTitle>
              <CardDescription>
                GTMのプレビューモードとデバッグ機能の活用
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">プレビューモード</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded">
                    <h4 className="font-medium mb-2">使用方法:</h4>
                    <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                      <li>GTMで「プレビュー」をクリック</li>
                      <li>サイトのURLを入力</li>
                      <li>プレビューウィンドウでサイトを確認</li>
                      <li>左側のパネルでタグの動作を確認</li>
                      <li>問題がないことを確認してから公開</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">デバッグのポイント</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">タグの発火確認</h4>
                      <p className="text-sm text-muted-foreground">
                        トリガーが正しく動作しているか確認
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">変数の値確認</h4>
                      <p className="text-sm text-muted-foreground">
                        変数が期待通りの値を返しているか確認
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">データレイヤー確認</h4>
                      <p className="text-sm text-muted-foreground">
                        ブラウザのコンソールでdataLayerを確認
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">ネットワーク確認</h4>
                      <p className="text-sm text-muted-foreground">
                        開発者ツールでリクエストが正しく送信されているか確認
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">よくある問題と解決方法</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium">タグが発火しない</h4>
                    <p className="text-sm text-muted-foreground">
                      トリガーの条件を確認、プレビューモードでテスト
                    </p>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium">変数が空の値</h4>
                    <p className="text-sm text-muted-foreground">
                      変数の設定を確認、データレイヤーの値を確認
                    </p>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <h4 className="font-medium">重複したタグ</h4>
                    <p className="text-sm text-muted-foreground">
                      既存のタグを削除してからGTMタグを設定
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
              <CardTitle>GTM運用のベストプラクティス</CardTitle>
              <CardDescription>
                効率的で安全なGTM運用のための実践的なアドバイス
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">命名規則</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">タグの命名</h4>
                      <p className="text-sm text-muted-foreground">
                        「GA4 - Page View」「Facebook - Purchase」など、目的が分かる名前にする
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">トリガーの命名</h4>
                      <p className="text-sm text-muted-foreground">
                        「All Pages」「Contact Form Submit」など、条件が分かる名前にする
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">変数の命名</h4>
                      <p className="text-sm text-muted-foreground">
                        「DLV - Purchase Value」「JS - User ID」など、種類が分かる名前にする
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">バージョン管理</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">変更前のバックアップ</h4>
                      <p className="text-sm text-muted-foreground">
                        重要な変更前は必ずバージョンを保存
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">変更履歴の記録</h4>
                      <p className="text-sm text-muted-foreground">
                        バージョン名に変更内容を記録
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">段階的な公開</h4>
                      <p className="text-sm text-muted-foreground">
                        一度に多くの変更をせず、段階的に公開
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">パフォーマンス最適化</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">不要なタグの削除</h4>
                      <p className="text-sm text-muted-foreground">
                        使用していないタグは定期的に削除
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">トリガーの最適化</h4>
                      <p className="text-sm text-muted-foreground">
                        必要最小限の条件でトリガーを設定
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">非同期読み込み</h4>
                      <p className="text-sm text-muted-foreground">
                        GTMは非同期で読み込まれるため、ページ速度に影響しにくい
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded">
                      <h4 className="font-medium">条件付き読み込み</h4>
                      <p className="text-sm text-muted-foreground">
                        必要なページでのみタグを読み込むよう設定
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
                GTMの学習を深めるための次のアクション
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">実践的な学習</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 自分のサイトにGTMを導入する</li>
                    <li>• 基本的なタグを設定する</li>
                    <li>• カスタムイベントを実装する</li>
                    <li>• プレビューモードでテストする</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">関連する学習トピック</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Google Analytics 4</li>
                    <li>• Google Search Console</li>
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
              <Link href="/learn/google-analytics-4">Google Analytics 4</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/learn/google-search-console">Google Search Console</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
